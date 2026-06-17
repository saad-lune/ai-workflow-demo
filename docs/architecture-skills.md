# Architecture Skill Roadmap

This document is a high-level inventory of the architecture-stage skills to
build. It intentionally avoids detailed workflows; each skill should be designed
later in its own grilling session.

At this company, **ERD** means **Engineering Requirements Doc**. It does not
mean entity-relationship diagram.

The architecture stage sits here:

```text
discovery -> PRD -> UX -> codebase architecture map, when brownfield -> ERD -> implementation planning -> build / code -> QA -> ship
```

## Source References

Reviewed on 2026-06-17. Local snapshots are in `.context/source-repos/`.

| Repository | Reviewed HEAD | Useful references |
| --- | --- | --- |
| Matt Pocock Skills | `bddb833cbaa322ff89d07e490530860aa73a4293` | `grilling`, `grill-with-docs`, `codebase-design`, `domain-modeling`, `to-issues` |
| GStack | `c7ae63201ab193a7dc7fb7e0d81238645111ffac` | `spec`, `office-hours`, `plan-eng-review`, `autoplan` |
| BMAD Method | `242dc6ef759ce252420c7393e2b9683cea9608e1` | `bmad-advanced-elicitation`, `bmad-architecture`, `bmad-check-implementation-readiness`, `bmad-create-epics-and-stories` |
| Get Shit Done | `bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815` | `plan-phase`, `validate-phase`, `context.md`, `spec.md` |
| Superpowers | `b62616fc12f6a007c6fd5118146821d748da0d33` | `brainstorming`, `writing-plans`, `subagent-driven-development`, `requesting-code-review` |

Public links to referenced skills and docs:

