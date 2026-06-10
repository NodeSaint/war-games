import type { Scenario } from '@/engine/types'

/**
 * NORTHERN TITHE — hybrid / sub-threshold sabotage of undersea infrastructure.
 *
 * You are National Security Adviser to Verlandia, a coastal Alliance state whose
 * energy and data run through undersea cables and pipelines that the Federation
 * has been quietly cutting — each "accident" pitched just below the threshold
 * that would trigger collective defence. Fictional throughout: the Alliance, the
 * Federation, Verlandia and every actor are invented. Critique is grounded in
 * genuine War Studies concepts (grey-zone / sub-threshold aggression, the
 * attribution problem, Article-5-below-threshold and collective-defence
 * credibility, deterrence and signalling, energy coercion, escalation control,
 * audience costs) — concepts only, no invented sources, figures or quotes.
 *
 * Structure (reconvergent DAG):
 *   P1 incident → branches into P2-ATTRIB (attribution / alliance track) and
 *   P2-HARDEN (harden / deter track) → both reconverge at P3-CUT (a major
 *   interconnector is severed, prices spike, the public demands an answer) →
 *   P4-CLOSE, the strategic close, whose options all route to the ending
 *   resolver (next: null).
 */
export const northernTithe: Scenario = {
  id: 'northern-tithe',
  codename: 'NORTHERN TITHE',
  domain: 'Hybrid / Undersea Infrastructure',
  basis: 'Sub-threshold sabotage of North Sea / Baltic undersea cables and gas pipelines, and the credibility of collective defence below the threshold of armed attack.',
  difficulty: 'Intermediate',
  estPhases: 4,
  role: 'National Security Adviser to Verlandia, a coastal Alliance member state dependent on undersea energy and data links',
  brief:
    'Over six weeks a pattern of seabed incidents has accumulated off Verlandia. A data cable to ' +
    'the mainland was severed and initially attributed to a fishing accident. A gas interconnector ' +
    'subsequently lost pressure following what the operator recorded as external damage near a ' +
    'known crossing point. The most significant incident occurred overnight: a bulk carrier under ' +
    'a flag of convenience dragged its anchor across two cable corridors for some eleven nautical ' +
    'miles, disabled its transponder for the relevant period, and is now in international waters ' +
    'and not responding to hails. A second data cable is down and a gas line is venting.\n\n' +
    'No single incident, taken alone, constitutes an unambiguous armed attack — which is assessed ' +
    'to be deliberate. The damage is deniable, the vessel is civilian, and the flag is not the ' +
    'Federation’s, yet the cumulative effect falls on Verlandia’s energy and economic lifelines. ' +
    'The Federation has made no statement. Within the Alliance, two capitals are privately ' +
    'questioning whether damage to infrastructure constitutes a collective-defence matter at all. ' +
    'The Prime Minister has requested options before markets open.',
  objectives: [
    'Build attribution that holds against a deliberately deniable, sub-threshold campaign.',
    'Test whether collective defence is credible below the threshold of armed attack — without forcing a "no".',
    'Protect undersea energy and data lifelines while controlling escalation.',
    'Hold the Alliance together when some allies would rather not see a casus belli.',
  ],
  metricsInit: {
    escalation: 30,
    cohesion: 52,
    domestic: 50,
    credibility: 48,
    forcesRisk: 34,
    attribution: 24,
  },
  startNodeId: 'p1-incident',
  nodes: [
    // ── PHASE 1 — THE INCIDENT (branch point) ───────────────────────────────
    {
      id: 'p1-incident',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE PATTERN',
      title: 'The anchor track',
      narrative:
        'The bulk carrier is holding position with its anchor chain still streamed, an eleven-mile ' +
        'track of seabed damage behind it. Two cables and a gas line are down. The vessel’s ' +
        'registry traces through three shell companies before the trail terminates in a ' +
        'jurisdiction that is not, formally, the Federation. The intelligence assessment is that ' +
        'the incident is consistent with deliberate Federation-directed sabotage, but at a ' +
        'confidence short of what would meet an evidential standard.\n\n' +
        'The campaign appears engineered to remain in the grey zone: each act deniable and ' +
        'civilian, and calibrated to fall below the threshold that would oblige allies to treat it ' +
        'as an attack on all. Some allies are content that the threshold has not been crossed. The ' +
        'first response will shape whether the episode becomes a test of collective defence or ' +
        'remains a Verlandian problem.',
      decision: {
        prompt: 'How do you respond to the clearest incident yet, in the first hours?',
        options: [
          {
            id: 'attribute-allies',
            label:
              'Build the case with allies first: share the seabed and tracking data, attribute jointly, withhold a public name.',
            consequence:
              'The Alliance is convened in closed session and presented with the underlying ' +
              'evidence: the anchor track, the transponder gap, and the registry trail. Two ' +
              'sceptical capitals are reassured by direct sight of the evidence rather than by ' +
              'assertion. Nothing is made public, and no attribution is released to the market.',
            critique: {
              strengths: [
                'Treats attribution as a collective product, which strengthens it against the deniability the campaign is designed to exploit.',
                'Retains wavering allies before they conclude independently that the matter does not concern them.',
              ],
              risks: [
                'Public silence cedes the opening narrative and leaves the Federation’s accident account unanswered.',
                'Closed consultation is slow while a second gas line vents and prices respond.',
              ],
              whyChosen:
                'A decision-maker who assesses that the adversary’s least costly objective is alliance decoupling will use the initial period to establish attribution as an Alliance product rather than a Verlandian one.',
              doctrine:
                'Collective attribution against grey-zone deniability: a sub-threshold actor relies on ambiguity to divide a coalition, and shared evidence is the principal counter to that division.',
            },
            effects: { attribution: 10, cohesion: 8, escalation: -2, domestic: -4 },
            styleTags: ['multilateral', 'evidence-seeking', 'consultative', 'alliance-first'],
            next: 'p2-attrib',
          },
          {
            id: 'invoke-consult',
            label:
              'Invoke the alliance: request formal consultations on whether the campaign meets the collective-defence threshold.',
            consequence:
              'A request for formal Alliance consultations is tabled, putting the central ' +
              'question on the record: does sustained sabotage of a member’s lifelines constitute ' +
              'an attack on all? Hardline allies are supportive; two others are evidently concerned ' +
              'about being committed toward a casus belli over damaged cables. The Federation will ' +
              'now observe whether the response is an unambiguous affirmation or a qualified one.',
            critique: {
              strengths: [
                'Places the credibility of collective defence on the record before the adversary erodes it incrementally.',
                'Signals to the Federation that the sub-threshold ceiling does not confer immunity.',
              ],
              risks: [
                'Consultations that produce a hedge establish on the record that the guarantee does not cover this case, which benefits the adversary.',
                'Forcing the question may itself fracture the cohesion the response is intended to mobilise.',
              ],
              whyChosen:
                'A decision-maker who assesses that an untested guarantee is already weakened may prefer to force the question now, on strong evidence, rather than have it forced later on weaker grounds.',
              doctrine:
                'Collective defence below the threshold of armed attack: a guarantee never tested against grey-zone aggression may invite such aggression, but testing it risks demonstrating its limits.',
            },
            effects: { credibility: 8, cohesion: -6, escalation: 6, attribution: 2, domestic: 4 },
            styleTags: ['multilateral', 'consultative', 'decisive', 'signalling'],
            next: 'p2-attrib',
          },
          {
            id: 'investigate-harden',
            label:
              'Investigate and harden: board and detain the vessel under maritime law, surge seabed surveillance, say little.',
            consequence:
              'A lawful response is initiated and framed as safety and salvage rather than ' +
              'conflict: the coastguard moves to board and detain the carrier, and surveillance is ' +
              'concentrated on the area to protect the remaining cables. The Federation protests ' +
              'the boarding of a civilian vessel in international waters, and domestic opinion ' +
              'questions the absence of any public attribution.',
            critique: {
              strengths: [
                'Converts a deniable act into a concrete, lawful enforcement action capable of yielding direct evidence from the vessel.',
                'Reduces immediate physical risk to the surviving infrastructure without raising the rhetorical level.',
              ],
              risks: [
                'Boarding in international waters is legally contestable and provides the Federation with a grievance narrative.',
                'A purely national response reinforces the perception that the matter is Verlandia’s alone rather than the Alliance’s.',
              ],
              whyChosen:
                'A decision-maker seeking leverage and evidence before rhetoric may favour the lawful, physical instrument, which does not commit them to an attribution they cannot yet substantiate.',
              doctrine:
                'Counter-grey-zone enforcement and resilience: meeting deniable sabotage with lawful protection and evidence-gathering keeps the response proportionate and below the escalation threshold the adversary is exploiting.',
            },
            effects: { attribution: 8, forcesRisk: -6, escalation: 4, credibility: 4, cohesion: -2 },
            styleTags: ['sovereign-action', 'evidence-seeking', 'keep-control', 'restraint'],
            next: 'p2-harden',
          },
          {
            id: 'covert-counter',
            label:
              'Respond in kind, quietly: authorise a covert action signalling Federation infrastructure is also at risk.',
            consequence:
              'The public posture remains measured. A deniable signal is authorised covertly: a ' +
              'demonstration near a Federation seabed asset, conveying that Verlandia retains a ' +
              'reciprocal capability. The Federation is likely to register it. The possibility of a ' +
              'leak must also be assumed.',
            critique: {
              strengths: [
                'Imposes a cost in the same register the adversary has chosen, re-establishing a measure of deterrence by symmetry.',
                'Avoids an overt escalation that would then require domestic management.',
              ],
              risks: [
                'Initiates a covert tit-for-tat without arbitration, in which attribution and proportionality are even less determinable than on the seabed.',
                'If disclosed, Verlandia appears to have escalated first in the open, and without alliance consultation.',
              ],
              whyChosen:
                'A decision-maker who assesses that only an imposed cost will deter the next cut may reply within the grey zone, on the judgement that the adversary respects nothing less.',
              doctrine:
                'Sub-threshold counter-coercion: a reply within the grey zone may re-establish deterrence the adversary recognises, but it forfeits the legitimacy and alliance backing that lawful responses retain.',
            },
            effects: { escalation: 12, forcesRisk: 8, credibility: 6, cohesion: -8, attribution: -4 },
            styleTags: ['unilateral', 'coercive', 'sovereign-action', 'brinkmanship'],
            next: 'p2-harden',
          },
        ],
      },
    },

    // ── PHASE 2A — ATTRIBUTION / ALLIANCE TRACK ─────────────────────────────
    {
      id: 'p2-attrib',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE THRESHOLD QUESTION',
      title: 'Does infrastructure damage constitute an attack?',
      narrative:
        'The matter has been referred to the Alliance, where it is now under debate. Legal ' +
        'advisers are divided: some hold that a sustained campaign against a member’s critical ' +
        'lifelines falls within the intended scope of collective defence; others warn that reading ' +
        'armed attack to include deniable seabed sabotage either erodes the threshold or risks ' +
        'conflict over infrastructure. The forensic picture has firmed — the transponder gap, the ' +
        'anchor track, and intercepts of the vessel’s routing — but remains short of conclusive. ' +
        'Two capitals seek a formulation permitting the characterisation "serious, but not an ' +
        'attack". The Federation is observing where the threshold settles.',
      decision: {
        prompt: 'The Alliance is deciding what this is. What do you push for?',
        options: [
          {
            id: 'lower-threshold',
            label:
              'Press for a doctrine that treats a pattern of infrastructure sabotage as collectively defensible.',
            consequence:
              'Verlandia presses for an Alliance declaration that a sustained sabotage campaign ' +
              'against a member’s lifelines can engage collective defence. Hardline allies support ' +
              'it; the two cautious capitals resist, citing the risk of an automatic tripwire. A ' +
              'strong statement is secured, but only after the obligation is softened from "shall" ' +
              'to "may", and one ally abstains.',
            critique: {
              strengths: [
                'Closes the gap the adversary is exploiting: a guarantee that visibly covers grey-zone sabotage works to deter it.',
                'Resolves the credibility question into a usable answer rather than leaving it ambiguous.',
              ],
              risks: [
                'A lowered threshold can function as a tripwire that others may trigger, prompting allies to hedge.',
                'A statement secured through dilution and abstention may read to the Federation as weakness presented as resolve.',
              ],
              whyChosen:
                'A decision-maker who assesses that salami-slicing ceases only once the threshold is made explicit may expend cohesion to revise the doctrine.',
              doctrine:
                'Deterrence by denial of grey-zone gains: extending the collective-defence guarantee over critical infrastructure removes the space below the threshold, at the cost of a more sensitive tripwire and more cautious allies.',
            },
            effects: { credibility: 10, cohesion: -8, escalation: 6, attribution: 2, domestic: 4 },
            styleTags: ['multilateral', 'decisive', 'signalling', 'forceful'],
            next: 'p3-cut',
          },
          {
            id: 'calibrated-attribution',
            label:
              'State the attribution at its true confidence and propose a collective, graduated response short of war.',
            consequence:
              'Verlandia states its assessment at its true level of confidence and pairs it with a ' +
              'set of collective measures short of armed force: coordinated patrols, listed ' +
              'sanctions, and a joint statement of attribution. Cautious allies can support ' +
              'graduated pressure without endorsing a casus belli, and the common position holds ' +
              'without dilution.',
            critique: {
              strengths: [
                'Retains the full Alliance by offering a substantive response that does not require characterising the incident as an armed attack.',
                'Calibrated attribution is durable, requiring no retraction should the evidential picture shift.',
              ],
              risks: [
                'A response explicitly short of collective defence may signal to the Federation that the ceiling holds and the campaign can continue.',
                'Graduated measures take effect slowly while the lifelines continue to be cut.',
              ],
              whyChosen:
                'A decision-maker who values a united Alliance acting at credible confidence over a divided one advancing a maximal claim will deliberately set the response below the threshold.',
              doctrine:
                'Graduated response and calibrated signalling: matching the reply to grey-zone aggression with proportionate collective measures preserves cohesion and legitimacy, even where it leaves the threshold formally untested.',
            },
            effects: { credibility: 6, cohesion: 12, attribution: 8, escalation: -4, domestic: -4 },
            styleTags: ['multilateral', 'evidence-seeking', 'consultative', 'de-escalatory'],
            next: 'p3-cut',
          },
          {
            id: 'public-name',
            label:
              'Force the issue publicly: name the Federation now and dare the cautious allies to disown the evidence.',
            consequence:
              'Verlandia publicly names the Federation as the author of the campaign and sets out ' +
              'the case. Domestic support rises and the Federation’s accident account loses ' +
              'credibility. The two cautious capitals, presented with an attribution they had not ' +
              'endorsed, regard themselves as having been bypassed rather than consulted, and one ' +
              'states on the record that it cannot confirm the assessment.',
            critique: {
              strengths: [
                'Takes control of the narrative and imposes a cost on the Federation for the first time.',
                'Generates an audience cost that hardens Verlandia’s resolve and signals it.',
              ],
              risks: [
                'A public attribution an ally then declines to endorse advertises the very division the adversary intended.',
                'Cohesion is expended and Verlandia is committed before the Alliance is prepared to follow.',
              ],
              whyChosen:
                'A decision-maker who assesses that the information environment is being lost in real time may judge that controlling the narrative is worth straining the cautious allies who would otherwise delay indefinitely.',
              doctrine:
                'Audience costs and the decoupling risk of unilateral attribution: a public attribution hardens resolve and reduces deniability, but an unendorsed accusation can produce the alliance fracture it was intended to prevent.',
            },
            effects: { domestic: 12, credibility: 6, escalation: 6, cohesion: -10, attribution: -2 },
            styleTags: ['unilateral', 'decisive', 'signalling', 'tempo'],
            next: 'p3-cut',
          },
        ],
      },
    },

    // ── PHASE 2B — HARDEN / DETER TRACK ─────────────────────────────────────
    {
      id: 'p2-harden',
      phase: 2,
      phaseLabel: 'PHASE 2 · PROTECT THE LIFELINES',
      title: 'Protecting an undersea network',
      narrative:
        'Having chosen to act on the water rather than in the Alliance chamber, Verlandia now owns ' +
        'the problem of physically protecting several hundred miles of undersea cable and pipeline ' +
        'with limited surveillance coverage. The detained carrier is yielding evidence: falsified ' +
        'logs, a non-cooperative crew, and a voyage plan with no commercial rationale. The ' +
        'Federation has concurrently increased the presence of research and survey vessels near ' +
        'the remaining corridors — lawful in themselves, but plainly intended as pressure. Naval ' +
        'and seabed-sensor coverage is limited, and each hull committed to one cable is unavailable ' +
        'to watch another.',
      decision: {
        prompt: 'You are protecting lifelines against a deniable threat. How do you posture?',
        options: [
          {
            id: 'alliance-patrols',
            label:
              'Call in the Alliance to share the burden: request a standing multinational seabed-protection mission.',
            consequence:
              'Rather than protect the seabed alone, Verlandia requests that undersea protection ' +
              'become a collective task. Several allies commit vessels and surveillance, converting ' +
              'a national vulnerability into an Alliance presence the Federation must now account ' +
              'for. The mission is slower to establish than a national deployment would have been, ' +
              'and one ally contributes only a token force.',
            critique: {
              strengths: [
                'Converts a problem beyond Verlandia’s capacity into a shared one, increasing both capability and deterrent weight.',
                'A multinational presence signals that the lifelines are an Alliance interest, answering the threshold question through action rather than declaration.',
              ],
              risks: [
                'Standing up a coalition mission is slow while the next cable is already being surveyed.',
                'Token contributions expose the limited depth of the real commitment to infrastructure protection.',
              ],
              whyChosen:
                'A decision-maker who assesses that Verlandia cannot protect the seabed alone makes protection collective, binding allies to the lifelines before the Federation tests their commitment.',
              doctrine:
                'Burden-sharing and deterrence by presence: a visible multinational protection mission raises the cost of further sabotage and demonstrates the collective interest that grey-zone attackers rely on being absent.',
            },
            effects: { cohesion: 12, forcesRisk: -6, credibility: 4, escalation: -2, domestic: -2 },
            styleTags: ['multilateral', 'burden-sharing', 'alliance-first', 'reassurance'],
            next: 'p3-cut',
          },
          {
            id: 'national-shield',
            label:
              'Harden unilaterally and fast: surge your own navy, declare protected zones, shadow the loitering vessels.',
            consequence:
              'Verlandia acts without waiting for the Alliance. The navy surges to the corridors, ' +
              'protected zones are declared around the cables, and a Verlandian hull is assigned to ' +
              'each loitering Federation survey vessel. The response is fast, sovereign and ' +
              'unambiguous. It also stretches the fleet to its limit and places crews in daily ' +
              'close-quarters contact with their Federation counterparts.',
            critique: {
              strengths: [
                'Provides immediate, controllable protection independent of allied consensus or timelines.',
                'Shadowing the loitering vessels imposes friction and signals that the seabed is under observation.',
              ],
              risks: [
                'Daily close-quarters shadowing carries a standing risk of collision or incident that either side could escalate.',
                'A purely national effort relieves the Alliance of responsibility and signals to the Federation that this is Verlandia’s problem alone.',
              ],
              whyChosen:
                'A decision-maker who cannot wait for a coalition to form while cables are being cut acts with forces under national command, accepting the strain for the certainty of control.',
              doctrine:
                'Sovereign self-help and the forces-risk of presence: unilateral hardening protects fastest but concentrates risk on national crews and forfeits the deterrent and political weight of a collective response.',
            },
            effects: { forcesRisk: 8, credibility: 8, escalation: 6, cohesion: -6, domestic: 6 },
            styleTags: ['sovereign-action', 'unilateral', 'forceful', 'keep-control'],
            next: 'p3-cut',
          },
          {
            id: 'resilience-redundancy',
            label:
              'Out-build the threat: invest in resilience — re-routing, backup links, rapid-repair ships — over presence.',
            consequence:
              'Assessing that not every mile can be guarded, Verlandia instead works to make the ' +
              'cuts inconsequential: redundant data routes are fast-tracked, cable-repair ships ' +
              'pre-positioned, and alternative energy supply accelerated. The Federation can still ' +
              'sever a line, but each cut yields less. There is no visible confrontation, and ' +
              'hardline opinion holds that Verlandia is conceding the sea.',
            critique: {
              strengths: [
                'Addresses the coercive logic at its root: if severing a cable achieves nothing, the campaign loses its purpose.',
                'Avoids the close-quarters confrontation that risks an incident neither side controls.',
              ],
              risks: [
                'Resilience takes time and resources to build while the cuts are ongoing.',
                'Declining to contest the sea visibly can read as conceding it, encouraging the next probe.',
              ],
              whyChosen:
                'A decision-maker who reads the campaign as coercion rather than territorial conquest counters it by denial, making the lifelines redundant enough that severing them ceases to be worthwhile.',
              doctrine:
                'Resilience and denial of objectives: defeating an energy-coercion campaign by absorbing its effects and denying its strategic aim, rather than by contesting every metre of seabed.',
            },
            effects: { forcesRisk: -10, escalation: -6, attribution: 2, credibility: -2, domestic: -4 },
            styleTags: ['restraint', 'deliberate', 'de-escalatory', 'keep-control'],
            next: 'p3-cut',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE INTERCONNECTOR ─────────────────────────
    {
      id: 'p3-cut',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE INTERCONNECTOR',
      title: 'The interconnector',
      narrative:
        'Regardless of the route taken, the Federation responds with its most significant cut to ' +
        'date. Overnight the main electricity interconnector between Verlandia and the mainland is ' +
        'severed — not a data cable or a spur, but the primary link. By morning wholesale energy ' +
        'prices have spiked, industry is rationing, and the incident has full public visibility. It ' +
        'remains technically deniable: another unidentified vessel, another anchor, another flag ' +
        'that is not the Federation’s. The accident account, however, now has little credibility, ' +
        'least of all with a public bearing the cost directly and demanding a government response.\n\n' +
        'Whatever has been established to this point — alliance backing, naval presence, redundant ' +
        'routing, or a covert capability in reserve — now constitutes the available position. The ' +
        'Prime Minister requires a response posture by the time markets open.',
      decision: {
        prompt: 'The artery is cut, prices are spiking and the public wants an answer. What posture do you set?',
        options: [
          {
            id: 'collective-pressure',
            label:
              'Make it the Alliance’s crisis: collective attribution, joint sanctions, and a coordinated deterrent signal.',
            consequence:
              'Verlandia frames the cut as a collective matter: a joint attribution statement, a ' +
              'coordinated sanctions package targeting the shadow fleet and its enablers, and an ' +
              'agreed reinforcement of the seabed mission. It is the strongest response the Alliance ' +
              'can mount short of force, and it is slower and more qualified than a national action ' +
              'would have been — the cost of acting collectively.',
            critique: {
              strengths: [
                'Counters a campaign intended to isolate Verlandia by making the response visibly collective, denying the adversary the decoupling it sought.',
                'Sanctions on the shadow fleet target the deniable instrument itself, raising the cost of the next cut.',
              ],
              risks: [
                'Coordinated measures are slow and calibrated to the most cautious ally while the public expects immediate action.',
                'Pressure short of force may still read to the Federation as confirmation that the threshold holds.',
              ],
              whyChosen:
                'A decision-maker who assesses that the centre of gravity is alliance cohesion answers the most significant cut with the most collective response available, trading speed for unity.',
              doctrine:
                'Collective deterrence and economic statecraft against grey-zone coercion: a coordinated attribution-and-sanctions response targets the deniable enablers and denies the adversary the isolation its campaign was designed to achieve.',
            },
            effects: { cohesion: 12, credibility: 6, attribution: 6, escalation: -2, domestic: -4 },
            styleTags: ['multilateral', 'alliance-first', 'consultative', 'evidence-seeking'],
            next: 'p4-close',
          },
          {
            id: 'national-deterrent',
            label:
              'Draw the line yourself: declare that the next cut will be treated as an attack and met at a time of your choosing.',
            consequence:
              'Verlandia issues a public red line: a further deliberate cut will be treated as an ' +
              'armed attack and answered at a time and place of its choosing. Domestic opinion ' +
              'supports the resolve. The Federation now has a clear marker for the threshold, as do ' +
              'allies — two of whom never agreed to be bound to whatever Verlandia does should it ' +
              'be crossed.',
            critique: {
              strengths: [
                'Provides maximum clarity of deterrent intent, independent of slow coalition consensus.',
                'Reassures a public bearing higher costs that the government will not accept indefinite salami-slicing.',
              ],
              risks: [
                'A red line that may not be enforceable alone becomes a credibility trap if the Federation tests it.',
                'Drawn unilaterally, it can fracture the cohesion that would make it credible.',
              ],
              whyChosen:
                'A decision-maker who concludes that ambiguity invited the campaign may end it with an unambiguous threat, accepting the commitment that it creates.',
              doctrine:
                'Unilateral red lines and commitment problems: a clear threat deters only if it is credible and enforceable when tested; drawn without allies, it expends the cohesion that would underwrite it.',
            },
            effects: { credibility: 8, domestic: 10, escalation: 12, cohesion: -8, forcesRisk: 4 },
            styleTags: ['unilateral', 'sovereign-action', 'decisive', 'brinkmanship'],
            next: 'p4-close',
          },
          {
            id: 'resilience-deny',
            label:
              'Deny the spectacle: lead with restored supply and rapid repair, attribute firmly but answer with resilience.',
            consequence:
              'Verlandia centres the response on recovery rather than retaliation: emergency ' +
              'supply switched in, repair ships dispatched to the break, a firm but measured ' +
              'attribution, and an assurance that supply will be maintained. The cut does not ' +
              'become the crisis the Federation intended. Some domestic and allied opinion ' +
              'characterises this as permitting the Federation to act without consequence.',
            critique: {
              strengths: [
                'Denies the adversary the coercive payoff and the public effect, defeating the campaign’s actual aim.',
                'Keeps escalation low and allows time for attribution and a collective response to develop.',
              ],
              risks: [
                'Answering the most significant cut with resilience alone can read as weakness and invite a further one.',
                'A patient line is difficult to sustain against a public bearing higher prices and seeking a punitive response.',
              ],
              whyChosen:
                'A decision-maker who reads the interconnector cut as intended to provoke over-reaction declines to provide the escalation sought, countering it by absorbing the effect.',
              doctrine:
                'Denial and escalation control: defeating energy coercion by restoring the function the adversary attacked, denying both the coercive leverage and the escalation it sought to provoke.',
            },
            effects: { forcesRisk: -8, escalation: -6, attribution: 4, credibility: -2, domestic: -6, cohesion: 2 },
            styleTags: ['restraint', 'de-escalatory', 'deliberate', 'keep-control'],
            next: 'p4-close',
          },
        ],
      },
    },

    // ── PHASE 4 — THE STRATEGIC CLOSE → ENDING RESOLVER ─────────────────────
    {
      id: 'p4-close',
      phase: 4,
      phaseLabel: 'PHASE 4 · CLOSING THE FILE',
      title: 'Setting the posture',
      narrative:
        'The acute phase is passing. The interconnector will be repaired, the carrier’s crew ' +
        'charged or repatriated, and the price spike will ease. What remains is the assessment ' +
        'carried out of these weeks and the posture set for the next campaign, which is likely, ' +
        'since the Federation has drawn its own conclusions from this episode. This final decision ' +
        'will outlast the immediate crisis.',
      decision: {
        prompt: 'How do you close out NORTHERN TITHE and set the posture for next time?',
        options: [
          {
            id: 'institutionalise-defence',
            label:
              'Institutionalise collective seabed defence: a standing Alliance mission and an agreed threshold for infrastructure attacks.',
            consequence:
              'Verlandia converts the crisis into durable doctrine, driving the Alliance toward a ' +
              'permanent undersea-protection mission and an agreed understanding that a pattern of ' +
              'infrastructure sabotage engages collective defence. It will outlast the current ' +
              'administration, and the next campaign begins against a settled threshold rather than ' +
              'an open question.',
            critique: {
              strengths: [
                'Converts one survived crisis into standing deterrence by denial against a recurring category of threat.',
                'Closes the credibility gap the adversary exploited by placing the threshold and the protection on a permanent footing.',
              ],
              risks: [
                'An agreed threshold can also function as a tripwire that constrains Verlandia in a future case where ambiguity would have served better.',
                'Alliance consensus on doctrine is slow and may be diluted to the most cautious member’s position.',
              ],
              whyChosen:
                'A decision-maker who assesses this as the first of a series of such campaigns invests in the collective rules and presence that raise the cost of the next one for the attacker.',
              doctrine:
                'Crisis as catalyst for collective deterrence: institutionalising a seabed-protection mission and an explicit threshold converts the credibility of collective defence from an open question into a standing fact.',
            },
            effects: { cohesion: 8, credibility: 6, escalation: -2, attribution: 2 },
            styleTags: ['multilateral', 'alliance-first', 'deliberate', 'reassurance'],
            next: null,
          },
          {
            id: 'unilateral-protection',
            label:
              'Go it alone for good: build a sovereign undersea-defence capability and your own deterrent posture.',
            consequence:
              'Assessing that the Alliance will consistently hesitate on infrastructure, Verlandia ' +
              'invests in its own seabed surveillance, patrol fleet and declared deterrent. It will ' +
              'no longer depend on a cautious capital to protect its lifelines. It will also bear ' +
              'the cost, and the risk, of standing alone against a substantially larger power.',
            critique: {
              strengths: [
                'Ensures Verlandia can act without waiting on an alliance that hesitated at the decisive moment.',
                'A visible sovereign capability is a real and controllable deterrent against the next probe.',
              ],
              risks: [
                'Standing alone against a great power concentrates forces-risk and forfeits the weight only collective defence provides.',
                'Self-reliance can read across the Alliance as a member withdrawing from the guarantee — achieving the adversary’s decoupling objective at no cost.',
              ],
              whyChosen:
                'A decision-maker disillusioned by allied hesitation may judge that sovereignty over national lifelines is worth the cost of carrying it alone.',
              doctrine:
                'Self-help versus collective defence: building sovereign capability hedges against alliance unreliability, but a member visibly going it alone can erode the cohesion that deters the great power in the first place.',
            },
            effects: { credibility: 6, domestic: 8, forcesRisk: 6, cohesion: -8, escalation: 2 },
            styleTags: ['unilateral', 'sovereign-action', 'decisive', 'keep-control'],
            next: null,
          },
          {
            id: 'resilience-doctrine',
            label:
              'Make the cuts not matter: a national and allied resilience programme that drains the campaign of its point.',
            consequence:
              'Verlandia directs its remaining capital toward structural measures: redundant ' +
              'cables and pipelines, stockpiles and alternative supply, and pre-positioned repair ' +
              'fleets, shared across the Alliance. No adversary is named and no red line drawn; the ' +
              'effect is a Verlandia, and an Alliance, on which the next cut will have markedly less ' +
              'impact.',
            critique: {
              strengths: [
                'Addresses the coercive logic at its root: a campaign that no longer coerces is a campaign without purpose.',
                'Lowers escalation pressure by removing the need to answer each cut with a confrontation.',
              ],
              risks: [
                'Structural resilience attracts little political credit and may be reversed by successors who prefer visible action.',
                'Declining to deter or punish can read as accepting the cuts as a permanent constraint on Verlandian sovereignty.',
              ],
              whyChosen:
                'A decision-maker whose assessment is that not every mile can be guarded works to make the next attack fail rather than to punish the last one.',
              doctrine:
                'Resilience by design as deterrence by denial: a hardened, redundant system that absorbs sabotage removes the leverage of energy coercion, defeating the campaign without having to win an escalation it never sought.',
            },
            effects: { forcesRisk: -10, escalation: -4, cohesion: 4, credibility: -2, domestic: -2 },
            styleTags: ['deliberate', 'restraint', 'de-escalatory', 'burden-sharing'],
            next: null,
          },
          {
            id: 'negotiated-understanding',
            label:
              'Seek an understanding: open a quiet channel for mutual rules on undersea infrastructure.',
            consequence:
              'Verlandia opens a discreet and domestically contested channel to the Federation to ' +
              'negotiate tacit rules of the road for undersea infrastructure: what is off-limits, ' +
              'and how incidents are deconflicted. There is no admission of responsibility and no ' +
              'public announcement. Critics characterise it as rewarding the perpetrator; the ' +
              'rationale is that it is the only measure that lowers the baseline risk.',
            critique: {
              strengths: [
                'Directly addresses the underlying danger: the absence of any agreed limit on attacks against seabed infrastructure both sides depend on.',
                'A tacit understanding can constrain the campaign without either side conceding the larger dispute.',
              ],
              risks: [
                'Negotiating with the author of the campaign is open to domestic criticism as rewarding coercion.',
                'A tacit arrangement holds only if the Federation values it; accepted in bad faith, it yields nothing but the appearance of weakness.',
              ],
              whyChosen:
                'A decision-maker who assesses that continued reciprocal action on the seabed serves no one invests in rules that may reduce the intensity of the next episode.',
              doctrine:
                'Tacit bargaining and mutual restraint: negotiating rules of the road for contested infrastructure can interrupt a coercion spiral, but only where the adversary genuinely prefers limits to continued advantage.',
            },
            effects: { escalation: -8, attribution: 2, credibility: -2, domestic: -6, cohesion: 2 },
            styleTags: ['de-escalatory', 'off-ramp', 'consultative', 'multilateral'],
            next: null,
          },
        ],
      },
    },
  ],
}
