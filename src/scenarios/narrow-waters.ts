import type { Scenario } from '@/engine/types'

/**
 * NARROW WATERS — maritime coercion at a vital oil chokepoint under a nuclear-
 * latency shadow. You advise the Coalition naval task force commander after a
 * covert strike damages a Coalition warship and a tanker near the Khouran Strait.
 *
 * Fictionalised throughout: the Coalition, the Republic of Khouran, the Khouran
 * Strait, the Atlantic Power (Columbia) and every actor are invented. The real-
 * world referent lives only in `basis`. Critique is grounded in genuine War
 * Studies concepts (freedom of navigation, chokepoint leverage and coercion,
 * deterrence and red lines, proxy warfare and deniability, the nuclear threshold
 * and latency, escalation control, audience costs, coalition management, energy
 * coercion) — concepts only, never invented citations, figures or quotes.
 *
 * Structure (reconvergent DAG):
 *   P1 incident → branches into P2-FORCE (deterrence/force track) and
 *   P2-COALITION (diplomacy/coalition track) → both reconverge at P3-MINES
 *   (the strait is mined, a tanker is hit) → shared spine P4-THRESHOLD (decisive
 *   choice under nuclear latency) → P5-CLOSE → state-driven ending resolver.
 *
 * Here `forcesRisk` reads as exposure of Coalition warships, crews, mariners and
 * the tankers transiting the strait; `attribution` is confidence over who fired
 * the covert strike and laid the mines, given Khouran's denials and proxy cut-outs.
 */
