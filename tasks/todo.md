# Todo

Working task list. Mirrors the live session tasks; keep checkable items here for
continuity across sessions.

## Build order

- [x] 1. Scaffold repo, docs, agents; Vite/React/TS/Tailwind/shadcn/Zustand;
  Pages Action + correct `base`; HashRouter.
- [x] 2. Engine: schema types, store, `applyEffects`, `resolveEnding`, save/resume.
- [x] 3. Instrument-cluster UI + scene loop + catalogue/briefing/debrief screens.
- [x] 4. Author SILENT LEDGER end-to-end (7-phase reconvergent DAG).
- [x] 6. BYO-key AI deep-analysis panel (built early; Debrief depends on it).
- [x] First Pages deploy → confirmed live; assets resolve at base path.
- [x] 5. Add NIGHT CROSSING (2-step) + GREY CASCADE AI-cyber (4-step) scenarios.

## Follow-ups

- [ ] Playtest SILENT LEDGER across ≥3 routes; confirm endings diverge by state.
- [ ] Accessibility pass (focus order, gauge labels, mobile sidebar, reduced-motion).
- [ ] Unit tests: `applyEffects`, `signalLevel`, `resolveEnding`, `computeProfile`.
- [ ] Authoring lint for fabricated citations / real-person names.

## Review

_Add a short review section here at the end of each session: what changed, what
was verified, what's left._

### 2026-06-10
- Built the full MVP vertical slice (engine + UI + flagship scenario + AI panel).
- `npm run build` green; dev server serves correctly at `/war-games/`.
- Remaining before "done": confirm live deploy; add the two shorter scenarios;
  playtest; a11y + tests.
