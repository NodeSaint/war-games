import type { Scenario } from '@/engine/types'

/**
 * SILENT LEDGER — AI / autonomous escalation at a maritime chokepoint.
 *
 * Fictionalised throughout: the Alliance, the Federation, the Servan Strait and
 * every actor are invented. No real states, people or quoted figures. Critique
 * is grounded in genuine War Studies concepts (decision-loop compression,
 * automation bias, the attribution problem, escalation control and signalling,
 * alliance decoupling, audience costs, inadvertent escalation) — concepts only.
 *
 * Structure (reconvergent DAG):
 *   P1 incident → branches into P2-CONSULT (evidence track) and P2-TEMPO
 *   (machine-speed track) → both reconverge at P3-VERDICT → P4-NARRATIVE →
 *   P5-ALLY → P6-OFFRAMP → P7-FINAL → state-driven ending.
 */
export const silentLedger: Scenario = {
  id: 'silent-ledger',
  codename: 'SILENT LEDGER',
  domain: 'AI / Autonomous Escalation',
  basis: 'Uncrewed systems, machine-speed ROE and the attribution problem at a contested chokepoint.',
  difficulty: 'Advanced',
  estPhases: 7,
  role: 'National Security Adviser to Verlandia, an Alliance member state',
  brief:
    'At 0247 local, an Alliance uncrewed maritime ISR platform — call sign LEDGER-3 — was ' +
    'destroyed while transiting the approaches to the Servan Strait, a chokepoint through which ' +
    'a fifth of regional trade passes. The platform was operating under a delegated, partly ' +
    'automated rules-of-engagement posture. Initial sensor returns are fragmentary and ' +
    'contradictory: they are consistent with a deliberate Federation strike, with a Federation ' +
    'air-defence system acting on its own automated logic, and with a catastrophic malfunction ' +
    'of LEDGER-3 itself. You cannot yet tell which.\n\n' +
    'A fishing vessel filmed the final seconds. The footage is already spreading. The Federation ' +
    'has said nothing. Your principals will look to you within the hour. You are deciding at ' +
    'machine speed about an event you do not yet understand.',
  objectives: [
    'Control escalation without being read as weak.',
    'Hold the Alliance together while the picture is still forming.',
    'Decide how much to act before attribution is firm — and how much to wait.',
    'Keep a human hand on the decisions that cannot be taken back.',
  ],
  metricsInit: {
    escalation: 34,
    cohesion: 62,
    domestic: 54,
    credibility: 56,
    forcesRisk: 38,
    attribution: 20,
  },
  startNodeId: 'p1-incident',
  nodes: [
    // ── PHASE 1 — THE INCIDENT (branch point) ───────────────────────────────
    {
      id: 'p1-incident',
      phase: 1,
      phaseLabel: 'PHASE 1 · THE INCIDENT',
      title: 'LEDGER-3 is gone',
      narrative:
        'The watch floor is loud. LEDGER-3 stopped transmitting at 0247; the last frames show a ' +
        'bright bloom and then nothing. The duty intelligence officer will only say the picture ' +
        'is "consistent with several hypotheses". The automated maritime response posture — ' +
        'standing orders that let allied systems react to a hostile act without waiting for a ' +
        'human — is armed and, by its own logic, considers LEDGER-3’s loss a candidate hostile ' +
        'act. The footage is on the networks. Your first move sets the tempo for everything after.',
      decision: {
        prompt: 'How do you respond in the first hour?',
        options: [
          {
            id: 'convene',
            label:
              'Convene allies privately, withhold public attribution, and surge ISR to rebuild the picture.',
            consequence:
              'You pull the Alliance into a closed virtual session and put nothing on the record. ' +
              'Additional sensors are tasked to the strait. The press notices your silence and ' +
              'fills it — but you have bought time to actually know something.',
            critique: {
              strengths: [
                'Protects you from committing to an attribution you may have to retract.',
                'Keeps the Alliance inside the tent before positions harden in public.',
                'Treats attribution as something to be earned, not assumed.',
              ],
              risks: [
                'Silence is itself a signal; the Federation and your own public will read into it.',
                'You cede the opening narrative to whoever speaks first.',
              ],
              whyChosen:
                'A decision-maker who has been burned by premature attribution before will spend ' +
                'the first hour buying down uncertainty rather than spending credibility on a guess.',
              doctrine:
                'Classic management of the attribution problem: act on confidence, not on the ' +
                'first plausible story. The cost is tempo — you are choosing to be slow to avoid ' +
                'being wrong.',
            },
            effects: { attribution: 8, escalation: -3, cohesion: 4, domestic: -4 },
            styleTags: ['evidence-seeking', 'multilateral', 'human-in-loop', 'restraint'],
            next: 'p2-consult',
          },
          {
            id: 'backchannel',
            label:
              'Open a quiet backchannel to the Federation signalling restraint, while you investigate.',
            consequence:
              'A private message goes through the deconfliction line: we do not yet know what ' +
              'happened, and we are not looking for a fight tonight. No reply comes — but no ' +
              'second incident does either.',
            critique: {
              strengths: [
                'Creates an off-ramp before anyone has climbed the ladder.',
                'Signals to the adversary that you are not on a hair-trigger — reducing the chance ' +
                'of their automated systems reacting to yours.',
              ],
              risks: [
                'Can be read as weakness if it leaks, eroding deterrence and domestic support.',
                'Assumes there is a rational hand on the other side to reach.',
              ],
              whyChosen:
                'If your worst fear is inadvertent escalation between two automated postures, the ' +
                'single most valuable thing you can do is tell the other side you are not attacking.',
              doctrine:
                'Reassurance as the other half of deterrence. Escalation control is not only about ' +
                'threats; it is about keeping a channel open so a misread does not become a war.',
            },
            effects: { escalation: -7, attribution: 3, credibility: -4, forcesRisk: -4 },
            styleTags: ['de-escalatory', 'restraint', 'consultative', 'human-in-loop'],
            next: 'p2-consult',
          },
          {
            id: 'go-public',
            label:
              'Go public quickly: name the Federation as responsible and seize the narrative.',
            consequence:
              'Your spokesperson states that an Alliance platform was destroyed by Federation ' +
              'action and that there will be consequences. The clip travels. Domestic support ' +
              'spikes. Two allies privately ask how you can be so sure — because they are not.',
            critique: {
              strengths: [
                'Wins the opening news cycle and frames the Federation as the aggressor.',
                'Projects resolve immediately, which can deter a follow-on move.',
              ],
              risks: [
                'You have spent credibility on an attribution you cannot yet prove; if it unravels, ' +
                'so does your standing.',
                'You have created an audience cost that makes climbing back down very expensive.',
                'Allies who doubt the attribution begin to hedge.',
              ],
              whyChosen:
                'In a contested information space, the first mover often owns the story, and a ' +
                'leader may judge that ceding the narrative is more dangerous than over-committing.',
              doctrine:
                'Audience costs cut both ways: going public hardens your resolve and the adversary ' +
                'knows it — but it also locks you in. Automation bias’ political cousin is treating ' +
                'a plausible read as a proven one because acting feels better than waiting.',
            },
            effects: { domestic: 12, credibility: 6, escalation: 12, cohesion: -8, attribution: -2 },
            styleTags: ['decisive', 'escalatory', 'unilateral', 'signalling', 'tempo'],
            next: 'p2-tempo',
          },
          {
            id: 'arm-auto',
            label:
              'Authorise the automated maritime response posture to act at machine speed if provoked.',
            consequence:
              'You leave the standing posture armed and widen its authorities so allied systems can ' +
              'respond to a further hostile act without waiting for you. Within twenty minutes a ' +
              'Federation picket and an allied system are manoeuvring aggressively at the strait, ' +
              'each reacting to the other faster than the watch floor can narrate it.',
            critique: {
              strengths: [
                'Removes hesitation from the response if this was the first move of something larger.',
                'Signals that further aggression will be met instantly — a real deterrent.',
              ],
              risks: [
                'You have delegated the most consequential decision — first return fire — to logic ' +
                'you cannot fully see, against an adversary doing the same.',
                'Two automated postures interacting can climb the ladder with no human choosing to.',
              ],
              whyChosen:
                'When you fear you are already behind the adversary’s tempo, matching machine speed ' +
                'with machine speed can feel like the only way not to be caught flat-footed.',
              doctrine:
                'Decision-loop compression and inadvertent escalation: when both sides delegate to ' +
                'automation, the time for human judgement collapses and accidents acquire momentum. ' +
                'This is the central danger the exercise is built around.',
            },
            effects: { escalation: 16, forcesRisk: 16, credibility: 5, attribution: -3 },
            styleTags: ['delegate-autonomy', 'machine-speed', 'escalatory', 'tempo'],
            next: 'p2-tempo',
          },
        ],
      },
    },

    // ── PHASE 2A — CONSULTATION / EVIDENCE TRACK ────────────────────────────
    {
      id: 'p2-consult',
      phase: 2,
      phaseLabel: 'PHASE 2 · CONSULTATION',
      title: 'The picture refuses to resolve',
      narrative:
        'Six hours on. The forensic cell offers a careful split: roughly even odds between a ' +
        'deliberate Federation strike and an automated air-defence reaction to LEDGER-3’s own ' +
        'manoeuvring — with a residual chance the platform malfunctioned. Allies are holding, but ' +
        'two of them want to see the evidence before they sign any statement. The footage has now ' +
        'been "enhanced" by anonymous accounts in three contradictory ways. The press wants a ' +
        'name.',
      decision: {
        prompt: 'The picture is still ambiguous. What governs your next move?',
        options: [
          {
            id: 'share-intel',
            label: 'Share the raw forensic picture with allies, ambiguity and all.',
            consequence:
              'You give the Alliance the unvarnished assessment, including the parts that ' +
              'undercut a clean Federation attribution. Two wavering allies are reassured by your ' +
              'candour and close ranks; one worries the ambiguity will leak.',
            critique: {
              strengths: [
                'Builds durable cohesion: allies trust intelligence they are allowed to see.',
                'Inoculates the coalition against a later reversal in the assessment.',
              ],
              risks: [
                'Shared ambiguity can leak and be weaponised against your own position.',
                'Slows any unified response while everyone digests the caveats.',
              ],
              whyChosen:
                'Cohesion is a centre of gravity; a leader who has watched coalitions fracture over ' +
                'withheld intelligence will pay the transparency cost to keep allies aboard.',
              doctrine:
                'Alliance management as deterrence: the adversary’s cheapest win is decoupling. ' +
                'Transparency is slow but it denies them that win.',
            },
            effects: { cohesion: 12, attribution: 6, escalation: -2 },
            styleTags: ['multilateral', 'evidence-seeking', 'consultative', 'alliance-first'],
            next: 'p3-verdict',
          },
          {
            id: 'demand-forensics',
            label:
              'Hold everyone — including the press — until a higher-confidence forensic verdict is in.',
            consequence:
              'You impose a discipline of silence and surge technical collection. Attribution ' +
              'confidence climbs. The information vacuum, though, is filled by the loudest accounts ' +
              'online, and your domestic flank takes the strain of looking indecisive.',
            critique: {
              strengths: [
                'Maximises the chance that whatever you eventually say will hold up.',
                'Resists the automation-bias trap of acting on the first confident-sounding read.',
              ],
              risks: [
                'A vacuum is never empty; you have handed the narrative to others.',
                'Domestic patience is finite and you are spending it.',
              ],
              whyChosen:
                'If being wrong in public is the failure you most fear, you buy certainty before ' +
                'you buy anything else.',
              doctrine:
                'The attribution problem under time pressure: confidence rises with patience, but ' +
                'patience has a political price measured in audience costs at home.',
            },
            effects: { attribution: 14, domestic: -8, escalation: -3, credibility: -2 },
            styleTags: ['evidence-seeking', 'verify-first', 'deliberate', 'human-in-loop'],
            next: 'p3-verdict',
          },
          {
            id: 'preempt-narrative',
            label:
              'Get ahead of the leaks: brief a firm line to friendly press now, caveats omitted.',
            consequence:
              'A confident account reaches the front pages and steadies your domestic position. ' +
              'But an ally sees their own withheld doubts contradicted in print and quietly steps ' +
              'back from the joint statement.',
            critique: {
              strengths: [
                'Reclaims the narrative and shores up domestic support fast.',
                'Projects a unified front even before one truly exists.',
              ],
              risks: [
                'Manufacturing certainty you do not have is a debt that comes due if the verdict shifts.',
                'Allies who know better feel handled, not consulted — cohesion frays.',
              ],
              whyChosen:
                'When the information war is being lost in real time, a leader may decide that ' +
                'controlling the story is worth straining a few allied relationships.',
              doctrine:
                'Signalling versus truth: a confident public line is a powerful instrument, but ' +
                'spent on an unproven claim it mortgages both credibility and cohesion.',
            },
            effects: { domestic: 10, cohesion: -10, escalation: 4, attribution: -2, credibility: -3 },
            styleTags: ['decisive', 'unilateral', 'signalling', 'tempo'],
            next: 'p3-verdict',
          },
        ],
      },
    },

    // ── PHASE 2B — MACHINE-SPEED / TEMPO TRACK ──────────────────────────────
    {
      id: 'p2-tempo',
      phase: 2,
      phaseLabel: 'PHASE 2 · MACHINE SPEED',
      title: 'The strait is moving faster than you are',
      narrative:
        'Your earlier choice has put tempo, not deliberation, in charge. At the strait, an allied ' +
        'system and a Federation picket are locked in an accelerating cycle of manoeuvre and ' +
        'counter-manoeuvre, each reacting to the other inside the time it takes to brief you. The ' +
        'automated posture reports two "defensive" actions it has already taken on your behalf. ' +
        'The Federation has now broken silence — to accuse YOU of the original aggression. The ' +
        'ladder is being climbed by machines while humans narrate.',
      decision: {
        prompt: 'The loop is tightening. What do you do about the tempo?',
        options: [
          {
            id: 'reassert-control',
            label:
              'Pull the automated posture back under human authority and accept the slower loop.',
            consequence:
              'You revoke the delegated authorities and require a human decision for any kinetic ' +
              'act. The manoeuvring at the strait cools within the hour as your systems stop ' +
              'reflexively answering. You have, briefly, looked hesitant — and you have also ' +
              'stopped an accident from choosing for you.',
            critique: {
              strengths: [
                'Restores human judgement to the one decision that cannot be undone.',
                'Breaks the reflexive action–reaction cycle that drives inadvertent escalation.',
              ],
              risks: [
                'A slower loop is a real military disadvantage if the adversary keeps theirs fast.',
                'Can read as flinching, denting credibility at the worst moment.',
              ],
              whyChosen:
                'A leader who believes the gravest risk is a war nobody chose will accept tactical ' +
                'disadvantage to keep a hand on the trigger.',
              doctrine:
                'Meaningful human control: the deliberate re-insertion of human judgement into a ' +
                'compressed decision loop, trading speed for the ability to not escalate by accident.',
            },
            effects: { escalation: -12, forcesRisk: -10, attribution: 4, credibility: -4 },
            styleTags: ['human-in-loop', 'keep-control', 'restraint', 'manual-override'],
            next: 'p3-verdict',
          },
          {
            id: 'ride-tempo',
            label: 'Keep the posture hot and out-cycle them — let speed be your deterrent.',
            consequence:
              'You let the systems run. For a few tense hours the Federation appears to back its ' +
              'picket off, seemingly deterred. Then a near-collision at the strait — neither human ' +
              'commander ordered it — puts two crews seconds from firing.',
            critique: {
              strengths: [
                'Demonstrated speed and resolve that briefly cowed the adversary.',
                'Denied the Federation any sense that they could act faster than you.',
              ],
              risks: [
                'You came within seconds of an unintended exchange that no human chose.',
                'Every cycle raises the floor under the crisis; there is no easy way back down.',
              ],
              whyChosen:
                'If you read the adversary as testing your nerve, matching and exceeding their ' +
                'tempo can look like the only language they respect.',
              doctrine:
                'Inadvertent escalation through coupled automation: two fast loops interacting ' +
                'produce outcomes neither side selected. Deterrence by speed and accident by speed ' +
                'are the same mechanism seen from different ends.',
            },
            effects: { escalation: 14, forcesRisk: 16, credibility: 8, attribution: -2 },
            styleTags: ['machine-speed', 'delegate-autonomy', 'escalatory', 'brinkmanship'],
            next: 'p3-verdict',
          },
          {
            id: 'deconflict-tempo',
            label:
              'Use the deconfliction line to propose a mutual, verifiable stand-off at the strait.',
            consequence:
              'You propose both sides pull pickets back a set distance and slow their automated ' +
              'postures, verifiable by each other’s sensors. The Federation hesitates, then ' +
              'partially complies. The immediate collision risk drops; the underlying dispute does not.',
            critique: {
              strengths: [
                'Addresses the proximate danger — coupled fast loops — directly and mutually.',
                'Offers the adversary a face-saving step that does not require admitting fault.',
              ],
              risks: [
                'Hands the adversary a say over your force posture.',
                'A partial, unverified pullback can be exploited if they are negotiating in bad faith.',
              ],
              whyChosen:
                'When the real enemy is the interaction rather than the adversary, you negotiate ' +
                'the interaction down even before you have settled who was to blame.',
              doctrine:
                'Tacit and explicit bargaining in crises: mutual, observable restraint as a way to ' +
                'decouple two escalating loops without either side conceding the larger point.',
            },
            effects: { escalation: -8, forcesRisk: -8, cohesion: 4, attribution: 2, credibility: -1 },
            styleTags: ['de-escalatory', 'consultative', 'human-in-loop', 'off-ramp'],
            next: 'p3-verdict',
          },
        ],
      },
    },

    // ── PHASE 3 — RECONVERGENCE: THE PARTIAL VERDICT ────────────────────────
    {
      id: 'p3-verdict',
      phase: 3,
      phaseLabel: 'PHASE 3 · THE VERDICT',
      title: 'A verdict you can half-trust',
      narrative:
        'The forensic verdict lands, and it is maddeningly partial. The most likely explanation — ' +
        'assessed at moderate confidence — is that a Federation automated air-defence node engaged ' +
        'LEDGER-3 on its own logic after misclassifying its approach, without a deliberate order ' +
        'from Federation command. Not an ambush. Not an accident of your own making. A machine on ' +
        'their side, deciding badly. Moderate confidence is not proof, and your principals want to ' +
        'know what you intend to do with a finding you cannot fully stand behind.',
      decision: {
        prompt: 'A machine on their side likely did this, by mistake. How do you act on a moderate-confidence verdict?',
        options: [
          {
            id: 'act-as-proven',
            label:
              'Treat the verdict as settled: demand accountability and a halt to their automated postures.',
            consequence:
              'You publicly attribute the loss to a Federation automated system and demand they ' +
              'stand it down. The firmness plays well at home. The Federation, stung at being ' +
              'blamed for a "mistake" they have not conceded, digs in and rejects the framing.',
            critique: {
              strengths: [
                'Converts a technical finding into clear political pressure and a concrete demand.',
                'Projects resolve and gives your public a coherent story.',
              ],
              risks: [
                'Moderate confidence presented as certainty is a hostage to the next revision.',
                'Cornering the adversary over an accident removes their room to climb down quietly.',
              ],
              whyChosen:
                'A leader who believes deterrence requires consequences will not let "it was only a ' +
                'malfunction" become a licence for the adversary’s machines to kill without cost.',
              doctrine:
                'The certainty trap: dressing moderate confidence as proof to enable action. ' +
                'Powerful in the moment, brittle if the assessment moves.',
            },
            effects: { domestic: 8, credibility: 6, escalation: 10, cohesion: -4, attribution: 2 },
            styleTags: ['decisive', 'escalatory', 'signalling', 'unilateral'],
            next: 'p4-narrative',
          },
          {
            id: 'calibrated',
            label:
              'State the finding at its true confidence and propose a joint technical investigation.',
            consequence:
              'You say exactly what you assess and how sure you are, and invite the Federation into ' +
              'a joint look at what their system did. Hardliners at home call it weak; two allies ' +
              'call it the most credible thing said all week. The Federation does not accept — but ' +
              'does not reject either.',
            critique: {
              strengths: [
                'Calibrated honesty is durable; nothing here has to be walked back later.',
                'A joint investigation offers a ladder down that does not require public humiliation.',
              ],
              risks: [
                'Calibration reads as hesitation to a domestic audience primed for a strong reply.',
                'The adversary may pocket your restraint and concede nothing.',
              ],
              whyChosen:
                'If your reputation for telling the truth about intelligence is itself a strategic ' +
                'asset, you protect it precisely when it is hardest to.',
              doctrine:
                'Calibrated signalling and the value of credibility-as-honesty: matching your ' +
                'public confidence to your actual confidence so your word still moves others next time.',
            },
            effects: { credibility: 8, cohesion: 8, attribution: 6, domestic: -7, escalation: -4 },
            styleTags: ['evidence-seeking', 'verify-first', 'multilateral', 'de-escalatory'],
            next: 'p4-narrative',
          },
          {
            id: 'covert-response',
            label:
              'Say little publicly; respond covertly against the offending Federation network.',
            consequence:
              'In public you keep your counsel. Out of sight, you authorise a proportionate cyber ' +
              'action to degrade the air-defence node that fired. It works — and the Federation ' +
              'detects it, reading a quiet escalation where you intended a measured reply.',
            critique: {
              strengths: [
                'Imposes a cost without a public escalation your audience would have to be managed through.',
                'Keeps your options open and your rhetoric cool.',
              ],
              risks: [
                'Covert acts are deniable to your public but rarely to the target, who answers in kind.',
                'You have escalated in a domain where attribution and proportionality are even murkier.',
              ],
              whyChosen:
                'A leader wanting to punish the act without lighting a public fire may reach for the ' +
                'quiet instrument — pressure below the threshold of open confrontation.',
              doctrine:
                'Sub-threshold and grey-zone action: imposing costs while controlling visibility — ' +
                'but the adversary sees what your public does not, and the ladder still has rungs.',
            },
            effects: { escalation: 8, forcesRisk: 6, credibility: 4, attribution: -2, cohesion: -2 },
            styleTags: ['decisive', 'unilateral', 'coercive', 'machine-speed'],
            next: 'p4-narrative',
          },
        ],
      },
    },

    // ── PHASE 4 — THE NARRATIVE WAR ─────────────────────────────────────────
    {
      id: 'p4-narrative',
      phase: 4,
      phaseLabel: 'PHASE 4 · THE NARRATIVE WAR',
      title: 'Two stories, one strait',
      narrative:
        'The contest has moved into the information domain. A polished Federation narrative now ' +
        'circulates: LEDGER-3, it says, was a provocation that strayed into their waters, and any ' +
        'response was self-defence. Synthetic media muddies every claim — including yours. Inside ' +
        'your own coalition, publics are diverging, and one allied government is visibly weighing ' +
        'whether this fight is worth the political cost at home.',
      decision: {
        prompt: 'The battle is now over the story. How do you fight it?',
        options: [
          {
            id: 'release-evidence',
            label:
              'Declassify and release the strongest verifiable evidence you hold, caveats included.',
            consequence:
              'You burn some collection to put verifiable proof into the open. Independent analysts ' +
              'corroborate it. The Federation’s synthetic version visibly wobbles, and wavering ' +
              'allies find public cover to stay aligned.',
            critique: {
              strengths: [
                'Verifiable truth is the one thing synthetic media cannot easily counterfeit.',
                'Gives allies and neutral observers something solid to stand on.',
              ],
              risks: [
                'Declassification can burn sources and methods you will want later.',
                'Once released, your evidence is also studied by the adversary.',
              ],
              whyChosen:
                'In a contest of fakes, the side that can prove something true holds the high ground ' +
                '— if it is willing to pay the intelligence cost.',
              doctrine:
                'Counter-disinformation through verifiable disclosure: trading intelligence equity ' +
                'for narrative legitimacy when authenticity is the scarce resource.',
            },
            effects: { cohesion: 12, domestic: 6, credibility: 6, attribution: 6, escalation: -2 },
            styleTags: ['evidence-seeking', 'multilateral', 'transparency', 'alliance-first'],
            next: 'p5-ally',
          },
          {
            id: 'flood-zone',
            label:
              'Match them: run an aggressive counter-messaging campaign to drown the Federation story.',
            consequence:
              'Your communicators go on the offensive across every channel. The Federation line ' +
              'stops dominating — but in the noise, neutral audiences conclude both sides are ' +
              'spinning, and your reputation for straight dealing takes quiet damage.',
            critique: {
              strengths: [
                'Denies the adversary an uncontested run at global opinion.',
                'Energises your own domestic base in the short term.',
              ],
              risks: [
                'Fighting fog with fog erodes the credibility that is your real long-term asset.',
                'Symmetric spin tells neutrals to trust no one — which can suit the adversary fine.',
              ],
              whyChosen:
                'When silence is being read as guilt, a leader may feel that any answer beats ceding ' +
                'the field, even at the cost of looking like just another combatant in the spin war.',
              doctrine:
                'The symmetry trap in information warfare: matching disinformation with volume can ' +
                'forfeit the asymmetric advantage of being believed.',
            },
            effects: { domestic: 8, cohesion: -2, credibility: -8, escalation: 4, attribution: -2 },
            styleTags: ['decisive', 'tempo', 'unilateral', 'coercive'],
            next: 'p5-ally',
          },
          {
            id: 'strategic-patience',
            label:
              'Decline the spin war; let verifiable facts and allied unity speak over days, not hours.',
            consequence:
              'You refuse to be drawn into the hour-by-hour fight, briefing allies privately and ' +
              'letting slower, checkable facts accumulate. For two days you appear to be losing the ' +
              'narrative; by the third, the Federation’s account is the one unravelling.',
            critique: {
              strengths: [
                'Preserves credibility by refusing to trade in claims you cannot stand behind.',
                'Lets the adversary’s synthetic story collapse under its own contradictions.',
              ],
              risks: [
                'Surrendering the early cycle can cost you allies or publics who decide before day three.',
                'Requires nerve and domestic slack you may not have.',
              ],
              whyChosen:
                'A leader confident in the underlying facts may judge that the truth wins a longer ' +
                'game, and refuse to mortgage credibility for a day’s headlines.',
              doctrine:
                'Strategic patience in the information domain: accepting short-term narrative loss to ' +
                'win on legitimacy as verifiable facts outlast manufactured ones.',
            },
            effects: { credibility: 8, attribution: 4, domestic: -8, cohesion: 2 },
            styleTags: ['deliberate', 'verify-first', 'restraint', 'alliance-first'],
            next: 'p5-ally',
          },
        ],
      },
    },

    // ── PHASE 5 — THE WAVERING ALLY ─────────────────────────────────────────
    {
      id: 'p5-ally',
      phase: 5,
      phaseLabel: 'PHASE 5 · COHESION UNDER STRAIN',
      title: 'The ally at the door',
      narrative:
        'The government of one pivotal ally — whose ports and sensors anchor your posture near the ' +
        'strait — tells you privately it cannot sustain the confrontation. Its own public is ' +
        'turning, an election looms, and it is being courted with an economic offer from the ' +
        'Federation. If it steps back, your military position around the strait is materially ' +
        'weaker and the coalition’s unity, your best card, is visibly cracked.',
      decision: {
        prompt: 'A pivotal ally is wavering. How do you hold the coalition together?',
        options: [
          {
            id: 'accommodate-ally',
            label:
              'Adapt the coalition position to the ally’s constraints, softening your demands to keep them in.',
            consequence:
              'You rework the joint line to give the ally political room — a slower timeline, a ' +
              'lower-key posture. They stay. The Federation notes the softened position and reads ' +
              'a coalition that can be split with patience and a chequebook.',
            critique: {
              strengths: [
                'Preserves the alliance’s unity, denying the adversary its decoupling win.',
                'Recognises that a coalition that holds at a lower demand beats one that shatters at a higher one.',
              ],
              risks: [
                'Softening under pressure can invite more pressure next time.',
                'Your firmest allies may resent the dilution of a position they had backed.',
              ],
              whyChosen:
                'If you believe cohesion is the centre of gravity, you protect it even at the cost ' +
                'of a tougher line — a coalition intact is leverage; a coalition fractured is none.',
              doctrine:
                'Alliance cohesion versus firmness: managing the reality that the adversary’s ' +
                'cheapest victory is decoupling, and that unity sometimes has to be bought with ' +
                'flexibility.',
            },
            effects: { cohesion: 12, escalation: -4, credibility: -6, domestic: -2 },
            styleTags: ['multilateral', 'consultative', 'alliance-first', 'de-escalatory'],
            next: 'p6-offramp',
          },
          {
            id: 'pressure-ally',
            label:
              'Hold the line and make clear the costs to the ally of stepping back now.',
            consequence:
              'You remind the ally, firmly, what coalition membership has been worth to them and ' +
              'what a unilateral step back would cost. They stay — resentful, and quietly noting ' +
              'that they were coerced by a partner, not only by the adversary.',
            critique: {
              strengths: [
                'Keeps the coalition position intact and undiluted in the near term.',
                'Signals to the adversary that the coalition will not be peeled apart cheaply.',
              ],
              risks: [
                'Coercing an ally damages the trust that makes the alliance valuable.',
                'A partner held by pressure rather than conviction is a brittle one.',
              ],
              whyChosen:
                'A leader who fears that one visible defection triggers others may judge that ' +
                'holding the line, even by strong-arming, is worth the relational cost.',
              doctrine:
                'Intra-alliance bargaining and the limits of coercion among partners: firmness ' +
                'preserves the front today but can hollow out the cohesion it depends on tomorrow.',
            },
            effects: { cohesion: -2, credibility: 6, escalation: 4, domestic: 2 },
            styleTags: ['unilateral', 'coercive', 'decisive', 'sovereign-action'],
            next: 'p6-offramp',
          },
          {
            id: 'burden-share',
            label:
              'Offer the ally tangible burden-sharing — capabilities and cover — to make staying worth it.',
            consequence:
              'Rather than pressure or concession, you put real resources on the table: capabilities ' +
              'to backfill their exposure, political cover for their leadership, a share of the ' +
              'decision-making. They stay, and stay willingly. It costs you — and it holds.',
            critique: {
              strengths: [
                'Converts a wavering ally into a committed one by aligning their interests, not just demands.',
                'Strengthens the coalition’s resilience to the next attempt to split it.',
              ],
              risks: [
                'Real resources spent here are not available elsewhere.',
                'Sets a precedent that staying aligned earns concessions.',
              ],
              whyChosen:
                'A leader who sees alliances as investments rather than transactions will pay to ' +
                'keep a partner whole, judging the return in cohesion worth the outlay.',
              doctrine:
                'Burden-sharing as cohesion maintenance: binding allies through aligned interests ' +
                'and credible reassurance rather than through pressure or capitulation.',
            },
            effects: { cohesion: 14, credibility: 2, domestic: -4, forcesRisk: 2 },
            styleTags: ['multilateral', 'burden-sharing', 'alliance-first', 'consultative'],
            next: 'p6-offramp',
          },
        ],
      },
    },

    // ── PHASE 6 — THE OFF-RAMP UNDER TIME PRESSURE ──────────────────────────
    {
      id: 'p6-offramp',
      phase: 6,
      phaseLabel: 'PHASE 6 · THE OFF-RAMP',
      title: 'A door, closing',
      narrative:
        'A channel opens. Through a trusted intermediary, the Federation signals it would accept a ' +
        'mutual, face-saving stand-down: both sides pull back from the strait, both publicly commit ' +
        'to constraining their automated maritime postures, and the LEDGER-3 finding goes to a ' +
        'neutral technical panel. The catch is a deadline — their offer holds for a few hours ' +
        'before a hardline faction on their side closes it. Accepting means giving the adversary a ' +
        'share of the narrative and constraining your own systems. Refusing means betting that ' +
        'pressure wins outright.',
      decision: {
        prompt: 'The off-ramp is real but time-limited. This is the decisive choice. What do you do?',
        options: [
          {
            id: 'take-offramp',
            label:
              'Take the mutual stand-down: pull back, constrain the automated postures, accept the neutral panel.',
            consequence:
              'You accept inside the window. Both sides pull back from the strait; the automated ' +
              'postures are visibly constrained; the LEDGER-3 finding goes to a neutral panel. No ' +
              'one gets a clean victory, and the chokepoint stops being a place where a machine ' +
              'might start a war.',
            critique: {
              strengths: [
                'Locks in de-escalation while the door is open, rather than betting it stays open.',
                'Constraining both automated postures attacks the root danger — coupled fast loops.',
                'A neutral technical panel offers durable, face-saving attribution.',
              ],
              risks: [
                'Hands the adversary a share of the narrative and a say over your force posture.',
                'A hardline domestic audience may call a negotiated stand-down a defeat.',
              ],
              whyChosen:
                'A leader whose dominant aim has been escalation control takes the verifiable ' +
                'off-ramp when it appears, knowing such windows rarely reopen.',
              doctrine:
                'Escalation control and the value of off-ramps: the decisive skill is recognising a ' +
                'face-saving mutual exit and taking it before the window — and the cooler heads on ' +
                'the other side — disappear.',
            },
            effects: { escalation: -16, forcesRisk: -12, attribution: 8, cohesion: 4, domestic: -4 },
            styleTags: ['de-escalatory', 'off-ramp', 'multilateral', 'human-in-loop'],
            next: 'p7-final',
          },
          {
            id: 'press-advantage',
            label:
              'Refuse: hold the pressure and demand a better deal, betting their offer signals weakness.',
            consequence:
              'You let the window close, judging that an offer means leverage. The hardline faction ' +
              'you gambled against takes the wheel; the Federation hardens, the strait stays hot, ' +
              'and the automated postures stay armed and facing each other.',
            critique: {
              strengths: [
                'If the read is right, refusing a first offer can extract a better settlement.',
                'Avoids legitimising the adversary or constraining your own systems prematurely.',
              ],
              risks: [
                'You have bet the crisis on a hardliner not winning the argument on the other side.',
                'Letting an off-ramp close can be the irreversible step that makes a war likelier.',
              ],
              whyChosen:
                'A leader reading the offer as a sign the adversary is hurting may press for a ' +
                'decisive advantage rather than settle for a draw.',
              doctrine:
                'Brinkmanship and the gambler’s error in crises: treating a de-escalation signal as ' +
                'weakness to be exploited can foreclose the very exit that ends the crisis safely.',
            },
            effects: { escalation: 18, forcesRisk: 14, credibility: 6, cohesion: -8, domestic: 2 },
            styleTags: ['brinkmanship', 'escalatory', 'unilateral', 'decisive'],
            next: 'p7-final',
          },
          {
            id: 'counter-offer',
            label:
              'Counter inside the window: accept the stand-down but demand the automation limits be verifiable.',
            consequence:
              'You accept the off-ramp’s shape but insist the constraints on both automated ' +
              'postures be mutually verifiable before you pull fully back. The Federation grumbles ' +
              'at the delay, the clock nearly runs out — and they concede the verification, barely.',
            critique: {
              strengths: [
                'Captures the de-escalation and hardens it against cheating through verification.',
                'Refuses a paper promise on the exact risk — automation — that started this.',
              ],
              risks: [
                'Pushing inside a closing window risks losing the deal to the deadline.',
                'Verification demands can be the pretext a hardline faction uses to walk away.',
              ],
              whyChosen:
                'A leader who wants the off-ramp but distrusts unverified promises threads the ' +
                'needle — taking the exit while making it real.',
              doctrine:
                'Arms-control logic applied at crisis speed: "trust but verify" — an agreement to ' +
                'constrain automation is only as good as each side’s ability to observe the other ' +
                'keeping it.',
            },
            effects: { escalation: -12, forcesRisk: -8, attribution: 10, credibility: 6, cohesion: 4, domestic: -2 },
            styleTags: ['de-escalatory', 'off-ramp', 'verify-first', 'multilateral'],
            next: 'p7-final',
          },
        ],
      },
    },

    // ── PHASE 7 — FINAL POSTURE → ENDING RESOLVER ───────────────────────────
    {
      id: 'p7-final',
      phase: 7,
      phaseLabel: 'PHASE 7 · CLOSING THE FILE',
      title: 'How you leave it',
      narrative:
        'The acute danger has passed its peak. What remains is how you close the file: the posture ' +
        'you set for the days ahead, the lesson you carry out of the watch floor. This last choice ' +
        'will not be undone tonight, but it will shape whether tonight is remembered as a near-miss ' +
        'survived or a precedent set.',
      decision: {
        prompt: 'How do you close out the crisis?',
        options: [
          {
            id: 'institutionalise',
            label:
              'Push for standing Alliance rules on automated postures, so next time is not improvised.',
            consequence:
              'You convert a bad night into a durable safeguard, driving the Alliance toward agreed ' +
              'limits and human-control standards for automated maritime systems. It will outlast ' +
              'your tenure — and the next crisis will start from firmer ground.',
            critique: {
              strengths: [
                'Turns a one-off survival into institutional resilience against the recurring danger.',
                'Signals to allies and adversaries alike that automation will be governed, not improvised.',
              ],
              risks: [
                'Binding rules can constrain you in a future case where speed genuinely matters.',
                'Consensus on standards is slow and may dilute to the lowest common denominator.',
              ],
              whyChosen:
                'A leader who sees this crisis as the first of a category, not a one-off, invests in ' +
                'the rules that make the next one survivable.',
              doctrine:
                'Crisis as catalyst for norms: institutionalising meaningful human control over ' +
                'autonomous systems so safety does not depend on one tired adviser at 0247.',
            },
            effects: { cohesion: 6, credibility: 4, escalation: -4, attribution: 2 },
            styleTags: ['multilateral', 'human-in-loop', 'deliberate', 'alliance-first'],
            next: null,
          },
          {
            id: 'reset-deterrence',
            label:
              'Re-establish hard deterrence: reinforce the strait and make the cost of a repeat explicit.',
            consequence:
              'You close the file by rebuilding deterrence the old way — visible reinforcement near ' +
              'the strait, an explicit declaration of consequences for a repeat. The message is ' +
              'unmistakable; so is the higher baseline of tension you have just set.',
            critique: {
              strengths: [
                'Leaves no ambiguity about your resolve to deter a repeat.',
                'Reassures allies and domestic audiences that the lesson learned is strength.',
              ],
              risks: [
                'Locks in a higher floor of confrontation and standing forces-risk at the strait.',
                'Treats a likely-accidental trigger as if it were deliberate, which can provoke the next one.',
              ],
              whyChosen:
                'A leader who concludes that the night happened because deterrence was too soft will ' +
                'close it by making deterrence unmistakable.',
              doctrine:
                'Deterrence restoration after a crisis: re-signalling resolve to prevent the next ' +
                'probe — at the cost of a higher, more dangerous baseline if the original trigger was ' +
                'an accident, not a test.',
            },
            effects: { credibility: 8, escalation: 8, forcesRisk: 8, domestic: 4, cohesion: -2 },
            styleTags: ['escalatory', 'decisive', 'signalling', 'sovereign-action'],
            next: null,
          },
          {
            id: 'quiet-channel',
            label:
              'Invest in the quiet channel: build a standing crisis line with the Federation for next time.',
            consequence:
              'You spend your remaining capital on something unglamorous — a durable, tested ' +
              'crisis-communications channel with the Federation, so the next 0247 has a human on ' +
              'the other end of the line. No headlines. Possibly the most valuable thing you do.',
            critique: {
              strengths: [
                'Directly addresses the root cause: the absence of a fast human channel between fast machines.',
                'A standing line lowers the odds that the next misread becomes the next war.',
              ],
              risks: [
                'Engaging the adversary can be attacked at home as rewarding bad behaviour.',
                'A channel only helps if the other side picks up; it is not a guarantee.',
              ],
              whyChosen:
                'A leader whose lesson from the night is "we were one missed call from disaster" ' +
                'invests in the call being answered next time.',
              doctrine:
                'Crisis-communication infrastructure and reassurance: the deliberate construction of ' +
                'human off-ramps between automated forces, so escalation control does not depend on luck.',
            },
            effects: { escalation: -6, cohesion: 4, attribution: 2, credibility: -2, domestic: -2 },
            styleTags: ['de-escalatory', 'consultative', 'human-in-loop', 'off-ramp'],
            next: null,
          },
        ],
      },
    },
  ],
}
