import type { Scenario } from '@/engine/types'

/**
 * NIGHT CROSSING — a short (2-phase) introductory exercise. An uncrewed swarm of
 * unknown origin crosses a land border at night and you, the sector duty
 * commander, must decide in minutes whether it is a threat. Fictional throughout.
 *
 * Demonstrates the catalogue's varying length: branch at P1 into an "engaged" and
 * a "restraint" aftermath, each resolving to a state-driven ending.
 */
export const nightCrossing: Scenario = {
  id: 'night-crossing',
  codename: 'NIGHT CROSSING',
  domain: 'Uncrewed Systems / Border ROE',
  basis: 'Rules of engagement against ambiguous uncrewed incursions under time pressure.',
  difficulty: 'Introductory',
  estPhases: 2,
  role: 'Sector Duty Commander on the eastern frontier of Verlandia',
  brief:
    'It is 0314. Acoustic and radar sensors along the frontier have picked up a swarm of small ' +
    'uncrewed aircraft — between twelve and twenty, flying low and slow — crossing from the ' +
    'Federation side into your sector. They are not squawking. They could be a reconnaissance ' +
    'probe, a smuggling run, a deliberate provocation, or the first move of something worse. Your ' +
    'air-defence section is awake and asking for orders. The nearest town is fifteen kilometres ' +
    'on. You have minutes, not hours.',
  objectives: [
    'Decide a proportionate response to an ambiguous incursion.',
    'Weigh the cost of being wrong in either direction.',
    'Keep the decision at the right level — yours, a machine’s, or your capital’s.',
  ],
  metricsInit: {
    escalation: 24,
    cohesion: 54,
    domestic: 50,
    credibility: 48,
    forcesRisk: 34,
    attribution: 26,
  },
  startNodeId: 'p1-crossing',
  nodes: [
    {
      id: 'p1-crossing',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE CROSSING',
      title: 'Contacts, low and slow',
      narrative:
        'The plot fills with small returns. Your air-defence officer wants a weapons-free order; ' +
        'the standing automated counter-UAS system reports it can engage the whole swarm in one ' +
        'pass if you let it act on its own logic. You do not know whose drones these are, what ' +
        'they carry, or what they are for. Whatever you decide, you will have to defend it in ' +
        'daylight.',
      decision: {
        prompt: 'The swarm is inbound and unidentified. What is your order?',
        options: [
          {
            id: 'engage',
            label: 'Weapons free — engage and destroy the swarm now.',
            consequence:
              'Your section opens up. Most of the swarm comes down in fields short of the town. ' +
              'The frontier is loud for ninety seconds, then silent. You have removed the threat — ' +
              'and committed to whatever those drones turn out to have been.',
            critique: {
              strengths: [
                'Removes any chance the swarm was armed and bound for the town.',
                'Demonstrates that incursions will be met, not waved through.',
              ],
              risks: [
                'If the drones were unarmed — reconnaissance or even civilian — you have fired first on an ambiguous target.',
                'You have set the escalation floor with no idea what you were shooting at.',
              ],
              whyChosen:
                'A commander whose first duty is the town behind them will not gamble its safety on ' +
                'the hope that an unidentified swarm is harmless.',
              doctrine:
                'Rules of engagement under ambiguity: the bias toward force when civilian lives are ' +
                'plausibly at stake, and the price of acting before identification.',
            },
            effects: { escalation: 14, forcesRisk: -6, credibility: 8, attribution: -4 },
            styleTags: ['escalatory', 'decisive', 'forceful', 'act-on-instinct'],
            next: 'p2-engaged',
          },
          {
            id: 'auto-engage',
            label: 'Release the automated counter-UAS system to engage on its own logic.',
            consequence:
              'You authorise the system. It engages the swarm in a single coordinated pass faster ' +
              'than your section could have, downing nearly all of it. It also engaged two contacts ' +
              'your officer had flagged as possible decoys — you will never be sure they were.',
            critique: {
              strengths: [
                'Fastest possible response; defeats a saturation swarm that might overwhelm manual fires.',
                'Keeps your crews out of a rushed, high-pressure engagement.',
              ],
              risks: [
                'You delegated the first-shot decision to logic you cannot interrogate in the moment.',
                'A machine’s classification errors become your firing decisions.',
              ],
              whyChosen:
                'Against a swarm built to saturate human reaction time, matching machine speed can ' +
                'be the only way to defend the line at all.',
              doctrine:
                'Automation in air defence and the speed/control trade-off: swarms are designed to ' +
                'defeat human tempo, which is exactly why delegating to autonomy is tempting and dangerous.',
            },
            effects: { escalation: 12, forcesRisk: -4, credibility: 6, attribution: -8 },
            styleTags: ['delegate-autonomy', 'machine-speed', 'escalatory', 'tempo'],
            next: 'p2-engaged',
          },
          {
            id: 'track-jam',
            label: 'Hold fire — track and jam, force them down or out, and wake your capital.',
            consequence:
              'You order electronic attack rather than fires. Several drones drop or veer; the rest ' +
              'mill, then turn back across the frontier. You have the tracks, some downed airframes ' +
              'intact for forensics, and a call already going to the capital. No one was killed.',
            critique: {
              strengths: [
                'Defeats the incursion without firing first on an unidentified target.',
                'Recovers intact drones — the fastest route to actual attribution.',
              ],
              risks: [
                'Jamming may not stop a determined or hardened swarm in time.',
                'Restraint can read as hesitation if the swarm was in fact an attack.',
              ],
              whyChosen:
                'A commander who fears firing on the wrong target as much as missing the right one ' +
                'reaches for the option that buys information without bodies.',
              doctrine:
                'Non-kinetic counter-UAS and meaningful human control: defeating a threat while ' +
                'preserving evidence and keeping the irreversible decision in human hands.',
            },
            effects: { escalation: -4, attribution: 14, forcesRisk: -2, credibility: -2, cohesion: 4 },
            styleTags: ['restraint', 'human-in-loop', 'evidence-seeking', 'manual-override'],
            next: 'p2-restraint',
          },
          {
            id: 'observe',
            label: 'Do not engage at all — observe, record everything, and route to capitals for orders.',
            consequence:
              'You hold completely. The swarm overflies two of your sites in a deliberate pattern, ' +
              'loiters, and departs the way it came. You have a flawless intelligence picture of ' +
              'what they wanted to see — and the uncomfortable fact that you let them see it.',
            critique: {
              strengths: [
                'Maximum information at zero risk of firing on a civilian or friendly target.',
                'Keeps the decision to escalate firmly above your level, where it may belong.',
              ],
              risks: [
                'You allowed a foreign system to map your defences unimpeded.',
                'Pure passivity invites the next, bolder probe.',
              ],
              whyChosen:
                'When the swarm is plainly reconnaissance and not an attack, a commander may judge ' +
                'that learning from it beats handing the adversary a shoot-down to exploit.',
              doctrine:
                'Probing and the observation dilemma: each pass teaches both sides, and restraint ' +
                'that looks wise tonight can read as a green light tomorrow.',
            },
            effects: { escalation: -6, attribution: 8, credibility: -10, forcesRisk: 2 },
            styleTags: ['de-escalatory', 'deliberate', 'multilateral', 'verify-first'],
            next: 'p2-restraint',
          },
        ],
      },
    },

    // Aftermath A — you brought the swarm down.
    {
      id: 'p2-engaged',
      phase: 2,
      phaseLabel: 'PHASE 2 · DAYLIGHT',
      title: 'What the wreckage says',
      narrative:
        'By morning the wreckage is recovered. The picture is mixed: most airframes carried ' +
        'sensors, not warheads, and two bore civilian commercial markings — likely overflown or ' +
        'spoofed, but the markings are real. The Federation is already broadcasting that you ' +
        'massacred a harmless civilian survey flight. Your capital wants to know what to say.',
      decision: {
        prompt: 'The shoot-down is done and the story is contested. How do you handle the morning?',
        options: [
          {
            id: 'full-disclosure',
            label: 'Publish everything: the tracks, the wreckage, the ambiguity, and your reasoning.',
            consequence:
              'You put the full picture out, including the civilian markings and why an unidentified ' +
              'low swarm at night left you no safe alternative. The honesty stings in the moment but ' +
              'holds up; allies back your account because they can see all of it.',
            critique: {
              strengths: [
                'Pre-empts the adversary’s narrative by owning the hard facts first.',
                'Builds credibility and allied trust precisely when the story is ugliest.',
              ],
              risks: [
                'Admitting civilian markings hands the adversary a quotable line.',
                'Transparency about ROE reveals something about how you fight.',
              ],
              whyChosen:
                'A commander who believes the truth will surface anyway gets ahead of it, spending ' +
                'short-term pain for long-term credibility.',
              doctrine:
                'Counter-disinformation by verifiable disclosure: in a contested narrative, being ' +
                'the side that proves something true is the durable advantage.',
            },
            effects: { credibility: 12, cohesion: 10, domestic: -4, attribution: 8 },
            styleTags: ['transparency', 'evidence-seeking', 'multilateral', 'alliance-first'],
            next: null,
          },
          {
            id: 'deny-deflect',
            label: 'Hold the line hard: it was a hostile incursion, full stop, and say no more.',
            consequence:
              'You assert a clean justification and decline to engage with the civilian-markings ' +
              'claim. Your domestic audience rallies; abroad, the unanswered question festers and the ' +
              'Federation’s version travels in the gap you left.',
            critique: {
              strengths: [
                'Projects total confidence and steadies the home front.',
                'Denies the adversary a public concession to amplify.',
              ],
              risks: [
                'An unanswered awkward fact is assumed true; the gap becomes their narrative.',
                'If the markings story is later confirmed, your flat denial collapses your credibility.',
              ],
              whyChosen:
                'A commander who thinks any admission will be weaponised may choose to give the ' +
                'adversary nothing and ride out the storm.',
              doctrine:
                'The risk of stonewalling in the information domain: silence on a specific claim is ' +
                'rarely neutral — it is read as confirmation.',
            },
            effects: { domestic: 8, credibility: -8, cohesion: -6, attribution: -2 },
            styleTags: ['unilateral', 'coercive', 'decisive', 'sovereign-action'],
            next: null,
          },
          {
            id: 'joint-probe',
            label: 'Invite a neutral technical examination of the wreckage and your tracks.',
            consequence:
              'You hand the airframes and sensor logs to a neutral body and invite scrutiny. It is ' +
              'slow and cedes you the early cycle, but within days the examination supports your ' +
              'account and quietly dismantles the civilian-survey claim.',
            critique: {
              strengths: [
                'Outsources credibility to a neutral, which neither side can easily dismiss.',
                'Converts a contested night into a documented, defensible record.',
              ],
              risks: [
                'You lose control of the timeline and the early narrative.',
                'A neutral body might surface facts you would rather it did not.',
              ],
              whyChosen:
                'When you are confident in the facts, a commander may bet that independent ' +
                'verification beats their own word every time.',
              doctrine:
                'Third-party verification as a legitimacy instrument: trading speed and control for ' +
                'an account the adversary cannot credibly contest.',
            },
            effects: { credibility: 10, cohesion: 8, attribution: 12, domestic: -6 },
            styleTags: ['verify-first', 'multilateral', 'deliberate', 'evidence-seeking'],
            next: null,
          },
        ],
      },
    },

    // Aftermath B — you let it through / drove it out without destroying it.
    {
      id: 'p2-restraint',
      phase: 2,
      phaseLabel: 'PHASE 2 · DAYLIGHT',
      title: 'You held — now what?',
      narrative:
        'No one died and the frontier is quiet, but the swarm did what it came to do: it tested ' +
        'you and read your sector. Recovered or recorded, you now have a strong intelligence ' +
        'picture of its origin — and a domestic press asking why the army let foreign drones ' +
        'wander over the border unscathed. The capital wants a posture for tonight, because there ' +
        'will be a tonight.',
      decision: {
        prompt: 'You showed restraint and kept the evidence. How do you convert it?',
        options: [
          {
            id: 'expose-quietly',
            label: 'Use the evidence to attribute the incursion privately and demand it stop.',
            consequence:
              'You take the airframe forensics to the Federation through quiet channels: we know ' +
              'whose these were, here is the proof, do not do it again. No public drama. The ' +
              'incursions pause. Your restraint, unseen, looks to the public like inaction.',
            critique: {
              strengths: [
                'Turns last night’s restraint into real leverage without a public escalation.',
                'Gives the adversary a private off-ramp that does not require them to lose face.',
              ],
              risks: [
                'Quiet success is invisible; your domestic flank still thinks you did nothing.',
                'A private warning only works if the other side intended to be deterred.',
              ],
              whyChosen:
                'A commander who values the result over the headline trades public credit for an ' +
                'actual halt to the probing.',
              doctrine:
                'Private signalling and face-saving deterrence: imposing a cost through evidence and ' +
                'a discreet demand, leaving the adversary room to comply quietly.',
            },
            effects: { attribution: 10, escalation: -4, cohesion: 6, domestic: -8, credibility: 4 },
            styleTags: ['evidence-seeking', 'consultative', 'de-escalatory', 'human-in-loop'],
            next: null,
          },
          {
            id: 'publicise',
            label: 'Go public with the attribution and your intact-evidence proof.',
            consequence:
              'You release the forensic case naming the source of the swarm. It is a clean ' +
              'narrative win and your restraint now reads as competence — you defeated the probe and ' +
              'proved who sent it. The Federation, named publicly, hardens its line.',
            critique: {
              strengths: [
                'Reframes restraint as strength: you won and you can prove it.',
                'Rebuilds domestic credibility and rallies allied support around hard evidence.',
              ],
              risks: [
                'Public attribution corners the adversary into denial and retaliation.',
                'Burning your evidence publicly tells them how you detected and identified them.',
              ],
              whyChosen:
                'A commander who needs to answer the "why did you do nothing" charge converts the ' +
                'evidence into a visible, undeniable win.',
              doctrine:
                'Attribution as a public instrument: naming-and-shaming with hard proof to restore ' +
                'deterrence — at the cost of cornering the adversary and exposing your methods.',
            },
            effects: { credibility: 10, domestic: 10, cohesion: 6, escalation: 6, attribution: 6 },
            styleTags: ['decisive', 'signalling', 'transparency', 'sovereign-action'],
            next: null,
          },
          {
            id: 'harden-quiet',
            label: 'Say little; quietly reinforce the sector and tighten ROE for next time.',
            consequence:
              'You let the political noise wash past and spend the day hardening: more sensors, ' +
              'clearer counter-UAS authorities, crews rehearsed for the next swarm. The press grumbles; ' +
              'the sector is materially readier by nightfall.',
            critique: {
              strengths: [
                'Fixes the actual vulnerability the probe exposed.',
                'Avoids a public escalation while genuinely improving your position.',
              ],
              risks: [
                'Ceding the narrative leaves the "army did nothing" story standing.',
                'Tightening ROE for next time raises the odds of a kinetic clash tomorrow.',
              ],
              whyChosen:
                'A commander who reads the swarm as the first of many invests the quiet day in being ' +
                'ready for the second, not in winning the argument about the first.',
              doctrine:
                'Learning from a probe: converting an incursion into hardened posture and clearer ' +
                'authorities, accepting narrative cost for operational readiness.',
            },
            effects: { forcesRisk: -8, credibility: 4, escalation: 2, domestic: -6, cohesion: 2 },
            styleTags: ['deliberate', 'keep-control', 'restraint', 'manual-override'],
            next: null,
          },
        ],
      },
    },
  ],
}
