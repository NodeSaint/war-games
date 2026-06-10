# Changelog

All notable changes to War Games are recorded here. Every push to a shared branch
should add an entry: date, branch, and a short summary.

## 2026-06-10 — `main` — Catalogue expanded + first live deploy confirmed

**Added**

- **GREY CASCADE** — 4-phase AI-enabled cyber escalation against critical
  infrastructure (Intermediate); reconvergent DAG branching containment vs
  active-defence, reconverging at a public "cascade" moment.
- **NIGHT CROSSING** — 2-phase introductory drone-swarm border ROE exercise;
  proves the catalogue's varying length.

**Verified**

- First GitHub Pages deploy is live at `https://nodesaint.github.io/war-games/`;
  hashed JS/CSS assets resolve correctly at the `/war-games/` base path (200).
- `npm run build` green with all three scenarios.

## 2026-06-10 — `dev` — Initial MVP vertical slice

**Added**

- Project scaffold: Vite + React 19 + TypeScript, Tailwind v4, shadcn/ui (new-york),
  Zustand, HashRouter. `base: '/war-games/'` for GitHub Pages.
- GitHub Actions workflow deploying `main` to GitHub Pages.
- **Engine** (`src/engine/`): scenario schema types; six-metric model with
  polarity-aware signalling, clamping and `applyEffects`; `resolveEnding`
  state-driven archetype classifier; style-tag tally and four-axis decision
  `profile`; debrief insight derivation; Zustand session store with localStorage
  save/resume; BYO-key Anthropic client.
- **UI**: command-console design system; instrument cluster (attribution gauge +
  metric bars + phase tracker); classification-strip motif; catalogue dossier
  cards; briefing, scene-loop (with rationale capture and authored critique
  reveal), and debrief screens; optional AI deep-analysis panel; About page.
- **Content**: flagship scenario **SILENT LEDGER** — AI / autonomous escalation at
  a maritime chokepoint — authored end-to-end as a 7-phase reconvergent DAG with
  full narrative and authored critique.
- **Docs**: `SCHEMA.md` (authoring contract), `PRIMER.md`, `README.md`,
  `ISSUES.md`, `tasks/todo.md`, `tasks/lessons.md`, and four specialist agents in
  `.claude/agents/`.

_Pending: first Pages deploy confirmation; two shorter scenarios (NIGHT CROSSING,
AI-cyber); playtest pass; accessibility + tests._
