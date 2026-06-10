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
    'Approximately forty minutes ago, off the western approaches to the Khouran Strait, a fast ' +
    'attack craft closed a Coalition frigate and detonated a limpet charge against its hull. In the ' +
    'same window a laden tanker under Coalition escort sustained a strike and is down by the bow, ' +
    'leaking crude into the channel. Two crew members are unaccounted for. The Republic of Khouran ' +
    'denies involvement; within the hour, however, its proxy militias publicly celebrated the ' +
    'attack, and a Khouran minister has warned that any Coalition "militarisation" of the strait ' +
    'will be answered by closing it to all traffic.\n\n' +
    'Roughly a fifth of the world\'s seaborne oil transits these narrows. Crude prices are rising ' +
    'and insurers are withdrawing cover from hulls bound for the gulf. Khouran is assessed to sit ' +
    'at the threshold of a nuclear weapons capability, with latency measured in months rather than ' +
    'years; escalation must therefore be weighed against that proximity throughout.\n\n' +
    'The task force commander requires a recommendation before the next watch. The senior partner, ' +
    'the Atlantic Power (Columbia), is committed elsewhere and wants the crisis contained rather ' +
    'than widened. Coalition cohesion is fragile: gulf host states fear their ports becoming ' +
    'targets, while European members are concerned about energy costs. The task is to keep the ' +
    'strait open and deter Khouran without precipitating a regional war or driving Khouran across ' +
    'the nuclear threshold.',
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
      title: 'Incident in the narrows',
      narrative:
        'The frigate is listing but afloat; the tanker is more seriously damaged, and crude is ' +
        'spreading across the shipping lane. The intelligence cell assesses that the attack craft\'s ' +
        'profile is consistent with a Khouran proxy flotilla, but the hull was unmarked, the crew ' +
        'unidentified, and the Khouran state has issued a categorical denial. The deniability is ' +
        'operating as designed.\n\n' +
        'Markets are already pricing a closure that has not occurred. The proxies are claiming the ' +
        'attack while the Khouran ministry issues warnings. The first recommendation will set the ' +
        'track for the crisis and will be read simultaneously in three capitals: Khouran\'s, the ' +
        'coalition\'s, and Columbia\'s.',
      decision: {
        prompt: 'What do you recommend the task force commander do in the first hours?',
        options: [
          {
            id: 'reflag-escort',
            label:
              'Assert freedom of navigation: reflag at-risk tankers under Coalition colours and convoy them through under escort.',
            consequence:
              'A reflagging-and-escort regime is established: vulnerable tankers receive Coalition ' +
              'protection and transit in escorted convoys, with warships forward and aviation cover. ' +
              'The strait remains open by demonstration. Khouran asserts that the Coalition has ' +
              '"militarised" the narrows, and Coalition warships now constitute the close-aboard targets.',
            critique: {
              strengths: [
                'Answers a coercive threat to close the strait with the one measure that negates it: keeping it visibly open.',
                'Reflagging provides a legal and political basis for protection without recourse to force.',
              ],
              risks: [
                'Escort packets concentrate high-value warships in confined water within reach of inexpensive proxy weapons.',
                'Forward presence is the "militarisation" Khouran cited as its stated trigger for closing the strait.',
              ],
              whyChosen:
                'A commander who reads the threat as coercion will decline to let the mere threat of closure achieve closure; ' +
                'demonstrated presence answers coercion in kind.',
              doctrine:
                'Freedom of navigation and counter-coercion: a chokepoint\'s leverage holds only while the threat to close it is ' +
                'credible. Demonstrated transit denies the coercer that leverage, at the cost of exposing one\'s forces to attack.',
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
              'A bounded strike is recommended against the proxy basing and the craft assessed to ' +
              'have conducted the attack. It inflicts substantial losses and the militia falls silent. ' +
              'Khouran denounces an "act of war against the Khouran people" while declining to concede ' +
              'that the proxies were ever its responsibility to disown.',
            critique: {
              strengths: [
                'Imposes an immediate cost and signals that attacks on Coalition shipping will be answered rather than absorbed.',
                'Striking the proxy rather than the state holds the response one rung below a direct Coalition–Khouran clash.',
              ],
              risks: [
                'The strike rests on proxy-grade attribution, which deniability is designed to keep below the threshold of proof.',
                'Punishing the proxy allows Khouran to assume the victim role and control the escalation narrative without owning the original attack.',
              ],
              whyChosen:
                'A commander who judges that deterrence decays once an attack goes unanswered will retaliate quickly, ' +
                'before both the political window and the targeting picture close.',
              doctrine:
                'Deterrence by punishment against deniable proxies: striking the cut-out preserves a rung of separation, ' +
                'but proxy warfare is constructed precisely to make such retaliation appear disproportionate and unprovoked.',
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
              'Through a trusted third country, a private message reaches Khouran\'s leadership: the ' +
              'Coalition will protect shipping but is not seeking war and wants a means of keeping the ' +
              'strait open. No public reply follows, but neither does a second strike, and a channel ' +
              'now exists where none did before.',
            critique: {
              strengths: [
                'Establishes an off-ramp before either side climbs the ladder, and tests whether the Khouran state in fact controls the proxies.',
                'Reduces the risk that Khouran interprets Coalition moves as the opening of a regime-threatening war, the fear most likely to drive nuclear breakout.',
              ],
              risks: [
                'If exposed, a back-channel opened after Coalition personnel were killed may be read as weakness, costing credibility and domestic support.',
                'It assumes a rational, in-control interlocutor, whereas the proxies, rather than the state, may be the principal source of friction.',
              ],
              whyChosen:
                'A commander whose dominant concern is an inadvertent slide to the nuclear threshold will use the opening ' +
                'hours to keep a human channel open, so that a misperception does not become a war.',
              doctrine:
                'Reassurance as the complement to deterrence, and the stability–instability problem: signalling limited aims ' +
                'reduces the likelihood that a cornered latent-nuclear adversary moves toward a weapon, though reassurance offered too early can be read as irresolution.',
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
              'The coalition is convened and Columbia brought to the table to assemble a graduated ' +
              'plan: joint condemnation, targeted financial pressure on the proxy networks, and a ' +
              'shared rule set for the strait. The approach is slower and less visible than a strike, ' +
              'but every partner is now committed rather than observing from the sidelines.',
            critique: {
              strengths: [
                'Converts a bilateral confrontation into collective pressure, denying Khouran its cheapest objective: splitting the coalition.',
                'Graduated pressure preserves rungs above and below, retaining escalation control.',
              ],
              risks: [
                'Coalition consensus is slow to form; while partners are aligned, Khouran consolidates its narrative and the proxies regroup.',
                'A measured collective response to a lethal attack may be read domestically as a failure to defend one\'s own personnel.',
              ],
              whyChosen:
                'A commander who treats coalition cohesion as the centre of gravity will use the opening hours to bind partners in, ' +
                'judging that a united front coerces Khouran more durably than a unilateral strike.',
              doctrine:
                'Coalition management and graduated escalation: collective legitimacy and burden-sharing multiply deterrent weight, ' +
                'but the adversary\'s standing aim is decoupling, and consensus assembled slowly can be overtaken by events.',
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
      title: 'The narrows under arms',
      narrative:
        'The forward posture has produced a stand-off measured in sea miles. Khouran has surged ' +
        'fast attack craft and shore-based anti-ship missiles to the far bank, and its proxies ' +
        'contest the chokepoint with small boats that probe the escorts and withdraw. An escorted ' +
        'convoy is inbound tonight. Columbia, noting the rising forces risk, signals that it will ' +
        'support the Coalition but will not be drawn into a war over a strait, and asks directly ' +
        'what the Coalition\'s ceiling is.',
      decision: {
        prompt: 'The strait is contested and a convoy is due. How do you posture the force?',
        options: [
          {
            id: 'show-of-force',
            label:
              'Surge a carrier group and declare rules of engagement that any craft closing the convoy will be engaged.',
            consequence:
              'Overwhelming presence is brought forward and robust rules of engagement published. The ' +
              'convoy transits untouched and the proxies withdraw from the escorts. The cost is a ' +
              'strait now holding two heavily armed forces a misjudged closing-speed apart, with the ' +
              'Khouran leadership warning of "consequences without limit".',
            critique: {
              strengths: [
                'Maximal deterrent signal: the convoy transits and the proxies absorb the cost of pressing the escorts.',
                'Clear, declared rules of engagement reduce the ambiguity that can prove lethal in a confused close engagement.',
              ],
              risks: [
                'Massed force in confined water compresses reaction time; a single misidentified small boat could trigger the war the posture is meant to avert.',
                '"Consequences without limit" from a latent-nuclear state is a threat that cannot prudently be tested.',
              ],
              whyChosen:
                'A commander who assesses the proxies as testing resolve will respond with presence sufficient to end the test: ' +
                'deterrence by visible, credible strength.',
              doctrine:
                'Deterrence by denial and the security dilemma in confined waters: concentrated force can deter, but two armed forces ' +
                'confined to a chokepoint compress decision time until accident, rather than intent, drives escalation.',
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
              'The convoy proceeds under a deliberately restrained posture: defend, do not provoke, ' +
              'fire only to protect. The transit is tense but uneventful. Some domestic and gulf-host ' +
              'audiences object that the proxies are being allowed to harass the force unanswered, but ' +
              'the ladder has not been climbed and the channel remains open.',
            critique: {
              strengths: [
                'Keeps the strait open and Coalition forces protected while denying Khouran a pretext to cast the Coalition as the aggressor.',
                'Disciplined defensive rules of engagement retain human judgement over the single decision that could start a war.',
              ],
              risks: [
                'Restraint under harassment may be read as weakness and invite the proxies to probe more aggressively.',
                'A purely defensive posture cedes the initiative: the force reacts to the chokepoint rather than shaping it.',
              ],
              whyChosen:
                'A commander who weighs inadvertent escalation above reputational cost will hold a disciplined line, ' +
                'trading the appearance of resolve for control of the ladder.',
              doctrine:
                'Escalation control and restrictive rules of engagement: bounding one\'s own use of force keeps off-ramps open and ' +
                'denies the adversary the incident it seeks, at the cost of appearing passive while harassment continues.',
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
              'Assessing the missile batteries an unacceptable threat to the escort, the Coalition ' +
              'strikes them before the convoy enters their envelope. The route is made safer. The ' +
              'strike has, however, placed ordnance on sovereign Khouran territory rather than a ' +
              'proxy\'s, and Khouran frames it as the Coalition firing the first direct shot of a war.',
            critique: {
              strengths: [
                'Removes the most lethal threat to the convoy before it can be employed, protecting a large number of mariners.',
                'Demonstrates that the Coalition will not allow its shipping to be held hostage in a chokepoint.',
              ],
              risks: [
                'Striking sovereign Khouran territory shifts from punishing proxies to attacking the state, the rung that activates regime-survival fears and nuclear consideration.',
                'A pre-emptive strike on contested attribution concedes the "first shot" narrative to Khouran among allies and neutrals.',
              ],
              whyChosen:
                'A commander unwilling to expose crews to a known missile threat may judge pre-emption the lesser risk: ' +
                'preferable to act than to be struck.',
              doctrine:
                'Pre-emption and the first-shot problem under nuclear latency: removing a threat early can be militarily sound yet ' +
                'strategically counterproductive, since the strike that protects the convoy may also push a cornered state toward breakout.',
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
      title: 'Pressure and its price',
      narrative:
        'The opening move has produced a quieter board, a wider table, and a slower clock. The ' +
        'graduated track is taking hold: condemnation, financial measures, and a shared posture are ' +
        'forming. The strait, however, has not calmed. Insurers have suspended cover on the riskiest ' +
        'routes, freight is rerouting, and a gulf-host partner on whose ports the Coalition depends ' +
        'has privately indicated that it cannot host a confrontation that turns its harbours into ' +
        'targets. Khouran, recognising the seam, has offered that partner a discounted energy deal.',
      decision: {
        prompt: 'Pressure is building but the coalition is straining. What governs your next step?',
        options: [
          {
            id: 'tighten-sanctions',
            label:
              'Tighten the screws: extend financial measures to the proxy supply chain and Khouran\'s energy revenue.',
            consequence:
              'Pressure is broadened to target Khouran\'s revenue and the networks arming the proxies. ' +
              'The measures bite: Khouran\'s economy feels the effect and its hardliners protest. They ' +
              'also raise energy prices that the partners the Coalition needs are already struggling ' +
              'to absorb, and Khouran casts itself as the besieged victim of economic warfare.',
            critique: {
              strengths: [
                'Imposes real, cumulative cost without recourse to force, and targets the finance that sustains the proxies.',
                'Keeps the response below the kinetic threshold, preserving rungs and Coalition legitimacy.',
              ],
              risks: [
                'Energy coercion is reciprocal: constraining Khouran\'s exports also constrains the coalition\'s economies and the markets the Coalition is trying to calm.',
                'A constrained economy can harden a regime toward survival logic, including the nuclear hedge, rather than soften it.',
              ],
              whyChosen:
                'A commander seeking to coerce without combat reaches for the financial instrument, judging that sustained ' +
                'economic pressure will bend Khouran before it fractures the coalition.',
              doctrine:
                'Economic and energy coercion: sanctions impose cost below the use-of-force line, but against a chokepoint power they ' +
                'risk a counter-coercion spiral and may push a latent-nuclear state toward the breakout the Coalition seeks to prevent.',
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
              'Rather than apply pressure or concede, the Coalition commits resources: air and ' +
              'missile defence to harden the partner\'s ports and a shared arrangement to offset its ' +
              'energy costs. The partner remains, and does so willingly. The measure costs capacity ' +
              'and capital and visibly denies Khouran the wedge it was driving.',
            critique: {
              strengths: [
                'Converts a wavering partner into a committed one by aligning interests rather than demanding loyalty.',
                'Hardening the partner\'s ports directly addresses the fear of becoming a target that was eroding its commitment.',
              ],
              risks: [
                'Defensive capacity committed to backfilling a partner is capacity unavailable for the strait itself.',
                'It sets a precedent that remaining in the coalition earns concessions, which other members may seek to extract.',
              ],
              whyChosen:
                'A commander who regards the coalition as the centre of gravity will expend resources to keep it whole, ' +
                'judging the return in cohesion and denied leverage worth the outlay.',
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
              'The dispute is moved onto diplomatic ground, marshalling neutral states and commercial ' +
              'powers behind a demand that the strait remain open to all. The process is slow and ' +
              'consensus-bound, and Khouran\'s patrons obstruct it. Legitimacy nonetheless accrues to ' +
              'the Coalition, and Khouran\'s closure threat now reads internationally as lawlessness ' +
              'rather than grievance.',
            critique: {
              strengths: [
                'Frames Khouran as the violator of a right on which the wider world depends, isolating it diplomatically.',
                'Builds legitimacy that strengthens subsequent steps and reassures neutral and commercial states.',
              ],
              risks: [
                'Multilateral process is slow, and Khouran\'s backers can stall it while events on the water move faster.',
                'Investing in legitimacy may be read domestically as deliberation while the attackers go unpunished.',
              ],
              whyChosen:
                'A commander who treats legitimacy as a force multiplier will expend it building an international consensus ' +
                'that Khouran must overcome to act.',
              doctrine:
                'Legitimacy and freedom of navigation as a global commons: making the chokepoint the wider world\'s concern, not ' +
                'solely the Coalition\'s, raises the political cost to Khouran of closing it, though legitimacy accrues slowly while crises move quickly.',
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
      title: 'A tanker lost in the channel',
      narrative:
        'However the crisis reached this point, it has now crossed a threshold on the water. Overnight ' +
        'the strait was seeded with mines, both moored and influence types, some of evidently modern ' +
        'manufacture. At first light a neutral-flagged tanker struck one and broke up in the channel. ' +
        'The crew were recovered; the wreck now half-blocks the deepest passage and the slick is ' +
        'widening. Khouran denies laying any mines and blames "reckless Coalition militarisation". The ' +
        'proxies have fallen silent, which is more concerning than their earlier claims.\n\n' +
        'Mine countermeasures vessels can begin clearance, but clearance is slow, lightly defended ' +
        'work in water that may remain contested, and attribution for the minefield remains ' +
        'proxy-grade: strong suspicion, deniable on paper. The strait is now effectively closing ' +
        'itself, the outcome Khouran threatened without ever admitting responsibility for it.',
      decision: {
        prompt: 'The strait is mined and a neutral tanker is down. How do you respond?',
        options: [
          {
            id: 'clear-and-protect',
            label:
              'Begin escorted mine clearance and treat anything that interferes with clearance as hostile.',
            consequence:
              'Mine countermeasures vessels are committed under heavy escort, with a declaration that ' +
              'interference with clearance will be met with force. The lane begins slowly to reopen. ' +
              'The clearance ships are, however, the most vulnerable hulls afloat, holding station for ' +
              'days within reach of Khouran\'s shore batteries and small boats.',
            critique: {
              strengths: [
                'Directly answers the closure: clearing the field is the act that keeps the strait open.',
                'Protecting clearance with declared force deters interference while remaining defensible as a freedom-of-navigation mission.',
              ],
              risks: [
                'Mine countermeasures vessels are slow, lightly armed and must hold station for days, presenting a concentrated target.',
                'A single attack on a clearance ship escalates rapidly, with crews already exposed in the water.',
              ],
              whyChosen:
                'A commander whose objective is an open strait undertakes the difficult and hazardous task of clearance, ' +
                'because no other measure actually reopens the channel.',
              doctrine:
                'Counter-mine operations and freedom of navigation: clearance is the concrete act that defeats closure, but it ' +
                'exposes the most vulnerable assets for the longest period, shifting the escalation calculus in the adversary\'s favour.',
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
              'The chokepoint logic is turned back on Khouran by interdicting its tankers and cargo ' +
              'until it disowns the field and the lane reopens. The lever is powerful and the ' +
              'escalation substantial: Khouran characterises the blockade as an act of war, rallies ' +
              'its public, and its hardliners openly invoke the nuclear hedge as the only deterrent ' +
              'against "strangulation".',
            critique: {
              strengths: [
                'Seizes the coercive initiative, imposing on Khouran the closure it imposed on others.',
                'A blockade is unambiguous leverage with a clear demand and a clear off-ramp: disown the mines and reopen the strait.',
              ],
              risks: [
                'Blockade is widely regarded as an act of war; the choice amounts to electing the war the Coalition set out to avoid.',
                'Strangulation is the classic trigger for a cornered, latent-nuclear state to move toward a weapon as its final guarantor of survival.',
              ],
              whyChosen:
                'A commander who judges that only symmetric coercion will move Khouran answers a closure with a closure, ' +
                'wagering that the regime values its revenue and survival above the proxy fight.',
              doctrine:
                'Counter-coercion and the strangulation–breakout dynamic: turning the chokepoint against its owner is potent leverage, ' +
                'but cornering a nuclear-latent regime undermines the escalation control on which the strategy depends, making breakout rational.',
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
              'Transits are suspended rather than committed to a mined channel; the pause is framed as ' +
              'protecting mariners, and Columbia and a neutral broker are tasked with arranging a ' +
              'mutual stand-down under which Khouran tolerates clearance and the Coalition reduces its ' +
              'offensive posture. Markets react to the closure, but no further hulls are lost and a ' +
              'diplomatic track is now active where none existed.',
            critique: {
              strengths: [
                'Halts the commitment of ships to a hazardous channel: no further losses while attribution and clearance proceed.',
                'Frames the pause as protection rather than retreat and creates a face-saving mutual exit before either side is fully committed.',
              ],
              risks: [
                'Suspending transits concedes Khouran the closed strait it sought, and the market and political costs are immediate.',
                'A pause may be read as capitulation, conceding the coercer\'s aim and encouraging the next probe.',
              ],
              whyChosen:
                'A commander who places escalation control and crew safety above the appearance of an open strait will pause, ' +
                'clear, and negotiate, accepting a short closure to avoid a protracted war.',
              doctrine:
                'Escalation control and off-ramps under nuclear latency: a deliberate, framed pause buys time, protects forces and ' +
                'opens a brokered exit, but conceding the chokepoint even briefly rewards coercion and is costly to reverse.',
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
      title: 'The nuclear threshold',
      narrative:
        'Two developments now coincide. The intelligence cell reports, at moderate confidence, that ' +
        'Khouran has moved and dispersed sensitive nuclear-related material, a step it takes only ' +
        'when it fears for the regime\'s survival and one that suggests the latency timeline may be ' +
        'shortening. Concurrently, through the broker, Khouran\'s leadership has made a genuine, ' +
        'time-limited offer: it will permit clearance and quietly restrain the proxies in exchange ' +
        'for the Coalition withdrawing its heaviest forces from the narrows and easing the financial ' +
        'pressure. A hardline faction within Khouran is openly arguing that only a weapon, not a ' +
        'negotiated settlement, can guarantee survival, and the offer holds for hours rather than days.\n\n' +
        'This is the decisive choice. Each option must be weighed against a state that may be moving ' +
        'toward a weapon precisely because it assesses itself to be cornered. A misjudgement here ' +
        'risks not the loss of a strait but the emergence of a nuclear power.',
      decision: {
        prompt: 'Khouran may be moving toward the threshold, and a time-limited off-ramp is open. What do you recommend?',
        options: [
          {
            id: 'take-the-deal',
            label:
              'Take the off-ramp: pull heavy forces back, ease the squeeze, lock in clearance and a proxy stand-down before the window closes.',
            consequence:
              'The offer is accepted within the window. The heaviest forces withdraw from the narrows, ' +
              'financial pressure eases, clearance proceeds unimpeded, and the proxy harassment ' +
              'subsides. The outcome is not a clean victory: Khouran retains its deniability and a ' +
              'share of the narrative. The strait nonetheless reopens, and the dispersal of nuclear ' +
              'material halts and then quietly reverses.',
            critique: {
              strengths: [
                'Defuses the breakout pressure at the moment it peaks; easing the perceived corner is what draws a latent state back from a weapon.',
                'Reopens the strait by agreement rather than force, and rewards the Khouran state for restraining the proxies it declined to acknowledge.',
              ],
              risks: [
                'Withdrawing and easing pressure concedes Khouran a strategic gain it can attribute to coercion and proxy violence.',
                'Hardliners on both sides will characterise a negotiated stand-down as a capitulation that invites the next strait crisis.',
              ],
              whyChosen:
                'A commander whose dominant aim has been to avoid nuclear breakout and a regional war takes the verifiable ' +
                'off-ramp as soon as it appears, recognising that such windows close and rarely reopen.',
              doctrine:
                'Escalation control and the stability–instability problem: easing the survival threat is precisely what keeps a ' +
                'latent-nuclear adversary below the threshold; the difficulty lies in recognising the off-ramp and taking it before the hardliners foreclose it.',
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
              'The Coalition wagers that maximum pressure at the moment of Khouran\'s fear will force ' +
              'a full climb-down. The ultimatum is delivered with the carrier group visibly ready. ' +
              'For two days the crisis remains finely balanced: Khouran does not openly move for a ' +
              'weapon, but neither does it capitulate, and the hardliners\' argument that only a ' +
              'weapon deters such ultimatums grows stronger rather than weaker.',
            critique: {
              strengths: [
                'Maximum clarity of resolve at the decisive moment, declining to reward mining and coercion with concessions.',
                'A firm, verifiable demand on the nuclear dispersal addresses the gravest danger directly rather than trading it away.',
              ],
              risks: [
                'An ultimatum to a state that fears for its survival can confirm the very threat that justifies breakout, the worst inadvertent outcome.',
                'If Khouran calls the bluff, the Coalition must either execute the war it sought to avoid or sustain a severe loss of credibility.',
              ],
              whyChosen:
                'A commander who judges that easing pressure now would teach Khouran that coercion pays will instead demand ' +
                'capitulation while leverage is greatest, wagering that the regime values survival above a weapon.',
              doctrine:
                'Compellence, red lines and the commitment trap under nuclear latency: an ultimatum can force a climb-down, but issued to ' +
                'a cornered latent-nuclear state it risks confirming the survival fear that makes breakout rational, and a bluff called yields a war or a rout.',
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
              'The Coalition accepts the off-ramp\'s structure but insists on sequencing and ' +
              'verification: its pull-back phased against observable clearance and an inspectable halt ' +
              'to the dispersal, with the broker as witness. Khouran objects to the conditions and the ' +
              'deadline is nearly reached; the hardliners protest, but the leadership, seeking relief ' +
              'from the pressure, concedes a verification arrangement it can narrowly accept.',
            critique: {
              strengths: [
                'Captures the de-escalation and hardens it against cheating, refusing a paper assurance on the single issue, the nuclear dispersal, that matters most.',
                'Phasing keeps leverage in reserve so neither side secures a one-sided gain, and the survival fear is eased rather than disregarded.',
              ],
              risks: [
                'Pressing conditions inside a closing window risks losing the entire agreement to the deadline and the hardliners.',
                'Verification demands can serve as the pretext a breakout faction uses to withdraw and assign blame to the Coalition.',
              ],
              whyChosen:
                'A commander who wants the off-ramp but distrusts unverified assurances takes the exit while making it real and ' +
                'reversible only on Khouran\'s default rather than on trust.',
              doctrine:
                'Arms-control logic at crisis speed ("trust but verify"): tying de-escalation to observable, sequenced steps eases the ' +
                'survival fear that drives breakout while denying the adversary a free hand, though verification pressed too hard can collapse a closing window.',
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
      title: 'Closing the narrows',
      narrative:
        'The acute danger has passed its peak. The strait is clearing, markets are stabilising, and ' +
        'the dispersal of nuclear material has, for now, stopped. What remains is how to close the ' +
        'file: the posture set for the months ahead and the lesson the task force and the coalition ' +
        'carry forward from the narrows. This final choice will not be reversed tonight, but it will ' +
        'shape whether the episode is remembered as a war averted or a precedent for the next ' +
        'coercion.',
      decision: {
        prompt: 'How do you close out NARROW WATERS?',
        options: [
          {
            id: 'standing-fon',
            label:
              'Institutionalise an open strait: a standing multinational escort and clearance regime with agreed rules for the narrows.',
            consequence:
              'The crisis is converted into a durable arrangement: a permanent multinational presence ' +
              'with agreed rules of engagement, shared clearance capacity and burden-sharing across the ' +
              'coalition. It outlasts the present command, and the next coercion attempt begins against ' +
              'a standing posture rather than an improvised response.',
            critique: {
              strengths: [
                'Converts a single crisis outcome into lasting deterrence by denial; a standing presence makes the next closure threat substantially harder to credit.',
                'Embeds burden-sharing so that the coalition, rather than a single navy, owns the strait\'s security.',
              ],
              risks: [
                'A permanent forward presence is a permanent friction point and a standing forces risk in confined water.',
                'Khouran will interpret an institutionalised Coalition fixture as the militarisation it warned against, sustaining the grievance.',
              ],
              whyChosen:
                'A commander who regards this crisis as the first of a category rather than an isolated event invests in the ' +
                'arrangement that causes the next coercion attempt to fail before it begins.',
              doctrine:
                'Deterrence by denial and freedom of navigation institutionalised: a standing multinational presence raises the ' +
                'permanent cost of closing a commons chokepoint, at the price of a permanent flashpoint and a standing grievance.',
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
              'The file is closed by reconstituting deterrence explicitly: a public red line covering ' +
              'both attacks on shipping and any move toward a weapon, backed by visibly reinforced ' +
              'presence. The message is unambiguous, as is the higher baseline of tension and the ' +
              'commitment that must now be honoured if it is tested.',
            critique: {
              strengths: [
                'Leaves no ambiguity about Coalition resolve on both the strait and the nuclear threshold.',
                'Reassures allies and the domestic audience that the lesson of the narrows is resolve rather than concession.',
              ],
              risks: [
                'A red line on a weapons move is a commitment trap: if Khouran crosses it deniably, the Coalition must act or be exposed as bluffing.',
                'Establishing a higher baseline of confrontation sustains the survival fear that drives breakout in the first place.',
              ],
              whyChosen:
                'A commander who concludes that the crisis arose because deterrence was insufficient will close it by making ' +
                'deterrence unambiguous on both the strait and the weapon.',
              doctrine:
                'Red lines, audience costs and the commitment trap: a public threat deters only if credible and enforceable when ' +
                'tested, and when drawn around a latent-nuclear breakout it can entrench the very fear that makes breakout rational.',
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
              'Remaining capital is committed to crisis infrastructure: a tested, standing ' +
              'de-confliction line for the narrows and a discreet channel on the nuclear question, so ' +
              'that the next incident has a human interlocutor on the other end and the threshold has ' +
              'a path that is not a sprint. The measure attracts no attention but may prove the most ' +
              'valuable step taken.',
            critique: {
              strengths: [
                'Addresses the root danger: the absence of a rapid human channel between forces operating a misjudgement apart in a chokepoint.',
                'A live channel on the nuclear question gives Khouran an alternative to breakout the next time it assesses itself cornered.',
              ],
              risks: [
                'Engaging Khouran after it killed Coalition personnel can be criticised domestically as rewarding aggression.',
                'A channel assists only if the other side responds and acts in good faith; it is insurance, not a guarantee.',
              ],
              whyChosen:
                'A commander whose conclusion from the narrows is that the Coalition was one misidentified small boat from an ' +
                'unintended war invests in the channel being answered, and the threshold having an off-ramp, next time.',
              doctrine:
                'Crisis-communication infrastructure and reassurance under nuclear latency: deliberate human off-ramps between ' +
                'forces in a chokepoint, and a standing channel on the threshold, so that escalation control does not depend on chance.',
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
