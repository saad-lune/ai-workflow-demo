---
name: map-codebase-architecture
description: >-
  Map existing codebase architecture for brownfield PRD-to-ERD work before
  author-erd. Use when a PRD-scoped feature or change touches an existing
  codebase and needs current-state evidence about systems, modules, APIs, data,
  jobs, integrations, observability, tests, deployment, constraints, risks, and
  ERD questions. Produces codebase-architecture-map.md. Not for greenfield
  architecture, general codebase onboarding, target architecture design,
  implementation planning, or production code edits.
---

# Map Codebase Architecture

Create a PRD-scoped current-state architecture map that `author-erd` can use as
evidence. In this workflow, ERD means Engineering Requirements Doc, not
entity-relationship diagram.

This skill maps what exists, what is constrained, and what the ERD must decide.
It does not choose the target architecture.

## Stance

- Read before asking: PRD package, UX artifacts when applicable, existing
  architecture docs, repo docs, configs, source code, tests, deployment files,
  and prior architecture maps.
- Do not ask the user for answers visible in the repo. Explore first, then ask
  targeted questions for missing operational, ownership, incident, dashboard,
  rollout, or external-system context.
- Ask one unresolved question at a time with options and a recommended answer
  when the evidence supports one.
- Optimize for feature-slice architecture mapping. Escalate to subsystem depth
  only when shared boundaries, ownership, or contracts are unclear.
- Cite material claims with file paths, optional line numbers, command outputs,
  repo docs, user-provided sources, or official external docs when used.
- Keep unrelated code smells, dead code, drift, or missing tests out of the map
  unless they materially affect the PRD scope, touched boundaries, rollout, or
  confidence.
- Do not edit production code, tests, schemas, configs, or implementation files.
  This skill may only create or update the architecture map artifact.

## Use This For

- Brownfield architecture discovery before `author-erd`.
- Mapping the existing systems, modules, services, packages, APIs, contracts,
  data models, migrations, jobs, events, integrations, runtime behavior,
  observability, tests, deployment paths, rollback constraints, and conventions
  relevant to a PRD.
