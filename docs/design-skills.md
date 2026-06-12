# Design Skill Roadmap

This document plans the recommended design-phase skills for the workflow:

```text
discovery -> planning -> UX design -> architecture -> build / code -> QA / Validate -> Ship
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

Reviewed on 2026-06-11. Local copies were originally reviewed for the design
roadmap; if implementing these skills later, re-open the source references below
or their pinned local snapshots when available.

| Repository | Reviewed HEAD | Design-relevant references |
| --- | --- | --- |
| Matt Pocock Skills | `694fa30311e02c2639942308513555e61ee84a6f` | [`prototype`](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md), [`prototype/UI.md`](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/UI.md), [`design-an-interface`](https://github.com/mattpocock/skills/blob/main/skills/deprecated/design-an-interface/SKILL.md), [`grill-me`](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) |
| GStack | `a5833c413f98b13f105beac96262e8098b628461` | [`design-shotgun`](https://github.com/garrytan/gstack/blob/main/design-shotgun/SKILL.md), [`plan-design-review`](https://github.com/garrytan/gstack/blob/main/plan-design-review/SKILL.md), [`design-consultation`](https://github.com/garrytan/gstack/blob/main/design-consultation/SKILL.md), [`design-html`](https://github.com/garrytan/gstack/blob/main/design-html/SKILL.md), [`review/design-checklist.md`](https://github.com/garrytan/gstack/blob/main/review/design-checklist.md) |
| BMAD Method | `fdd65dc3d92b0a570996f778076c4753c896d906` | [`bmad-ux`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/SKILL.md), [`bmad-ux/references/validate.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/references/validate.md), [`design-md-spec.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/references/design-md-spec.md), [`key-screens.md`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-ux/assets/key-screens.md), [workflow map](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/reference/workflow-map.md) |
| Get Shit Done | `bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815` | [`ui-phase`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/ui-phase.md), [`UI-SPEC.md`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/templates/UI-SPEC.md), [`sketch`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/sketch.md), [`ui-review`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/ui-review.md), [`gsd-ui-checker`](https://github.com/gsd-build/get-shit-done/blob/main/agents/gsd-ui-checker.md) |
| Superpowers | `6fd4507659784c351abbd2bc264c7162cfd386dc` | [`brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md), [`visual-companion.md`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/visual-companion.md), [`writing-skills`](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md), [`writing-plans`](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) |

## Inspiration Map

Use the source skills as inspiration in these specific ways:

- Matt Pocock `grill-me`: ask exactly one decision question at a time, include a
  recommended answer when defensible, and do not ask what artifacts can answer.
  Use this only for unresolved decisions; do not turn every UX breakdown into a
  long interview.
- Superpowers `brainstorming`: if a request is too large or spans independent
  subsystems, decompose it before refining details. This is the model for
  `scope-ux`.
- BMAD `bmad-ux`: preserve the dual contract idea: experience behavior/flow and
  visual identity are related but separate. Borrow named-protagonist journeys
  and surface closure: every load-bearing need lands on a surface, and every
  surface is justified by a journey or requirement.
- BMAD `key-screens.md`: render or brief only load-bearing screens, not every
  surface. Key screens usually include the entry surface, the most complex flow
  surface, a critical modal/drawer, or a dashboard/list view.
- GSD `ui-phase` and `UI-SPEC.md`: lock a design contract before implementation
  planning, ask only unanswered design questions, and validate the UI spec
  against fixed dimensions.
- GSD `sketch` and Matt `prototype/UI.md`: use exploration to answer a concrete
  question with multiple meaningfully different options. Variants must differ in
  structure, hierarchy, density, navigation, or interaction model, not just color
  or copy.
- Superpowers `visual-companion.md`: use visuals only when seeing beats reading;
  stay in prose when the decision is about scope, requirements, or sequencing.
