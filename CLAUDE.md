# CLAUDE.md — War Games (project)

Supplements the global CLAUDE.md. If anything here conflicts with the global
file, flag it rather than silently following.

## What this project is

A public, data-driven, single-player strategic decision simulator for the War
Studies community, deployed to GitHub Pages. See `PRIMER.md` for current status
and `SCHEMA.md` for the scenario authoring contract.

## Non-negotiables

- **British English** in all copy, comments and docs.
- **Fictional only.** No real states, public figures, or attributed quotes to
  real people. Critique grounds in genuine concepts but **never** invents
  citations, figures or report numbers.
- **Scenarios are data, not code.** Author content in `src/scenarios/`; do not
  reach into the engine to special-case a scenario. If the schema must grow, grow
  it deliberately and update `SCHEMA.md`.
- **Offline-complete.** The authored critique and the whole game must work with no
  network and no API key. The AI panel is strictly optional and keyless-safe; no
  secrets in the repo, ever.
- **Reconvergent DAG, state-driven endings.** Do not build full branching trees;
  do not make endings depend on the last click.

## Workflow

- Branches: `dev` working, `main` stable/deploys. `feature/* → dev → main`.
- **No Claude co-author lines in commits.** Commits under the owner's identity only.
- Log pushes in `CHANGELOG.md`; log bugs/ideas in `ISSUES.md`; update `PRIMER.md`
  at the end of each session.
- `npm run build` before committing — it type-checks scenario data against the
  schema.
- Use the specialist agents in `.claude/agents/` by responsibility.

## Quality floor

Responsive to mobile; visible keyboard focus; `prefers-reduced-motion` respected.
The aesthetic is "exercise command console" — dark slate, monospace as the data
voice, metrics carry the only strong colour, classification-strip motif.
Deliberately not terminal-green-on-black.
