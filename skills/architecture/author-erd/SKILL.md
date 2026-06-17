---
name: author-erd
description: >-
  Create or update architecture-stage Engineering Requirements Docs from PRDs,
  UX specs, codebase architecture maps, and existing system evidence. Use for
  architecture decisions, alternatives, data/schema changes, APIs, events,
  integrations, instrumentation, monitoring, testing strategy, rollout/rollback,
  risks, approvals, and ERD readiness before implementation planning or code.
---

# Author ERD

Turn approved product and UX intent into an Engineering Requirements Doc that
engineering, product, design, operations, QA, and later implementation planning
can rely on.

In this repository, **ERD means Engineering Requirements Doc**. It does not mean
entity-relationship diagram.

This skill owns engineering design authoring. It should preserve source
traceability, make material engineering decisions explicit, and stop before ERD
review, implementation planning, tickets, estimates, or code.

## Stance

- Read available context before asking: PRD package, PRD review, roadmap, UX
  specs, UX review, codebase architecture map, existing ERD, repo architecture
  docs, current schemas/APIs/events/tests, and production code conventions.
- Use one-question-at-a-time grilling by default. Ask about one material
  engineering decision, include options where useful, and provide a recommended
  answer when evidence supports one.
- Do not ask questions that approved upstream artifacts or existing production
  code already answer. Material decisions strongly supported by those sources
  may be recorded as settled.
- When a material decision is not strongly settled by approved artifacts or
  production code, recommend an answer but wait for human acceptance before
  recording it as settled.
- Use soft readiness gates. If required inputs are missing, either proceed with
  an explicit readiness override or switch into interactive grilling when the
  unknowns would make the ERD unreliable.
- For brownfield work, prefer a codebase architecture map. If one is missing,
  do a scoped inspection for small changes, but route broad, cross-system,
  risky, or unfamiliar work to `map-codebase-architecture`.
- Create or update one primary artifact: `erd.md`. Keep assumptions,
  alternatives, open questions, risks, approvals, and changelog entries inside
  that artifact.
- Do not create an ERD decision log, ERD review artifact, implementation plan,
  launch timeline, milestone table, assignee table, tickets, stories, tasks,
  estimates, file-level plan, or production code.

## Use This For

- Creating a new Engineering Requirements Doc from approved PRD and UX inputs.
- Updating or resuming an existing ERD while preserving settled decisions.
- Turning product and UX constraints into engineering decisions about systems,
  data, APIs, events, integrations, observability, tests, operations, rollout,
  rollback, risks, and approvals.
- Running an engineering grilling session before writing durable ERD content.
- Capturing engineering alternatives and the selected direction before review.

## Route Elsewhere

- Raw ideas, opportunity framing, PRD creation, or product scope changes: use
  the relevant discovery or planning skill.
- UX flows, surfaces, states, microcopy, responsive behavior, or accessibility
  design contracts: use the relevant design skill.
- Brownfield architecture discovery for broad or risky work: use
  `map-codebase-architecture` when available.
- ERD critique or implementation-readiness verdicts: use `review-erd` when
  available.
- Implementation sequencing, parallel workstreams, milestones, tickets,
  estimates, or file-level plans: use `plan-implementation` when available.
- Code changes, migrations, tests, dashboards, or production configuration:
  route to implementation after ERD review and planning.

## Inputs And Readiness

Inspect these first when present:

```text
prd.md
prd-review.md
roadmap.md, optional
decision-log.md
addendum.md, optional
ux/ux-spec.md
ux/flows/*.md
ux-review.md, optional
engineering/codebase-architecture-map.md, optional
engineering/erd.md, when updating
docs/architecture/*
current code, schemas, APIs, events, jobs, integrations, tests, monitoring docs
```

Durable writes require clean gates or an explicit readiness override:

- `prd.md` exists and product scope is stable enough for architecture work.
- UX is ready enough for architecture when user-facing behavior is involved.
- Brownfield work has either a codebase architecture map or enough scoped code
  inspection to avoid inventing current-system behavior.
- Material blockers before engineering design are resolved or explicitly owned.

When proceeding with missing inputs, add a `Readiness Override` section in the
ERD that names the missing input, who accepted proceeding, and the remaining
risk. If missing information affects architecture, data, APIs, migrations,
integrations, rollout/rollback, observability, testing strategy, security,
privacy, compliance, or implementation feasibility, ask one question at a time
until the ERD can be drafted responsibly.

## Outputs

Use `organize-docs` for placement when available. Otherwise inspect existing
documentation conventions and prefer a compatible path.

