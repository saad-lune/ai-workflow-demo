# Research Artifact Reference

Use this when creating durable opportunity research artifacts or substantial
inline reports. Keep artifacts product-readable and decision-oriented.

## Durable Artifact Frontmatter

```yaml
---
title: Short Research Title
status: draft
parent: ../opportunity-brief.md
research_type: market|domain|technical-feasibility|codebase-fit|mixed
depth: level-1-quick-verification|level-2-standard|level-3-deep-dive
confidence: high|medium|low
recommendation: ready-for-readiness-review|needs-more-research|needs-prototype|needs-customer-validation|needs-scope-cut|park|reject
---
```

Use `parent: ../opportunity-brief.md` when brief-led. If no opportunity brief
exists but an initiative path does, use the nearest relevant parent, usually
the initiative README. Do not invent lifecycle states beyond `status: draft`.

## Required Durable Sections

```markdown
# [Research Title]

## Summary
[Decision-oriented synthesis for Product.]

## Research Objective And Scope
[What decision this informs, included scope, excluded scope.]

## Sources And Method
[External links, internal source names/paths/dates, user-provided evidence, and
how they were used.]

## Key Findings
### [Finding]
- Evidence: [observed fact and source]
- Interpretation: [what it likely means]
- PRD impact: [what the PRD must reflect or decide]
- Confidence: high|medium|low

## Risks And Constraints
[Risks, constraints, volatile claims, and assumptions.]

## PRD Implications
[Problem framing, users, scope boundaries, non-goals, assumptions, open
questions, success signals, and PRD decisions. Do not write requirements.]

## Open Questions
[Questions that still matter to the product decision.]

## Recommendation
[One recommendation value plus short rationale.]

## Research Metadata
- Research date: [date]
- Source freshness notes: [only if relevant]
- Recheck before PRD: [only volatile claims that could materially change PRD]
```

## Optional Sections

Include only when useful:

- `Alternatives And Comparables`: options, substitutes, competitors, current
  workflows, or "do nothing" baseline.
- `Design Implications`: UX, workflow, trust, IA, accessibility, onboarding,
  content, journey, or prototype questions.
- `Technical Feasibility`: feasibility, dependencies, integration limits,
  build/buy/use choices, and validation checkpoints.
- `Codebase / Engineering Questions`: use when code access is unavailable or
  assumptions need engineering validation.
- `Engineering Handoff: Solved Problems To Avoid Custom-Building`: risky areas
  where proven libraries, platforms, standards, or services should be evaluated
  before custom work.
- `Suggested Updates To Opportunity Brief`: specific reframes or edits; do not
  modify the brief unless asked.

## Inline Level 1 Shape

For quick verification, avoid a file unless asked:

```markdown
Research note: [question]
Answer: [verified answer]
Sources: [links or internal source names]
Confidence: high|medium|low
PRD implication: [if any]
Next step: [if any]
```

## Confidence Labels

- `high`: authoritative or primary evidence directly supports the finding.
- `medium`: credible evidence supports the finding, but context, access, or
  applicability needs validation.
- `low`: evidence is thin, indirect, stale, conflicting, unavailable, or based
  mostly on assumption.

Overall confidence should reflect the riskiest decision-critical findings, not
the average quality of the report.

## Temporary Nature

Discovery research is decision support for Product. It may be archived or
removed by a separate lifecycle process after PRD creation or release. Do not
delete, move, or archive artifacts as part of this skill.
