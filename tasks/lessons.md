# Lessons

Patterns and corrections captured during development, so the same mistake is not
made twice. Add to this after any correction or non-obvious gotcha.

## Build / tooling

- **TypeScript 6 deprecates `baseUrl`.** With `moduleResolution: "bundler"`, set
  path aliases via `paths` alone (no `baseUrl`) and mirror the alias in
  `vite.config.ts` `resolve.alias`. Using `baseUrl` fails the build under TS 6.
- **`noUnusedParameters` is on.** Prefix intentionally-unused params with `_`
  (e.g. `resolveEnding(m, _tally, _path)`), or the build fails.
- **GitHub Pages base path.** `vite.config.ts` `base: '/war-games/'` must match the
  repo name; the dev server then also serves under `/war-games/`. HashRouter is
  used so deep links never 404 on static hosting.

## Design decisions (the why)

- **Scenarios as data** keeps the engine stable and lets non-engineers author
  games. Resist the urge to special-case a scenario in engine code.
- **State-driven endings** (not last-click) are what make two playthroughs
  diverge. Balance metric deltas across the whole graph, not per option.
- **Reconvergent DAG**, not a full tree: branch early, funnel back, vary state.
  A full tree is un-authorable.

## Process

- Get the deploy plumbing validated early (hello deploy) before piling on
  features — base-path and Pages config are the usual failure points.
