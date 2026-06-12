# UX Slice Template

Use this template for one slice under `ux/flows/`. A slice is a bounded user
workflow, not a screen, component, route, epic, story, or implementation slice.

```markdown
---
title: UX-### [Short Slice Title]
status: draft
parent: ../ux-spec.md
updated: YYYY-MM-DD
---

# UX-### [Short Slice Title]

## Source Inputs
- `../ux-spec.md`
- `../../prd.md`
- `../../prd-review.md`
- [roadmap, scope map, design docs, exploration records, other source files]

## Readiness Gate
- **PRD status:** [handoff-ready / approved / draft / unknown]
- **PRD review recommendation:** [ready-for-design-and-architecture / other]
- **Slice source:** [scope map / user selected / roadmap / other]
- **Override:** [none / summary with authorizing user and date]

## Readiness Override
[Only when applicable. Name the missing or failed gate, why work is proceeding,
who authorized it, date, and follow-up needed.]

## Source IDs
| Source ID | UX Coverage | Notes |
| --- | --- | --- |
| [FR-01] | [surface / flow step / state] | [Notes] |

## Slice Summary
[One concise paragraph describing the actor, goal, entry, exit, surfaces, key
states, and experience boundary.]

## Key UX Decisions
[Material decisions made while authoring. Keep concise. Omit if no durable
decision history is needed.]

## Actor And Goal
- **Actor:** [specific user/customer/operator]
- **Goal:** [user-visible goal]
- **Context:** [situation in which the actor starts]
- **Named protagonist:** [optional only when it clarifies the journey]

## Entry Points
- [Entry point, source surface, and triggering condition.]

## Exit / Success State
[What successful completion looks like and what the user can do next.]

## Surfaces
| Surface | Purpose | Source IDs | Notes |
| --- | --- | --- | --- |
| [Surface] | [Why it exists] | [FR/UJ IDs] | [Constraints] |

## Flow Steps
| Step | User / System Behavior | Surface | State | Source IDs |
| --- | --- | --- | --- | --- |
| 1 | [Behavior] | [Surface] | [State] | [IDs] |

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

## Exploration Dependencies
[Unresolved visual, IA, layout, or interaction decisions that should route to
`explore-ux`, plus the exact design question.]

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
- **Architecture handoff:** [passes / gaps]
- **Recommendation:** [ready-for-review / ready-for-architecture / needs-ux-revision / needs-product-revision / needs-exploration / needs-design-system]
```
