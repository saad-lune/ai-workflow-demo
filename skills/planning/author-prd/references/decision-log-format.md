# Decision Log Format

Create `decision-log.md` with the PRD and append to it whenever material
decisions, assumptions, conflicts, overrides, or status changes happen.

Keep it append-only. Do not rewrite history to make the record cleaner. If a
decision changes, add a new entry that supersedes the prior one.

```markdown
---
title: Decision Log: Short Product Title
status: active
created: YYYY-MM-DD
updated: YYYY-MM-DD
parent: ./prd.md
---

# Decision Log: Short Product Title

## Entries

| Date | ID | Type | Decision / Finding | Rationale | Source | Impact | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | D-1 | decision | Use Value Slices to group FRs. | Keeps requirements user-outcome oriented. | User interview | PRD structure | accepted |
```

## Entry Types

- `decision`: accepted product, scope, structure, or handoff decision.
- `assumption`: material assumption the PRD depends on.
- `confirmation`: user or source confirmation of a prior assumption.
- `conflict`: contradiction between a requested change and prior source or
  decision.
- `override`: explicit replacement of a prior decision or assumption.
- `status-change`: draft/readiness lifecycle decision.

## Status Values

Use plain values that match the entry:

- `accepted`
- `open`
- `confirmed`
- `superseded`
- `rejected`
- `needs-follow-up`

## Append Examples

```markdown
| 2026-06-09 | A-1 | assumption | Pilot managers can grant source-system access. | Required for VS-1 to work without admin setup. | User-stated | Permissions scope | open |
| 2026-06-09 | D-2 | decision | Launch readiness is required for this PRD. | The work is customer-facing and support-sensitive. | PRD authoring | Adds launch checklist | accepted |
| 2026-06-09 | C-1 | conflict | Requested removal of source links conflicts with D-1 trust requirement. | Prior decision requires source-backed claims. | decision-log D-1 | Requires user confirmation before PRD edit | open |
| 2026-06-09 | O-1 | override | Supersede D-1: source links required only for generated claims. | User clarified edited text should not need source links. | User confirmation | Updates FR-2 acceptance outcomes | accepted |
```

## Update Rules

- Read existing entries before editing a PRD.
- If a requested change conflicts with an accepted decision, stop and ask for
  confirmation before editing.
- When appending, choose the next numeric ID for that entry type. Preserve
  existing IDs.
- Keep rationale concise and traceable to a source, user answer, or PRD need.
- Update frontmatter `updated` when editing the file.
