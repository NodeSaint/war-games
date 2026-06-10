import type { Scenario } from '@/engine/types'

/**
 * TRIDENT PACT — alliance technology and Indo-Pacific deterrence under strain.
 *
 * Fictionalised throughout: the Trident Pact (a trilateral submarine-and-advanced-
 * technology pact between three maritime democracies — the Atlantic Power, the Isles
 * and the Southern Commonwealth), the Continental Republic and every actor and event
 * are invented. No real states, people or quoted figures. Critique is grounded in
 * genuine War Studies concepts (alliance burden-sharing and cohesion, technology
 * transfer and proliferation risk, deterrence by denial, entrapment/abandonment
 * dilemmas, signalling resolve, espionage and counter-intelligence, domestic audience
 * costs and the durability of long-term defence commitments, escalation control) —
 * concepts only.
 *
 * Structure (reconvergent DAG, 4 phases on the longest path):
 *   P1 crisis (breach + coercion + wobble) → branches into P2-DETER (external-
 *   deterrence track) and P2-COHESION (internal-cohesion track) → both reconverge at
 *   P3-ULTIMATUM (the wobbling member threatens to walk while the Continental Republic
 *   escalates) → P4-CLOSE, the decisive final decision whose options all resolve to
 *   the ending engine (next: null).
 *
 * Here `cohesion` is the pact's centre of gravity: intra-pact choices move it most.
 */
