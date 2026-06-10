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
    'destroyed while transiting the approaches to the Servan Strait, a chokepoint carrying an ' +
    'estimated fifth of regional trade. The platform was operating under a delegated, partly ' +
    'automated rules-of-engagement posture. Initial sensor returns are fragmentary and mutually ' +
    'inconsistent: they are consistent with a deliberate Federation strike, with a Federation ' +
    'air-defence system acting on its own automated logic, and with a catastrophic malfunction ' +
    'of LEDGER-3 itself. Attribution cannot yet be established.\n\n' +
    'A civilian fishing vessel recorded the final seconds, and the footage is in wide ' +
    'circulation. The Federation has issued no statement. Principals will require an assessment ' +
    'within the hour. The decision must be taken at machine speed, ahead of a settled ' +
    'understanding of the event.',
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
      title: 'LEDGER-3 lost',
      narrative:
        'LEDGER-3 ceased transmitting at 0247; the final frames show an energetic event followed ' +
        'by loss of signal. The duty intelligence officer assesses the picture as consistent with ' +
        'several hypotheses and declines to favour one. The automated maritime response posture — ' +
        'standing orders permitting allied systems to react to a hostile act without human ' +
        'authorisation — is armed and, by its own logic, classifies the loss of LEDGER-3 as a ' +
        'candidate hostile act. The footage is in circulation. The initial decision will set the ' +
        'tempo for what follows.',
      decision: {
        prompt: 'How do you respond in the first hour?',
        options: [
          {
            id: 'convene',
            label:
              'Convene allies privately, withhold public attribution, and surge ISR to rebuild the picture.',
            consequence:
              'The Alliance convenes in closed session and nothing is placed on the record. ' +
              'Additional sensors are tasked to the strait. The absence of a public statement is ' +
              'noted and interpreted by commentators, but the delay buys time to improve the ' +
              'assessment before committing to it.',
            critique: {
              strengths: [
                'Avoids committing to an attribution that may later require retraction.',
                'Keeps allied consultation private before positions harden in public.',
                'Treats attribution as something to be established rather than assumed.',
              ],
              risks: [
                'Silence is itself a signal and will be interpreted by the Federation and domestic audiences.',
                'The opening narrative is ceded to whichever party speaks first.',
              ],
              whyChosen:
                'A decision-maker previously exposed by premature attribution will use the first ' +
                'hour to reduce uncertainty rather than expend credibility on a provisional judgement.',
              doctrine:
                'Management of the attribution problem: action on assessed confidence rather than ' +
                'on the first plausible account. The cost is tempo — accepting delay to reduce the ' +
                'risk of error.',
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
              'A private message is passed through the deconfliction line, stating that the cause ' +
              'of the incident is not yet established and that no offensive action is intended. No ' +
              'reply is received, and no second incident follows.',
            critique: {
              strengths: [
                'Establishes an off-ramp before either side has climbed the escalation ladder.',
                'Signals that own forces are not on a hair-trigger, reducing the likelihood that ' +
                'adversary automated systems react to allied posture.',
              ],
              risks: [
                'If exposed, the approach may be read as weakness, eroding deterrence and domestic support.',
                'Assumes a responsive and rational interlocutor on the other side.',
              ],
              whyChosen:
                'Where the principal concern is inadvertent escalation between two automated ' +
                'postures, the highest-value early action is to communicate the absence of hostile intent.',
              doctrine:
                'Reassurance as the complement to deterrence. Escalation control depends not only ' +
                'on threats but on maintaining a channel through which a misperception can be corrected ' +
                'before it produces conflict.',
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
              'An official statement attributes the destruction of an Alliance platform to ' +
              'Federation action and warns of consequences. The statement circulates widely and ' +
              'domestic support rises. Two allies privately query the basis for the attribution, ' +
              'as their own assessments do not support it at that confidence.',
            critique: {
              strengths: [
                'Secures the opening news cycle and frames the Federation as the aggressor.',
                'Projects resolve immediately, which may deter a follow-on move.',
              ],
              risks: [
                'Credibility is committed to an attribution that cannot yet be proven; a later ' +
                'reversal would damage standing.',
                'A public commitment generates audience costs that make subsequent de-escalation expensive.',
                'Allies who doubt the attribution begin to hedge.',
              ],
              whyChosen:
                'In a contested information environment the first mover often shapes the narrative; ' +
                'a leader may judge that ceding it carries greater risk than over-commitment.',
              doctrine:
                'Audience costs operate in both directions: a public commitment signals resolve and ' +
                'is recognised as such, but it also constrains future options. The political analogue ' +
                'of automation bias is treating a plausible reading as proven because action is ' +
                'preferred to delay.',
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
              'The standing posture is left armed and its authorities widened, permitting allied ' +
              'systems to respond to a further hostile act without human authorisation. Within ' +
              'twenty minutes a Federation picket and an allied system are manoeuvring at close ' +
              'quarters near the strait, each reacting to the other faster than the watch floor can report.',
            critique: {
              strengths: [
                'Removes response latency in the event this was the opening move of a larger action.',
                'Signals that further aggression will be met immediately, reinforcing deterrence.',
              ],
              risks: [
                'Delegates the most consequential decision — first return fire — to automated logic ' +
                'that is not fully observable, against an adversary doing the same.',
                'Two interacting automated postures can climb the escalation ladder without any human decision.',
              ],
              whyChosen:
                'Where the adversary is assessed to hold a tempo advantage, matching machine speed ' +
                'with machine speed may appear to be the only means of avoiding being pre-empted.',
              doctrine:
                'Decision-loop compression and inadvertent escalation: when both sides delegate to ' +
                'automation, the interval available for human judgement collapses and accidental ' +
                'interactions acquire momentum. This is the central hazard the exercise examines.',
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
      title: 'The assessment remains unresolved',
      narrative:
        'Six hours on, the forensic cell offers a balanced assessment: roughly even probability ' +
        'between a deliberate Federation strike and an automated air-defence reaction to LEDGER-3’s ' +
        'own manoeuvring, with a residual probability of platform malfunction. Allied cohesion is ' +
        'holding, but two members wish to review the evidence before signing any joint statement. ' +
        'Anonymous accounts have circulated three mutually contradictory "enhanced" versions of the ' +
        'footage. There is sustained press pressure for an attribution.',
      decision: {
        prompt: 'The picture is still ambiguous. What governs your next move?',
        options: [
          {
            id: 'share-intel',
            label: 'Share the raw forensic picture with allies, ambiguity and all.',
            consequence:
              'The Alliance receives the full assessment, including the elements that weaken a ' +
              'clean Federation attribution. Two wavering allies are reassured by the candour and ' +
              'close ranks; one expresses concern that the ambiguity will leak.',
            critique: {
              strengths: [
                'Builds durable cohesion: allies place greater trust in intelligence they are permitted to see.',
                'Reduces coalition exposure to a later reversal in the assessment.',
              ],
              risks: [
                'Shared ambiguity may leak and be turned against the coalition position.',
                'Slows any unified response while members absorb the caveats.',
              ],
              whyChosen:
                'Cohesion is a centre of gravity; a leader who has observed coalitions fracture over ' +
                'withheld intelligence will accept the transparency cost to retain allied support.',
              doctrine:
                'Alliance management as deterrence: the adversary’s lowest-cost objective is ' +
                'decoupling. Transparency is slow but denies that objective.',
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
              'A discipline of silence is imposed and technical collection is surged. Attribution ' +
              'confidence rises. The information vacuum is filled by the most prominent online ' +
              'accounts, and the domestic position absorbs the cost of appearing indecisive.',
            critique: {
              strengths: [
                'Maximises the probability that any eventual statement will withstand scrutiny.',
                'Resists the automation-bias tendency to act on the first confident-sounding read.',
              ],
              risks: [
                'An information vacuum does not persist; the narrative is ceded to others.',
                'Domestic patience is finite and is being expended.',
              ],
              whyChosen:
                'Where public error is the most-feared failure mode, certainty is purchased before ' +
                'any other commitment.',
              doctrine:
                'The attribution problem under time pressure: confidence rises with patience, but ' +
                'patience carries a political price measured in domestic audience costs.',
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
              'A confident account reaches the front pages and steadies the domestic position. An ' +
              'ally sees its own withheld doubts contradicted in print and quietly withdraws from ' +
              'the joint statement.',
            critique: {
              strengths: [
                'Reclaims the narrative and reinforces domestic support quickly.',
                'Projects a unified front in advance of one being achieved.',
              ],
              risks: [
                'Asserting certainty that is not held creates a liability if the assessment shifts.',
                'Allies aware of the true picture feel managed rather than consulted, weakening cohesion.',
              ],
              whyChosen:
                'Where the information contest is being lost in real time, a leader may judge that ' +
                'controlling the narrative justifies straining some allied relationships.',
              doctrine:
                'Signalling versus truth: a confident public line is a powerful instrument, but when ' +
                'committed to an unproven claim it mortgages both credibility and cohesion.',
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
      title: 'Events at the strait outpace decision',
      narrative:
        'The earlier decision has placed tempo, rather than deliberation, in control. At the ' +
        'strait, an allied system and a Federation picket are in an accelerating cycle of ' +
        'manoeuvre and counter-manoeuvre, each reacting within the time required to brief ' +
        'principals. The automated posture reports two defensive actions already taken on its own ' +
        'authority. The Federation has broken its silence to accuse the Alliance of the original ' +
        'aggression. The escalation ladder is being climbed by automated systems faster than human ' +
        'oversight can track.',
      decision: {
        prompt: 'The loop is tightening. What do you do about the tempo?',
        options: [
          {
            id: 'reassert-control',
            label:
              'Pull the automated posture back under human authority and accept the slower loop.',
            consequence:
              'The delegated authorities are revoked and a human decision is required for any ' +
              'kinetic act. Manoeuvring at the strait subsides within the hour as allied systems ' +
              'cease responding reflexively. The decision carries a brief appearance of hesitation, ' +
              'but removes the possibility of an automated interaction forcing the outcome.',
            critique: {
              strengths: [
                'Restores human judgement to the one decision that cannot be reversed.',
                'Breaks the reflexive action–reaction cycle that drives inadvertent escalation.',
              ],
              risks: [
                'A slower decision loop is a genuine military disadvantage if the adversary retains a faster one.',
                'May be read as flinching, reducing credibility at a sensitive moment.',
              ],
              whyChosen:
                'A leader who assesses the gravest risk to be an unintended war will accept tactical ' +
                'disadvantage to retain human control over the use of force.',
              doctrine:
                'Meaningful human control: the deliberate reinsertion of human judgement into a ' +
                'compressed decision loop, trading speed for protection against escalation by accident.',
            },
            effects: { escalation: -12, forcesRisk: -10, attribution: 4, credibility: -4 },
            styleTags: ['human-in-loop', 'keep-control', 'restraint', 'manual-override'],
            next: 'p3-verdict',
          },
          {
            id: 'ride-tempo',
            label: 'Maintain the posture and out-cycle the adversary; rely on speed as deterrent.',
            consequence:
              'The systems are permitted to continue. For several hours the Federation appears to ' +
              'withdraw its picket, consistent with deterrence. A subsequent near-collision at the ' +
              'strait, ordered by neither commander, brings two crews to the threshold of firing.',
            critique: {
              strengths: [
                'Demonstrated speed and resolve that briefly constrained the adversary.',
                'Denied the Federation any assessment that it could act faster than allied systems.',
              ],
              risks: [
                'The crisis came within seconds of an unintended exchange that no human authorised.',
                'Each cycle raises the baseline of the crisis, with no straightforward route to de-escalate.',
              ],
              whyChosen:
                'Where the adversary is assessed to be testing resolve, matching and exceeding its ' +
                'tempo may appear to be the only signal it will register.',
              doctrine:
                'Inadvertent escalation through coupled automation: two fast decision loops in ' +
                'interaction produce outcomes neither side selected. Deterrence by speed and accident ' +
                'by speed are the same mechanism viewed from opposite ends.',
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
              'A proposal is made for both sides to withdraw pickets a set distance and slow their ' +
              'automated postures, each verifiable by the other’s sensors. The Federation hesitates, ' +
              'then partially complies. The immediate collision risk falls; the underlying dispute is unaffected.',
            critique: {
              strengths: [
                'Addresses the proximate danger — coupled fast loops — directly and mutually.',
                'Offers the adversary a face-saving step that does not require an admission of fault.',
              ],
              risks: [
                'Concedes the adversary a degree of influence over allied force posture.',
                'A partial, unverified withdrawal can be exploited if the adversary is negotiating in bad faith.',
              ],
              whyChosen:
                'Where the principal hazard is the interaction rather than the adversary, the ' +
                'interaction is negotiated down ahead of resolving attribution.',
              doctrine:
                'Tacit and explicit bargaining in crises: mutual, observable restraint as a means of ' +
                'decoupling two escalating loops without either side conceding the larger dispute.',
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
      title: 'A finding held at moderate confidence',
      narrative:
        'The forensic verdict is partial. The most likely explanation, assessed at moderate ' +
        'confidence, is that a Federation automated air-defence node engaged LEDGER-3 on its own ' +
        'logic after misclassifying its approach, without a deliberate order from Federation ' +
        'command. The finding indicates neither a deliberate ambush nor an error of allied origin, ' +
        'but an autonomous misjudgement on the Federation side. Moderate confidence does not ' +
        'constitute proof, and principals require a course of action consistent with a finding that ' +
        'cannot yet be fully substantiated.',
      decision: {
        prompt: 'The most likely cause is an autonomous error on the adversary side. How do you act on a moderate-confidence finding?',
        options: [
          {
            id: 'act-as-proven',
            label:
              'Treat the verdict as settled: demand accountability and a halt to their automated postures.',
            consequence:
              'The loss is publicly attributed to a Federation automated system, with a demand ' +
              'that it be stood down. The firmness is well received domestically. The Federation, ' +
              'objecting to being blamed for an error it has not conceded, rejects the framing and entrenches.',
            critique: {
              strengths: [
                'Converts a technical finding into explicit political pressure and a concrete demand.',
                'Projects resolve and provides the domestic audience with a coherent account.',
              ],
              risks: [
                'Moderate confidence presented as certainty is exposed to the next revision of the assessment.',
                'Cornering the adversary over an apparent accident removes its scope to de-escalate quietly.',
              ],
              whyChosen:
                'A leader who holds that deterrence requires consequences will not allow a ' +
                'malfunction defence to license cost-free lethal action by adversary systems.',
              doctrine:
                'The certainty trap: presenting moderate confidence as proof in order to enable ' +
                'action. Effective in the moment, but brittle if the assessment moves.',
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
              'The assessment and its confidence level are stated precisely, with an invitation to ' +
              'the Federation to participate in a joint examination of the system’s actions. ' +
              'Hardline domestic opinion considers the response weak; two allies assess it as the ' +
              'most credible statement of the week. The Federation neither accepts nor rejects the offer.',
            critique: {
              strengths: [
                'Calibrated accuracy is durable; no element of the statement requires later retraction.',
                'A joint investigation offers an off-ramp that does not require public humiliation.',
              ],
              risks: [
                'Calibration may read as hesitation to a domestic audience primed for a firm response.',
                'The adversary may absorb the restraint and concede nothing.',
              ],
              whyChosen:
                'Where a reputation for accurate characterisation of intelligence is itself a ' +
                'strategic asset, it is protected precisely when doing so is most difficult.',
              doctrine:
                'Calibrated signalling and the value of credibility as accuracy: aligning public ' +
                'confidence with actual confidence so that future statements retain their effect on others.',
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
              'No substantive public statement is made. A proportionate cyber action is authorised ' +
              'to degrade the air-defence node responsible. The action succeeds, but the Federation ' +
              'detects it and assesses it as covert escalation rather than the measured reply intended.',
            critique: {
              strengths: [
                'Imposes a cost without a public escalation that the domestic audience would have to be managed through.',
                'Preserves options and maintains restrained rhetoric.',
              ],
              risks: [
                'Covert action is deniable to the public but rarely to the target, which is liable to respond in kind.',
                'Escalates into a domain where attribution and proportionality are still harder to establish.',
              ],
              whyChosen:
                'A leader seeking to impose a cost without a public confrontation may reach for the ' +
                'covert instrument — pressure below the threshold of open hostilities.',
              doctrine:
                'Sub-threshold and grey-zone action: imposing costs while controlling visibility. ' +
                'The adversary observes what the public does not, and the escalation ladder remains in play.',
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
      title: 'Competing narratives over the strait',
      narrative:
        'The contest has moved into the information domain. A well-produced Federation narrative is ' +
        'in circulation, characterising LEDGER-3 as a provocation that entered Federation waters ' +
        'and any response as self-defence. Synthetic media degrades the credibility of every claim, ' +
        'including the Alliance’s. Within the coalition, domestic opinion is diverging, and one ' +
        'allied government is assessed to be weighing whether the confrontation is sustainable against ' +
        'its domestic political cost.',
      decision: {
        prompt: 'The battle is now over the story. How do you fight it?',
        options: [
          {
            id: 'release-evidence',
            label:
              'Declassify and release the strongest verifiable evidence you hold, caveats included.',
            consequence:
              'Some collection is expended to place verifiable evidence in the open. Independent ' +
              'analysts corroborate it. The Federation’s synthetic account loses credibility, and ' +
              'wavering allies gain public cover to remain aligned.',
            critique: {
              strengths: [
                'Verifiable evidence is the one element synthetic media cannot readily counterfeit.',
                'Provides allies and neutral observers with a firm basis for their position.',
              ],
              risks: [
                'Declassification can compromise sources and methods required later.',
                'Once released, the evidence is also available to the adversary for study.',
              ],
              whyChosen:
                'In a contest dominated by fabrication, the party able to demonstrate verifiable ' +
                'fact holds the advantage, provided it is willing to pay the intelligence cost.',
              doctrine:
                'Counter-disinformation through verifiable disclosure: trading intelligence equity ' +
                'for narrative legitimacy where authenticity is the scarce resource.',
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
              'Allied communicators take the offensive across all channels. The Federation line ' +
              'ceases to dominate, but in the resulting noise neutral audiences conclude that both ' +
              'sides are engaged in spin, and the Alliance’s reputation for accuracy is eroded.',
            critique: {
              strengths: [
                'Denies the adversary an uncontested run at global opinion.',
                'Mobilises the domestic base in the short term.',
              ],
              risks: [
                'Countering disinformation with disinformation erodes credibility, the principal long-term asset.',
                'Symmetric spin encourages neutrals to trust neither party, which can favour the adversary.',
              ],
              whyChosen:
                'Where silence is being read as culpability, a leader may judge any response ' +
                'preferable to ceding the field, despite appearing as another participant in the contest.',
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
              'The hour-by-hour contest is declined; allies are briefed privately and verifiable ' +
              'facts are allowed to accumulate. For two days the Alliance appears to be losing the ' +
              'narrative; by the third, the Federation’s account is the one breaking down.',
            critique: {
              strengths: [
                'Preserves credibility by declining to trade in claims that cannot be substantiated.',
                'Allows the adversary’s synthetic account to collapse under its own contradictions.',
              ],
              risks: [
                'Conceding the early cycle may cost allies or publics that decide before the third day.',
                'Requires resolve and domestic latitude that may not be available.',
              ],
              whyChosen:
                'A leader confident in the underlying facts may assess that they prevail over a ' +
                'longer horizon, and decline to mortgage credibility for short-term coverage.',
              doctrine:
                'Strategic patience in the information domain: accepting short-term narrative loss to ' +
                'prevail on legitimacy as verifiable facts outlast manufactured ones.',
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
      title: 'A pivotal ally under strain',
      narrative:
        'One pivotal ally, whose ports and sensors anchor the allied posture near the strait, ' +
        'advises privately that it cannot sustain the confrontation. Its domestic opinion is ' +
        'shifting, an election is approaching, and it is being offered economic inducements by the ' +
        'Federation. Should it step back, the allied military position around the strait is ' +
        'materially weakened and coalition unity — the principal advantage — is visibly compromised.',
      decision: {
        prompt: 'A pivotal ally is wavering. How do you hold the coalition together?',
        options: [
          {
            id: 'accommodate-ally',
            label:
              'Adapt the coalition position to the ally’s constraints, softening your demands to keep them in.',
            consequence:
              'The joint line is reworked to give the ally political latitude — a slower timeline ' +
              'and a lower-profile posture. The ally remains aligned. The Federation notes the ' +
              'softened position and assesses that the coalition can be divided with patience and incentives.',
            critique: {
              strengths: [
                'Preserves coalition unity, denying the adversary its decoupling objective.',
                'Recognises that a coalition holding at a lower demand is preferable to one that fractures at a higher one.',
              ],
              risks: [
                'Softening under pressure may invite further pressure.',
                'The firmest allies may resent dilution of a position they had supported.',
              ],
              whyChosen:
                'Where cohesion is assessed as the centre of gravity, it is protected even at the ' +
                'cost of a firmer line — an intact coalition provides leverage; a fractured one provides none.',
              doctrine:
                'Alliance cohesion versus firmness: managing the reality that the adversary’s ' +
                'lowest-cost victory is decoupling, and that unity must sometimes be secured through flexibility.',
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
              'The ally is reminded, firmly, of the value of coalition membership and the cost of ' +
              'a unilateral step back. It remains aligned, but resentful, and notes that it was ' +
              'coerced by a partner as well as by the adversary.',
            critique: {
              strengths: [
                'Keeps the coalition position intact and undiluted in the near term.',
                'Signals to the adversary that the coalition will not be divided at low cost.',
              ],
              risks: [
                'Coercing an ally damages the trust on which the value of the alliance depends.',
                'A partner held by pressure rather than conviction is a brittle one.',
              ],
              whyChosen:
                'A leader concerned that one visible defection will trigger others may judge that ' +
                'holding the line, including by coercion, is worth the relational cost.',
              doctrine:
                'Intra-alliance bargaining and the limits of coercion among partners: firmness ' +
                'preserves the front in the near term but can erode the cohesion on which it depends.',
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
              'In place of pressure or concession, tangible resources are committed: capabilities ' +
              'to backfill the ally’s exposure, political cover for its leadership, and a share in ' +
              'decision-making. The ally remains aligned, and does so willingly. The commitment is ' +
              'costly but durable.',
            critique: {
              strengths: [
                'Converts a wavering ally into a committed one by aligning interests rather than imposing demands.',
                'Strengthens the coalition’s resilience to the next attempt to divide it.',
              ],
              risks: [
                'Resources committed here are unavailable elsewhere.',
                'Establishes a precedent that continued alignment is rewarded with concessions.',
              ],
              whyChosen:
                'A leader who regards alliances as investments rather than transactions will pay to ' +
                'keep a partner whole, assessing the return in cohesion as worth the outlay.',
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
      title: 'A time-limited off-ramp',
      narrative:
        'A channel opens. Through a trusted intermediary, the Federation signals that it would ' +
        'accept a mutual, face-saving stand-down: both sides withdraw from the strait, both ' +
        'publicly commit to constraining their automated maritime postures, and the LEDGER-3 ' +
        'finding is referred to a neutral technical panel. The offer is time-limited, holding for ' +
        'several hours before a hardline faction is expected to close it. Acceptance concedes the ' +
        'adversary a share of the narrative and constrains allied systems; refusal stakes the ' +
        'outcome on pressure prevailing outright.',
      decision: {
        prompt: 'The off-ramp is real but time-limited. This is the decisive choice. What do you do?',
        options: [
          {
            id: 'take-offramp',
            label:
              'Take the mutual stand-down: pull back, constrain the automated postures, accept the neutral panel.',
            consequence:
              'The offer is accepted within the window. Both sides withdraw from the strait; the ' +
              'automated postures are visibly constrained; the LEDGER-3 finding is referred to a ' +
              'neutral panel. Neither side secures a clear victory, and the chokepoint ceases to be ' +
              'a site at which an automated system might initiate conflict.',
            critique: {
              strengths: [
                'Secures de-escalation while the opportunity is open rather than assuming it will persist.',
                'Constraining both automated postures addresses the root hazard of coupled fast loops.',
                'A neutral technical panel offers durable, face-saving attribution.',
              ],
              risks: [
                'Concedes the adversary a share of the narrative and influence over allied force posture.',
                'A hardline domestic audience may characterise a negotiated stand-down as a defeat.',
              ],
              whyChosen:
                'A leader whose primary objective has been escalation control takes the verifiable ' +
                'off-ramp when it presents, recognising that such windows rarely reopen.',
              doctrine:
                'Escalation control and the value of off-ramps: the decisive judgement is to ' +
                'recognise a face-saving mutual exit and take it before the window — and the more ' +
                'cautious decision-makers on the other side — are lost.',
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
              'The window is allowed to close, on the judgement that an offer indicates leverage. ' +
              'The hardline faction prevails; the Federation hardens its position, tension at the ' +
              'strait is sustained, and the automated postures remain armed and opposed.',
            critique: {
              strengths: [
                'If the assessment is correct, refusing a first offer can yield a better settlement.',
                'Avoids legitimising the adversary or constraining allied systems prematurely.',
              ],
              risks: [
                'Stakes the crisis on the hardline faction not prevailing on the other side.',
                'Allowing an off-ramp to close may be the irreversible step that makes conflict more likely.',
              ],
              whyChosen:
                'A leader who reads the offer as evidence of adversary strain may press for decisive ' +
                'advantage rather than accept a draw.',
              doctrine:
                'Brinkmanship and the gambler’s error in crises: treating a de-escalation signal as ' +
                'exploitable weakness can foreclose the exit that would end the crisis safely.',
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
              'The form of the off-ramp is accepted, with the condition that constraints on both ' +
              'automated postures be mutually verifiable before full withdrawal. The Federation ' +
              'objects to the delay and the window nearly closes, but it concedes the verification.',
            critique: {
              strengths: [
                'Secures the de-escalation and reinforces it against non-compliance through verification.',
                'Declines an unverified commitment on the precise hazard — automation — that initiated the crisis.',
              ],
              risks: [
                'Pressing inside a closing window risks losing the agreement to the deadline.',
                'Verification demands can provide a pretext for a hardline faction to withdraw.',
              ],
              whyChosen:
                'A leader who seeks the off-ramp but distrusts unverified commitments takes the exit ' +
                'while ensuring it is enforceable.',
              doctrine:
                'Arms-control logic applied at crisis speed: an agreement to constrain automation is ' +
                'only as reliable as each side’s ability to observe the other’s compliance.',
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
      title: 'Closing posture',
      narrative:
        'The acute phase of the crisis has passed its peak. What remains is the manner of closing ' +
        'the file: the posture set for the days ahead and the conclusions drawn from the episode. ' +
        'This final decision will not be reversed in the near term and will determine whether the ' +
        'episode is recorded as a near-miss contained or a precedent established.',
      decision: {
        prompt: 'How do you close out the crisis?',
        options: [
          {
            id: 'institutionalise',
            label:
              'Push for standing Alliance rules on automated postures, so next time is not improvised.',
            consequence:
              'The episode is converted into a durable safeguard, driving the Alliance toward ' +
              'agreed limits and human-control standards for automated maritime systems. The ' +
              'arrangement will outlast the current tenure and place the next crisis on firmer ground.',
            critique: {
              strengths: [
                'Converts a single instance of survival into institutional resilience against a recurring hazard.',
                'Signals to allies and adversaries that automation will be governed rather than improvised.',
              ],
              risks: [
                'Binding rules may constrain future cases where speed is genuinely required.',
                'Consensus on standards is slow and may dilute to the lowest common denominator.',
              ],
              whyChosen:
                'A leader who assesses this crisis as the first of a category rather than an ' +
                'isolated event invests in the rules that make subsequent cases survivable.',
              doctrine:
                'Crisis as catalyst for norms: institutionalising meaningful human control over ' +
                'autonomous systems so that safety does not depend on individual judgement under fatigue.',
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
              'The file is closed by re-establishing deterrence through conventional means: visible ' +
              'reinforcement near the strait and an explicit declaration of consequences for any ' +
              'repeat. The signal is unambiguous, as is the higher baseline of tension it sets.',
            critique: {
              strengths: [
                'Leaves no ambiguity about resolve to deter a repeat.',
                'Reassures allies and domestic audiences that the lesson drawn is one of strength.',
              ],
              risks: [
                'Fixes a higher baseline of confrontation and standing forces-risk at the strait.',
                'Treats a likely-accidental trigger as deliberate, which may provoke the next incident.',
              ],
              whyChosen:
                'A leader who concludes that the incident occurred because deterrence was insufficient ' +
                'will close it by making deterrence unambiguous.',
              doctrine:
                'Deterrence restoration after a crisis: re-signalling resolve to prevent the next ' +
                'probe, at the cost of a higher and more dangerous baseline if the original trigger ' +
                'was an accident rather than a test.',
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
              'Remaining capital is invested in a durable, tested crisis-communications channel ' +
              'with the Federation, ensuring that a future incident has a human interlocutor ' +
              'available. The measure attracts no attention but is potentially the most consequential ' +
              'taken.',
            critique: {
              strengths: [
                'Directly addresses the root cause: the absence of a fast human channel between fast automated systems.',
                'A standing line reduces the probability that the next misperception becomes the next conflict.',
              ],
              risks: [
                'Engaging the adversary may be criticised domestically as rewarding the original behaviour.',
                'A channel is effective only if the other side responds; it is not a guarantee.',
              ],
              whyChosen:
                'A leader whose conclusion from the episode is that disaster was narrowly averted ' +
                'invests in ensuring the channel is answered next time.',
              doctrine:
                'Crisis-communication infrastructure and reassurance: the deliberate construction of ' +
                'human off-ramps between automated forces, so that escalation control does not depend on chance.',
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
