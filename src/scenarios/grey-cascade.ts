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
    'An intrusion has been present in the control systems of the national grid for nine days. Its ' +
    'behaviour is atypical: it adapts to defensive activity in near real time and reorganises when ' +
    'hunted, consistent with an AI-augmented operation. To date its activity has been limited to ' +
    'reconnaissance and mapping. This morning it interacted with a regional substation’s safety ' +
    'system — the first observed reach toward a physical effect. Attribution is not yet established: ' +
    'the tradecraft is loosely consistent with the Federation, but a proxy, a criminal group, or a ' +
    'deliberate false flag cannot be excluded. The Prime Minister has requested options.',
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
      title: 'Reach toward the safety system',
      narrative:
        'The intruder’s interaction with the substation safety system is assessed as reconnaissance, ' +
        'a test, or pre-positioning for an attack; the three cannot yet be distinguished. Defenders ' +
        'are divided between immediate eviction and continued observation to support attribution. An ' +
        'automated active-defence capability is available: it can hunt and disrupt the intruder ' +
        'across the network at machine speed, including on infrastructure you do not own. The tempo ' +
        'is set by the intruder, not by you.',
      decision: {
        prompt: 'The intrusion has reached toward the physical. What is your first move?',
        options: [
          {
            id: 'contain',
            label: 'Contain and monitor: isolate the safety system, observe elsewhere, attribute first.',
            consequence:
              'You ring-fence the affected safety system and maintain surveillance of the intruder ' +
              'elsewhere, collecting the evidence required for attribution. Immediate physical risk ' +
              'is reduced while response options and intelligence access are preserved.',
            critique: {
              strengths: [
                'Removes the most dangerous exposure without alerting the adversary to discovery.',
                'Preserves the intelligence access on which confident attribution depends.',
              ],
              risks: [
                'A retained intruder remains a standing risk should it act before you do.',
                'Continued observation can be overtaken if the operation turns destructive.',
              ],
              whyChosen:
                'A coordinator who judges a mistaken attribution more costly than a delayed one will ' +
                'establish evidence before committing to a response.',
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
            label: 'Evict now: full remediation across the grid, accepting the loss of intelligence.',
            consequence:
              'You order a coordinated eviction. The action is overt and the adversary is immediately ' +
              'aware of discovery. The grid is largely remediated within hours. The intruder, ' +
              'interrupted mid-operation, has gone quiet — assessed as either withdrawal or ' +
              'repositioning, with that question unresolved.',
            critique: {
              strengths: [
                'Removes the physical threat directly rather than relying on continued adversary restraint.',
                'Signals that a presence near safety-critical systems will not be tolerated.',
              ],
              risks: [
                'Forfeits the access required to attribute the operation.',
                'An interrupted adversary may escalate rather than withdraw.',
              ],
              whyChosen:
                'With the intruder already interacting with safety systems, a coordinator may assess ' +
                'that the intelligence value of continued access does not justify the retained risk.',
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
            label: 'Authorise automated active defence to hunt and disrupt the intruder at machine speed.',
            consequence:
              'You authorise the automated capability. It pursues the intruder across the network ' +
              'faster than a human team can, disrupting their infrastructure — including a node hosted ' +
              'on a third party’s systems abroad. The action is effective, but has already crossed a ' +
              'boundary you did not deliberately elect to cross.',
            critique: {
              strengths: [
                'Matches an adaptive, AI-driven intruder at a tempo human teams cannot sustain.',
                'Disrupts the operation before its pre-positioning can be completed.',
              ],
              risks: [
                'Automated hunt-and-disrupt extends onto third-party and foreign infrastructure on its own logic.',
                'Escalation into another network has occurred without a deliberate human decision.',
              ],
              whyChosen:
                'Against an adversary that reorganises faster than analysts can track, automation may ' +
                'be assessed as the only means of keeping pace.',
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
            label: 'Go public now: warn the nation, name the likely actor, and seek allied support.',
            consequence:
              'You brief the public that critical infrastructure is under attack and attribute it, on ' +
              'current assessment, to the Federation. The country moves to a heightened posture; allies ' +
              'offer support. The intruder, named before attribution was firm, withdraws and the ' +
              'associated evidence is lost.',
            critique: {
              strengths: [
                'Mobilises national resilience and allied support without delay.',
                'Denies the adversary the advantage of operating undetected.',
              ],
              risks: [
                'Public attribution on limited evidence is hostage to the later forensic finding.',
                'Disclosure disperses the intruder before attribution or further collection is possible.',
              ],
              whyChosen:
                'A coordinator who weighs the risk of a sudden outage above that of an imperfect ' +
                'attribution may judge it preferable to place the country on notice than to hold the ' +
                'threat in confidence.',
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
      title: 'Attribution begins to form',
      narrative:
        'Working covertly, your analysts develop a lead: tooling and timing assessed at moderate ' +
        'confidence to a Federation-linked group, though the clearest indicators are notably clean, ' +
        'consistent with material intended to be found. The intruder remains present and has begun ' +
        'pre-positioning on a second utility. Collection is improving, but the exposure is widening.',
      decision: {
        prompt: 'You are gaining attribution but the threat is spreading. What governs the next step?',
        options: [
          {
            id: 'share-allies',
            label: 'Share indicators with allied agencies to corroborate before you act or accuse.',
            consequence:
              'You bring trusted partners in. Two corroborate your assessment; one identifies the ' +
              'unusually clean indicators as a possible false flag — an indicator you would likely ' +
              'have missed unilaterally. The process is slower, but the resulting attribution will be ' +
              'considerably more robust.',
            critique: {
              strengths: [
                'Raises forensic confidence and guards against a false-flag deception.',
                'Builds the allied consensus any subsequent response will require.',
              ],
              risks: [
                'Wider sharing extends the circle of knowledge and slows action as the intruder spreads.',
                'Allied caveats can dilute a response you assess to be urgent.',
              ],
              whyChosen:
                'A coordinator concerned about being manoeuvred into attributing to the wrong actor ' +
                'relies on partners able to see what they cannot.',
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
            label: 'Prioritise protection over collection: evict from both utilities now.',
            consequence:
              'You prioritise the second utility over continued collection and clear the intruder from ' +
              'both. Immediate risk falls sharply. The attribution case is fixed at its current state — ' +
              'sufficient for suspicion, not yet for proof.',
            critique: {
              strengths: [
                'Protects a second element of critical infrastructure before it can be held at risk.',
                'Declines to let the pursuit of certainty prolong public exposure.',
              ],
              risks: [
                'Fixes a moderate-confidence attribution that may have to support later action.',
                'Alerting the adversary may provoke a parting action.',
              ],
              whyChosen:
                'With the threat spreading to further infrastructure, a coordinator may assess that ' +
                'protection cannot await conclusive proof.',
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
              'Rather than evict, you steer the intruder into a controlled environment presented as ' +
              'genuine. The intruder engages, revealing intent and tooling and, importantly, ' +
              'behaviour that helps distinguish the genuine actor from the false-flag indicators.',
            critique: {
              strengths: [
                'Converts the intruder’s own activity into the strongest available attribution evidence.',
                'Protects the live systems while the adversary is observed in a contained environment.',
              ],
              risks: [
                'A sophisticated adversary may detect the deception and exploit it in return.',
                'A live deception is resource-intensive and viable only for a limited period.',
              ],
              whyChosen:
                'A coordinator with confidence in their defenders may prefer to characterise the ' +
                'adversary fully before committing to any irreversible step.',
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
      title: 'Blowback',
      narrative:
        'Your earlier action was overt, and the response is correspondingly overt. The intruder — or ' +
        'an actor operating in concert with them — disrupts the third party your operation touched, ' +
        'who now attributes the disruption to you; concurrently, a burst of activity strikes a second ' +
        'domestic utility, more severely than before. The episode is now semi-public. Attribution ' +
        'remains at moderate confidence, and events are outpacing the evidence.',
      decision: {
        prompt: 'Your opening move drew blowback. How do you steady the situation?',
        options: [
          {
            id: 'dial-back',
            label: 'Dial back the active measures and re-establish human control of the response.',
            consequence:
              'You constrain the automated capability and require a human decision before any further ' +
              'cross-network action. Escalation subsides within a day. The reversal carries a ' +
              'short-term impression of lost control, but it halts an automated system from widening ' +
              'the confrontation.',
            critique: {
              strengths: [
                'Halts an automated escalation spiral before it crosses another line.',
                'Restores deliberate, accountable control of a fast-moving response.',
              ],
              risks: [
                'Dialling back under blowback can be read as conceding.',
                'A slower response cedes tempo to an adversary still operating at speed.',
              ],
              whyChosen:
                'A coordinator who assesses the automation, rather than the adversary, as the immediate ' +
                'danger will constrain it irrespective of presentation.',
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
            label: 'Press the advantage: intensify active operations to disrupt the adversary decisively.',
            consequence:
              'You commit additional resources to disrupting the adversary’s infrastructure. For a day ' +
              'the exchange appears to favour you; the second utility then destabilises sharply, and it ' +
              'cannot be ruled out that your own escalation contributed to it.',
            critique: {
              strengths: [
                'Retains the initiative and denies the adversary room to operate.',
                'Signals that blowback will not produce deterrence.',
              ],
              risks: [
                'Reciprocal action in cyberspace trends toward physical consequences for civilians.',
                'Each exchange degrades attribution and proportionality rather than clarifying them.',
              ],
              whyChosen:
                'A coordinator who assesses that hesitation invites further pressure answers escalation ' +
                'with escalation to re-establish dominance.',
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
              'You pre-empt the third party’s accusation by setting out your defensive intent and ' +
              'stating that you are not seeking escalation. The third party is reassured; the adversary ' +
              'is afforded a quieter environment, which they may use to regroup or to de-escalate.',
            critique: {
              strengths: [
                'Defuses the third-party grievance before it fractures your coalition.',
                'Offers a mutual de-escalation path without conceding the underlying point.',
              ],
              risks: [
                'Explaining your operations discloses capability and intent.',
                'A unilateral signal of restraint can be exploited by an adversary offering nothing in return.',
              ],
              whyChosen:
                'A coordinator who assesses the third-party blowback as the principal strategic danger ' +
                'acts to contain it, accepting some cost to operational secrecy.',
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
      title: 'Outage in the capital',
      narrative:
        'By whatever route, the crisis is now publicly visible: for eleven minutes this evening, ' +
        'power was lost across part of the capital. There were no casualties, but the outage was real, ' +
        'widely reported, and fell within the window of this intrusion. Attribution is firmer than ' +
        'before but remains short of an evidentiary standard. The Prime Minister requires a response ' +
        'posture tonight.',
      decision: {
        prompt: 'The crisis is now public and physical. What posture do you set?',
        options: [
          {
            id: 'attribute-proportional',
            label: 'Attribute at your true confidence and announce a proportional, lawful response.',
            consequence:
              'You state who you assess to be responsible and at what confidence, and set out a ' +
              'measured response within clear legal limits. The posture is calibrated and credible; ' +
              'hardliners press for more, but allies and neutral states assess it as the most ' +
              'credible account available.',
            critique: {
              strengths: [
                'Calibrated attribution is durable and retains the legal and legitimacy advantage.',
                'Proportionality preserves the option to escalate later without foreclosing it now.',
              ],
              risks: [
                'A measured response may appear weak against a visible outage and public anger.',
                'Stating limited confidence invites adversary denial and domestic hardline dissent.',
              ],
              whyChosen:
                'A coordinator who treats credibility as the enduring asset matches statements to ' +
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
              'You answer the outage with a comparable disruption against the suspected adversary. ' +
              'It satisfies domestic demand for action and consolidates public support, but it crosses ' +
              'into deliberate disruptive action on moderate confidence, and a reciprocal response is ' +
              'assessed as likely.',
            critique: {
              strengths: [
                'Demonstrates immediate resolve and re-establishes deterrence by punishment.',
                'Declines to let an attack affecting civilians pass without cost.',
              ],
              risks: [
                'A deliberate disruptive action on moderate confidence may fall on the wrong actor.',
                'Reciprocal infrastructure attacks endanger civilians on both sides and lack a clear ceiling.',
              ],
              whyChosen:
                'A coordinator who assesses that only an imposed cost deters a further outage responds ' +
                'in kind and promptly.',
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
            label: 'Lead with resilience: harden the grid publicly, attribute later, deny the spectacle.',
            consequence:
              'You frame the response around resilience rather than retaliation — visible hardening, ' +
              'restored confidence, and a commitment to attribute in due course rather than tonight. ' +
              'The outage does not become the crisis the adversary sought; some domestic actors ' +
              'criticise the absence of an immediate response.',
            critique: {
              strengths: [
                'Denies the adversary the escalation and the public effect they sought.',
                'Builds durable public confidence and allows time for sound attribution.',
              ],
              risks: [
                'Withholding a response can be read as weakness and embolden the next probe.',
                'A patient posture is difficult to sustain against public demand for immediate retaliation.',
              ],
              whyChosen:
                'A coordinator who assesses the outage as an inducement to over-react declines to ' +
                'provide the adversary with the reaction it sought.',
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
      title: 'Strategic close',
      narrative:
        'The acute phase is ending. What remains is the strategic close: the response you adopt and ' +
        'the precedent it sets for how the country meets an AI-enabled attack on the systems ' +
        'civilians depend on. This decision will outlast the immediate incident.',
      decision: {
        prompt: 'How do you close out GREY CASCADE?',
        options: [
          {
            id: 'coalition-norms',
            label: 'Take it to the coalition: joint attribution and a push for norms on infrastructure attacks.',
            consequence:
              'You internationalise the response, building a joint attribution and pressing for agreed ' +
              'thresholds on attacks against civilian infrastructure. The process is slow and ' +
              'consensus-bound, but it converts a single incident into a durable line that partners ' +
              'will help enforce.',
            critique: {
              strengths: [
                'Multiplies legitimacy and deterrence by making the response collective.',
                'Invests in norms that protect you in every future incident, not just this one.',
              ],
              risks: [
                'Coalition processes are slow and can converge on the most cautious member’s position.',
                'Agreed norms also bind you, constraining future options you may wish to retain.',
              ],
              whyChosen:
                'A coordinator who assesses this as one of many comparable attacks to come invests in ' +
                'the collective rules that raise the cost of the next.',
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
              'You set a public red line: a further attack on national infrastructure will be met ' +
              'with a response of your choosing, at a time of your choosing. The statement is ' +
              'unambiguous and sovereign, and now constitutes a commitment you must honour if it is ' +
              'tested.',
            critique: {
              strengths: [
                'Maximum clarity of deterrent intent, independent of coalition consensus.',
                'Reassures a public seeking a demonstration of resolve.',
              ],
              risks: [
                'A unilateral red line you cannot enforce alone becomes a credibility trap if tested.',
                'Acting alone forgoes the legitimacy and weight of allied support.',
              ],
              whyChosen:
                'A coordinator who distrusts slow coalitions and seeks an unmistakable deterrent ' +
                'message sets the line unilaterally.',
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
            label: 'Invest in structural resilience and human-in-the-loop safeguards.',
            consequence:
              'You direct your political capital toward hardening the country against the next ' +
              'incident: segmenting safety systems, mandating human control over automated defences, ' +
              'and resourcing the defenders. There is no public spectacle and no actor named tonight; ' +
              'the measure is assessed as among the most consequential available.',
            critique: {
              strengths: [
                'Attacks the root vulnerability rather than the symptom of one incident.',
                'Mandating human control over automated defences guards against the next escalation-by-machine.',
              ],
              risks: [
                'Structural work earns little political credit and can be reversed by successors.',
                'Declining to name or punish the attacker can be read as impunity for them.',
              ],
              whyChosen:
                'A coordinator whose assessment is that the limited eleven-minute outage was fortunate ' +
                'directs the aftermath toward defeating the next attack rather than answering the last.',
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
