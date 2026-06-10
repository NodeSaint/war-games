import type { Metrics, MetricId, PathStep, Scenario } from './types'
import { METRIC_META, signalLevel } from './metrics'
import type { AxisReading } from './profile'
import { getNode } from './store'

/** Plain-language reads of a strong / weak final value for each dimension. */
const STRONG: Record<MetricId, string> = {
  attribution: 'You concluded the crisis with a sound evidential basis for your decisions, rather than acting on supposition.',
  escalation: 'You kept the crisis low on the escalation ladder; events did not outrun your capacity to decide.',
  credibility: 'Your resolve and your word still carry weight — you signalled deterrence without bluffing it away.',
  cohesion: 'The alliance finished more united than it started; you denied the adversary its cheapest win, decoupling.',
  domestic: 'You carried your public with you, preserving the political room to manoeuvre that audience costs usually erode.',
  forcesRisk: 'You kept forces and civilians out of unnecessary danger; exposure stayed disciplined throughout.',
}

const WEAK: Record<MetricId, string> = {
  attribution: 'You never firmly established who did what — much of the crisis was decided on a picture you could not confirm.',
  escalation: 'The crisis climbed dangerously high; control of the escalation ladder slipped away from you.',
  credibility: 'Your credibility took heavy damage — claims made and not borne out, or resolve spent unwisely, will cost you next time.',
  cohesion: 'The alliance fractured under pressure; the adversary found the seams and worked them.',
  domestic: 'You lost your domestic audience, narrowing the options you could credibly pursue or walk back.',
  forcesRisk: 'You left forces and civilians badly exposed; the risk you ran was higher than the situation required.',
}

export interface DebriefInsights {
  strengths: string[]
  blindSpots: string[]
}

/** Derive strengths and blind spots from the final state and decision profile. */
export function deriveInsights(
  metrics: Metrics,
  axes: AxisReading[],
): DebriefInsights {
  const ids = Object.keys(metrics) as MetricId[]
  const strengths: string[] = []
  const blindSpots: string[] = []

  // Healthiest two dimensions → strengths; least healthy two → blind spots.
  const ranked = ids
    .map((id) => ({ id, level: signalLevel(id, metrics[id]) }))
    .sort((a, b) => HEALTH_RANK[b.level] - HEALTH_RANK[a.level])

  for (const { id, level } of ranked.slice(0, 2)) {
    if (HEALTH_RANK[level] >= HEALTH_RANK.fair) strengths.push(STRONG[id])
  }
  for (const { id, level } of ranked.slice(-2)) {
    if (HEALTH_RANK[level] <= HEALTH_RANK.warn) blindSpots.push(WEAK[id])
  }

  // A pronounced behavioural lean is worth flagging as a watch-item.
  const pronounced = axes.find((a) => a.strength === 'pronounced')
  if (pronounced) {
    blindSpots.push(
      `Your ${pronounced.leaning.toLowerCase()} habit was pronounced and consistent. A strong tendency is an asset when it fits the problem and a blind spot when the problem changes — watch for the situation that rewards the opposite instinct.`,
    )
  }

  if (strengths.length === 0) {
    strengths.push(
      'No single instrument finished in a commanding position, but you kept several in play at once — a balanced, if unspectacular, hand.',
    )
  }

  return { strengths, blindSpots }
}

const HEALTH_RANK: Record<string, number> = {
  good: 4,
  fair: 3,
  warn: 2,
  high: 1,
  crit: 0,
}

export interface Juncture {
  step: PathStep
  altLabels: string[]
}

/**
 * Pick the most consequential decisions (largest absolute swing across metrics)
 * and surface the roads not taken at each, for the "what else could you have
 * done" section.
 */
export function pickKeyJunctures(
  scenario: Scenario,
  path: PathStep[],
  count = 2,
): Juncture[] {
  const scored = path.map((step) => {
    const swing = Object.values(step.effects).reduce(
      (s, v) => s + Math.abs(v ?? 0),
      0,
    )
    return { step, swing }
  })
  return scored
    .sort((a, b) => b.swing - a.swing)
    .slice(0, count)
    .sort((a, b) => a.step.phase - b.step.phase)
    .map(({ step }) => {
      const node = getNode(scenario, step.nodeId)
      const altLabels =
        node?.decision?.options
          .filter((o) => o.id !== step.optionId)
          .map((o) => o.label) ?? []
      return { step, altLabels }
    })
}

export const METRIC_LABEL = (id: MetricId) => METRIC_META[id].label
