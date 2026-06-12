---
name: review-ux
description: >-
  Critique UX specs, UX slice files, and design contracts before architecture or
  implementation. Use for package-level UX coverage reviews, slice readiness,
  PRD traceability, flow coverage, state coverage, accessibility, responsive
  behavior, design-system alignment, blocker findings, and next-step
  recommendations. Preview before saving ux-review.md unless write, save, or
  headless mode is explicit.
---

# Review UX

Review a UX package or individual UX slice before architecture and build agents
depend on it. This skill is critique-only: do not edit `ux-spec.md`,
`ux/flows/*.md`, PRDs, design-system docs, prototypes, implementation plans, or
code.

`review-ux` is a downstream validator for the design pipeline. It may reference
future producer skills such as `scope-ux`, `author-ux`, `explore-ux`, and
`author-design-system`, but it must not duplicate their authoring work.

## Operating Principles

1. Read before asking. If source paths, PRD package files, UX files, design
   conventions, or repo routing are discoverable, inspect them first.
2. Review whether the UX contract is safe for architecture/build to rely on.
   Findings should explain how a gap could make product behavior,
   implementation, accessibility, design-system, or architecture decisions wrong.
3. Keep the review independent. Ask questions only when needed to resolve the
   source path or review scope. Record design ambiguities as findings or open
   questions instead of resolving them inline.
4. Still review UX when upstream PRD readiness has blockers, but reflect
   upstream instability in the recommendation. Do not return
   `ready-for-architecture` when the PRD scope is not reliable.
5. Treat screenshots, mockups, prototypes, and Figma handoff notes as supporting
   evidence only. This is not browser-based visual QA of implemented UI.
6. Use citations wherever possible: UX section names, local file paths, PRD IDs,
   exploration records, design-system docs, or verified external sources.
7. Include suggested fixes, not replacement UX prose. UX edits belong to
   `author-ux`, `scope-ux`, `explore-ux`, or `author-design-system`.
8. Preview the decision before writing durable artifacts unless the user
   explicitly asked to write/save or requested a headless/non-interactive review.

## Use This For

- Reviewing `ux-spec.md` or `ux/flows/*.md` before architecture or
  implementation begins.
- Checking package-level UX coverage against PRD scope.
- Checking whether one UX slice is ready for architecture/build.
- Critiquing interaction behavior, state coverage, microcopy, responsive
  behavior, accessibility, exploration closure, and design-system alignment.
- Reviewing an explicit non-standard UX contract path such as `EXPERIENCE.md`,
  `UI-SPEC.md`, or a design handoff summary.

## Route Elsewhere

- Missing UX scope map for a broad PRD: route to `scope-ux`.
- Creating or editing UX specs, slice files, flows, states, or microcopy: route
  to `author-ux`.
- Comparing design directions, mockups, or interaction prototypes: route to
  `explore-ux`.
- Creating or updating shared tokens, visual language, or reusable component
  rules: route to `author-design-system`.
- PRD/product-scope changes: route to `author-prd` or `review-prd`.
- Implemented UI screenshots, browser checks, visual polish, or code fixes:
  route to a later visual-review/QA/build skill.

## Resolve The UX Package

Use an explicit UX path when supplied. Explicit non-standard paths are valid
inputs, but write `ux-review.md` only when a sensible sibling review path is
clear or the user confirms the destination.

Otherwise inspect:

```text
docs/initiatives/*/planning/prds/*/ux/ux-spec.md
```

If exactly one plausible UX spec exists, use it. If none or multiple plausible
specs exist, ask for the path. Do not silently pick the newest or
highest-numbered spec.

