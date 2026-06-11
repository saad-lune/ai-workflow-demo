# PRD Template Reference

Use this as a shape guide, not as a static form. Right-size sections to the
stakes of the work. Omit conditional sections only when the PRD explains why
they are not applicable or the skill workflow makes them unnecessary.

```markdown
---
title: Short Product Title
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
parent: ../../../README.md
---

# PRD: Short Product Title

## Source Inputs

List source artifacts, links, docs, interviews, research, PRFAQs, tickets,
designs, or user-provided materials used to author this PRD.

| Source | Type | Notes |
| --- | --- | --- |
| ../discovery/opportunity-brief.md | opportunity brief | Primary problem framing |

## Document Purpose

State what decision or downstream handoff this PRD supports.

## Problem Alignment

### User / Customer

Who has the problem. Distinguish primary user, buyer, admin, operator, or
stakeholder when relevant.

### Problem

The problem in one or two sentences without depending on the proposed solution.

### Why It Matters

Why this matters now, what breaks or remains costly, and who cares.

### Evidence

Separate observed evidence from assumptions.

| Evidence | Label | Source |
| --- | --- | --- |
| Users manually reconcile weekly status from three systems. | User-stated | Opportunity brief |

### High-Level Approach

The product approach in outcome terms. Avoid implementation design.

### Goals

- Product goal 1.
- Product goal 2.

### Non-Goals

- Explicit boundary 1.
- Explicit boundary 2.

### Success Metrics

At least lightweight product-level success signals are required before
`handoff-ready`.

| Metric / Signal | Target Or Direction | Source / Notes |
| --- | --- | --- |
| Weekly status prep time | Decrease for pilot managers | Qualitative acceptable in draft |

### Problem Alignment Status

Optional. Use when reviewers or named stakeholders exist.

| Reviewer | Role | Status | Notes |
| --- | --- | --- | --- |
| TBD | Product | pending |  |

## Solution Alignment

### Product Perimeter

Describe the in-scope product surface and the edges that are deliberately out
of scope.

### Value Slices

Group functional requirements by Value Slice (`VS-N`). A Value Slice is a
user-visible product outcome. It is not an implementation slice, sprint, epic,
or task plan.

#### VS-1: Evidence-Backed Weekly Brief

User-visible outcome: Engineering managers can review one weekly summary that
highlights changed work, stalled items, and attention needs with source links.

Related journeys: UJ-1

##### FR-1: Generate Source-Linked Summary

Managers can request a weekly brief for a selected team and reporting window.

Acceptance outcomes:

- The brief includes changed work, stalled work, and attention-needed sections.
- Every claim links to the source item that supports it.
- The product shows an empty-state message when no source activity exists.

##### FR-2: Flag Unsupported Claims

Managers can see when the system cannot support a summary claim with source
evidence.

Acceptance outcomes:

- Unsupported or low-confidence claims are visibly marked.
- The user can inspect which sources were checked.

#### VS-2: Review And Share

User-visible outcome: Managers can edit the brief and share an approved version
with stakeholders.

##### FR-3: Edit Brief Before Sharing

Managers can revise generated text before sharing.

Acceptance outcomes:

- Edits are preserved in the shared version.
- The product distinguishes edited text from source-linked generated text when
  that distinction matters for trust.

### User Journeys

Include lightweight user journeys (`UJ-N`) when UX, workflow, roles, states, or
edge paths need clarity. Link each journey to value slices and FRs.

#### UJ-1: Manager Reviews Weekly Brief

Related value slices: VS-1, VS-2

Related requirements: FR-1, FR-2, FR-3

1. Manager opens the weekly brief for their team.
2. Product shows summarized changes with source links and unsupported-claim
   flags.
3. Manager inspects a questionable claim.
4. Manager edits the brief and shares it.

Decision points / states:

- No source activity exists.
- A source system is unavailable.
- A claim lacks support.

### Cross-Cutting Requirements

Capture product-relevant constraints across value slices. Include only relevant
categories.

| Area | Requirement / Constraint | Applies To |
| --- | --- | --- |
| Permissions | Users only see source items they already have permission to access. | VS-1, VS-2 |
| Reliability | Source outage states must be visible and non-destructive. | VS-1 |
| AI trust | Generated claims must be source-linked or marked unsupported. | VS-1 |

### Glossary

Conditional. Use when domain terms, roles, systems, or regulated concepts could
drift.

| Term | Meaning |
| --- | --- |
| Weekly brief | A manager-facing summary for one team and reporting window. |

### Solution Alignment Status

Optional. Use when reviewers or named stakeholders exist.

| Reviewer | Role | Status | Notes |
| --- | --- | --- | --- |
| TBD | Design | pending |  |

## Launch And Handoff Readiness

Use this section only when the work is launch-facing, cross-functional,
customer-facing, risky, or operationally sensitive. Keep it at product/release
level, not task level.

### Launch Milestones

| Target Date | Milestone | Description | Exit Criteria |
| --- | --- | --- | --- |
| TBD | Pilot | First controlled rollout | Pilot users can complete VS-1 |

### Operational Checklist

| Area | Need | Owner | Status |
| --- | --- | --- | --- |
| Analytics | Define product success signal source | TBD | open |
| Support | Draft support escalation path | TBD | open |

## Design Handoff

Required when UX/UI/messaging/workflow/permissions visibility/interaction
states are affected. Otherwise state `Not applicable` with rationale.

- UX surfaces:
- Key journeys:
- States and edge cases:
- Content/messaging needs:
- Accessibility/localization considerations:
- Open design questions:

## Architecture / Engineering Handoff

Required for every PRD. Keep this product-facing and avoid solution design.

- Known systems or integration touchpoints:
- Data and permissions implications:
- API, reporting, pricing, or packaging implications:
- Reliability, security, privacy, compliance, AI trust, or operational needs:
- Implementation unknowns engineering must resolve:
- Constraints that must not be violated:

## Open Questions

### Blockers Before Handoff

| ID | Question | Owner | Revisit Condition | Status |
| --- | --- | --- | --- | --- |
| BQ-1 | Which source systems are in V1? | Product | Before handoff-ready | open |

### Non-Blocking Follow-Ups

| ID | Question | Owner | Revisit Condition | Status |
| --- | --- | --- | --- | --- |
| NQ-1 | Should V2 support monthly summaries? | Product | Roadmap planning | open |

## Assumptions Index

Use inline `[ASSUMPTION: ...]` tags in the PRD body, then index them here.

| ID | Assumption | Where Used | Validation / Resolution |
| --- | --- | --- | --- |
| A-1 | Pilot managers can grant source-system access. | VS-1 | Validate before handoff |

## Changelog

Optional short summary only. Detailed decisions belong in `decision-log.md`.
```

## Handoff-Ready Notes

Do not mark the PRD `handoff-ready` unless the user explicitly approves and no
blockers remain. Non-blocking follow-ups may remain open.

## ID Rules

- `VS-N`: Value Slice IDs, scoped to this PRD.
- `UJ-N`: User Journey IDs, scoped to this PRD.
- `FR-N`: Functional Requirement IDs, global across this PRD.
- Preserve IDs on update. Do not renumber for neatness.