- Producing a structured ERD evidence pack at:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/engineering/codebase-architecture-map.md
```

## Route Elsewhere

- No PRD exists: route upstream to `author-prd`, `frame-opportunity`, or a
  lightweight inline codebase orientation. Do not create a durable architecture
  map without PRD-scoped architecture scope.
- Greenfield architecture with no existing codebase: route to `author-erd`.
- PRD writing or product scope changes: route to `author-prd`.
- UX behavior, flow, states, or interaction design: route to `author-ux`,
  `scope-ux`, or `review-ux`.
- Target architecture decisions: route to `author-erd`.
- ERD critique: route to `review-erd`.
- Implementation slices, milestones, or parallel work planning: route to
  `plan-implementation`.
- General repo explanation, onboarding, full codebase encyclopedia, broad audit,
  code health review, or refactoring: do not use this skill by default.

## Inputs And Gates

Inspect source inputs first. Common inputs:

```text
prd.md
prd-review.md
roadmap.md
decision-log.md
addendum.md
ux/ux-spec.md
ux/flows/*.md
docs/architecture/
docs/standards/
existing engineering/ or architecture map files
```

Durable maps require a PRD or PRD-shaped artifact with clear enough scope to
bound codebase discovery. A PRD may be draft. If PRD status, PRD review, release
scope, or UX state is weak, missing, or provisional, record the gate state and
keep the map below `ready-for-erd` unless the weakness is irrelevant to the
architecture decision.

Use a conditional UX gate:

- If the PRD has UI, workflow, messaging, permissions visibility, user-facing
  state, or experience behavior, read UX artifacts when present.
- Missing or draft UX does not block mapping, but it can block `ready-for-erd`
  when architecture depends on UX behavior.
- If UX is not applicable, mark it `not-applicable`.

If no PRD exists, provide only lightweight inline orientation when useful and
recommend the upstream artifact needed before durable mapping.

## Outputs

Use `organize-docs` for placement when available. Otherwise inspect existing
documentation conventions and prefer a compatible path. Default durable output:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/engineering/codebase-architecture-map.md
```

Use `docs/architecture/` only for reusable system-wide architecture maps that
are not scoped to one PRD/ERD.

Allowed frontmatter fields for `codebase-architecture-map.md`:

```yaml
---
title: [Product/PRD Name] Codebase Architecture Map
status: draft
parent: ../prd.md
updated: YYYY-MM-DD
---
```

Allowed `status` values:

- `draft`
- `needs-more-discovery`
- `ready-for-erd`

Set `ready-for-erd` when the self-check passes and material gaps are
non-blocking. Explicit user approval is not required because this is an evidence
artifact, not an approval artifact.

Use `compact` depth for small, low-risk PRDs with one obvious touched area, but
preserve template headings, citations, coverage statuses, traceability, and ERD
implications.

## References

Load [codebase-architecture-map-template.md](references/codebase-architecture-map-template.md)
before writing a durable map or substantial inline report.

## Workflow

1. **Orient.**
   - Resolve the PRD package and intended architecture scope.
   - Read PRD, PRD review, roadmap, decision log, addendum, UX artifacts,
     existing docs, and any existing architecture map.
   - Identify whether the task is create, update, resume, compact map, or
     inline-only orientation.

2. **Run gates.**
   - Record PRD, PRD review, UX, release scope, and source availability.
   - If no PRD exists, do not create a durable map.
   - If gates are weak but scope is clear, continue with visible caveats.

3. **Plan the scan.**
   - Identify likely packages, services, apps, libraries, routes, jobs, data
     stores, integrations, tests, config, and deployment paths.
   - For monorepos, create a shallow repo topology summary and go deep only on
     impacted packages or services.
   - Use optional parallel exploration only when the environment and user
     permissions allow it, and when independent areas can be split cleanly.

4. **Gather evidence.**
   - Prefer `rg`, `rg --files`, package metadata, framework manifests, route
     definitions, schemas, migrations, generated clients, tests, config, CI, and
     deployment files.
   - Use read-only discovery commands by default.
   - Run targeted tests only when they clarify relevant coverage or behavior.
   - Use official/current external docs only when dependency, framework,
     platform, SDK, cloud, database, or API behavior materially affects the ERD
     implication. Cite links when used.

5. **Map current state.**
   - Fill the template with source citations and per-section coverage statuses:
     `mapped`, `partially-mapped`, `not-found`, `not-applicable`, or
     `needs-human-context`.
   - Include a scope-to-architecture traceability table from PRD IDs, UX slices
     or states, or named scope items to codebase areas and ERD implications.
   - Include Mermaid diagrams only when they clarify non-trivial service
     boundaries, data movement, event/job flows, or runtime interactions.

6. **Handle operational gaps.**
   - Inspect repo-visible evidence first.
   - If dashboards, alerts, incident history, feature flag consoles, deploy
     ownership, rollback constraints, or external service ownership are not
     visible and materially affect the ERD, ask targeted questions.
   - Mark unresolved operational sections `needs-human-context`.

7. **Separate evidence from decisions.**
   - Record current-state facts, constraints, risks, and unknowns.
   - Write ERD implications as "ERD must decide..." or "ERD should account for..."
   - Do not select the target architecture, implementation plan, tickets, or
     production changes.

8. **Preview before writing.**
   Unless the user explicitly requested save/write/headless mode, preview:
   - intended path
   - source inputs
   - scope and depth
   - gate state
   - major mapped areas
   - blockers or `needs-human-context` areas
   - proposed status and recommended next step

9. **Write or update the map.**
   - For new maps, create the engineering directory only when writing.
   - For existing maps, update in place, verify material stale claims against
     current code, preserve still-true findings, replace outdated sections, and
     append a changelog entry.
   - Do not create dated snapshots unless the user explicitly asks.

10. **Self-check and report.**
    - Run the self-check before setting `ready-for-erd`.
    - Report paths created or updated, status, readiness blockers, human-context
      needs, and the recommended next step, usually `author-erd`.

## Self-Check

Before setting `status: ready-for-erd`, verify:

- PRD scope is resolved enough to bound architecture discovery.
- UX gate is handled as ready, draft/missing with no blocking architecture
  dependency, or not applicable.
- Impacted systems, packages, services, modules, contracts, data, tests,
  runtime/deploy, observability, security/privacy/compliance, and
  performance/scalability have been considered at the appropriate depth.
- Material claims have citations.
- Per-section coverage statuses are present.
- Scope-to-architecture traceability exists.
- Risks and unknowns are separated from confirmed facts.
- Operational gaps are marked `needs-human-context` when unresolved.
- ERD questions are grouped as `must-decide`, `should-decide`, and `watch-list`.
- The map does not choose target architecture, implementation tasks, estimates,
  code changes, or ticket-level plans.

## Final Response

When done, report:

- architecture map path created or updated
- current map status
- gate state and any readiness blockers
- unresolved human-context questions
- recommended next step, usually `author-erd`
