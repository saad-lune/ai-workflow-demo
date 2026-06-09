# Planning Skill Roadmap

This document captures the recommended planning-phase skills for the team
workflow:

```text
discovery -> planning -> design -> architecture -> build / code -> QA / Validate -> Ship
```

Discovery is already covered by the current skills. The next package should
focus on turning discovery outputs into a PRD-quality product plan and a clean
handoff to design and architecture. Planning should not produce final UX specs,
architecture decisions, implementation tasks, code, or QA artifacts.

## Source Review

Reviewed on 2026-06-09. Local copies were cloned into `.context/source-repos/`
for inspection.

| Repository | Reviewed HEAD | Planning-relevant references |
| --- | --- | --- |
| Matt Pocock Skills | `2bf70051928429983de3b5718d277150926f8c89` | [`to-prd`](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-prd/SKILL.md), [`to-issues`](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-issues/SKILL.md), [`triage`](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md), [`grill-me`](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md), [`review`](https://github.com/mattpocock/skills/blob/main/skills/in-progress/review/SKILL.md) |
| GStack | `1626d4857bfe30da2690dd6a3217961934aa3192` | [`spec`](https://github.com/garrytan/gstack/blob/main/spec/SKILL.md), [`plan-ceo-review`](https://github.com/garrytan/gstack/blob/main/plan-ceo-review/SKILL.md), [`plan-eng-review`](https://github.com/garrytan/gstack/blob/main/plan-eng-review/SKILL.md), [`plan-design-review`](https://github.com/garrytan/gstack/blob/main/plan-design-review/SKILL.md), [`plan-devex-review`](https://github.com/garrytan/gstack/blob/main/plan-devex-review/SKILL.md), [`autoplan`](https://github.com/garrytan/gstack/blob/main/autoplan/SKILL.md) |
| BMAD Method | `397b2a5c876d443d298aa44dab582520dbf094c8` | [`bmad-prd`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-prd/SKILL.md), [`bmad-agent-pm`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/bmm-skills/2-plan-workflows/bmad-agent-pm/SKILL.md), [workflow map](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/reference/workflow-map.md), [`bmad-spec`](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/reference/core-tools.md#bmad-spec) |
| Get Shit Done | `bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815` | [`project.md`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/templates/project.md), [`requirements.md`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/templates/requirements.md), [`roadmap.md`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/templates/roadmap.md), [`discuss-phase`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/discuss-phase.md), [`plan-phase`](https://github.com/gsd-build/get-shit-done/blob/main/get-shit-done/workflows/plan-phase.md) |
| Superpowers | `6fd4507659784c351abbd2bc264c7162cfd386dc` | [`writing-plans`](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md), [`executing-plans`](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md), [`subagent-driven-development`](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md), [`verification-before-completion`](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md), [`spec-document-reviewer-prompt`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/spec-document-reviewer-prompt.md) |

## Planning Flow

```text
discovery/readiness-review.md
  -> planning/prds/prd-###-slug/prd.md
  -> planning/prds/prd-###-slug/prd-review.md
  -> planning/prds/prd-###-slug/roadmap.md, optional
  -> design
  -> architecture
```

Small work may only need `author-prd` and a lightweight `review-prd`. Larger or
strategic work should add `plan-roadmap` before design and architecture.

## 1. author-prd

**Purpose:** Turn discovery-ready product thinking into a durable PRD package.

**Use when:**

- Discovery recommends `create PRD` or otherwise signals PRD readiness.
- The user asks to write, update, or refine a PRD.
- Existing discovery artifacts need to become the planning source of truth.
- Design and architecture need a product contract to work from.

**Primary outputs:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/prd.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/decision-log.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/addendum.md, optional
```

**Core workflow:**

1. Inspect discovery inputs first: opportunity brief, research artifacts,
   PRFAQ, concept verdict, readiness review, and any supplied source material.
2. Detect intent: create a new PRD, update an existing PRD, or resume an
   unfinished draft.
3. Ask for a final product brain dump and any source docs that were not already
   visible.
4. Calibrate rigor to stakes: small internal improvement, internal tool,
   launch-facing feature, platform capability, compliance need, or strategic
   bet.
5. Draft the PRD around product intent: user, problem, goals, non-goals, scope,
   requirements, acceptance outcomes, constraints, risks, open questions, and
   handoff notes.
6. Keep implementation detail, deep UX, architecture decisions, rejected
   alternatives, and source overflow in the addendum unless required to define
   product scope.
7. Record major decisions, assumptions, conflicts, and overrides in the
   decision log as they happen.
8. Stop with clear design and architecture handoff notes.

**Reference patterns:**

- BMAD `bmad-prd`: unified create/update/validate intent, PRD workspace,
  decision log, addendum, stakes-calibrated depth, source reconciliation, and
  explicit next-step handoff.
- BMAD `bmad-agent-pm`: product-manager stance for requirements discovery and
  stakeholder alignment.
- Matt Pocock `to-prd`: PRD template with problem statement, solution, user
  stories, testing decisions, and out-of-scope boundaries; also the warning to
  avoid stale file paths and code snippets in durable product docs.
- Matt Pocock `grill-me`: one-question-at-a-time pressure testing when PRD
  assumptions are still fuzzy.
- GStack `spec`: precise conversion of vague intent into an executable spec or
  backlog-ready issue. Borrow precision, but keep this skill at PRD level.
- GSD `project.md`: core value, active requirements, out-of-scope boundaries,
  context, constraints, and key decisions as living planning context.
- GSD `requirements.md`: atomic, user-centric, checkable requirement IDs.

## 2. review-prd

**Purpose:** Review a PRD before design and architecture start.

**Use when:**

- A draft PRD exists and the team needs to know whether it is ready for the next
  phase.
- Product scope, requirements, acceptance outcomes, or constraints may be
  incomplete or contradictory.
- Stakeholders want a concise verdict with actionable fixes.
- Design or architecture agents are about to rely on the PRD.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/prd-review.md
```

**Review checks:**

- Does the PRD trace back to discovery artifacts?
- Is the user/customer specific?
- Is the problem still stated without assuming the solution?
- Are goals, non-goals, and scope boundaries clear?
- Are requirements user-centric, atomic, testable, and stable-IDed?
- Are acceptance outcomes observable?
- Are non-functional requirements present where needed?
- Are privacy, security, compliance, reliability, AI trust, support, and
  operational constraints covered when relevant?
- Are open questions separated into blockers and non-blockers?
- Is there enough information for design to proceed?
- Is there enough information for architecture to proceed?
- Has the PRD drifted into premature implementation planning?

**Possible recommendations:**

- `ready-for-design-and-architecture`
- `needs-product-revision`
- `needs-more-discovery`
- `needs-design-input`
- `needs-architecture-input`
- `needs-scope-cut`
- `park`
- `reject`

**Reference patterns:**

- BMAD `bmad-prd` validate intent and reviewer gate: critique without changing,
  run a rubric, write review files, synthesize findings, and resolve critical
  issues before finalization.
- BMAD `bmad-spec` and review tasks: canonical contract plus adversarial,
  edge-case, prose, and structure review concepts.
- GStack `plan-ceo-review`: strategy, ambition, scope expansion/reduction, and
  product-shape critique.
- GStack `plan-eng-review`: architecture, data flow, edge cases, tests, and
  performance concerns before coding.
- GStack `plan-design-review`: UX and interaction-plan critique before
  implementation.
- GStack `plan-devex-review`: developer-facing product review when the PRD is
  for APIs, SDKs, CLIs, internal platforms, or developer tools.
- GStack `autoplan`: inspiration for an optional multi-perspective review
  pipeline, not default ceremony for every PRD.
- Matt Pocock `review`: two-axis review against standards and spec; adapt the
  spec-compliance axis for PRD readiness.
- Superpowers `spec-document-reviewer-prompt`: check completeness, consistency,
  clarity, implementability, and missing edge cases before planning.

## 3. plan-roadmap

**Purpose:** Convert an approved PRD into release slices and sequencing without
writing implementation tasks.

**Use when:**

- The PRD is larger than one obvious release.
- Product wants a v1/v2 split, phased rollout, milestone sequence, or explicit
  scope deferral.
- Requirements need traceability to release scope.
- Design and architecture need to know what must be solved now versus later.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/roadmap.md
```

**Core workflow:**

1. Read the PRD, decision log, addendum, and PRD review.
2. Group requirements into release slices by user value, dependency order, risk,
   and validation learning.
3. Mark v1 committed scope, deferred/v2 scope, and explicit out-of-scope items.
4. Define release-slice goals as observable outcomes, not estimates.
5. Preserve traceability from requirement IDs to release slices.
6. Identify design and architecture questions each release slice must answer.
7. Stop before implementation tasks, epics, stories, file-level plans, or code.

**Recommended sections:**

- Scope summary
- v1 committed scope
- Deferred scope
- Out of scope
- Release slices or milestones
- Requirement traceability
- Dependency order
- Risks by slice
- Design inputs needed
- Architecture inputs needed
- Validation checkpoints

**Reference patterns:**

- GSD `requirements.md`: v1/v2 requirements, explicit out-of-scope table, and
  requirement-to-phase traceability.
- GSD `roadmap.md`: phase goals, dependencies, success criteria, plan counts,
  and progress tracking.
- GSD `discuss-phase`: capture user-visible decisions before downstream
  planning, while guarding against scope creep.
- GSD `plan-phase`: research -> plan -> verify loop and planner/checker split.
  Borrow the gate/revision discipline, but avoid its implementation-plan depth
  during this team's planning phase.
- Matt Pocock `to-issues`: tracer-bullet vertical slices, dependency ordering,
  HITL/AFK distinction, and acceptance criteria. Use this as downstream
  inspiration only; issue creation belongs after design/architecture.
- BMAD workflow map: PRD first, then UX and architecture, then epics/stories.
- GStack `spec`: backlog-ready precision when a release slice later becomes an
  issue or implementation spec.

## Explicit Non-Goal: Implementation Planning

Do not build implementation planning as part of this planning-phase package.

Superpowers `writing-plans`, `executing-plans`, and
`subagent-driven-development` are strong references for the later
`build / code` phase. They map files, define bite-sized code tasks, include
exact commands, dispatch implementers/reviewers, and verify completion. That is
too concrete before design and architecture have happened.

Recommended later placement:

```text
architecture -> build / code
  -> implementation-plan
  -> execute-plan
  -> verification-before-completion
```

Use these later references there:

- Superpowers `writing-plans`: file map, task decomposition, exact commands,
  TDD steps, and self-review.
- Superpowers `executing-plans`: load, review, execute, and stop on ambiguity.
- Superpowers `subagent-driven-development`: implementer plus spec-compliance
  and code-quality review loops.
- Superpowers `verification-before-completion`: evidence before completion
  claims.
- Matt Pocock `to-issues` and `triage`: durable issue briefs and ready-for-agent
  acceptance criteria.

## Skill Build Order

Build in this order:

1. `author-prd`
2. `review-prd`
3. `plan-roadmap`

This order gives the team a useful planning phase quickly. `author-prd` creates
the source of truth, `review-prd` protects downstream teams from weak PRDs, and
`plan-roadmap` is only needed when the PRD is too large for a single
obvious release.

## Relationship To organize-docs

`organize-docs` owns artifact routing and ID selection. Planning skills should
use its conventions rather than duplicating global routing rules.

Recommended durable planning location:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/
```

Recommended handoff:

```text
planning/prds/prd-###-slug/prd.md
planning/prds/prd-###-slug/prd-review.md
planning/prds/prd-###-slug/roadmap.md, optional
  -> design artifacts
  -> architecture artifacts
```

## Anti-Patterns

- Writing a PRD before discovery readiness is clear.
- Treating discovery artifacts as requirements without product synthesis.
- Turning PRD authoring into implementation planning.
- Creating epics, stories, issues, or file-level tasks before design and
  architecture.
- Hiding unresolved assumptions in polished prose.
- Generating a release plan for a small one-slice feature.
- Adding every possible PRD section because a template exists.
- Treating PRD review as approval theater instead of actionable critique.
