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
    'For ten days the Federation has been leaning on Verlandia. It began with a manufactured ' +
    'incident on the eastern border — a "lost" patrol, a brief incursion, a frontier guard ' +
    'detained and paraded on Federation screens — and has widened into something colder: an ' +
    'energy supplier suddenly citing "technical faults", a wave of information operations ' +
    'questioning whether anyone will really come to Verlandia\'s aid, and unusual Federation ' +
    'exercises massing just across the line.\n\n' +
    'None of it crosses the threshold of armed attack. All of it is calibrated. The timing is ' +
    'the message: the Atlantic Power — Columbia, the senior ally whose guarantee underwrites the ' +
    'whole Alliance — is consumed by a domestic crisis of its own, its attention visibly turned ' +
    'inward and across to another theatre. The Federation is probing a single question, and the ' +
    'whole continent is watching the answer: now that the Atlantic Power is distracted, will the ' +
    'Alliance actually respond? Your Prime Minister wants options within the hour.',
  objectives: [
    'Hold deterrence together while doubting your most important backer.',
    'Balance reassurance-seeking from the Atlantic Power against building European self-reliance.',
    'Keep the Alliance from fracturing — the adversary\'s cheapest win is decoupling.',
    'Answer the probe firmly enough to deter without handing the Federation a pretext to escalate.',
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
      title: 'A question, not yet a war',
      narrative:
        'The picture on the wall is not ambiguous about who is doing this — the Federation\'s hand ' +
        'is plain. What is ambiguous is what it wants, and what you can do about it. Every move has ' +
        'been pitched just below the line that would trigger the Alliance\'s collective-defence ' +
        'clause: pressure, not invasion; coercion, not war. The Federation is not trying to take ' +
        'Verlandian territory tonight. It is trying to take Verlandian confidence — to demonstrate, ' +
        'to your public and to every wavering capital, that the guarantee at the heart of the ' +
        'Alliance is a bluff now that the Atlantic Power is looking the other way.\n\n' +
        'Your first move sets the frame for everything after. Lean on the Atlantic Power for a ' +
        'visible guarantee, and you reaffirm the old order — if it answers. Rally the Europeans for ' +
        'an autonomous response, and you build self-reliance — but you signal that the old guarantee ' +
        'may already be gone. Or you answer the probe yourself, quietly or firmly, alone.',
      decision: {
        prompt: 'How do you respond to the probe in the first hour?',
        options: [
          {
            id: 'lean-atlantic',
            label:
              'Lean on the Atlantic Power: press Columbia hard for a visible, public reaffirmation of the guarantee.',
            consequence:
              'You spend the night on secure lines to the Atlantic capital, pressing for a clear ' +
              'public signal — a statement, a deployment, anything the Federation cannot miss. ' +
              'Officials are warm but distracted; the crisis at home swallows their attention. They ' +
              'promise to "look at options". You have bet your deterrence on a backer whose eyes are ' +
              'elsewhere.',
            critique: {
              strengths: [
                'A reaffirmed Atlantic guarantee is still the single most powerful deterrent on the continent.',
                'Keeps the Alliance\'s centre of gravity — the transatlantic link — where it has always been.',
              ],
              risks: [
                'If the Atlantic Power hedges or delays, you have publicly revealed your dependence and its limits.',
                'Asking and being answered weakly is worse than not asking — it dramatises the very doubt the Federation is selling.',
              ],
              whyChosen:
                'For decades the guarantee has held precisely because no one tested it; a leader may ' +
                'judge that the safest move is to make the senior ally restate it loudly, before the ' +
                'doubt sets.',
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
              'You skip the long-distance call and reach for your neighbours. Within hours a ' +
              'cluster of European Alliance members agrees a joint posture — shared air policing, ' +
              'a coordinated statement, contingency planning that does not wait on the Atlantic ' +
              'capital. It is real, it is fast, and it quietly announces that Europe is preparing ' +
              'to stand without its senior partner.',
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
              'You judge the probe is fishing for an over-reaction, and decline to provide one. A ' +
              'quiet message goes to the Federation through a trusted intermediary: we see what you ' +
              'are doing, we are not seeking a confrontation, the border guard should come home. ' +
              'The temperature drops a degree. Your domestic press, seeing no visible firmness, ' +
              'begins to ask whether you are being pushed around.',
            critique: {
              strengths: [
                'Refuses the Federation the escalation it may be trying to bait, keeping the crisis low.',
                'Avoids committing you to a posture you might not be able to sustain if the Atlantic Power stays absent.',
              ],
              risks: [
                'Quiet restraint against a coercive probe can be read — at home and abroad — as the bluff being called.',
                'If it leaks, you look like a front-line state that flinched, eroding deterrence across the Alliance.',
              ],
              whyChosen:
                'A leader who fears that a hard answer with a distracted backer is a bluff waiting to ' +
                'be exposed may choose to lower the stakes rather than raise a hand they cannot back.',
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
              'You do not wait for anyone. Verlandian reserves are called up, units move east, and ' +
              'you state plainly that further pressure will be met. The home front rallies behind a ' +
              'government that is finally seen to act. The Federation, watching a single state ' +
              'mobilise without visible Alliance backing, takes careful note of exactly how alone ' +
              'you are.',
            critique: {
              strengths: [
                'Demonstrates national resolve immediately and steadies a public that wanted firmness.',
                'A sovereign state defending its own border owes nothing to a hesitant ally\'s timetable.',
              ],
              risks: [
                'Acting alone advertises the gap the Federation is probing — that the guarantee is not visibly behind you.',
                'A national mobilisation without Alliance cover raises forces-risk and can be framed as the escalation.',
              ],
              whyChosen:
                'A leader who believes a front-line state cannot outsource its own deterrence — and ' +
                'will not wait on a distracted patron — answers the probe with its own forces.',
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
      title: 'Waiting on Columbia',
      narrative:
        'Your posture has put the transatlantic link at the centre of the crisis — either by ' +
        'leaning on it directly, or by acting in a way that makes the Atlantic Power\'s backing ' +
        'the thing everyone is now waiting for. The senior ally\'s response, when it comes, is ' +
        'real but thin: a supportive line buried in a longer statement about its own domestic ' +
        'troubles, a single squadron "available to rotate", a private note that this is "a moment ' +
        'for the Alliance to share the load". It is not abandonment. It is not reassurance either. ' +
        'The Federation reads it instantly, and so do your wavering neighbours.',
      decision: {
        prompt: 'The senior ally\'s backing is thin and conditional. How do you handle the link?',
        options: [
          {
            id: 'extract-commitment',
            label:
              'Press for a concrete, visible commitment now — a deployment the Federation cannot misread.',
            consequence:
              'You push hard for something tangible: not words, but a tripwire — allied boots and ' +
              'aircraft visibly forward, dated and announced. After a tense day the Atlantic Power ' +
              'agrees to a modest but real forward rotation. The signal lands; the Federation\'s ' +
              'exercises pause. You have spent considerable capital, and an IOU, to get it.',
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
              'You take the hint and absorb it. Verlandia volunteers to carry more — more spending, ' +
              'more forces forward, a public acceptance that the front-line states will shoulder the ' +
              'immediate weight. The Atlantic Power, relieved, lends warm words and quiet enablers. ' +
              'You have kept the link intact by making yourself useful, and made your dependence a ' +
              'little less visible.',
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
              'You pocket what the Atlantic Power offers without complaint, and at the same time ' +
              'open discreet talks with European neighbours on capabilities the senior ally has ' +
              'always provided. Nothing is announced. It is prudent, and if it surfaces, the ' +
              'Atlantic Power will read it as exactly the hedging that hastens its own departure.',
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
                'A leader who suspects the guarantee is quietly eroding hedges quietly too — taking ' +
                'today\'s support while insuring against tomorrow\'s absence.',
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
        'Your posture has thrown the weight onto Europe — whether by rallying neighbours directly ' +
        'or by lowering the temperature in a way that left the continent, not the ocean, holding ' +
        'the file. A core of front-line and near-front European Alliance members is now in the room ' +
        'with you, and the room is split. Some want a muscular, visibly autonomous European posture ' +
        'that proves the continent can stand alone. Others are terrified of doing anything that ' +
        'looks like writing the Atlantic Power out of the alliance — and a couple are quietly ' +
        'wondering whether this is Verlandia\'s problem more than theirs.',
      decision: {
        prompt: 'Europe is in the room but divided. How do you shape the autonomous response?',
        options: [
          {
            id: 'european-pillar',
            label:
              'Build the European pillar: a substantial joint deployment and command arrangement that stands on its own.',
            consequence:
              'You push the coalition toward something real — pooled air defence, a combined ' +
              'forward presence under European command, a standing crisis cell. It is the most ' +
              'serious continental response in memory. It also, unmistakably, builds a European ' +
              'capability that does not need the Atlantic capital to function — and the Atlantic ' +
              'capital notices.',
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
              'You judge that a cracked European front helps only the Federation, and pitch the ' +
              'response to what every member can sign. The result is modest — coordinated patrols, a ' +
              'joint statement, shared intelligence — but it is genuinely unanimous, and it keeps ' +
              'both the cautious Europeans and an Atlantic-facing wing inside the same tent.',
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
              'You stop waiting for consensus and act, betting the coalition will rally to a state ' +
              'already moving. Verlandian forces shift east under a European banner you have largely ' +
              'written yourself. Two neighbours fall in behind within a day; one resents being ' +
              'bounced; the cautious ones grumble that Verlandia is dragging the continent toward a ' +
              'fight on its terms.',
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
      title: 'Two messages on the same morning',
      narrative:
        'However you reached this point, the crisis sharpens on a single morning. Two things land ' +
        'at once.\n\n' +
        'First, the Atlantic Power sends a signal so carefully ambiguous it can only be deliberate. ' +
        'A senior figure restates the alliance commitment in ringing terms — and, in the same ' +
        'breath, muses publicly that allies "must be realistic about what they can expect" and that ' +
        'every guarantee "depends on shared effort". It reaffirms and it qualifies. It is designed ' +
        'to be read both ways, and it will be.\n\n' +
        'Second, the Federation escalates the probe to exploit exactly that doubt: a larger ' +
        '"exercise" now sits astride the border, the detained guard is charged rather than ' +
        'released, and a Federation spokesman openly invites Verlandia to "ask Columbia whether it ' +
        'will really fight for you". The probe has become a public test of the guarantee, staged ' +
        'for an audience of waverers.',
      decision: {
        prompt: 'The guarantor is ambiguous and the Federation has called the question. How do you respond?',
        options: [
          {
            id: 'force-clarity',
            label:
              'Force the issue: publicly hold the Atlantic Power to its words and demand it resolve the ambiguity.',
            consequence:
              'You decline to let the ambiguity stand. In coordination with allies you publicly ' +
              'welcome the reaffirmation, treat the guarantee as settled fact, and frame any ' +
              'wavering as a Federation fiction. It boxes the Atlantic Power into its better half — ' +
              'and risks provoking it, mid-domestic-crisis, into resenting being managed in public.',
            critique: {
              strengths: [
                'Refuses the Federation its prize by publicly converting ambiguity into commitment.',
                'Audience costs cut your way: a guarantor publicly thanked for its resolve finds it costly to then hedge.',
              ],
              risks: [
                'Cornering a distracted patron in public can backfire — it may resent the manoeuvre and pull back further.',
                'If the Atlantic Power then qualifies again, you have dramatised the very doubt you tried to bury.',
              ],
              whyChosen:
                'A leader who knows guarantees are made real by being asserted will lock the patron ' +
                'into its strongest words before the doubt hardens into the new fact.',
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
              'You let the ambiguity sit and deal with the immediate provocation. A measured but ' +
              'unmistakable counter — a reinforced border posture, the charges met with a hard ' +
              'diplomatic and economic response, allies invited to join visibly. The Federation\'s ' +
              'theatre is answered. The temperature climbs a rung, and the question of the guarantee ' +
              'is left, for now, unresolved beneath it.',
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
                'A leader who judges that the probe must be answered on its own terms — coercion met ' +
                'with resolve — will deal with the Federation first and the guarantor\'s mood later.',
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
              'You read the Federation\'s taunt as bait for a public crisis of confidence, and ' +
              'refuse to perform one. No demand on the Atlantic Power, no escalation with the ' +
              'Federation — just steady reassurance to your public, quiet coordination with ' +
              'Europeans on the capabilities that matter, and a flat denial that any guarantee is ' +
              'in doubt. It deprives the probe of its spectacle, and leaves some at home and abroad ' +
              'unsure whether you are calm or cornered.',
            critique: {
              strengths: [
                'Denies the Federation the visible crisis of confidence its escalation was engineered to produce.',
                'Lowers the temperature and buys time to build real European backstops out of the spotlight.',
              ],
              risks: [
                'Refusing to perform resolve can be indistinguishable, to a frightened public, from having none.',
                'Quiet is a wager that the underlying balance holds — if it does not, you will have signalled weakness.',
              ],
              whyChosen:
                'A leader who sees the escalation as theatre fishing for an over-reaction starves it ' +
                'of the reaction, betting that denial of objectives beats a contest of nerve.',
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
      title: 'The seam the Federation found',
      narrative:
        'The Federation has stopped pushing on the wall and started pushing on the joints. Two ' +
        'pressures arrive together.\n\n' +
        'One pivotal European ally — a state whose territory and airspace anchor any defence of ' +
        'Verlandia — has been offered a private deal: lucrative energy and trade terms, and a quiet ' +
        'assurance of being left alone, in exchange for stepping back from the front and blocking ' +
        'any robust Alliance line. Its government, facing its own restless public, is visibly ' +
        'tempted.\n\n' +
        'And the Atlantic Power, sensing it now holds the decisive vote, lets it be known that its ' +
        'fuller backing is available — but only if Verlandia accepts terms: defer to Columbia\'s ' +
        'tempo, drop the independent European arrangements, and shape your response to suit its ' +
        'domestic politics. Cohesion, your centre of gravity, is being bought from two directions ' +
        'at once.',
      decision: {
        prompt: 'An ally is being peeled away and your guarantor is asking a price. This is the decisive cohesion test. What do you do?',
        options: [
          {
            id: 'hold-ally-burden',
            label:
              'Outbid the Federation: hold the wavering ally with real burden-sharing and political cover, on European terms.',
            consequence:
              'You refuse to let the seam open. Rather than pressure the tempted ally or capitulate ' +
              'to the Atlantic Power, you put real resources on the table for the wavering partner — ' +
              'backfill for its exposure, energy alternatives, a genuine share of the decisions — ' +
              'and keep the European arrangements alive. It is expensive, it strains your domestic ' +
              'budget, and it holds. The ally stays, willingly, and the Federation\'s offer curdles.',
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
                'whole, judging a united Europe worth more than either a bribe refused for it or a ' +
                'patron\'s conditional embrace.',
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
              'You take the heavier weapon. Verlandia accepts Columbia\'s conditions — the ' +
              'independent European arrangements are shelved, your response is reshaped to its ' +
              'comfort — and in return the Atlantic Power throws its full visible weight behind you. ' +
              'The Federation\'s offer to the wavering ally collapses against the restored guarantee. ' +
              'You have the strongest deterrent on the table, and you no longer fully own your own ' +
              'strategy.',
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
              'You decline both the Atlantic Power\'s terms and the expense of outbidding, and ' +
              'instead lean hard on the wavering ally — reminding it pointedly what Alliance ' +
              'membership has been worth and what a defection would cost it. It stays, for now, ' +
              'resentful and noting that it was coerced by a partner as much as courted by the ' +
              'adversary. Your autonomy is intact; the trust beneath the coalition is thinner.',
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
      title: 'What the tilt taught you',
      narrative:
        'The acute probe has crested. The Federation\'s exercises are thinning, the charged border ' +
        'guard is suddenly to be "expelled" rather than tried, the energy supplier rediscovers its ' +
        'capacity. The immediate test is passing. What remains is the lesson you carry out of it — ' +
        'the posture you set for the long competition the Federation has just shown it intends to ' +
        'wage against the seams of the Alliance, and against the credibility of a guarantee written ' +
        'across an ocean. This last choice will outlive the crisis.',
      decision: {
        prompt: 'How do you close the file and set the long-term posture?',
        options: [
          {
            id: 'institutionalise-burden',
            label:
              'Institutionalise the lesson: drive a standing Alliance burden-sharing and rapid-reassurance framework.',
            consequence:
              'You convert a near-miss into structure — agreed front-line reinforcement plans, a ' +
              'standing reassurance mechanism that does not wait on the senior ally\'s news cycle, a ' +
              'durable burden-sharing settlement. It binds Europe and the Atlantic Power into the ' +
              'same machine, so the next probe meets a system, not an improvisation.',
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
              'You take the deeper lesson — that a guarantee you cannot control is a guarantee you ' +
              'cannot count on — and commit to building genuine European deterrent capacity: ' +
              'spending, command, capabilities the continent has always rented from across the ocean. ' +
              'It is the work of years, not weeks. It also signals, to friend and adversary alike, ' +
              'that Europe intends to be able to stand alone.',
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
              'You judge that the link, frayed as it is, remains the surest shield, and spend your ' +
              'remaining capital mending it — quiet diplomacy to re-engage the Atlantic Power, ' +
              'visible burden-carrying to answer its grievance, a deliberate choice to keep Europe ' +
              'inside the transatlantic frame rather than beside it. Unglamorous, and a bet that the ' +
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