- GStack `plan-design-review`, GSD `ui-review`, and `gsd-ui-checker`: borrow
  compact readiness reviews with PASS/FLAG/BLOCK-style dimension thinking.

## Design Flow

```text
planning/prds/prd-###-slug/prd.md
planning/prds/prd-###-slug/prd-review.md
planning/prds/prd-###-slug/roadmap.md, optional
  -> scope-ux
  -> author-ux
      -> explore-ux, optional branch for unresolved visual/IA/interaction risk
      -> author-design-system, optional branch for shared visual-system needs
  -> review-ux
  -> architecture
```

Small PRDs may skip durable `scope-ux` output and let `author-ux` write a single
`ux-spec.md`. Large PRDs should always start with `scope-ux`; the agent should
not try to design the whole PRD in one pass.

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
- Break large PRDs into designable UX slices before authoring detailed UX.
- Separate visual identity from interaction behavior when both are needed.
- Treat states as first-class UX: loading, empty, error, success, partial,
  permission-denied, offline, focus, and destructive confirmation states.
- Make responsive behavior explicit. Do not write "stack on mobile" as a
  sufficient mobile spec.
- Make accessibility explicit: keyboard paths, focus behavior, screen-reader
  announcements, touch target expectations, contrast obligations, reduced
  motion, localization/RTL when relevant.
- Prefer source-linked or PRD-linked design decisions over generic UX advice.
- Treat exploration artifacts as evidence, not the canonical contract. Promote
  the chosen behavior back into `ux-spec.md` or a slice file through
  `author-ux`.

## Designable UX Slices

A UX slice is the unit that keeps large PRDs designable. It is not a screen,
component, epic, story, route, or implementation slice. It is a bounded user
workflow:

```text
Actor + goal + entry point + end state + surfaces + key states + mapped PRD IDs
```

Example:

```text
UX-001: Manager reviews weekly brief
Actor: Engineering manager
Goal: Understand what changed and what needs attention
Entry: Opens weekly digest from dashboard or email
Exit: Shares, dismisses, or opens evidence for follow-up
Mapped PRD IDs: VS-1, FR-1, FR-2, UJ-1
Surfaces: Digest list, brief detail, source evidence drawer
States: loading, no activity, partial source outage, unsupported claim
```

### Splitting Rules

Use these rules in order:

1. Split by primary user goal.
2. Keep one coherent journey together, even if it touches multiple screens.
3. Separate different actors when their workflows diverge.
4. Separate setup/configuration from repeated daily use.
5. Separate admin/control-plane UX from end-user task UX.
6. Separate high-risk trust, permission, AI, financial, compliance, or
   destructive flows.
7. Use roadmap release slices to decide what is V1 versus later.
8. Do not split by frontend component, database entity, route, or ticket.

A slice is too large if it has multiple actors, unrelated goals, multiple major
entry paths, unclear success criteria, or too many unrelated state families. A
slice is too small if it is only a screen or component without a complete user
outcome.

## 1. scope-ux

**Proposed path:**

```text
skills/design/scope-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: scope-ux
description: >-
  Break approved PRDs, PRD reviews, and optional roadmaps into designable UX
  slices before detailed UX authoring. Use for UX scope maps, flow inventory,
  PRD-to-UX traceability, release/priority mapping, design order, and deciding
  which slice should be authored or explored next.
---
```

**Purpose:** Prevent broad PRDs from turning into giant UX specs by converting
product scope into bounded UX slices.

**Use when:**

- A PRD is broad, multi-actor, multi-release, workflow-heavy, or ambiguous.
- The user asks how to break PRD scope into flows, surfaces, or design chunks.
- `author-ux` would otherwise need to design many workflows at once.
- Architecture needs UX coverage clarity before design details are complete.

**Route elsewhere:**

