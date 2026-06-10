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
      verdict: 'You held the line — but the bill came due in blood and risk.',
      tone: 'mixed',
      narrative:
        'The adversary blinked, and your resolve was never in doubt. Yet you bought that ' +
        'credibility at the top of the escalation ladder, with forces and civilians exposed ' +
        'further than any planner would have chosen in the cold light of the briefing room. ' +
        'Deterrence held this time. The uncomfortable question your successors will ask is ' +
        'whether the same hand, played again, ends with the shooting starting before anyone ' +
        'means it to.',
    }
  }

  if (dangerous) {
    return {
      id: 'escalation-spiral',
      title: 'Escalation Spiral',
      verdict: 'The ladder climbed itself. Control slipped faster than decisions could be made.',
      tone: 'bad',
      narrative:
        'Each move was defensible in isolation; together they compressed the time for ' +
        'judgement until the crisis was setting your tempo rather than the other way round. ' +
        'Signals were read as threats, threats as intent, and the off-ramps closed one by one. ' +
        'This is how wars begin that nobody in the room actually wanted — not by decision, but ' +
        'by the accumulation of reasonable-sounding steps under a shrinking clock.',
    }
  }

  if (standing >= 62 && m.escalation <= 46 && m.forcesRisk <= 52) {
    return {
      id: 'doctrine-win',
      title: 'Crisis Contained',
      verdict: 'Escalation controlled, the alliance intact, deterrence credible. A clean hand.',
      tone: 'good',
      narrative:
        'You bought time without buying war. The alliance spoke with one voice, your resolve ' +
        'was legible to the other side, and you declined the moves that would have felt strong ' +
        'in the moment and looked reckless in the inquiry. Crucially you matched your tempo to ' +
        'your confidence: you did not let machine-speed events stampede you into acting before ' +
        'you understood them. This is what escalation control looks like when it works — ' +
        'quiet, unglamorous, and very hard to do.',
    }
  }

  if (decoupled) {
    return {
      id: 'strategic-own-goal',
      title: 'Strategic Own-Goal',
      verdict: 'You avoided the war and lost the contest anyway.',
      tone: 'bad',
      narrative:
        'No shots that mattered, no escalation to speak of — and yet the adversary achieved ' +
        'its aim. Caution curdled into capitulation in the reading of others: an ally hedged, ' +
        'your public lost faith, or your deterrent was spent so cheaply that no one believes it ' +
        'now. This is the quieter defeat the textbooks warn about. Restraint and weakness can ' +
        'look identical from the outside; what separates them is whether anyone still believes ' +
        'you would act. They no longer do.',
    }
  }

  return {
    id: 'uneasy-standdown',
    title: 'Uneasy Stand-down',
    verdict: 'The crisis passed. Nobody is sure it is over, and nobody is satisfied.',
    tone: 'mixed',
    narrative:
      'You got through it. The immediate danger has receded, but the underlying dispute is ' +
      'untouched and several of your instruments are more worn than when you started. ' +
      (m.attribution < 50
        ? 'You never did establish, beyond argument, who did what — and that ambiguity will be ' +
          'litigated long after the headlines move on. '
        : 'At least the record of what happened is now reasonably clear, which will matter in ' +
          'the months of recrimination ahead. ') +
      'A stand-down, not a settlement. The file stays open.',
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
