# Issues & Ideas Log

Running log of bugs, risks, limitations and ideas. Keep it honest — an empty
issues list on a real project is a smell, not a badge.

Format: `- [STATUS] (area) description — note`. STATUS ∈ OPEN / IN-PROGRESS /
DONE / WONTFIX.

## Open

- [OPEN] (deploy) First Pages deploy not yet confirmed rendering live. Verify the
  `base` path resolves assets and that HashRouter deep links work on Pages.
- [OPEN] (content) Only one scenario (SILENT LEDGER) shipped. Catalogue needs the
  two shorter games to demonstrate varying length: NIGHT CROSSING (2-step) and an
  AI-cyber escalation (4-step).
- [OPEN] (testing) No automated tests yet. Priority targets: `applyEffects`
  clamping, `signalLevel` polarity, `resolveEnding` archetype boundaries,
  `computeProfile` axis maths.
- [OPEN] (a11y) Needs a deliberate accessibility pass: focus order through the
  scene loop, screen-reader labelling of the gauge, mobile layout of the
  instrument sidebar, reduced-motion verification.
- [OPEN] (balance) SILENT LEDGER metric deltas are first-draft. Playtest multiple
  routes to confirm the full spread of endings is reachable and that no single
  option is dominant.
- [OPEN] (content-safety) Add a lightweight authoring lint (or CI check) that
  flags fabricated-looking citations or real-person names in scenario prose.

## Ideas / backlog

- [OPEN] (feature) Save & share a debrief (export to PDF / shareable summary).
- [OPEN] (feature) Multi-role single-player: rotate through several seats in one
  playthrough.
- [OPEN] (feature) Facilitated group mode (needs a realtime backend — the "make
  it an app" path; Firebase preferred).
- [OPEN] (feature) Scenario authoring UI so non-engineers can build games without
  editing TypeScript.
- [OPEN] (feature) Difficulty modifiers / "fog" mode that hides some metrics.
- [OPEN] (content) Scenario domains to add: Baltic hybrid/Article-5, maritime
  grey-zone, nuclear signalling, counter-disinformation, pandemic/biosecurity.

## Resolved

_(none yet)_
