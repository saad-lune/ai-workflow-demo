---
name: author-design-system
description: >-
  Create, update, or reconcile repository-level design-system documentation.
  Use when a project needs DESIGN.md, visual identity rules, design tokens,
  typography, color, spacing, shapes, component visual guidance, or shared
  design-system decisions before UX, architecture, or UI implementation.
---

# Author Design System

Create or update the repository's durable visual-system source of truth. This
skill owns shared visual identity, design tokens, and reusable component
appearance rules. It does not own feature-specific UX flows, implementation
tasks, production code, or visual QA.

## Stance

- Read available context before asking: existing design docs, PRDs, UX specs,
  exploration records, product docs, package files, theme/config files, global
  CSS, component libraries, and user-provided brand material.
- Do not ask questions that repo docs, code, or supplied sources can answer.
- Ask one decision question at a time. Provide 2-4 options and a recommended
  answer when context supports one.
- Propose coherent systems, not isolated color or font choices. Explain how
  tokens, typography, spacing, shape, and component appearance reinforce the
  product posture.
- Follow existing repo conventions when they are compatible. For new
  `DESIGN.md` files, follow the Google `DESIGN.md` spec.
- Keep `DESIGN.md` visual-system scoped. Route feature behavior, keyboard
  paths, screen-reader announcements, focus order, and flow-specific states to
  `author-ux`.

## Conversation Stance

Treat design-system authoring as alignment on product posture and reusable
visual rules:

1. Start by restating the product audience, product posture, inherited UI
   system, existing visual evidence, and the shared design-system gap.
2. Ask for missing brand or product intent only when it changes durable tokens,
   typography, color, spacing, shape, component appearance, or accessibility
   obligations.
3. Ask one visual-system decision at a time. Provide 2-4 coherent directions
   and a recommended answer grounded in the product, existing UI, or platform
   convention. State what evidence would change the recommendation.
4. Do not ask the user to invent token values from scratch when a principled
   default can be proposed. Offer concrete token choices and let the user
   accept, reject, or tune them.
5. When product posture or visual direction is unresolved, present 2-3 coherent
   system directions with trade-offs before committing tokens.
6. Separate durable reusable rules from feature-specific UX. Route behavior
   questions to `author-ux` and unresolved direction comparisons to
   `explore-ux`.
7. Before writing or restructuring `DESIGN.md`, preview the intended canonical
   path, major token decisions, inherited conventions, assumptions, lint plan,
   and unresolved blockers.

## Use This For

- Creating a new repository-level `DESIGN.md`.
- Updating an existing design system for new shared tokens, component visual
  rules, brand posture, accessibility styling, or platform inheritance.
- Reconciling existing design docs, CSS/theme tokens, component libraries, and
  PRD/UX needs into one canonical visual-system contract.
- Documenting shared visual decisions exposed by `scope-ux`, `author-ux`,
  `explore-ux`, or `review-ux` when those skills are available.

## Route Elsewhere

- UX slices, user flows, information architecture, microcopy, behavioral states,
  or accessibility behavior: use `author-ux`.
- Unresolved visual, layout, IA, or interaction options that require side-by-side
  evidence or prototypes: use `explore-ux`.
- UX package critique or readiness review: use `review-ux`.
- PRD creation, PRD revision, release sequencing, architecture, epics, stories,
  implementation tasks, CSS/component code, or browser visual QA: stop and route
  to the appropriate downstream skill.

## Inputs To Inspect

Start with the lightest useful scan. Deepen only when reconciling an existing UI
or when docs and code conflict materially.

Common inputs:

```text
docs/standards/design/DESIGN.md
DESIGN.md
design-system.md
docs/standards/design/
docs/initiatives/*/planning/prds/*/prd.md
docs/initiatives/*/planning/prds/*/ux/ux-spec.md
docs/initiatives/*/planning/prds/*/ux/flows/*.md
docs/initiatives/*/planning/prds/*/ux/explorations/*.md
package.json
tailwind.config.*
theme.*, tokens.*, variables.*
src/**/globals.css, app/**/globals.css, styles/**
components/**, src/components/**
```

If a repo uses Tailwind, shadcn, MUI, UIKit, Compose, or an internal design
system, document that system as the inherited baseline and capture only local
deltas, load-bearing inherited values, and constraints.

## Output Path

Use an existing compatible convention first:

```text
DESIGN.md
design-system.md
docs/standards/design/DESIGN.md
```

If no convention exists, create:

```text
docs/standards/design/DESIGN.md
```

Use `organize-docs` for routing questions when available. Do not create a
duplicate canonical design-system file without asking.

## Modes

### Create

Use when no compatible canonical design-system doc exists.

1. Inspect product docs and light UI implementation context.
2. Run the context-sensitive readiness gate.
3. Resolve file path and format.
4. Ask one missing load-bearing design decision at a time.
5. Write a Google-spec `DESIGN.md` with concrete tokens where possible.
6. Run lint for spec-format output when tooling/network allows.

### Update

Use when a canonical design-system doc exists.

1. Read the existing doc before proposing edits.
2. Preserve established token names unless a rename is explicitly requested.
3. If the doc does not follow the Google spec, explain the mismatch and ask
   before restructuring or migrating it.
