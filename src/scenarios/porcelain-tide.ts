import type { Scenario } from '@/engine/types'

/**
 * PORCELAIN TIDE — great-power fait accompli at sea.
 *
 * Fictionalised throughout: the Continental Republic (a continental great power
 * claiming the island), Meilan (the contested island democracy that dominates
 * world semiconductor fabrication), the Maritime Alliance / Coalition (the
 * player's side) and Columbia / the Atlantic Power (the senior coalition
 * superpower) are all invented analogues. No real states, people or quoted
 * figures. Critique is grounded in genuine War Studies concepts — the fait
 * accompli and the defender's dilemma, blockade and quarantine below the
 * threshold of war, coercion and resolve, extended deterrence and credibility,
 * economic interdependence as leverage, horizontal versus vertical escalation,
 * signalling and audience costs, alliance cohesion — concepts only.
 *
 * Structure (reconvergent DAG, longest path = 6 phases):
 *   P1 announcement → branches into P2-CHALLENGE (direct/military track) and
 *   P2-COALITION (economic/diplomatic track) → both reconverge at P3-TIGHTEN
 *   (the quarantine hardens; an escorted hull / an incident forces a choice) →
 *   shared spine P4-MEILAN (the island's resolve) → P5-CROSSROADS (the decisive
 *   escalate-or-accommodate moment) → P6-CLOSE (the strategic close) →
 *   state-driven ending. `forcesRisk` reads as exposure of Coalition hulls,
 *   crews and Meilan's civilians; `domestic` folds in market and economic shock.
 */
