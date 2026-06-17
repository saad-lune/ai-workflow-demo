# ERD Review Rubric

Use this reference when reviewing Engineering Requirements Docs or writing
`erd-review.md`. Apply dimensions as one integrated review. Do not require every
detail for every ERD; judge whether the ERD is safe for implementation planning
to rely on.

## Verdict Labels

Dimension verdicts:

- `ready`: sufficient for downstream implementation planning.
- `minor-gaps`: useful improvements remain, but planning can proceed without
  likely wrong decisions.
- `blocked`: missing, contradictory, or unstable engineering information would
  likely cause wrong planning or implementation decisions.
- `not-applicable`: the dimension does not materially apply.

Finding classifications:

- `blocker`: must be resolved before implementation planning should rely on the
  ERD.
- `non-blocker`: should be improved, but can safely move in parallel with
  implementation planning or early implementation.
- `note`: context, caveat, or explicitly non-applicable point.

## Recommendation Guidance

Use the recommendation vocabulary from `SKILL.md`. Prefer the most upstream
blocking dependency:

1. `needs-product-revision`
2. `needs-ux-revision`
3. `needs-codebase-map`
4. `needs-technical-exploration`
5. `needs-specialist-review`
6. `needs-architecture-revision`
7. `block`
8. `ready-for-implementation-planning`

Use `not-applicable` when the source is not an Engineering Requirements Doc or
has no meaningful implementation-planning relevance.

Use `block` narrowly. Prefer the specific revision, exploration, map, or
specialist route when one would plausibly unblock the work.

## Core Dimensions

### 1. Product And UX Traceability

Check:

- ERD decisions map to PRD requirements, user journeys, success criteria,
  constraints, non-goals, and UX slices where relevant.
- Small ERDs without stable IDs cite PRD/UX sections clearly enough to avoid
  drift.
- The ERD does not silently add, remove, or reinterpret product or UX scope.
- Upstream PRD/UX review blockers are reflected in ERD assumptions and
  recommendation.

Common blockers:

- The ERD implements behavior not supported by PRD or UX.
- In-scope product or UX requirements have no technical treatment.
- Product or UX blockers make ERD decisions unstable.
- High-risk work lacks requirement-level traceability.

### 2. Codebase Grounding

Check:

- Brownfield ERDs cite a codebase architecture map or explain why one is not
  needed.
- Existing modules, boundaries, APIs, schemas, jobs, events, tests, and
  operational constraints are represented accurately where material.
- The ERD distinguishes verified existing behavior from assumptions.
- Proposed changes fit or deliberately challenge local conventions.

Common blockers:

- Brownfield architecture decisions are based on undocumented assumptions.
- The ERD contradicts an existing system boundary or integration without
  rationale.
- Cited code paths, APIs, schemas, or tests do not exist or appear materially
  different from the ERD claim.

### 3. Architecture Decision Clarity

Check:

- The target architecture, boundaries, responsibilities, and major components
  are explicit enough for planning.
- Material alternatives and tradeoffs are captured when more than one plausible
  approach exists.
- Constraints, assumptions, and rejected options are clear.
- Open architecture questions are separated into blocking and non-blocking.

Common blockers:

- Implementers must choose the core architecture during planning.
- Key decisions are described with vague phrases such as "integrate with the
  service" or "add a pipeline" without ownership or boundaries.
- Alternatives remain unresolved for load-bearing decisions.

### 4. Data And Persistence

Check:

- Data model, storage, migrations, retention, backfill, data ownership, and data
  quality expectations are sufficient for planning.
- PII, sensitive fields, audit data, deletion, archival, and retention
  obligations are explicit when relevant.
- Migration and backfill plans cover sequencing, reversibility, and failure
  modes.
- Read/write paths and consistency needs are clear.

Common blockers:

- Required schema or persistence changes are unspecified.
- Migration or backfill risk is unowned.
- Data retention, deletion, or sensitive-data handling is ambiguous.
- Consistency requirements could change system design but are unstated.

### 5. API And Integration Contracts

Check:

- Internal and external APIs, payloads, events, webhooks, queues, jobs, and
  contracts are defined at the right level.
- Versioning, compatibility, idempotency, retries, rate limits, timeouts, and
  failure behavior are addressed where relevant.
- Integration owners and dependencies are named.
- External assumptions are verified or flagged.

Common blockers:

- Implementation depends on undefined payloads, contracts, or ownership.
- Backward compatibility or versioning is ignored for a shared interface.
- External API limits or behavior may invalidate the approach.
- Retry, idempotency, or failure handling is missing for consequential
  integrations.

### 6. Security, Privacy, And Permissions

Check:

- Authentication, authorization, permissions, trust boundaries, secrets, data
  access, and auditability are explicit where relevant.
- Privacy, consent, data minimization, encryption, and compliance obligations
  are reflected when scope requires them.
- Abuse cases, privilege escalation, and sensitive operational actions are
  considered.
- Required security/privacy review is named.

Common blockers:

- A new capability lacks authorization or permission semantics.
- Sensitive data flow is unclear.
- Audit or compliance obligations are omitted.
- A material security/privacy risk lacks owner review.

### 7. Reliability, Performance, And Scalability

Check:

- Availability, latency, throughput, concurrency, capacity, and degradation
  expectations are explicit when they affect architecture.
