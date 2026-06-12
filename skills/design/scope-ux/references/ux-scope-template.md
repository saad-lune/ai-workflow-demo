# UX Scope Template

Use this reference when writing or substantially restructuring `ux/ux-spec.md`
or `ux/ux-scope-map.md` from `scope-ux`. Right-size optional sections. Do not
copy placeholders that do not apply.

## Frontmatter

Use this frontmatter for `ux-spec.md`:

```yaml
---
title: [Product/PRD Name] UX Scope
status: draft|provisional|ready-for-author-ux
parent: ../prd.md
recommendation: ready-for-author-ux|needs-product-revision|needs-prd-review|needs-roadmap|needs-exploration|needs-design-system|needs-accessibility-input|needs-architecture-input|not-applicable
source_prd: ../prd.md
updated: YYYY-MM-DD
---
```

Use `parent: ../prd.md` from the `ux/` directory. If the repo convention differs,
adapt the relative path but keep the same field names.

Use `provisional` when PRD status, PRD review, release boundaries, product
decisions, or explicit readiness overrides are not clean. Use
`ready-for-author-ux` only after gates pass cleanly in explicit headless/write
mode or after user approval in interactive mode.

## Recommended Section Order

```markdown
# [Product/PRD Name] UX Scope

## Source Inputs
## UX Applicability
## Readiness Gate
## Readiness Override
## Recommendation
## UX Scope Summary
## UX Scope Map
## UX Slice Inventory
## PRD Traceability
## Release / Priority Mapping
## Surface Inventory
## Shared State Families
## Accessibility Baseline
## Design-System Dependencies
## Exploration Candidates
## Product-Facing Architecture Questions
## Recommended Design Order
## Open Design Questions
### Blockers Before Author UX
### Non-Blocking Follow-Ups
## Next Slice To Author
## Assumptions
## Changelog
## Self-Review
```

Omit `Readiness Override` when no override exists.
Omit `PRD Traceability`, `Surface Inventory`, and `Shared State Families` when
the PRD is small enough that slice records already make coverage obvious.
Omit `Release / Priority Mapping` when release or priority is not source-supplied
and no release assumptions affect design order.

## Durable `ux-spec.md` Shape

````markdown
# [Product/PRD Name] UX Scope

## Source Inputs

| Source | Type | Notes |
| --- | --- | --- |
| ../prd.md | PRD | Primary product source. |
| ../prd-review.md | PRD review | Recommendation: [value]. |
| ../roadmap.md | Roadmap | Optional release source. |

## UX Applicability

- **Result:** applicable|not-applicable
- **Rationale:** [Why the PRD does or does not affect user-facing experience.]
- **Experience scope:** [UI, workflow, messaging, permissions visibility,
  onboarding, notifications, settings, human review, states, or user action.]

## Readiness Gate

| Gate | Status | Notes |
| --- | --- | --- |
| PRD exists | pass|blocked | [path/status] |
| PRD status | pass|provisional|blocked | [draft/handoff-ready/other] |
| PRD review | pass|provisional|blocked|missing | [recommendation] |
| Stable source IDs | pass|provisional|blocked | [FR/VS/UJ status] |
| Roadmap / release clarity | pass|provisional|blocked|not-needed | [roadmap or assumptions] |

## Readiness Override

Use only when a missing or failed gate was explicitly overridden.

| Field | Value |
| --- | --- |
| Missing gate | [gate] |
| Override reason | [reason] |
| Authorizing user/source | [user/source] |
| Date | YYYY-MM-DD |
| Affected risks | [risk summary] |
| Follow-up needed | [next action] |

## Recommendation

`[exact recommendation value]`

[One concise paragraph explaining the routing recommendation.]

## UX Scope Summary

[Summarize the UX surface area, number of slices, main actors, important state
families, source release assumptions, and the highest-risk design dependency.]

## UX Scope Map

| UX Slice | User Goal | Source IDs | Release / Scope | Surfaces | State Risk | Slice Status |
| --- | --- | --- | --- | --- | --- | --- |
| UX-001 [Title] | [goal] | [VS/FR/UJ IDs] | [V1/Pilot/etc.] | [surfaces] | low|medium|high | proposed|ready-for-author-ux|needs-product-decision|needs-exploration|deferred|out-of-scope |

Use source-supplied priority only when present:

| UX Slice | Source Priority | Source |
| --- | --- | --- |
| UX-001 [Title] | P0|P1|P2|other | [roadmap/PRD/user] |

Do not invent priority labels. Use recommended design order instead.

## UX Slice Inventory

### UX-001: [Short Slice Title]

