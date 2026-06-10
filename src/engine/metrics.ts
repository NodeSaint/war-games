import type { MetricId, Metrics } from './types'

export type SignalLevel = 'good' | 'fair' | 'warn' | 'high' | 'crit'

export interface MetricMeta {
  id: MetricId
  label: string
  abbr: string
  /** Short description shown in tooltips / briefing. */
  description: string
  /**
   * Polarity of the dimension:
   *  'high-good'  → a high value is healthy (cohesion, domestic, credibility, attribution)
   *  'low-good'   → a low value is healthy (escalation, forcesRisk)
   */
  polarity: 'high-good' | 'low-good'
}

/** Display order matters: attribution sits last as the centrepiece gauge. */
export const METRIC_META: Record<MetricId, MetricMeta> = {
  escalation: {
    id: 'escalation',
    label: 'Escalation',
    abbr: 'ESC',
    description:
      'How far the crisis has climbed the ladder. Lower is more controlled — but signalling too little resolve can read as weakness.',
    polarity: 'low-good',
  },
  cohesion: {
    id: 'cohesion',
    label: 'Alliance Cohesion',
    abbr: 'COH',
    description:
      'How aligned your allies are behind a common position. Decoupling here is how adversaries win without firing.',
    polarity: 'high-good',
  },
  domestic: {
    id: 'domestic',
    label: 'Domestic Support',
    abbr: 'DOM',
    description:
      'Public and political backing at home. Audience costs constrain what you can credibly walk back.',
    polarity: 'high-good',
  },
  credibility: {
    id: 'credibility',
    label: 'Credibility',
    abbr: 'CRD',
    description:
      'The resolve and deterrence you have signalled. Spent unwisely it is hard to rebuild; bluffed and called, it collapses.',
    polarity: 'high-good',
  },
  forcesRisk: {
    id: 'forcesRisk',
    label: 'Forces & Civilian Risk',
    abbr: 'RSK',
    description:
      'Exposure of your own and allied forces, and of civilians, to harm. Lower is safer.',
    polarity: 'low-good',
  },
  attribution: {
    id: 'attribution',
    label: 'Attribution Confidence',
    abbr: 'ATT',
    description:
      'How confident you can be about who did what, and why. The whole exercise is deciding before this is high enough.',
    polarity: 'high-good',
  },
}

export const METRIC_ORDER: MetricId[] = [
  'attribution',
  'escalation',
  'credibility',
  'cohesion',
  'domestic',
  'forcesRisk',
]

export const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)))

/** Apply signed effect deltas to a metric set, clamped to 0–100. Pure. */
export function applyEffects(
  metrics: Metrics,
  effects: Partial<Metrics>,
): Metrics {
  const next = { ...metrics }
  for (const key of Object.keys(effects) as MetricId[]) {
    next[key] = clamp(metrics[key] + (effects[key] ?? 0))
  }
  return next
}

/**
 * Classify a metric's current value into a signal level for colour, accounting
 * for polarity so that "healthy" is always green regardless of direction.
 */
export function signalLevel(id: MetricId, value: number): SignalLevel {
  const healthy = METRIC_META[id].polarity === 'high-good' ? value : 100 - value
  if (healthy >= 75) return 'good'
  if (healthy >= 55) return 'fair'
  if (healthy >= 40) return 'warn'
  if (healthy >= 22) return 'high'
  return 'crit'
}

export const SIGNAL_COLOR_VAR: Record<SignalLevel, string> = {
  good: 'var(--signal-good)',
  fair: 'var(--signal-fair)',
  warn: 'var(--signal-warn)',
  high: 'var(--signal-high)',
  crit: 'var(--signal-crit)',
}