export const porcelainTide: Scenario = {
  id: 'porcelain-tide',
  codename: 'PORCELAIN TIDE',
  domain: 'Great-Power / Fait Accompli at Sea',
  basis: 'A coercive customs "quarantine" of a contested island democracy below the threshold of war, and semiconductor dependence as leverage.',
  difficulty: 'Advanced',
  estPhases: 6,
  role: 'National Security Adviser to the Atlantic Power, senior partner in the Maritime Alliance',
  brief:
    'The Continental Republic has announced a "customs quarantine" of Meilan — the island ' +
    'democracy it claims as sovereign territory and the source of the most advanced semiconductors ' +
    'available. Its coastguard, rather than its navy, will inspect all shipping bound for the island ' +
    'and turn back any cargo assessed to be contraband. There is no declaration of blockade or of ' +
    'war; the measure is framed as law enforcement within waters the Republic claims as its own. ' +
    'The practical effect is a blockade. Within hours, shipping is queuing or diverting, insurers ' +
    'are withdrawing cover, and the global semiconductor supply is contracting.\n\n' +
    'The action is assessed as a fait accompli, calibrated to remain below the threshold that would ' +
    'justify a war neither side appears to want, and to place the onus of the first use of force on ' +
    'the Coalition. Meilan\'s government is resolute but under strain. Markets are falling sharply. ' +
    'Coalition partners are already diverging on the acceptable level of cost and risk. A decision is ' +
    'required within the hour. The question is not whether to respond, but how to break or out-wait ' +
    'the quarantine without precipitating the great-power war it was designed to avoid.',
  objectives: [
    'Break or out-wait a fait accompli without firing the first shot or being read as weak.',
    'Hold the coalition together while partners diverge on cost and risk.',
    'Use economic interdependence as leverage without detonating it on your own economy.',
    'Keep Meilan\'s resolve and your own credibility intact under market and time pressure.',
  ],
  metricsInit: {
    escalation: 40,
    cohesion: 55,
    domestic: 52,
    credibility: 50,
    forcesRisk: 36,
    attribution: 60,
  },
  startNodeId: 'p1-quarantine',
  nodes: [
    // ── PHASE 1 — THE ANNOUNCEMENT (branch point) ───────────────────────────
    {
      id: 'p1-quarantine',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE QUARANTINE',
      title: 'A blockade framed as customs enforcement',
      narrative:
        'The intelligence picture is unusually clear. The Continental Republic is implementing the ' +
        'announced measure with coastguard cutters and a maritime "militia" of fishing vessels, not ' +
        'naval combatants. Two cargo vessels have been turned back. A liquefied-gas tanker bound for ' +
        'Meilan is hove-to, awaiting inspection. The legal framing is deliberate: each action is ' +
        'presented as a sovereign state policing its own customs, with the intent of casting any ' +
        'intervening Coalition warship as the aggressor.\n\n' +
        'Meilan can sustain itself on stockpiles for weeks, not months. The global semiconductor ' +
        'supply it anchors is already destabilising markets. Your first move sets the frame for what ' +
        'follows — whether the Coalition presents as the challenger of an unlawful blockade or as the ' +
        'architect of graduated pressure.',
      decision: {
        prompt: 'How does the Coalition respond in the first hours?',
        options: [
          {
            id: 'escort',
            label:
              'Challenge it at sea: announce Coalition-escorted shipping will sail to Meilan through the "quarantine".',
            consequence:
              'You declare that lawful commerce will be escorted to Meilan and that the Coalition ' +
              'does not recognise the quarantine. A destroyer group is directed toward the strait. ' +
              'Meilan is reassured and domestic hardliners are satisfied. The Republic now has the ' +
              'maritime confrontation it has been seeking to provoke.',
            critique: {
              strengths: [
                'Refuses the fait accompli directly rather than legitimising it by working around it.',
                'Demonstrates resolve to Meilan, allies and the adversary in the one currency — presence — they cannot ignore.',
              ],
              risks: [
                'Places your vessels, and the onus of first use of force, on the contested water — precisely the outcome the quarantine was designed to engineer.',
                'A coastguard inspection of an escorted hull becomes a great-power incident with no agreed sequence for managing it.',
              ],
              whyChosen:
                'A leader who judges that an unanswered fait accompli becomes a precedent contests it ' +
                'at the point of imposition, assessing that demonstrated resolve deters the next ' +
                'increment.',
              doctrine:
                'The defender\'s dilemma against a fait accompli: the initiating party shifts the onus ' +
                'of escalation onto the defender, such that reversing the accomplished fact requires ' +
                'the first use of force. A direct maritime challenge accepts that burden explicitly.',
            },
            effects: { credibility: 10, escalation: 14, forcesRisk: 14, domestic: 4, cohesion: -4 },
            styleTags: ['forceful', 'decisive', 'escalatory', 'sovereign-action'],
            next: 'p2-challenge',
          },
          {
            id: 'surge',
            label:
              'Surge military posture short of contact: mass the fleet, raise readiness, deter without entering the cordon.',
            consequence:
              'You move carriers and aircraft into the theatre and raise readiness across the ' +
              'alliance, while ordering your vessels to hold outside the quarantine line. The ' +
              'deterrent signal is clear. So too is the fact that the cordon around Meilan remains ' +
              'untouched.',
            critique: {
              strengths: [
                'Generates maximum deterrent signal while keeping the first-shot decision in your own hands.',
                'Buys time and options without conceding the quarantine or triggering an incident inside it.',
              ],
              risks: [
                'A posture that never contacts the cordon may be read as a bluff, allowing the quarantine to take effect unopposed.',
                'A large force held idle may invite the adversary to test the location of the actual red line.',
              ],
              whyChosen:
                'A leader seeking to demonstrate resolve without creating a tripwire masses force to ' +
                'deter further moves while retaining the decision over whether and when to contest the ' +
                'cordon.',
              doctrine:
                'Deterrence by visible capability and the credibility-resolve gap: massed force ' +
                'signals the capacity to break the quarantine, but a threat that is not executed can ' +
                'erode the very resolve it is intended to project.',
            },
            effects: { credibility: 8, escalation: 8, forcesRisk: 8, cohesion: 2 },
            styleTags: ['forceful', 'coercive', 'decisive', 'signalling'],
            next: 'p2-challenge',
          },
          {
            id: 'coalition-pressure',
            label:
              'Rally economic and diplomatic coalition pressure: sanctions threat, legal condemnation, a united wall.',
            consequence:
              'You hold the warships back and use the first hours to assemble the broadest possible ' +
              'front: a joint condemnation, a credible sanctions package prepared, and the ' +
              'quarantine\'s illegality argued in every available forum. This is slower than a naval ' +
              'response, and the cordon continues to tighten while the bloc is assembled. It also ' +
              'builds the one instrument the adversary cannot easily discount: a unified economic ' +
              'bloc.',
            critique: {
              strengths: [
                'Plays to the Coalition\'s real comparative advantage — collective economic and diplomatic weight.',
                'Keeps the first-shot burden off your forces and the moral framing squarely on the Republic.',
              ],
              risks: [
                'Coalition consensus is slow while the quarantine is fast; Meilan\'s stockpiles deplete during the negotiation of common positions.',
                'Pressure that does not impose cost may allow the adversary to consolidate the fait accompli and out-wait the Coalition.',
              ],
              whyChosen:
                'A leader who assesses that the Coalition prevails in a protracted economic contest ' +
                'rather than a short maritime one invests first in the bloc that increases the weight ' +
                'of every subsequent measure.',
              doctrine:
                'Coercion through collective economic statecraft and coalition-building: converting a ' +
                'fait accompli into a contest of resolve conducted through interdependence rather than ' +
                'force, in which the breadth of the coalition is the principal source of leverage.',
            },
            effects: { cohesion: 12, escalation: -4, credibility: -2, domestic: -2, attribution: 2 },
            styleTags: ['multilateral', 'consultative', 'alliance-first', 'restraint'],
            next: 'p2-coalition',
          },
          {
            id: 'long-game',
            label:
              'Avoid the tripwire entirely: route around the cordon, backstop Meilan quietly, play a long economic game.',
            consequence:
              'You decline the confrontation the quarantine was designed to provoke. Instead you ' +
              'organise covert and neutral-flagged resupply, build chip stockpiles and alternative ' +
              'fabrication capacity abroad, and signal privately an intention to outlast the cordon. ' +
              'No fleet enters the strait. Critics characterise the choice as capitulation; the ' +
              'rationale is a refusal to contest on the adversary\'s preferred terms.',
            critique: {
              strengths: [
                'Denies the adversary the incident it engineered the quarantine to obtain.',
                'Shifts the contest onto economic endurance, where time and a global economy may favour the Coalition.',
              ],
              risks: [
                'Routing around the cordon tacitly concedes it, and a fait accompli left standing tends to become the established position.',
                'Meilan and allies may interpret the absence of a naval response as abandonment, fracturing resolve where it is most consequential.',
              ],
              whyChosen:
                'A leader whose principal concern is an inadvertent great-power war declines the ' +
                'tripwire and assesses that patience and economic depth lift the quarantine at lower ' +
                'risk than the use of force.',
              doctrine:
                'Horizontal de-escalation and the politics of accommodation: declining the ' +
                'adversary\'s chosen battlespace to compete on endurance — at the risk that an ' +
                'unanswered fait accompli hardens into accepted fact.',
            },
            effects: { escalation: -10, forcesRisk: -8, credibility: -10, domestic: -4, cohesion: -2 },
            styleTags: ['de-escalatory', 'restraint', 'off-ramp', 'unilateral'],
            next: 'p2-coalition',
          },
        ],
      },
    },

    // ── PHASE 2A — DIRECT-CHALLENGE / MILITARY TRACK ────────────────────────
    {
      id: 'p2-challenge',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE CORDON',
      title: 'Forces in contact at the line',
      narrative:
        'Coalition forces are now in close contact with the quarantine. A Coalition destroyer is ' +
        'escorting a neutral-flagged container ship toward Meilan; a Republic coastguard cutter and ' +
        'a number of militia fishing vessels are forming up to inspect it. The Republic is asserting ' +
        'across all channels that it is policing its own waters and that any Coalition interference ' +
        'constitutes aggression. The destroyer\'s commanding officer requires direction for the point ' +
        'at which the cutter signals the container ship to stop. The order is consequential and must ' +
        'be issued within minutes.',
      decision: {
        prompt: 'The cutter is moving to board an escorted hull. What order do you give?',
        options: [
          {
            id: 'interpose',
            label:
              'Interpose without firing: place the warship between cutter and cargo, refuse the boarding, hold position.',
            consequence:
              'The destroyer positions itself between the cutter and the container ship and signals ' +
              'that the inspection will not proceed. The cutter breaks off rather than collide with a ' +
              'warship. The cargo continues to Meilan. One increment of the quarantine has been ' +
              'reversed without weapons fire, demonstrating that the Republic is likewise unwilling to ' +
              'fire first.',
            critique: {
              strengths: [
                'Tests the fait accompli at the tactical level, exposing the adversary\'s own reluctance to fire first.',
                'Reverses the cordon through presence rather than force, retaining the legal and normative advantage.',
              ],
              risks: [
                'A misjudged close-quarters manoeuvre — a collision or an error by a crew under stress — can convert a standoff into an unintended casus belli.',
                'The approach holds only conditionally: the adversary may escalate a subsequent encounter to test Coalition resolve in turn.',
              ],
              whyChosen:
                'A leader who assesses the quarantine as coercion contingent on the defender yielding ' +
                'declines to yield, using disciplined presence to reverse it without conceding the ' +
                'first use of force.',
              doctrine:
                'Contesting a fait accompli at the threshold: brinkmanship dynamics in which both ' +
                'parties prefer almost any outcome to firing first, and the party that interposes ' +
                'credibly without firing can unwind the accomplished fact.',
            },
            effects: { credibility: 12, escalation: 6, forcesRisk: 8, domestic: 6, cohesion: 2 },
            styleTags: ['forceful', 'decisive', 'brinkmanship', 'keep-control'],
            next: 'p3-tighten',
          },
          {
            id: 'permit-board',
            label:
              'Permit a face-saving inspection: let the cutter board the neutral hull, but on Coalition-monitored terms.',
            consequence:
              'You order the destroyer to stand off and permit the inspection to proceed under ' +
              'Coalition observation and formal protest; the cleared cargo then continues to Meilan. ' +
              'There is no escalation in the strait. The Republic has, however, inspected a vessel in ' +
              'the presence of a Coalition warship and characterised it as law enforcement, leaving ' +
              'the quarantine\'s logic intact.',
            critique: {
              strengths: [
                'Avoids the close-quarters incident that could have initiated a war neither side intended.',
                'Maintains the flow of cargo to Meilan while denying the adversary a clean confrontation to exploit.',
              ],
              risks: [
                'Tolerating a single inspection ratifies the quarantine\'s premise and lowers the threshold for a more restrictive one.',
                'Meilan and domestic hardliners may interpret a warship standing aside as the Coalition conceding first.',
              ],
              whyChosen:
                'A leader who judges that the first incident is the one that cannot be reversed trades ' +
                'a point of principle for the avoidance of armed conflict, assessing the cargo as more ' +
                'important than the precedent.',
              doctrine:
                'Salami-tactics and the slippery slope of accommodation: conceding a thin slice to ' +
                'avoid escalation can validate the coercive frame and lower the threshold for the next slice.',
            },
            effects: { escalation: -6, forcesRisk: -6, credibility: -8, cohesion: -2, domestic: -4 },
            styleTags: ['de-escalatory', 'restraint', 'off-ramp', 'consultative'],
            next: 'p3-tighten',
          },
          {
            id: 'warning-shots',
            label:
              'Authorise warning shots and a hard turn-away: make clear the boarding will be physically prevented.',
            consequence:
              'The warship fires across the cutter\'s bow and signals that it will prevent the ' +
              'boarding by any means. The cutter holds, then withdraws. A Republic frigate is now ' +
              'transiting toward the strait, and Republic state media is asserting that the Coalition ' +
              'has opened fire on a coastguard policing its own waters. The encounter has been won ' +
              'tactically at the cost of supplying the adversary its first-shot narrative.',
            critique: {
              strengths: [
                'Removes all ambiguity that the cordon will be broken, restoring deterrence in the clearest terms.',
                'Forces the adversary to choose between backing off and a kinetic escalation it claims not to want.',
              ],
              risks: [
                'Supplies the Republic with the "Coalition fired first" narrative the quarantine was constructed to extract.',
                'Introducing naval combatants into a coastguard standoff couples the two navies directly, with no straightforward de-escalation path.',
              ],
              whyChosen:
                'A leader who judges that only unambiguous force deters incremental coercion elects to ' +
                'demonstrate it now, accepting the narrative cost in order to arrest the precedent.',
              doctrine:
                'Vertical escalation to restore deterrence and the audience-cost trap: firing to ' +
                'prove resolve can succeed tactically while ceding the legitimacy contest, since the ' +
                'aggressor engineered the script to make you shoot first.',
            },
            effects: { credibility: 10, escalation: 18, forcesRisk: 16, domestic: 4, cohesion: -8 },
            styleTags: ['escalatory', 'forceful', 'brinkmanship', 'sovereign-action'],
            next: 'p3-tighten',
          },
        ],
      },
    },

    // ── PHASE 2B — ECONOMIC / COALITION TRACK ───────────────────────────────
    {
      id: 'p2-coalition',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE WALL',
      title: 'Assembling the bloc under time pressure',
      narrative:
        'You have prioritised weight over speed, and the costs are accumulating on both sides. The ' +
        'Coalition is assembling the broadest economic front available, but partners diverge: two ' +
        'depend on the Republic\'s market and favour a moderate line; one, heavily exposed to the ' +
        'chip shortage, presses for the cordon to be broken immediately. Meanwhile Meilan\'s ' +
        'stockpiles are depleting, and its government is asking directly whether the Coalition ' +
        'intends any action at sea. The bloc under construction is substantive, but economic ' +
        'pressure alone does not lift the blockade.',
      decision: {
        prompt: 'How do you make economic and diplomatic pressure actually bite?',
        options: [
          {
            id: 'sanction-hard',
            label:
              'Lead with maximal sanctions: cut the Republic from key markets and tech, accept the blowback at home.',
            consequence:
              'You move the coalition toward its most severe package — export controls on inputs the ' +
              'Republic\'s industry depends on, and substantive financial measures. The measures take ' +
              'effect, and the Republic\'s markets are also affected. However, the cost falls heavily ' +
              'on your own chip-dependent economy and on the two moderate partners, and coalition ' +
              'unity — the Coalition\'s principal asset — comes under visible strain.',
            critique: {
              strengths: [
                'Imposes real, immediate cost, converting interdependence into leverage the adversary feels.',
                'Signals that the fait accompli will not be cost-free, strengthening deterrence against the next one.',
              ],
              risks: [
                'Interdependence is reciprocal: maximal sanctions impose cost on your own economy and your most exposed allies first.',
                'Costs the Coalition cannot sustain longer than the adversary constitute leverage that expires before the adversary\'s does.',
              ],
              whyChosen:
                'A leader who assesses that coercion is effective only when cost is immediate selects ' +
                'the package with real effect, judging that shared cost favours the bloc with the ' +
                'deeper economy.',
              doctrine:
                'Economic interdependence as a weapon and the vulnerability-asymmetry question: ' +
                'sanctions coerce only if you can endure the reciprocal damage longer than the target — ' +
                'and only if the coalition holds while it hurts.',
            },
            effects: { credibility: 8, escalation: 8, domestic: -10, cohesion: -6, attribution: 2 },
            styleTags: ['coercive', 'decisive', 'escalatory', 'multilateral'],
            next: 'p3-tighten',
          },
          {
            id: 'calibrated-pressure',
            label:
              'Calibrate the squeeze: phased, reversible measures tied to explicit demands, with off-ramps built in.',
            consequence:
              'You assemble a graduated package: a first tranche now, further measures held in ' +
              'reserve, each tier linked to a specific demand and each reversible if the cordon is ' +
              'lifted. The immediate effect is smaller, but the approach holds the coalition together ' +
              'and gives the Republic a means of de-escalating without loss of face. The quarantine ' +
              'remains in place, but its architects now face a defined and escalating schedule of ' +
              'consequences.',
            critique: {
              strengths: [
                'Keeps the coalition aboard by spreading cost and pacing escalation to its weakest member\'s tolerance.',
                'Builds in off-ramps so pressure can buy a settlement rather than only punish.',
              ],
              risks: [
                'Calibrated pressure may signal a coalition unwilling to accept significant cost, encouraging the adversary to out-wait it.',
                'Phased measures afford the Republic time to harden, adapt, and divide partners across the tiers.',
              ],
              whyChosen:
                'A leader who treats coalition cohesion as the centre of gravity calibrates the ' +
                'pressure to what the bloc can sustain, trading immediate effect for durability.',
              doctrine:
                'Graduated coercion and signalling resolve through reversibility: a priced, escalatory ' +
                'menu that preserves alliance cohesion and leaves the adversary a face-saving exit — ' +
                'the off-ramp half of compellence.',
            },
            effects: { cohesion: 12, credibility: 4, escalation: -2, attribution: 4, domestic: -2 },
            styleTags: ['multilateral', 'consultative', 'deliberate', 'off-ramp'],
            next: 'p3-tighten',
          },
          {
            id: 'chip-leverage',
            label:
              'Play the chip card: coordinate with Meilan to weaponise its fabrication dominance against the Republic.',
            consequence:
              'You and Meilan agree privately to restrict the flow of advanced chips and ' +
              'manufacturing equipment to the Republic\'s industries, converting the island\'s ' +
              'indispensability into reciprocal leverage. This is the form of pressure the Republic ' +
              'most fears. It also makes Meilan a primary economic combatant, raises the stakes for ' +
              'all parties dependent on those chips, and creates an incentive for the Republic to ' +
              'seize the fabrication facilities before they are taken offline.',
            critique: {
              strengths: [
                'Applies the most asymmetric lever in the crisis — Meilan\'s near-monopoly on advanced fabrication — directly against the initiating party.',
                'Reframes the quarantine as a two-way restriction in which the Republic also stands to lose substantially.',
              ],
              risks: [
                'Threatening to deny the fabrication facilities can convert a quarantine into an incentive for seizure under "use it before you lose it" logic.',
                'Restricting the chip supply imposes cost on the shared global economy, and on the Coalition\'s own market and partners first.',
              ],
              whyChosen:
                'A leader who assesses that the Coalition\'s decisive advantage is Meilan\'s ' +
                'irreplaceability applies it so that the Republic\'s coercion recoils on its own ' +
                'industrial base.',
              doctrine:
                'Weaponised interdependence and the security dilemma of indispensable assets: turning ' +
                'a chokepoint resource into leverage can also raise its value as a target, pushing the ' +
                'adversary toward seizure rather than restraint.',
            },
            effects: { credibility: 8, escalation: 12, domestic: -6, forcesRisk: 4, cohesion: -2 },
            styleTags: ['coercive', 'escalatory', 'decisive', 'sovereign-action'],
            next: 'p3-tighten',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE CORDON TIGHTENS ────────────────────────
    {
      id: 'p3-tighten',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE TIGHTENING',
      title: 'The cordon tightens',
      narrative:
        'Whatever the route to this point, the Republic responds by tightening rather than easing the ' +
        'measure. It extends the quarantine to cover energy and dual-use cargo — now including most ' +
        'of what Meilan requires to keep its fabrication facilities operating — and, for the first ' +
        'time, positions naval combatants behind the coastguard screen. An incident then occurs: a ' +
        'Coalition-flagged tanker, ordered to stop, refuses; a Republic cutter collides with it; ' +
        'there are injuries, an oil spill, and footage already in wide circulation. Both capitals ' +
        'are attributing fault to the other. Meilan\'s stockpiles have weeks remaining. A posture is ' +
        'required before markets reopen.',
      decision: {
        prompt: 'The cordon has tightened and an incident has occurred. What posture do you set now?',
        options: [
          {
            id: 'break-cordon',
            label:
              'Break the cordon: declare the quarantine void and run a protected convoy through, by force if challenged.',
            consequence:
              'You announce that the Coalition will escort and defend a relief convoy to Meilan. ' +
              'Warships, supply vessels and air cover assemble. This is the strongest available ' +
              'response to the tightening, and it places a Coalition convoy and Republic naval ' +
              'combatants on a converging course in which a further misstep produces an armed ' +
              'engagement between great powers.',
            critique: {
              strengths: [
                'Rejects the fait accompli unambiguously and relieves Meilan before its stockpiles are exhausted, restoring deterrence and resolve.',
                'Recovers the initiative after a tightening designed to render the Coalition passive.',
              ],
              risks: [
                'A defended convoy against a tightened cordon is the single most likely path to the great-power war both sides claim not to want.',
                'Should a vessel be lost, audience costs on both sides may make de-escalation politically unfeasible.',
              ],
              whyChosen:
                'A leader who concludes that each tightening rewards passivity judges that the cordon ' +
                'must be reversed by force now, while Meilan can still be relieved and resolve retains ' +
                'meaning.',
              doctrine:
                'Compellence by force and the convoy gambit: directly reversing an accomplished fact ' +
                'through protected resupply, accepting a high risk of inadvertent escalation to deny ' +
                'the adversary the patience that the quarantine rewards.',
            },
            effects: { credibility: 12, escalation: 18, forcesRisk: 16, domestic: 6, cohesion: -6 },
            styleTags: ['forceful', 'escalatory', 'decisive', 'brinkmanship'],
            next: 'p4-meilan',
          },
          {
            id: 'horizontal',
            label:
              'Go horizontal: leave the cordon alone, but impose costs elsewhere — sanctions, lawfare, and pressure on the Republic\'s own chokepoints.',
            consequence:
              'Rather than meet the tightening at the strait, you widen the contest: a sharper ' +
              'sanctions tranche, an international legal case over the tanker collision, and quiet ' +
              'pressure on a sea lane on which the Republic itself depends. The cordon remains in ' +
              'place, but the Republic now bears cost in areas it did not choose to contest, without a ' +
              'Coalition shot fired in the strait.',
            critique: {
              strengths: [
                'Imposes real cost while keeping the first-shot decision off the contested water.',
                'Exploits the adversary\'s own dependencies, reminding it that it, too, has chokepoints.',
              ],
              risks: [
                'Horizontal escalation can spread the crisis to new theatres and to actors not previously party to it.',
                'It does not address Meilan\'s depleting stockpiles; pressure elsewhere may not lift the cordon in time.',
              ],
              whyChosen:
                'A leader seeking to impose cost for the tightening without a strait engagement shifts ' +
                'the contest to ground where the Coalition holds the advantage and no tripwire exists.',
              doctrine:
                'Horizontal versus vertical escalation: answering a move up the ladder by widening ' +
                'the conflict laterally to where you are stronger, trading the risk of a wider crisis ' +
                'for control over the first-shot decision.',
            },
            effects: { escalation: 6, credibility: 6, cohesion: 4, domestic: -4, forcesRisk: -2, attribution: 2 },
            styleTags: ['coercive', 'multilateral', 'deliberate', 'sovereign-action'],
            next: 'p4-meilan',
          },
          {
            id: 'internationalise',
            label:
              'Internationalise the incident: demand a neutral inquiry into the ramming and a humanitarian corridor for Meilan.',
            consequence:
              'You raise the tanker collision in every forum, demand an independent inquiry, and ' +
              'propose a monitored humanitarian corridor to maintain the flow of food, fuel and ' +
              'medicine to Meilan while the legality is contested. This cedes the strait to the ' +
              'Republic for the present, but places the burden of refusing relief to a civilian ' +
              'population on the quarantine\'s architects.',
            critique: {
              strengths: [
                'Reframes the crisis from a great-power standoff to the denial of relief to a civilian population, where international opinion favours the Coalition.',
                'Opens a face-saving channel — a corridor — that could relieve Meilan without an armed convoy operation.',
              ],
              risks: [
                'Internationalisation is slow, and a corridor the Republic can veto may provide no relief while Meilan\'s stockpiles deplete.',
                'Reliance on inquiries and corridors may be read as substituting process for resolve, reducing credibility with Meilan and domestic hardliners.',
              ],
              whyChosen:
                'A leader seeking to contest the quarantine\'s legitimacy rather than its vessels ' +
                'converts the incident into a legal and normative reverse for the Republic and an ' +
                'off-ramp for both sides.',
              doctrine:
                'Lawfare and legitimacy as instruments of coercion: contesting the fait accompli in ' +
                'the normative domain and offering a humanitarian off-ramp, accepting slower relief in ' +
                'exchange for the moral high ground and a non-kinetic exit.',
            },
            effects: { cohesion: 8, attribution: 6, escalation: -6, credibility: -4, domestic: -2 },
            styleTags: ['multilateral', 'consultative', 'de-escalatory', 'off-ramp'],
            next: 'p4-meilan',
          },
        ],
      },
    },

    // ── PHASE 4 — SHARED SPINE: MEILAN'S RESOLVE ────────────────────────────
    {
      id: 'p4-meilan',
      phase: 4,
      phaseLabel: 'PHASE 4 · THE ISLAND\'S NERVE',
      title: 'Meilan asserts its own position',
      narrative:
        'The crisis has been managed largely over Meilan; Meilan now asserts a position of its own. ' +
        'Its leadership conveys two points. First, that it will not be treated as a bargaining chip: ' +
        'it will hold, ration, and if pressed will deny its fabrication facilities to all parties ' +
        'rather than surrender them. Second, a faction within its government, assessing the stockpile ' +
        'timeline and the divided coalition, is privately exploring whether an accommodation with the ' +
        'Republic might be less costly than a war fought over its territory. Whether Meilan holds or ' +
        'concedes now depends substantially on its reading of Coalition resolve. The Republic is ' +
        'assessing the same indicators.',
      decision: {
        prompt: 'Meilan\'s resolve is beginning to waver. How do you shape it?',
        options: [
          {
            id: 'iron-guarantee',
            label:
              'Give an iron guarantee: a public, unconditional commitment to Meilan\'s defence and survival.',
            consequence:
              'You commit the Coalition publicly: Meilan will not be permitted to fall. The island\'s ' +
              'resolve consolidates and the accommodation faction is silenced. The strategic ambiguity ' +
              'that previously preserved freedom of action is also removed; Coalition credibility, and ' +
              'potentially its forces, are now tied to the Republic\'s next move.',
            critique: {
              strengths: [
                'Restores Meilan\'s nerve and forecloses the adversary\'s cheapest win — the island negotiating its own surrender.',
                'Converts wavering extended deterrence into an unambiguous commitment the adversary must now factor in.',
              ],
              risks: [
                'An unconditional guarantee transfers part of the decision for war to Meilan and the Republic rather than the Coalition.',
                'A commitment that exceeds what the public will sustain becomes a credibility trap if it is ever invoked.',
              ],
              whyChosen:
                'A leader who recognises that extended deterrence depends on credibility removes all ' +
                'ambiguity, judging an uncertain guarantee worse than none.',
              doctrine:
                'Extended deterrence and the credibility of commitment: a clear, public guarantee ' +
                'shores up a protégé\'s resolve and the adversary\'s calculus — but tying your hands ' +
                'also surrenders some control over when the trap is sprung.',
            },
            effects: { credibility: 12, cohesion: 6, escalation: 8, forcesRisk: 6, domestic: 2 },
            styleTags: ['forceful', 'decisive', 'alliance-first', 'signalling'],
            next: 'p5-crossroads',
          },
          {
            id: 'conditional-backing',
            label:
              'Back Meilan conditionally: deep support and resupply, but counsel against irreversible moves with its fabs.',
            consequence:
              'You commit substantial support — resupply, intelligence, capabilities — while ' +
              'privately urging Meilan not to destroy its own fabrication facilities or force a ' +
              'decision before the coalition is ready. The island holds, more steadily than before, ' +
              'and retains the chip lever in reserve rather than expending it. Some in Meilan resent ' +
              'being asked to wait; most are reassured that they are not being left to act alone.',
            critique: {
              strengths: [
                'Stiffens resolve while keeping the most escalatory lever — destroying or denying the fabs — under deliberate, joint control.',
                'Preserves your own freedom of action by stopping short of an unconditional, self-triggering guarantee.',
              ],
              risks: [
                'Conditional backing may be read in Meilan as half-hearted, reinforcing the accommodation faction it is intended to quiet.',
                'Counselling restraint to the party most exposed can generate resentment if relief is slow.',
              ],
              whyChosen:
                'A leader seeking to hold Meilan firm without forfeiting escalation control offers ' +
                'depth of support in exchange for a say over the island\'s most irreversible options.',
              doctrine:
                'Calibrated extended deterrence and protégé moral hazard: backing an ally enough to ' +
                'hold its nerve while restraining it from steps — like denying the fabs — that could ' +
                'drag the patron into a war on the protégé\'s timing.',
            },
            effects: { credibility: 6, cohesion: 8, escalation: -2, forcesRisk: -2, attribution: 4 },
            styleTags: ['consultative', 'deliberate', 'alliance-first', 'keep-control'],
            next: 'p5-crossroads',
          },
          {
            id: 'let-meilan-lead',
            label:
              'Let Meilan set the line: defer to the island\'s own threshold, support whatever it decides, including accommodation.',
            consequence:
              'You inform Meilan that the Coalition will follow its lead — supporting a fight if it ' +
              'chooses to fight, and a settlement if it chooses to settle. This most fully respects ' +
              'the island\'s agency and is least likely to draw any party into a war Meilan does not ' +
              'want. It also signals to the Republic that the Coalition\'s commitment is conditional, ' +
              'and that patience may separate the island from its partners.',
            critique: {
              strengths: [
                'Honours the principle that the people whose island it is should decide their own fate.',
                'Avoids the moral hazard of a patron fighting a war its protégé would not choose.',
              ],
              risks: [
                'Visible deference may be read as endorsement of accommodation, affording the Republic a win through coercion without conflict.',
                'Signalling a conditional guarantee weakens deterrence wherever the Coalition\'s commitment is meant to hold.',
              ],
              whyChosen:
                'A leader reluctant to fight a protégé\'s war on the protégé\'s timetable locates the ' +
                'decision where the cost falls most heavily — with Meilan itself.',
              doctrine:
                'Agency of the protégé and the limits of extended deterrence: deferring to the ' +
                'defended party\'s threshold respects sovereignty but can erode the credibility on ' +
                'which the whole deterrent rests.',
            },
            effects: { escalation: -8, forcesRisk: -6, credibility: -10, cohesion: -2, domestic: -2 },
            styleTags: ['de-escalatory', 'restraint', 'consultative', 'off-ramp'],
            next: 'p5-crossroads',
          },
        ],
      },
    },

    // ── PHASE 5 — THE CROSSROADS: ESCALATE OR ACCOMMODATE ───────────────────
    {
      id: 'p5-crossroads',
      phase: 5,
      phaseLabel: 'PHASE 5 · THE CROSSROADS',
      title: 'Escalate or accommodate',
      narrative:
        'The crisis has reached its decisive point. Through a trusted intermediary the Republic ' +
        'proposes a settlement: it will quietly revert the quarantine to routine, intermittent ' +
        'inspections — preserving its legal claim and its position — if the Coalition accepts that ' +
        'framing, stands down its convoy, and eases the sanctions. This is an off-ramp that restores ' +
        'cargo flow to Meilan while leaving the Republic\'s precedent partly intact. Concurrently, ' +
        'your military assesses that a single decisive show of force now — a full convoy run, or a ' +
        'demonstrative strike on the cordon — could break the quarantine outright while the Republic ' +
        'remains uncertain of Coalition resolve. The window for either option is measured in hours. ' +
        'This is the decisive choice of the crisis.',
      decision: {
        prompt: 'The decisive choice. Do you escalate to break the cordon, accommodate to end the crisis, or combine pressure with negotiation?',
        options: [
          {
            id: 'decisive-force',
            label:
              'Escalate decisively: run the full convoy and break the cordon now, betting resolve ends it on your terms.',
            consequence:
              'You commit to the decisive move while the Republic is still assessing your resolve. ' +
              'The convoy sails under full protection; the cordon is contested at every point ' +
              'simultaneously. For several hours the outcome depends on whether the Republic fires, ' +
              'and on whether, having tested the Coalition, it judges this fait accompli not worth the ' +
              'war required to sustain it.',
            critique: {
              strengths: [
                'Resolves the crisis on your terms if the adversary backs down, ending the quarantine outright rather than freezing it.',
                'Exploits the adversary\'s uncertainty about your resolve at the exact moment it is highest.',
              ],
              risks: [
                'If the Republic does not concede, this is the step that converts a quarantine into a great-power war.',
                'The decision rests on correctly reading an adversary\'s resolve under uncertainty — the characteristic miscalculation that initiates wars.',
              ],
              whyChosen:
                'A leader who assesses that the Republic has overreached and is bluffing uses the ' +
                'narrow window to end the coercion decisively, before the cordon becomes the ' +
                'established position.',
              doctrine:
                'Crisis bargaining and the resolve-miscalculation problem: a decisive break can win a ' +
                'contest of nerve, but it relies on correctly reading an opponent\'s willingness to ' +
                'fight — the judgement that, wrong, produces inadvertent war.',
            },
            effects: { credibility: 12, escalation: 20, forcesRisk: 18, domestic: 4, cohesion: -8 },
            styleTags: ['escalatory', 'forceful', 'brinkmanship', 'decisive'],
            next: 'p6-close',
          },
          {
            id: 'take-deal',
            label:
              'Accommodate to end it: take the off-ramp — accept the face-saving framing, stand down, restore the flow.',
            consequence:
              'You accept the settlement within the window. The quarantine reverts to intermittent ' +
              'inspections; the convoy stands down; the most severe sanctions ease; cargo and chips ' +
              'flow to Meilan again. No shot is fired. The Republic retains its claim and part of its ' +
              'precedent, and both sides are able to characterise the outcome as other than a defeat.',
            critique: {
              strengths: [
                'Ends the acute crisis without a great-power war, restoring the chip flow and Meilan\'s supply line.',
                'A mutual face-saver allows the adversary to de-escalate, which is the precondition for any de-escalation holding.',
              ],
              risks: [
                'Accepting the framing leaves the precedent partly intact; the next inspection regime begins from a more favourable position for the Republic.',
                'A negotiated stand-down may be characterised at home and in Meilan as the Coalition conceding, reducing credibility for the next test.',
              ],
              whyChosen:
                'A leader whose primary aim is to avoid a war neither side wants takes the verifiable ' +
                'exit when available, judging a managed, imperfect outcome preferable to an uncertain ' +
                'one.',
              doctrine:
                'Off-ramps, face-saving and the value of a tolerable settlement: ending a fait ' +
                'accompli short of war usually means leaving the adversary something to call a win — ' +
                'the price of de-escalation that holds.',
            },
            effects: { escalation: -16, forcesRisk: -14, credibility: -6, cohesion: 4, domestic: -2, attribution: 2 },
            styleTags: ['de-escalatory', 'off-ramp', 'consultative', 'restraint' ],
            next: 'p6-close',
          },
          {
            id: 'coerce-and-talk',
            label:
              'Thread the needle: keep the pressure maxed but accept talks, trading a stand-down only for a verifiable lifting of the cordon.',
            consequence:
              'You neither break the cordon nor accept the offered framing. You hold the convoy ready ' +
              'and the sanctions in effect, but accept the channel, and insist that the price of any ' +
              'Coalition stand-down is a verifiable lifting of the quarantine rather than a relabelled ' +
              'one. The Republic objects and delays, then, with the convoy at the line and time ' +
              'running against it, concedes a genuine if reluctant climb-down.',
            critique: {
              strengths: [
                'Couples coercion with diplomacy, refusing both an avoidable war and a hollow, precedent-preserving deal.',
                'Demanding verifiable lifting attacks the fait accompli itself, not just its label.',
              ],
              risks: [
                'Holding maximal pressure during negotiation keeps forces in contact, where an incident can still initiate the war the approach seeks to avoid.',
                'Insisting on verification within a closing window risks losing the settlement to a hardliner or to the timeline.',
              ],
              whyChosen:
                'A leader seeking the substance of a favourable outcome without the risk of a chosen ' +
                'war maintains pressure during negotiation, conceding nothing until the cordon is ' +
                'genuinely lifted.',
              doctrine:
                'Coercive diplomacy: the simultaneous use of pressure and a negotiated exit, where the ' +
                'art is calibrating force to compel a real concession without tipping the standoff into ' +
                'the war that both the threat and the talks are meant to prevent.',
            },
            effects: { credibility: 10, escalation: 4, forcesRisk: 6, cohesion: 6, attribution: 6, domestic: 2 },
            styleTags: ['coercive', 'consultative', 'deliberate', 'keep-control'],
            next: 'p6-close',
          },
        ],
      },
    },

    // ── PHASE 6 — THE STRATEGIC CLOSE → ENDING RESOLVER ─────────────────────
    {
      id: 'p6-close',
      phase: 6,
      phaseLabel: 'PHASE 6 · THE STRATEGIC CLOSE',
      title: 'The strategic close',
      narrative:
        'The acute phase has passed. What remains is the closing posture — the stance set for the ' +
        'protracted contest and the lessons drawn from the crisis. The quarantine, whether broken or ' +
        'negotiated away, is unlikely to be the last incremental attempt to coerce Meilan. This final ' +
        'choice will shape whether PORCELAIN TIDE is assessed in retrospect as a crisis survived, a ' +
        'precedent conceded, or a juncture that made the next conflict more or less likely.',
      decision: {
        prompt: 'How do you close out the crisis and prepare for the next tide?',
        options: [
          {
            id: 'harden-deterrence',
            label:
              'Harden deterrence: a standing forward posture, an explicit red line on any future quarantine, deeper arming of Meilan.',
            consequence:
              'You close the crisis by raising the cost of any future fait accompli: a persistent ' +
              'forward presence near the strait, a declared red line that any future cordon will be ' +
              'broken, and accelerated arming of Meilan so the island can resist independently. The ' +
              'message to the Republic is clear, as is the higher, more militarised baseline now set ' +
              'across the theatre.',
            critique: {
              strengths: [
                'Raises the cost of the next salami-slice and reassures Meilan and allies that resolve is real and lasting.',
                'Converts a one-off survival into a standing deterrent against a repeat.',
              ],
              risks: [
                'A hardened forward posture establishes a higher baseline of confrontation and standing forces risk indefinitely.',
                'Red lines and forward basing may be read in the Republic as encirclement, contributing to the next crisis rather than deterring it.',
              ],
              whyChosen:
                'A leader who concludes that the quarantine occurred because deterrence appeared weak ' +
                'closes the crisis by strengthening it, accepting a more tense baseline as the price of ' +
                'preventing a recurrence.',
              doctrine:
                'Deterrence restoration and the security dilemma: re-signalling resolve to prevent the ' +
                'next fait accompli, at the risk that the hardening itself is read as threat and drives ' +
                'the spiral it means to stop.',
            },
            effects: { credibility: 10, escalation: 8, forcesRisk: 8, cohesion: 2, domestic: 4 },
            styleTags: ['forceful', 'decisive', 'signalling', 'sovereign-action'],
            next: null,
          },
          {
            id: 'resilience-deconcentration',
            label:
              'Attack the root: de-concentrate the chip dependence and build economic resilience, so the next quarantine has no leverage.',
            consequence:
              'You direct remaining capital to the structural remedy: diversifying advanced ' +
              'fabrication across the coalition, building chip and energy reserves, and hardening the ' +
              'supply chains that made a quarantine of one island a global emergency. No fleet sails ' +
              'and no adversary is named. The lever the Republic has just used will be worth ' +
              'considerably less the next time it is applied.',
            critique: {
              strengths: [
                'Drains the coercive power of the quarantine by removing the dependence that made it bite worldwide.',
                'Builds durable resilience that protects you in every future crisis, not just this one.',
              ],
              risks: [
                'De-concentrating fabrication is the work of years and offers no relief in the next acute crisis.',
                'Quiet structural investment earns no political credit and can be read as conceding the strait while you retool.',
              ],
              whyChosen:
                'A leader who concludes that the crisis had force only because one island held the ' +
                'world\'s advanced chip production invests in removing that single point of dependence.',
              doctrine:
                'Resilience and the de-weaponisation of interdependence: reducing strategic dependence ' +
                'so an adversary\'s chokepoint leverage decays — defeating coercion structurally rather ' +
                'than at the point of a gun.',
            },
            effects: { domestic: -2, escalation: -6, cohesion: 6, credibility: -2, forcesRisk: -4, attribution: 2 },
            styleTags: ['deliberate', 'multilateral', 'restraint', 'burden-sharing'],
            next: null,
          },
          {
            id: 'crisis-architecture',
            label:
              'Build the off-ramps: a standing maritime crisis-management channel and rules of the road with the Republic.',
            consequence:
              'You invest in crisis-management machinery: a tested, standing channel with the ' +
              'Republic for this category of standoff, and negotiated rules of the road to prevent ' +
              'coastguards, militias and naval combatants from converting the next incident into a ' +
              'war. The approach accepts that there will be a recurrence and seeks to make it ' +
              'survivable.',
            critique: {
              strengths: [
                'Directly addresses the mechanism that nearly produced catastrophe — an uncontrolled incident with no channel to manage it.',
                'Lowers the odds that the next quarantine, ramming or near-collision spirals into a war neither side chooses.',
              ],
              risks: [
                'Engaging the adversary to build crisis machinery can be attacked at home as rewarding coercion with a seat at the table.',
                'Rules of the road only help if both sides honour them; a channel is not a guarantee against a determined fait accompli.',
              ],
              whyChosen:
                'A leader who concludes that the crisis came within a single collision of an unwanted ' +
                'war invests in the machinery that makes the next such incident recoverable.',
              doctrine:
                'Crisis-management architecture and inadvertent escalation: building standing channels ' +
                'and rules of the road so that future incidents below the threshold of war have a human ' +
                'off-ramp before they climb the ladder by accident.',
            },
            effects: { escalation: -6, cohesion: 4, attribution: 4, credibility: -2, forcesRisk: -2 },
            styleTags: ['de-escalatory', 'consultative', 'multilateral', 'off-ramp'],
            next: null,
          },
        ],
      },
    },
  ],
}
