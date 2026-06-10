# Issues & Ideas Log

Running log of bugs, risks, limitations and ideas. Keep it honest — an empty
issues list on a real project is a smell, not a badge.

Format: `- [STATUS] (area) description — note`. STATUS ∈ OPEN / IN-PROGRESS /
DONE / WONTFIX.

## Open

- [OPEN] (a11y/playtest) Live deploy confirmed serving, but not yet manually
  played end-to-end in a browser. Walk each scenario to a debrief on desktop and
  mobile; confirm HashRouter deep links and resume-from-localStorage behave.
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

- [DONE] (deploy) First Pages deploy confirmed live; assets resolve at base path.
- [DONE] (content) Two shorter scenarios shipped: GREY CASCADE (4-step) and
  NIGHT CROSSING (2-step). Catalogue now demonstrates varying length.
