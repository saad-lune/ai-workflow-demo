---
name: author-prd
description: >-
  Create and update planning-phase PRDs from discovery inputs. Use when asked to
  draft, refine, resume, or convert opportunity briefs, research, PRFAQ/concept
  verdicts, readiness reviews, or source material into prd.md plus
  decision-log.md and optional addendum.md for design/architecture handoff.
  Stops before review, roadmapping, UX specs, architecture, epics, stories,
  tasks, or code.
---

# Author PRD

Turn discovery-ready product thinking into a durable PRD package that design,
architecture, and later delivery planning can rely on.

This skill owns product requirement authoring. It should preserve decisions,
separate evidence from assumptions, and stop before downstream implementation
planning.

## Stance

- Read available context before asking: opportunity briefs, research artifacts,
  PRFAQ/concept verdicts, readiness reviews, existing PRDs, decision logs,
  addenda, repository docs, and user-provided source material.
- Do not ask the user a question that repo docs, visible files, or source
  material can answer. Explore first, then ask only for missing or conflicting
  context.
- Default to coached mode for unclear, high-stakes, or source-light work. Ask
  one product decision question at a time and provide a recommended answer.
- Use fast mode when the user explicitly asks for a draft/autonomous pass or
  strong source material already resolves the major product decisions. Still
  label assumptions and open questions.
- Be rigorous but product-focused. Clarify user, problem, outcome, scope,
  value slices, requirements, success signals, constraints, and handoff needs.
- Do not turn the PRD into UX specs, architecture decisions, implementation
  slices, epics, stories, tasks, file plans, estimates, or code instructions.

## Use This For

- Creating a new PRD from discovery inputs or a clear product brief.
- Updating, refining, or resuming an existing PRD draft.
- Converting opportunity, research, PRFAQ, concept verdict, or readiness
  guidance into a product planning source of truth.
- Preparing a PRD package for design and architecture handoff.
- Capturing product decisions, assumptions, conflicts, and overrides while the
  PRD evolves.

## Route Elsewhere

- Raw ideas with unclear user/problem/stakes: use `frame-opportunity`.
- Major unresolved market, domain, regulatory, technical, AI-capability, or
  codebase assumptions: use `research-opportunity`.
- Strategic or fuzzy concepts that need Working Backwards pressure testing:
  use `stress-test-opportunity`.
- PRD critique or adversarial review: route to `review-prd` when available.
- Release phasing, v1/v2 sequencing, or roadmap slices: route to
  `plan-roadmap` when available.
- UX specs, architecture docs, epics, stories, implementation plans, QA, or
  code: stop at handoff notes and recommend the appropriate downstream skill.

## Inputs And Readiness

Inspect source inputs first. Common inputs include:

```text
docs/initiatives/initiative-###-slug/discovery/opportunity-brief.md
docs/initiatives/initiative-###-slug/discovery/research/
docs/initiatives/initiative-###-slug/discovery/prfaq.md
docs/initiatives/initiative-###-slug/discovery/concept-verdict.md
docs/initiatives/initiative-###-slug/qa/readiness-review.md
```

Readiness is a soft gate. A readiness review is useful but not mandatory. You
may proceed when user, problem, evidence or assumptions, scope, non-goals, and
success signals can be established well enough for a PRD. If those premises are
too raw or contradictory, route to the earlier discovery skill instead of
inventing a polished PRD.

## Outputs

Use `organize-docs` for placement when available. Otherwise inspect existing
documentation conventions and prefer a compatible path. If no convention
exists, use:

```text
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/prd.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/decision-log.md
docs/initiatives/initiative-###-slug/planning/prds/prd-###-slug/addendum.md, optional
```

Default output is `prd.md` plus `decision-log.md`. Create `addendum.md` only
when needed for source reconciliation, rejected alternatives, deep UX notes,
launch/GTM detail, stakeholder context, or implementation-adjacent information
that should not bloat the PRD.

If creating a brand-new initiative and the repo convention or `organize-docs`
requires an initiative control plane, create a lightweight initiative README.
Do not create one just for ceremony when an existing convention allows the PRD
package to stand alone.

## References

Load these only when needed:

- [prd-template.md](references/prd-template.md): when creating a new PRD or
  restructuring a substantial draft.
- [decision-log-format.md](references/decision-log-format.md): before creating
  or appending `decision-log.md`.
- [addendum-format.md](references/addendum-format.md): before creating or
  materially updating `addendum.md`.

## Create Workflow

