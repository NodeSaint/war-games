# PRIMER — read this first

> Session-continuity file. Anyone (human or AI) picking up this project should be
> able to read this one screen and know exactly where things stand and what to do
> next. **Update it at the end of every session.**

## What this is

**War Games** — a public, data-driven strategic decision simulator for the War
Studies community. Single-player. You take a senior role in a fictional crisis,
make decisions, see them critiqued, and get a debrief on how you decide. Deploys
to GitHub Pages. British English throughout.

Live URL: `https://nodesaint.github.io/war-games/`

## Architecture in one breath

- **Vite + React 19 + TS** · Tailwind v4 + shadcn/ui · Zustand (localStorage persist) · HashRouter.
- **Scenarios are data, not code.** Engine renders any object conforming to the
  schema in `SCHEMA.md`. Add a war game = add a file in `src/scenarios/` + one
  line in `src/scenarios/index.ts`. No engine edits.
- **Reconvergent DAG** with **state-driven endings**: branches reconverge; the
  ending is computed from final metrics + style tags via `resolveEnding`, not
  from the last click.
- **Six metrics** (0–100): attribution (centrepiece), escalation, credibility,
  cohesion, domestic, forcesRisk.
- **Hybrid critique**: authored critique works fully offline; an optional
  BYO-Anthropic-key panel adds an AI tutor debrief (key stays in the browser).

## Map of the code

```
src/engine/    types · metrics · endings · profile · debrief · store(zustand) · ai
src/components/ InstrumentCluster, AttributionGauge, MetricBar, PhaseTracker,
               DossierCard, CritiqueReveal, ProfileSpectrum, AiAnalysisPanel,
               AppShell, ClassificationStrip, ui/ (shadcn)
src/routes/    Catalog · Briefing · Play · Debrief · About
src/scenarios/ index(registry) · silent-ledger(flagship) · …
```

## Workflow / conventions

- Branches: **`dev`** is the working branch, **`main`** is stable and deploys to
  Pages via `.github/workflows/deploy.yml`. Flow: `feature/* → dev → main`.
- Commits: authored solely under the owner's identity. **No Claude co-author lines.**
- Log every push in `CHANGELOG.md`. Log every bug/idea in `ISSUES.md`.
- Specialist agents live in `.claude/agents/` (scenario-author, critique-designer,
  engine-dev, deploy) — delegate by responsibility.
- `npm run dev` (serves at `/war-games/`) · `npm run build` (also type-checks
  scenario data) · `npm run lint`.

## Status — where we are

**MVP is built, deployed and live.** Engine, instrument-cluster UI, debrief with
decision profile, and the BYO-key AI panel are all in. Three scenarios shipped:
**SILENT LEDGER** (7-phase, Advanced, flagship), **GREY CASCADE** (4-phase,
Intermediate, AI-cyber), **NIGHT CROSSING** (2-phase, Introductory). Build green;
live at https://nodesaint.github.io/war-games/ with assets resolving at base path.

## Next up (see tasks/todo.md and ISSUES.md)

1. Manual playtest pass in a browser: walk each scenario to a debrief on desktop
   and mobile; confirm endings diverge by state, deep links and resume work.
2. Accessibility sweep (focus order, gauge labelling, mobile sidebar,
   reduced-motion).
3. A few unit tests around `applyEffects`, `signalLevel`, `resolveEnding`,
   `computeProfile` (no test runner installed yet — add Vitest).
4. Then the roadmap items in ISSUES.md (more domains, group mode, authoring UI).

## How to run a productive session on this project

1. Read this PRIMER, then `tasks/todo.md` and `ISSUES.md`.
2. Pick ONE slice of work; if it's non-trivial, plan before coding.
3. Author content with the `scenario-author` / `critique-designer` agents; keep
   the engine untouched unless the schema genuinely needs to grow.
4. `npm run build` before every commit (it type-checks the data).
5. Update CHANGELOG, ISSUES, and this PRIMER before you stop.
