import type { StyleTagTally } from './endings'

/**
 * The decision-making profile aggregates authored style tags into four spectrums.
 * Authors tag each option with one or more canonical tags (see SCHEMA.md); the
 * debrief reads the player's lean on each axis. Tags not listed here still surface
 * in strengths / blind spots but do not move an axis.
 */
export interface ProfileAxis {
  id: string
  /** The two opposing tendencies; `negTags` pull left, `posTags` pull right. */
  negLabel: string
  posLabel: string
  negTags: string[]
  posTags: string[]
}

export const PROFILE_AXES: ProfileAxis[] = [
  {
    id: 'posture',
    negLabel: 'Restraint-oriented',
    posLabel: 'Escalation-prone',
    negTags: ['de-escalatory', 'restraint', 'off-ramp', 'reassurance'],
    posTags: ['escalatory', 'forceful', 'coercive', 'brinkmanship'],
  },
  {
    id: 'alliance',
    negLabel: 'Alliance-first',
    posLabel: 'Unilateral',
    negTags: ['multilateral', 'consultative', 'alliance-first', 'burden-sharing'],
    posTags: ['unilateral', 'go-it-alone', 'sovereign-action'],
  },
  {
    id: 'epistemics',
    negLabel: 'Evidence-first',
    posLabel: 'Decisive under ambiguity',
    negTags: ['evidence-seeking', 'verify-first', 'deliberate', 'legalistic'],
    posTags: ['decisive', 'tempo', 'act-on-instinct', 'pre-emptive'],
  },
  {
    id: 'autonomy',
    negLabel: 'Human-in-the-loop',
    posLabel: 'Delegates to autonomy',
    negTags: ['human-in-loop', 'keep-control', 'manual-override', 'caution-tech'],
    posTags: ['delegate-autonomy', 'machine-speed', 'automation-trust'],
  },
]

export interface AxisReading {
  id: string
  /** The dominant tendency label for this player. */
  leaning: string
  /** Opposing label, for context. */
  counterpoint: string
  /** -1 (fully neg) … +1 (fully pos). */
  score: number
  strength: 'balanced' | 'moderate' | 'pronounced'
  /** A sentence describing what this lean meant in play. */
  summary: string
}

const AXIS_SUMMARY: Record<string, (leaning: string) => string> = {
  posture: (l) =>
    l === 'Escalation-prone'
      ? 'You reached for pressure and resolve, trusting that strength deters more than it provokes.'
      : 'You consistently sought the off-ramp, prizing control of the ladder over the satisfaction of a firm reply.',
  alliance: (l) =>
    l === 'Unilateral'
      ? 'You were willing to move without waiting for consensus — faster, but lonelier if it goes wrong.'
      : 'You treated allied cohesion as a centre of gravity, rarely acting before the coalition could move together.',
  epistemics: (l) =>
    l === 'Decisive under ambiguity'
      ? 'You acted before the picture was complete, accepting the risk of being wrong to avoid the risk of being slow.'
      : 'You bought down uncertainty before committing, accepting the risk of being slow to avoid the risk of being wrong.',
  autonomy: (l) =>
    l === 'Delegates to autonomy'
      ? 'You let automated systems and machine tempo carry decisions, trusting the loop more than the lag of human review.'
      : 'You kept a human hand on the critical decisions, distrusting machine speed where the stakes were irreversible.',
}

export function computeProfile(tally: StyleTagTally): AxisReading[] {
  return PROFILE_AXES.map((axis) => {
    const neg = axis.negTags.reduce((s, t) => s + (tally[t] ?? 0), 0)
    const pos = axis.posTags.reduce((s, t) => s + (tally[t] ?? 0), 0)
    const total = neg + pos
    const score = total === 0 ? 0 : (pos - neg) / total
    const leaning = score >= 0 ? axis.posLabel : axis.negLabel
    const counterpoint = score >= 0 ? axis.negLabel : axis.posLabel
    const mag = Math.abs(score)
    const strength: AxisReading['strength'] =
      total === 0 || mag < 0.2 ? 'balanced' : mag < 0.6 ? 'moderate' : 'pronounced'
    return {
      id: axis.id,
      leaning: strength === 'balanced' ? 'Balanced' : leaning,
      counterpoint,
      score,
      strength,
      summary:
        strength === 'balanced'
          ? `You held the middle of the ${axis.negLabel} / ${axis.posLabel} spectrum, varying your approach by situation rather than by habit.`
          : AXIS_SUMMARY[axis.id](leaning),
    }
  })
}
