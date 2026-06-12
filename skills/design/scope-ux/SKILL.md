---
name: scope-ux
description: >-
  Break PRDs, PRD reviews, and optional roadmaps into designable UX slices before
  detailed UX authoring. Use for UX scope maps, flow inventory, PRD-to-UX
  traceability, release assumptions, surface inventory, design order, and
  deciding which slice should be authored or explored next.
---

# Scope UX

Turn product scope into bounded UX slices so detailed design work does not
become one giant UX spec.

This skill owns UX scoping and sequencing. It does not write detailed flows,
state matrices, wireframes, visual systems, implementation plans, epics,
stories, tickets, tests, or code.

## Operating Principles

1. Read before asking. Inspect the PRD package, existing UX files, design docs,
   roadmap, PRD review, and relevant repo UI conventions before interviewing.
2. Scope before detail. Identify designable workflows, surfaces, shared states,
   dependencies, and the next slice to author.
3. Ask only when a decision changes product intent or downstream design order.
   Ask one question at a time and include a recommended answer when defensible.
4. Preserve traceability. Stable PRD IDs should map to UX slices or shared state
   families without restating the whole PRD.
5. Keep visual identity separate from behavior. Flag design-system gaps, but do
   not define tokens, components, or brand rules here.
6. Treat states, permissions, accessibility, and form factor as scope inputs,
   not afterthoughts.
7. Preview before writing unless the user explicitly asks to write, save,
   update, headless, or run autonomously.

## Use This For

- Broad, multi-actor, multi-release, workflow-heavy, or ambiguous PRDs.
- PRDs where detailed UX authoring would otherwise cover many workflows at once.
- Breaking product scope into actor-goal-entry-exit UX slices.
- Mapping PRD IDs to UX slices, shared state families, release assumptions, and
  recommended design order.
- Identifying design-system gaps, exploration candidates, or product decisions
  blocking detailed UX.
- Producing an inline single-slice handoff for small PRDs when durable scoping is
  unnecessary.

## Route Elsewhere

- Raw product ideas: use `frame-opportunity`.
- PRD creation, product scope changes, or product decision resolution: use
  `author-prd`.
- PRD critique: use `review-prd`.
- Release slicing or roadmap decisions: use `plan-roadmap`.
- Detailed UX authoring: route to `author-ux` when available; otherwise stop
  with the next-slice handoff.
- Visual, IA, layout, or interaction uncertainty needing options or prototypes:
  route to `explore-ux` when available.
- Shared visual-system rules, tokens, brand, or reusable components: route to
  `author-design-system` when available.
- UX critique after `ux-spec.md` or flow files exist: route to `review-ux` when
  available.

## Inputs

Resolve an explicit PRD path when supplied. Otherwise inspect:

```text
docs/initiatives/*/planning/prds/*/prd.md
```

If exactly one plausible PRD exists, use it. If none or multiple plausible PRDs
exist, ask for the path.

Read sibling files when present:

```text
prd-review.md
roadmap.md
decision-log.md
addendum.md
ux/ux-spec.md
ux/ux-scope-map.md
docs/standards/design/DESIGN.md
```

Also inspect existing app UI, routes, components, docs, or screenshots only when
they clarify conventions, surfaces, roles, navigation, permissions, or design
system usage. Do not perform deep codebase analysis or produce file-level
implementation guidance.

Read `review-prd/references/review-rubric.md` only when `prd-review.md` is
missing, blocked, thin, or the PRD appears weak or ambiguous enough that UX
scoping must judge readiness.

## UX Applicability

Run scoping when the PRD affects user-facing experience: UI, workflow,
messaging, permissions visibility, onboarding, notifications, settings, human
review, user-facing states, or any interaction where a user must understand or
act.

If the PRD is not UX applicable, return an inline `not-applicable` result with
rationale and do not create files unless the user explicitly asks for a durable
record.

## Gates And Status

`scope-ux` may run on draft, blocked, or approved PRDs. When PRD or review gates
are not clean, the output is provisional.

Artifact statuses:

- `draft`
- `provisional`
- `ready-for-author-ux`

Recommendations:

- `ready-for-author-ux`
- `needs-product-revision`
- `needs-prd-review`
- `needs-roadmap`
- `needs-exploration`
- `needs-design-system`
- `needs-accessibility-input`
- `needs-architecture-input`
- `not-applicable`

Set `ready-for-author-ux` only when gates pass cleanly in explicit headless/write
mode, or after user approval in interactive mode. If a missing PRD or review
gate is overridden, record a `Readiness Override` and keep status
`provisional` unless the user explicitly approves promotion.

## Outputs

Use `organize-docs` for placement when available. Otherwise adapt to existing
repo conventions. Default durable output:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-spec.md
```

At this stage `ux-spec.md` is a scoping hub. It may later become the detailed UX
contract through `author-ux`.

Optional output for unusually large PRDs:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-scope-map.md
```

Create `ux-scope-map.md` when there are more than about six UX slices, multiple
actors and releases, or traceability is large enough to make `ux-spec.md` hard
to scan.

Do not create `ux/flows/*.md`, `ux-decision-log.md`, exploration files,
prototype files, epics, stories, issues, tests, architecture docs, or code from
this skill.

For small one-slice PRDs, return an inline single-slice handoff by default. Save
`ux-spec.md` only when the user asks to save/write or the slice has meaningful
UX risk: trust/AI, permissions, destructive actions, regulated/compliance flows,
payments/billing, sensitive data, async or recovery states, mobile-critical
behavior, onboarding risk, cross-role visibility, high content sensitivity, or
design-system gaps.

