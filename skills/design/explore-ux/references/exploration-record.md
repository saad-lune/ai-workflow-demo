# Exploration Record Reference

Use this reference when creating a durable exploration record, a substantial
inline exploration report, or promoted exploration assets.

## File And Status

Default PRD-scoped file:

```text
ux/explorations/explore-001-short-slug.md
```

If promoted assets exist, keep the Markdown record beside the asset folder:

```text
ux/explorations/explore-001-short-slug.md
ux/explorations/explore-001-short-slug/
```

Allowed statuses:

- `exploratory`: active or unresolved exploration.
- `decision-captured`: the decision or provisional recommendation has been
  captured and routed back to the canonical UX/design artifact.
- `superseded`: replaced by a later exploration; link the replacement when
  known.

## Template

```markdown
---
title: Explore-001 Short Question
status: exploratory
parent: ../ux-spec.md
updated: YYYY-MM-DD
---

# Explore-001 Short Question

## Design Question
[One specific UX, IA, layout, visual, responsive, accessibility, state, or
interaction question.]

## Source Inputs
- `../ux-spec.md`
- `../flows/ux-001-short-slug.md`
- `../prd.md`

## Related UX Slice
[UX slice ID and title, or `standalone` with rationale.]

## Source PRD IDs
[PRD IDs such as VS-1, FR-3, UJ-2. Use `none` only for standalone exploration.]

## Mode
`textual-directions` | `static-mockups` | `interactive-prototype` | `mockup-brief`

## Context And Constraints
[User job, affected surfaces, entry/exit, existing design-system constraints,
known code/UI conventions, readiness caveats, and assumptions.]

## Options Or Prototype
### Option A: [Name]
[Description and what differs structurally from other options.]

### Option B: [Name]
[Description and what differs structurally from other options.]

### Option C: [Name]
[Description and what differs structurally from other options.]

## Scenarios / States Tested
[Scenario, start state, end state, loading/empty/error/permission/offline/focus
or other states included. Use `not applicable` with rationale for textual-only
explorations.]

## Responsive Behavior
[Form factors considered. Include desktop and mobile when responsive behavior is
part of the question.]

## Accessibility Implications
[Keyboard, focus, screen-reader, contrast, motion, touch-target, localization,
or RTL implications relevant to the decision.]

## Comparison
| Option | Strengths | Risks | Best Fit |
| --- | --- | --- | --- |
| A |  |  |  |
| B |  |  |  |
| C |  |  |  |

## Recommendation
[Recommended direction and rationale. Mark provisional when the user did not
choose interactively.]

## Decision
[Chosen direction, rejected alternatives, synthesis notes, and who/what made the
decision. Use `pending` if unresolved.]

## UX Spec Updates Needed
- [Exact `ux-spec.md`, UX slice, or `DESIGN.md` update needed.]

## Artifact Status
- Scratch artifacts: [paths in `.context/`, if any]
- Promoted assets: [relative links, if any]
- Verification: [opened/run/not run and why]
- Cleanup / promotion: [delete, archive, rewrite for production, or promote via
  author-ux/author-design-system]

## Open Questions
### Blocking
- [Question that blocks canonical UX/design update.]

### Non-Blocking
- [Follow-up that can wait.]
```

## Mode Guidance

### textual-directions

Use when the decision can be made from structured prose. Include 2-4 direction
options and a comparison table. Do not invent visuals when IA, scope, or
sequencing is the real decision.

### static-mockups

Use when seeing structure, hierarchy, density, visual rhythm, or state layout
will change the decision. Fidelity should match the question:

- wireframe fidelity for IA, page structure, flow layout, or control grouping
- higher fidelity for trust, visual hierarchy, density, or visual-system choices

Use realistic content from the PRD or source artifacts. Do not use lorem ipsum
when content length, tone, or field shape affects the decision.

### interactive-prototype

Use when the decision depends on trying a transition, progressive disclosure
model, recovery path, multi-step state, drag/drop, filtering, navigation, or
other interaction. Define the scenario and what the prototype proves before
creating it.

Prefer standalone HTML. App-embedded prototypes need explicit user confirmation
for that run and must be clearly marked exploratory in the touched files.

### mockup-brief

Use when another visual tool should produce the artifact. The brief should name:

- the design question
- target user and job
- surfaces and states to show
- required content
- design-system constraints
- responsive form factors
- accessibility constraints
- what the options must differ on
- how the output will be judged

## Asset Handling

Keep scratch files in `.context/` while exploring. Promote only assets needed to
understand the decision. Promoted assets should be small, labeled exploratory,
and linked from `Artifact Status` or the relevant option section.

For HTML or interactive assets, verify when feasible by opening or running the
artifact. Record the verification result. If verification is skipped, state the
reason instead of implying the artifact works.

Do not present exploratory code as production-ready. The exploration record may
say which idea should be promoted, but production implementation belongs to a
later build/code workflow.