- Raw product ideas: `frame-opportunity`.
- PRD creation or product scope changes: `author-prd`.
- PRD critique: `review-prd`.
- Release slicing: `plan-roadmap`.
- Detailed flow authoring after scope is clear: `author-ux`.
- Visual, IA, or interaction uncertainty requiring options/prototypes:
  `explore-ux`.

**Inputs to inspect first:**

```text
prd.md
prd-review.md
roadmap.md, optional
decision-log.md
addendum.md, optional
docs/standards/design/DESIGN.md, optional
existing ux/ files, optional
```

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-spec.md
```

At this stage `ux-spec.md` is a hub/scoping artifact. It may later be expanded
by `author-ux`.

**Optional output for very large PRDs:**

```text
.../ux/ux-scope-map.md
```

Use the optional file only when the scope map would make the eventual
`ux-spec.md` hard to read.

**Workflow:**

1. Resolve the PRD package. If no explicit path is supplied, inspect
   `docs/initiatives/*/planning/prds/*/prd.md`; if none or multiple plausible
   PRDs exist, ask for the path.
2. Run the UX applicability check. If no UI, workflow, messaging, permissions
   visibility, or user-facing interaction exists, return `not-applicable`.
3. Extract candidate UX slices from value slices, functional requirements, user
   journeys, design handoff notes, roadmap release slices, cross-cutting
   requirements, and PRD review findings.
4. Merge or split candidates using the UX slice rules above.
5. Produce a proposed UX Scope Map with PRD ID traceability.
6. Identify high-risk slices needing `explore-ux`, shared-system gaps needing
   `author-design-system`, and straightforward slices ready for `author-ux`.
7. Ask a `grill-me`-style question only when the scope map is ambiguous or a
   proposed split would change product intent.
8. Write or update the hub artifact only after confirmation unless the user
   explicitly requested a headless write.

**Suggested hub sections:**

```markdown
## Source Inputs
## UX Applicability
## UX Scope Map
## UX Slice Inventory
## PRD Traceability
## Release / Priority Mapping
## Surface Inventory
## Shared State Families
## Design-System Dependencies
## Exploration Candidates
## Recommended Design Order
## Open Design Questions
## Next Slice To Author
```

**UX Scope Map example:**

```markdown
| UX Slice | User Goal | Source IDs | Release Slice | Surfaces | State Risk | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| UX-001 Review weekly brief | Understand status | VS-1, FR-1, FR-2, UJ-1 | Pilot | Brief list, detail, evidence drawer | high | P0 |
| UX-002 Edit and share brief | Approve communication | VS-2, FR-3 | Pilot | Editor, share modal | medium | P0 |
| UX-003 Configure digest | Set preferences | FR-7 | V2 | Settings | low | deferred |
```

**Reference patterns to borrow:**

- Superpowers `brainstorming`: decompose broad requests before refining details.
- Matt Pocock `grill-me`: one unresolved decision question at a time with a
  recommended answer.
- BMAD `bmad-ux`: surface closure and named-protagonist journey discipline.
- GSD `UI-SPEC.md`: compact contract dimensions and source-driven UI scope.
- Local `author-prd`, `plan-roadmap`, and `review-prd`: preserve stable PRD IDs,
  release slices, and design-readiness findings.

## 2. author-ux

**Proposed path:**

```text
skills/design/author-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: author-ux
description: >-
  Create or update UX design contracts for a scoped UX slice or small PRD. Use
  for user flows, surfaces, state matrices, interaction behavior, microcopy,
  responsive behavior, accessibility, and architecture handoff before
  implementation planning or code.