export const narrowWaters: Scenario = {
  id: 'narrow-waters',
  codename: 'NARROW WATERS',
  domain: 'Maritime Coercion / Nuclear Threshold',
  basis: 'A regional power and its proxies threatening to close a vital oil chokepoint after a covert strike, under nuclear-threshold ambiguity and contested freedom of navigation.',
  difficulty: 'Advanced',
  estPhases: 5,
  role: 'Strategy lead and political adviser to the Coalition naval task force commander',
  brief:
    'Forty minutes ago, off the western approaches to the Khouran Strait, a fast attack craft ran ' +
    'in low and a limpet charge tore the hull of a Coalition frigate; in the same window a laden ' +
    'tanker under Coalition escort took a strike and is down by the bow, leaking crude into the ' +
    'channel. Two of your sailors are unaccounted for. The Republic of Khouran denies any hand in ' +
    'it — yet within the hour its proxy militias were celebrating the blow online, and a Khouran ' +
    'minister has warned that if the Coalition "militarises" the strait, Khouran will close it to ' +
    'all traffic.\n\n' +
    'A fifth of the world\'s seaborne oil passes through these narrows. Brent is already gapping up; ' +
    'insurers are pulling cover from hulls bound for the gulf. And over all of it hangs a longer ' +
    'shadow: Khouran is assessed to sit at the threshold of a nuclear weapons capability — months, ' +
    'not years, of latency — so every rung you climb is climbed in that gloom.\n\n' +
    'The task force commander needs a recommendation before the next watch. Your senior partner, ' +
    'the Atlantic Power — Columbia — is engaged elsewhere and wants this contained, not widened. ' +
    'The coalition around you is jittery: gulf hosts fear their own ports become targets, European ' +
    'members fear the energy bill. You must keep the strait open and deter Khouran without igniting ' +
    'a regional war and without pushing Khouran across the nuclear line.',
  objectives: [
    'Keep the Khouran Strait open to traffic while deterring further attacks.',
    'Hold a jittery coalition together and manage a distracted senior partner.',
    'Control escalation under nuclear latency — deter without pushing Khouran toward the bomb.',
    'Decide how much to act before attribution through Khouran\'s proxy deniability is firm.',
  ],
  metricsInit: {
    attribution: 30,
    escalation: 36,
    credibility: 50,
    cohesion: 52,
    domestic: 54,
    forcesRisk: 46,
  },
  startNodeId: 'p1-strike',
  nodes: [
    // ── PHASE 1 — THE STRIKE (branch point) ─────────────────────────────────
    {
      id: 'p1-strike',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE STRIKE',
      title: 'Blood in the narrows',
      narrative:
        'The frigate is holding, listing but afloat; the tanker is in a worse way, and a sheen of ' +
        'crude is spreading across the shipping lane. The intelligence cell is cautious: the attack ' +
        'craft\'s profile is consistent with a Khouran proxy flotilla, but the hull was unmarked, the ' +
        'crew unidentified, and Khouran\'s state has issued a flat denial within the hour. Deniability ' +
        'is doing exactly what it is built to do.\n\n' +
        'Markets are already pricing a closure that has not happened. The proxies are crowing; Khouran\'s ' +
        'ministry is warning. Your first recommendation will set the track the whole crisis runs on — ' +
        'and it will be read in three capitals at once: Khouran\'s, your coalition\'s, and Columbia\'s.',
      decision: {
        prompt: 'What do you recommend the task force commander do in the first hours?',
        options: [
          {
            id: 'reflag-escort',
            label:
              'Assert freedom of navigation: reflag at-risk tankers under Coalition colours and convoy them through under escort.',
            consequence:
              'You stand up a reflagging-and-escort regime: vulnerable tankers take Coalition ' +
              'protection and transit in escorted convoys, warships forward, helicopters up. The strait ' +
              'stays open by demonstration. Khouran rails that the Coalition has "militarised" the ' +
              'narrows — and your warships are now the close-aboard targets.',
            critique: {
              strengths: [
                'Answers a coercive threat to close the strait with the one thing that defeats it — keeping it visibly open.',
                'Reflagging gives a legal and political backbone to protection without a single shot fired.',
              ],
              risks: [
                'Escort packets concentrate high-value warships in confined water within reach of cheap proxy weapons.',
                'Forward presence is exactly the "militarisation" Khouran cited as its trigger to close the strait.',
              ],
              whyChosen:
                'A commander who reads the threat as coercion will refuse to let the mere threat of closure do the closing — ' +
                'presence answers coercion in its own currency.',
              doctrine:
                'Freedom of navigation and counter-coercion: a chokepoint\'s leverage works only if the threat to close it is believed. ' +
                'Demonstrated transit denies the coercer that leverage — at the cost of putting your forces in the kill box.',
            },
            effects: { credibility: 10, escalation: 8, forcesRisk: 12, domestic: 5, attribution: -2 },
            styleTags: ['forceful', 'decisive', 'signalling', 'sovereign-action'],
            next: 'p2-force',
          },
          {
            id: 'retaliate-proxy',
            label:
              'Retaliate now against the proxy flotilla that most likely struck, before the trail goes cold.',
            consequence:
              'You recommend a swift, bounded strike on the proxy basing and the craft assessed to ' +
              'have run the attack. It lands hard; the militia takes losses and goes quiet. Khouran ' +
              'denounces an "act of war against the Khouran people" — and pointedly does not concede ' +
              'the proxies were ever theirs to disown.',
            critique: {
              strengths: [
                'Imposes an immediate, felt cost and signals that attacks on Coalition shipping will be answered, not absorbed.',
                'Hitting the proxy rather than the state keeps the blow one rung below a direct Coalition–Khouran clash.',
              ],
              risks: [
                'You have struck on proxy-grade attribution, which deniability is designed to keep just below proof.',
                'Punishing the proxy lets Khouran play victim and own the escalation narrative without owning the original strike.',
              ],
              whyChosen:
                'A commander who believes deterrence decays the moment an attack goes unanswered will retaliate fast, ' +
                'before the political window and the targeting picture both close.',
              doctrine:
                'Deterrence by punishment against deniable proxies: striking the cut-out preserves a rung of separation, ' +
                'but proxy warfare exists precisely to make that retaliation look disproportionate and unprovoked.',
            },
            effects: { credibility: 9, escalation: 14, forcesRisk: 8, domestic: 7, cohesion: -7, attribution: -4 },
            styleTags: ['escalatory', 'forceful', 'decisive', 'sovereign-action'],
            next: 'p2-force',
          },
          {
            id: 'backchannel',
            label:
              'Open a quiet back-channel to Khouran\'s state, signalling you seek no war while you investigate.',
            consequence:
              'Through a trusted third country a private message reaches Khouran\'s leadership: the ' +
              'Coalition will protect shipping but is not seeking a war, and wants a way to keep the ' +
              'strait open. No public reply comes — but no second strike comes either, and a channel ' +
              'now exists that did not before.',
            critique: {
              strengths: [
                'Builds an off-ramp before either side has climbed the ladder, and tests whether Khouran\'s state actually controls the proxies.',
                'Reduces the risk that a jittery Khouran reads your moves as the opening of a regime-threatening war — the fear that drives nuclear breakout.',
              ],
              risks: [
                'If it leaks, a back-channel after your sailors were killed reads as weakness and bleeds credibility and domestic support.',
                'It assumes a rational, in-control hand on the other side — when the proxies may be the point of friction, not the state.',
              ],
              whyChosen:
                'A commander whose worst case is an inadvertent slide to the nuclear threshold will spend the first hours ' +
                'keeping a human channel open, so a misread does not become a war.',
              doctrine:
                'Reassurance as the other half of deterrence, and the stability–instability problem: signalling limited aims lowers ' +
                'the chance a cornered, latent-nuclear adversary breaks toward the bomb — but reassurance offered too early can read as irresolution.',
            },
            effects: { escalation: -8, attribution: 4, credibility: -6, forcesRisk: -4, cohesion: 3 },
            styleTags: ['de-escalatory', 'restraint', 'consultative', 'off-ramp'],
            next: 'p2-coalition',
          },
          {
            id: 'build-coalition',
            label:
              'Build a coalition for graduated pressure: align partners and Columbia behind sanctions and a shared posture before any kinetic step.',
            consequence:
              'You convene the coalition and bring Columbia to the table, knitting a graduated plan: ' +
              'joint condemnation, targeted financial pressure on the proxy networks, and a shared rule ' +
              'set for the strait. It is slower and quieter than a strike — and every partner is now ' +
              'invested rather than watching from the harbour wall.',
            critique: {
              strengths: [
                'Converts a bilateral confrontation into collective pressure, denying Khouran its cheapest win — splitting the coalition.',
                'Graduated pressure preserves rungs above and below, keeping escalation control in your hands.',
              ],
              risks: [
                'Coalition consensus is slow; while you align partners, Khouran consolidates the narrative and the proxies regroup.',
                'A measured collective response after a lethal strike can read at home as failing to defend your own.',
              ],
              whyChosen:
                'A commander who treats coalition cohesion as the centre of gravity will spend the opening hours binding partners in, ' +
                'judging that a united front coerces Khouran more durably than a lone blow.',
              doctrine:
                'Coalition management and graduated escalation: collective legitimacy and burden-sharing multiply deterrent weight, ' +
                'but the adversary\'s standing aim is decoupling — and consensus bought slowly can be overtaken by events.',
            },
            effects: { cohesion: 12, attribution: 5, escalation: -3, credibility: -3, domestic: -4 },
            styleTags: ['multilateral', 'consultative', 'alliance-first', 'deliberate'],
            next: 'p2-coalition',
          },
        ],
      },
    },

    // ── PHASE 2A — DETERRENCE / FORCE TRACK ─────────────────────────────────
    {
      id: 'p2-force',
      phase: 2,
      phaseLabel: 'PHASE 2 · DEMONSTRATION OF FORCE',
      title: 'The narrows under guns',
      narrative:
        'Your opening move put steel forward, and the strait has become a stand-off measured in ' +
        'sea miles. Khouran has surged fast attack craft and shore-based anti-ship missiles to the ' +
        'far bank; its proxies swarm the choke with small boats that dart at your escorts and break ' +
        'off. An escorted convoy is inbound tonight. Columbia, watching the forces-risk climb, sends ' +
        'word that it will back you but will not be dragged into a war over a strait — and asks, ' +
        'pointedly, what your ceiling is.',
      decision: {
        prompt: 'The strait is hot and a convoy is due. How do you posture the force?',
        options: [
          {
            id: 'show-of-force',
            label:
              'Surge a carrier group and declare rules of engagement that any craft closing the convoy will be engaged.',
            consequence:
              'You bring overwhelming presence forward and publish hard rules of engagement. The ' +
              'convoy transits untouched and the proxies pull back from the escorts. The cost is a ' +
              'strait now crowded with two heavily armed forces a misjudged closing-speed apart, and ' +
              'a Khouran leadership warning of "consequences without limit".',
            critique: {
              strengths: [
                'Maximal deterrent signal: the convoy gets through and the proxies learn the price of pressing your escorts.',
                'Clear, declared rules of engagement reduce the ambiguity that gets crews killed in a confused close engagement.',
              ],
              risks: [
                'Massed force in confined water shortens every reaction time — a single misread small boat can trigger the war you are trying to avoid.',
                '"Consequences without limit" from a latent-nuclear state is a phrase you cannot afford to test.',
              ],
              whyChosen:
                'A commander who believes the proxies are testing nerve will answer with presence so overwhelming that the test ends — ' +
                'deterrence by visible, credible strength.',
              doctrine:
                'Deterrence by denial and the security dilemma in confined waters: concentrated force can deter, but two armed forces ' +
                'crammed into a chokepoint compress decision time until accident, not intent, drives escalation.',
            },
            effects: { credibility: 12, escalation: 12, forcesRisk: 10, domestic: 6, cohesion: -4 },
            styleTags: ['forceful', 'escalatory', 'decisive', 'brinkmanship'],
            next: 'p3-mines',
          },
          {
            id: 'measured-escort',
            label:
              'Hold a disciplined escort posture with tight, defensive rules of engagement and no offensive surge.',
            consequence:
              'You keep the convoy moving under a deliberately restrained posture: defend, do not ' +
              'provoke, fire only to protect. The transit is tense but clean. Some at home and among ' +
              'the gulf hosts grumble that you are letting the proxies harass you unanswered — but the ' +
              'ladder has not been climbed, and the channel stays open.',
            critique: {
              strengths: [
                'Keeps the strait open and your forces protected while denying Khouran a pretext to call you the aggressor.',
                'Disciplined defensive rules of engagement leave human judgement in the loop on the one decision that starts a war.',
              ],
              risks: [
                'Restraint under harassment can read as weakness and invite the proxies to probe harder.',
                'A purely defensive posture cedes initiative — you react to the choke, you do not shape it.',
              ],
              whyChosen:
                'A commander who fears inadvertent escalation more than a bruised reputation will hold a disciplined line, ' +
                'trading the appearance of toughness for control of the ladder.',
              doctrine:
                'Escalation control and restrictive rules of engagement: bounding your own use of force keeps the off-ramps open and ' +
                'denies the adversary the incident it needs — at the price of looking passive while harassment continues.',
            },
            effects: { escalation: -6, forcesRisk: -4, cohesion: 5, credibility: -4, attribution: 3 },
            styleTags: ['restraint', 'de-escalatory', 'human-in-loop', 'keep-control'],
            next: 'p3-mines',
          },
          {
            id: 'degrade-asm',
            label:
              'Pre-emptively degrade the shore-based anti-ship missiles threatening the convoy route.',
            consequence:
              'Judging the missile batteries an unacceptable threat to the escort, you strike them ' +
              'before the convoy enters their envelope. The route is safer for it. But you have put ' +
              'ordnance onto Khouran\'s own soil — not a proxy\'s — and Khouran now frames this as the ' +
              'Coalition firing the first direct shot of a war.',
            critique: {
              strengths: [
                'Removes the single most lethal threat to the convoy before it can be used, protecting hundreds of mariners.',
                'Demonstrates the Coalition will not let its ships be held hostage in a chokepoint.',
              ],
              risks: [
                'Striking sovereign Khouran territory crosses from punishing proxies to attacking the state — the rung that invites regime-survival fears and nuclear thinking.',
                'A pre-emptive strike on contested attribution hands Khouran the "first shot" narrative with allies and neutrals.',
              ],
              whyChosen:
                'A commander who will not gamble crews\' lives against a known missile threat may judge that pre-empting the battery ' +
                'is the lesser risk — better to act than to be hit.',
              doctrine:
                'Pre-emption and the first-shot problem under nuclear latency: removing a threat early can be militarily sound and ' +
                'strategically catastrophic, because the strike that protects the convoy may be the one that pushes a cornered state toward breakout.',
            },
            effects: { forcesRisk: -6, escalation: 16, credibility: 8, cohesion: -8, attribution: -3 },
            styleTags: ['pre-emptive', 'forceful', 'escalatory', 'sovereign-action'],
            next: 'p3-mines',
          },
        ],
      },
    },

    // ── PHASE 2B — DIPLOMACY / COALITION TRACK ──────────────────────────────
    {
      id: 'p2-coalition',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE COALITION HOLDS ITS BREATH',
      title: 'Pressure, and its price',
      narrative:
        'Your opening move bought you a quieter board and a wider table — and a slower clock. The ' +
        'graduated track is taking hold: condemnation, financial measures, a shared posture forming. ' +
        'But the strait has not calmed. Insurers have suspended cover on the riskiest routes, freight ' +
        'is rerouting the long way, and a gulf-host partner — whose ports you depend on — says quietly ' +
        'that it cannot host a confrontation that turns its own harbours into targets. Khouran, ' +
        'sensing the seam, dangles a discounted energy deal at exactly that partner.',
      decision: {
        prompt: 'Pressure is building but the coalition is straining. What governs your next step?',
        options: [
          {
            id: 'tighten-sanctions',
            label:
              'Tighten the screws: extend financial measures to the proxy supply chain and Khouran\'s energy revenue.',
            consequence:
              'You broaden the pressure to bite Khouran\'s revenue and the networks that arm the ' +
              'proxies. It lands; Khouran\'s economy feels it and hardliners there howl. It also raises ' +
              'energy prices the very partners you need are already struggling to absorb, and Khouran ' +
              'casts itself as the besieged victim of economic war.',
            critique: {
              strengths: [
                'Imposes real, cumulative cost without firing a shot, and targets the money that sustains the proxies.',
                'Keeps the response below the kinetic threshold, preserving rungs and Coalition legitimacy.',
              ],
              risks: [
                'Energy coercion cuts both ways — squeezing Khouran\'s exports squeezes your own coalition\'s economies and the markets you are trying to calm.',
                'A cornered economy can harden a regime toward survival logic, including the nuclear hedge, rather than soften it.',
              ],
              whyChosen:
                'A commander who wants to coerce without combat reaches for the financial instrument, betting that sustained ' +
                'economic pain bends Khouran before it breaks the coalition.',
              doctrine:
                'Economic and energy coercion: sanctions impose cost below the use-of-force line, but against a chokepoint power they ' +
                'risk a counter-coercion spiral — and may push a latent-nuclear state toward the very breakout you fear.',
            },
            effects: { escalation: 6, domestic: 4, cohesion: -5, credibility: 5, attribution: 2 },
            styleTags: ['coercive', 'multilateral', 'deliberate', 'signalling'],
            next: 'p3-mines',
          },
          {
            id: 'hold-partner',
            label:
              'Hold the wavering partner with burden-sharing: backfill their port defences and underwrite their energy exposure.',
            consequence:
              'Rather than pressure or concede, you put real resources on the table — air and missile ' +
              'defence to harden the partner\'s ports, and a shared arrangement to cushion their energy ' +
              'bill. They stay, and stay willingly. It costs you capacity and capital, and it visibly ' +
              'denies Khouran the wedge it was driving.',
            critique: {
              strengths: [
                'Converts a wavering partner into a committed one by aligning interests, not just demanding loyalty.',
                'Hardening their ports directly answers the fear — becoming a target — that was peeling them away.',
              ],
              risks: [
                'Defensive capacity spent backfilling a partner is capacity not available for the strait itself.',
                'It sets a precedent that staying in the coalition earns concessions, which others may learn to extract.',
              ],
              whyChosen:
                'A commander who sees the coalition as the centre of gravity will pay to keep it whole, judging that the return ' +
                'in cohesion and denied leverage is worth the outlay.',
              doctrine:
                'Burden-sharing and reassurance as cohesion maintenance: binding allies through credible protection and aligned ' +
                'interests defeats the adversary\'s decoupling strategy more durably than coercion or capitulation.',
            },
            effects: { cohesion: 14, forcesRisk: 4, escalation: -2, domestic: -3, credibility: 2 },
            styleTags: ['multilateral', 'burden-sharing', 'alliance-first', 'reassurance'],
            next: 'p3-mines',
          },
          {
            id: 'un-track',
            label:
              'Internationalise: take the strike and the closure threat to a multilateral body and demand a guaranteed right of passage.',
            consequence:
              'You move the fight onto the diplomatic high ground, marshalling neutral states and ' +
              'commercial powers behind a demand that the strait remain open to all. It is slow and ' +
              'consensus-bound; Khouran\'s patrons obstruct it. But the legitimacy accrues to you, and ' +
              'Khouran\'s closure threat now reads to the world as lawlessness, not grievance.',
            critique: {
              strengths: [
                'Frames Khouran as the violator of a right the whole world depends on, isolating it diplomatically.',
                'Builds legitimacy that strengthens every later step and reassures neutral and commercial states.',
              ],
              risks: [
                'Multilateral process is slow and Khouran\'s backers can stall it while events on the water move faster.',
                'Investing in legitimacy can read at home as talking while your sailors\' attackers go unpunished.',
              ],
              whyChosen:
                'A commander who knows that legitimacy is a force multiplier will spend it building a wall of international ' +
                'consensus that Khouran must batter through to act.',
              doctrine:
                'Legitimacy and freedom of navigation as a global commons: making the chokepoint the world\'s cause, not just ' +
                'the Coalition\'s, raises the political cost to Khouran of closing it — but legitimacy accrues slowly while crises move fast.',
            },
            effects: { cohesion: 8, credibility: 4, attribution: 4, escalation: -3, domestic: -4 },
            styleTags: ['multilateral', 'legalistic', 'consultative', 'deliberate'],
            next: 'p3-mines',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE STRAIT IS MINED ────────────────────────
    {
      id: 'p3-mines',
      phase: 3,
      phaseLabel: 'PHASE 3 · MINED WATERS',
      title: 'A tanker on the bottom',
      narrative:
        'However you arrived here, the crisis has crossed a line on the water. Overnight the strait ' +
        'was seeded with mines — moored and influence types, some clearly modern — and at first light ' +
        'a neutral-flagged tanker struck one and broke its back in the channel. The crew got off; the ' +
        'wreck now half-blocks the deepest passage and the slick is widening. Khouran denies laying ' +
        'anything and blames "reckless Coalition militarisation"; the proxies have gone silent, which ' +
        'unsettles you more than their crowing did.\n\n' +
        'Mine countermeasures vessels can begin clearing — but clearance is slow, defenceless work in ' +
        'water that may still be hot, and your attribution for who laid the field remains proxy-grade: ' +
        'strong suspicion, deniable on paper. The strait is now effectively closing itself, which is ' +
        'precisely what Khouran threatened without ever admitting it did.',
      decision: {
        prompt: 'The strait is mined and a neutral tanker is down. How do you respond?',
        options: [
          {
            id: 'clear-and-protect',
            label:
              'Begin escorted mine clearance and treat anything that interferes with clearance as hostile.',
            consequence:
              'You push mine countermeasures vessels in under heavy escort and declare that ' +
              'interference with clearance will be met with force. The lane begins, slowly, to reopen. ' +
              'But your clearance ships are the most vulnerable hulls afloat, working for days within ' +
              'reach of every shore battery and small boat Khouran has.',
            critique: {
              strengths: [
                'Directly answers the closure — clearing the field is the act that keeps the strait open.',
                'Protecting clearance with declared force deters interference while staying defensible as a freedom-of-navigation mission.',
              ],
              risks: [
                'Mine countermeasures vessels are slow, lightly armed and must hold station for days — an inviting, concentrated target.',
                'A single attack on a clearance ship drags you straight up the ladder with crews already in the water.',
              ],
              whyChosen:
                'A commander whose mission is an open strait does the unglamorous, dangerous thing — clears the mines — ' +
                'because nothing else actually reopens the channel.',
              doctrine:
                'Counter-mine operations and freedom of navigation: clearance is the concrete act that defeats closure, but it ' +
                'exposes your most vulnerable assets longest, inverting the usual escalation calculus in the adversary\'s favour.',
            },
            effects: { credibility: 8, forcesRisk: 12, escalation: 6, cohesion: 4, domestic: 4 },
            styleTags: ['forceful', 'decisive', 'keep-control', 'signalling'],
            next: 'p4-threshold',
          },
          {
            id: 'blockade-response',
            label:
              'Answer mining with blockade: interdict Khouran\'s own shipping until the field is disowned and the strait reopened.',
            consequence:
              'You turn the chokepoint logic back on Khouran, moving to interdict its tankers and ' +
              'cargo until it disowns the field and the lane reopens. It is a powerful lever — and a ' +
              'profound escalation: Khouran calls a blockade an act of war, rallies its public around ' +
              'the flag, and its hardliners reach openly for the nuclear hedge as the only deterrent ' +
              'against "strangulation".',
            critique: {
              strengths: [
                'Seizes the coercive initiative, imposing on Khouran the very closure it imposed on the world.',
                'A blockade is unambiguous leverage with a clear demand and a clear off-ramp — disown the mines, reopen the strait.',
              ],
              risks: [
                'Blockade is widely regarded as an act of war; you would be choosing a war you set out to avoid.',
                'Strangulation is the textbook trigger for a cornered, latent-nuclear state to break toward the bomb as its last guarantor of survival.',
              ],
              whyChosen:
                'A commander who believes only symmetric coercion will move Khouran answers a closure with a closure, ' +
                'betting the regime values its revenue and survival more than the proxy fight.',
              doctrine:
                'Counter-coercion and the strangulation–breakout dynamic: turning the chokepoint against its owner is potent leverage, ' +
                'but cornering a nuclear-latent regime collapses the very escalation control you depend on, making breakout rational.',
            },
            effects: { escalation: 18, credibility: 10, forcesRisk: 8, cohesion: -8, domestic: 5, attribution: -2 },
            styleTags: ['coercive', 'escalatory', 'brinkmanship', 'sovereign-action'],
            next: 'p4-threshold',
          },
          {
            id: 'pause-and-channel',
            label:
              'Pause transits, declare the strait a no-go until cleared, and use Columbia and a neutral to broker a mutual stand-down.',
            consequence:
              'You suspend transits rather than feed ships into a mined channel, frame the pause as ' +
              'protecting mariners, and put Columbia and a neutral broker to work on a mutual ' +
              'stand-down: Khouran tolerates clearance, the Coalition pulls offensive posture back. ' +
              'Markets lurch on the closure — but no more hulls are lost, and a diplomatic track is ' +
              'live where there was none.',
            critique: {
              strengths: [
                'Stops feeding ships into a kill zone — no more losses while attribution and clearance are sorted.',
                'Reframes a pause as protection, not retreat, and creates a face-saving mutual exit before either side is fully committed.',
              ],
              risks: [
                'Suspending transits hands Khouran exactly the closed strait it wanted, and the market and political costs are immediate.',
                'A pause can be read as capitulation, conceding the coercer\'s aim and emboldening the next probe.',
              ],
              whyChosen:
                'A commander who values escalation control and crew safety above the optics of an open strait will pause, ' +
                'clear, and talk — accepting a short closure to avoid a long war.',
              doctrine:
                'Escalation control and off-ramps under nuclear latency: a deliberate, framed pause buys time, protects forces and ' +
                'opens a brokered exit — but conceding the chokepoint, even briefly, rewards coercion and is costly to walk back.',
            },
            effects: { escalation: -10, forcesRisk: -8, cohesion: 6, attribution: 5, credibility: -6, domestic: -6 },
            styleTags: ['de-escalatory', 'off-ramp', 'restraint', 'consultative'],
            next: 'p4-threshold',
          },
        ],
      },
    },

    // ── PHASE 4 — THE NUCLEAR THRESHOLD (decisive choice) ───────────────────
    {
      id: 'p4-threshold',
      phase: 4,
      phaseLabel: 'PHASE 4 · THE THRESHOLD',
      title: 'A shadow lengthens over the water',
      narrative:
        'Now the longer shadow falls across the board. Overnight, two things land together. Your ' +
        'intelligence cell reports — at moderate confidence — that Khouran has moved sensitive ' +
        'nuclear-related material and dispersed it, a step it takes only when it fears for the ' +
        'regime\'s survival, signalling the latency clock may be running faster. And through the ' +
        'broker, Khouran\'s leadership sends a real, time-limited offer: it will permit clearance and ' +
        'quietly rein in the proxies, in exchange for the Coalition pulling its heaviest forces back ' +
        'from the narrows and easing the financial squeeze. The catch is a hardline faction in ' +
        'Khouran openly arguing that only the bomb, not a deal, can guarantee survival — and the ' +
        'offer holds for hours, not days.\n\n' +
        'This is the decisive choice. Every option is now weighed against a state that may be sprinting ' +
        'for a weapon precisely because it feels cornered. Get this wrong and you do not lose a strait — ' +
        'you midwife a nuclear power.',
      decision: {
        prompt: 'Khouran may be sprinting for the threshold, and a time-limited off-ramp is open. What do you recommend?',
        options: [
          {
            id: 'take-the-deal',
            label:
              'Take the off-ramp: pull heavy forces back, ease the squeeze, lock in clearance and a proxy stand-down before the window closes.',
            consequence:
              'You accept inside the window. The heaviest forces pull back from the narrows, the ' +
              'financial pressure eases, clearance proceeds unmolested, and the proxy harassment ' +
              'falls away. No clean victory — Khouran keeps its deniability and a share of the story — ' +
              'but the strait reopens and the dispersal of nuclear material halts, then quietly reverses.',
            critique: {
              strengths: [
                'Defuses the breakout pressure at the exact moment it spikes — easing the corner is what pulls a latent state back from the bomb.',
                'Reopens the strait by agreement rather than by force, and rewards Khouran\'s state for reining in the proxies it denied owning.',
              ],
              risks: [
                'Pulling back and easing pressure hands Khouran a strategic win it can credit to coercion and proxy violence.',
                'Hardliners on both sides — yours and Khouran\'s — will call a negotiated stand-down a capitulation that invites the next strait crisis.',
              ],
              whyChosen:
                'A commander whose dominant aim has been to avoid a nuclear breakout and a regional war takes the verifiable ' +
                'off-ramp the moment it appears, knowing such windows shut and rarely reopen.',
              doctrine:
                'Escalation control and the stability–instability problem: easing the survival threat is precisely what keeps a ' +
                'latent-nuclear adversary below the threshold — the hard skill is recognising the off-ramp and taking it before the hardliners close it.',
            },
            effects: { escalation: -16, forcesRisk: -12, attribution: 6, cohesion: 4, credibility: -6, domestic: -6 },
            styleTags: ['de-escalatory', 'off-ramp', 'multilateral', 'restraint'],
            next: 'p5-close',
          },
          {
            id: 'coercive-ultimatum',
            label:
              'Issue a coercive ultimatum: clear the strait and verifiably halt the nuclear dispersal now, or face decisive Coalition action.',
            consequence:
              'You bet that maximum pressure at the moment of Khouran\'s fear will force a full ' +
              'climb-down. The ultimatum is delivered with the carrier group plainly ready. For two ' +
              'days the crisis hangs on a knife: Khouran does not openly break for the bomb — but it ' +
              'does not capitulate either, and the hardliners\' argument that only a weapon deters ' +
              'such ultimatums grows louder, not quieter.',
            critique: {
              strengths: [
                'Maximum clarity of resolve at the decisive moment, refusing to reward mining and coercion with concessions.',
                'A hard, verifiable demand on the nuclear dispersal addresses the gravest danger head-on rather than trading it away.',
              ],
              risks: [
                'An ultimatum to a state that fears for its survival can confirm exactly the threat that justifies breakout — the worst inadvertent outcome.',
                'If Khouran calls your bluff, you must either execute the war you sought to avoid or eat a shattering blow to credibility.',
              ],
              whyChosen:
                'A commander who believes that easing pressure now teaches Khouran that coercion pays will instead demand ' +
                'capitulation while the leverage is greatest, betting the regime values survival over the bomb.',
              doctrine:
                'Compellence, red lines and the commitment trap under nuclear latency: an ultimatum can force a climb-down, but issued to ' +
                'a cornered latent-nuclear state it risks confirming the survival fear that makes breakout rational — and a bluff called is a war or a rout.',
            },
            effects: { escalation: 16, credibility: 12, forcesRisk: 8, domestic: 6, cohesion: -8, attribution: -2 },
            styleTags: ['coercive', 'brinkmanship', 'escalatory', 'decisive'],
            next: 'p5-close',
          },
          {
            id: 'conditional-verify',
            label:
              'Take the deal\'s shape but condition it: phased pull-back tied to verifiable clearance and a verifiable halt to the nuclear dispersal.',
            consequence:
              'You accept the off-ramp\'s structure but insist on sequencing and verification — your ' +
              'pull-back phased against observable clearance and an inspectable halt to the dispersal, ' +
              'with the broker as witness. Khouran grumbles at the conditions and the clock nearly ' +
              'runs out; the hardliners rail — but the leadership, wanting the squeeze gone, concedes ' +
              'a verification it can live with, barely.',
            critique: {
              strengths: [
                'Captures the de-escalation and hardens it against cheating, refusing a paper promise on the one thing — the nuclear dispersal — that matters most.',
                'Phasing keeps leverage in reserve, so neither side can pocket a one-sided gain, and the survival fear is eased rather than ignored.',
              ],
              risks: [
                'Pushing conditions inside a closing window risks losing the whole deal to the deadline and the hardliners.',
                'Verification demands can be the very pretext a breakout faction uses to walk away and blame you.',
              ],
              whyChosen:
                'A commander who wants the off-ramp but distrusts unverified promises threads the needle — taking the exit ' +
                'while making it real and reversible only on Khouran\'s default, not on trust.',
              doctrine:
                'Arms-control logic at crisis speed — "trust but verify": tying de-escalation to observable, sequenced steps eases the ' +
                'survival fear that drives breakout while denying the adversary a free hand, but verification pressed too hard can collapse a closing window.',
            },
            effects: { escalation: -12, forcesRisk: -8, attribution: 10, credibility: 6, cohesion: 5, domestic: -4 },
            styleTags: ['de-escalatory', 'off-ramp', 'verify-first', 'multilateral'],
            next: 'p5-close',
          },
        ],
      },
    },

    // ── PHASE 5 — THE STRATEGIC CLOSE → ENDING RESOLVER ─────────────────────
    {
      id: 'p5-close',
      phase: 5,
      phaseLabel: 'PHASE 5 · CLOSING THE STRAIT FILE',
      title: 'How you leave the narrows',
      narrative:
        'The acute danger has passed its peak. The strait is clearing, the markets are unclenching, ' +
        'and the dispersal of nuclear material has — for now — stopped. What remains is how you close ' +
        'the file: the posture you set for the months ahead, the lesson the task force and the ' +
        'coalition carry out of these narrows. This last choice will not be undone tonight, but it ' +
        'will shape whether the strait is remembered as a war averted or a precedent for the next ' +
        'coercion.',
      decision: {
        prompt: 'How do you close out NARROW WATERS?',
        options: [
          {
            id: 'standing-fon',
            label:
              'Institutionalise an open strait: a standing multinational escort and clearance regime with agreed rules for the narrows.',
            consequence:
              'You convert a bad month into a durable arrangement — a permanent multinational presence ' +
              'with agreed rules of engagement, shared clearance capacity and burden-sharing across the ' +
              'coalition. It outlasts your tenure, and the next coercion attempt starts against a ' +
              'standing wall instead of a scramble.',
            critique: {
              strengths: [
                'Turns one survival into lasting deterrence by denial — a standing presence makes the next closure threat far harder to credit.',
                'Embeds burden-sharing so the coalition, not one navy, owns the strait\'s security.',
              ],
              risks: [
                'A permanent forward presence is a permanent friction point and a standing forces-risk in confined water.',
                'Khouran will read an institutionalised Coalition fixture as the very militarisation it warned against, sustaining the grievance.',
              ],
              whyChosen:
                'A commander who sees this crisis as the first of a category, not a one-off, invests in the regime that makes ' +
                'the next coercion attempt fail before it begins.',
              doctrine:
                'Deterrence by denial and freedom of navigation institutionalised: standing multinational presence raises the ' +
                'permanent cost of closing a commons chokepoint — at the price of a permanent flashpoint and a standing grievance.',
            },
            effects: { credibility: 6, cohesion: 6, forcesRisk: 6, escalation: -2 },
            styleTags: ['multilateral', 'alliance-first', 'deliberate', 'signalling'],
            next: null,
          },
          {
            id: 'hard-redline',
            label:
              'Set a hard red line: declare that any future attack on shipping or move toward a weapon will be met with decisive force.',
            consequence:
              'You close the file by rebuilding deterrence the old way — an explicit, public red line ' +
              'on both attacks on shipping and any sprint for a weapon, backed by visibly reinforced ' +
              'presence. The message is unmistakable; so is the higher baseline of tension, and so is ' +
              'the commitment you must now honour if it is ever tested.',
            critique: {
              strengths: [
                'Leaves no ambiguity about Coalition resolve on both the strait and the nuclear threshold.',
                'Reassures allies and the domestic audience that the lesson of the narrows is strength, not concession.',
              ],
              risks: [
                'A red line on a weapons sprint is a commitment trap: if Khouran edges across it deniably, you must act or be exposed as bluffing.',
                'Locking in a higher floor of confrontation sustains exactly the survival fear that drives breakout in the first place.',
              ],
              whyChosen:
                'A commander who concludes the crisis happened because deterrence was too soft will close it by making ' +
                'deterrence unmistakable, on the strait and on the bomb alike.',
              doctrine:
                'Red lines, audience costs and the commitment trap: a public threat deters only if credible and enforceable when ' +
                'tested — and drawn around a latent-nuclear breakout, it can entrench the very fear that makes the breakout rational.',
            },
            effects: { credibility: 8, escalation: 8, forcesRisk: 6, domestic: 5, cohesion: -3 },
            styleTags: ['escalatory', 'decisive', 'signalling', 'sovereign-action'],
            next: null,
          },
          {
            id: 'crisis-architecture',
            label:
              'Invest in the quiet architecture: a standing crisis line and de-confliction channel with Khouran, and a back-channel on the nuclear question.',
            consequence:
              'You spend your remaining capital on something unglamorous — a tested, standing ' +
              'de-confliction line for the narrows and a discreet channel on the nuclear question, so ' +
              'the next incident has a human on the other end and the threshold has a path that is not ' +
              'a sprint. No headlines. Possibly the most valuable thing you do.',
            critique: {
              strengths: [
                'Addresses the root danger — the absence of a fast human channel between forces a misjudgement apart in a chokepoint.',
                'A live channel on the nuclear question gives Khouran an alternative to breakout the next time it feels cornered.',
              ],
              risks: [
                'Engaging Khouran after it killed your sailors can be attacked at home as rewarding aggression.',
                'A channel only helps if the other side picks up and means it — it is insurance, not a guarantee.',
              ],
              whyChosen:
                'A commander whose lesson from the narrows is "we were one misread small boat from a war we did not choose" ' +
                'invests in the call being answered, and the threshold having an off-ramp, next time.',
              doctrine:
                'Crisis-communication infrastructure and reassurance under nuclear latency: deliberate human off-ramps between ' +
                'forces in a chokepoint, and a standing channel on the threshold, so escalation control does not depend on luck.',
            },
            effects: { escalation: -6, cohesion: 4, attribution: 2, credibility: -2, forcesRisk: -2 },
            styleTags: ['de-escalatory', 'consultative', 'off-ramp', 'reassurance'],
            next: null,
          },
        ],
      },
    },
  ],
}