- **Status:** proposed|ready-for-author-ux|needs-product-decision|needs-exploration|deferred|out-of-scope
- **Actor / role:** [PRD actor, role, or source-backed protagonist]
- **Goal:** [user outcome]
- **Entry point:** [where the workflow starts]
- **Exit / success state:** [where the user lands or what is completed]
- **Source IDs:** [VS/FR/UJ/NFR IDs]
- **Release / scope:** [source release or release assumption]
- **Surfaces:** [screens, modals, drawers, notifications, settings, emails, etc.]
- **Key states:** [loading, empty, error, success, partial, permission, offline,
  focus, destructive, long-content, AI-confidence, source-outage, etc.]
- **Permissions / data visibility:** [who can see/do what when relevant]
- **Platform / form-factor assumptions:** [desktop/mobile/tablet/native/web when
  scope-relevant]
- **Accessibility notes:** [slice-specific risks only]
- **Content / messaging needs:** [only if wording changes risk or slice shape]
- **UX-visible measurement moments:** [only if experience-relevant]
- **Dependencies:** [product, release, design-system, exploration,
  accessibility, or architecture inputs]
- **Next action:** [author, resolve product decision, explore, defer, or route]

Keep deferred and out-of-scope slices minimal:

```markdown
### UX-00N: [Deferred Slice]

- **Status:** deferred|out-of-scope
- **Reason:** [roadmap/PRD rationale]
- **Source IDs:** [IDs]
- **Revisit condition:** [when to revisit]
````

## PRD Traceability

Include when there are multiple slices, many PRD IDs, cross-cutting IDs, or
deferred/out-of-scope scope.

| Source ID | Primary UX Slice | Cross-Cutting / Shared Coverage | Status | Notes |
| --- | --- | --- | --- | --- |
| FR-01 | UX-001 | None | covered|deferred|blocked | [notes] |
| NFR-01 | Shared State: Permissions | UX-001, UX-003 | covered|blocked | [notes] |

Functional, value-slice, and journey IDs should have one primary slice.
Cross-cutting IDs may map to shared state families or multiple affected slices.

## Release / Priority Mapping

Use when a roadmap exists, PRD release language exists, or release assumptions
affect design order.

| Release / Scope | UX Slices | Source | Notes |
| --- | --- | --- | --- |
| V1 / Pilot | UX-001, UX-002 | roadmap.md | [notes] |
| Release assumption | UX-003 | PRD language | [clearly label assumption] |

If release boundaries are material and no roadmap exists, recommend
`needs-roadmap` rather than inventing a durable roadmap.

## Surface Inventory

Include when multiple slices, shared surfaces, dashboards, lists, modals,
drawers, notifications, settings, permission surfaces, or error surfaces need
closure.

| Surface | Used By | Purpose | State Families | Notes |
| --- | --- | --- | --- | --- |
| [Surface] | UX-001, UX-002 | [purpose] | [states] | [shared/new/existing] |

Every load-bearing surface should be justified by a slice or shared state. Do
not invent screens that are not implied by PRD scope.

## Shared State Families

Include when state behavior spans slices or changes design sequencing.

| State Family | Applies To | UX Impact | Source IDs | Next Action |
| --- | --- | --- | --- | --- |
| Permissions / denied access | UX-001, UX-003 | [visibility and recovery impact] | NFR-01 | [author/explore/resolve] |
| Source outage / partial data | UX-001 | [state impact] | FR-02 | [author/explore/resolve] |

Common families: loading, empty, error, success, partial, permission-denied,
offline, focus, destructive confirmation, long content, source outage, AI
confidence, unsupported claim, billing limit, localization/RTL.

## Accessibility Baseline

Include a shared baseline for UX-applicable PRDs:

- Keyboard path and focus order must be defined during `author-ux` for authored
  slices.
- Interactive controls need accessible names and visible focus.
- Status changes that affect user decisions need screen-reader announcement
  strategy during detailed UX authoring.
- Touch targets, contrast obligations, reduced motion, and error recovery must
  be considered where relevant.
- Localization/RTL is [applicable|not applicable|unknown] because [source].

Add slice-specific notes only where the slice has special risk.

## Design-System Dependencies

| Dependency / Gap | Affected Slices | Why It Matters | Route |
| --- | --- | --- | --- |
| [Token/component/pattern/rule] | UX-001 | [risk or dependency] | `author-design-system` when available |

Only list real shared visual-system dependencies. Do not define tokens,
components, brand rules, or visual specs here.

## Exploration Candidates

| Candidate | Related Slices | Design Question | Why Prose Is Not Enough | Recommended Mode |
| --- | --- | --- | --- | --- |
| [Short title] | UX-001 | [question] | [reason] | textual-directions|static-mockups|interactive-prototype|mockup-brief |

Use only for decisions that need options, visual evidence, or interaction
testing before detailed authoring. Do not create exploration files from
`scope-ux`.

## Product-Facing Architecture Questions

| Question | Related Slices | Why It Affects UX Scope | Route |
| --- | --- | --- | --- |
| [Question] | UX-001 | [permission, async, offline, auditability, AI fallback, source outage, etc.] | architecture input |

Keep questions product-facing. Do not write architecture decisions or technical
solutions.

## Recommended Design Order

| Order | UX Slice | Reason | Prerequisites |
| --- | --- | --- | --- |
| 1 | UX-001 | [core/high-risk/foundational] | [none or dependency] |
| 2 | UX-002 | [reason] | [UX-001 or decision] |

Order by recommended design order, with committed release scope before deferred
work. Do not use user journey chronology unless it also matches the best design
sequence.

## Open Design Questions

### Blockers Before Author UX

| Question | Affected Slices | Owner / Function | Why It Blocks | Recommended Resolution |
| --- | --- | --- | --- | --- |
| [Question] | UX-001 | Product|Design|Architecture|Accessibility | [reason] | [recommended answer or route] |

### Non-Blocking Follow-Ups

| Question | Affected Slices | Revisit Condition | Notes |
| --- | --- | --- | --- |
| [Question] | UX-002 | [when] | [notes] |

## Next Slice To Author

Use one of:

```markdown
Next slice: `UX-001 [Title]`

