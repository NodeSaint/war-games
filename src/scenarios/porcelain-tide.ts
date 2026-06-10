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
    'At first light, the Continental Republic announced a "customs quarantine" of Meilan — the ' +
    'island democracy it claims as its own, and the source of the most advanced semiconductors on ' +
    'Earth. Its coastguard, not its navy, will now "inspect" all shipping bound for the island and ' +
    'turn back any cargo it deems contraband. There is no declaration of blockade, no declaration ' +
    'of war: it is dressed as law enforcement within waters the Republic insists are its own. The ' +
    'effect is a noose. Within hours, hulls are queuing or diverting, insurers are pulling cover, ' +
    'and the chip supply the world runs on is seizing up.\n\n' +
    'This is a fait accompli, engineered to sit a hand\'s breadth below the line that would justify ' +
    'a war neither side openly wants — and to put the burden of firing the first shot on you. ' +
    'Meilan\'s government is resolute but rattled. Markets are in freefall. Your coalition partners ' +
    'are already diverging on how far to go. Your principals will look to you within the hour. ' +
    'The question is not whether to respond, but how to break or out-wait a quarantine without ' +
    'starting the great-power war it was designed to avoid.',
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
      title: 'A noose dressed as customs',
      narrative:
        'The picture is, for once, clear: the Continental Republic has done exactly what it said it ' +
        'would, and it is doing it with coastguard cutters and a fishing-fleet "militia", not grey ' +
        'hulls. Two cargo vessels have already been turned back. A liquefied-gas tanker bound for ' +
        'Meilan is hove-to, awaiting "inspection". The legal theatre is deliberate — every move is ' +
        'choreographed to look like a sovereign state policing its own customs, and to make any ' +
        'Coalition warship that intervenes the visible aggressor.\n\n' +
        'Meilan can hold for weeks on stockpiles, not months. The global semiconductor supply it ' +
        'anchors is already convulsing the markets. Your first move sets the frame — challenger of ' +
        'an illegal blockade, or builder of a wall of pressure — for everything that follows.',
      decision: {
        prompt: 'How does the Coalition respond in the first hours?',
        options: [
          {
            id: 'escort',
            label:
              'Challenge it at sea: announce Coalition-escorted shipping will sail to Meilan through the "quarantine".',
            consequence:
              'You declare that lawful commerce will be escorted to Meilan and that the Coalition ' +
              'does not recognise the quarantine. A destroyer group turns toward the strait. Meilan ' +
              'is heartened, your hardliners cheer — and the Republic now has exactly the confrontation ' +
              'at sea it has been daring you to start.',
            critique: {
              strengths: [
                'Refuses the fait accompli directly rather than legitimising it by working around it.',
                'Demonstrates resolve to Meilan, allies and the adversary in the one currency — presence — they cannot ignore.',
              ],
              risks: [
                'Puts your hulls and the burden of the first shot onto the contested water, exactly as the quarantine was designed to do.',
                'A coastguard "inspection" of an escorted hull becomes a great-power incident with no script for what comes next.',
              ],
              whyChosen:
                'A leader who believes a fait accompli unanswered becomes a precedent answers it at ' +
                'the point of imposition, betting that visible resolve deters the next slice.',
              doctrine:
                'The defender\'s dilemma against a fait accompli: the aggressor shifts the onus of ' +
                'escalation onto you, so that breaking the accomplished fact means firing first. ' +
                'Challenging at sea takes that burden head-on.',
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
              'alliance, while ordering your hulls to hold outside the quarantine line — a wall of ' +
              'force just over the horizon. The signal is unmistakable. So is the fact that you have ' +
              'not, yet, touched the noose around Meilan.',
            critique: {
              strengths: [
                'Generates maximum deterrent signal while keeping the first-shot decision in your own hands.',
                'Buys time and options without conceding the quarantine or triggering an incident inside it.',
              ],
              risks: [
                'Posture that never touches the cordon can be read as a bluff, letting the quarantine bite while you watch.',
                'A large force massed and idle invites the adversary to test where its actual red line sits.',
              ],
              whyChosen:
                'A leader who wants resolve without a tripwire masses force to deter further moves ' +
                'while preserving the choice of whether and when to break the cordon.',
              doctrine:
                'Deterrence by visible capability and the credibility-resolve gap: massing force ' +
                'signals you could break the quarantine, but a threat you decline to execute can ' +
                'corrode the very resolve it is meant to project.',
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
              'You hold the warships back and instead spend the first hours assembling the broadest ' +
              'possible front — a joint condemnation, a credible sanctions package readied, the ' +
              'quarantine\'s illegality argued in every forum. It is slower than a fleet, and the ' +
              'cordon keeps tightening while you build — but you are building the one thing the ' +
              'adversary cannot easily shrug off: a united economic bloc.',
            critique: {
              strengths: [
                'Plays to the Coalition\'s real comparative advantage — collective economic and diplomatic weight.',
                'Keeps the first-shot burden off your forces and the moral framing squarely on the Republic.',
              ],
              risks: [
                'Coalition consensus is slow, and the quarantine is fast; Meilan\'s stockpiles drain while you negotiate the wording.',
                'Pressure that never bites can let the adversary pocket the fait accompli and wait you out.',
              ],
              whyChosen:
                'A leader who judges that the Coalition wins a long game on economics, not a short ' +
                'one on hulls, invests first in the bloc that makes every later move heavier.',
              doctrine:
                'Coercion through collective economic statecraft and audience-building: turning a ' +
                'fait accompli into a contest of resolve fought with interdependence rather than ' +
                'gunfire, where breadth of coalition is the coin.',
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
              'You decline the confrontation the quarantine was built to provoke. Instead you ' +
              'organise covert and neutral-flagged resupply, surge chip stockpiles and alternative ' +
              'fabrication abroad, and signal privately that you will simply outlast the cordon. No ' +
              'fleet sails into the strait. Critics call it surrender; you call it refusing to play ' +
              'the adversary\'s game on the adversary\'s board.',
            critique: {
              strengths: [
                'Denies the adversary the incident it engineered the quarantine to obtain.',
                'Shifts the contest onto economic endurance, where time and a global economy may favour the Coalition.',
              ],
              risks: [
                'Working around the cordon tacitly concedes it, and a fait accompli left standing tends to become the new map.',
                'Meilan and allies may read the absence of a fleet as abandonment, fracturing resolve where it matters most.',
              ],
              whyChosen:
                'A leader whose dominant fear is a great-power war begun by accident refuses the ' +
                'tripwire and bets that patience and economic depth break the quarantine more safely ' +
                'than steel.',
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
      title: 'Steel meets the line',
      narrative:
        'Your forces are now nose-to-nose with the quarantine. A Coalition destroyer is shadowing a ' +
        'neutral-flagged container ship toward Meilan; a Republic coastguard cutter and a swarm of ' +
        '"fishing" hulls are forming up to inspect it. The Republic is broadcasting on every channel ' +
        'that it is merely policing its waters and that any Coalition interference is an act of ' +
        'aggression. Your captain is asking, plainly, what he is to do when the cutter signals the ' +
        'container ship to stop. The next order may be the most consequential of the crisis — and ' +
        'it has to be given in minutes, not hours.',
      decision: {
        prompt: 'The cutter is moving to board an escorted hull. What order do you give?',
        options: [
          {
            id: 'interpose',
            label:
              'Interpose without firing: place the warship between cutter and cargo, refuse the boarding, hold position.',
            consequence:
              'Your destroyer slides between the cutter and the container ship and signals that the ' +
              'inspection will not proceed. The cutter sheers off rather than ram a warship. The ' +
              'cargo sails on to Meilan. You have broken one slice of the quarantine without a shot ' +
              '— and shown that the Republic, too, is unwilling to fire first.',
            critique: {
              strengths: [
                'Calls the fait accompli\'s bluff at the tactical level, exposing the adversary\'s own reluctance to fire first.',
                'Breaks the cordon by presence and nerve rather than by force, keeping you on the legal and moral high ground.',
              ],
              risks: [
                'A misjudged manoeuvre at close quarters — a collision, a panicked crew — turns a standoff into a casus belli no one ordered.',
                'It works until it doesn\'t: the adversary can escalate the next encounter to call your bluff in turn.',
              ],
              whyChosen:
                'A leader who reads the quarantine as coercion that depends on your blinking refuses ' +
                'to blink, using disciplined presence to break it without handing over the first shot.',
              doctrine:
                'Calling a fait accompli at the threshold: chicken-game dynamics where both sides ' +
                'prefer almost any outcome to firing first, and the side that interposes credibly ' +
                'without shooting can unwind the accomplished fact.',
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
              'You order the destroyer to stand off and let the inspection proceed under your ' +
              'cameras and your protest, then watch the cleared cargo continue to Meilan. The strait ' +
              'does not erupt. But the Republic has now inspected a ship under your guns and called ' +
              'it law enforcement — the quarantine\'s logic survives the encounter intact.',
            critique: {
              strengths: [
                'Avoids the close-quarters incident that could have started a war neither side chose tonight.',
                'Keeps cargo flowing to Meilan while denying the adversary a clean confrontation to exploit.',
              ],
              risks: [
                'Tolerating one inspection ratifies the quarantine\'s premise and invites a tighter one tomorrow.',
                'Meilan and hardliners read a warship standing aside as the Coalition flinching first.',
              ],
              whyChosen:
                'A leader who fears that the first incident is the one that cannot be undone trades a ' +
                'point of principle for a night without a shooting war, betting the cargo matters more ' +
                'than the precedent.',
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
              'Your warship fires across the cutter\'s bow and signals it will not permit the ' +
              'boarding by any means. The cutter holds, then withdraws — but a Republic frigate is ' +
              'now steaming hard for the strait, and state media is broadcasting that the Coalition ' +
              'has opened fire on a coastguard policing its own waters. You have won the encounter ' +
              'and handed the adversary its first-shot narrative.',
            critique: {
              strengths: [
                'Removes all ambiguity that the cordon will be broken, restoring deterrence in the clearest terms.',
                'Forces the adversary to choose between backing off and a kinetic escalation it claims not to want.',
              ],
              risks: [
                'You have given the Republic, on a plate, the "Coalition fired first" narrative the quarantine was built to extract.',
                'Bringing grey hulls into a coastguard standoff couples the navies directly, with no easy rung back down.',
              ],
              whyChosen:
                'A leader who believes only unmistakable force deters a salami-slicer chooses to ' +
                'demonstrate it now, accepting the narrative cost to stop the precedent cold.',
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
      title: 'Building the bloc while the clock runs',
      narrative:
        'You have chosen weight over speed, and the bill is coming due in both directions. On one ' +
        'side, you are assembling the broadest economic front you can — but partners diverge. Two ' +
        'depend on the Republic\'s market and want a soft line; one, exposed to the chip shortage, ' +
        'wants the cordon broken yesterday. On the other side, Meilan\'s stockpiles are draining and ' +
        'its government is asking, pointedly, whether the Coalition intends to do anything that ' +
        'reaches the water. The wall you are building is real — but a wall does not, by itself, lift ' +
        'a noose.',
      decision: {
        prompt: 'How do you make economic and diplomatic pressure actually bite?',
        options: [
          {
            id: 'sanction-hard',
            label:
              'Lead with maximal sanctions: cut the Republic from key markets and tech, accept the blowback at home.',
            consequence:
              'You drive the coalition toward its hardest package — export controls on inputs the ' +
              'Republic\'s own industry needs, financial measures with teeth. It lands. The Republic\'s ' +
              'markets shudder too. But your own chip-starved economy and two soft-line partners take ' +
              'the blast, and the coalition\'s unity, your best card, audibly strains.',
            critique: {
              strengths: [
                'Imposes real, immediate cost, converting interdependence into leverage the adversary feels.',
                'Signals that the fait accompli will not be cost-free, strengthening deterrence against the next one.',
              ],
              risks: [
                'Interdependence cuts both ways: maximal sanctions detonate on your own economy and your softest allies first.',
                'Pain you cannot sustain longer than the adversary is leverage that expires before theirs does.',
              ],
              whyChosen:
                'A leader who believes coercion only works when it hurts now reaches for the package ' +
                'with real teeth, betting that shared pain favours the bloc with the deeper economy.',
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
              'You assemble a graduated package — a first tranche now, more held in reserve, each ' +
              'tier linked to a specific ask and each reversible if the cordon lifts. It bites less ' +
              'today but it holds the coalition together and gives the Republic a way to climb down ' +
              'without losing face. The quarantine does not lift, but its architects now see a priced ' +
              'menu of consequences stretching ahead of them.',
            critique: {
              strengths: [
                'Keeps the coalition aboard by spreading cost and pacing escalation to its weakest member\'s tolerance.',
                'Builds in off-ramps so pressure can buy a settlement rather than only punish.',
              ],
              risks: [
                'Calibrated pressure can read as a coalition that will not truly hurt itself, inviting the adversary to wait it out.',
                'Phased measures give the Republic time to harden, adapt and divide your partners between tiers.',
              ],
              whyChosen:
                'A leader who treats the coalition\'s cohesion as the centre of gravity prices the ' +
                'pressure to what the bloc can sustain, trading immediate bite for a wall that does ' +
                'not crack.',
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
              'You and Meilan agree, quietly, to choke the flow of advanced chips and tooling to the ' +
              'Republic\'s own industries — turning the island\'s indispensability into a counter-noose. ' +
              'It is the one pressure the Republic genuinely fears. It also makes Meilan a primary ' +
              'economic combatant, raises the stakes for everyone dependent on those chips, and dares ' +
              'the Republic to grab the fabs before they go dark.',
            critique: {
              strengths: [
                'Wields the single most asymmetric lever in the crisis — Meilan\'s fabrication monopoly — directly against the aggressor.',
                'Reframes the quarantine as a two-way strangulation in which the Republic also has a great deal to lose.',
              ],
              risks: [
                'Threatening to deny the fabs can convert a quarantine into a motive for seizure — "use it before you lose it".',
                'Weaponising the chip supply detonates the global economy you share, and your own market and partners feel it first.',
              ],
              whyChosen:
                'A leader who sees that the Coalition\'s decisive card is Meilan\'s irreplaceability ' +
                'plays it to make the Republic\'s coercion recoil on its own industrial base.',
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
      title: 'The screw turns',
      narrative:
        'However you arrived here, the Republic answers your move by tightening, not loosening. It ' +
        'extends the quarantine to cover energy and "dual-use" cargo — which now includes most of ' +
        'what Meilan needs to keep its fabs running — and it moves grey hulls behind the coastguard ' +
        'screen for the first time. Then the incident you have been dreading: a Coalition-flagged ' +
        'tanker, ordered to stop, refuses; a Republic cutter rams it; there are injuries, oil on the ' +
        'water, and footage already everywhere. Both capitals are blaming the other. Meilan\'s ' +
        'stockpile clock has weeks left, not many. Your principals need a posture before the ' +
        'markets reopen.',
      decision: {
        prompt: 'The cordon has tightened and blood is in the water. What posture do you set now?',
        options: [
          {
            id: 'break-cordon',
            label:
              'Break the cordon: declare the quarantine void and run a protected convoy through, by force if challenged.',
            consequence:
              'You announce the Coalition will escort a relief convoy to Meilan and will defend it. ' +
              'Warships, supply hulls and air cover form up. It is the boldest possible answer to the ' +
              'tightening — and it puts a Coalition convoy and Republic grey hulls on a converging ' +
              'course where the next misstep is a shooting engagement between great powers.',
            critique: {
              strengths: [
                'Decisively rejects the fait accompli and relieves Meilan before its stockpiles bite, restoring deterrence and resolve.',
                'Seizes the initiative after a tightening designed to make you look passive.',
              ],
              risks: [
                'A defended convoy versus a tightened cordon is the likeliest single path to the great-power war both sides claim not to want.',
                'If a hull is lost, the audience costs on both sides may make climbing back down politically impossible.',
              ],
              whyChosen:
                'A leader who concludes that each tightening rewards passivity decides the cordon ' +
                'must be physically broken now, while Meilan can still be saved and resolve still means something.',
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
              'Rather than meet the tightening at the strait, you widen the board: a sharper ' +
              'sanctions tranche, an international legal case over the rammed tanker, and quiet ' +
              'pressure on a sea lane the Republic itself depends on. The cordon stays up — but the ' +
              'Republic now feels the squeeze in places it did not choose to fight, without a ' +
              'Coalition shot fired in the strait.',
            critique: {
              strengths: [
                'Imposes real cost while keeping the first-shot decision off the contested water.',
                'Exploits the adversary\'s own dependencies, reminding it that it, too, has chokepoints.',
              ],
              risks: [
                'Horizontal escalation can spread the crisis to new theatres and new actors who never signed up for it.',
                'It does nothing for Meilan\'s draining stockpiles — pressure elsewhere may not lift the noose in time.',
              ],
              whyChosen:
                'A leader who wants to punish the tightening without a strait engagement shifts the ' +
                'contest to ground where the Coalition holds the advantage and the tripwire is absent.',
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
              'You take the rammed tanker to every forum, demand an independent inquiry, and propose ' +
              'a monitored humanitarian corridor to keep food, fuel and medicine flowing to Meilan ' +
              'while the legality is contested. It cedes the strait to the Republic for now, but it ' +
              'puts the burden of refusing relief to an island\'s civilians squarely on the ' +
              'quarantine\'s architects.',
            critique: {
              strengths: [
                'Reframes the crisis from a great-power standoff to the Republic starving a civilian population, where global opinion favours you.',
                'Opens a face-saving channel — a corridor — that could relieve Meilan without a convoy fight.',
              ],
              risks: [
                'Internationalising is slow, and a corridor the Republic can veto may relieve nothing while Meilan drains.',
                'Leaning on inquiries and corridors can read as substituting process for resolve, denting credibility with Meilan and hardliners.',
              ],
              whyChosen:
                'A leader who wants to break the quarantine\'s legitimacy rather than its hulls turns ' +
                'the incident into a moral and legal defeat for the Republic and an off-ramp for ' +
                'everyone.',
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
      title: 'The one whose island it is',
      narrative:
        'You have been managing a crisis over Meilan; now Meilan asserts that it has a vote. Its ' +
        'leadership conveys two things at once. First, that it will not be a bargaining chip — it ' +
        'will hold, ration, and if pressed it will deny its fabs to everyone before it surrenders ' +
        'them. Second, a faction in its government, watching the stockpile clock and the divided ' +
        'coalition, is privately exploring whether a quiet accommodation with the Republic might be ' +
        'less ruinous than a war fought over their cities. Whether Meilan stands firm or folds now ' +
        'depends substantially on what it reads in you. The Republic is watching for the same crack.',
      decision: {
        prompt: 'Meilan\'s resolve is wavering at the edges. How do you shape it?',
        options: [
          {
            id: 'iron-guarantee',
            label:
              'Give an iron guarantee: a public, unconditional commitment to Meilan\'s defence and survival.',
            consequence:
              'You put the Coalition\'s word on the line in the open — Meilan will not be allowed to ' +
              'fall, full stop. The island\'s resolve stiffens overnight and the accommodation faction ' +
              'goes quiet. So does any ambiguity that once gave you room: you have now tied your own ' +
              'credibility, and possibly your forces, to whatever the Republic does next.',
            critique: {
              strengths: [
                'Restores Meilan\'s nerve and forecloses the adversary\'s cheapest win — the island negotiating its own surrender.',
                'Converts wavering extended deterrence into an unambiguous commitment the adversary must now factor in.',
              ],
              risks: [
                'An unconditional guarantee transfers the decision for war partly to Meilan and the Republic, not you.',
                'A commitment that outruns what your public will actually sustain is a credibility trap if it is ever called.',
              ],
              whyChosen:
                'A leader who knows that extended deterrence lives or dies on credibility removes all ' +
                'doubt, judging that a wobbling guarantee is worse than none.',
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
              'You commit substantial support — resupply, intelligence, capabilities — while quietly ' +
              'urging Meilan not to scorch its own fabs or force a decision before the coalition is ' +
              'ready. The island holds, steadier than before, and keeps the chip card in reserve ' +
              'rather than burning it. Some in Meilan resent being asked to wait; most are reassured ' +
              'that they are not being left alone.',
            critique: {
              strengths: [
                'Stiffens resolve while keeping the most escalatory lever — destroying or denying the fabs — under deliberate, joint control.',
                'Preserves your own freedom of action by stopping short of an unconditional, self-triggering guarantee.',
              ],
              risks: [
                'Conditional backing can read in Meilan as half-hearted, feeding the very accommodation faction you want to quiet.',
                'Counselling restraint to the party under the gun can curdle into resentment if relief is slow.',
              ],
              whyChosen:
                'A leader who wants to hold Meilan firm without forfeiting escalation control offers ' +
                'depth of support in exchange for a say over the island\'s most irreversible moves.',
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
              'You tell Meilan the Coalition will follow its lead — fight if it chooses to fight, ' +
              'cover a settlement if it chooses to settle. It is the most respectful of the island\'s ' +
              'agency and the least likely to drag anyone into a war Meilan does not want. It also ' +
              'signals to the Republic that the Coalition\'s commitment has a seam, and that patience ' +
              'might split the island from its patrons.',
            critique: {
              strengths: [
                'Honours the principle that the people whose island it is should decide their own fate.',
                'Avoids the moral hazard of a patron fighting a war its protégé would not choose.',
              ],
              risks: [
                'Visible deference can read as a green light for accommodation, handing the Republic a bloodless win through coercion.',
                'Signalling a seam in the guarantee weakens deterrence everywhere your word is supposed to hold.',
              ],
              whyChosen:
                'A leader wary of fighting someone else\'s war on someone else\'s timetable puts the ' +
                'decision where the cost falls heaviest — with Meilan itself.',
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
      title: 'Up or down',
      narrative:
        'The crisis has reached its hinge. Through a trusted intermediary the Republic floats a ' +
        'deal: it will quietly fold the "quarantine" back into routine, intermittent "inspections" ' +
        '— preserving its legal claim and its face — if the Coalition will accept that framing, ' +
        'stand its convoy down, and ease the sanctions. It is an off-ramp that lets cargo reach ' +
        'Meilan again while leaving the Republic\'s precedent partly standing. At the same moment, ' +
        'your own military judges that a single decisive show of force now — a full convoy run, or a ' +
        'demonstrative strike on the cordon — could break the quarantine outright while the Republic ' +
        'is still uncertain of your resolve. The window for either is hours. This is the decisive ' +
        'choice of the crisis.',
      decision: {
        prompt: 'The hinge of the crisis. Do you escalate to break it, accommodate to end it, or thread the needle?',
        options: [
          {
            id: 'decisive-force',
            label:
              'Escalate decisively: run the full convoy and break the cordon now, betting resolve ends it on your terms.',
            consequence:
              'You commit to the decisive move while the Republic is still reading you. The convoy ' +
              'sails under full protection; the cordon is challenged at every point at once. For a ' +
              'few hours the outcome hangs on whether the Republic fires — and on whether, having ' +
              'tested you, it decides this fait accompli is the one not worth the war it would take ' +
              'to keep.',
            critique: {
              strengths: [
                'Resolves the crisis on your terms if the adversary backs down, ending the quarantine outright rather than freezing it.',
                'Exploits the adversary\'s uncertainty about your resolve at the exact moment it is highest.',
              ],
              risks: [
                'If the Republic does not fold, this is the step that converts a quarantine into a great-power war.',
                'The whole bet rests on reading an adversary\'s resolve correctly under fog — the classic miscalculation that starts wars.',
              ],
              whyChosen:
                'A leader who judges that the Republic has overreached and is bluffing seizes the ' +
                'narrow window to end the coercion decisively, before the cordon hardens into the new normal.',
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
              'You take the deal inside the window. The "quarantine" dissolves into intermittent ' +
              'inspections; your convoy stands down; the sharpest sanctions ease; cargo and chips ' +
              'flow to Meilan again. No shot is fired, no city burns. The Republic keeps its claim ' +
              'and a sliver of its precedent — and both sides walk away able to call it something ' +
              'other than a defeat.',
            critique: {
              strengths: [
                'Ends the acute crisis without a great-power war, restoring the chip flow and Meilan\'s lifeline.',
                'A mutual face-saver lets the adversary climb down, which is the precondition for any de-escalation actually holding.',
              ],
              risks: [
                'Accepting the framing leaves the precedent partly standing — the next "inspection" regime starts from higher ground.',
                'A negotiated stand-down can be sold at home and in Meilan as the Coalition blinking, denting credibility for the next test.',
              ],
              whyChosen:
                'A leader whose dominant aim is to avoid a war neither side wants takes the verifiable ' +
                'exit when it appears, judging a managed, imperfect outcome better than a roll of the dice.',
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
              'You neither break the cordon nor take the offered framing. You hold the convoy poised ' +
              'and the sanctions biting, but accept the channel — and insist the price of any ' +
              'Coalition stand-down is a real, verifiable lifting of the quarantine, not a relabelled ' +
              'one. The Republic grumbles, stalls, and then, with the convoy at the line and the ' +
              'clock against it, concedes a genuine — if grudging — climb-down.',
            critique: {
              strengths: [
                'Couples coercion with diplomacy, refusing both an avoidable war and a hollow, precedent-preserving deal.',
                'Demanding verifiable lifting attacks the fait accompli itself, not just its label.',
              ],
              risks: [
                'Holding maximal pressure while you talk keeps forces in contact, where an incident can still spark the war you are trying to avoid.',
                'Insisting on verification inside a closing window risks losing the deal to a hardliner or the clock.',
              ],
              whyChosen:
                'A leader who wants the substance of victory without the risk of a chosen war keeps ' +
                'the gun on the table while negotiating, conceding nothing until the cordon genuinely lifts.',
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
      title: 'What the tide leaves behind',
      narrative:
        'The acute danger has crested. What remains is how you close the file — the posture you set ' +
        'for the long contest, the lesson you carry out of the crisis. The quarantine, broken or ' +
        'bargained away, will not be the last attempt to take Meilan a slice at a time. This last ' +
        'choice will not be undone this week, but it will shape whether PORCELAIN TIDE is remembered ' +
        'as a near-miss survived, a precedent set, or the night the next war was made more or less likely.',
      decision: {
        prompt: 'How do you close out the crisis and prepare for the next tide?',
        options: [
          {
            id: 'harden-deterrence',
            label:
              'Harden deterrence: a standing forward posture, an explicit red line on any future quarantine, deeper arming of Meilan.',
            consequence:
              'You close the file by making the next fait accompli unthinkable — persistent presence ' +
              'near the strait, a declared red line that any future cordon will be broken, accelerated ' +
              'arming of Meilan so the island can resist on its own. The message to the Republic is ' +
              'unmistakable; so is the higher, more militarised baseline you have just set across the theatre.',
            critique: {
              strengths: [
                'Raises the cost of the next salami-slice and reassures Meilan and allies that resolve is real and lasting.',
                'Converts a one-off survival into a standing deterrent against a repeat.',
              ],
              risks: [
                'A hardened forward posture locks in a higher floor of confrontation and standing forces-risk indefinitely.',
                'Red lines and forward basing can read in the Republic as encirclement, fuelling the next crisis rather than deterring it.',
              ],
              whyChosen:
                'A leader who concludes the quarantine happened because deterrence looked soft closes ' +
                'the file by making it hard, accepting a tenser baseline as the price of preventing a repeat.',
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
              'You spend your remaining capital on the unglamorous fix — diversifying advanced ' +
              'fabrication across the coalition, building chip and energy reserves, hardening the ' +
              'supply chains that made a quarantine of one island a global emergency. No fleet sails, ' +
              'no enemy is named tonight. But the lever the Republic just pulled will be worth far ' +
              'less the next time it reaches for it.',
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
                'A leader whose lesson is that the crisis only had teeth because one island held the ' +
                'world\'s chips invests in making sure that is no longer true.',
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
              'You invest in the thing no headline will reward — a tested, standing channel with the ' +
              'Republic for exactly this kind of standoff, and negotiated rules of the road to keep ' +
              'coastguards, militias and grey hulls from turning the next incident into a war. It ' +
              'concedes that there will be a next time, and tries to make sure it is survivable.',
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
                'A leader whose lesson from the night is "we were one rammed hull from a war no one ' +
                'wanted" invests in the machinery that makes the next collision recoverable.',
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
