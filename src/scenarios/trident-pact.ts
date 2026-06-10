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
    'arrangement any of the three has ever entered, and the most politically fragile.\n\n' +
    'This week it is failing on three fronts at once. A serious espionage breach has leaked ' +
    'sensitive pact technology — propulsion and sensor material that took a decade to develop — ' +
    'and the counter-intelligence picture is still forming. The Continental Republic, reading the ' +
    'breach as an opening, has answered with coercion: economic pressure on the Southern ' +
    'Commonwealth’s exports and a pointed show of force in contested waters, a campaign visibly ' +
    'designed to split the partners. And the wobble has become a lurch: a leadership change inside ' +
    'one member has put a sceptic in the room who openly questions the cost of the pact and the ' +
    'sovereignty it surrenders.\n\n' +
    'You broker between three capitals that do not fully trust one another tonight. Your task is to ' +
    'hold the pact together, contain the breach, and keep deterrence credible — without provoking a ' +
    'wider clash or letting the partnership collapse from within.',
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
      title: 'Three fires, one pact',
      narrative:
        'The secure conference convenes at midnight with three capitals on the line and none of them ' +
        'calm. The breach is real: pact propulsion and sensor material has left the building, and the ' +
        'counter-intelligence cell will only say the leak is "consistent with a placed source" without ' +
        'yet naming where — your service, the Isles’, or the Southern Commonwealth’s.\n\n' +
        'While that lands, the Continental Republic moves. Customs delays and quiet sanctions are ' +
        'already biting the Southern Commonwealth’s exporters, and a flotilla is exercising hard ' +
        'against the grain of the usual patterns in contested waters. The message is unsubtle: the ' +
        'pact has a price, and only one of you is being asked to pay it.\n\n' +
        'And in the third capital, the new sceptical leadership has briefed, on background, that the ' +
        'pact may be "a generational bill for someone else’s quarrel". Your first move tonight sets ' +
        'which problem you are seen to be solving first.',
      decision: {
        prompt: 'Three crises break at once. Where do you put your weight in the first hours?',
        options: [
          {
            id: 'tighten-double-down',
            label:
              'Tighten security and double down publicly: lock down technology-sharing and reaffirm the pact loudly.',
            consequence:
              'You impose hard new compartmentalisation on the shared programmes and put out a ringing ' +
              'public reaffirmation of the pact. Adversaries and markets hear resolve. Inside the pact, ' +
              'the new compartments mean partners can suddenly see less of each other’s work — and the ' +
              'wobbling member reads the lockdown as being treated like the suspect.',
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
                'A coordinator who believes the breach is the wedge the adversary will exploit moves first ' +
                'to deny them it — closing the leak and projecting unity before doubt can spread.',
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
              'You backstop the Southern Commonwealth’s squeezed exporters and put pact assets ' +
              'alongside theirs in the contested waters, matching the flotilla’s presence. The ' +
              'Commonwealth steadies and the adversary’s split-them gambit visibly stalls — but two ' +
              'navies are now operating close aboard, and the wobbling member frets that it is being ' +
              'dragged toward someone else’s confrontation.',
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
                'A coordinator who judges that unanswered coercion only invites more answers the pressure ' +
                'directly, knowing a deterrent that is not demonstrated is not believed.',
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
              'You quietly rework the terms for the nervous capital — a softer payment schedule, more ' +
              'sovereign control over how the technology is used on their soil, a seat at decisions that ' +
              'had been made above them. The sceptic’s tone cools. The firmest partner mutters that the ' +
              'pact is being renegotiated under fire, and the breach and the flotilla both go unanswered ' +
              'for now.',
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
                'A coordinator who sees the internal wobble as the existential threat spends the first ' +
                'hours keeping all three inside the tent, judging cohesion the one thing that cannot be rebuilt.',
              doctrine:
                'Burden-sharing and alliance durability: long-term defence commitments survive only if ' +
                'each member’s domestic politics can carry the cost — sometimes the terms must bend so the ' +
                'pact does not break.',
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
              'You open a discreet channel to the Continental Republic signalling that the pact seeks no ' +
              'crisis, and you handle the breach as a counter-intelligence matter rather than a public ' +
              'one. The temperature drops and no one is publicly cornered — but the Commonwealth, still ' +
              'feeling the economic squeeze with no visible backing, wonders whether the pact will ever ' +
              'actually show up for it.',
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
                'A coordinator who fears that a loud response would both escalate with the adversary and ' +
                'panic the wobbling member chooses to lower the temperature and protect the pact’s ' +
                'foundations out of sight.',
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
      title: 'The adversary tests the line',
      narrative:
        'Your opening put resolve in the shop window, and the Continental Republic has come to test ' +
        'it. The flotilla now shadows pact shipping at uncomfortably close range, and state media ' +
        'frames the breach as proof the pact is reckless with technology that "endangers the whole ' +
        'region". The counter-intelligence cell, meanwhile, narrows the leak: at moderate confidence ' +
        'the placed source sat inside the Southern Commonwealth’s programme — the very member the ' +
        'adversary is squeezing. Handled badly, that finding could do the adversary’s splitting work ' +
        'for it.',
      decision: {
        prompt: 'The adversary is probing your resolve and the breach points at the squeezed member. How do you hold the line?',
        options: [
          {
            id: 'reinforce-presence',
            label:
              'Reinforce presence and signal hard: surge pact assets to the contested waters and warn against further probing.',
            consequence:
              'You match the shadowing with a heavier, coordinated pact presence and a blunt private ' +
              'warning. The Continental Republic’s ships ease off the closest approaches; the deterrent ' +
              'holds for now. The waters are also more crowded than ever, and one near-pass between hulls ' +
              'reminds everyone how thin the margin has become.',
            critique: {
              strengths: [
                'Demonstrated resolve at the point of pressure is the clearest language deterrence speaks.',
                'A coordinated surge shows the pact acting as one, blunting the split-them strategy.',
              ],
              risks: [
                'More hulls in tight water raises the odds of an incident no capital ordered.',
                'A visible build-up can lock in a higher baseline of tension that is hard to climb down from.',
              ],
              whyChosen:
                'A coordinator who reads the probing as a test of nerve answers it, judging that a deterrent ' +
                'left untested is a deterrent already half-lost.',
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
              'You keep the moderate-confidence finding inside a tight circle, brief the Commonwealth ' +
              'privately and honestly, and surge collection to firm it up before anyone points a finger. ' +
              'The member is grateful not to be hung out in public; your firmest partner, kept partly in ' +
              'the dark, senses it is being managed and bristles.',
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
                'A coordinator who knows that a premature internal blame would do the adversary’s work ' +
                'protects the member and buys certainty before assigning fault.',
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
              'You put the coercion on the record — the customs squeeze, the sanctions, the pointed ' +
              'manoeuvres — and frame it plainly as an attempt to break the pact. Neutral capitals take ' +
              'notice and the Commonwealth feels seen and defended. The Continental Republic, named as ' +
              'the aggressor, hardens its line and accuses the pact of warmongering.',
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
                'A coordinator who judges the contest is partly for the watching neutrals exposes the ' +
                'coercion to win legitimacy and bind the pact in shared cause.',
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
      title: 'The seam inside the pact',
      narrative:
        'Your opening bought calm with the adversary but left the seam inside the pact exposed, and it ' +
        'is widening. The sceptical leadership, sensing it has leverage, now puts conditions in writing: ' +
        'it wants the cost burden cut, far more sovereign control over the technology on its territory, ' +
        'and a guarantee it will never be committed to a fight it did not choose. The firmest partner ' +
        'reads the demands and warns you, privately, that a pact rewritten under coercion is one the ' +
        'adversary will coerce again. And the counter-intelligence cell now leans — at moderate ' +
        'confidence — toward a source inside the sceptic’s own programme, a finding that could either ' +
        'discipline them or blow the pact apart.',
      decision: {
        prompt: 'The wobbling member is extracting terms and the breach may point at them. How do you keep three capitals in one pact?',
        options: [
          {
            id: 'broker-bargain',
            label:
              'Broker a fair bargain: meet the legitimate demands, refuse the corrosive ones, and bring the firmest partner along.',
            consequence:
              'You concede what is reasonable — cost relief, genuine sovereign safeguards — and hold the ' +
              'line on the guarantee that would have hollowed the pact out, all while squaring it with ' +
              'the firmest partner so no one feels sold out. It is slow, exhausting work, and it holds. ' +
              'The sceptic stays, with terms it can defend at home.',
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
                'A coordinator who treats cohesion as the centre of gravity does the patient brokering to ' +
                'keep all three aboard on terms each can live with, knowing a pact intact is leverage and a ' +
                'pact fractured is none.',
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
              'Confront the sceptic with the breach finding to bring them to heel.',
            consequence:
              'You let the new leadership understand, privately, that the breach may have come from their ' +
              'own house — and that their posturing looks very different in that light. They go quiet and ' +
              'drop the worst demands, chastened. They also now know they were leaned on with an ' +
              'unproven finding, and they will not forget it.',
            critique: {
              strengths: [
                'Uses real leverage to deflate demands that were holding the whole pact hostage.',
                'Forces the wobbling member to face the security failure rather than trade on its leverage.',
              ],
              risks: [
                'Weaponising a moderate-confidence finding against a partner poisons trust if it proves wrong.',
                'A member held by pressure rather than conviction is brittle and may walk the moment it can.',
              ],
              whyChosen:
                'A coordinator who fears the sceptic’s demands will unravel the pact uses the hardest ' +
                'leverage to hand to stop the bleeding, accepting the relational cost as the price of unity.',
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
              'Rather than negotiate only behind closed doors, you help all three governments make the ' +
              'public argument for why the pact is worth its cost and its compromises. It is unglamorous ' +
              'and it moves slowly, but in the sceptic’s capital the conversation shifts from "someone ' +
              'else’s quarrel" to a shared stake, easing the domestic pressure that drove the wobble.',
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
                'A coordinator who sees the wobble as a crisis of domestic legitimacy invests in rebuilding ' +
                'consent, judging that a long commitment survives only if publics keep choosing it.',
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
      title: 'The wobbling member at the door',
      narrative:
        'However you arrived, the crisis now narrows to a single hinge. The wobbling member’s ' +
        'leadership delivers an ultimatum: unless the pact gives ground tonight, it will publicly ' +
        'suspend its participation — and it has let the Continental Republic know the door is ajar. At ' +
        'the same hour the adversary escalates to meet the opening: it announces fresh sanctions, and ' +
        'its flotilla closes to a deliberately provocative posture astride pact shipping lanes. If the ' +
        'member walks, the pact’s geography and credibility both crack; if you bend too far to keep ' +
        'them, the adversary learns exactly how to break you next time. Both pressures peak together, ' +
        'and they are pulling in opposite directions.',
      decision: {
        prompt: 'The member threatens to walk as the adversary escalates. With both pressures peaking, what do you do?',
        options: [
          {
            id: 'hold-firm-deter',
            label:
              'Hold firm on both fronts: refuse the ultimatum’s worst terms and answer the escalation with resolve.',
            consequence:
              'You decline to be split: you tell the wavering member the pact will not be rewritten ' +
              'under an adversary’s gun, and you meet the flotilla’s posturing with a coordinated, ' +
              'unflinching presence. It is a high-wire act. The member, faced with a pact that will not ' +
              'fold, hesitates at the brink; the adversary, faced with unity, slows — but nothing is settled.',
            critique: {
              strengths: [
                'Denies the adversary the lesson that coercion reopens the pact’s terms.',
                'A pact that visibly will not be split is the strongest deterrent and the strongest reassurance.',
              ],
              risks: [
                'Calling the member’s bluff risks it actually walking, taking its geography and credibility with it.',
                'Standing firm at sea as tensions peak keeps forces-risk high with little margin for error.',
              ],
              whyChosen:
                'A coordinator who judges that flexibility now teaches both the partner and the adversary ' +
                'to coerce again refuses to bend at the very moment bending would be read as the pact breaking.',
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
              'You take the deal the member wants and ease the confrontation with the adversary to ' +
              'remove the pretext for the ultimatum. The member stays and the immediate danger of ' +
              'collapse passes. The Continental Republic notes that pressure plus an internal lever ' +
              'reopened the terms, and the firmest partner notes that the pact bent when pushed.',
            critique: {
              strengths: [
                'Keeps the pact whole and its geography intact, denying the adversary an outright fracture.',
                'Lowering the temperature reduces the immediate risk of an incident at sea.',
              ],
              risks: [
                'Conceding under a combined internal-external squeeze writes the playbook for the next coercion.',
                'The firmest partner’s confidence in the pact’s spine takes a quiet, lasting hit.',
              ],
              whyChosen:
                'A coordinator who believes a pact that loses a member loses everything pays the price to ' +
                'keep all three in, judging a whole alliance on softer terms better than a broken one on hard ones.',
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
              'You thread it: a genuine but bounded settlement with the member — cost relief and ' +
              'sovereign safeguards, no veto over the pact’s purpose — announced together as a sign of ' +
              'unity, alongside a measured, collective response to the flotilla that signals resolve ' +
              'without a lunge. The member can sell the deal at home; the adversary sees a pact that ' +
              'answered pressure with cohesion, not surrender.',
            critique: {
              strengths: [
                'Refuses the false choice between holding the member and holding the line.',
                'A joint announcement turns the adversary’s split-them play into a public show of unity.',
              ],
              risks: [
                'Threading two needles at once may satisfy neither hardliners nor the most nervous capital.',
                'A measured response can still be misread at sea, where the margin is thin tonight.',
              ],
              whyChosen:
                'A coordinator who refuses to trade cohesion against credibility looks for the move that ' +
                'buys both — pairing a defensible internal bargain with a disciplined external signal.',
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
      title: 'What the pact becomes',
      narrative:
        'The acute crisis has crested. The breach is contained enough to live with, the flotilla has ' +
        'eased off its sharpest posture, and the wobbling member is still — for now — inside the pact. ' +
        'What remains is the decision that outlives tonight: the posture and the precedent you set for ' +
        'what the Trident Pact is, after a week that nearly ended it. This last choice will not be ' +
        'undone tomorrow.',
      decision: {
        prompt: 'The crisis has crested. This is the decisive close. What do you make the pact become?',
        options: [
          {
            id: 'institutionalise-pact',
            label:
              'Institutionalise it: standing rules for technology security, burden-sharing and crisis decisions, so next time is not improvised.',
            consequence:
              'You convert a near-death week into durable architecture — agreed counter-intelligence ' +
              'standards, a fair and predictable burden-sharing formula, and a joint crisis process so no ' +
              'single capital can be peeled off in the dark. It will outlast your tenure, and the next ' +
              'crisis will begin from firmer ground.',
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
                'A coordinator who sees this week as the first of a category, not a one-off, invests in the ' +
                'institutions that make the pact survivable rather than relying on heroics next time.',
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
              'You close the week by leaning in — accelerating the submarine and advanced-technology ' +
              'transfers and reinforcing the forward posture against the Continental Republic. The ' +
              'message to the adversary is unambiguous: coercion bought it nothing and cost it ground. So ' +
              'is the higher, more dangerous baseline of confrontation you have just set.',
            critique: {
              strengths: [
                'Leaves no doubt that the pact emerged from coercion stronger, not weaker — the core of deterrence.',
                'Reassures the members and their publics that the lesson learned is resolve.',
              ],
              risks: [
                'Locks in a higher floor of tension and standing forces-risk in contested waters.',
                'Deeper, faster technology transfer widens the surface for the next breach and the next leak.',
              ],
              whyChosen:
                'A coordinator who concludes the week happened because the pact looked divisible answers ' +
                'by making its resolve and its capability unmistakable.',
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
              'You spend your remaining capital on something unglamorous — a steadier, more affordable ' +
              'tempo the publics can sustain, a wider political coalition behind the pact in all three ' +
              'capitals, and a discreet standing channel to the Continental Republic so the next crisis ' +
              'has a human on the other end. No headlines. Possibly the most durable thing you do.',
            critique: {
              strengths: [
                'Addresses the root causes — fragile consent and absent off-ramps — rather than the week’s symptoms.',
                'A sustainable pace and a broad political base are what let a long commitment actually last.',
              ],
              risks: [
                'Slowing the pace can read at home and abroad as the pact losing its nerve or its edge.',
                'A crisis channel and a softer tempo can be attacked by hardliners as rewarding coercion.',
              ],
              whyChosen:
                'A coordinator whose lesson is "we were one defection from collapse" rebuilds the ' +
                'foundations so the pact rests on durable consent and open channels rather than on luck.',
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