---
```

**Purpose:** Turn a scoped UX slice into a durable UX contract that design,
architecture, and later delivery planning can rely on.

**Use when:**

- `scope-ux` has identified a UX slice to author.
- A PRD is small enough for one `ux-spec.md`.
- The user asks for UX specs, screen flows, interaction states, IA, wireframe
  guidance, or design handoff.
- Architecture needs clarity on surfaces, states, flows, content, and
  interaction constraints before technical decisions.

**Route elsewhere:**

- Large PRD without UX slice map: `scope-ux`.
- Visual/layout/IA/interaction uncertainty that requires options or a prototype:
  `explore-ux`.
- Repo/global design tokens or brand system: `author-design-system`.
- UX critique: `review-ux`.
- Production UI implementation or visual QA: later build/QA skills.

**Inputs to inspect first:**

```text
ux/ux-spec.md or ux/ux-scope-map.md, when present
prd.md
prd-review.md
roadmap.md, optional
decision-log.md
addendum.md, optional
docs/standards/design/DESIGN.md, optional
existing ux/flows/*, optional
exploration records, optional
```

**Outputs for small PRDs:**

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-spec.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-decision-log.md, optional
```

**Outputs for large PRDs:**

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-spec.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/flows/ux-001-short-slug.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/flows/ux-002-short-slug.md
```

The hub owns global IA, shared surfaces, shared states, traceability, and
handoff summary. Flow files own slice-level detail.

**Readiness gate:**

- `prd.md` exists.
- PRD status is `handoff-ready` or user explicitly overrides.
- `prd-review.md` is `ready-for-design-and-architecture`, or the user explicitly
  overrides unresolved issues.
- UX is applicable.
- For broad PRDs, a UX slice map exists or `author-ux` first performs a compact
  scoping pass and asks whether to hand off to `scope-ux`.

**Core workflow:**

1. Orient on the PRD package, UX scope map, existing design conventions, and
   existing UX files.
2. Determine create, update, or resume.
3. Select one UX slice unless the PRD is small enough for one full spec.
4. Resolve the slice contract: actor, goal, entry points, exits, surfaces,
   flow steps, states, content, platform/form-factor, accessibility,
   design-system dependencies, and open design decisions.
5. Ask one unresolved design decision at a time. Provide 2-4 options and a
   recommended answer when context supports one.
6. Route to `explore-ux` when a decision needs side-by-side options, static
   visuals, or interactive testing before it can be locked.
7. Draft the UX contract while preserving PRD IDs. Reference requirements and
   journeys rather than restating the whole PRD.
8. Record material UX decisions and overrides in `ux-decision-log.md` when they
   would matter to architecture, design, implementation, support, risk, or
   accessibility.
9. Stop before architecture, epics, stories, implementation tasks, code, or
   post-implementation QA.

**Suggested slice file structure:**

```markdown
---
title: UX-001 Short Slice Title
status: draft
parent: ../ux-spec.md
updated: YYYY-MM-DD
---

# UX-001 Short Slice Title

## Source IDs
## Actor And Goal
## Entry Points
## Exit / Success State
## Surfaces
## Flow Steps
## State Matrix
## Interaction Rules
## Microcopy And Content
## Responsive Behavior
## Accessibility
## Data / Permission Visibility
## Design-System Dependencies
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
- Every in-scope PRD ID for this slice maps to at least one surface or flow step.
- Key flows include success and failure paths where relevant.
- Load-bearing states are covered.
- Responsive behavior is explicit for relevant form factors.
- Accessibility floor is present or not applicable with rationale.
- Design-system dependencies are identified.
- Architecture handoff notes name product-facing constraints.
- Blockers before architecture are resolved.

**Reference patterns to borrow:**

- BMAD `bmad-ux`: behavior contract and visual identity separation, named
  protagonist journeys, and surface closure.
- BMAD `key-screens.md`: only render or brief load-bearing screens.
- GSD `UI-SPEC.md`: compact contract dimensions for spacing, typography, color,
  content, and responsive behavior.
- GStack `plan-design-review`: insist on state coverage, IA, responsive, and
  accessibility before implementation.
- Matt Pocock `grill-me`: one unresolved decision at a time.

## 3. explore-ux

**Implementation status:** Implemented on 2026-06-12 at
`skills/design/explore-ux/SKILL.md` by user request, before the recommended
build-order predecessors in this roadmap.

**Proposed path:**

```text
skills/design/explore-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: explore-ux
description: >-
  Explore unresolved UX, IA, layout, visual, or interaction questions before
  updating the canonical UX spec. Use for design directions, static mockups,
  lightweight interactive prototypes, prototype findings, and decision records
  that feed back into author-ux or author-design-system.
---
```

**Purpose:** Help the team see or try options when prose is not enough to lock
the UX contract. This skill produces decision evidence, not the canonical UX
spec.

**Use when:**

- A UX slice has multiple plausible approaches.
- A UX decision is hard to make from prose alone.
- The team needs side-by-side layout, IA, navigation, density, visual, or
  interaction options.
- A high-risk flow, state transition, progressive disclosure model, recovery
  path, mobile behavior, or trust pattern needs a lightweight prototype.

**Do not use for:**

- Writing the final UX contract: use `author-ux`.
- Writing the global design system: use `author-design-system`.
- Production implementation: later build/code skills.
- Browser-based QA of implemented UI: later visual-review/QA skill.

**Primary outputs:**

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/explorations/explore-001-short-slug.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/explorations/explore-001-short-slug/
```

Use the directory form only when the exploration includes persisted assets such
as HTML sketches, screenshots, or prototype files.

**Modes:**

- `textual-directions`: prose comparison only.
- `static-mockups`: static sketches, layout mockups, or mockup briefs.
- `interactive-prototype`: lightweight exploratory interaction prototype.
- `mockup-brief`: prompt/spec for another visual tool.

**Core workflow:**

1. Read the PRD package, UX scope map, relevant UX slice, design system, and any
   prior explorations.
2. State the exact design question being explored.
3. Choose the lightest exploration mode that can answer the question.
4. Generate 2-4 meaningfully different options when comparing directions.
   Options must differ in structure, hierarchy, density, navigation, or
   interaction model, not only color/copy.
5. For interactive prototypes, define the scenario, start state, end state,
   states included, and what success/failure would prove.
6. Compare results against user job, PRD constraints, UX slice needs,
   design-system fit, accessibility, responsive behavior, and architecture
   implications.
7. Ask the user to choose, reject, or synthesize a direction.
8. Capture the chosen decision, rejected alternatives, rationale, prototype
   findings if any, and required UX spec updates.
9. Route back to `author-ux` or `author-design-system` to make the decision
   durable in the canonical contract.

**Suggested exploration record:**

```markdown
---
title: Explore-001 Short Question
status: exploratory
parent: ../ux-spec.md
updated: YYYY-MM-DD
---

# Explore-001 Short Question

## Design Question
## Related UX Slice
## Source PRD IDs
## Mode
## Options Or Prototype
## Scenarios / States Tested
## Comparison
## Decision
## UX Spec Updates Needed
## Artifact Status
## Open Questions
```

**Rules for prototype artifacts:**

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
- BMAD `key-screens.md`: render only load-bearing visual decisions and promote
  durable references selectively.

## 4. author-design-system

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
- Exploratory options or prototypes: use `explore-ux`.
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

## 5. review-ux

**Proposed path:**

```text
skills/design/review-ux/SKILL.md
```

**Frontmatter draft:**

```yaml
---
name: review-ux
description: >-
  Critique UX specs, UX slice files, and design contracts before architecture or
  implementation. Use for package-level UX coverage reviews, slice readiness,
  PRD traceability, flow coverage, state coverage, accessibility, responsive
  behavior, design-system alignment, blocker findings, and next-step
  recommendations.
---
```

**Purpose:** Review a UX package or individual UX slice before architecture and
build agents depend on it. This skill is critique-only.

**Use when:**

- `ux-spec.md` or `ux/flows/*.md` exists and the team needs to know whether
  architecture can start.
- The user asks for UX review, design readiness, interaction review, or
  accessibility/readiness critique.
- A PRD has UI/workflow scope but the design handoff may be incomplete.
- Architecture or implementation is about to rely on UX artifacts.

**Do not use for:**

- Writing or editing UX specs; route to `author-ux`.
- Creating explorations, mockups, or prototypes; route to `explore-ux`.
- Auditing implemented UI in a browser; that belongs in a later QA/build skill.
- Changing PRD scope; route to `author-prd` when product changes are needed.

**Primary output:**

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-review.md
```

The review may include package-level and slice-level verdicts in one file. Do
not create one review file per slice unless the user asks.

**Review scopes:**

- `package-review`: checks whether the UX package covers all PRD UX scope.
- `slice-review`: checks whether one UX slice is ready for architecture/build.

**Workflow:**

1. Resolve the UX spec. Use an explicit path if supplied. Otherwise inspect
   `docs/initiatives/*/planning/prds/*/ux/ux-spec.md`. If none or multiple
   plausible specs exist, ask for the path.
2. Read sibling PRD package files: `prd.md`, `prd-review.md`, `decision-log.md`,
   `roadmap.md`, and existing UX artifacts.
3. Read relevant flow files, exploration records, and `DESIGN.md` when present.
4. Check whether UX review is applicable. If no UI/workflow/user-facing
   interaction exists, return a `not-applicable` recommendation with rationale.
5. Review at package level, slice level, or both depending on user request and
   artifact maturity.
6. Classify findings:
   - `blocker`: likely to make architecture, implementation, accessibility, or
     product behavior wrong.
   - `non-blocker`: useful improvement that does not block architecture.
   - `note`: context or non-applicable dimension.
7. Preview the verdict before writing unless the user explicitly asked to save
   or run a headless review.
8. Write or update only `ux-review.md` after confirmation.

**Recommendation values:**

- `ready-for-architecture`
- `needs-ux-revision`
- `needs-product-revision`
- `needs-design-system`
- `needs-exploration`
- `needs-accessibility-review`
- `not-applicable`

Use exactly one recommendation for the overall review. Slice-level verdicts may
be listed separately.

**Review dimensions:**

1. **PRD traceability**: UX decisions map to PRD value slices, FR IDs, user
   journeys, success signals, and non-goals.
2. **Scope coverage**: package-level UX slice inventory covers all UX-relevant
   PRD scope or explicitly defers it.
3. **Information architecture**: surfaces, navigation, hierarchy, and first
   screen priorities are explicit.
4. **Flow coverage**: key flows include protagonist/context, entry point,
   success path, failure path, and exit/next action.
5. **State coverage**: loading, empty, error, success, partial, permission,
   offline, focus, destructive, and long-content cases are covered when
   relevant.
6. **Interaction clarity**: controls, affordances, progressive disclosure,
   validation, confirmation, undo/recovery, and feedback are specified.
7. **Microcopy and content**: CTA labels, empty/error copy, destructive copy,
   status messages, and user guidance are specific and user-facing.
8. **Responsive and platform behavior**: desktop, tablet, mobile, native/web,
   touch, keyboard, and reduced-motion expectations are explicit when relevant.
9. **Accessibility floor**: keyboard nav, focus order, labels, landmarks,
   screen-reader announcements, contrast obligations, touch targets, and
   localization/RTL are handled or intentionally out of scope.
10. **Design-system alignment**: existing tokens/components/patterns are reused;
    new tokens/components are justified and routed to `author-design-system`.
11. **Exploration closure**: exploratory findings were promoted into the UX spec
    or intentionally rejected; prototypes are not masquerading as canonical
    implementation.
12. **Architecture readiness**: architecture can reason about product-facing
    constraints without inventing UX behavior.
13. **Implementation drift**: UX spec has not become a file-level plan, story
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
## Review Scope
## Recommendation
## Blocker Summary
## Package Coverage
## Slice Verdicts
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
- Existing local `review-prd`: critique-only stance, allowed recommendation
  vocabulary, source citations, and preview-before-writing behavior.

## Later Skill: visual-review

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

1. `scope-ux`
2. `author-ux`
3. `review-ux`
4. `explore-ux`
5. `author-design-system`

Rationale:

- `scope-ux` prevents large PRDs from becoming unbounded UX work.
- `author-ux` creates the canonical UX contract the next phase needs.
- `review-ux` protects architecture/build from weak or incomplete UX contracts.
- `explore-ux` is important but optional; it feeds decisions back into
  `author-ux` rather than becoming the default path for every PRD.
- `author-design-system` is shared-system work and should be invoked only when
  UX work exposes reusable visual-system gaps.

## Relationship To organize-docs

`organize-docs` owns artifact routing and ID selection. Design skills should use
its conventions rather than duplicating global routing rules.

Recommended durable design locations:

```text
docs/standards/design/DESIGN.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/flows/
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/explorations/
```

Recommended handoff:

```text
planning/prds/prd-###-slug/prd.md
planning/prds/prd-###-slug/prd-review.md
planning/prds/prd-###-slug/roadmap.md, optional
planning/prds/prd-###-slug/ux/ux-spec.md
planning/prds/prd-###-slug/ux/flows/ux-###-slug.md, optional for large PRDs
planning/prds/prd-###-slug/ux/ux-review.md
  -> architecture artifacts
```

## Package Updates When Implementing

When the first design skill is implemented:

- Add `./skills/design` to `package.json` under `pi.skills`.
- Update `README.md` skill table and repository layout.
- Update manual install examples if they remain exhaustive.
- Run `npm run check` and confirm the installer discovers the new design skills.

Status: completed for `explore-ux` on 2026-06-12. Repeat the README updates and
validation when adding the remaining design skills.

## Anti-Patterns

- Writing UX specs before PRD scope is clear.
- Designing a large PRD without first creating UX slices.
- Treating visual mockups or prototypes as the source of truth while leaving
  flows, states, and accessibility undocumented.
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
| `scope-ux` | `skills/planning/author-prd/SKILL.md`, `skills/planning/review-prd/SKILL.md`, `skills/planning/review-prd/references/review-rubric.md`, `skills/planning/plan-roadmap/SKILL.md`, `skills/docs/organize-docs/SKILL.md`, this document's `scope-ux` section | Matt Pocock `grill-me`, Superpowers `brainstorming`, BMAD `bmad-ux`, GSD `UI-SPEC.md` |
| `author-ux` | `skills/planning/author-prd/SKILL.md`, `skills/planning/plan-roadmap/SKILL.md`, `skills/docs/organize-docs/SKILL.md`, this document's `author-ux` section | BMAD `bmad-ux`, BMAD `key-screens.md`, GSD `UI-SPEC.md`, GStack `plan-design-review`, Matt Pocock `grill-me` |
| `explore-ux` | `skills/docs/organize-docs/SKILL.md`, this document's `explore-ux` section | Matt Pocock `prototype/UI.md`, Matt Pocock `prototype`, GStack `design-shotgun`, GSD `sketch`, Superpowers `visual-companion.md`, BMAD `key-screens.md` |
| `author-design-system` | `skills/docs/organize-docs/SKILL.md`, this document's `author-design-system` section | BMAD `design-md-spec.md`, GStack `design-consultation`, GSD `UI-SPEC.md`, GStack `review/design-checklist.md` |
| `review-ux` | `skills/planning/review-prd/SKILL.md`, `skills/planning/review-prd/references/review-rubric.md`, this document's `review-ux` section | BMAD `validate.md`, GStack `plan-design-review`, GSD `gsd-ui-checker`, GSD `ui-review` |

Keep the eventual `SKILL.md` files concise. Put long rubrics, templates, and
examples in `references/` or `assets/` so future agents load only what they need.
