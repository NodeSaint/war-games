import type { Scenario } from '@/engine/types'

/**
 * ATLANTIC TILT — alliance cohesion and extended deterrence when the senior ally
 * is distracted. You are National Security Adviser to Verlandia, a front-line
 * Alliance member, facing a calibrated Federation probe timed to the Atlantic
 * Power's domestic crisis. Cohesion is the centre of gravity throughout.
 *
 * Fictionalised: the Alliance, the Federation, the Atlantic Power (Columbia),
 * Verlandia and every actor are invented. No real states, people or quoted
 * figures. Critique is grounded in genuine War Studies concepts only —
 * alliance decoupling, burden-sharing, extended deterrence and the credibility
 * of security guarantees, abandonment/entrapment, strategic autonomy, audience
 * costs and escalation control.
 *
 * Structure (reconvergent DAG, longest path = 5 phases):
 *   P1 probe → branches into P2-LEAN (transatlantic-dependence track) and
 *   P2-RALLY (European-autonomy track) → both reconverge at P3-AMBIGUITY (the
 *   Atlantic Power signals ambiguously while the Federation escalates) →
 *   P4-WAVER (the decisive cohesion test) → P5-CLOSE → state-driven ending.
 */
export const atlanticTilt: Scenario = {
  id: 'atlantic-tilt',
  codename: 'ATLANTIC TILT',
  domain: 'Alliance Politics / Extended Deterrence',
  basis: 'Alliance cohesion and European strategic autonomy when the principal ally is distracted, and the credibility of collective defence.',
  difficulty: 'Advanced',
  estPhases: 5,
  role: 'National Security Adviser to Verlandia, a front-line European Alliance member',
  brief:
    'For ten days the Federation has applied graduated pressure to Verlandia. It opened with a ' +
    'manufactured incident on the eastern border — a patrol described as "lost", a brief ' +
    'incursion, and a frontier guard detained and shown on Federation media — and has since ' +
    'broadened: an energy supplier citing "technical faults", an information campaign questioning ' +
    'whether any ally will come to Verlandia\'s aid, and unusual Federation exercises massing ' +
    'across the line.\n\n' +
    'None of these acts crosses the threshold of armed attack, and each appears deliberately ' +
    'calibrated to remain below it. The timing is assessed as the principal signal. The Atlantic ' +
    'Power — Columbia, the senior ally whose guarantee underwrites the Alliance — is preoccupied ' +
    'with a domestic crisis, its attention turned inward and toward another theatre. The ' +
    'Federation is testing a single proposition, observed across the continent: with the Atlantic ' +
    'Power distracted, will the Alliance respond? Your Prime Minister requires options within the ' +
    'hour.',
  objectives: [
    'Sustain deterrence while the reliability of the principal ally is in doubt.',
    'Balance reassurance from the Atlantic Power against the development of European self-reliance.',
    'Preserve Alliance cohesion; decoupling is the adversary\'s least costly objective.',
    'Answer the probe firmly enough to deter, without providing the Federation a pretext to escalate.',
  ],
  metricsInit: {
    escalation: 30,
    cohesion: 58,
    domestic: 52,
    credibility: 48,
    forcesRisk: 34,
    attribution: 60,
  },
  startNodeId: 'p1-probe',
  nodes: [
    // ── PHASE 1 — THE PROBE (branch point) ──────────────────────────────────
    {
      id: 'p1-probe',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE PROBE',
      title: 'A test below the threshold',
      narrative:
        'Attribution is not in doubt: the Federation\'s hand is plain. Its objectives and the ' +
        'available responses are less clear. Each move has been pitched just below the line that ' +
        'would trigger the Alliance\'s collective-defence clause — coercion rather than armed ' +
        'attack. The aim assessed is not Verlandian territory but Verlandian confidence: a ' +
        'demonstration, to your public and to wavering capitals, that the guarantee at the heart ' +
        'of the Alliance is hollow while the Atlantic Power is distracted.\n\n' +
        'The opening response sets the frame for what follows. Leaning on the Atlantic Power for a ' +
        'visible guarantee reaffirms the existing order, provided it answers. Rallying European ' +
        'members for an autonomous response builds self-reliance, but may signal that the ' +
        'guarantee is already gone. The alternative is to answer the probe alone, by restraint or ' +
        'by force.',
      decision: {
        prompt: 'How do you respond to the probe in the first hour?',
        options: [
          {
            id: 'lean-atlantic',
            label:
              'Lean on the Atlantic Power: press Columbia hard for a visible, public reaffirmation of the guarantee.',
            consequence:
              'Secure channels to the Atlantic capital press for an unambiguous public signal — a ' +
              'statement, a deployment, something the Federation cannot overlook. Officials are ' +
              'supportive but distracted; their domestic crisis dominates their attention, and they ' +
              'undertake to "look at options". Verlandian deterrence now rests on a backer whose ' +
              'attention is elsewhere.',
            critique: {
              strengths: [
                'A reaffirmed Atlantic guarantee is still the single most powerful deterrent on the continent.',
                'Keeps the Alliance\'s centre of gravity — the transatlantic link — where it has always been.',
              ],
              risks: [
                'If the Atlantic Power hedges or delays, Verlandian dependence and its limits are exposed publicly.',
                'A weak answer to an explicit request is worse than no request, as it confirms the doubt the Federation is promoting.',
              ],
              whyChosen:
                'The guarantee has held in part because it has not been tested; a leader may judge ' +
                'that the most prudent course is to secure a visible reaffirmation from the senior ' +
                'ally before doubt consolidates.',
              doctrine:
                'Extended deterrence and the credibility of security guarantees: the guarantee deters ' +
                'only while believed, and reaffirming it visibly is the orthodox way to shore it up — ' +
                'at the cost of exposing your dependence if the backer wavers.',
            },
            effects: { credibility: 6, cohesion: 4, domestic: 4, escalation: -2 },
            styleTags: ['alliance-first', 'multilateral', 'reassurance', 'consultative'],
            next: 'p2-lean',
          },
          {
            id: 'rally-europe',
            label:
              'Rally the Europeans: convene front-line Alliance neighbours for a visibly autonomous response.',
            consequence:
              'Rather than approach the Atlantic capital, Verlandia turns to its neighbours. ' +
              'Within hours a group of European Alliance members agrees a joint posture — shared ' +
              'air policing, a coordinated statement, and contingency planning that does not await ' +
              'the senior ally. The response is substantive and rapid, and it signals that Europe ' +
              'is preparing to act without its principal partner.',
            critique: {
              strengths: [
                'Builds genuine European self-reliance — the one hedge against an absent guarantor.',
                'Denies the Federation its prize: it cannot decouple a Europe that is already organising itself.',
              ],
              risks: [
                'Acting without the Atlantic Power can read as conceding the guarantee is already gone.',
                'European capabilities cannot yet substitute for the senior ally; the gap is real and visible.',
              ],
              whyChosen:
                'A leader who has watched the Atlantic Power turn inward may decide self-reliance ' +
                'cannot be improvised mid-crisis and must be built the moment the doubt appears.',
              doctrine:
                'Strategic autonomy and the abandonment dilemma: hedging against an unreliable patron ' +
                'by building independent capacity — but the hedge itself can signal that the alliance ' +
                'is fraying, becoming self-fulfilling.',
            },
            effects: { cohesion: 8, credibility: 4, domestic: 2, escalation: 2, forcesRisk: 2 },
            styleTags: ['multilateral', 'burden-sharing', 'alliance-first', 'sovereign-action'],
            next: 'p2-rally',
          },
          {
            id: 'de-escalate-quietly',
            label:
              'De-escalate quietly: open a discreet channel to the Federation and avoid giving them a pretext.',
            consequence:
              'Assessing the probe as an attempt to provoke an over-reaction, Verlandia declines ' +
              'to provide one. A discreet message passes to the Federation through a trusted ' +
              'intermediary: the activity is recognised, confrontation is not sought, and the ' +
              'border guard should be returned. The crisis cools marginally. Absent any visible ' +
              'firmness, the domestic press begins to question whether the government is being ' +
              'coerced.',
            critique: {
              strengths: [
                'Refuses the Federation the escalation it may be trying to bait, keeping the crisis low.',
                'Avoids committing you to a posture you might not be able to sustain if the Atlantic Power stays absent.',
              ],
              risks: [
                'Quiet restraint against a coercive probe may be read, at home and abroad, as the guarantee being called and found wanting.',
                'If the channel is disclosed, Verlandia appears to be a front-line state that yielded, eroding deterrence across the Alliance.',
              ],
              whyChosen:
                'A leader who judges that a firm response backed only by a distracted ally is itself ' +
                'a bluff may prefer to lower the stakes rather than commit to a posture that cannot ' +
                'be sustained.',
              doctrine:
                'Escalation control and audience costs: denying the adversary a pretext is sound, but ' +
                'visible passivity under coercion generates its own costs — a front-line state read as ' +
                'pushable invites more pressure.',
            },
            effects: { escalation: -8, forcesRisk: -4, credibility: -8, domestic: -6, cohesion: -2 },
            styleTags: ['de-escalatory', 'restraint', 'off-ramp', 'sovereign-action'],
            next: 'p2-rally',
          },
          {
            id: 'answer-alone',
            label:
              'Answer firmly alone: mobilise Verlandian forces to the border and make the cost of further probing explicit.',
            consequence:
              'Verlandia acts without awaiting others. Reserves are called up, units move east, ' +
              'and the government states plainly that further pressure will be met. Domestic ' +
              'opinion consolidates behind a government now seen to act. The Federation observes a ' +
              'single state mobilising without visible Alliance backing, and notes precisely how ' +
              'isolated Verlandia is.',
            critique: {
              strengths: [
                'Demonstrates national resolve immediately and steadies a public that sought firmness.',
                'A sovereign state defending its own border is not bound to a hesitant ally\'s timetable.',
              ],
              risks: [
                'Acting alone makes visible the gap the Federation is probing — that the guarantee is not evidently behind Verlandia.',
                'A national mobilisation without Alliance cover raises forces-risk and may be framed as the escalating act.',
              ],
              whyChosen:
                'A leader who holds that a front-line state cannot outsource its own deterrence, and ' +
                'will not wait on a distracted patron, answers the probe with national forces.',
              doctrine:
                'Self-help and the entrapment/abandonment dilemma: a state hedging against abandonment ' +
                'by acting unilaterally signals resolve, but forgoes the collective weight that makes ' +
                'deterrence credible, and risks being isolated at the decisive moment.',
            },
            effects: { credibility: 10, domestic: 10, escalation: 10, forcesRisk: 10, cohesion: -8 },
            styleTags: ['forceful', 'decisive', 'unilateral', 'go-it-alone'],
            next: 'p2-lean',
          },
        ],
      },
    },

    // ── PHASE 2A — TRANSATLANTIC-DEPENDENCE TRACK ───────────────────────────
    {
      id: 'p2-lean',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE TRANSATLANTIC LINK',
      title: 'Awaiting Columbia',
      narrative:
        'The chosen posture has placed the transatlantic link at the centre of the crisis — ' +
        'whether by leaning on it directly, or by acting in a way that makes the Atlantic Power\'s ' +
        'backing the awaited variable. The senior ally\'s response is genuine but limited: a ' +
        'supportive line within a longer statement on its own domestic difficulties, a single ' +
        'squadron "available to rotate", and a private note that this is "a moment for the ' +
        'Alliance to share the load". It is neither abandonment nor reassurance. The Federation ' +
        'and the wavering neighbours read it accordingly.',
      decision: {
        prompt: 'The senior ally\'s backing is thin and conditional. How do you handle the link?',
        options: [
          {
            id: 'extract-commitment',
            label:
              'Press for a concrete, visible commitment now — a deployment the Federation cannot misread.',
            consequence:
              'Verlandia presses for something tangible — not words but a tripwire: allied ground ' +
              'and air forces visibly forward, dated and announced. After a difficult day the ' +
              'Atlantic Power agrees to a modest but genuine forward rotation. The signal registers ' +
              'and the Federation\'s exercises pause. The commitment has cost considerable political ' +
              'capital and a standing obligation.',
            critique: {
              strengths: [
                'A visible tripwire is the hardest, clearest form of extended deterrence available.',
                'Converts a wobbling guarantee back into a concrete fact on the ground the adversary must respect.',
              ],
              risks: [
                'Forward deployments raise forces-risk and can be cast by the Federation as the provocation.',
                'Capital spent extracting this commitment is owed back — the senior ally will collect.',
              ],
              whyChosen:
                'A leader who knows that guarantees are believed only when they are physical will ' +
                'spend whatever it takes to turn a thin statement into forces forward.',
              doctrine:
                'The tripwire and extended deterrence: forward-deployed allied forces make a guarantee ' +
                'credible by coupling the patron\'s fate to the front line — at the price of higher ' +
                'forces-risk and a debt of obligation.',
            },
            effects: { credibility: 12, cohesion: 6, escalation: 4, forcesRisk: 8, domestic: 4 },
            styleTags: ['alliance-first', 'forceful', 'reassurance', 'decisive'],
            next: 'p3-ambiguity',
          },
          {
            id: 'accept-load-share',
            label:
              'Accept the load-sharing framing: take on more of the burden to keep the senior ally aboard cheaply.',
            consequence:
              'Verlandia accepts the framing. It volunteers to carry more — increased spending, ' +
              'additional forces forward, and a public acknowledgement that the front-line states ' +
              'will bear the immediate weight. The Atlantic Power responds with support and quiet ' +
              'enablers. The link is preserved by demonstrating utility, and Verlandian dependence ' +
              'is rendered somewhat less visible.',
            critique: {
              strengths: [
                'Keeps the senior ally engaged by lowering its cost — burden-sharing as cohesion maintenance.',
                'Builds your own credibility as a serious contributor, not merely a consumer of the guarantee.',
              ],
              risks: [
                'Carrying more for less reassurance can ratify the very disengagement you fear.',
                'A domestic public asked to pay more while the guarantor pays less may not stay patient.',
              ],
              whyChosen:
                'A leader who reads the senior ally as tired rather than gone will pay down the ' +
                'burden-sharing grievance to keep the relationship — and the guarantee — alive.',
              doctrine:
                'Burden-sharing and the free-rider debate: a junior ally taking on more of the load to ' +
                'preserve the patron\'s commitment — sound alliance management, but it can normalise the ' +
                'patron\'s drift toward the exit.',
            },
            effects: { cohesion: 10, credibility: 2, domestic: -6, forcesRisk: 4, escalation: -2 },
            styleTags: ['burden-sharing', 'alliance-first', 'consultative', 'multilateral'],
            next: 'p3-ambiguity',
          },
          {
            id: 'hedge-quietly',
            label:
              'Hedge: take the thin support, but quietly begin building European alternatives in case it thins further.',
            consequence:
              'Verlandia accepts the Atlantic Power\'s offer without objection while opening ' +
              'discreet talks with European neighbours on capabilities the senior ally has ' +
              'traditionally provided. Nothing is announced. The course is prudent, but if ' +
              'disclosed, the Atlantic Power is likely to read it as the hedging that accelerates ' +
              'its own disengagement.',
            critique: {
              strengths: [
                'Buys insurance against abandonment without forcing a public break with the patron.',
                'Begins the slow work of strategic autonomy before, not during, the next crisis.',
              ],
              risks: [
                'Hedging detected is hedging punished — the patron may read insurance as disloyalty and disengage faster.',
                'Half-built European alternatives deter no one in the meantime; you carry the gap regardless.',
              ],
              whyChosen:
                'A leader who assesses that the guarantee is gradually eroding hedges accordingly, ' +
                'accepting present support while insuring against its future absence.',
              doctrine:
                'The hedging dilemma in alliance politics: insuring against abandonment can provoke ' +
                'the abandonment it guards against, because the patron reads autonomy-building as the ' +
                'first step out the door.',
            },
            effects: { cohesion: -2, credibility: -2, escalation: -2, attribution: 2, domestic: 2 },
            styleTags: ['deliberate', 'sovereign-action', 'multilateral', 'restraint'],
            next: 'p3-ambiguity',
          },
        ],
      },
    },

    // ── PHASE 2B — EUROPEAN-AUTONOMY TRACK ──────────────────────────────────
    {
      id: 'p2-rally',
      phase: 2,
      phaseLabel: 'PHASE 2 · THE EUROPEAN HAND',
      title: 'A coalition of the exposed',
      narrative:
        'The chosen posture has shifted the weight onto Europe — whether by rallying neighbours ' +
        'directly or by lowering the temperature in a way that left the continent, rather than the ' +
        'Atlantic Power, holding the file. A core of front-line and near-front European Alliance ' +
        'members now sits with Verlandia, and the group is divided. Some favour a robust, visibly ' +
        'autonomous European posture demonstrating that the continent can act alone. Others are ' +
        'reluctant to take any step that resembles writing the Atlantic Power out of the alliance. ' +
        'A few question whether the problem is principally Verlandia\'s rather than their own.',
      decision: {
        prompt: 'Europe is in the room but divided. How do you shape the autonomous response?',
        options: [
          {
            id: 'european-pillar',
            label:
              'Build the European pillar: a substantial joint deployment and command arrangement that stands on its own.',
            consequence:
              'Verlandia drives the coalition toward substantive measures — pooled air defence, a ' +
              'combined forward presence under European command, and a standing crisis cell. It is ' +
              'the most significant continental response in recent memory. It also constructs a ' +
              'European capability that can function without the Atlantic capital, which the ' +
              'Atlantic capital duly notes.',
            critique: {
              strengths: [
                'Demonstrates that European deterrence is not theoretical — a hedge that actually deters.',
                'A continent that can act alone is one the Federation cannot decouple by waiting out the patron.',
              ],
              risks: [
                'A visibly self-sufficient European pillar can accelerate the Atlantic Power\'s drift away.',
                'Standing up real combined forces forward raises forces-risk and gives the Federation an escalation story.',
              ],
              whyChosen:
                'A leader convinced the old guarantee is fading invests in the only durable answer — ' +
                'a Europe that can carry its own deterrence — and accepts the strain on the link.',
              doctrine:
                'Strategic autonomy and the decoupling problem: an autonomous European pillar hedges ' +
                'against abandonment, but can hollow the transatlantic bargain it was meant to ' +
                'supplement, doing the adversary\'s decoupling work for it.',
            },
            effects: { cohesion: 10, credibility: 8, forcesRisk: 6, escalation: 4, domestic: 2 },
            styleTags: ['multilateral', 'burden-sharing', 'forceful', 'sovereign-action'],
            next: 'p3-ambiguity',
          },
          {
            id: 'hold-coalition',
            label:
              'Hold the coalition together at the pace of the most reluctant — unity over ambition.',
            consequence:
              'Assessing that a fractured European front serves only the Federation, Verlandia ' +
              'pitches the response to what every member can endorse. The result is modest — ' +
              'coordinated patrols, a joint statement, shared intelligence — but genuinely ' +
              'unanimous, and it keeps both the cautious Europeans and an Atlantic-facing group ' +
              'within the same framework.',
            critique: {
              strengths: [
                'Unanimity is itself a deterrent signal — the Federation cannot find a seam to widen.',
                'Keeps the door open to the Atlantic Power rather than forcing a choice it might lose.',
              ],
              risks: [
                'A response set to the most reluctant member may be too weak to actually deter the probe.',
                'Verlandia, the exposed state, carries the residual risk the cautious members will not.',
              ],
              whyChosen:
                'A leader who treats cohesion as the centre of gravity will take a unanimous modest ' +
                'line over an ambitious one that fractures the coalition the Federation is trying to split.',
              doctrine:
                'Alliance cohesion as deterrence: a united front denies the adversary its cheapest win — ' +
                'decoupling — even at the cost of a lower-common-denominator response that may underpower the moment.',
            },
            effects: { cohesion: 12, credibility: -2, escalation: -2, domestic: -2 },
            styleTags: ['multilateral', 'consultative', 'alliance-first', 'restraint'],
            next: 'p3-ambiguity',
          },
          {
            id: 'lead-from-front',
            label:
              'Lead from the front: have Verlandia move first and visibly, daring the others to follow.',
            consequence:
              'Verlandia ceases to wait for consensus and acts, on the calculation that the ' +
              'coalition will align with a state already in motion. Verlandian forces move east ' +
              'under a European framework largely of Verlandia\'s own drafting. Two neighbours join ' +
              'within a day; one resents being pre-empted; the cautious members object that ' +
              'Verlandia is drawing the continent toward a confrontation on its own terms.',
            critique: {
              strengths: [
                'Breaks a deadlocked coalition by creating a fact others must respond to.',
                'Projects resolve at the speed the crisis demands rather than the speed of consensus.',
              ],
              risks: [
                'Bouncing allies into following you strains the cohesion that is your real asset.',
                'A front-line state setting the tempo can entrap reluctant partners — or be left exposed if they decline.',
              ],
              whyChosen:
                'A leader who fears consensus will arrive too late may choose to lead with deeds and ' +
                'let the coalition catch up, judging momentum more valuable than unanimity.',
              doctrine:
                'Leadership and entrapment within alliances: a frontline state forcing the pace can ' +
                'galvanise collective action or drag reluctant allies into commitments they did not ' +
                'choose — the entrapment side of the alliance dilemma.',
            },
            effects: { credibility: 8, domestic: 6, escalation: 6, forcesRisk: 6, cohesion: -6 },
            styleTags: ['decisive', 'forceful', 'sovereign-action', 'tempo'],
            next: 'p3-ambiguity',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE AMBIGUOUS SIGNAL ───────────────────────
    {
      id: 'p3-ambiguity',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE AMBIGUOUS SIGNAL',
      title: 'Two signals, one morning',
      narrative:
        'However this point was reached, two developments arrive together on the same morning.\n\n' +
        'First, the Atlantic Power issues a signal whose ambiguity is assessed as deliberate. A ' +
        'senior figure restates the alliance commitment in strong terms while observing publicly ' +
        'that allies "must be realistic about what they can expect" and that every guarantee ' +
        '"depends on shared effort". The statement both reaffirms and qualifies, and is evidently ' +
        'constructed to be read either way.\n\n' +
        'Second, the Federation escalates the probe to exploit that doubt: a larger "exercise" now ' +
        'straddles the border, the detained guard is charged rather than released, and a Federation ' +
        'spokesman invites Verlandia to "ask Columbia whether it will really fight for you". The ' +
        'probe has become a public test of the guarantee, staged for an audience of waverers.',
      decision: {
        prompt: 'The guarantor is ambiguous and the Federation has called the question. How do you respond?',
        options: [
          {
            id: 'force-clarity',
            label:
              'Force the issue: publicly hold the Atlantic Power to its words and demand it resolve the ambiguity.',
            consequence:
              'Verlandia declines to let the ambiguity stand. In coordination with allies it ' +
              'publicly welcomes the reaffirmation, treats the guarantee as settled, and frames any ' +
              'wavering as a Federation fiction. This commits the Atlantic Power to the stronger ' +
              'reading of its statement, at the risk of provoking resentment, mid-crisis, at being ' +
              'managed in public.',
            critique: {
              strengths: [
                'Refuses the Federation its prize by publicly converting ambiguity into commitment.',
                'Audience costs cut your way: a guarantor publicly thanked for its resolve finds it costly to then hedge.',
              ],
              risks: [
                'Cornering a distracted patron in public may be counterproductive, prompting it to resent the manoeuvre and disengage further.',
                'If the Atlantic Power qualifies its position again, the manoeuvre will have amplified the doubt it sought to suppress.',
              ],
              whyChosen:
                'A leader who holds that guarantees are made credible by assertion will commit the ' +
                'patron to its strongest formulation before the doubt consolidates into accepted ' +
                'fact.',
              doctrine:
                'Audience costs and the manipulation of commitment: publicly crediting an ally with ' +
                'resolve raises its cost of backing down — a way to harden a soft guarantee, but one ' +
                'that can provoke the very ally it seeks to bind.',
            },
            effects: { credibility: 8, cohesion: 4, escalation: 4, domestic: 6, forcesRisk: 2 },
            styleTags: ['alliance-first', 'decisive', 'reassurance', 'signalling'],
            next: 'p4-waver',
          },
          {
            id: 'answer-federation',
            label:
              'Answer the Federation directly: meet the new pressure with a firm, proportionate counter-move.',
            consequence:
              'Verlandia leaves the ambiguity unaddressed and responds to the immediate ' +
              'provocation. The counter is measured but unmistakable: a reinforced border posture, ' +
              'a firm diplomatic and economic response to the charges, and allies invited to ' +
              'participate visibly. The Federation\'s demonstration is answered. Escalation rises a ' +
              'level, and the question of the guarantee remains, for now, unresolved.',
            critique: {
              strengths: [
                'Denies the Federation the satisfaction of an unanswered taunt and steadies front-line nerves.',
                'Keeps the focus on the adversary\'s coercion rather than on the cracks among allies.',
              ],
              risks: [
                'Answering firmly while the guarantee is ambiguous is the bluff the Federation is testing for.',
                'A counter-move raises escalation and forces-risk without resolving who actually stands behind you.',
              ],
              whyChosen:
                'A leader who judges that the probe must be answered on its own terms, coercion met ' +
                'with resolve, addresses the Federation first and the guarantor\'s position ' +
                'afterwards.',
              doctrine:
                'Deterrence by denial under a soft guarantee: meeting coercion firmly preserves resolve, ' +
                'but doing so while the patron is ambiguous risks exposing a commitment you cannot fully back.',
            },
            effects: { credibility: 8, escalation: 10, forcesRisk: 8, domestic: 6, cohesion: -4 },
            styleTags: ['forceful', 'decisive', 'coercive', 'sovereign-action'],
            next: 'p4-waver',
          },
          {
            id: 'absorb-deny',
            label:
              'Absorb and deny: refuse the framing, decline the theatre, and quietly deepen European backstops.',
            consequence:
              'Assessing the Federation\'s challenge as an attempt to induce a public crisis of ' +
              'confidence, Verlandia declines to provide one. There is no demand on the Atlantic ' +
              'Power and no escalation with the Federation — only sustained reassurance to the ' +
              'public, quiet coordination with Europeans on the relevant capabilities, and a flat ' +
              'denial that any guarantee is in doubt. The probe is deprived of its spectacle, ' +
              'though some observers at home and abroad cannot tell whether the posture reflects ' +
              'composure or constraint.',
            critique: {
              strengths: [
                'Denies the Federation the visible crisis of confidence its escalation was engineered to produce.',
                'Lowers the temperature and buys time to build real European backstops out of the spotlight.',
              ],
              risks: [
                'Declining to display resolve may be indistinguishable, to an anxious public, from possessing none.',
                'Restraint wagers that the underlying balance holds; if it does not, the posture will have signalled weakness.',
              ],
              whyChosen:
                'A leader who assesses the escalation as a provocation seeking an over-reaction ' +
                'denies it that reaction, judging denial of objectives preferable to a contest of ' +
                'resolve.',
              doctrine:
                'Denial of objectives and escalation control: defeating a coercive probe by refusing ' +
                'the crisis of confidence it seeks — absorbing the pressure rather than answering it, ' +
                'at the risk of being read as weak.',
            },
            effects: { escalation: -8, forcesRisk: -4, cohesion: 4, credibility: -4, domestic: -4, attribution: 2 },
            styleTags: ['de-escalatory', 'restraint', 'off-ramp', 'deliberate'],
            next: 'p4-waver',
          },
        ],
      },
    },

    // ── PHASE 4 — THE COHESION TEST ─────────────────────────────────────────
    {
      id: 'p4-waver',
      phase: 4,
      phaseLabel: 'PHASE 4 · COHESION UNDER STRAIN',
      title: 'Pressure on the seam',
      narrative:
        'The Federation has shifted from direct pressure to exploiting the alliance\'s internal ' +
        'divisions. Two pressures arrive together.\n\n' +
        'One pivotal European ally — a state whose territory and airspace anchor any defence of ' +
        'Verlandia — has been offered a private arrangement: favourable energy and trade terms and ' +
        'an assurance of non-interference, in exchange for stepping back from the front and ' +
        'blocking any robust Alliance line. Its government, facing a restive public, is assessed to ' +
        'be tempted.\n\n' +
        'Concurrently, the Atlantic Power, judging that it now holds the decisive position, ' +
        'indicates that fuller backing is available, conditional on Verlandia accepting terms: ' +
        'defer to Columbia\'s tempo, abandon the independent European arrangements, and shape the ' +
        'response to suit its domestic politics. Cohesion, the centre of gravity, is under bid from ' +
        'two directions at once.',
      decision: {
        prompt: 'An ally is being peeled away and your guarantor is asking a price. This is the decisive cohesion test. What do you do?',
        options: [
          {
            id: 'hold-ally-burden',
            label:
              'Outbid the Federation: hold the wavering ally with real burden-sharing and political cover, on European terms.',
            consequence:
              'Verlandia acts to prevent the seam from opening. Rather than pressure the tempted ' +
              'ally or capitulate to the Atlantic Power, it commits substantial resources to the ' +
              'wavering partner — backfill for its exposure, energy alternatives, and a genuine ' +
              'share in decisions — and keeps the European arrangements in place. The approach is ' +
              'costly and strains the domestic budget, but it holds. The ally remains by choice, ' +
              'and the Federation\'s offer loses its appeal.',
            critique: {
              strengths: [
                'Defeats decoupling at its source by making staying more attractive than the Federation\'s bribe.',
                'Preserves European autonomy and cohesion together rather than trading one for the other.',
              ],
              risks: [
                'Outbidding a great power\'s chequebook is costly and may not be sustainable if it is repeated.',
                'Declining the Atlantic Power\'s terms forgoes the heavier deterrent its full backing would bring.',
              ],
              whyChosen:
                'A leader who treats cohesion as the centre of gravity pays to keep the coalition ' +
                'whole, judging a united Europe worth more than either the inducement declined for ' +
                'it or the patron\'s conditional support.',
              doctrine:
                'Burden-sharing as cohesion maintenance against decoupling: binding a wavering ally ' +
                'through aligned interests and credible reassurance, denying the adversary the cheap ' +
                'win of splitting the alliance — at real and recurring cost.',
            },
            effects: { cohesion: 16, credibility: 4, domestic: -8, forcesRisk: 2, escalation: -2 },
            styleTags: ['multilateral', 'burden-sharing', 'alliance-first', 'consultative'],
            next: 'p5-close',
          },
          {
            id: 'accept-atlantic-terms',
            label:
              'Accept the Atlantic Power\'s terms: take its full backing, drop the European track, defer to its tempo.',
            consequence:
              'Verlandia takes the stronger instrument. It accepts Columbia\'s conditions — the ' +
              'independent European arrangements are shelved and the response reshaped to the ' +
              'patron\'s preferences — and in return the Atlantic Power commits its full visible ' +
              'weight. The Federation\'s offer to the wavering ally collapses against the restored ' +
              'guarantee. Verlandia holds the strongest deterrent available, but no longer fully ' +
              'controls its own strategy.',
            critique: {
              strengths: [
                'Restores the most credible deterrent available — the full, visible Atlantic guarantee.',
                'A re-engaged patron solves the immediate decoupling threat outright; the bribe cannot compete.',
              ],
              risks: [
                'Surrendering strategic autonomy leaves you exposed the next time the patron is distracted.',
                'Dropping the European track abandons the allies who rallied to you and the hedge you were building.',
              ],
              whyChosen:
                'A leader who concludes that nothing European can yet match the senior ally\'s weight ' +
                'will pay in autonomy to recouple the guarantee when it is decisively on offer.',
              doctrine:
                'The price of extended deterrence and the autonomy trade-off: recoupling the patron\'s ' +
                'guarantee can demand deference that erodes strategic autonomy — security bought with ' +
                'dependence, sound today, fragile when the patron next looks away.',
            },
            effects: { credibility: 12, cohesion: -4, escalation: -2, domestic: 4, forcesRisk: 2 },
            styleTags: ['alliance-first', 'reassurance', 'consultative', 'go-it-alone'],
            next: 'p5-close',
          },
          {
            id: 'pressure-waverer',
            label:
              'Hold the line by pressure: make the wavering ally\'s defection costly and keep your hands free.',
            consequence:
              'Verlandia declines both the Atlantic Power\'s terms and the cost of outbidding, and ' +
              'instead applies firm pressure to the wavering ally, reminding it what Alliance ' +
              'membership has provided and what defection would cost. The ally remains, for now, ' +
              'resentful, and notes that it was coerced by a partner as much as courted by the ' +
              'adversary. Verlandian autonomy is intact; the trust underpinning the coalition is ' +
              'diminished.',
            critique: {
              strengths: [
                'Keeps the front intact without surrendering autonomy or emptying your treasury.',
                'Signals that the coalition will not be peeled apart cheaply, deterring the next attempt.',
              ],
              risks: [
                'An ally held by coercion rather than conviction is brittle and may defect at the worst moment.',
                'Strong-arming a partner corrodes the very cohesion that is your centre of gravity.',
              ],
              whyChosen:
                'A leader who fears one visible defection will trigger others, and who will not pay ' +
                'either the patron\'s price or the bribe-matching cost, holds the line by making ' +
                'leaving hurt.',
              doctrine:
                'Intra-alliance coercion and its limits: pressure preserves the front today but ' +
                'hollows the trust that makes the alliance durable — cohesion held by threat is ' +
                'cohesion spent down.',
            },
            effects: { cohesion: -8, credibility: 6, domestic: 2, escalation: 4, forcesRisk: 2 },
            styleTags: ['unilateral', 'coercive', 'decisive', 'sovereign-action'],
            next: 'p5-close',
          },
        ],
      },
    },

    // ── PHASE 5 — THE STRATEGIC CLOSE → ENDING RESOLVER ─────────────────────
    {
      id: 'p5-close',
      phase: 5,
      phaseLabel: 'PHASE 5 · THE STRATEGIC CLOSE',
      title: 'The lesson of the tilt',
      narrative:
        'The acute phase of the probe has passed. The Federation\'s exercises are thinning, the ' +
        'charged border guard is now to be expelled rather than tried, and the energy supplier has ' +
        'recovered its capacity. The immediate test is subsiding. What remains is the posture set ' +
        'for the long competition the Federation has signalled it intends to conduct against the ' +
        'seams of the Alliance and the credibility of a guarantee underwritten across an ocean. ' +
        'This final choice will outlast the crisis.',
      decision: {
        prompt: 'How do you close the file and set the long-term posture?',
        options: [
          {
            id: 'institutionalise-burden',
            label:
              'Institutionalise the lesson: drive a standing Alliance burden-sharing and rapid-reassurance framework.',
            consequence:
              'Verlandia converts a near-miss into structure — agreed front-line reinforcement ' +
              'plans, a standing reassurance mechanism not contingent on the senior ally\'s domestic ' +
              'cycle, and a durable burden-sharing settlement. This binds Europe and the Atlantic ' +
              'Power into shared machinery, so that the next probe meets a system rather than an ' +
              'improvisation.',
            critique: {
              strengths: [
                'Turns one survived crisis into lasting cohesion and a faster, pre-agreed reassurance reflex.',
                'Locks the Atlantic Power into shared structures, making its commitment harder to quietly let lapse.',
              ],
              risks: [
                'Standing frameworks dilute to the most reluctant member and can constrain you in a future case.',
                'Institutionalising burden-sharing fixes obligations that a future, more inward patron may still shirk.',
              ],
              whyChosen:
                'A leader who sees this as the first probe of a long campaign invests in the rules and ' +
                'reflexes that make the next one survivable without depending on a distracted patron\'s mood.',
              doctrine:
                'Crisis as catalyst for alliance institutions: embedding burden-sharing and reassurance ' +
                'in standing structures so collective defence rests on machinery, not on the attention ' +
                'span of any single guarantor.',
            },
            effects: { cohesion: 8, credibility: 6, escalation: -4, forcesRisk: -2 },
            styleTags: ['multilateral', 'alliance-first', 'burden-sharing', 'deliberate'],
            next: null,
          },
          {
            id: 'build-autonomy',
            label:
              'Build real autonomy: commit Verlandia and willing Europeans to a credible self-reliant deterrent.',
            consequence:
              'Verlandia draws the deeper conclusion — that a guarantee it cannot control is one it ' +
              'cannot rely on — and commits to building genuine European deterrent capacity: ' +
              'spending, command, and the capabilities the continent has long depended on from ' +
              'across the ocean. This is the work of years rather than weeks. It also signals, to ' +
              'allies and adversary alike, that Europe intends to be able to act alone.',
            critique: {
              strengths: [
                'Addresses the root vulnerability — dependence on a distractible patron — at its source.',
                'A Europe that can deter on its own is one the Federation cannot decouple by waiting out the Atlantic Power.',
              ],
              risks: [
                'Visible autonomy-building can hasten the patron\'s departure, leaving you exposed mid-transition.',
                'Real autonomy is expensive and slow; in the meantime the gap is carried, not closed.',
              ],
              whyChosen:
                'A leader who concludes the tilt was a warning, not an aberration, invests in the only ' +
                'durable answer to an unreliable guarantor — the ability to do without one.',
              doctrine:
                'Strategic autonomy as the long-term hedge: building independent deterrent capacity ' +
                'against the abandonment dilemma, accepting near-term decoupling risk to escape ' +
                'long-term dependence.',
            },
            effects: { credibility: 6, cohesion: -2, forcesRisk: 4, domestic: -4, escalation: 2 },
            styleTags: ['sovereign-action', 'burden-sharing', 'deliberate', 'forceful'],
            next: null,
          },
          {
            id: 'recommit-transatlantic',
            label:
              'Recommit to the Atlantic bond: invest your capital in repairing and deepening the senior-ally relationship.',
            consequence:
              'Verlandia assesses that the link, frayed as it is, remains the most reliable ' +
              'shield, and commits its remaining capital to repairing it — quiet diplomacy to ' +
              're-engage the Atlantic Power, visible burden-carrying to address its grievance, and ' +
              'a deliberate choice to keep Europe within the transatlantic framework rather than ' +
              'alongside it. The approach is unremarkable, and rests on the judgement that the ' +
              'guarantee can be made reliable again.',
            critique: {
              strengths: [
                'Reinvests in the most powerful deterrent available rather than improvising a weaker substitute.',
                'Repairs a relationship the Federation was working to corrode, denying it a strategic win.',
              ],
              risks: [
                'Doubling down on a distractible patron leaves the same vulnerability the probe just exploited.',
                'Capital spent courting the guarantor is capital not spent on the autonomy that would outlast it.',
              ],
              whyChosen:
                'A leader who believes no European arrangement can yet match the Atlantic guarantee ' +
                'invests in keeping that guarantee credible, judging the bond worth repairing over ' +
                'replacing.',
              doctrine:
                'Recoupling and reassurance as alliance maintenance: repairing the transatlantic bargain ' +
                'to restore extended deterrence — the orthodox answer, sound while the patron stays ' +
                'engaged, fragile if the distraction recurs.',
            },
            effects: { credibility: 6, cohesion: 6, domestic: -2, escalation: -2 },
            styleTags: ['alliance-first', 'reassurance', 'consultative', 'multilateral'],
            next: null,
          },
        ],
      },
    },
  ],
}