1. **Orient**: identify whether the task is create, update, or resume. Read
   source inputs and existing initiative docs before asking questions.
2. **Resolve placement**: use `organize-docs` if available, otherwise inspect
   sibling initiatives/PRDs, choose scoped three-digit IDs, and preserve gaps.
3. **Collect final context**: ask for any missing brain dump or source material.
   After the initial context is visible, ask one product decision at a time.
4. **Calibrate rigor**: small internal improvement, internal tool, launch-facing
   feature, platform capability, compliance need, AI/automation feature, or
   strategic bet.
5. **Draft product alignment**: user/customer, problem, why it matters,
   evidence, high-level approach, goals, non-goals, success metrics, and source
   inputs.
6. **Draft solution alignment**: product perimeter, value slices, functional
   requirements, acceptance outcomes, user journeys when useful, cross-cutting
   requirements, and open questions.
7. **Draft handoff context**: design handoff when UX/UI/workflow impact exists,
   product-facing architecture/engineering handoff for every PRD, and launch
   readiness only when launch-facing or cross-functional.
8. **Record decisions**: create or append `decision-log.md` for material
   decisions, assumptions, conflicts, overrides, and status changes.
9. **Write files**: use the template reference, right-size sections, and avoid
   carrying process scaffolding into the PRD.
10. **Self-check and report**: state status, blockers, non-blockers, artifact
   paths, and recommended next steps.

## Update Workflow

For existing PRDs:

1. Read `prd.md`, `decision-log.md`, and `addendum.md` if present.
2. Identify what changed, which sections are affected, and whether the request
   conflicts with prior decisions or assumptions.
3. If there is a conflict, stop and ask for confirmation before editing. Summarize
   the prior decision, the requested change, and the recommended resolution.
4. If there is no conflict, update in place, preserve stable IDs, and append the
   decision log.
5. Do not renumber `VS-N`, `UJ-N`, or `FR-N` IDs unless the user explicitly asks
   for a cleanup and confirms the traceability impact.
6. Ask before changing `status` from `draft` to `handoff-ready`, even when the
   self-check passes.

## PRD Rules

- Use minimal frontmatter: `title`, `status`, `created`, `updated`, and
  `parent` only when a parent artifact exists.
- Allowed status values are `draft` and `handoff-ready`.
- `handoff-ready` requires explicit user approval.
- Group functional requirements by Value Slice (`VS-N`). `VS` means Value
  Slice: a user-visible product outcome, not a downstream implementation slice.
- Use globally stable functional requirement IDs (`FR-N`) across the whole PRD,
  even when grouped under value slices.
- Put product-level acceptance outcomes under each FR. These are observable
  behavior and outcome checks, not implementation test cases.
- Include lightweight user journeys (`UJ-N`) when they clarify UX, workflow,
  roles, states, or edge paths. Link journeys to relevant value slices and FRs.
- Put product-relevant NFRs, data, permissions, reliability, privacy, security,
  compliance, AI trust, support, localization, and operational constraints in
  Cross-Cutting Requirements.
- Use inline `[ASSUMPTION: ...]` tags and maintain an Assumptions Index. Update
  the decision log when assumptions are confirmed, replaced, or overridden.
- Split open questions into `Blockers Before Handoff` and
  `Non-Blocking Follow-Ups`.
- Include a glossary only when domain terms, roles, systems, regulated concepts,
  or workflow vocabulary are likely to drift.

## Handoff-Ready Bar

A PRD may be useful in `draft`, but it is not `handoff-ready` until:

- source inputs are listed
- user/customer, problem, goals, non-goals, and product perimeter are clear
- at least one Value Slice has functional requirements and acceptance outcomes
- success metrics or success signals are present
- cross-cutting requirements are handled or explicitly not applicable
- design handoff is present or explicitly not applicable with rationale
- product-facing architecture/engineering handoff is present
- blockers before handoff are resolved
- major assumptions, conflicts, and decisions are recorded in the decision log
- the user explicitly approves the status change

Non-blocking follow-ups may remain in a `handoff-ready` PRD.

## Final Response

When done, report:

- artifact paths created or updated
- current PRD status
- unresolved blockers and non-blocking follow-ups
- whether the handoff-ready checklist passes
- recommended next step, usually `review-prd`, design, architecture, or
  `plan-roadmap` for multi-release scope

Do not create `prd-review.md`, roadmap, UX spec, architecture doc, epic, story,
or implementation task artifacts from this skill.
