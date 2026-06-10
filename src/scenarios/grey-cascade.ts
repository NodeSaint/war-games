import type { Scenario } from '@/engine/types'

/**
 * GREY CASCADE — a 4-phase AI-enabled cyber escalation against critical national
 * infrastructure. You are the national cyber coordinator facing an intrusion that
 * adapts faster than your analysts can. Branches at P1 into a containment track
 * and an active-defence track, reconverging at P3. Fictional throughout.
 *
 * Here `forcesRisk` reads as exposure of critical infrastructure and the public.
 */
export const greyCascade: Scenario = {
  id: 'grey-cascade',
  codename: 'GREY CASCADE',
  domain: 'AI-Enabled Cyber / Critical Infrastructure',
  basis: 'Attribution, proportionality and the cyber-to-physical threshold against an adaptive intrusion.',
  difficulty: 'Intermediate',
  estPhases: 4,
  role: 'National Cyber Coordinator for Verlandia',
  brief:
    'For nine days, an intrusion has been moving through the control systems of the national ' +
    'grid. It does not behave like the playbooks. It adapts to your defenders in near real time, ' +
    'reorganising when it is hunted — consistent with an AI-augmented operation. So far it has ' +
    'only watched and mapped. This morning it touched a regional substation’s safety system, the ' +
    'first time it has reached toward something physical. You cannot yet prove who is behind it: ' +
    'the tradecraft points loosely at the Federation, but it could be a proxy, a criminal group, ' +
    'or a deliberate false flag. The Prime Minister wants options.',
  objectives: [
    'Contain a threat to physical infrastructure without triggering the escalation you fear.',
    'Decide how much to act before attribution is solid.',
    'Keep proportionality as you near the line between cyber and physical effects.',
  ],
  metricsInit: {
    escalation: 28,
    cohesion: 50,
    domestic: 50,
    credibility: 50,
    forcesRisk: 32,
    attribution: 22,
  },
  startNodeId: 'p1-intrusion',
  nodes: [
    {
      id: 'p1-intrusion',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE INTRUSION',
      title: 'It reached for the safety system',
      narrative:
        'The intruder’s touch on the substation safety system could be reconnaissance, a test, or ' +
        'positioning for an attack. Your defenders are split between ripping the adversary out now ' +
        'and watching to learn who they are. An automated active-defence capability is on the ' +
        'shelf: it can hunt and disrupt the intruder across the network at machine speed — ' +
        'including onto infrastructure you do not own. The clock is the intruder’s tempo, not yours.',
      decision: {
        prompt: 'The intrusion has reached toward the physical. What is your first move?',
        options: [
          {
            id: 'contain',
            label: 'Quietly contain and monitor: isolate the safety system, watch the rest, attribute first.',
            consequence:
              'You ring-fence the touched safety system and keep the intruder under surveillance ' +
              'elsewhere, hunting for the evidence that will name them. You have reduced the ' +
              'immediate physical risk while keeping your options — and your intelligence — open.',
            critique: {
              strengths: [
                'Cuts the most dangerous exposure without tipping the adversary that you have seen them.',
                'Preserves intelligence that is the only route to confident attribution.',
              ],
              risks: [
                'Leaving the intruder in your network is a standing risk if they move first.',
                'Patience can be overtaken if the operation turns destructive while you watch.',
              ],
              whyChosen:
                'A coordinator who knows that the wrong attribution is worse than a slow one buys ' +
                'evidence before they buy a response.',
              doctrine:
                'The attribution problem in cyberspace and the intelligence gain/loss calculus: ' +
                'evicting an intruder ends both the threat and your visibility into them.',
            },
            effects: { attribution: 12, forcesRisk: -8, escalation: -2, credibility: -2 },
            styleTags: ['evidence-seeking', 'verify-first', 'human-in-loop', 'deliberate'],
            next: 'p2-contain',
          },
          {
            id: 'evict',
            label: 'Evict now: full remediation across the grid, accept the loss of intelligence.',
            consequence:
              'You order a coordinated eviction. It is loud and the adversary knows instantly they ' +
              'are blown. The grid is cleaner by nightfall — and the intruder, surprised mid-operation, ' +
              'has gone quiet in a way that could mean retreat or repositioning.',
            critique: {
              strengths: [
                'Ends the physical threat decisively rather than betting on continued restraint.',
                'Signals that you will not tolerate a presence near safety-critical systems.',
              ],
              risks: [
                'Burns the access you needed to attribute the operation.',
                'A surprised adversary may escalate rather than retreat.',
              ],
              whyChosen:
                'When the intruder is already touching safety systems, a coordinator may decide that ' +
                'no intelligence is worth leaving them in place a day longer.',
              doctrine:
                'Defensive eviction versus persistent monitoring: the trade between ending a threat ' +
                'now and keeping the access that makes attribution and warning possible.',
            },
            effects: { forcesRisk: -10, escalation: 6, attribution: -8, credibility: 6 },
            styleTags: ['decisive', 'keep-control', 'forceful', 'manual-override'],
            next: 'p2-contain',
          },
          {
            id: 'auto-hunt',
            label: 'Unleash automated active defence to hunt and disrupt the intruder at machine speed.',
            consequence:
              'You authorise the automated capability. It chases the intruder across the network ' +
              'faster than any human team, disrupting their infrastructure — including a node hosted ' +
              'on a third party’s systems abroad. Effective, and already past one boundary you did ' +
              'not deliberately choose to cross.',
            critique: {
              strengths: [
                'Matches an adaptive, AI-driven intruder at the only tempo that can pin it.',
                'Disrupts the operation before it can complete whatever it was positioning for.',
              ],
              risks: [
                'Automated hunt-and-disrupt crosses onto third-party and foreign infrastructure on its own logic.',
                'You have escalated into someone else’s network without a deliberate human decision to do so.',
              ],
              whyChosen:
                'Against an adversary that reorganises faster than analysts can track, automation can ' +
                'feel like the only way to keep pace.',
              doctrine:
                'Autonomy in cyber operations and inadvertent escalation: machine-speed active ' +
                'defence can cross sovereignty and proportionality lines before a human weighs them.',
            },
            effects: { escalation: 12, forcesRisk: -6, attribution: -4, cohesion: -6 },
            styleTags: ['delegate-autonomy', 'machine-speed', 'escalatory', 'tempo'],
            next: 'p2-active',
          },
          {
            id: 'go-loud',
            label: 'Go public now: warn the nation, name the likely culprit, and rally allies.',
            consequence:
              'You brief the public that critical infrastructure is under attack and point, on ' +
              'current assessment, at the Federation. The country braces; allies offer help. The ' +
              'intruder, named before you could prove it, melts away — taking your evidence with them.',
            critique: {
              strengths: [
                'Mobilises national resilience and allied support immediately.',
                'Denies the adversary the advantage of operating in the dark.',
              ],
              risks: [
                'Public attribution on thin evidence is a hostage to the forensic verdict.',
                'Announcing the hunt scatters the intruder before you can attribute or learn.',
              ],
              whyChosen:
                'A coordinator who fears a sudden blackout more than an imperfect attribution may ' +
                'choose to put the country on notice rather than keep the threat secret.',
              doctrine:
                'Public warning versus operational secrecy: transparency builds resilience but can ' +
                'forfeit the quiet access that attribution and disruption depend on.',
            },
            effects: { domestic: 8, cohesion: 6, escalation: 8, attribution: -6, forcesRisk: 2 },
            styleTags: ['decisive', 'signalling', 'multilateral', 'transparency'],
            next: 'p2-active',
          },
        ],
      },
    },

    // Track A — containment / quiet
    {
      id: 'p2-contain',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE HUNT',
      title: 'A name begins to surface',
      narrative:
        'Working quietly, your analysts pull a thread: tooling and timing that point — at moderate ' +
        'confidence — to a Federation-linked group, though the cleanest indicators look almost too ' +
        'tidy, as if meant to be found. Meanwhile the intruder is still inside, and has begun ' +
        'pre-positioning on a second utility. You are learning fast, but the danger is widening.',
      decision: {
        prompt: 'You are gaining attribution but the threat is spreading. What governs the next step?',
        options: [
          {
            id: 'share-allies',
            label: 'Share indicators with allied agencies to corroborate before you act or accuse.',
            consequence:
              'You bring trusted partners in. Two corroborate your read; one flags the suspiciously ' +
              'clean indicators as a possible false flag — a warning you would have missed alone. ' +
              'Slower, but your eventual attribution will be far harder to knock down.',
            critique: {
              strengths: [
                'Multiplies your forensic confidence and guards against a false-flag trap.',
                'Builds the allied consensus any later response will need.',
              ],
              risks: [
                'Sharing widens the circle and slows you while the intruder spreads.',
                'Allied caveats can dilute a response you judge urgent.',
              ],
              whyChosen:
                'A coordinator wary of being played into blaming the wrong actor leans on partners ' +
                'who can see what they cannot.',
              doctrine:
                'Collective attribution and the false-flag problem: corroboration across services is ' +
                'the main defence against being deceived into a misdirected response.',
            },
            effects: { attribution: 14, cohesion: 10, escalation: -2, forcesRisk: 2 },
            styleTags: ['multilateral', 'evidence-seeking', 'consultative', 'alliance-first'],
            next: 'p3-cascade',
          },
          {
            id: 'evict-now',
            label: 'Stop learning and start protecting: evict from both utilities now.',
            consequence:
              'You prioritise the second utility over the intelligence and clear the intruder from ' +
              'both. The immediate danger drops sharply. Your attribution case freezes where it is — ' +
              'good enough to suspect, not yet enough to prove.',
            critique: {
              strengths: [
                'Protects a second piece of critical infrastructure before it can be held at risk.',
                'Refuses to let the pursuit of certainty expose the public.',
              ],
              risks: [
                'Locks in a moderate-confidence attribution you may need to act on later.',
                'Tipping the adversary may provoke a parting shot.',
              ],
              whyChosen:
                'When the threat is spreading to new infrastructure, a coordinator may judge that ' +
                'protection cannot wait for proof.',
              doctrine:
                'Risk tolerance in defensive operations: choosing public safety over intelligence ' +
                'gain as the threat moves closer to physical consequences.',
            },
            effects: { forcesRisk: -12, escalation: 4, attribution: -4, credibility: 4 },
            styleTags: ['decisive', 'keep-control', 'restraint', 'manual-override'],
            next: 'p3-cascade',
          },
          {
            id: 'deception',
            label: 'Feed the intruder a deception environment to study and misdirect them.',
            consequence:
              'Rather than evict, you quietly herd the intruder into a controlled environment that ' +
              'looks real. They take the bait, revealing intent and tooling — and, crucially, ' +
              'behaviour that helps separate the genuine actor from the false-flag dressing.',
            critique: {
              strengths: [
                'Turns the intruder’s own actions into your best attribution evidence.',
                'Buys safety for the real systems while you watch them in a sandbox.',
              ],
              risks: [
                'A sophisticated adversary may detect the deception and burn you back.',
                'Running a live deception is resource-intensive and time-bounded.',
              ],
              whyChosen:
                'A coordinator confident in their defenders may prefer to learn the adversary cold ' +
                'before deciding anything irreversible.',
              doctrine:
                'Cyber deception and counter-intelligence: manipulating the adversary’s perception ' +
                'to extract intent and unmask a false flag without firing back.',
            },
            effects: { attribution: 12, forcesRisk: -4, escalation: -2, credibility: 2 },
            styleTags: ['deliberate', 'evidence-seeking', 'human-in-loop', 'keep-control'],
            next: 'p3-cascade',
          },
        ],
      },
    },

    // Track B — active / loud
    {
      id: 'p2-active',
      phase: 2,
      phaseLabel: 'PHASE 2 · BLOWBACK',
      title: 'The board lights up',
      narrative:
        'Your earlier move was loud, and the response is loud back. The intruder — or someone ' +
        'acting in concert with them — disrupts a third party you touched, who now blames YOU; ' +
        'and a burst of activity hits a second domestic utility, harder than before. The episode ' +
        'is now semi-public. Attribution is still only moderate, and events are outrunning your ' +
        'evidence.',
      decision: {
        prompt: 'Your opening move drew blowback. How do you steady the situation?',
        options: [
          {
            id: 'dial-back',
            label: 'Dial back the active measures and re-establish human control of the response.',
            consequence:
              'You rein in the automated capability and put a human decision in front of any further ' +
              'cross-network action. The escalation cools within a day; you have, briefly, looked ' +
              'like you lost your grip — and you have stopped a machine from widening the fight.',
            critique: {
              strengths: [
                'Halts an automated escalation spiral before it crosses another line.',
                'Restores deliberate, accountable control of a fast-moving response.',
              ],
              risks: [
                'Dialling back under blowback can read as backing down.',
                'A slower response cedes tempo to an adversary still moving fast.',
              ],
              whyChosen:
                'A coordinator who sees the automation, not the adversary, as the immediate danger ' +
                'pulls it back regardless of how it looks.',
              doctrine:
                'Re-asserting meaningful human control: trading tempo for the ability to not ' +
                'escalate by automated accident in a domain where lines are easily crossed.',
            },
            effects: { escalation: -12, cohesion: 6, forcesRisk: -4, credibility: -4 },
            styleTags: ['human-in-loop', 'keep-control', 'restraint', 'de-escalatory'],
            next: 'p3-cascade',
          },
          {
            id: 'press-cyber',
            label: 'Press the advantage: intensify active operations to disrupt them decisively.',
            consequence:
              'You double down, throwing more at disrupting the adversary’s infrastructure. For a ' +
              'day it looks like you are winning the exchange — then the second utility wobbles ' +
              'hard, and you cannot be certain your own escalation did not invite it.',
            critique: {
              strengths: [
                'Keeps the initiative and denies the adversary room to operate.',
                'Signals you will not be deterred by blowback.',
              ],
              risks: [
                'Tit-for-tat in cyberspace climbs toward real physical consequences for civilians.',
                'Each exchange makes attribution and proportionality murkier, not clearer.',
              ],
              whyChosen:
                'A coordinator who believes hesitation invites more pressure answers escalation with ' +
                'escalation to re-establish dominance.',
              doctrine:
                'Cyber tit-for-tat and escalation dynamics: trading blows in an ambiguous domain ' +
                'risks the very cyber-to-physical crossing both sides claim to want to avoid.',
            },
            effects: { escalation: 16, forcesRisk: 12, credibility: 6, cohesion: -6, attribution: -2 },
            styleTags: ['escalatory', 'forceful', 'brinkmanship', 'tempo'],
            next: 'p3-cascade',
          },
          {
            id: 'deescalate-signal',
            label: 'Signal limits publicly: state what you did, why, and that you seek no wider fight.',
            consequence:
              'You get ahead of the third party’s accusation by explaining your defensive intent and ' +
              'declaring you are not seeking escalation. The third party is mollified; the adversary ' +
              'is handed a quieter board, which they may use to regroup or to climb down.',
            critique: {
              strengths: [
                'Defuses the third-party grievance before it fractures your coalition.',
                'Offers a mutual de-escalation path without conceding the underlying point.',
              ],
              risks: [
                'Explaining your operations reveals capability and intent.',
                'A unilateral signal of restraint can be pocketed by an adversary giving nothing back.',
              ],
              whyChosen:
                'A coordinator who sees the third-party blowback as the real strategic danger moves ' +
                'to close that wound even at some cost to operational secrecy.',
              doctrine:
                'Signalling restraint and limited aims: publicly bounding your intent to keep a ' +
                'cyber exchange from widening into a multi-party crisis.',
            },
            effects: { escalation: -8, cohesion: 8, credibility: -2, attribution: 2 },
            styleTags: ['de-escalatory', 'consultative', 'off-ramp', 'multilateral'],
            next: 'p3-cascade',
          },
        ],
      },
    },

    // Reconvergence — the cascade moment
    {
      id: 'p3-cascade',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE CASCADE',
      title: 'Lights flicker in the capital',
      narrative:
        'However you got here, the crisis now has a face the public can see: for eleven minutes ' +
        'this evening, power dipped across part of the capital. No one was hurt, but it was real, ' +
        'it was on every screen, and it landed squarely inside the window of this intrusion. Your ' +
        'attribution is firmer than it was but still short of courtroom-proof. The Prime Minister ' +
        'needs a response posture tonight.',
      decision: {
        prompt: 'The crisis is now public and physical. What posture do you set?',
        options: [
          {
            id: 'attribute-proportional',
            label: 'Attribute at your true confidence and announce a proportional, lawful response.',
            consequence:
              'You state who you assess is responsible and how sure you are, and set out a measured ' +
              'response within clear legal limits. Calibrated and credible; hardliners want more, but ' +
              'allies and neutrals find it the most believable account on offer.',
            critique: {
              strengths: [
                'Calibrated attribution is durable and keeps the moral and legal high ground.',
                'Proportionality leaves room to escalate later if you must, without boxing yourself in.',
              ],
              risks: [
                'Measured responses can look weak against a visible blackout and an angry public.',
                'Stating limited confidence invites the adversary to deny and your hardliners to revolt.',
              ],
              whyChosen:
                'A coordinator who treats credibility as the long-term asset matches words to ' +
                'evidence even under public pressure to overstate.',
              doctrine:
                'Proportionality and calibrated public attribution: responding within law and at ' +
                'your true confidence to keep legitimacy and escalation control intact.',
            },
            effects: { credibility: 10, cohesion: 8, attribution: 6, domestic: -4, escalation: -2 },
            styleTags: ['verify-first', 'multilateral', 'deliberate', 'evidence-seeking'],
            next: 'p4-response',
          },
          {
            id: 'retaliate-cyber',
            label: 'Retaliate in kind now: a visible cyber strike on the suspected adversary’s systems.',
            consequence:
              'You answer the blackout with a blackout of your own against the suspected adversary. ' +
              'It satisfies the demand to "do something" and the public rallies — but you have ' +
              'crossed into deliberate disruptive action on moderate confidence, and they will answer.',
            critique: {
              strengths: [
                'Demonstrates immediate resolve and re-establishes deterrence by punishment.',
                'Refuses to let an attack on civilians pass without a cost.',
              ],
              risks: [
                'A deliberate disruptive strike on moderate confidence may hit the wrong actor.',
                'Reciprocal infrastructure attacks endanger civilians on both sides and have no clear ceiling.',
              ],
              whyChosen:
                'A coordinator who believes only a felt cost deters the next blackout answers in kind ' +
                'and quickly.',
              doctrine:
                'Deterrence by punishment in cyberspace and its escalation risk: visible retaliation ' +
                'on imperfect attribution can ignite a reciprocal cycle against civilian infrastructure.',
            },
            effects: { escalation: 18, forcesRisk: 14, credibility: 8, domestic: 8, cohesion: -8, attribution: -2 },
            styleTags: ['escalatory', 'coercive', 'decisive', 'sovereign-action'],
            next: 'p4-response',
          },
          {
            id: 'resilience-first',
            label: 'Lead with resilience: harden the grid publicly, attribute later, deny them the spectacle.',
            consequence:
              'You make the story about resilience, not retaliation — visible hardening, restored ' +
              'confidence, a promise of attribution in time, not tonight. The adversary’s blackout ' +
              'fails to become the crisis they wanted; some at home call you slow to hit back.',
            critique: {
              strengths: [
                'Denies the adversary the escalation and the spectacle they were seeking.',
                'Builds lasting public confidence and buys time for solid attribution.',
              ],
              risks: [
                'Withholding a response can read as weakness and embolden the next probe.',
                'A patient line is hard to hold against a public that wants retaliation now.',
              ],
              whyChosen:
                'A coordinator who reads the blackout as bait for an over-reaction refuses to give ' +
                'the adversary the reaction it was fishing for.',
              doctrine:
                'Resilience and denial of objectives: defeating a coercive infrastructure attack by ' +
                'absorbing it and denying its strategic aim, rather than by escalating.',
            },
            effects: { forcesRisk: -10, credibility: 4, escalation: -6, domestic: -6, cohesion: 4, attribution: 4 },
            styleTags: ['restraint', 'deliberate', 'de-escalatory', 'keep-control'],
            next: 'p4-response',
          },
        ],
      },
    },

    {
      id: 'p4-response',
      phase: 4,
      phaseLabel: 'PHASE 4 · THE RESPONSE',
      title: 'Closing the cascade',
      narrative:
        'The acute phase is ending. What remains is the strategic close: the response you lock in ' +
        'and the precedent it sets for how this country meets an AI-enabled attack on the systems ' +
        'civilians depend on. This choice outlives tonight.',
      decision: {
        prompt: 'How do you close out GREY CASCADE?',
        options: [
          {
            id: 'coalition-norms',
            label: 'Take it to the coalition: joint attribution and a push for norms on infrastructure attacks.',
            consequence:
              'You internationalise the response, building a joint attribution and pressing for ' +
              'agreed red lines around attacks on civilian infrastructure. Slow and consensus-bound, ' +
              'but it turns one bad fortnight into a durable line others will help you hold.',
            critique: {
              strengths: [
                'Multiplies legitimacy and deterrence by making the response collective.',
                'Invests in norms that protect you in every future incident, not just this one.',
              ],
              risks: [
                'Coalition processes are slow and can dilute to the weakest member’s comfort.',
                'Norms bind you too, constraining future options you might want.',
              ],
              whyChosen:
                'A coordinator who sees this as one of many such attacks to come invests in the ' +
                'collective rules that make the next one costlier for the attacker.',
              doctrine:
                'Norm-building and collective deterrence in cyberspace: converting an incident into ' +
                'agreed thresholds that raise the cost of attacking civilian infrastructure.',
            },
            effects: { cohesion: 12, credibility: 6, escalation: -4, attribution: 4 },
            styleTags: ['multilateral', 'alliance-first', 'deliberate', 'off-ramp'],
            next: null,
          },
          {
            id: 'unilateral-deterrent',
            label: 'Set a unilateral red line: declare what a repeat will cost, and mean it.',
            consequence:
              'You draw a public red line: another attack on national infrastructure will be met ' +
              'with a response of your choosing, at a time of your choosing. Unambiguous and ' +
              'sovereign — and now a commitment you will have to honour if it is tested.',
            critique: {
              strengths: [
                'Maximum clarity of deterrent intent, owing nothing to coalition consensus.',
                'Reassures a public that wants to see resolve.',
              ],
              risks: [
                'A unilateral red line you cannot enforce alone is a credibility trap if called.',
                'Going it alone forgoes the legitimacy and weight of allied backing.',
              ],
              whyChosen:
                'A coordinator who distrusts slow coalitions and wants the deterrent message ' +
                'unmistakable draws the line themselves.',
              doctrine:
                'Unilateral red lines and commitment problems: a clear threat deters only if it is ' +
                'credible and enforceable when tested — otherwise it erodes the credibility it spends.',
            },
            effects: { credibility: 8, domestic: 8, escalation: 8, cohesion: -8, forcesRisk: 2 },
            styleTags: ['unilateral', 'sovereign-action', 'decisive', 'signalling'],
            next: null,
          },
          {
            id: 'invest-resilience',
            label: 'Invest in the unglamorous fix: structural resilience and human-in-the-loop safeguards.',
            consequence:
              'You spend your political capital on hardening the country against the next one: ' +
              'segmenting safety systems, mandating human control over automated defences, funding ' +
              'the defenders. No spectacle, no enemy named tonight — possibly the most valuable ' +
              'thing you do.',
            critique: {
              strengths: [
                'Attacks the root vulnerability rather than the symptom of one incident.',
                'Mandating human control over automated defences guards against the next escalation-by-machine.',
              ],
              risks: [
                'Quiet structural work earns no political credit and can be cut by successors.',
                'Declining to name or punish the attacker can read as letting them away with it.',
              ],
              whyChosen:
                'A coordinator whose lesson is "we were lucky it was only eleven minutes" spends the ' +
                'aftermath making the next attack fail rather than scoring the last one.',
              doctrine:
                'Resilience-by-design and meaningful human control: durable defence of critical ' +
                'infrastructure through structure and safeguards, not through retaliation alone.',
            },
            effects: { forcesRisk: -12, escalation: -4, cohesion: 4, credibility: -2, domestic: -2 },
            styleTags: ['deliberate', 'human-in-loop', 'keep-control', 'restraint' ],
            next: null,
          },
        ],
      },
    },
  ],
}
