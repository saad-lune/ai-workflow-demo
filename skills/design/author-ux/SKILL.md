---
name: author-ux
description: >-
  Create or update UX design contracts for a scoped UX slice or small PRD. Use
  for user flows, surfaces, state matrices, interaction behavior, microcopy,
  responsive behavior, accessibility, data and permission visibility,
  UX-visible measurement, and architecture handoff before implementation
  planning or code.
---

# Author UX

Turn a scoped UX slice or small PRD into a durable UX contract that Design,
Architecture, and later delivery planning can rely on.

This skill owns product-level UX behavior. It should preserve PRD traceability,
make user-facing states explicit, and stop before architecture, epics, stories,
implementation tasks, QA, or code.

## Stance

- Read available context before asking: PRD package, UX scope map, roadmap,
  design docs, existing UX files, exploration records, and obvious UI
  conventions.
- Do not ask the user a question that repo docs, visible files, or source
  material can answer. Explore first, then ask only for missing or conflicting
  context.
- Author one UX slice at a time, except when the PRD is small enough for one
  complete `ux-spec.md`.
- Depend on `scope-ux` for broad or ambiguous PRDs. If no scope map exists and
  the PRD is broad, route to `scope-ux` instead of deriving a full slice map
  here.
- Ask one unresolved design decision at a time. Provide 2-4 plausible options
  and a recommended answer when context supports one.
- Keep visual guidance lightweight and feature-specific. Route reusable tokens,
  brand, typography, spacing scales, contrast systems, and shared components to
  `author-design-system`.
- Route materially different IA, layout, visual, or interaction alternatives to
  `explore-ux` when the decision cannot be responsibly locked from prose.
- Do not edit upstream planning artifacts. Recommend PRD, review, or roadmap
  changes and route them to the owning skill.
- Do not create `ux-decision-log.md` in v1. Record readiness overrides,
  material UX decisions, open questions, changelog entries, and self-review
  inside the relevant UX artifact.

## Use This For

- Writing or updating a UX contract from an approved PRD or scoped UX slice.
- Turning `scope-ux` output into slice-level flows, surfaces, states,
  interaction rules, content guidance, responsive behavior, accessibility, and
  architecture handoff.
- Writing a single `ux-spec.md` for a small PRD with one coherent UX outcome.
- Updating a multi-slice UX hub while authoring or revising a slice file.
- Clarifying feature-specific visual hierarchy, density, layout intent, or
  state comprehension when it affects UX behavior.

## Route Elsewhere

- Raw product ideas or unclear user/problem/stakes: use `frame-opportunity`.
- Product requirement authoring or upstream scope changes: use `author-prd`.
- PRD critique: use `review-prd`.
- Release phasing, v1/v2 sequencing, or scope deferral: use `plan-roadmap`.
- Broad or ambiguous PRD-to-UX slice mapping: use `scope-ux`.
- Visual, IA, layout, or interaction options needing side-by-side exploration,
  mockups, or prototypes: use `explore-ux`.
- Shared visual identity, tokens, typography, color, spacing, shape, or
  reusable component rules: use `author-design-system`.
- UX critique: use `review-ux`.
- Production UI implementation, browser QA, or visual regression work: route to
  later build or QA skills.

## Inputs And Gates

Inspect these first when present:

```text
ux/ux-spec.md or ux/ux-scope-map.md
ux/flows/*.md
prd.md
prd-review.md
roadmap.md
decision-log.md
addendum.md
docs/standards/design/DESIGN.md
ux/explorations/*
existing app docs, routes, components, screenshots, or UI conventions
```

Durable writes require clean gates or an explicit user override:

- `prd.md` exists.
- PRD status is `handoff-ready`, final, approved, or an equivalent local status.
- `prd-review.md` recommendation is `ready-for-design-and-architecture`, or an
  equivalent passing local recommendation.
- UX is applicable: there is UI, workflow, messaging, permissions visibility,
  user-facing state, or another experience surface to design.
- For broad or ambiguous PRDs, a UX scope map exists or the user explicitly
  selects one slice.

Inline UX advice may proceed when gates are imperfect, but label assumptions and
do not write durable UX artifacts unless the user explicitly overrides the
missing or failed gate. When an override is used, record a concise
`Readiness Override` section in the affected UX artifact.

## Outputs

Use `organize-docs` for placement when available. Otherwise inspect existing
documentation conventions and prefer a compatible path.

For a small PRD with one coherent UX outcome:

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-spec.md
```

For a multi-slice PRD:

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/ux-spec.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/flows/ux-###-short-slug.md
```

The hub `ux-spec.md` owns package inventory, shared IA, shared surfaces,
cross-slice state families, traceability summary, and architecture handoff
summary. Slice files own detailed slice behavior.

Do not create `ux-decision-log.md` in this iteration.

## References

Load these only when needed:

- [ux-spec-template.md](references/ux-spec-template.md): when writing a compact
  single-spec UX contract for a small PRD.
- [ux-hub-template.md](references/ux-hub-template.md): when creating or updating
  the multi-slice UX hub.
- [ux-slice-template.md](references/ux-slice-template.md): when creating or
  substantially updating a slice file under `ux/flows/`.

## Workflow