export const tridentPact: Scenario = {
  id: 'trident-pact',
  codename: 'TRIDENT PACT',
  domain: 'Alliance Technology / Indo-Pacific Deterrence',
  basis: 'A trilateral submarine and advanced-technology pact under strain from espionage, a great power’s coercion, and internal political wobble.',
  difficulty: 'Intermediate',
  estPhases: 4,
  role: 'Pact Coordinator for the Atlantic Power, brokering between the three members of the Trident Pact',
  brief:
    'The Trident Pact binds three maritime democracies — the Atlantic Power, the Isles and the ' +
    'Southern Commonwealth — to share submarine and advanced technology and to deter the ' +
    'Continental Republic from coercing the region. It is the most ambitious technology-sharing ' +
    'arrangement any of the three has entered, and among the most politically fragile.\n\n' +
    'Three lines of pressure are now converging. An espionage breach has compromised sensitive pact ' +
    'technology — propulsion and sensor material developed over roughly a decade — and the ' +
    'counter-intelligence assessment remains incomplete. The Continental Republic has read the ' +
    'breach as an opening and responded with coercion: economic pressure on the Southern ' +
    'Commonwealth’s exports and a demonstrative naval presence in contested waters, a campaign ' +
    'assessed as designed to divide the partners. Internal cohesion has also weakened: a leadership ' +
    'change in one member has brought to office a sceptic who questions the cost of the pact and the ' +
    'sovereignty it requires members to cede.\n\n' +
    'You coordinate between three capitals whose mutual trust is, for the moment, limited. Your task ' +
    'is to hold the pact together, contain the breach, and keep deterrence credible without ' +
    'provoking a wider clash or allowing the partnership to fail from within.',
  objectives: [
    'Hold the pact together while a member wobbles — cohesion is your centre of gravity.',
    'Contain the espionage breach without letting counter-intelligence paranoia fracture trust.',
    'Keep deterrence of the Continental Republic credible without inviting a wider clash.',
    'Balance reassuring a nervous partner against signalling resolve to the adversary.',
  ],
  metricsInit: {
    escalation: 32,
    cohesion: 48,
    domestic: 52,
    credibility: 50,
    forcesRisk: 34,
    attribution: 30,
  },
  startNodeId: 'p1-crisis',
  nodes: [
    // ── PHASE 1 — THE TRIPLE CRISIS (branch point) ──────────────────────────
    {
      id: 'p1-crisis',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE TRIPLE CRISIS',
      title: 'Three concurrent crises',
      narrative:
        'A secure conference convenes with all three capitals represented. The breach is confirmed: ' +
        'pact propulsion and sensor material has been compromised, and the counter-intelligence cell ' +
        'assesses the leak as consistent with a placed source but has not yet attributed it to a ' +
        'particular service — your own, the Isles’, or the Southern Commonwealth’s.\n\n' +
        'Concurrently, the Continental Republic is applying pressure. Customs delays and informal ' +
        'sanctions are affecting the Southern Commonwealth’s exporters, and a flotilla is conducting ' +
        'exercises in contested waters at a tempo well outside established patterns. The signal is ' +
        'direct: the pact carries a cost, and only one member is presently being made to bear it.\n\n' +
        'In the third capital, the new sceptical leadership has indicated on background that it views ' +
        'the pact as a generational liability incurred on another party’s behalf. Your opening move ' +
        'will determine which problem you are seen to address first.',
      decision: {
        prompt: 'Three crises are running concurrently. Where do you concentrate effort in the first hours?',
        options: [
          {
            id: 'tighten-double-down',
            label:
              'Tighten security and double down publicly: lock down technology-sharing and reaffirm the pact loudly.',
            consequence:
              'You impose stricter compartmentalisation across the shared programmes and issue a firm ' +
              'public reaffirmation of the pact. The adversary and markets register resolve. Internally, ' +
              'the new compartments reduce partners’ visibility of each other’s work, and the wobbling ' +
              'member interprets the lockdown as being treated as a suspect.',
            critique: {
              strengths: [
                'Signals to the Continental Republic that a breach will harden, not crack, the pact.',
                'Stems the bleeding on the most sensitive technology before more walks out.',
              ],
              risks: [
                'Heavy compartmentalisation among partners corrodes the very trust the pact runs on.',
                'A loud public reaffirmation raises the audience cost of any later flexibility you may need.',
              ],
              whyChosen:
                'A coordinator who judges the breach to be the wedge the adversary will exploit acts first ' +
                'to deny it, closing the leak and projecting unity before doubt spreads.',
              doctrine:
                'Counter-intelligence and proliferation risk in alliances: protecting transferred ' +
                'technology is essential, but security measures aimed inward can themselves become the ' +
                'crack that decouples partners.',
            },
            effects: { attribution: 8, credibility: 8, cohesion: -8, escalation: 4, domestic: 4 },
            styleTags: ['decisive', 'forceful', 'signalling', 'keep-control'],
            next: 'p2-deter',
          },
          {
            id: 'answer-coercion',
            label:
              'Answer the Continental Republic’s coercion firmly: visible reassurance to the Commonwealth and a show of resolve at sea.',
            consequence:
              'You backstop the Southern Commonwealth’s affected exporters and deploy pact assets ' +
              'alongside theirs in the contested waters, matching the flotilla’s presence. The ' +
              'Commonwealth steadies and the adversary’s divide-and-rule effort stalls. Two navies are ' +
              'now operating in close proximity, and the wobbling member is concerned that it is being ' +
              'drawn toward a confrontation not of its making.',
            critique: {
              strengths: [
                'Defeats the coercion on its own terms: the target is not left to face pressure alone.',
                'Demonstrates that the pact’s mutual commitment is real and not just on paper.',
              ],
              risks: [
                'Close-aboard naval presence raises forces-risk and the chance of an unintended incident.',
                'Visible resolve can feed the sceptic’s fear of entrapment in a quarrel not of their making.',
              ],
              whyChosen:
                'A coordinator who assesses that unanswered coercion invites further coercion responds to ' +
                'the pressure directly, on the premise that an undemonstrated deterrent is not credited.',
              doctrine:
                'Deterrence by denial and the entrapment dilemma: countering coercion proves the alliance ' +
                'commitment, but the same act that reassures the target can frighten a partner who fears ' +
                'being chained to escalation.',
            },
            effects: { credibility: 10, cohesion: 4, escalation: 10, forcesRisk: 10, domestic: 2 },
            styleTags: ['forceful', 'escalatory', 'signalling', 'alliance-first'],
            next: 'p2-deter',
          },
          {
            id: 'reassure-wobbler',
            label:
              'Reassure the wobbling member with concessions: ease the cost burden and hand them a real say in the programme.',
            consequence:
              'You discreetly revise the terms for the wavering capital: an eased payment schedule, ' +
              'greater sovereign control over how the technology is employed on its territory, and a seat ' +
              'at decisions previously taken above it. The sceptic’s position softens. The firmest partner ' +
              'objects that the pact is being renegotiated under pressure, and both the breach and the ' +
              'flotilla remain unaddressed for now.',
            critique: {
              strengths: [
                'Goes straight at the centre of gravity: a pact that loses a member loses everything.',
                'Addressing sovereignty and cost concerns can convert a sceptic into a stakeholder.',
              ],
              risks: [
                'Renegotiating under pressure teaches the adversary that coercion reopens the terms.',
                'Concessions to one member can leave the firmest partner feeling its commitment is taken for granted.',
              ],
              whyChosen:
                'A coordinator who assesses the internal wobble as the principal threat uses the first ' +
                'hours to keep all three members engaged, judging cohesion the hardest element to rebuild ' +
                'once lost.',
              doctrine:
                'Burden-sharing and alliance durability: long-term defence commitments endure only if ' +
                'each member’s domestic politics can sustain the cost; on occasion the terms must adjust to ' +
                'prevent the pact from fracturing.',
            },
            effects: { cohesion: 12, domestic: -4, credibility: -6, escalation: -4 },
            styleTags: ['reassurance', 'consultative', 'burden-sharing', 'alliance-first'],
            next: 'p2-cohesion',
          },
          {
            id: 'quiet-deescalate',
            label:
              'Quietly de-escalate and protect the foundations: backchannel restraint to the Republic, contain the breach without drama.',
            consequence:
              'You open a discreet channel to the Continental Republic indicating that the pact seeks no ' +
              'crisis, and you treat the breach as a counter-intelligence matter rather than a public one. ' +
              'Tensions ease and no party is publicly cornered. The Commonwealth, however, still under ' +
              'economic pressure and without visible support, doubts whether the pact will act on its ' +
              'behalf.',
            critique: {
              strengths: [
                'Buys time to firm up attribution before anyone commits to a public accusation.',
                'Avoids handing the adversary a public confrontation that could rally its own audience.',
              ],
              risks: [
                'Quiet restraint can read inside the pact as the alliance failing to defend a member under pressure.',
                'A backchannel only works if there is a hand on the other side willing to take the off-ramp.',
              ],
              whyChosen:
                'A coordinator who judges that a visible response would both escalate with the adversary ' +
                'and unsettle the wobbling member opts to reduce tensions and protect the pact’s ' +
                'foundations away from public view.',
              doctrine:
                'Escalation control and reassurance as the quiet half of deterrence: keeping a crisis ' +
                'below the public threshold preserves options, but restraint unseen by a frightened ally ' +
                'can be mistaken for abandonment.',
            },
            effects: { escalation: -10, attribution: 6, cohesion: -2, forcesRisk: -4, credibility: -4 },
            styleTags: ['de-escalatory', 'restraint', 'off-ramp', 'consultative'],
            next: 'p2-cohesion',
          },
        ],
      },
    },

    // ── PHASE 2A — EXTERNAL DETERRENCE TRACK ────────────────────────────────
    {
      id: 'p2-deter',
      phase: 2,
      phaseLabel: 'PHASE 2 · DETERRENCE TRACK',
      title: 'The adversary probes the line',
      narrative:
        'Your opening signalled resolve, and the Continental Republic is now testing it. The flotilla ' +
        'is shadowing pact shipping at close range, and state media frames the breach as evidence that ' +
        'the pact is reckless with technology that endangers the wider region. The counter-intelligence ' +
        'cell has narrowed the leak: at moderate confidence the placed source was within the Southern ' +
        'Commonwealth’s programme — the member the adversary is presently pressuring. Mishandled, this ' +
        'finding could advance the adversary’s divisive aims for it.',
      decision: {
        prompt: 'The adversary is probing your resolve and the breach points to the pressured member. How do you hold the line?',
        options: [
          {
            id: 'reinforce-presence',
            label:
              'Reinforce presence and signal hard: surge pact assets to the contested waters and warn against further probing.',
            consequence:
              'You match the shadowing with a larger, coordinated pact presence and a direct private ' +
              'warning. The Continental Republic’s ships ease off their closest approaches and the ' +
              'deterrent holds for now. The waters are also more congested, and a near-pass between hulls ' +
              'illustrates how narrow the margin has become.',
            critique: {
              strengths: [
                'Demonstrated resolve at the point of pressure is the clearest signal deterrence conveys.',
                'A coordinated reinforcement shows the pact acting in concert, countering the divide-and-rule approach.',
              ],
              risks: [
                'More vessels in confined waters raises the probability of an incident no capital authorised.',
                'A visible build-up can establish a higher baseline of tension that is difficult to reverse.',
              ],
              whyChosen:
                'A coordinator who reads the probing as a test of resolve responds in kind, judging that an ' +
                'untested deterrent is already substantially degraded.',
              doctrine:
                'Signalling resolve and deterrence by denial: meeting a probe with visible, collective ' +
                'capability raises the adversary’s expected cost — at the price of a thinner margin for accident.',
            },
            effects: { credibility: 10, cohesion: 4, escalation: 12, forcesRisk: 12 },
            styleTags: ['forceful', 'escalatory', 'signalling', 'brinkmanship'],
            next: 'p3-ultimatum',
          },
          {
            id: 'contain-breach-quietly',
            label:
              'Contain the breach finding quietly: protect the Commonwealth from blame while you firm up attribution.',
            consequence:
              'You hold the moderate-confidence finding within a restricted circle, brief the Commonwealth ' +
              'privately and candidly, and increase collection to firm it up before attribution is made ' +
              'public. The member is relieved not to be exposed publicly; the firmest partner, kept only ' +
              'partly informed, perceives that it is being managed and objects.',
            critique: {
              strengths: [
                'Denies the adversary the spectacle of the pact accusing its own member.',
                'Treats moderate confidence as moderate confidence, leaving room for the verdict to move.',
              ],
              risks: [
                'Holding a finding back from a partner is itself a trust cost if it later surfaces.',
                'A vacuum invites leaks; the adversary may put its own version of the breach into the open first.',
              ],
              whyChosen:
                'A coordinator who recognises that premature internal blame would serve the adversary ' +
                'protects the member and seeks greater certainty before assigning fault.',
              doctrine:
                'Counter-intelligence under alliance strain: managing a breach so that the hunt for the ' +
                'source does not itself become the instrument that decouples the pact.',
            },
            effects: { attribution: 12, cohesion: 6, escalation: -4, credibility: -2 },
            styleTags: ['evidence-seeking', 'verify-first', 'deliberate', 'human-in-loop'],
            next: 'p3-ultimatum',
          },
          {
            id: 'expose-coercion',
            label:
              'Expose the coercion: publicly document the economic pressure and show of force as a campaign to split the pact.',
            consequence:
              'You place the coercion on the record — the customs pressure, the sanctions, the ' +
              'demonstrative manoeuvres — and characterise it directly as an attempt to break the pact. ' +
              'Neutral capitals take note and the Commonwealth registers that it is being defended. The ' +
              'Continental Republic, named as the aggressor, hardens its position and accuses the pact of ' +
              'provocation.',
            critique: {
              strengths: [
                'Reframes the adversary from injured party to coercer, defending the pact’s legitimacy.',
                'Public solidarity with the squeezed member is the strongest answer to a divide-and-rule play.',
              ],
              risks: [
                'Naming and shaming locks both sides into public positions that are costly to leave.',
                'A cornered adversary with an audience of its own may escalate rather than relent.',
              ],
              whyChosen:
                'A coordinator who assesses that the contest is partly for the watching neutral states ' +
                'exposes the coercion to secure legitimacy and consolidate the pact around a shared cause.',
              doctrine:
                'Contesting the narrative and audience costs: publicly attributing coercion can rally ' +
                'support and stiffen cohesion, but it also raises the adversary’s own audience cost of backing down.',
            },
            effects: { cohesion: 8, credibility: 6, domestic: 4, escalation: 8, attribution: -2 },
            styleTags: ['decisive', 'signalling', 'alliance-first', 'escalatory'],
            next: 'p3-ultimatum',
          },
        ],
      },
    },

    // ── PHASE 2B — INTERNAL COHESION TRACK ──────────────────────────────────
    {
      id: 'p2-cohesion',
      phase: 2,
      phaseLabel: 'PHASE 2 · COHESION TRACK',
      title: 'The internal fault line',
      narrative:
        'Your opening reduced tensions with the adversary but left the internal fault line exposed, and ' +
        'it is widening. The sceptical leadership, assessing that it holds leverage, has now set its ' +
        'conditions in writing: a reduced cost burden, substantially greater sovereign control over the ' +
        'technology on its territory, and a guarantee that it will not be committed to a conflict it did ' +
        'not choose. The firmest partner reviews the demands and warns you privately that a pact ' +
        'rewritten under coercion will invite further coercion. The counter-intelligence cell now ' +
        'assesses, at moderate confidence, that the source lay within the sceptic’s own programme — a ' +
        'finding that could either constrain them or fracture the pact.',
      decision: {
        prompt: 'The wobbling member is extracting terms and the breach may point to it. How do you keep three capitals in one pact?',
        options: [
          {
            id: 'broker-bargain',
            label:
              'Broker a fair bargain: meet the legitimate demands, refuse the corrosive ones, and bring the firmest partner along.',
            consequence:
              'You concede what is reasonable — cost relief and genuine sovereign safeguards — while ' +
              'refusing the guarantee that would have hollowed out the pact, and you align the outcome ' +
              'with the firmest partner so that no member feels disregarded. The process is slow and ' +
              'demanding, and it holds. The sceptic remains, on terms it can defend domestically.',
            critique: {
              strengths: [
                'Distinguishes legitimate burden-sharing claims from concessions that would gut deterrence.',
                'Keeping the firmest partner aligned prevents solving one defection by causing another.',
              ],
              risks: [
                'Any concession under pressure sets a reference point the adversary will probe again.',
                'Brokered compromises can satisfy no one fully, leaving residual resentment in every capital.',
              ],
              whyChosen:
                'A coordinator who treats cohesion as the centre of gravity undertakes the patient ' +
                'brokering required to keep all three members engaged on acceptable terms, on the judgement ' +
                'that an intact pact confers leverage and a fractured one confers none.',
              doctrine:
                'Burden-sharing and intra-alliance bargaining: durable cohesion comes from aligning ' +
                'interests on terms members can defend domestically, not from either capitulation or coercion.',
            },
            effects: { cohesion: 14, domestic: -4, credibility: 2, escalation: -2 },
            styleTags: ['consultative', 'burden-sharing', 'multilateral', 'alliance-first'],
            next: 'p3-ultimatum',
          },
          {
            id: 'confront-with-breach',
            label:
              'Confront the sceptic with the breach finding to curb its demands.',
            consequence:
              'You make the new leadership privately aware that the breach may have originated within its ' +
              'own programme, and that its demands read differently in that light. It moderates its tone ' +
              'and withdraws the most damaging demands. It also understands that pressure was applied on ' +
              'the basis of an unproven finding, and is unlikely to forget it.',
            critique: {
              strengths: [
                'Uses real leverage to deflate demands that were holding the whole pact hostage.',
                'Forces the wobbling member to face the security failure rather than trade on its leverage.',
              ],
              risks: [
                'Using a moderate-confidence finding as leverage against a partner damages trust if it proves wrong.',
                'A member held by pressure rather than conviction is brittle and may withdraw at the first opportunity.',
              ],
              whyChosen:
                'A coordinator who judges that the sceptic’s demands will unravel the pact applies the ' +
                'strongest available leverage to arrest the decline, accepting the relational cost as the ' +
                'price of unity.',
              doctrine:
                'The limits of coercion among allies and the entrapment/abandonment dilemma: intra-pact ' +
                'pressure can hold the line today but corrodes the trust that makes the alliance worth ' +
                'holding tomorrow.',
            },
            effects: { cohesion: -8, attribution: 4, credibility: 4, domestic: 2 },
            styleTags: ['coercive', 'decisive', 'sovereign-action', 'forceful'],
            next: 'p3-ultimatum',
          },
          {
            id: 'reframe-purpose',
            label:
              'Reframe the pact’s purpose: take the sovereignty fight public at home and rebuild the case for the long commitment.',
            consequence:
              'Rather than negotiate solely behind closed doors, you support all three governments in ' +
              'making the public case for why the pact justifies its cost and its compromises. The work is ' +
              'slow, but in the sceptic’s capital the public framing shifts from an external quarrel to a ' +
              'shared interest, easing the domestic pressure that drove the wobble.',
            critique: {
              strengths: [
                'Attacks the root of the wobble — eroding domestic consent — rather than only its symptoms.',
                'A pact defended in public is far harder for the adversary to peel apart in private.',
              ],
              risks: [
                'Public argument is slow and can backfire if the sovereignty case lands badly at home.',
                'Reopening the rationale in public can hand the sceptic’s critics a louder platform.',
              ],
              whyChosen:
                'A coordinator who interprets the wobble as a crisis of domestic legitimacy invests in ' +
                'rebuilding consent, on the judgement that a long-term commitment endures only while publics ' +
                'continue to support it.',
              doctrine:
                'Domestic audience costs and the durability of long-term commitments: alliances endure when ' +
                'their publics own the rationale, so contested defence bargains are won at home as much as abroad.',
            },
            effects: { cohesion: 8, domestic: 8, credibility: 2, escalation: -2, attribution: -2 },
            styleTags: ['consultative', 'deliberate', 'multilateral', 'alliance-first'],
            next: 'p3-ultimatum',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE ULTIMATUM ──────────────────────────────
    {
      id: 'p3-ultimatum',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE ULTIMATUM',
      title: 'The ultimatum',
      narrative:
        'However you arrived, the crisis now turns on a single decision. The wobbling member’s ' +
        'leadership issues an ultimatum: unless the pact concedes ground, it will publicly suspend its ' +
        'participation, and it has signalled to the Continental Republic that withdrawal is possible. ' +
        'Concurrently, the adversary escalates to exploit the opening, announcing further sanctions and ' +
        'moving its flotilla to a deliberately provocative posture across pact shipping lanes. If the ' +
        'member withdraws, both the pact’s geography and its credibility are compromised; if you concede ' +
        'too much to retain it, the adversary learns how to coerce the pact again. Both pressures are ' +
        'peaking simultaneously and pull in opposite directions.',
      decision: {
        prompt: 'The member threatens withdrawal as the adversary escalates. With both pressures peaking, what do you do?',
        options: [
          {
            id: 'hold-firm-deter',
            label:
              'Hold firm on both fronts: refuse the ultimatum’s worst terms and answer the escalation with resolve.',
            consequence:
              'You decline to be divided: you inform the wavering member that the pact will not be ' +
              'rewritten under adversary pressure, and you meet the flotilla’s posture with a coordinated, ' +
              'steady presence. The approach carries substantial risk. The member, confronted with a pact ' +
              'that will not yield, holds back from withdrawal; the adversary, confronted with unity, ' +
              'slows. Nothing, however, is resolved.',
            critique: {
              strengths: [
                'Denies the adversary the lesson that coercion reopens the pact’s terms.',
                'A pact that visibly will not be split is the strongest deterrent and the strongest reassurance.',
              ],
              risks: [
                'Testing the member’s resolve risks an actual withdrawal, removing its geography and credibility from the pact.',
                'Standing firm at sea as tensions peak keeps forces-risk high with little margin for error.',
              ],
              whyChosen:
                'A coordinator who assesses that concession now would teach both the partner and the ' +
                'adversary to coerce again declines to yield at the point where yielding would be read as ' +
                'the pact failing.',
              doctrine:
                'Resolve under simultaneous abandonment and external pressure: holding the line denies ' +
                'the adversary a decoupling win, but gambles that the partner values the pact more than its exit.',
            },
            effects: { credibility: 10, escalation: 12, forcesRisk: 10, cohesion: -4, domestic: 4 },
            styleTags: ['forceful', 'brinkmanship', 'decisive', 'signalling'],
            next: 'p4-close',
          },
          {
            id: 'concede-keep-member',
            label:
              'Concede to keep the member: give the ground demanded and lower the external temperature to hold the pact whole.',
            consequence:
              'You accept the terms the member seeks and ease the confrontation with the adversary to ' +
              'remove the pretext for the ultimatum. The member remains and the immediate risk of collapse ' +
              'passes. The Continental Republic notes that pressure combined with an internal lever ' +
              'reopened the terms, and the firmest partner notes that the pact conceded under pressure.',
            critique: {
              strengths: [
                'Keeps the pact whole and its geography intact, denying the adversary an outright fracture.',
                'Lowering the temperature reduces the immediate risk of an incident at sea.',
              ],
              risks: [
                'Conceding under combined internal and external pressure establishes a precedent for the next coercion.',
                'The firmest partner’s confidence in the pact’s resolve is durably reduced.',
              ],
              whyChosen:
                'A coordinator who assesses that a pact losing a member loses its essential value pays the ' +
                'price to retain all three, judging an intact alliance on softer terms preferable to a ' +
                'fractured one on firmer terms.',
              doctrine:
                'Cohesion versus deterrent credibility: capitulation can preserve unity in the moment while ' +
                'eroding the deterrent reputation that gave the pact its purpose — a classic alliance trade-off.',
            },
            effects: { cohesion: 10, escalation: -10, forcesRisk: -6, credibility: -10, domestic: -2 },
            styleTags: ['reassurance', 'de-escalatory', 'restraint', 'alliance-first'],
            next: 'p4-close',
          },
          {
            id: 'broker-mutual',
            label:
              'Broker a mutual move: a fair, public pact bargain paired with a coordinated, measured response to the escalation.',
            consequence:
              'You pursue a combined approach: a genuine but bounded settlement with the member — cost ' +
              'relief and sovereign safeguards, but no veto over the pact’s purpose — announced jointly as ' +
              'a demonstration of unity, alongside a measured, collective response to the flotilla that ' +
              'signals resolve without overcommitment. The member can defend the settlement domestically; ' +
              'the adversary observes a pact that met pressure with cohesion rather than concession.',
            critique: {
              strengths: [
                'Refuses the false choice between holding the member and holding the line.',
                'A joint announcement turns the adversary’s split-them play into a public show of unity.',
              ],
              risks: [
                'Pursuing both objectives at once may satisfy neither hardliners nor the most anxious capital.',
                'A measured response can still be misread at sea, where the margin is currently narrow.',
              ],
              whyChosen:
                'A coordinator who declines to trade cohesion against credibility seeks the option that ' +
                'serves both, pairing a defensible internal settlement with a disciplined external signal.',
              doctrine:
                'Coupling reassurance and deterrence: addressing a partner’s legitimate needs while ' +
                'signalling collective resolve can hold cohesion and credibility together — the hardest ' +
                'and most valuable balance in alliance management.',
            },
            effects: { cohesion: 8, credibility: 6, escalation: -2, attribution: 2, domestic: 2, forcesRisk: -2 },
            styleTags: ['consultative', 'multilateral', 'burden-sharing', 'off-ramp'],
            next: 'p4-close',
          },
        ],
      },
    },

    // ── PHASE 4 — THE DECISIVE CLOSE → ENDING RESOLVER ──────────────────────
    {
      id: 'p4-close',
      phase: 4,
      phaseLabel: 'PHASE 4 · THE CLOSE',
      title: 'The pact’s future posture',
      narrative:
        'The acute phase of the crisis has passed. The breach is contained to a manageable level, the ' +
        'flotilla has eased its sharpest posture, and the wobbling member remains, for now, within the ' +
        'pact. What remains is the longer-term decision: the posture and the precedent you set for what ' +
        'the Trident Pact becomes after a week that nearly ended it. This choice will be difficult to ' +
        'reverse.',
      decision: {
        prompt: 'The acute crisis has passed. This is the decisive close. What do you make the pact become?',
        options: [
          {
            id: 'institutionalise-pact',
            label:
              'Institutionalise it: standing rules for technology security, burden-sharing and crisis decisions, so next time is not improvised.',
            consequence:
              'You convert a near-failure into durable architecture: agreed counter-intelligence ' +
              'standards, a fair and predictable burden-sharing formula, and a joint crisis process that ' +
              'prevents any single capital from being isolated. The arrangements will outlast your tenure, ' +
              'and the next crisis will begin from firmer ground.',
            critique: {
              strengths: [
                'Turns survival into resilience: the recurring vulnerabilities are addressed structurally, not ad hoc.',
                'Predictable rules on cost and security deny the adversary the seams it spent the week probing.',
              ],
              risks: [
                'Binding rules can constrain a member in a future case where it genuinely needs flexibility.',
                'Consensus on standards is slow and may dilute to the most reluctant member’s comfort.',
              ],
              whyChosen:
                'A coordinator who regards this crisis as the first of a recurring category, rather than an ' +
                'isolated event, invests in the institutions that make the pact resilient rather than ' +
                'relying on improvisation next time.',
              doctrine:
                'Institutionalising alliance cohesion: durable rules on burden-sharing, technology security ' +
                'and collective decision-making make an alliance resilient to coercion that exploits ambiguity.',
            },
            effects: { cohesion: 8, credibility: 4, attribution: 4, escalation: -2 },
            styleTags: ['multilateral', 'deliberate', 'burden-sharing', 'alliance-first'],
            next: null,
          },
          {
            id: 'harden-deterrent',
            label:
              'Harden the deterrent: deepen the technology-sharing and the forward posture to make the pact’s resolve unmistakable.',
            consequence:
              'You close the crisis by reinforcing commitment, accelerating the submarine and ' +
              'advanced-technology transfers and strengthening the forward posture against the Continental ' +
              'Republic. The signal to the adversary is unambiguous: coercion gained it nothing and cost ' +
              'it ground. So is the higher and more hazardous baseline of confrontation now established.',
            critique: {
              strengths: [
                'Establishes clearly that the pact emerged from coercion stronger rather than weaker — central to deterrence.',
                'Reassures the members and their publics that the response to coercion is resolve.',
              ],
              risks: [
                'Establishes a higher floor of tension and standing forces-risk in contested waters.',
                'Deeper and faster technology transfer widens the surface for the next breach.',
              ],
              whyChosen:
                'A coordinator who concludes that the crisis occurred because the pact appeared divisible ' +
                'responds by making its resolve and capability unambiguous.',
              doctrine:
                'Deterrence restoration and proliferation risk: re-signalling resolve after coercion ' +
                'deters the next probe, but a harder, more coupled posture raises both escalation risk and ' +
                'the exposure of the very technology being shared.',
            },
            effects: { credibility: 8, cohesion: 2, escalation: 10, forcesRisk: 10, domestic: 4 },
            styleTags: ['forceful', 'escalatory', 'signalling', 'sovereign-action'],
            next: null,
          },
          {
            id: 'recalibrate-foundations',
            label:
              'Recalibrate the foundations: slow the pace, broaden the political base, and invest in quiet crisis channels with the Republic.',
            consequence:
              'You direct your remaining capital toward foundational measures: a steadier, more affordable ' +
              'tempo that the publics can sustain, a broader political coalition behind the pact in all ' +
              'three capitals, and a discreet standing channel to the Continental Republic so that the ' +
              'next crisis has an interlocutor on the other side. The measures attract little attention but ' +
              'may prove the most durable outcome.',
            critique: {
              strengths: [
                'Addresses the root causes — fragile consent and absent off-ramps — rather than the week’s symptoms.',
                'A sustainable pace and a broad political base are what let a long commitment actually last.',
              ],
              risks: [
                'Slowing the pace may be read at home and abroad as the pact losing resolve or capability.',
                'A crisis channel and a reduced tempo can be criticised by hardliners as rewarding coercion.',
              ],
              whyChosen:
                'A coordinator who concludes that the pact came within one defection of collapse rebuilds ' +
                'the foundations so that it rests on durable consent and open channels rather than on ' +
                'favourable circumstance.',
              doctrine:
                'Durability of long-term commitments and escalation control: matching ambition to ' +
                'sustainable domestic consent, and building human off-ramps, so the alliance endures the ' +
                'long competition rather than only the present crisis.',
            },
            effects: { cohesion: 6, domestic: 6, escalation: -6, credibility: -2, forcesRisk: -2 },
            styleTags: ['de-escalatory', 'consultative', 'restraint', 'off-ramp'],
            next: null,
          },
        ],
      },
    },
  ],
}
