---
name: review-erd
description: >-
  Critique Engineering Requirements Docs (ERDs) before implementation planning.
  Use for ERD readiness reviews, PRD/UX/codebase-map gate checks, architecture,
  data, API, integration, security, observability, testing, rollout, rollback,
  specialist-review, blocker findings, dimension verdicts, and next-step
  recommendations. Preview before saving erd-review.md unless write, save, or
  headless mode is explicit.
---

# Review ERD

Review a draft Engineering Requirements Doc before implementation planning
depends on it. In this workflow, **ERD means Engineering Requirements Doc**, not
entity-relationship diagram.

This skill is critique-only: do not edit `erd.md`, PRDs, UX specs, codebase
maps, implementation plans, issue lists, tickets, tests, or code.

## Operating Principles

1. Read before asking. If source paths, PRDs, UX files, codebase maps, or repo
   routing are discoverable, inspect them first.
2. Review whether the ERD is safe for implementation planning to rely on.
   Findings should explain how a gap could make work splits, dependency order,
   architecture, risk ownership, or verification strategy wrong.
3. Keep the review independent. Ask questions only when needed to resolve the
   source path or review scope. Record engineering ambiguities as findings or
   open questions instead of resolving them inline.
4. Still review the ERD when upstream PRD, UX, or codebase-map gates have
   blockers, but reflect upstream instability in the recommendation. Do not
   return `ready-for-implementation-planning` when upstream inputs are unsafe.
5. Verify code claims lightly when useful, but do not create a codebase
   architecture map. Route missing brownfield discovery to
   `map-codebase-architecture`.
6. Use citations wherever possible: ERD sections, local file paths, PRD IDs,
   UX slice IDs, codebase-map sections, code paths, or verified external
   sources.
7. Include suggested fixes, not replacement ERD prose. ERD edits belong to
   `author-erd`.
8. Preview the decision before writing durable artifacts unless the user
   explicitly asked to write/save or requested a headless/non-interactive
   review.

## Use This For

- Reviewing `engineering/erd.md` before implementation planning begins.
- Checking whether an ERD is traceable to PRD and UX decisions.
- Checking whether architecture, data, API, integration, security,
  observability, testing, rollout, rollback, migration, risk, and ownership
  decisions are ready for planning.
- Reviewing one ERD section or concern, such as data model, API contracts,
  rollout, or test strategy, when the user explicitly requests a partial review.
- Deciding whether specialist review is needed before implementation planning.

## Route Elsewhere

- Creating or revising an Engineering Requirements Doc: route to `author-erd`.
- Mapping brownfield systems before ERD authoring or review: route to
  `map-codebase-architecture`.
- Turning an approved ERD into milestones, slices, tasks, or parallel work
  plans: route to `plan-implementation`.
- PRD/product-scope changes: route to `author-prd` or `review-prd`.
- UX behavior, flows, states, surfaces, or interaction changes: route to
  `author-ux` or `review-ux`.
- Entity-relationship diagrams, schema diagrams, or database-only models:
  return `not-applicable` for this skill and route to an appropriate data-model
  or schema review.
- Code implementation, refactoring, tests, or production fixes: route to build
  or QA work after implementation planning.

## Resolve The ERD

Use an explicit ERD path when supplied. Explicit non-standard paths are valid
inputs, but write `erd-review.md` only when a sensible sibling review path is
clear or the user confirms the destination.

Otherwise inspect:

```text
docs/initiatives/*/planning/prds/*/engineering/erd.md
```

If exactly one plausible ERD exists, use it. If none or multiple plausible ERDs
exist, ask for the path. Do not silently pick the newest or highest-numbered
ERD.