Default path:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/engineering/erd.md
```

Use an initiative-level or shared architecture location only when the ERD
explicitly spans multiple PRDs or describes durable system-wide architecture.

Use minimal frontmatter:

```yaml
---
title: Short Title ERD
status: draft
created: YYYY-MM-DD
updated: YYYY-MM-DD
parent: ../prd.md
---
```

Allowed statuses are `draft`, `ready-for-review`, and `signed-off`. Set
`signed-off` only with explicit user approval.

## References

Load this only when needed:

- [erd-template.md](references/erd-template.md): when creating a new ERD or
  restructuring a substantial draft.

## Workflow

1. **Orient.**
   Resolve whether the task is create, update, or resume. Read upstream product
   and UX inputs, architecture evidence, existing ERD content, and relevant
   production code before asking questions.

2. **Resolve placement.**
   Use `organize-docs` if available. Otherwise put PRD-specific ERDs under the
   PRD package's `engineering/` directory and use relative links back to source
   artifacts.

3. **Run readiness gates.**
   Check PRD stability, UX readiness, brownfield architecture evidence, and
   blocker ownership. If a gate fails, either route upstream, ask for an
   explicit readiness override, or begin one-question-at-a-time grilling when
   the unknowns are material.

4. **Determine settled evidence.**
   Treat approved upstream artifacts and current production code/system reality
   as strong enough to settle material decisions. Treat draft docs, stale notes,
   TODOs, comments, and ambiguous source material as evidence only.

5. **Grill material decisions.**
   Ask one unresolved engineering decision at a time. Walk the design tree in
   dependency order: scope and constraints, architecture shape, alternatives,
   data/schema, migrations/backfills, APIs/payloads, events/messages,
   integrations, assignment strategy when relevant, instrumentation, monitoring
   and operations, testing strategy, non-functional requirements, rollout and
   rollback, risks, and approvals.

6. **Draft from the template.**
   Use the ERD template reference. Keep the document engineering-focused and
   remove irrelevant sections rather than leaving filler. Mark unavailable or
   intentionally skipped sections as not applicable only when useful to future
   readers.

7. **Handle diagrams.**
   Add diagrams only when they clarify architecture, data movement, async flows,
   trust boundaries, or rollout behavior. Prefer inline Mermaid in `erd.md`.
   Move diagrams to `engineering/diagrams/` only when they are large or
   numerous.

8. **Update existing ERDs carefully.**
   Preserve settled decisions. If a requested change conflicts with a prior
   settled decision, summarize the prior decision, new evidence or request,
   impact, and recommended resolution, then wait for explicit acceptance before
   editing.

9. **Set status and approvals.**
   Default to `draft`. Use `ready-for-review` when the ERD is complete enough
   for engineering review. Use `signed-off` only after explicit user approval
   and approval status is clear.

10. **Self-check and report.**
    Confirm source traceability, readiness override handling, architecture and
    alternative coverage, API/data/event contracts, observability, testing
    strategy, NFRs, rollout/rollback, risks, approvals, and next step. Recommend
    `review-erd` when the ERD is ready for critique.

## ERD Rules

- The ERD is an engineering design contract, not an implementation plan.
- Do not include an `Implementation Plan`, launch timeline, milestone table,
  assignee table, business launch plan, ticket breakdown, or estimates.
- Keep `Payload & API Updates` separate from `Architecture` when API, payload,
  object attribute, compatibility, or versioning details matter.
- Under `Architecture`, explicitly consider database schema changes, event or
  message updates, integrations or external dependencies, and migration or
  compatibility notes.
- Include `Assignment Strategy` only when experiments, staged rollout cohorts,
  feature flags, permissions, routing, sharding, tenancy, migrations, or
  bucketing behavior affects engineering behavior.
- Keep `Instrumentation` separate from `Monitoring & Operations`.
  Instrumentation covers product/data events and tracking behavior. Monitoring
  covers system health, alerts, dashboards, logs, debugging, and runbook needs.
- Testing strategy should name coverage obligations and risk areas, not detailed
  test cases. Include unit, integration, contract, E2E/manual, migration,
  backfill, load/performance, or regression coverage only when relevant.
- Use a relevance-filtered NFR checklist: performance/latency, scalability,
  reliability, security, privacy, compliance, accessibility, localization, data
  retention, auditability, backwards compatibility, and cost.
- Rollout/rollback should cover engineering controls: flags, staged exposure,
  migrations/backfills, monitoring gates, disable path, rollback path, runbook
  notes, and post-launch verification. Do not write marketing or business
  launch plans.
- Include an approval status table with reviewer role, review area, status, and
  date.

## Self-Check

- Source inputs and current-system evidence are listed.
- Missing readiness inputs are either resolved or recorded as a readiness
  override.
- Material decisions are settled by approved artifacts, production code, or
  explicit human acceptance.
- Alternatives and trade-offs are captured for material architecture choices.
- Data/schema, API/payload, event/message, integration, migration, and
  compatibility impacts are covered or marked not applicable.
- Instrumentation, monitoring/operations, testing strategy, NFRs,
  rollout/rollback, risks, and approvals are covered at the right depth.
- The ERD has not drifted into PRD edits, UX design, ERD review,
  implementation planning, tickets, estimates, or code.