4. Make the smallest durable update that resolves the shared design-system need.
5. Append `Open Questions` and `Changelog` entries when useful.

### Reconcile

Use when existing docs, tokens, CSS, component styles, and PRD/UX needs disagree
or are scattered.

1. Identify the intended canonical source of truth.
2. Compare docs against light implementation evidence.
3. Preserve useful existing truth and flag stale contradictions.
4. Ask before migration, duplicate-file cleanup, destructive rewrites, or token
   renaming.
5. Write the reconciled visual-system contract and name unresolved conflicts.

## Readiness Gate

Proceed when enough context exists to avoid a generic design system:

- For greenfield/global creation: product, audience or user type, product
  posture, and one memorable visual or experiential intent are clear.
- For feature-driven updates: the triggering PRD/UX/design-system gap is clear.
- For existing UI reconciliation: the current canonical doc or implementation
  evidence is discoverable.

If load-bearing values are unknown, ask one decision at a time. Load-bearing
values include primary color, core text/surface contrast, typography roles,
spacing scale, shape language, inherited UI system, and reusable component
appearance. Minor values may be written as explicit assumptions and listed in
`Open Questions`.

## Google DESIGN.md Format

Read [references/design-md-reference.md](references/design-md-reference.md)
before creating a new spec-format `DESIGN.md`, migrating an existing doc, or
running lint.

For new spec-format files:

- Keep YAML frontmatter focused on Google design tokens: `version`, `name`,
  `description`, `colors`, `typography`, `rounded`, `spacing`, and
  `components`.
- Prefer hex colors for broad tooling support unless the repo already uses a
  different valid CSS color format.
- Prefer semantic role tokens for product UI decisions. Add palette/ramp tokens
  only when existing implementation or theming needs justify them.
- Include light/dark or multi-theme tokens only when source material, platform
  conventions, existing UI, or the user requires them.
- Use exact typography tokens when brand, readability, density, or
  implementation depends on them. Reference platform/library defaults when they
  are intentionally authoritative.
- Use canonical sections first, in spec order. Add custom `Source Inputs`,
  `Open Questions`, and `Changelog` sections after canonical sections when
  useful.

## Component Scope

Document load-bearing reusable components and variants only when they affect
shared visual consistency, accessibility, or downstream implementation
decisions.

Good candidates:

- buttons and links
- inputs, selects, checkboxes, radios, and validation styling
- cards/surfaces and containers
- navigation and tabs
- dialogs, drawers, popovers, and tooltips
- tables, lists, chips, badges, alerts, status indicators, and empty/error
  styling

Use component tokens for visual appearance and reusable state appearance such as
hover, active, pressed, focus-visible, disabled, loading, selected, destructive,
and validation variants. Do not specify feature-specific flow behavior here.

## Accessibility Scope

`DESIGN.md` owns visual accessibility:

- contrast obligations for load-bearing color pairs
- color-not-alone usage rules
- visible focus styling tokens
- touch target sizing when encoded as component sizing
- reduced-motion visual guidance when it affects shared visual language

UX specs own behavioral accessibility such as keyboard paths, focus order,
screen-reader announcements, ARIA/live regions, and flow-specific reduced-motion
behavior.

## Motion, Elevation, And Iconography

Use canonical Google token groups for lintable values. Document elevation,
motion, and iconography in prose or component-scoped guidance unless the repo
already has compatible custom token conventions.

`Elevation & Depth` is a canonical section. Motion and iconography are not
canonical token groups in the current spec; custom sections may be preserved by
consumers, but should not be required for lintable token output.

## Lint And Verification

For Google-spec files, run the linter when possible:

```bash
npx @google/design.md lint path/to/DESIGN.md
```

On Windows or when the dot command is ambiguous, use:

```bash
npx designmd lint path/to/DESIGN.md
```

If lint fails, fix obvious mechanical issues such as duplicate sections,
invalid references, invalid token values, or schema mistakes, then rerun once.
Unresolved lint errors are blockers for spec-format output unless the user
explicitly overrides. Record overrides in `Open Questions`, `Changelog`, or the
final response.

If lint cannot run because tooling or network access is unavailable, report that
clearly and perform the manual self-check.

## Self-Check

Before finishing or writing files, verify:

- Existing repo conventions were inspected and preserved where compatible.
- A duplicate canonical design-system file was not created silently.
- New or migrated `DESIGN.md` content follows the Google spec shape.
- Canonical sections appear in order; custom sections come after them.
- Load-bearing tokens are concrete or explicitly decided.
- Token names are consistent and references resolve.
- Component entries are reusable visual rules, not feature-specific UX behavior.
- Framework or platform inheritance is documented without stale duplication.
- Visual accessibility obligations are present.
- Open questions distinguish blockers from follow-ups.
- Lint passed, was fixed, was blocked, or could not run for a stated reason.
- The artifact has not drifted into UX flows, implementation tasks, CSS, code,
  or visual QA.

## Final Response

When done, report:

- design-system path created or updated
- mode used: create, update, or reconcile
- whether the output is Google-spec format or repo-native format
- lint result or why lint did not run
- unresolved blockers and non-blocking open questions
- recommended next step, usually `author-ux`, `explore-ux`, `review-ux`, or
  architecture handoff
