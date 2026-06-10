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
    'Over six weeks, a pattern has formed on the seabed off Verlandia. First a data cable to the ' +
    'mainland was severed — written off as a fishing accident. Then a gas interconnector lost ' +
    'pressure after what the operator called "external damage" near a known crossing point. Last ' +
    'night the clearest incident yet: a bulk carrier under a flag of convenience dragged its ' +
    'anchor for eleven nautical miles directly across two cable corridors, switched off its ' +
    'transponder for the relevant hours, and is now sitting in international waters refusing to ' +
    'answer hails. A second data cable is down and a gas line is venting.\n\n' +
    'None of it, taken alone, is unambiguously an armed attack. That is the point. The damage is ' +
    'deniable, the vessel is civilian, the flag is not the Federation’s — and the cumulative ' +
    'effect lands squarely on Verlandia’s energy and economic lifelines. The Federation says ' +
    'nothing. Within the Alliance, two capitals are already privately asking whether "broken ' +
    'infrastructure" is really an Article-equivalent matter at all. Your Prime Minister wants ' +
    'options before markets open.',
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
      title: 'The anchor that would not lift',
      narrative:
        'The bulk carrier sits dark on the plot, anchor chain still streamed, eleven miles of ' +
        'scarred seabed behind it. Two cables and a gas line are down. The vessel’s registry ' +
        'traces through three shell companies before the trail goes cold somewhere that is not, on ' +
        'paper, the Federation. Your intelligence chief calls it "consistent with deliberate ' +
        'Federation-directed sabotage" but will not put a number on it that you could take to ' +
        'court.\n\n' +
        'The campaign is engineered to sit in the grey: each act deniable, civilian, and just below ' +
        'the line that would oblige your allies to treat it as an attack on them all. Some of those ' +
        'allies are quietly grateful the line has not been crossed. Your first move decides whether ' +
        'this becomes a test of collective defence or stays a Verlandian inconvenience.',
      decision: {
        prompt: 'How do you respond to the clearest incident yet, in the first hours?',
        options: [
          {
            id: 'attribute-allies',
            label:
              'Build the case with allies first: share the seabed and tracking data, attribute jointly, withhold a public name.',
            consequence:
              'You convene the Alliance in closed session and put the raw picture on the table — ' +
              'the anchor track, the dark hours, the registry trail. Two sceptical capitals are ' +
              'steadied by being shown the evidence rather than asked to take your word. Nothing ' +
              'goes public yet, and the markets get no name to trade on.',
            critique: {
              strengths: [
                'Treats attribution as something earned collectively, hardening it against the deniability that is the campaign’s whole design.',
                'Keeps wavering allies inside the tent before they can decide privately that this is not their fight.',
              ],
              risks: [
                'Silence in public cedes the opening narrative; the Federation’s "tragic accident" line runs unanswered.',
                'Closed consultation is slow while a second gas line vents and prices twitch.',
              ],
              whyChosen:
                'A leader who knows the adversary’s cheapest win is decoupling spends the first hours making the attribution the Alliance’s, not just Verlandia’s.',
              doctrine:
                'Collective attribution against grey-zone deniability: the sub-threshold attacker relies on ambiguity to split a coalition; shared evidence is the main defence against that split.',
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
              'You table a request for formal Alliance consultations, forcing the question nobody ' +
              'wanted asked: is sustained sabotage of a member’s lifelines an attack on all? ' +
              'It electrifies the room. Hardline allies back you; two others visibly fear being ' +
              'dragged toward a casus belli over "broken cables", and the Federation now watches to ' +
              'see whether the answer is a clear yes — or a revealing fudge.',
            critique: {
              strengths: [
                'Puts the credibility of collective defence on the record before the adversary erodes it incident by incident.',
                'Signals to the Federation that the sub-threshold ceiling is not a free pass.',
              ],
              risks: [
                'If consultations produce a hedge, you have proven on the record that the guarantee does not cover this — a gift to the adversary.',
                'Forcing the question can fracture the very cohesion you are trying to invoke.',
              ],
              whyChosen:
                'A leader who believes an untested guarantee is already half-broken would rather force the question now, on a strong case, than have it forced later on a weak one.',
              doctrine:
                'Article-5-below-threshold and the credibility of collective defence: a guarantee that is never tested against grey-zone aggression invites exactly that aggression — but testing it risks exposing its limits.',
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
              'You launch a lawful response framed as safety and salvage, not war: your coastguard ' +
              'moves to board and detain the carrier, and you flood the area with surveillance to ' +
              'protect the remaining cables. It looks measured and sovereign. The Federation protests ' +
              'the boarding of a "civilian vessel in international waters" — and your own public ' +
              'wonders why no one has been named.',
            critique: {
              strengths: [
                'Converts a deniable act into a concrete, lawful enforcement action that can yield hard evidence from the vessel itself.',
                'Reduces immediate physical risk to the surviving infrastructure without climbing the rhetorical ladder.',
              ],
              risks: [
                'Boarding in international waters is legally contestable and hands the Federation a grievance narrative.',
                'A purely Verlandian response normalises the idea that this is Verlandia’s problem, not the Alliance’s.',
              ],
              whyChosen:
                'A leader who wants leverage and evidence before rhetoric reaches for the lawful, physical instrument that does not commit them to an attribution they cannot yet prove.',
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
              'In public you stay calm. Out of sight, you authorise a deniable signal of your own — ' +
              'a quiet demonstration near a Federation seabed asset that says, without a word, that ' +
              'two can play this game. The Federation notices. So, you have to assume, will someone ' +
              'who leaks.',
            critique: {
              strengths: [
                'Imposes a cost in the same grey register the adversary chose, restoring a measure of deterrence-by-symmetry.',
                'Avoids a public escalation your domestic audience would then have to be managed through.',
              ],
              risks: [
                'You have entered a covert tit-for-tat with no referee, where attribution and proportionality are even murkier than on the seabed.',
                'If it leaks, you are the one who escalated first in the open — and the Alliance was never consulted.',
              ],
              whyChosen:
                'A leader who judges that only a felt cost deters the next cable-cut answers grey with grey, betting the adversary respects nothing softer.',
              doctrine:
                'Sub-threshold counter-coercion: replying inside the grey zone can re-establish deterrence the adversary understands, but it forfeits the legitimacy and alliance backing that lawful responses retain.',
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
      title: 'Is broken infrastructure an attack?',
      narrative:
        'You chose to make this the Alliance’s problem, and the Alliance is now arguing about ' +
        'it. The legal advisers split: some hold that a sustained campaign against a member’s ' +
        'critical lifelines is exactly what collective defence was meant to cover; others warn that ' +
        'reading "armed attack" to include deniable seabed sabotage either guts the threshold or ' +
        'invites a war over cables. The forensic picture, meanwhile, has firmed — the dark hours, ' +
        'the impossible anchor track, intercepts of the vessel’s routing — but still stops ' +
        'short of a confession. Two capitals want a definition that lets them say "serious, but not ' +
        'an attack". The Federation is watching which way the threshold bends.',
      decision: {
        prompt: 'The Alliance is deciding what this is. What do you push for?',
        options: [
          {
            id: 'lower-threshold',
            label:
              'Press for a doctrine that treats a pattern of infrastructure sabotage as collectively defensible.',
            consequence:
              'You argue, hard, for the Alliance to declare that a sustained sabotage campaign ' +
              'against a member’s lifelines can trigger collective defence. Hardliners rally; ' +
              'the two cautious capitals dig in, fearing an automatic tripwire to war. You win a ' +
              'strong statement — but only after diluting "shall" to "may", and one ally abstains.',
            critique: {
              strengths: [
                'Closes the gap the adversary is exploiting: a guarantee that visibly covers grey-zone sabotage deters it.',
                'Forces the credibility question to a usable answer rather than leaving it ambiguous.',
              ],
              risks: [
                'A lowered threshold can become a tripwire others can pull, and frightens allies into hedging.',
                'A statement won by dilution and abstention may read to the Federation as weakness dressed as resolve.',
              ],
              whyChosen:
                'A leader convinced the salami-slicing only stops when the threshold is made explicit will spend cohesion to move the doctrine.',
              doctrine:
                'Deterrence by denial of grey-zone gains: extending the collective-defence umbrella over critical infrastructure removes the safe space below the threshold — at the cost of a more dangerous tripwire and nervous allies.',
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
              'You table exactly what you assess and how sure you are, and pair it with a menu of ' +
              'collective measures short of armed force: coordinated patrols, listed sanctions, a ' +
              'public joint statement of attribution. Cautious allies exhale; they can back graduated ' +
              'pressure without signing up to a casus belli. The line holds, undiluted.',
            critique: {
              strengths: [
                'Keeps the whole Alliance aboard by offering a real response that does not require calling it an armed attack.',
                'Calibrated attribution is durable — nothing here has to be walked back if the picture shifts.',
              ],
              risks: [
                'A response explicitly short of collective defence may tell the Federation the ceiling still holds and the slicing can continue.',
                'Graduated measures are slow to bite while the lifelines keep being cut.',
              ],
              whyChosen:
                'A leader who values a united Alliance acting at credible confidence over a divided one making a maximal claim threads the response below the threshold on purpose.',
              doctrine:
                'Graduated response and calibrated signalling: matching the reply to grey-zone aggression with proportionate collective measures preserves cohesion and legitimacy, even if it leaves the threshold formally untested.',
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
              'You go to the cameras and name the Federation as the author of the campaign, laying ' +
              'out the case in public. Domestic support surges and the Federation’s accident ' +
              'story collapses. But the two cautious capitals, ambushed by an attribution they had ' +
              'not signed off, feel handled rather than consulted — and one of them says, on the ' +
              'record, that it cannot confirm your assessment.',
            critique: {
              strengths: [
                'Seizes the narrative and makes the deniability cost the Federation something for once.',
                'Creates an audience cost that hardens Verlandia’s resolve and signals it.',
              ],
              risks: [
                'A public attribution that an ally then visibly declines to endorse advertises the very split the adversary wanted.',
                'You have spent cohesion and locked yourself in before the Alliance was ready to follow.',
              ],
              whyChosen:
                'A leader who believes the information space is being lost in real time may judge that owning the story is worth straining the cautious allies who would have delayed forever.',
              doctrine:
                'Audience costs and the decoupling risk of unilateral attribution: going public hardens your resolve and pierces deniability, but an unendorsed accusation can manufacture the alliance fracture it meant to prevent.',
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
      title: 'Guarding a seabed you cannot see',
      narrative:
        'You chose to act on the water rather than in the chamber, and now you own the problem of ' +
        'physically protecting hundreds of miles of undersea cable and pipe that you can barely ' +
        'watch. The detained carrier is yielding evidence — falsified logs, a crew that will not ' +
        'talk, a voyage plan that makes no commercial sense. But the Federation has flooded the ' +
        'area with its own "research" and "survey" vessels, loitering near your remaining ' +
        'corridors, perfectly legal and unmistakably menacing. Your navy is thin, your seabed ' +
        'sensors thinner, and every hull you commit to one cable is a hull not watching another.',
      decision: {
        prompt: 'You are protecting lifelines against a deniable threat. How do you posture?',
        options: [
          {
            id: 'alliance-patrols',
            label:
              'Call in the Alliance to share the burden: request a standing multinational seabed-protection mission.',
            consequence:
              'Rather than guard the seabed alone, you ask the Alliance to make undersea protection a ' +
              'collective task. Several allies commit hulls and surveillance; the mission flag turns ' +
              'a Verlandian vulnerability into an Alliance presence the Federation must now factor in. ' +
              'It is slower to stand up than your own ships would have been, and one ally sends only a token.',
            critique: {
              strengths: [
                'Converts a problem too big for Verlandia into a shared one, multiplying both capability and deterrent weight.',
                'A multinational presence signals that the lifelines are an Alliance interest — answering the threshold question with deeds rather than words.',
              ],
              risks: [
                'Standing up a coalition mission is slow while the next cable is being scouted now.',
                'Token contributions expose how thin the real commitment to "infrastructure" is.',
              ],
              whyChosen:
                'A leader who knows Verlandia cannot guard the seabed alone makes protection collective, binding allies to the lifelines before the Federation tests their commitment.',
              doctrine:
                'Burden-sharing and deterrence by presence: a visible multinational protection mission both raises the cost of further sabotage and demonstrates the collective interest that grey-zone attackers count on being absent.',
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
              'You do not wait for the Alliance. Your navy surges to the corridors, you declare ' +
              'protected zones around the cables, and you put a Verlandian hull on every Federation ' +
              '"survey" ship that loiters. It is fast, sovereign and unambiguous. It also stretches ' +
              'your fleet to breaking and puts your crews in daily, close-quarters contact with theirs.',
            critique: {
              strengths: [
                'Immediate, controllable protection that owes nothing to allied consensus or speed.',
                'Shadowing the loitering vessels imposes friction and signals that the seabed is watched.',
              ],
              risks: [
                'Daily close-quarters shadowing is a standing risk of collision or incident that either side could escalate.',
                'A purely national effort lets the Alliance off the hook and tells the Federation this is Verlandia’s lonely fight.',
              ],
              whyChosen:
                'A leader who cannot wait for a coalition to form while cables are cut acts with the forces under their own command, accepting the strain for the certainty of control.',
              doctrine:
                'Sovereign self-help and the forces-risk of presence: unilateral hardening protects fastest but concentrates risk on your own crews and forfeits the deterrent and political weight of a collective response.',
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
              'You decide you cannot guard every mile and instead make the cuts not matter: you ' +
              'fast-track redundant data routes, pre-position cable-repair ships, and accelerate ' +
              'alternative energy supply. The Federation can still cut a line — but each cut buys it ' +
              'less. There is no spectacle, no shadowing, and your hawks complain you are conceding ' +
              'the sea.',
            critique: {
              strengths: [
                'Attacks the coercive logic at its root: if cutting a cable changes nothing, the campaign loses its point.',
                'Avoids the close-quarters confrontation that risks an incident neither side controls.',
              ],
              risks: [
                'Resilience takes time and money to build while the cuts are happening now.',
                'Declining to contest the sea visibly can read as conceding it, emboldening the next probe.',
              ],
              whyChosen:
                'A leader who reads the campaign as coercion rather than conquest defeats it by denial — making the lifelines so redundant that severing them stops being worth the effort.',
              doctrine:
                'Resilience and denial of objectives: defeating an energy-coercion campaign by absorbing its blows and denying its strategic aim, rather than by contesting every metre of seabed.',
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
      title: 'The lights, and the price',
      narrative:
        'However you got here, the Federation answers with its boldest cut yet. Overnight the main ' +
        'electricity interconnector between Verlandia and the mainland is severed — not a data ' +
        'cable, not a spur, but the artery. By morning wholesale energy prices have spiked, ' +
        'industry is rationing, and the cut is on every screen. It is still, technically, deniable: ' +
        'another dark vessel, another anchor, another flag that is not the Federation’s. But no ' +
        'one believes the accident story now, least of all your public, who are paying for it at ' +
        'the meter and demanding to know what their government will do.\n\n' +
        'Whatever you built in the past days — alliance backing, ships on the water, redundant ' +
        'routes, or a covert score to settle — is the hand you now play. The Prime Minister needs ' +
        'a response posture by the time markets open.',
      decision: {
        prompt: 'The artery is cut, prices are spiking and the public wants an answer. What posture do you set?',
        options: [
          {
            id: 'collective-pressure',
            label:
              'Make it the Alliance’s crisis: collective attribution, joint sanctions, and a coordinated deterrent signal.',
            consequence:
              'You convert the cut into a collective act: a joint attribution statement, a ' +
              'coordinated sanctions package targeting the shadow fleet and its enablers, and an ' +
              'agreed reinforcement of the seabed mission. It is the strongest message the Alliance ' +
              'can send short of force — and it is slower and more diluted than a national strike ' +
              'would have been, as the price of being collective.',
            critique: {
              strengths: [
                'Answers a campaign meant to isolate Verlandia by making the response visibly collective — denying the adversary the decoupling it sought.',
                'Sanctions on the shadow fleet attack the deniable instrument itself, raising the cost of the next cut.',
              ],
              risks: [
                'Coordinated measures are slow and diluted to the most cautious ally’s comfort while the public wants action today.',
                'Pressure short of force may still read to the Federation as confirmation that the threshold holds.',
              ],
              whyChosen:
                'A leader who believes the centre of gravity is alliance cohesion answers the boldest cut with the most collective response available, trading speed for unity.',
              doctrine:
                'Collective deterrence and economic statecraft against grey-zone coercion: a coordinated attribution-plus-sanctions response targets the deniable enablers and denies the adversary the isolation its campaign was designed to achieve.',
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
              'You go to the nation and draw a public red line: another deliberate cut will be ' +
              'treated as an armed attack and answered at a time and place of Verlandia’s ' +
              'choosing. The public rallies behind the resolve. The Federation now knows exactly ' +
              'where the line is — and so do your allies, two of whom never agreed to be bound to ' +
              'whatever you do if it is crossed.',
            critique: {
              strengths: [
                'Maximum clarity of deterrent intent, owing nothing to slow coalition consensus.',
                'Reassures a public paying at the meter that their government will not be sliced indefinitely.',
              ],
              risks: [
                'A red line you may not be able to enforce alone is a credibility trap if the Federation calls it.',
                'Drawing it unilaterally without the Alliance can fracture the cohesion that would make it credible.',
              ],
              whyChosen:
                'A leader who concludes that ambiguity is what invited the campaign ends it with an unmistakable threat, accepting the commitment it creates.',
              doctrine:
                'Unilateral red lines and commitment problems: a clear threat deters only if it is credible and enforceable when tested; drawn without allies, it spends the very cohesion that would back it up.',
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
              'You make the story recovery, not retaliation: emergency supply switched in, repair ' +
              'ships sailing to the break, a firm but measured attribution and a promise that the ' +
              'lights stay on. The cut fails to become the crisis the Federation wanted. Some at ' +
              'home, and some hawks abroad, call it letting the Federation cut the artery and get ' +
              'away with it.',
            critique: {
              strengths: [
                'Denies the adversary the coercive payoff and the spectacle, defeating the campaign’s actual aim.',
                'Keeps escalation low and buys time for attribution and a collective response to mature.',
              ],
              risks: [
                'Answering the boldest cut with resilience alone can read as weakness and invite a bolder one.',
                'A patient line is hard to hold against a public paying spiked prices and wanting someone punished.',
              ],
              whyChosen:
                'A leader who reads the interconnector cut as bait for an over-reaction refuses to give the Federation the escalation it was fishing for, and beats it by absorbing the blow.',
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
      title: 'What the seabed teaches',
      narrative:
        'The acute phase is passing. The interconnector will be repaired; the carrier’s crew ' +
        'will be charged or sent home; the price spike will ease. What remains is the lesson you ' +
        'carry out of these weeks and the posture you set for the campaign that is surely coming ' +
        'next — because the Federation has learned as much from this as you have. This last choice ' +
        'will outlast the headlines.',
      decision: {
        prompt: 'How do you close out NORTHERN TITHE and set the posture for next time?',
        options: [
          {
            id: 'institutionalise-defence',
            label:
              'Institutionalise collective seabed defence: a standing Alliance mission and an agreed threshold for infrastructure attacks.',
            consequence:
              'You convert a bad winter into durable doctrine, driving the Alliance toward a ' +
              'permanent undersea-protection mission and an agreed understanding that a pattern of ' +
              'infrastructure sabotage engages collective defence. It will outlast your tenure, and ' +
              'the next campaign starts against a settled threshold rather than an open question.',
            critique: {
              strengths: [
                'Turns one survived crisis into standing deterrence-by-denial against a recurring category of threat.',
                'Closes the credibility gap the adversary exploited by putting the threshold and the protection on a permanent footing.',
              ],
              risks: [
                'An agreed threshold can also be a tripwire that constrains you in a future case where ambiguity served you better.',
                'Alliance consensus on doctrine is slow and may dilute to the most cautious member’s comfort.',
              ],
              whyChosen:
                'A leader who sees this as the first of many such campaigns invests in the collective rules and presence that make the next one costlier for the attacker.',
              doctrine:
                'Crisis as catalyst for collective deterrence: institutionalising a seabed-protection mission and an explicit threshold converts the credibility of collective defence from a question into a standing fact.',
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
              'Concluding that the Alliance will always flinch at "infrastructure", you invest in ' +
              'Verlandia’s own seabed surveillance, patrol fleet and declared deterrent. You ' +
              'will never again wait on a cautious capital to protect your own lifelines. You will ' +
              'also carry the cost, and the risk, of standing alone against a far larger power.',
            critique: {
              strengths: [
                'Guarantees Verlandia can act without waiting on an alliance that hesitated when it mattered.',
                'A visible sovereign capability is a real, controllable deterrent against the next probe.',
              ],
              risks: [
                'Standing alone against a great power concentrates forces-risk and forfeits the weight only collective defence provides.',
                'Self-reliance can read across the Alliance as a member quietly giving up on the guarantee — the adversary’s decoupling goal achieved for free.',
              ],
              whyChosen:
                'A leader burned by allied hesitation decides that sovereignty over their own lifelines is worth the cost of carrying it alone.',
              doctrine:
                'Self-help versus collective defence: building sovereign capability hedges against alliance unreliability, but a member visibly going it alone can erode the very cohesion that deters the great power in the first place.',
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
              'You spend your remaining capital on the unglamorous fix: redundant cables and ' +
              'pipelines, stockpiles and alternative supply, pre-positioned repair fleets, shared ' +
              'across the Alliance. No enemy named tonight, no red line drawn — just a Verlandia, ' +
              'and an Alliance, that the next cut will hurt far less. Possibly the most valuable ' +
              'thing you do.',
            critique: {
              strengths: [
                'Attacks the coercive logic at its root: a campaign that no longer coerces is a campaign abandoned.',
                'Lowers escalation pressure by removing the need to answer every cut with a confrontation.',
              ],
              risks: [
                'Quiet structural resilience earns no political credit and can be cut by successors who prefer spectacle.',
                'Declining to deter or punish can read as accepting the cuts as a permanent tax on Verlandian sovereignty.',
              ],
              whyChosen:
                'A leader whose lesson is "we cannot guard every mile" makes the next attack fail rather than punishing the last one.',
              doctrine:
                'Resilience-by-design as deterrence by denial: a hardened, redundant system that absorbs sabotage strips energy coercion of its leverage, defeating the campaign without having to win an escalation it never wanted.',
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
              'You invest in something unglamorous and contested at home: a discreet channel to the ' +
              'Federation to negotiate tacit rules of the road for undersea infrastructure — what is ' +
              'off-limits, how incidents are deconflicted. No admission of guilt, no headlines. ' +
              'Hawks call it rewarding the arsonist; you call it the only thing that lowers the floor.',
            critique: {
              strengths: [
                'Directly addresses the root danger: the absence of any agreed limit on attacks against the seabed both sides depend on.',
                'A tacit understanding can hold down the campaign without either side having to concede the larger dispute.',
              ],
              risks: [
                'Negotiating with the author of the campaign can be attacked at home as rewarding coercion.',
                'A tacit deal only holds if the Federation values it; pocketed in bad faith, it buys you nothing but the appearance of weakness.',
              ],
              whyChosen:
                'A leader whose lesson is that endless tit-for-tat on the seabed serves no one invests in the rules that might keep the next winter quieter.',
              doctrine:
                'Tacit bargaining and mutual restraint: negotiating rules of the road for contested infrastructure can decouple a coercion spiral, but only where the adversary genuinely prefers limits to continued advantage.',
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
