# Design Skill Roadmap

This document plans the recommended design-phase skills for the workflow:

```text
discovery -> planning -> design -> architecture -> build / code -> QA / Validate -> Ship
```

Design sits after PRD planning and before architecture. Its job is to turn
product intent into a UX/design contract that downstream architecture and build
agents can consume without inventing user journeys, interaction states,
responsive behavior, microcopy, or visual-system rules.

This is a roadmap for building the skills one by one. Each skill section below
is written as an isolated generation brief: a future agent should be able to
create that single `SKILL.md` from the section without needing to read the whole
category plan.

## Source Review

Reviewed on 2026-06-11. Local copies were cloned into `.context/source-repos/`
for inspection.

| Repository | Reviewed HEAD | Design-relevant references |
| --- | --- | --- |
| Matt Pocock Skills | `694fa30311e02c2639942308513555e61ee84a6f` | [`prototype`](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md), [`prototype/UI.md`](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/UI.md), [`design-an-interface`](https://github.com/mattpocock/skills/blob/main/skills/deprecated/design-an-interface/SKILL.md), [`grill-me`](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) |
| GStack | `a5833c413f98b13f105beac96262e8098b628461` | [`design-shotgun`](https://github.com/garrytan/gstack/blob/main/design-shotgun/SKILL.md), [`plan-design-review`](https://github.com/garrytan/gstack/blob/main/plan-design-review/SKILL.md), [`design-consultation`](https://github.com/garrytan/gstack/blob/main/design-consultation/SKILL.md), [`design-html`](https://github.com/garrytan/gstack/blob/main/design-html/SKILL.md), [`review/design-checklist.md`](https://github.com/garrytan/gstack/blob/main/review/design-checklist.md) |
| BMAD Method | `fdd65dc3d92b0a570996f778076c4753c896d906` | [`bmad-ux`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/SKILL.md), [`bmad-ux/references/validate.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/references/validate.md), [`design-md-spec.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/references/design-md-spec.md), [`key-screens.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/assets/key-screens.md), [workflow map](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/reference/workflow-map.md) |
| Get Shit Done | `bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815` | [`ui-phase`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/ui-phase.md), [`UI-SPEC.md`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/templates/UI-SPEC.md), [`sketch`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/sketch.md), [`ui-review`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/ui-review.md), [`gsd-ui-checker`](https://github.com/gsd-build/get-shit-done/blob/main/agents/gsd-ui-checker.md) |
| Superpowers | `6fd4507659784c351abbd2bc264c7162cfd386dc` | [`brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md), [`visual-companion.md`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/visual-companion.md), [`writing-skills`](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md), [`writing-plans`](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) |

## Design Flow

```text
planning/prds/prd-###-slug/prd.md
planning/prds/prd-###-slug/prd-review.md
planning/prds/prd-###-slug/roadmap.md, optional
  -> design/author-ux
  -> design/review-ux
  -> design/explore-design-directions, optional
  -> design/author-design-system, as needed
  -> architecture
```

Small work may only need `author-ux` and a lightweight `review-ux`. A PRD with
minimal UX impact may get a `not-applicable` review and continue to architecture.
Strategic, visual, or workflow-heavy work may add design-direction exploration
and a design-system update before architecture starts.

Use `organize-docs` for exact placement when it is available. Otherwise map the
same artifacts onto the repo's existing convention.

## Shared Design Principles

All design skills should follow these boundaries:

- Read the PRD package before asking questions.
- Ask only for design decisions not already answered by product artifacts,
  existing design docs, or repo UI conventions.
- Keep design artifacts product-level and behavior-level. Do not write
  architecture decisions, epics, stories, implementation tasks, tickets, test
  plans, or production code.
- Separate visual identity from interaction behavior when both are needed.
- Treat states as first-class UX: loading, empty, error, success, partial,
  permission-denied, offline, focus, and destructive confirmation states.
- Make responsive behavior explicit. Do not write "stack on mobile" as a
  sufficient mobile spec.
- Make accessibility explicit: keyboard paths, focus behavior, screen-reader
  announcements, touch target expectations, contrast obligations, reduced
  motion, localization/RTL when relevant.
- Prefer source-linked or PRD-linked design decisions over generic UX advice.
- Use visual exploration only to answer a concrete decision. Exploratory
  sketches and mockups inform the contract; they are not the contract.

## 1. author-ux

**Proposed path:**

```text
skills/design/author-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: author-ux
description: >-
  Create or update UX design contracts from approved PRDs, PRD reviews,
  roadmaps, design-system docs, and source material. Use for information
  architecture, user flows, interaction states, responsive behavior,
  accessibility, microcopy, and design-to-architecture handoff before
  implementation planning or code.
---
```

**Purpose:** Turn a handoff-ready PRD into a durable UX contract that design,
architecture, and later delivery planning can rely on.

**Use when:**

- A PRD or roadmap is ready and the next phase needs UX/detail before
  architecture.
- The user asks for UX specs, screen flows, interaction states, IA, wireframe
  guidance, or design handoff.
- A PRD includes UI, workflow, permissions visibility, messaging, onboarding,
  forms, dashboards, settings, mobile behavior, accessibility, or user-facing
  state changes.
- Architecture needs clarity on surfaces, states, flows, content, and
  interaction constraints before technical decisions.

**Route elsewhere:**

- Raw product ideas: `frame-opportunity`.
- PRD creation or product scope changes: `author-prd`.
- PRD critique: `review-prd`.
- Release slicing: `plan-roadmap`.
- Visual direction exploration before choosing a UX contract: optionally
  `explore-design-directions`.
- Repo/global design tokens or brand system: `author-design-system`.
- Production UI implementation or visual QA: later build/QA skills, not this
  design-phase skill.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-spec.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-decision-log.md, optional
```

**Optional outputs:**

```text
.../ux/mockup-brief.md
.../ux/wireframe-notes.md
```

Use optional outputs only when they remove clutter from `ux-spec.md`.

**Inputs to inspect first:**

```text
prd.md
prd-review.md
roadmap.md, optional
decision-log.md
addendum.md, optional
docs/standards/design/DESIGN.md, optional
existing ux/ files, optional
related app screenshots, design notes, or user-provided references
```

**Readiness gate:**

- `prd.md` exists.
- PRD status is `handoff-ready` or user explicitly overrides.
- `prd-review.md` is `ready-for-design-and-architecture`, or the user
  explicitly overrides unresolved issues.
- UX is applicable. If no UI/workflow/user-facing interaction exists, return
  `not-applicable` guidance instead of writing ceremonial UX docs.

If the gate fails, explain the missing prerequisite and offer either route back
to PRD revision/review or proceed with an explicit override recorded in the UX
spec.

**Core workflow:**

1. Orient on the PRD package and existing design conventions.
2. Determine create, update, or resume.
3. Resolve UX scope: surfaces, roles, flows, user journeys, states, content,
   platform/form-factor, accessibility, design-system dependencies, and open
   design decisions.
4. Ask one unresolved design decision at a time. Provide 2-4 options and a
   recommended answer when context supports one.
5. Draft `ux-spec.md` around the design contract:
   - source inputs
   - UX scope and non-scope
   - design-system dependency
   - information architecture
   - surfaces and screen inventory
   - key flows
   - state matrix
   - component and interaction patterns
   - microcopy/content rules
   - responsive and platform behavior
   - accessibility floor
   - analytics/instrumentation questions, if product-relevant
   - architecture handoff notes
   - open questions split into blockers/non-blockers
6. Preserve PRD requirement IDs and user journey IDs. Reference them rather than
   restating the whole PRD.
7. Record material decisions and overrides in `ux-decision-log.md` when a UX
   choice would matter to architecture, design, implementation, support, risk,
   or accessibility.
8. Stop before architecture, epics, stories, implementation tasks, code, or
   post-implementation QA.

**Suggested `ux-spec.md` structure:**

```markdown
---
title: [Product/PRD Name] UX Spec
status: draft
parent: ../prd.md
updated: YYYY-MM-DD
---

# [Product/PRD Name] UX Spec

## Source Inputs
## UX Applicability
## Scope And Non-Scope
## Design System Dependency
## Information Architecture
## Surface Inventory
## Key Flows
## State Matrix
## Component And Interaction Patterns
## Microcopy And Content Rules
## Responsive And Platform Behavior
## Accessibility Floor
## Architecture Handoff
## Open Questions
### Blockers Before Architecture
### Non-Blocking Follow-Ups
## Changelog
## Self-Review
```

**Status values:**

- `draft`
- `ready-for-review`
- `ready-for-architecture`

Require explicit user approval before setting `ready-for-architecture`.

**Handoff-ready bar:**

- PRD source and review status are clear.
- Every in-scope value slice or requirement with UX impact maps to at least one
  surface or flow.
- Key flows include success and failure paths where relevant.
- Load-bearing states are covered.
- Responsive behavior is explicit for relevant form factors.
- Accessibility floor is present or not applicable with rationale.
- Design-system dependencies are identified.
- Architecture handoff notes name product-facing constraints.
- Blockers before architecture are resolved.

**Reference patterns to borrow:**

- BMAD `bmad-ux`: dual contract idea, with visual identity separate from
  behavior/flow/state.
- BMAD `key-screens.md`: only render or brief load-bearing screens, not every
  surface.
- GSD `UI-SPEC.md`: compact contract dimensions for spacing, typography, color,
  and copy.
- GStack `plan-design-review`: insist on state coverage, IA, responsive, and
  accessibility before implementation.
- Superpowers `brainstorming`: ask one question at a time and present
  alternatives before locking the design.

## 2. review-ux

**Proposed path:**

```text
skills/design/review-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: review-ux
description: >-
  Critique UX specs and design contracts before architecture or implementation.
  Use for UX readiness reviews, PRD traceability, flow coverage, state coverage,
  accessibility, responsive behavior, design-system alignment, blocker findings,
  and next-step recommendations.
---
```

**Purpose:** Review a UX spec before architecture and build agents depend on it.
This skill is critique-only.

**Use when:**

- `ux-spec.md` exists and the team needs to know whether architecture can start.
- The user asks for UX review, design readiness, interaction review, or
  accessibility/readiness critique.
- A PRD has UI/workflow scope but the design handoff may be incomplete.
- Architecture or implementation is about to rely on UX artifacts.

**Do not use for:**

- Writing or editing `ux-spec.md`; route to `author-ux`.
- Creating visual mockups or variants; route to `explore-design-directions`.
- Auditing implemented UI in a browser; that belongs in a later QA/build skill.
- Changing PRD scope; route to `author-prd` when product changes are needed.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-review.md
```

**Workflow:**

1. Resolve the UX spec. Use an explicit path if supplied. Otherwise inspect:
   `docs/initiatives/*/planning/prds/*/ux/ux-spec.md`.
2. Read sibling PRD package files: `prd.md`, `prd-review.md`,
   `decision-log.md`, `roadmap.md`, and existing UX artifacts.
3. Check whether UX review is applicable. If no UI/workflow/user-facing
   interaction exists, return a `not-applicable` recommendation with rationale.
4. Review against the rubric below.
5. Classify findings:
   - `blocker`: likely to make architecture, implementation, accessibility, or
     product behavior wrong.
   - `non-blocker`: useful improvement that does not block architecture.
   - `note`: context or non-applicable dimension.
6. Preview the verdict before writing unless the user explicitly asked to save
   or run a headless review.
7. Write or update only `ux-review.md` after confirmation.

**Recommendation values:**

- `ready-for-architecture`
- `needs-ux-revision`
- `needs-product-revision`
- `needs-design-system`
- `needs-prototype`
- `needs-accessibility-review`
- `not-applicable`

Use exactly one recommendation.

**Review dimensions:**

1. **PRD traceability**: UX decisions map to PRD value slices, FR IDs, user
   journeys, success signals, and non-goals.
2. **Information architecture**: surfaces, navigation, hierarchy, and first
   screen priorities are explicit.
3. **Flow coverage**: key flows include protagonist/context, entry point,
   success path, failure path, and exit/next action.
4. **State coverage**: loading, empty, error, success, partial, permission,
   offline, focus, destructive, and long-content cases are covered when
   relevant.
5. **Interaction clarity**: controls, affordances, progressive disclosure,
   validation, confirmation, undo/recovery, and feedback are specified.
6. **Microcopy and content**: CTA labels, empty/error copy, destructive copy,
   status messages, and user guidance are specific and user-facing.
7. **Responsive and platform behavior**: desktop, tablet, mobile, native/web,
   touch, keyboard, and reduced-motion expectations are explicit when relevant.
8. **Accessibility floor**: keyboard nav, focus order, labels, landmarks,
   screen-reader announcements, contrast obligations, touch targets, and
   localization/RTL are handled or intentionally out of scope.
9. **Design-system alignment**: existing tokens/components/patterns are reused;
   new tokens/components are justified and routed to `author-design-system`.
10. **Architecture readiness**: architecture can reason about product-facing
    constraints without inventing UX behavior.
11. **Implementation drift**: UX spec has not become a file-level plan, story
    list, code sketch, or test plan.

**Suggested report structure:**

```markdown
---
title: UX Review
parent: ./ux-spec.md
recommendation: needs-ux-revision
---

# UX Review

## Source Inputs
## Recommendation
## Blocker Summary
## Dimension Verdicts
## Findings By Dimension
## Open Questions
### Blocking
### Non-Blocking
## Next Action
```

**Reference patterns to borrow:**

- BMAD `bmad-ux/references/validate.md`: flow, token, component, state, visual
  reference, inheritance, and shape-fit checks.
- GStack `plan-design-review`: pre-implementation design critique, state
  coverage, IA, accessibility, and unresolved design decisions.
- GSD `gsd-ui-checker`: compact PASS/FLAG/BLOCK dimension thinking.
- Existing local `review-prd`: critique-only stance and preview-before-writing
  behavior.

## 3. author-design-system

**Proposed path:**

```text
skills/design/author-design-system/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: author-design-system
description: >-
  Create or update repository-level design-system documentation. Use when a
  project needs DESIGN.md, visual identity rules, design tokens, typography,
  color, spacing, shape, component visual guidance, or when UX work requires
  reusable design-system decisions before feature implementation.
---
```

**Purpose:** Create or update the repository's durable design-system source of
truth. This skill owns shared visual identity and reusable tokens/components,
not PRD-specific UX behavior.

**Use when:**

- No design-system doc exists and UI work is about to begin.
- A UX spec needs tokens, components, visual rules, or brand conventions not
  currently documented.
- The user asks for `DESIGN.md`, design system, brand system, visual language,
  typography, color, spacing, shape, elevation, or component visual rules.
- Multiple PRDs need shared design rules rather than per-feature duplication.

**Do not use for:**

- Feature-specific UX flows and states: use `author-ux`.
- Visual exploration variants: use `explore-design-directions`.
- Implementing components or CSS: later build/code skills.
- Polishing implemented UI: later visual QA skill.

**Primary output:**

```text
docs/standards/design/DESIGN.md
```

If the repo already has a root `DESIGN.md`, `design-system.md`, or equivalent
convention, adapt to the local convention instead of creating a duplicate.

**Core workflow:**

1. Inspect existing design docs, app UI, component libraries, tokens, CSS,
   screenshots if supplied, and PRD/UX needs.
2. Detect whether this is create, update, or reconcile.
3. Ask for product/brand context only when not available from existing docs:
   audience, product posture, memorable first impression, visual constraints,
   accessibility/compliance constraints, and any reference products.
4. Propose a coherent system rather than isolated choices.
5. Separate stable tokens/rules from feature-specific needs.
6. Write or update `DESIGN.md` with token-like values where possible and prose
   rules where judgment is needed.
7. Record open issues that need future UX or product decisions.

**Recommended `DESIGN.md` sections:**

```markdown
---
title: Design System
status: draft
updated: YYYY-MM-DD
---

# Design System

## Brand And Style
## Colors
## Typography
## Layout And Spacing
## Elevation And Depth
## Shapes
## Components
## Motion
## Accessibility And Contrast
## Do's And Don'ts
## Open Questions
## Changelog
```

**Token guidance:**

- Prefer stable named tokens over one-off pixel values.
- Include color hex values for load-bearing colors.
- Keep typography roles small and named.
- Keep spacing scales constrained.
- Use component visual specs for reusable components only.
- If the repo uses Tailwind, shadcn, MUI, UIKit, Compose, or another system,
  document inheritance and deltas instead of restating the whole upstream system.

**Reference patterns to borrow:**

- BMAD `design-md-spec.md`: `DESIGN.md` as visual identity/tokens with canonical
  sections.
- GStack `design-consultation`: design-system posture, product context, and
  memorable-first-impression prompt.
- GSD `UI-SPEC.md`: constrained spacing, typography, color, and copy contracts.
- GStack `review/design-checklist.md`: common design-system violations and
  detectable anti-patterns.

## 4. explore-design-directions

**Proposed path:**

```text
skills/design/explore-design-directions/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: explore-design-directions
description: >-
  Explore multiple visual, layout, IA, or interaction directions before locking
  a UX spec. Use when users want design options, prototypes, sketches, visual
  comparisons, divergent UI directions, or a lightweight mockup brief without
  committing production code.
---
```

**Purpose:** Help the team see and compare design directions before a UX spec or
design-system decision is locked. This is exploratory, not final implementation.

**Use when:**

- The user wants to see options visually.
- A UX decision is hard to make from prose alone.
- The team is choosing between layout structures, navigation models, visual
  personalities, onboarding patterns, dashboard density, form patterns, or
  interaction approaches.
- A PRD or UX spec has unresolved design choices that would benefit from
  side-by-side comparison.

**Do not use for:**

- Writing the final UX contract: use `author-ux`.
- Writing the global design system: use `author-design-system`.
- Production implementation: later build/code skills.
- Figma-specific file creation. This category intentionally skips
  Figma-specific workflow for now.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/design-directions.md
```

**Optional local artifacts:**

```text
.../ux/sketches/
.../ux/mockups/
```

Only create local visual artifacts when the user explicitly wants persisted
sketches or the repo convention supports them. Otherwise, return the comparison
inline and capture the chosen direction in `design-directions.md`.

**Core workflow:**

1. Read the PRD package, existing UX spec, and design system if available.
2. State the exact design question being explored.
3. Decide the exploration mode:
   - `textual-directions`: prose comparison only.
   - `html-sketches`: lightweight HTML sketches or mockups.
   - `mockup-brief`: prompt/spec for another visual tool.
4. Generate 2-4 meaningfully different directions. They must differ in
   structure, hierarchy, density, navigation, or interaction model, not only
   color/copy.
5. Compare the directions against user job, PRD constraints, design-system
   fit, accessibility, responsive behavior, and architecture implications.
6. Ask the user to choose, reject, or synthesize a direction.
7. Capture the chosen direction, rejected alternatives, rationale, and PRD/UX
   implications in `design-directions.md`.
8. Route back to `author-ux` or `author-design-system` to make the decision
   durable in the contract.

**Suggested `design-directions.md` structure:**

```markdown
---
title: Design Directions
status: draft
parent: ./ux-spec.md
updated: YYYY-MM-DD
---

# Design Directions

## Design Question
## Source Inputs
## Constraints
## Directions Considered
### Direction A: [Name]
### Direction B: [Name]
### Direction C: [Name]
## Comparison
## Chosen Direction
## Rejected Alternatives
## Implications For UX Spec
## Open Questions
```

**Rules for sketches/prototypes:**

- Mark artifacts as exploratory.
- Prefer realistic content from the PRD over placeholder content.
- Show key states when state drives the decision.
- Do not wire real mutations.
- Do not promote exploratory code directly to production.
- Delete, archive, or clearly label throwaway artifacts after the decision is
  captured.

**Reference patterns to borrow:**

- Matt Pocock `prototype/UI.md`: multiple structurally different variants, clear
  prototype question, switchable variants, and cleanup discipline.
- GStack `design-shotgun`: visual brainstorming, comparison board concept, and
  iteration from structured feedback.
- GSD `sketch`: decompose design work into concrete visual questions and keep a
  manifest of winners/insights.
- Superpowers `visual-companion.md`: use visuals only when seeing beats reading.
- BMAD `design-directions.md` and `key-screens.md`: render only load-bearing
  visual decisions and promote durable references selectively.

## 5. Later Skill: visual-review

This belongs outside the first design category build.

**Possible future path:**

```text
skills/qa/visual-review/SKILL.md
```

**Why later:** GStack `design-review`, GSD `ui-review`, and GStack
`review/design-checklist.md` are strongest after UI exists. They use screenshots,
diffs, browser checks, code inspection, and sometimes direct fixes. That work
belongs after architecture/build, not before architecture.

Possible later responsibilities:

- audit implemented UI against `ux-spec.md` and `DESIGN.md`
- run browser screenshots at desktop/tablet/mobile
- check visual hierarchy, spacing, typography, contrast, and state coverage
- report or fix implemented UI issues

Do not include this in the first design skill package unless the team decides to
broaden the category into build/QA.

## Skill Build Order

Build in this order:

1. `author-ux`
2. `review-ux`
3. `author-design-system`
4. `explore-design-directions`

Rationale:

- `author-ux` creates the core handoff artifact the next phase needs.
- `review-ux` protects architecture/build from weak or incomplete UX contracts.
- `author-design-system` is important, but not every feature needs a new global
  system. It can be built after the core UX loop.
- `explore-design-directions` is valuable for visual work, but it is optional
  and should feed back into `author-ux` rather than becoming the default path
  for every PRD.

## Relationship To organize-docs

`organize-docs` owns artifact routing and ID selection. Design skills should use
its conventions rather than duplicating global routing rules.

Recommended durable design locations:

```text
docs/standards/design/DESIGN.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/
```

Recommended handoff:

```text
planning/prds/prd-###-slug/prd.md
planning/prds/prd-###-slug/ux/ux-spec.md
planning/prds/prd-###-slug/ux/ux-review.md
  -> architecture artifacts
```

## Anti-Patterns

- Writing UX specs before PRD scope is clear.
- Treating visual mockups as the source of truth while leaving flows, states,
  and accessibility undocumented.
- Creating a design system for every feature instead of using a shared one.
- Repeating the full PRD inside UX docs instead of referencing stable IDs.
- Writing "clean modern UI" or "stack on mobile" as if those are design
  decisions.
- Skipping empty/error/loading/permission states.
- Deferring accessibility to implementation.
- Creating implementation tasks, epics, stories, tickets, CSS, or component code
  during the design phase.
- Preserving exploratory prototypes without marking their status or capturing
  the final decision.
- Forcing design review on backend-only work with no UX surface.

## Minimum References For Skill Generation

When generating each skill in isolation, read:

| Skill to generate | Minimum local references | External inspiration to inspect |
| --- | --- | --- |
| `author-ux` | `skills/planning/author-prd/SKILL.md`, `skills/planning/plan-roadmap/SKILL.md`, `skills/docs/organize-docs/SKILL.md`, this document's `author-ux` section | BMAD `bmad-ux`, BMAD `key-screens.md`, GSD `UI-SPEC.md`, GStack `plan-design-review` |
| `review-ux` | `skills/planning/review-prd/SKILL.md`, `skills/planning/review-prd/references/review-rubric.md`, this document's `review-ux` section | BMAD `validate.md`, GStack `plan-design-review`, GSD `gsd-ui-checker` |
| `author-design-system` | `skills/docs/organize-docs/SKILL.md`, this document's `author-design-system` section | BMAD `design-md-spec.md`, GStack `design-consultation`, GSD `UI-SPEC.md` |
| `explore-design-directions` | `skills/docs/organize-docs/SKILL.md`, this document's `explore-design-directions` section | Matt Pocock `prototype/UI.md`, GStack `design-shotgun`, GSD `sketch`, Superpowers `visual-companion.md` |

Keep the eventual `SKILL.md` files concise. Put long rubrics, templates, and
examples in `references/` or `assets/` so future agents load only what they need.