- Matt Pocock Skills:
  [`grilling`](https://github.com/mattpocock/skills/tree/bddb833cbaa322ff89d07e490530860aa73a4293/skills/productivity/grilling),
  [`grill-with-docs`](https://github.com/mattpocock/skills/tree/bddb833cbaa322ff89d07e490530860aa73a4293/skills/engineering/grill-with-docs),
  [`codebase-design`](https://github.com/mattpocock/skills/tree/bddb833cbaa322ff89d07e490530860aa73a4293/skills/engineering/codebase-design),
  [`domain-modeling`](https://github.com/mattpocock/skills/tree/bddb833cbaa322ff89d07e490530860aa73a4293/skills/engineering/domain-modeling),
  [`to-issues`](https://github.com/mattpocock/skills/tree/bddb833cbaa322ff89d07e490530860aa73a4293/skills/engineering/to-issues)
- GStack:
  [`spec`](https://github.com/garrytan/gstack/tree/c7ae63201ab193a7dc7fb7e0d81238645111ffac/spec),
  [`office-hours`](https://github.com/garrytan/gstack/tree/c7ae63201ab193a7dc7fb7e0d81238645111ffac/office-hours),
  [`plan-eng-review`](https://github.com/garrytan/gstack/tree/c7ae63201ab193a7dc7fb7e0d81238645111ffac/plan-eng-review),
  [`autoplan`](https://github.com/garrytan/gstack/tree/c7ae63201ab193a7dc7fb7e0d81238645111ffac/autoplan)
- BMAD Method:
  [`bmad-advanced-elicitation`](https://github.com/bmad-code-org/bmad-method/tree/242dc6ef759ce252420c7393e2b9683cea9608e1/src/core-skills/bmad-advanced-elicitation),
  [`bmad-architecture`](https://github.com/bmad-code-org/bmad-method/tree/242dc6ef759ce252420c7393e2b9683cea9608e1/src/bmm-skills/3-solutioning/bmad-architecture),
  [`bmad-check-implementation-readiness`](https://github.com/bmad-code-org/bmad-method/tree/242dc6ef759ce252420c7393e2b9683cea9608e1/src/bmm-skills/3-solutioning/bmad-check-implementation-readiness),
  [`bmad-create-epics-and-stories`](https://github.com/bmad-code-org/bmad-method/tree/242dc6ef759ce252420c7393e2b9683cea9608e1/src/bmm-skills/3-solutioning/bmad-create-epics-and-stories)
- Get Shit Done:
  [`plan-phase`](https://github.com/gsd-build/get-shit-done/blob/bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815/get-shit-done/workflows/plan-phase.md),
  [`validate-phase`](https://github.com/gsd-build/get-shit-done/blob/bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815/get-shit-done/workflows/validate-phase.md),
  [`context.md`](https://github.com/gsd-build/get-shit-done/blob/bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815/get-shit-done/templates/context.md),
  [`spec.md`](https://github.com/gsd-build/get-shit-done/blob/bdcaab2c752d9a33a1a1ca9acf3a3c81fb991815/get-shit-done/templates/spec.md)
- Superpowers:
  [`brainstorming`](https://github.com/obra/Superpowers/tree/b62616fc12f6a007c6fd5118146821d748da0d33/skills/brainstorming),
  [`writing-plans`](https://github.com/obra/Superpowers/tree/b62616fc12f6a007c6fd5118146821d748da0d33/skills/writing-plans),
  [`subagent-driven-development`](https://github.com/obra/Superpowers/tree/b62616fc12f6a007c6fd5118146821d748da0d33/skills/subagent-driven-development),
  [`requesting-code-review`](https://github.com/obra/Superpowers/tree/b62616fc12f6a007c6fd5118146821d748da0d33/skills/requesting-code-review)

## Core Skills To Build

Build these four skills first:

| Skill | Description |
| --- | --- |
| `map-codebase-architecture` | Map the existing architecture before ERD authoring for brownfield work. |
| `author-erd` | Guide an engineer through creating or updating an Engineering Requirements Doc after PRD and UX are ready. |
| `review-erd` | Review a draft ERD for implementation readiness before build planning begins. |
| `plan-implementation` | Convert an approved ERD into implementation slices, milestones, dependencies, and parallel work guidance. |

## Skill: map-codebase-architecture

**Description:** Perform pre-ERD brownfield discovery by mapping the existing
systems, patterns, integration points, APIs, data models, monitoring, tests, and
constraints that the ERD must account for.

**Goals:**

- Run before ERD authoring when the work touches an existing codebase.
- Identify relevant systems, modules, services, packages, ownership boundaries,
  and architectural patterns.
- Map existing APIs, payloads, data models, migrations, events, jobs,
  integrations, feature flags, and external dependencies.
- Find available tests, monitoring, logging, dashboards, alerts, deployment
  paths, and rollback constraints.
- Surface existing conventions and constraints that the ERD should preserve or
  deliberately challenge.
- Call out unknowns, risky coupling, missing observability, weak tests, and
  areas that may need deeper exploration or prototyping.
- Produce a codebase architecture map that `author-erd` can use as evidence.

**Non-goals:**

- Do not write the ERD.
- Do not design the target architecture.
- Do not make material product, UX, or engineering decisions for the human
  owner.
- Do not refactor or rewrite code.
- Do not create a full codebase encyclopedia.
- Do not create ticket-level implementation plans.
- Do not run broad audits unrelated to the planned ERD work.

**Source references:**

- Matt Pocock `codebase-design` and `domain-modeling`: understand existing
  modules, boundaries, language, and domain concepts before proposing changes.
- GStack `spec` and `plan-eng-review`: inspect technical reality before locking
  plans, risks, tests, and production constraints.
- BMAD `bmad-architecture` and `bmad-check-implementation-readiness`: ground
  architecture work in existing systems and readiness evidence.
- Get Shit Done `context.md` and `validate-phase`: gather the minimum useful
  codebase context needed to move to the next phase.

## Skill: author-erd

**Description:** Guide an engineer through producing the company ERD from PRD,
UX, and the codebase architecture map when the work is brownfield.

**Goals:**

- Make ERD authoring a grilling session by default.
- Help the human owner reason through architecture, scope, assumptions,
  alternatives, data, APIs, instrumentation, testing, rollout, risks, and
  approvals.
- Ask one material engineering question at a time.
- Recommend answers when source docs or code support a recommendation.
- Use the codebase architecture map as evidence when brownfield context exists.
- Ensure material decisions are explicitly accepted by the human owner before
  they are recorded as settled.
- Suggest a separate exploration or prototyping session when the human cannot
  confidently answer without more evidence.
- Produce or update the ERD artifact.

**Non-goals:**

- Do not create PRDs or change product scope.
- Do not define UX flows or interaction design.
- Do not silently make material architecture, rollout, data, API, or risk
  decisions for the human owner.
- Do not turn optional exploration into required ceremony.
- Do not create detailed ticket-level implementation plans.
- Do not write production code.

**Source references:**

- Matt Pocock `grilling` and `grill-with-docs`: one question at a time,
  recommended answers, docs produced from the conversation.
- GStack `spec` and `office-hours`: technical interrogation, smart-skip
  answered questions, challenge assumptions, force meaningful alternatives.
- BMAD `bmad-advanced-elicitation` and `bmad-architecture`: section-level
  elicitation and architecture readiness.
- Company ERD templates: preserve the team's existing ERD shape and expected
  sections.

## Skill: review-erd

**Description:** Critique a draft Engineering Requirements Doc and decide
whether it is ready for implementation planning.

**Goals:**

- Review traceability from PRD and UX into the ERD.
- Check whether architecture, data, APIs, integrations, instrumentation,
  testing, non-functional requirements, rollout, rollback, risks, and approvals
  are covered well enough for implementation planning.
- Identify blockers, non-blockers, and notes.
- Call out vague decisions, missing alternatives, unowned risks, and unresolved
  dependencies.
- Recommend the next step: proceed, revise ERD, revisit PRD/UX, explore code,
  seek specialist review, or block.
- Produce an ERD review artifact.

**Non-goals:**

- Do not author or rewrite the ERD as part of review.
- Do not approve product or UX scope.
- Do not create implementation tasks.
- Do not require perfection when the remaining risk is acceptable and owned.
- Do not block on cosmetic document issues.

**Source references:**

- GStack `plan-eng-review`: engineering review across architecture, tests,
  edge cases, performance, and production failure modes.
- BMAD `bmad-check-implementation-readiness`: readiness checks before build
  starts.
- Get Shit Done `validate-phase`: validation before moving to the next phase.
- Superpowers `requesting-code-review`: prioritize issues that affect the work,
  not stylistic nits.

## Skill: plan-implementation

**Description:** Turn an approved ERD into an implementation plan that can be
used by engineers or parallel agents before coding begins.

**Goals:**

- Extract implementation-relevant decisions from the ERD.
- Split work into coherent implementation slices and milestones.
- Identify dependencies, sequencing, ownership boundaries, and what can happen
  in parallel.
- Preserve testing, instrumentation, rollout, rollback, and verification
  obligations from the ERD.
- Make the plan useful for multiple worktrees or agents without assigning
  overlapping write scopes.
- Produce an implementation planning artifact.

**Non-goals:**

- Do not proceed if the ERD has unresolved blockers unless the human explicitly
  overrides.
- Do not re-litigate ERD decisions.
- Do not write code.
- Do not generate issue tracker tickets by default.
- Do not create overly detailed file-by-file implementation instructions unless
  a later implementation skill needs that context.

**Source references:**

- Matt Pocock `to-issues`: convert plans into dependency-aware vertical slices.
- Get Shit Done `plan-phase`: plan waves, sequencing, and validation criteria.
- Superpowers `writing-plans`: independently testable work units.
- Superpowers `subagent-driven-development`: parallel work needs isolated
  ownership, clear context, and review gates.

## Later Candidates

Do not build these now. Consider them only if the core skills become overloaded:

| Skill | When to consider it |
| --- | --- |
| `explore-erd` | ERD decisions frequently require option analysis beyond the standard codebase architecture map. |
| `prototype-erd-decision` | ERD decisions frequently need spike work or prototype evidence before the human can choose an answer. |
| `author-engineering-contracts` | ERD API, schema, event, or payload sections become too detailed for the main ERD. |
| `implementation-context` | Implementation agents repeatedly need a compact context pack derived from PRD, UX, ERD, and ERD review. |
| `parallel-workstreams` | Multi-worktree implementation plans need a more formal split than `plan-implementation` can provide. |

## Parallel Build Notes

- Build `map-codebase-architecture`, `author-erd`, `review-erd`, and
  `plan-implementation` in separate worktrees.
- Each worker should own one skill folder.
- Do not edit shared files from worker branches unless assigned integration.
- Use grilling sessions later to design each skill's detailed workflow,
  prompts, references, and test cases.
- Integrate shared files after the skill folders exist: `README.md`,
  `package.json`, and this roadmap.
