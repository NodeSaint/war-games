/**
 * War Games scenario schema — the contract between scenario data and the engine.
 *
 * Scenarios are DATA, not code. Anything in this file is the only vocabulary an
 * author needs. The engine renders any object conforming to `Scenario`; adding a
 * new war game means adding a data file, never touching the engine. See SCHEMA.md.
 */

/** The six tracked dimensions of strategic state. Each runs 0–100. */
export type MetricId =
  | 'escalation' // lower = more controlled; too low can read as weakness
  | 'cohesion' // alliance cohesion
  | 'domestic' // domestic / public support
  | 'credibility' // resolve & deterrence signalled
  | 'forcesRisk' // exposure of own/allied forces & civilians
  | 'attribution' // confidence in who did what — the centrepiece dimension

export type Metrics = Record<MetricId, number>

export type Difficulty = 'Introductory' | 'Intermediate' | 'Advanced'

/** Authored critique attached to a single option — the offline pedagogical core. */
export interface Critique {
  /** What is genuinely strong about taking this path. */
  strengths: string[]
  /** The real costs, exposures, or failure modes. */
  risks: string[]
  /** Why a competent decision-maker might still choose this — the steelman. */
  whyChosen: string
  /** A doctrinal / theoretical note grounding the choice in War Studies concepts. */
  doctrine: string
}

export interface Option {
  id: string
  label: string
  /** What happens immediately as a result of this choice. */
  consequence: string
  critique: Critique
  /** Signed deltas applied to metrics (clamped 0–100). Omitted metrics are unchanged. */
  effects: Partial<Metrics>
  /** Decision-style tags aggregated across a playthrough to profile the player. */
  styleTags: string[]
  /** Next node id, or null to route into the state-driven ending resolver. */
  next: string | null
}

export interface Node {
  id: string
  /** 1-based phase number — drives the phase tracker. */
  phase: number
  /** Short label for the phase, e.g. "PHASE 2 · CONSULTATION". */
  phaseLabel: string
  title: string
  /** The scene-setting prose shown above the decision. */
  narrative: string
  /** Present on decision nodes; absent on terminal nodes. */
  decision?: { prompt: string; options: Option[] }
  /** True on nodes that end the scenario and route to the ending resolver. */
  terminal?: boolean
}

export interface Scenario {
  id: string
  codename: string
  domain: string
  /** One-line real-world basis shown on the dossier card and briefing. */
  basis: string
  difficulty: Difficulty
  estPhases: number
  role: string
  /** Briefing prose. */
  brief: string
  objectives: string[]
  metricsInit: Metrics
  startNodeId: string
  nodes: Node[]
}

// ── Ending resolution ───────────────────────────────────────────────────────

export type EndingArchetypeId =
  | 'doctrine-win'
  | 'uneasy-standdown'
  | 'escalation-spiral'
  | 'strategic-own-goal'
  | 'pyrrhic-resolve'

export interface Ending {
  id: EndingArchetypeId
  title: string
  /** One-line verdict shown as the headline. */
  verdict: string
  /** Longer narrative resolution. */
  narrative: string
  /** Tone hint for styling the debrief banner. */
  tone: 'good' | 'mixed' | 'bad'
}

// ── Runtime session state ───────────────────────────────────────────────────

/** A single recorded decision in the player's path. */
export interface PathStep {
  nodeId: string
  phase: number
  phaseLabel: string
  nodeTitle: string
  prompt: string
  optionId: string
  optionLabel: string
  consequence: string
  styleTags: string[]
  effects: Partial<Metrics>
  /** The player's optional free-text reasoning at this decision. */
  rationale?: string
  /** Metric snapshot immediately after this decision. */
  metricsAfter: Metrics
}