1. **Orient.**
   - Resolve the PRD package or UX path from the user's request.
   - Read existing UX artifacts, scope maps, PRD package files, roadmap, design
     docs, and obvious UI conventions before asking questions.
   - Shallowly inspect implementation code only when useful for routes,
     terminology, existing patterns, or design-system usage. Do not produce
     file-level implementation guidance.

2. **Detect mode.**
   Determine whether the task is create, update, or resume; whether the work is
   a small PRD or one selected UX slice; and whether a multi-slice hub must be
   updated.

3. **Run gates.**
   For durable writes, check PRD status, PRD review recommendation, UX
   applicability, and slice readiness. If a gate fails, offer:
   - route upstream to the owning skill, or
   - proceed only with explicit readiness override.

4. **Select the design unit.**
   - Small PRD: author or update one compact `ux-spec.md`.
   - Multi-slice PRD: author exactly one selected UX slice and keep the hub
     current.
   - Broad PRD without scope map or selected slice: route to `scope-ux`.

5. **Resolve the UX contract.**
   Cover the relevant actor, context, goal, entry points, exit/success state,
   surfaces, flow steps, states, interaction rules, microcopy, supported
   platforms, accessibility, data and permission visibility, UX-visible
   measurement, feature-specific visual guidance, and architecture handoff.

6. **Ask only unresolved decisions.**
   Ask one question at a time with options and a recommended answer. If a
   decision needs side-by-side options, visuals, or interaction testing, route
   to `explore-ux` and capture the needed exploration question.

7. **Draft from templates.**
   Use the appropriate reference template. Preserve PRD IDs. Reference
   requirements and journeys rather than restating the whole PRD.

8. **Handle product gaps.**
   If a missing product decision blocks the UX contract, stop durable authoring
   and route upstream. If it is non-blocking, continue with explicit assumptions
   and capture `Recommended PRD Changes`.

9. **Set status and self-review.**
   Allowed UX statuses are `draft`, `ready-for-review`, and
   `ready-for-architecture`. Default to `draft` or `ready-for-review`.
   Set `ready-for-architecture` only when the self-check passes and the user
   explicitly approves skipping or completing UX review.

10. **Preview before writing.**
    Before creating or overwriting durable UX artifacts, show the intended
    paths, status, gates, override status, top assumptions, blockers, and next
    action. Skip preview only when the user explicitly requested headless
    write/update and the gates are clean or explicitly overridden.

11. **Report outcome.**
    Final response should include paths created or updated, status,
    blockers/non-blockers, whether the handoff-ready bar passes, and the
    recommended next step.

## Artifact Rules

- Preserve PRD traceability. Small specs may use a compact `Source IDs` section;
  multi-slice, high-risk, regulated, AI/trust, permission, or
  architecture-sensitive work should use a traceability table.
- A UX slice is:

  ```text
  Actor + goal + entry point + end state + surfaces + key states + mapped PRD IDs
  ```

- Use concrete actor, context, goal, entry, and exit for every flow. Named
  protagonists are optional when they clarify high-risk, ambiguous, emotional,
  multi-role, or consumer-facing journeys.
- Run a relevance pass over standard states: loading, empty, error, success,
  partial, permission-denied, offline, focus, destructive confirmation, and
  long-content. Document applicable states and explain surprising omissions.
- Declare supported platforms and form factors before describing responsive
  behavior. Avoid vague statements such as "stack on mobile."
- Include an accessibility relevance pass in every durable artifact. Cover
  applicable keyboard paths, focus behavior, labels, landmarks, screen-reader
  announcements, touch targets, reduced motion, and localization/RTL concerns.
  Route visual contrast and token obligations to `author-design-system`.
- Lock load-bearing microcopy: CTAs, empty/error/success states, destructive
  confirmations, validation messages, trust text, and status messages.
- Include only UX/product-visible measurement needs: success signals, key user
  actions that must be observable, and user-facing consent or telemetry
  visibility. Do not write event schemas, dashboards, or instrumentation plans.
- Include feature-specific visual guidance only when it affects hierarchy,
  density, layout, state comprehension, or usability. Do not define shared
  tokens or brand rules.
- Include `Architecture Handoff` in every artifact. Keep it behavioral and
  constraint-oriented: surfaces, states, permissions, data visibility,
  feedback/latency expectations, recovery expectations, trust boundaries, and
  unresolved behavior questions. Do not prescribe systems, APIs, schemas, file
  paths, or component implementations.
- Simple text diagrams or Mermaid flow diagrams are allowed when they clarify
  flows. Mockups, layout alternatives, and prototypes belong in `explore-ux`.

## Self-Check

Before previewing or writing, verify:

- The correct unit is being authored: small PRD or one UX slice.
- Broad or ambiguous scope has been routed to `scope-ux`.
- Durable write gates are clean or an explicit override is recorded.
- Every in-scope PRD ID maps to at least one surface, flow step, or state.
- Key success and failure paths are covered.
- Load-bearing states are covered or explicitly not applicable.
- Supported form factors and responsive behavior are explicit.
- Accessibility is present and right-sized.
- Data and permission visibility are clear.
- UX-visible measurement needs are product-level only.
- Design-system dependencies are identified and routed.
- Architecture handoff names product-facing constraints without implementation
  design.
- Blocking product gaps stop durable authoring; non-blocking gaps are captured
  as recommended upstream changes.
- The artifact has not drifted into PRD editing, architecture, stories, tasks,
  QA, code, event schemas, or component implementation.
