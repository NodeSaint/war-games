import type { Ending, Metrics, PathStep } from './types'

export type StyleTagTally = Record<string, number>

/**
 * Classify the outcome from the FINAL STATE, not the last click. Two players who
 * reach the same final phase by different routes diverge here because their
 * metrics, style and path differ. Threshold logic over the six dimensions picks
 * an archetype; style and path add colour to the narrative.
 */
export function resolveEnding(
  m: Metrics,
  _tally: StyleTagTally,
  _path: PathStep[],
): Ending {
  const standing = (m.credibility + m.cohesion + m.domestic) / 3
  const dangerous = m.escalation >= 68 || m.forcesRisk >= 70
  const heldFirm = m.credibility >= 55 && m.cohesion >= 45
  const decoupled = m.cohesion < 40 || m.credibility < 35 || m.domestic < 35

  if (dangerous && heldFirm) {
    return {
      id: 'pyrrhic-resolve',
      title: 'Pyrrhic Resolve',
      verdict:
        'Deterrence held, but near the ceiling of the escalation ladder and with forces heavily exposed.',
      tone: 'mixed',
      narrative:
        'The adversary ultimately declined to escalate further, and your resolve was not in ' +
        'question. That outcome was secured, however, close to the top of the escalation ladder, ' +
        'with own and allied forces — and civilians — exposed well beyond what deliberate ' +
        'planning would have accepted. Deterrence held on this occasion. The open question is ' +
        'whether the same approach, repeated, would reliably stop short of an exchange that ' +
        'neither side intended.',
    }
  }

  if (dangerous) {
    return {
      id: 'escalation-spiral',
      title: 'Escalation Spiral',
      verdict:
        'Escalation outran decision; control passed to the dynamics of the crisis rather than its participants.',
      tone: 'bad',
      narrative:
        'Each step was defensible in isolation, but in combination they compressed the time ' +
        'available for judgement until the crisis, rather than its participants, set the tempo. ' +
        'Signals were read as threats and threats as intent, and successive off-ramps closed. ' +
        'This is the established pattern of inadvertent escalation: not a decision for war, but ' +
        'an accumulation of individually reasonable steps taken under a contracting decision ' +
        'window.',
    }
  }

  if (standing >= 62 && m.escalation <= 46 && m.forcesRisk <= 52) {
    return {
      id: 'doctrine-win',
      title: 'Crisis Contained',
      verdict: 'Escalation controlled, the alliance intact, deterrence credible.',
      tone: 'good',
      narrative:
        'You contained the crisis without resort to force. The alliance maintained a common ' +
        'position, your resolve was legible to the adversary, and you declined the options that ' +
        'would have appeared resolute in the moment but proved difficult to defend on review. ' +
        'Notably, you matched tempo to confidence, declining to let machine-speed events compel ' +
        'action ahead of understanding. This is escalation control functioning as intended: ' +
        'unspectacular, and demanding to execute.',
    }
  }

  if (decoupled) {
    return {
      id: 'strategic-own-goal',
      title: 'Strategic Reversal',
      verdict: 'Armed conflict was avoided; the strategic contest was nonetheless lost.',
      tone: 'bad',
      narrative:
        'There was no meaningful escalation, yet the adversary secured its objective. Restraint ' +
        'was read by others as capitulation: an ally hedged, domestic confidence eroded, or the ' +
        'deterrent was expended so cheaply that it no longer persuades. This is the quieter form ' +
        'of defeat the literature identifies. Restraint and weakness can be indistinguishable ' +
        'from the outside; what separates them is whether others still judge that you would act. ' +
        'On the present evidence, they do not.',
    }
  }

  return {
    id: 'uneasy-standdown',
    title: 'Uneasy Stand-down',
    verdict: 'The immediate crisis passed without resolution of the underlying dispute.',
    tone: 'mixed',
    narrative:
      'The acute danger has receded, but the underlying dispute is untouched and several of ' +
      'your instruments are more degraded than at the outset. ' +
      (m.attribution < 50
        ? 'Responsibility was not established to a standard that would settle argument, and that ' +
          'ambiguity will be contested well after the episode leaves the headlines. '
        : 'The record of events is now reasonably clear, which will matter through the period of ' +
          'recrimination that follows. ') +
      'This is a stand-down rather than a settlement; the matter remains open.',
  }
}

/** Tally style tags across the path for profiling. */
export function tallyStyleTags(path: PathStep[]): StyleTagTally {
  const tally: StyleTagTally = {}
  for (const step of path) {
    for (const tag of step.styleTags) {
      tally[tag] = (tally[tag] ?? 0) + 1
    }
  }
  return tally
}
