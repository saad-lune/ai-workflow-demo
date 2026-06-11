# Addendum Format

Create `addendum.md` only when the PRD needs supporting detail that would make
the main document noisy or less durable.

## Create When Needed For

- Source reconciliation across long or conflicting inputs.
- Rejected alternatives and why they were rejected.
- Deep UX notes that are useful to design but too detailed for the PRD.
- Launch, GTM, support, training, legal, finance, or partner detail.
- Stakeholder context, meeting notes, or decision background.
- Implementation-adjacent constraints that engineering should know but that are
  not product requirements.
- Extended examples, edge-case catalogs, or policy references.

Do not create an addendum just because the template exists.

```markdown
---
title: Addendum: Short Product Title
status: active
created: YYYY-MM-DD
updated: YYYY-MM-DD
parent: ./prd.md
---

# Addendum: Short Product Title

## Source Reconciliation

Use when source inputs disagree, overlap, or require interpretation.

| Topic | Source A | Source B | Resolution |
| --- | --- | --- | --- |
| V1 source systems | Opportunity brief says Jira only. | User interview includes GitHub. | PRD includes Jira + GitHub for pilot. |

## Rejected Alternatives

| Alternative | Why Rejected | Revisit Condition |
| --- | --- | --- |
| Monthly summary first | Does not address weekly manager status pain. | Revisit in roadmap planning. |

## Extended UX Notes

Keep this below PRD level. Do not turn it into a final UX spec.

## Extended Launch / Operational Notes

Use for details that support launch readiness but are too granular for the PRD.

## Stakeholder Context

Use for meeting context, quoted constraints, or background that informs
decisions.

## Engineering Context

Use for product-facing technical context that should inform architecture, while
leaving architecture decisions to a downstream artifact.

## Appendix

Use for extended examples, edge cases, policy references, or notes that are not
central to the PRD body.
```

## Rules

- Link the addendum from the PRD only if it exists.
- Keep requirements, final scope, blockers, and handoff-ready state in the PRD.
- Record material addendum-driven decisions in `decision-log.md`.
