# Scenario Authoring Schema

War Games scenarios are **data, not code**. One engine renders any object that
conforms to this schema, so you can author a new war game — any domain, any
length — without touching the engine. This document is the complete authoring
contract.

A scenario is one TypeScript file in `src/scenarios/` exporting a `Scenario`
object, registered with a single line in `src/scenarios/index.ts`. The canonical
worked example is `src/scenarios/silent-ledger.ts`.

---

## 1. The shape

```ts
interface Scenario {
  id: string            // kebab-case, unique, used in URLs
  codename: string      // display name, e.g. "SILENT LEDGER"
  domain: string        // short tag, e.g. "AI / Autonomous Escalation"
  basis: string         // one-line real-world basis (concepts, not citations)
  difficulty: 'Introductory' | 'Intermediate' | 'Advanced'
  estPhases: number     // longest-path phase count; drives the phase tracker
  role: string          // who the player is
  brief: string         // briefing prose; split paragraphs with "\n\n"
  objectives: string[]  // 3–4 learning objectives
  metricsInit: Metrics  // opening values, each 0–100
  startNodeId: string   // id of the first node
  nodes: Node[]
}

interface Node {
  id: string
  phase: number         // 1-based
  phaseLabel: string    // e.g. "PHASE 2 · CONSULTATION"
  title: string
  narrative: string     // scene-setting; "\n\n" between paragraphs
  decision?: { prompt: string; options: Option[] }  // omit on terminal nodes
  terminal?: boolean    // true ends the scenario via the resolver
}

interface Option {
  id: string
  label: string         // the choice the player clicks
  consequence: string   // what happens immediately
  critique: {
    strengths: string[] // what is genuinely strong about this path
    risks: string[]     // the real costs / failure modes
    whyChosen: string   // the steelman — why a competent leader might pick it
    doctrine: string    // a War Studies concept grounding the choice
  }
  effects: Partial<Metrics>  // signed deltas, clamped to 0–100
  styleTags: string[]        // see §4 — drives the decision profile
  next: string | null        // next node id, or null to route to the ending
}
```

## 2. The six metrics

All run **0–100**. Polarity matters: for two of them, *lower is healthier*.

| Metric        | id            | Healthy direction | Meaning |
|---------------|---------------|-------------------|---------|
| Attribution   | `attribution` | high              | Confidence in who did what. The centrepiece. |
| Escalation    | `escalation`  | **low**           | How far up the ladder. Too low can read as weak. |
| Credibility   | `credibility` | high              | Resolve / deterrence signalled. |
| Cohesion      | `cohesion`    | high              | Alliance unity. |
| Domestic      | `domestic`    | high              | Public / political support. |
| Forces Risk   | `forcesRisk`  | **low**           | Exposure of own/allied forces & civilians. |

Keep deltas modest (single digits to mid-teens). Aim for **most options to move
3–5 metrics**, mixing gains and costs — a choice with only upside is not a
dilemma. Endings are computed from the *final* values, so balance your numbers
across the graph rather than per-click.

## 3. Reconvergent DAG — the structural rule

**Do not build a fully-branching tree.** It explodes combinatorially and becomes
un-authorable and un-maintainable. Instead:

- Branch early (Phase 1 sends players down 2–3 distinct tracks).
- **Reconverge**: those tracks funnel back into shared later nodes.
- Vary the `effects` so players arriving at a shared node by different routes
  arrive in **different states** — that is what makes their endings differ.

`SILENT LEDGER` branches at P1 into a consultation track and a machine-speed
track, both reconverging at the P3 "verdict" node, then runs a shared spine to
the climax. Aim for the same: a handful of nodes, richly cross-linked, not a
combinatorial explosion.

Set `next: null` (or point at a `terminal: true` node) on the final decision's
options. The engine then calls `resolveEnding(finalMetrics, styleTally, path)`
and classifies the outcome into an archetype — you do **not** author endings per
path.

## 4. Style tags — the decision profile

Each option carries `styleTags`. They aggregate across a playthrough into the
four-axis decision profile in the debrief. Use the canonical tags below so they
register on an axis (other tags are still fine — they surface elsewhere — but do
not move an axis):

| Axis | Pulls one way | Pulls the other |
|------|---------------|-----------------|
| **Posture** | `de-escalatory` `restraint` `off-ramp` `reassurance` | `escalatory` `forceful` `coercive` `brinkmanship` |
| **Alliance** | `multilateral` `consultative` `alliance-first` `burden-sharing` | `unilateral` `go-it-alone` `sovereign-action` |
| **Epistemics** | `evidence-seeking` `verify-first` `deliberate` `legalistic` | `decisive` `tempo` `act-on-instinct` `pre-emptive` |
| **Autonomy** | `human-in-loop` `keep-control` `manual-override` `caution-tech` | `delegate-autonomy` `machine-speed` `automation-trust` |

Tag honestly: a single option can carry tags from several axes. The axes are
defined in `src/engine/profile.ts` if you want to extend them.

## 5. Writing the critique well

The authored critique is the pedagogical core and must work offline. Good
critique:

- **Steelmans every option.** Even the worst choice has a `whyChosen` a real
  decision-maker would recognise. No strawmen.
- **Names real costs.** `risks` should sting, not hedge.
- **Grounds in concepts, never invents sources.** Reference genuine ideas
  (escalation control, the attribution problem, automation bias, audience costs,
  alliance decoupling, inadvertent escalation) — but never fabricate citations,
  figures, report numbers, or quotes from real people.
- **Stays fictional.** Invented states, actors and events only. No real public
  figures; no attributed quotes to real people.

## 6. Registering the scenario

```ts
// src/scenarios/index.ts
import { myScenario } from './my-scenario'
export const SCENARIOS: Scenario[] = [silentLedger, myScenario]
```

That is the only engine-adjacent change. Run `npm run build` to type-check your
data against the schema, then `npm run dev` to play it.

## 7. Checklist before you ship a scenario

- [ ] `id` is unique and kebab-case; `startNodeId` exists.
- [ ] Every `option.next` is either `null` or a real node id.
- [ ] The graph reconverges; it is not a full tree.
- [ ] Final states vary enough to reach at least 3 different endings.
- [ ] Every option has a genuine `whyChosen` and real `risks`.
- [ ] `styleTags` use the canonical vocabulary where they should move an axis.
- [ ] Entirely fictional; no real people, no invented citations.
- [ ] `npm run build` passes (this type-checks your data).