Expected review output path:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/engineering/erd-review.md
```

Use existing repo conventions when they differ. Use `organize-docs` for routing
questions when available.

## Inputs To Read

Read what exists and is relevant:

```text
engineering/erd.md
engineering/erd-review.md, if updating
engineering/codebase-architecture-map.md, if present
engineering/architecture-map.md, if present
prd.md
prd-review.md
decision-log.md
roadmap.md, optional
addendum.md, optional
ux/ux-spec.md
ux/flows/*.md
ux/ux-review.md
docs/architecture/**, optional
docs/standards/**, optional
```

For explicit non-standard ERD paths, read nearby product, UX, architecture,
codebase-map, or decision artifacts mentioned in frontmatter, links, imports,
or sibling files.

## Upstream Gates

Use soft gates. Continue the review when a gate is missing or failed, but do
not return `ready-for-implementation-planning` when a missing or failed gate is
material to implementation planning.

Check:

- `prd.md` or an equivalent product source exists.
- UX readiness exists when the ERD has UI, workflow, messaging, permissions
  visibility, user-facing states, or other experience behavior.
- Brownfield work has a codebase architecture map, or the ERD gives an explicit
  rationale that the work is greenfield or small enough not to need one.
- Prior `prd-review.md`, `ux-review.md`, or `erd-review.md` recommendations do
  not identify unresolved blockers that invalidate the ERD.

Treat missing gates as:

- blocker when implementation planning would likely choose the wrong scope,
  behavior, system boundary, dependency order, or risk treatment;
- non-blocker when the gap is useful but planning can safely proceed;
- note when the gate is genuinely not applicable.

## Review Scope

Use one of these scopes:

- `full-review`: review the whole ERD against all core dimensions.
- `partial-review`: review only an explicitly requested section, concern, or
  changed area.

Default behavior:

- User asks generally to "review the ERD": run `full-review`.
- User asks for a section or concern: run `partial-review`, label the scope
  clearly, and do not return `ready-for-implementation-planning` for the whole
  ERD unless a prior full review is still valid or the user explicitly expands
  scope.

## Workflow

1. **Orient.**
   - Resolve the ERD or explicit review source.
   - Read the ERD, prior review, upstream PRD and UX artifacts, relevant
     codebase map, and relevant architecture or standards docs.
   - Identify full versus partial review scope.

2. **Check applicability.**
   If the source is not an Engineering Requirements Doc, or has no meaningful
   implementation-impacting architecture, data, API, integration, operational,
   testing, rollout, or technical planning decisions, return `not-applicable`
   with rationale.

3. **Run upstream gates.**
   Note PRD, UX, and codebase-map readiness. Use upstream recommendations when
   missing or failed gates materially invalidate the ERD.

4. **Verify code claims lightly.**
   Inspect code only to resolve decision-critical claims, such as whether a
   cited module, API, schema, migration, job, integration, or test area exists.
   Do not perform broad discovery or create the missing map.

5. **Verify volatile decision-critical facts.**
   Use current sources only when architecture readiness depends on facts that
   could have changed: platform limits, API behavior, compliance rules, pricing
   quotas, model capabilities, security advisories, vendor deprecations, or
   external service constraints. If verification becomes substantial, recommend
   `needs-technical-exploration`, `needs-specialist-review`, or upstream
   research instead of burying a research project in the review.

6. **Review against the rubric.**
   Read [review-rubric.md](references/review-rubric.md) before a substantial
   review or before writing the report. Use one integrated review with
   conditional specialist lenses. Do not use subagents by default.

7. **Classify findings.**
   - `blocker`: unresolved issue likely to make implementation planning produce
     the wrong work split, dependency order, technical approach, safety plan, or
     verification strategy.
   - `non-blocker`: useful revision that can safely happen in parallel with
     implementation planning or early implementation.
   - `note`: context, caveat, or non-applicable dimension.

8. **Choose one overall recommendation.**
   Use exactly one recommendation value from the list below. Prefer the most
   upstream blocking dependency when multiple ordinary blocker types exist.

9. **Preview before writing.**
   Unless the user explicitly asked to save/write or requested headless mode,
   show a decision preview with:
   - ERD source path and intended review path
   - review scope
   - upstream gate summary
   - recommendation
   - blocker count and top blockers
   - dimension verdicts
   - specialist review needs
   - code verification notes
   - immediate next action
   - assumptions or facts you could not verify

   Ask whether to write `erd-review.md`. If the user wants changes to the
   review judgment, discuss and revise the preview before saving.

10. **Write the report after confirmation.**
    Write only `erd-review.md`. If a previous review exists, update it rather
    than creating a second review file unless the user asks for a separate
    dated review.

## Recommendation Values

Use exactly one:

- `ready-for-implementation-planning`
- `needs-product-revision`
- `needs-ux-revision`
- `needs-codebase-map`
- `needs-architecture-revision`
- `needs-technical-exploration`
- `needs-specialist-review`
- `block`
- `not-applicable`

Recommendation priority:

1. `not-applicable` when the source is not an Engineering Requirements Doc or
   has no implementation-planning relevance.
2. `needs-product-revision` when PRD scope or product decisions are unstable
   enough to invalidate the ERD.
3. `needs-ux-revision` when UX behavior, states, permissions visibility, or
   user-facing constraints are unstable enough to invalidate the ERD.
4. `needs-codebase-map` when brownfield assumptions are not grounded and the
   missing map would change architecture or planning decisions.
5. `needs-technical-exploration` when a load-bearing engineering decision needs
   option analysis, prototype evidence, or explicit closure.
6. `needs-specialist-review` when a domain owner must assess material risk
   before planning can proceed.
7. `needs-architecture-revision` for ordinary ERD blockers.
8. `block` only when the work should not proceed in its current direction or
   the source is fundamentally unrecoverable by normal revision routes.
9. `ready-for-implementation-planning` only when no blockers remain. Non-blockers
   may remain if planning can safely proceed.

## Report Frontmatter

Use lightweight frontmatter:

```yaml
---
title: ERD Review
parent: ./erd.md
recommendation: needs-architecture-revision
---
```

For explicit non-standard sources, set `parent` to the reviewed artifact path
when a relative path is clear.

## Report Structure

Use this structure for `erd-review.md` and right-size detail to the ERD:

```markdown
# ERD Review

## Source Inputs
- `erd.md` - primary Engineering Requirements Doc
- [other paths or source labels]

## Review Scope
`full-review`

## Upstream Gates
| Gate | Status | Notes |
| --- | --- | --- |
| PRD | ready | [short note] |

Statuses: `ready`, `blocked`, `missing`, `not-applicable`.

## Recommendation
`needs-architecture-revision`

[One concise paragraph explaining the verdict.]

## Blocker Summary
- [Blocker title] - [why it blocks implementation planning] (source: [citation])

## Dimension Verdicts
| Dimension | Verdict | Notes |
| --- | --- | --- |
| Architecture decision clarity | blocked | [short note] |

Verdicts: `ready`, `minor-gaps`, `blocked`, `not-applicable`.

## Reviewer Status
| Reviewer / Function | Status | Reason |
| --- | --- | --- |
| Engineering | blocked | [reason] |

Statuses: `aligned`, `blocked`, `not-reviewed`, `not-applicable`.

## Specialist Review Needs
| Specialty | Needed | Reason |
| --- | --- | --- |
| Security/privacy | yes | [risk or decision] |

## Findings By Dimension
### [Dimension]
**Verdict:** blocked

#### [Finding title]
- Classification: blocker|non-blocker|note
- Source: [ERD/PRD/UX/code path/link]
- Why it matters: [planning or implementation risk]
- Suggested fix: [what should change, without replacement ERD prose]

## Code Verification Notes
- Checked: [paths or claims]
- Verified: [short result]
- Limits: [what was not verified]

## Open Questions
### Blocking
- [Question] - [who should answer and why it blocks]

### Non-Blocking
- [Question] - [when it can be resolved]

## Next Action
[Immediate action matching the recommendation.]
```

## Self-Check

Before previewing or writing, verify:

- The review is critique-only and did not mutate ERD, PRD, UX, architecture-map,
  implementation-plan, ticket, test, or code artifacts.
- The recommendation uses the exact allowed vocabulary.
- Every reviewed dimension has `ready`, `minor-gaps`, `blocked`, or
  `not-applicable`.
- Blockers are truly downstream-blocking.
- Open questions are split into blocking and non-blocking.
- Upstream gates are reflected in the recommendation.
- Partial reviews cannot be mistaken for full ERD approval.
- Code verification notes summarize evidence and limits without becoming a
  codebase architecture map.
- Specialist review needs are tied to material risk, not generic ceremony.
- Findings cite sources where possible.
- Suggested fixes do not include replacement ERD prose.
- The preview happened before writing unless save/write or headless mode was
  explicit.
