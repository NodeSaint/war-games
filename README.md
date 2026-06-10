# War Games — Strategic Decision Simulator

A public, data-driven war-gaming simulator for the War Studies community. Step
into a senior role in a fictional crisis, make the decisions events force on you,
watch the situation evolve, and receive a debrief on how *you* decide.

**▶ Play: https://nodesaint.github.io/war-games/**

> **Exercise only.** Every scenario, state, actor and event is fictional. Nothing
> here is operational, predictive, or an assessment of any real country,
> organisation or person. It is a training and thinking aid.

---

## What it does

- **Branching scenarios** that shift with your decisions — a reconvergent
  decision graph, not a fixed script.
- **A live instrument cluster** — six strategic metrics and an attribution gauge
  that move in real time as choices land.
- **Authored critique after every decision** — strengths, risks, the reasoning a
  competent leader might use, and a doctrinal note. Works fully offline.
- **A debrief on how you think** — your decision-making profile across four
  tendency spectrums, your strengths and blind spots, the roads not taken, and
  how it reflects real decision-making.
- **Optional AI deep-analysis** — bring your own Anthropic API key (held only in
  your browser) for a personalised tutor's debrief.

## Why it's built this way

Scenarios are **data, not code**. One engine renders any war game written to the
schema in [`SCHEMA.md`](./SCHEMA.md), so researchers and educators can author new
exercises — different domains, different lengths — without touching the engine.

## Tech

Vite · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Zustand · React Router
(HashRouter). No backend; deploys as a static site to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # serves at http://localhost:5173/war-games/
npm run build    # production build; also type-checks scenario data
npm run lint
```

### Authoring a scenario

Read [`SCHEMA.md`](./SCHEMA.md). In short: add a file to `src/scenarios/`
exporting a `Scenario`, then register it in `src/scenarios/index.ts`. `npm run
build` type-checks your data against the schema.

## Project docs

- [`SCHEMA.md`](./SCHEMA.md) — the scenario authoring contract.
- [`PRIMER.md`](./PRIMER.md) — session-continuity / where things stand.
- [`CHANGELOG.md`](./CHANGELOG.md) — change log.
- [`ISSUES.md`](./ISSUES.md) — known issues and ideas.

## Branching & deploy

`dev` is the working branch; `main` is stable and auto-deploys to GitHub Pages
via GitHub Actions. Flow: `feature/* → dev → main`.

## Roadmap

More scenarios across domains; multi-role and facilitated group play; a scenario
authoring UI; and a possible packaged app/web-game build. See `PRIMER.md`.

## Licence

Released under the MIT Licence — see [`LICENSE`](./LICENSE).
