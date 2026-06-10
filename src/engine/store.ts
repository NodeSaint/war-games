import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Metrics, Node, Option, PathStep, Scenario, Ending } from './types'
import { applyEffects } from './metrics'
import { resolveEnding, tallyStyleTags } from './endings'
import { getScenario } from '@/scenarios'

type View = 'briefing' | 'deciding' | 'reviewing' | 'ended'

interface SessionState {
  scenarioId: string | null
  view: View
  metrics: Metrics
  currentNodeId: string | null
  path: PathStep[]
  /** The step just taken — shown on the review screen before advancing. */
  lastStep: PathStep | null
  ending: Ending | null

  // actions
  start: (scenario: Scenario) => void
  choose: (option: Option, rationale: string | undefined) => void
  advance: () => void
  abandon: () => void
}

const EMPTY_METRICS: Metrics = {
  escalation: 0,
  cohesion: 0,
  domestic: 0,
  credibility: 0,
  forcesRisk: 0,
  attribution: 0,
}

export const useSession = create<SessionState>()(
  persist(
    (set, get) => ({
      scenarioId: null,
      view: 'briefing',
      metrics: EMPTY_METRICS,
      currentNodeId: null,
      path: [],
      lastStep: null,
      ending: null,

      start: (scenario) =>
        set({
          scenarioId: scenario.id,
          view: 'deciding',
          metrics: { ...scenario.metricsInit },
          currentNodeId: scenario.startNodeId,
          path: [],
          lastStep: null,
          ending: null,
        }),

      choose: (option, rationale) => {
        const state = get()
        const scenario = state.scenarioId ? getScenario(state.scenarioId) : null
        const node = scenario && getNode(scenario, state.currentNodeId)
        if (!scenario || !node || !node.decision) return

        const metricsAfter = applyEffects(state.metrics, option.effects)
        const step: PathStep = {
          nodeId: node.id,
          phase: node.phase,
          phaseLabel: node.phaseLabel,
          nodeTitle: node.title,
          prompt: node.decision.prompt,
          optionId: option.id,
          optionLabel: option.label,
          consequence: option.consequence,
          styleTags: option.styleTags,
          effects: option.effects,
          rationale: rationale?.trim() ? rationale.trim() : undefined,
          metricsAfter,
        }
        set({
          metrics: metricsAfter,
          path: [...state.path, step],
          lastStep: step,
          view: 'reviewing',
        })
      },

      advance: () => {
        const state = get()
        const scenario = state.scenarioId ? getScenario(state.scenarioId) : null
        const last = state.lastStep
        if (!scenario || !last) return

        const option = findOption(scenario, last.nodeId, last.optionId)
        const nextId = option?.next ?? null
        const nextNode = nextId ? getNode(scenario, nextId) : null

        // Route to the ending resolver when an option points nowhere or lands on
        // a terminal node.
        if (!nextNode || nextNode.terminal) {
          const ending = resolveEnding(
            state.metrics,
            tallyStyleTags(state.path),
            state.path,
          )
          set({
            view: 'ended',
            ending,
            currentNodeId: nextNode?.id ?? state.currentNodeId,
          })
          return
        }

        set({ currentNodeId: nextNode.id, view: 'deciding', lastStep: null })
      },

      abandon: () =>
        set({
          scenarioId: null,
          view: 'briefing',
          metrics: EMPTY_METRICS,
          currentNodeId: null,
          path: [],
          lastStep: null,
          ending: null,
        }),
    }),
    {
      name: 'war-games:session',
      version: 1,
      // Persist only the runtime; the scenario object is rehydrated from the
      // registry by id so content edits never go stale in storage.
      partialize: (s) => ({
        scenarioId: s.scenarioId,
        view: s.view,
        metrics: s.metrics,
        currentNodeId: s.currentNodeId,
        path: s.path,
        lastStep: s.lastStep,
        ending: s.ending,
      }),
    },
  ),
)

export function getNode(scenario: Scenario, id: string | null): Node | null {
  if (!id) return null
  return scenario.nodes.find((n) => n.id === id) ?? null
}

function findOption(
  scenario: Scenario,
  nodeId: string,
  optionId: string,
): Option | null {
  const node = getNode(scenario, nodeId)
  return node?.decision?.options.find((o) => o.id === optionId) ?? null
}