- Failure modes, retries, fallbacks, timeouts, partial failure, and recovery are
  addressed.
- Performance-sensitive paths have assumptions, limits, or measurement plans.
- Scalability constraints are tied to expected usage or stated unknowns.

Common blockers:

- The ERD assumes reliability or performance characteristics without evidence.
- Critical failure modes have no handling strategy.
- Load or concurrency could change architecture but is unspecified.
- Degraded service behavior is left to implementation.

### 8. Observability And Instrumentation

Check:

- Logs, metrics, traces, audit events, dashboards, alerts, and operational
  signals are sufficient to verify and operate the change.
- Success, failure, and rollout health indicators are named.
- Privacy-sensitive telemetry constraints are explicit.
- Ownership for monitoring and alert response is clear when relevant.

Common blockers:

- A risky launch cannot be observed or diagnosed.
- Required audit or compliance events are missing.
- Rollout decisions lack metrics or health signals.
- Alert ownership is missing for operationally significant changes.

### 9. Testing And Verification

Check:

- Unit, integration, contract, migration, end-to-end, performance, security, and
  manual verification needs are covered as applicable.
- Existing test gaps are acknowledged.
- Test data, fixtures, environments, mocks, and external dependencies are
  identified when they affect planning.
- Acceptance verification traces back to product/UX/architecture risks.

Common blockers:

- Critical behavior has no verification strategy.
- Contract, migration, or integration risks lack tests.
- Existing test coverage is assumed but not verified or cited.
- Required environments or test data are unavailable or unspecified.

### 10. Rollout, Migration, And Rollback

Check:

- Rollout sequence, feature flags, staged release, migration order, backfills,
  operational runbooks, and rollback plans are covered where relevant.
- Irreversible actions and data migrations have explicit safety plans.
- Rollback and forward-fix criteria are clear.
- Customer/support impact is represented when deployment changes behavior.

Common blockers:

- Data or production migration lacks rollback or recovery.
- Rollout order is ambiguous across dependent systems.
- Feature flags or guardrails are missing for high-risk releases.
- Support or operational readiness is unowned.

### 11. Dependencies And Ownership

Check:

- Internal teams, external vendors, approvals, environments, credentials,
  migrations, data access, launch dependencies, and sequencing constraints are
  explicit.
- Ownership is clear for architecture decisions, risk acceptance, operations,
  data, security, and integration points.
- Open dependencies have due dates, owners, or blocking status where needed.
- Required approvals are tied to material risks.

Common blockers:

- A critical dependency has no owner.
- Required access, environment, or vendor work is missing from planning inputs.
- Missing approval owns material risk.
- Cross-team sequencing would block implementation but is not surfaced.

### 12. Implementation Planning Readiness

Check:

- The ERD gives enough stable decisions to split implementation into coherent
  slices or milestones.
- Dependencies, sequencing, parallelization constraints, and validation
  obligations are clear enough for `plan-implementation`.
- The ERD stops before detailed task planning unless task notes clarify risk or
  sequencing.
- Remaining non-blockers can safely be handled during planning or execution.

Common blockers:

- Planning would have to invent architecture, data, API, rollout, or test
  decisions.
- Task breakdowns prematurely constrain implementation while core decisions are
  unresolved.
- Parallel work boundaries are impossible to infer for a multi-area change.
- Open questions are not classified by blocking impact.

## Specialist Review Categories

Use specialist review only when a material risk or decision requires that
owner's judgment before implementation planning can proceed.

- Security/privacy: authorization, sensitive data, secrets, abuse, audit, or
  compliance-relevant access.
- Data/migration: schema changes, backfills, retention, data quality, lineage,
  deletion, or irreversible transformations.
- Infrastructure/DevOps/SRE: deployment topology, reliability, incident
  response, capacity, observability, or operational ownership.
- Performance/scalability: high-volume paths, latency-sensitive workflows,
  concurrency, cost, or capacity.
- Compliance/legal: regulated data, legal retention, consent, policy, financial
  or contractual obligations.
- ML/AI safety: model behavior, evaluation, safety controls, human review,
  fallback, monitoring, or consequential AI output.
- Accessibility: technical accessibility constraints only when the ERD owns
  implementation-impacting platform, rendering, assistive-technology, or
  compliance decisions.

## Partial Review Guidance

For partial reviews:

- State the reviewed section or concern clearly.
- Apply all dimensions that materially intersect the requested scope.
- Do not imply whole-ERD readiness.
- Recommend a full review before implementation planning unless a recent full
  review remains valid.

## Suggested Dimension Table

```markdown
| Dimension | Verdict | Notes |
| --- | --- | --- |
| Product and UX traceability | ready | PRD FR-1/FR-2 and UX-001 map to the proposed service flow. |
| Codebase grounding | blocked | Brownfield API assumptions lack a codebase map or cited source. |
| Rollout, migration, and rollback | minor-gaps | Flag strategy exists; rollback criteria need owner confirmation. |
```

## Suggested Reviewer Status Table

```markdown
| Reviewer / Function | Status | Reason |
| --- | --- | --- |
| Engineering | aligned | Architecture owner accepted the service boundary. |
| Design/UX | blocked | UX permission behavior is still unresolved. |
| Security/privacy | not-reviewed | Required because new admin permissions are introduced. |
```

Statuses: `aligned`, `blocked`, `not-reviewed`, `not-applicable`.
