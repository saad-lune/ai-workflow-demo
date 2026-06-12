# UX Hub Template

Use this template for a multi-slice PRD package. The hub summarizes package
coverage and shared constraints. Do not duplicate slice-level flow detail that
belongs in `ux/flows/ux-###-short-slug.md`.

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
- `../roadmap.md`
- [scope map, design docs, exploration records, other source files]

## Readiness Gate
- **PRD status:** [handoff-ready / approved / draft / unknown]
- **PRD review recommendation:** [ready-for-design-and-architecture / other]
- **Scope map status:** [present / missing / overridden]
- **UX applicability:** [applicable / not-applicable]
- **Override:** [none / summary with authorizing user and date]

## Readiness Override
[Only when applicable. Name the missing or failed gate, why work is proceeding,
who authorized it, date, and follow-up needed.]

## Package Summary
[One concise paragraph describing what this UX package covers and what remains
outside it.]

## UX Scope Source
[Link to `ux-scope-map.md`, scope section in this file, roadmap slice, or user
selection that defines the slices.]

## Slice Inventory
| UX Slice | Status | User Goal | Source IDs | Release Slice | Artifact | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| UX-001 [Title] | draft | [Goal] | [FR/UJ IDs] | [Release] | `flows/ux-001-title.md` | [Notes] |

## PRD Traceability Summary
| Source ID | Covered By | Coverage Status | Notes |
| --- | --- | --- | --- |
| [FR-01] | [UX-001] | covered / partial / deferred | [Notes] |

## Shared Information Architecture
[Navigation, hierarchy, entry patterns, cross-slice surface relationships, and
global UX rules that apply across slices.]

## Shared Surfaces
| Surface | Used By | Shared Behavior | Notes |
| --- | --- | --- | --- |
| [Surface] | [UX-001, UX-002] | [Shared rule] | [Notes] |

## Shared State Families
[Cross-slice loading, empty, error, permission, offline, focus, destructive, or
long-content behavior that should remain consistent.]

## Design-System Dependencies
[Existing tokens/components/patterns to reuse, and shared-system gaps to route
to `author-design-system`.]

## Exploration Dependencies
[Unresolved visual, IA, layout, or interaction decisions that should route to
`explore-ux`, plus the slice they affect.]

## Key UX Decisions
[Material package-level decisions. Keep concise. Omit if no durable decision
history is needed.]

## Architecture Handoff Summary
[Cross-slice product-facing constraints architecture must know. Slice-specific
details belong in slice files.]

## Recommended PRD Changes
[Non-blocking upstream changes discovered during UX authoring. If a change
blocks UX, stop durable authoring instead of documenting around it.]

## Open Questions
### Blockers Before Architecture
- [Question, owner/function, affected slice, and why it blocks.]

### Non-Blocking Follow-Ups
- [Question, affected slice, and when it can be resolved.]

## Changelog
- YYYY-MM-DD - [Created/updated and material change.]

## Self-Review
- **Slice inventory:** [passes / gaps]
- **Traceability summary:** [passes / gaps]
- **Shared surfaces/states:** [passes / gaps]
- **Design-system dependencies:** [passes / gaps]
- **Architecture handoff summary:** [passes / gaps]
- **Recommendation:** [ready-for-review / ready-for-architecture / needs-ux-revision / needs-product-revision / needs-exploration / needs-design-system]
```