## References

Load [ux-scope-template.md](references/ux-scope-template.md) before creating or
substantially restructuring `ux-spec.md` or `ux-scope-map.md`.

## Workflow

1. **Orient.** Resolve the PRD package. Read source inputs, existing UX scope,
   PRD review, roadmap, design docs, and relevant repo conventions.
2. **Check applicability.** Return inline `not-applicable` when no UX surface,
   workflow, messaging, permissions visibility, or user-facing interaction
   exists.
3. **Check gates.** Identify PRD status, review recommendation, stable IDs,
   roadmap availability, and blockers. Decide whether output is clean or
   provisional.
4. **Extract candidate slices.** Use value slices, FR IDs, user journeys,
   design handoff notes, cross-cutting requirements, roadmap slices, and PRD
   review findings.
5. **Split and merge.** Apply the UX slice rules below. Do not split by route,
   component, data entity, implementation task, epic, or ticket.
6. **Resolve material decisions.** Ask one question at a time only when a split
   changes product intent or design order.
7. **Map traceability.** Assign stable `UX-001` IDs in recommended design order,
   with committed release scope before deferred work.
8. **Identify dependencies.** Note shared states, design-system gaps,
   exploration candidates, accessibility or architecture inputs, and release
   assumptions.
9. **Preview.** Unless headless/write was explicit, show the proposed scope map,
   recommendation, next slice, blockers, and intended paths before writing.
10. **Write or update.** Use the template reference. Preserve stable UX IDs,
    append new IDs, mark removed or deferred slices instead of deleting them,
    and update the changelog.

## UX Slice Rules

A UX slice is:

```text
Actor + goal + entry point + exit/success state + surfaces + key states + mapped PRD IDs
```

Split in this order:

1. Primary user goal.
2. Divergent actors or roles.
3. Setup/configuration versus repeated daily use.
4. Admin/control-plane UX versus end-user task UX.
5. Trust, permission, AI, financial, compliance, sensitive-data, or destructive
   flows.
6. Major entry-point differences.
7. Roadmap or PRD release boundaries.

A slice is too large when it has multiple actors, unrelated goals, multiple
major entry paths, unclear success criteria, or unrelated state families. A
slice is too small when it is only a screen, component, route, or task without a
complete user outcome.

Ask before finalizing broad material split decisions: actor separation,
V1/deferred boundary, setup versus daily-use separation, admin versus end-user
separation, trust/permission/destructive/compliance isolation, major entry-point
splits, or any split that excludes or defers PRD IDs.

## Traceability Rules

- Primary product, functional, value-slice, and journey IDs should map to one
  primary UX slice.
- Cross-cutting IDs may map to shared state families or multiple affected
  slices.
- Include a separate `PRD Traceability` table when there are multiple slices,
  many PRD IDs, cross-cutting IDs, or deferred/out-of-scope scope.
- Use PRD actors and roles as protagonists. Add named protagonists only when
  source-backed or user-supplied.
- Preserve existing `UX-###` IDs. Do not renumber unless the user explicitly
  accepts the traceability impact.

## Scope Detail

Use medium detail per slice: actor, goal, entry point, exit/success state,
surfaces, key states, source PRD IDs, release/status, risks, dependencies, and
next action.

Do not write detailed flow steps, state matrices, interaction rules, final
microcopy, detailed responsive layouts, component specs, tokens, or
implementation guidance. Those belong to downstream skills.

Include content/messaging needs only when they affect boundaries or risk, such
as trust disclosures, permission explanations, AI confidence labels, destructive
warnings, empty/error states, or onboarding guidance.

Include platform/form-factor assumptions and risks when they affect scope, such
as mobile-critical flows, desktop-first admin workflows, tablet field workflows,
or notification-only paths. Do not define breakpoints.

Include permissions and data visibility inside relevant slices when they affect
who can see or do what. Summarize them in shared states when cross-cutting.

Include UX-visible measurement moments only when they affect the experience. Do
not define analytics event schemas.

Include localization, RTL, and globalization only when PRD scope, audience,
market, content density, compliance, or existing app conventions make them
relevant.

## External Research Boundary

Most scoping should come from PRD artifacts, roadmap, existing design docs, and
repo conventions. Use current external research only for volatile facts that
materially affect UX scoping, such as platform policy changes, accessibility or
legal obligations, third-party UI/API limits, current AI capability constraints,
or device/platform conventions. Cite source links when used.

## Conflict Handling

When updating an existing scope map, if the PRD conflicts with prior UX scope,
stop and resolve one conflict at a time. Summarize the PRD change, existing UX
decision, affected `UX-###` IDs, and recommended resolution. After confirmation,
update in place and record the decision in `Changelog`, `Assumptions`, or
`Readiness Override` as appropriate.

## Self-Check

Before previewing, writing, or responding, verify:

- UX applicability was checked.
- PRD path and review/roadmap state are clear.
- Status and recommendation use exact allowed values.
- Provisional outputs record missing gates or overrides.
- UX slices are actor-goal-entry-exit workflows, not screens or tasks.
- Stable PRD IDs map to slices or shared state families.
- Slice IDs are stable and ordered by recommended design order.
- Deferred and out-of-scope UX are visible but not over-authored.
- Shared surfaces, state families, permissions, accessibility, form factor, and
  design-system dependencies are covered only where relevant.
- Exploration candidates are recommendations only.
- The next slice to author is named only when ready; otherwise the blocking
  route is named.
- The artifact has not drifted into detailed UX, visual design, architecture,
  implementation planning, tickets, tests, or code.

