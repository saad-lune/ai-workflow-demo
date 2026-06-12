# Compact UX Spec Template

Use this template for a small PRD with one coherent UX outcome. Right-size each
section, but keep the section order stable. Omit optional sections only when
they are not applicable.

```markdown
---
title: [Product / PRD Name] UX Spec
status: draft
parent: ../prd.md
updated: YYYY-MM-DD
---

# [Product / PRD Name] UX Spec

## Source Inputs
- `../prd.md`
- `../prd-review.md`
- [other source files]

## Readiness Gate
- **PRD status:** [handoff-ready / approved / draft / unknown]
- **PRD review recommendation:** [ready-for-design-and-architecture / other]
- **UX applicability:** [applicable / not-applicable]
- **Override:** [none / summary with authorizing user and date]

## Readiness Override
[Only when applicable. Name the missing or failed gate, why work is proceeding,
who authorized it, date, and follow-up needed.]

## Source IDs
[Compact list of PRD value slices, functional requirements, user journeys, or
roadmap slices covered by this UX spec.]

## UX Summary
[One concise paragraph describing the user outcome and experience boundary.]

## Key UX Decisions
[Material decisions made while authoring. Keep concise. Omit if no durable
decision history is needed.]

## Actor And Goal
- **Actor:** [specific user/customer/operator]
- **Goal:** [user-visible goal]
- **Context:** [situation in which the actor starts]

## Entry Points
- [Entry point and source surface]

## Exit / Success State
[What successful completion looks like and what the user can do next.]

## Surfaces
| Surface | Purpose | Source IDs | Notes |
| --- | --- | --- | --- |
| [Surface] | [Why it exists] | [FR/UJ IDs] | [Constraints] |

## Flow
[Step-by-step flow. Use a short Mermaid diagram only if it improves clarity.]

## State Matrix
| State | Applicable? | UX Behavior | Microcopy / Feedback | Source IDs |
| --- | --- | --- | --- | --- |
| Loading | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Empty | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Error | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Success | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Partial | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Permission denied | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Offline | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Focus | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Destructive confirmation | yes/no | [Behavior] | [Copy or feedback] | [IDs] |
| Long content | yes/no | [Behavior] | [Copy or feedback] | [IDs] |

## Interaction Rules
[Controls, affordances, validation, confirmation, undo/recovery, progressive
disclosure, feedback timing, and user-control rules.]

## Microcopy And Content
[Load-bearing CTAs, empty/error/success messages, destructive copy, validation
messages, trust/status text, and content rules for non-specified text.]

## Responsive / Platform Behavior
- **Supported platforms/form factors:** [desktop web, mobile web, native, etc.]
- **Behavior:** [layout, navigation, density, touch/keyboard, and state behavior
  for supported targets.]

## Accessibility
[Keyboard path, focus behavior, labels/landmarks, screen-reader announcements,
touch targets, reduced motion, localization/RTL. State non-applicability
explicitly where relevant.]

## Data / Permission Visibility
[What data is visible to whom, when permissions affect surfaces/states, and how
restricted or unavailable data appears.]

## UX-Visible Measurement
[Success signals and user actions that must be observable. Do not define event
names, schemas, dashboards, or instrumentation.]

## Feature-Specific Visual Guidance
[Only hierarchy, density, layout intent, or state comprehension that affects UX.
Route shared tokens or reusable component rules to `author-design-system`.]

## Design-System Dependencies
[Existing tokens/components/patterns to reuse, and any shared-system gaps to
route to `author-design-system`.]

## Architecture Handoff
[Product-facing constraints architecture must know: surfaces, states,
permissions, data visibility, feedback/latency expectations, recovery,
trust boundaries, and unresolved behavior questions. No systems/API/schema/file
plans.]

## Recommended PRD Changes
[Non-blocking upstream changes discovered during UX authoring. If a change
blocks UX, stop durable authoring instead of documenting around it.]

## Open Questions
### Blockers Before Architecture
- [Question, owner/function, and why it blocks.]

### Non-Blocking Follow-Ups
- [Question and when it can be resolved.]

## Changelog
- YYYY-MM-DD - [Created/updated and material change.]

## Self-Review
- **Traceability:** [passes / gaps]
- **Flow coverage:** [passes / gaps]
- **State coverage:** [passes / gaps]
- **Responsive/platform behavior:** [passes / gaps]
- **Accessibility:** [passes / gaps]
- **Data/permission visibility:** [passes / gaps]
- **Design-system dependencies:** [passes / gaps]
- **Architecture handoff:** [passes / gaps]
- **Recommendation:** [ready-for-review / ready-for-architecture / needs-ux-revision / needs-product-revision / needs-exploration / needs-design-system]
```
