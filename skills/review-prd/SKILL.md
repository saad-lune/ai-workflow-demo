---
name: review-prd
description: >-
  Critique draft PRDs for readiness before design and architecture. Use for
  critique-only PRD reviews, blocker findings, dimension verdicts, reviewer
  status, and next-step recommendations; preview before saving prd-review.md
  unless write/save or headless mode is explicit.
---

# Review PRD

Review a draft PRD before design and architecture rely on it. This skill is
critique-only: do not edit `prd.md`, do not write roadmap slices, and do not
create epics, stories, issues, implementation plans, architecture docs, or final
UX specs.

## Operating Principles

1. Read before asking. If the PRD path, upstream discovery artifacts, reviewer
   context, or repo conventions are discoverable, inspect them first.
2. Review only PRD readiness. Findings should explain how a gap could cause
   Product, Design, Architecture, GTM, Support, Risk, Legal, or downstream agents
   to make the wrong call.
3. Treat blockers as downstream-blocking gaps, not missing-template theater.
   Small PRDs may be ready with less ceremony when design, architecture, and
   traceability risk are low.
4. Use citations wherever possible: PRD section names, local file paths,
   upstream artifact paths, or external links when current facts were verified.
5. Include suggested fixes, not replacement PRD prose. PRD edits belong to
   `author-prd` or a human product owner.
6. Preview the decision before writing durable artifacts unless the user
   explicitly asked to write/save or requested a headless/non-interactive review.

## Resolve The PRD

Use an explicit PRD path when supplied. Otherwise inspect:

```text
docs/initiatives/*/planning/prds/*/prd.md
```

If exactly one plausible PRD exists, use it. If none or multiple plausible PRDs
exist, ask for the path. Do not silently pick the newest or highest-numbered PRD.

Expected review output path:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/prd-review.md
```

If the repo uses an incompatible convention, adapt to the local convention or ask
before inventing a new hierarchy. Use `organize-docs` for routing questions when
available.

## Workflow

1. **Orient.**
   - Read `prd.md`.
   - Read sibling `decision-log.md`, `addendum.md`, `roadmap.md`, prior
     `prd-review.md`, or obvious PRD package files when present.
   - Read discoverable upstream discovery artifacts: opportunity brief, research
     artifacts, PRFAQ, concept verdict, and discovery readiness review.
   - Identify whether the PRD appears reviewable. If it has no specific
     user/customer, no clear problem, or is not a PRD-like artifact, stop early
     and route to `frame-opportunity`, `research-opportunity`,
     `stress-test-opportunity`, or `author-prd` instead of producing a full
     report.

2. **Verify only volatile decision-critical facts.**
   Use current sources for claims that could materially change scope, risk, or
   recommendation: pricing, regulations, competitor claims, public API/platform
   capabilities, AI/model capabilities, legal/compliance claims, or other
   time-sensitive facts. If verification becomes substantial, recommend
   `needs-more-discovery`.

3. **Review against the rubric.**
   Read `references/review-rubric.md` before substantial review or before writing
   the report. Use one integrated review with conditional lenses. Do not use
   subagents by default.

4. **Classify findings.**
   - `blocker`: unresolved issue likely to make design, architecture, roadmap,
     launch, risk, or product revision decisions wrong.
   - `non-blocker`: useful revision or follow-up that can safely happen after
     the next phase begins.
   - `note`: context, caveat, or non-applicable dimension.

5. **Choose one recommendation.**
   Use exactly one:
   - `ready-for-design-and-architecture`
   - `needs-product-revision`
   - `needs-more-discovery`
   - `needs-design-input`
   - `needs-architecture-input`
   - `needs-scope-cut`
   - `park`
   - `reject`

6. **Preview before writing.**
   Unless the user explicitly asked to save/write or requested headless mode,
   show a decision preview with:
   - PRD path and intended review path
   - recommendation
   - blocker count and top blockers
   - non-blocker summary
   - dimension verdicts
   - reviewer status table
   - immediate next action
   - any assumptions or facts you could not verify

   Ask whether to write `prd-review.md`. If the user wants changes to the review
   judgment, discuss and revise the preview before saving.

7. **Write the report after confirmation.**
   Write only `prd-review.md`. Do not create supporting reviewer files. If a
   previous review exists, update it rather than creating a second review file
   unless the user asks for a separate dated review.

## Report Frontmatter

Use lightweight frontmatter:

```yaml
---
title: PRD Review
parent: ./prd.md
recommendation: needs-product-revision
---
```

## Report Structure

Use this structure for `prd-review.md` and right-size detail to the PRD:

```markdown
# PRD Review

## Source Inputs
- `prd.md` - primary PRD
- [other paths or source labels]

## Recommendation
`needs-product-revision`

[One concise paragraph explaining the verdict.]

## Blocker Summary
- [Blocker title] - [why it blocks downstream work] (source: [citation])

## Dimension Verdicts
| Dimension | Verdict | Notes |
| --- | --- | --- |
| Problem alignment | blocked | [short note] |
| Solution perimeter | minor-gaps | [short note] |

Verdicts: `ready`, `minor-gaps`, `blocked`, `not-applicable`.

## Reviewer Status
| Reviewer / Function | Status | Reason |
| --- | --- | --- |
| Product | aligned | [reason or assumption] |
| Design | blocked | [missing input] |

Statuses: `aligned`, `blocked`, `not-reviewed`, `not-applicable`.

## Findings By Dimension
### [Dimension]
**Verdict:** blocked

#### [Finding title]
- Classification: blocker|non-blocker|note
- Source: [PRD section/path/link]
- Why it matters: [downstream risk]
- Suggested fix: [what should change, without replacement prose]

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

- The review is critique-only and did not mutate the PRD.
- The recommendation uses the exact allowed vocabulary.
- Every dimension has `ready`, `minor-gaps`, `blocked`, or `not-applicable`.
- Blockers are truly downstream-blocking.
- Open questions are split into blocking and non-blocking.
- Stable requirement IDs are assessed according to traceability risk.
- Design and architecture readiness are both present and right-sized.
- Launch/operational readiness appears when the PRD warrants it.
- Findings cite sources where possible.
- Suggested fixes do not include replacement PRD prose.
- The preview happened before writing unless save/write or headless mode was
  explicit.