Reason: [why this slice is ready and should go first.]

Route: `author-ux` when available; otherwise use this scope map as the handoff.
```

```markdown
No slice is ready for authoring.

Blocker: [decision, review, roadmap, exploration, design-system, accessibility,
or architecture input]

Recommended route: [exact recommendation and next action]
```

## Assumptions

| ID | Assumption | Where Used | Validation / Resolution |
| --- | --- | --- | --- |
| A-1 | [Assumption] | UX-001 | [how to resolve] |

Use assumptions for inferred release boundaries, source interpretation, or
scope decisions not explicitly settled in PRD/roadmap/review artifacts.

## Changelog

| Date | Change | Source |
| --- | --- | --- |
| YYYY-MM-DD | Initial UX scope draft. | [source/user/headless] |

Record material scope split decisions, readiness overrides, deferred slices,
added/removed slices, and recommendation changes. Preserve history without
turning this into a separate decision log.

## Self-Review

- [ ] UX applicability checked.
- [ ] PRD path and review/roadmap state are clear.
- [ ] Status and recommendation use exact allowed values.
- [ ] Readiness override is present when gates were bypassed.
- [ ] UX slices are bounded actor-goal-entry-exit workflows.
- [ ] Stable PRD IDs map to slices or shared state families.
- [ ] `UX-###` IDs are stable and ordered by recommended design order.
- [ ] Deferred and out-of-scope UX are visible but not over-authored.
- [ ] Shared surfaces and state families are covered when relevant.
- [ ] Permissions/data visibility is noted where relevant.
- [ ] Accessibility baseline is present and slice-specific risks are called out.
- [ ] Platform/form-factor assumptions are stated only where scope-relevant.
- [ ] Design-system dependencies are identified without defining tokens or components.
- [ ] Exploration candidates are recommendations only.
- [ ] Product-facing architecture questions avoid technical solutions.
- [ ] Next slice to author is named only when ready.
- [ ] No detailed UX flows, visual specs, implementation tasks, tests, or code were added.
````

## Optional `ux-scope-map.md`

When `ux-spec.md` would become hard to scan, move the bulky scope map,
traceability, slice inventory, surface inventory, and shared-state tables to
`ux-scope-map.md`.

Use this frontmatter:

```yaml
---
title: [Product/PRD Name] UX Scope Map
status: draft|provisional|ready-for-author-ux
parent: ./ux-spec.md
recommendation: [same recommendation as hub or narrower scope-map recommendation]
source_prd: ../prd.md
updated: YYYY-MM-DD
---
```

Keep `ux-spec.md` as the hub with summary, recommendation, links, next slice,
blockers, and handoff. Link both files to each other.

## Inline Single-Slice Handoff

For small one-slice PRDs where durable scoping is unnecessary, return this shape
inline:

```markdown
UX scoping result: single-slice handoff

Source PRD: [path]
UX applicability: applicable because [reason]
Recommendation: [value]

Slice: UX-001 [Title]
Actor / role: [role]
Goal: [goal]
Entry point: [entry]
Exit / success state: [exit]
Source IDs: [IDs]
Surfaces: [surfaces]
Key states: [states]
Risks / dependencies: [only meaningful risks]
Next action: [author-ux route or blocker]

Durable ux-spec.md: not necessary unless you want a saved scoping artifact or
the risk profile changes.
```