Expected review output path:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/ux/ux-review.md
```

Use existing repo conventions when they differ. Use `organize-docs` for routing
questions when available.

## Inputs To Read

Read what exists and is relevant:

```text
ux/ux-spec.md
ux/flows/*.md
ux/explorations/*.md
ux/ux-review.md, if updating
docs/standards/design/DESIGN.md, optional
prd.md
prd-review.md
decision-log.md
roadmap.md, optional
addendum.md, optional
```

For an explicit non-standard UX path, read nearby source, parent, design-system,
or PRD references mentioned in frontmatter, links, imports, or sibling files.

## Review Scope

Use one of these scopes:

- `package-review`: checks whether the UX package covers all UX-relevant PRD
  scope or explicitly defers it.
- `slice-review`: checks whether one UX slice is ready for architecture/build.

Default behavior:

- Explicit slice path or slice name: run `slice-review`.
- User asks for full review: run `package-review` plus every slice.
- User asks generally to "review the UX": run `package-review` plus deep review
  of critical/high-risk slices. If there are one to three slice files, review
  all of them.

Critical/high-risk slices include explicit markers such as `high-risk`, `P0`,
`pilot`, `launch-critical`, `blocked`, or `ready-for-review`, plus inferred
risks such as permissions, destructive actions, payments, compliance, AI/trust,
user-generated content, onboarding, sharing, admin/control-plane actions,
complex forms, offline/error-heavy flows, or the primary success journey.

## Workflow

1. **Orient.**
   - Resolve the UX spec or explicit UX contract.
   - Read the UX hub, relevant flow files, prior review, exploration records,
     PRD package files, and `DESIGN.md` when present.
   - Identify package versus slice scope.

2. **Check upstream stability.**
   - Note PRD status and `prd-review.md` recommendation when present.
   - Do not stop solely because upstream readiness failed. Continue the UX
     review, but use `needs-product-revision` if product instability makes the
     UX contract unsafe.

3. **Check applicability.**
   If the PRD/UX source has no UI, workflow, messaging, permissions visibility,
   or user-facing interaction implications, return `not-applicable` with
   rationale.

4. **Verify only volatile decision-critical facts.**
   Use current sources only when a UX decision materially depends on facts that
   could have changed: platform accessibility rules, public API/platform
   capabilities, payment/compliance requirements, AI/model capability claims,
   regulations, or external product constraints. If verification becomes
   substantial, recommend product/research revision rather than burying research
   in the UX review.

5. **Review against the rubric.**
   Read [review-rubric.md](references/review-rubric.md) before a substantial
   review or before writing the report. Use one integrated review with
   conditional lenses. Do not use subagents by default.

6. **Classify findings.**
   - `blocker`: unresolved issue likely to make architecture, implementation,
     accessibility, design-system, or product behavior decisions wrong.
   - `non-blocker`: useful revision that can safely happen in parallel with
     architecture or implementation.
   - `note`: context, caveat, or non-applicable dimension.

7. **Choose one overall recommendation.**
   Use exactly one recommendation value from the list below. Prefer the most
   upstream blocking dependency when multiple blocker types exist.

8. **Preview before writing.**
   Unless the user explicitly asked to save/write or requested headless mode,
   show a decision preview with:
   - UX source path and intended review path
   - review scope
   - recommendation
   - blocker count and top blockers
   - package coverage summary
   - slice verdict summary
   - dimension verdicts
   - immediate next action
   - assumptions or facts you could not verify

   Ask whether to write `ux-review.md`. If the user wants changes to the review
   judgment, discuss and revise the preview before saving.

9. **Write the report after confirmation.**
   Write only `ux-review.md`. If a previous review exists, update it rather than
   creating a second review file unless the user asks for a separate dated
   review.

## Recommendation Values

Use exactly one:

- `ready-for-architecture`
- `needs-product-revision`
- `needs-ux-revision`
- `needs-design-system`
- `needs-exploration`
- `needs-accessibility-review`
- `not-applicable`

Recommendation priority:

1. `not-applicable` when there is no UX-relevant scope.
2. `needs-product-revision` when upstream PRD scope or product decisions are
   unstable enough to invalidate the UX contract.
3. `needs-exploration` when a load-bearing design decision needs comparison,
   prototype evidence, or explicit closure before it can be specified.
4. `needs-design-system` when reusable visual/component/token rules are required
   before implementation should proceed.
5. `needs-accessibility-review` only when regulated/high-risk accessibility,
   assistive-technology complexity, legal exposure, or specialist validation is
   needed.
6. `needs-ux-revision` for ordinary UX contract blockers.
7. `ready-for-architecture` only when no blockers remain. Non-blockers may
   remain if architecture/build can safely proceed.

## Report Frontmatter

Use lightweight frontmatter:

```yaml
---
title: UX Review
parent: ./ux-spec.md
recommendation: needs-ux-revision
---
```

For explicit non-standard sources, set `parent` to the reviewed artifact path
when a relative path is clear.

## Report Structure

Use this structure for `ux-review.md` and right-size detail to the UX package:

```markdown
# UX Review

## Source Inputs
- `ux-spec.md` - primary UX contract
- [other paths or source labels]

## Review Scope
`package-review` plus high-risk slice review

## Recommendation
`needs-ux-revision`

[One concise paragraph explaining the verdict.]

## Blocker Summary
- [Blocker title] - [why it blocks downstream work] (source: [citation])

## Package Coverage
[For single-slice specs, one short paragraph is enough.]

## Slice Verdicts
| Slice | Verdict | Notes |
| --- | --- | --- |
| UX-001 | blocked | [short note] |

Verdicts: `ready`, `minor-gaps`, `blocked`, `not-applicable`.

## Dimension Verdicts
| Dimension | Verdict | Notes |
| --- | --- | --- |
| PRD traceability | blocked | [short note] |

Verdicts: `ready`, `minor-gaps`, `blocked`, `not-applicable`.

## Findings By Dimension
### [Dimension]
**Verdict:** blocked

#### [Finding title]
- Classification: blocker|non-blocker|note
- Source: [UX/PRD section/path/link]
- Why it matters: [downstream risk]
- Suggested fix: [what should change, without replacement UX prose]

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

- The review is critique-only and did not mutate UX specs, PRDs, design-system
  docs, prototypes, implementation plans, or code.
- The recommendation uses the exact allowed vocabulary.
- Every reviewed dimension has `ready`, `minor-gaps`, `blocked`, or
  `not-applicable`.
- Blockers are truly downstream-blocking.
- Open questions are split into blocking and non-blocking.
- Package coverage is present, even if collapsed for a single-slice spec.
- Slice review depth matches the requested/default scope.
- PRD traceability is right-sized: strict for durable/multi-slice PRDs, lighter
  for small specs without stable IDs.
- Accessibility, responsive behavior, state coverage, microcopy, and
  design-system alignment are evaluated when relevant.
- Generic or vague design contracts are flagged when implementers would
  otherwise invent the experience.
- Screenshots/mockups/prototypes are treated as supporting evidence, not
  canonical implementation.
- Findings cite sources where possible.
- Suggested fixes do not include replacement UX prose.
- The preview happened before writing unless save/write or headless mode was
  explicit.
