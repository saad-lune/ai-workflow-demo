---
name: frame-opportunity
description: >-
  Frame raw or ambiguous product opportunities before research or PRD work. Use
  when a user has an idea, needs to decide where to start, wants to classify
  early-stage work, or asks to create or update a PRD-preparatory opportunity
  brief.
---

# Frame Opportunity

Turn a raw, messy, or solution-first idea into a clear opportunity frame and a
decision about what should happen next. Interview first; write an artifact only
after the opportunity is clear enough to preserve.

## Operating Principles

1. Let the user brain dump before imposing structure. Ask for source material
   such as memos, decks, tickets, customer notes, Slack threads, prior briefs,
   or research.
2. Read available context before asking: docs, existing initiatives, matching
   opportunity briefs, recent repo history, and relevant code when accessible.
   If product-team users do not have repo access or the local repo is not the
   product repo, say so briefly and continue from user-provided context.
3. Ask one question at a time. For each question, provide 2-4 plausible options
   and a recommended/default answer when context supports one. Label guesses as
   assumptions and invite correction.
4. Do not ask the user a question that available files, docs, or code can
   answer. Explore first, then ask only for missing or conflicting context.
5. Reframe solution-first ideas into problem, user, and status-quo language.
   The problem statement must survive without the proposed solution.
6. Push hard on thin assumptions, but do not perform adversarial theater.
   Capture mandated solutions or constraints as constraints, then keep the
   opportunity centered on the underlying need.
7. Stop before PRD creation, requirements, acceptance criteria, stories,
   solution architecture, delivery planning, or code changes. This skill prepares
   the thinking a later PRD needs; it does not write the PRD.

## Workflow

1. Orient on context.
   - If an existing opportunity brief is targeted, read it first and determine
     whether the task is create, update, or review.
   - Inspect local docs and initiatives when available. Use `organize-docs`
     for routing decisions when that skill is available.
   - Ask for the user's brain dump and any source material. After the initial
     dump, ask "anything else I should know before I start tightening this?"

2. Classify the work.
   Use one of: product bet, feature, improvement, bug, experiment, platform
   work, customer request, compliance need, operational workflow.
   Classification shapes the interview; it does not force the outcome.

3. Resolve the five gating premises.
   Keep interviewing until these can be stated without contradiction:
   - Who has the problem.
   - What problem and current workaround or status quo exist.
   - Why it matters now.
   - What narrow opportunity or wedge is being considered.
   - What next artifact or action is justified.

4. Capture supporting thinking.
   Keep evidence separate from assumptions. Capture unknowns, non-goals, success
   signal, decision context, and stakes. For small ideas, keep these short.

5. Recommend the next step.
   Every run ends with one recommendation:
   - `pursue`: worth continued product attention, but not yet ready for a PRD,
     research task, or prototype.
   - `research`: important assumptions need evidence before product definition.
     Suggested next artifact: discovery research.
   - `prototype`: the main risk is feasibility, usability, or desirability and
     should be tested cheaply. Suggested next artifact: prototype or spike plan.
   - `park`: not worth acting on now, but could matter later if context changes.
   - `reject`: not worth pursuing based on current problem, evidence, fit, or
     timing.
   - `create PRD`: the user, problem, status quo, stakes, wedge, evidence, and
     non-goals are clear enough for PRD authoring.

6. Confirm before writing.
   Before creating or updating files, present a concise synthesis and the
   recommendation. Ask whether to write or update the brief unless the user
   already explicitly asked to save it. Confirm any high-impact assumptions.

## Question Style

Ask one question per turn. Make it easy to answer:

```text
Question: Which user should this opportunity optimize for first?

Options:
A. Team leads who need a weekly delivery-risk digest.
B. Engineering managers who need cross-team status.
C. Individual engineers who need fewer status interruptions.

Recommended answer: A, assuming the immediate pain is repeated delivery-risk
triage. Correct me if the strongest user is elsewhere.
```

For factual questions where no recommendation is defensible, still provide
example answer shapes:

```text
Question: What workaround do users rely on today?

Useful answer shape: name the tool or manual process, how often it happens, and
what breaks or wastes time. If you do not know yet, say "unknown" and I will
mark it as a research gap.
```

## Evidence Labels

Use plain labels rather than scores:

- `Observed`: directly seen in docs, code, analytics, support records, or user
  behavior.
- `User-stated`: the user said it in the current conversation.
- `Data`: quantitative evidence with source and date when available.
- `Customer request`: request from a customer or prospect; note whether it is
  isolated or repeated.
- `Market/source`: external source; use only for light verification in this
  skill.
- `Assumption`: plausible but not yet evidenced.

Do not present assumptions as facts. If the opportunity depends on serious
market, customer, regulatory, technical, integration, AI-capability, or codebase
evidence, recommend `research` instead of doing deep research here.

## Artifact Routing

Default path when saving a durable brief:

```text
docs/initiatives/initiative-###-slug/discovery/opportunity-brief.md
```

Use an existing matching initiative if one is clear. Otherwise inspect
`docs/initiatives/initiative-*`, choose max numeric ID + 1, preserve gaps, and
use a short kebab slug from the opportunity title. Do not create an initiative
`README.md` from this skill.

If no initiative convention exists, use a user-specified path. If no path is
specified, return the brief inline and ask where to save it rather than
inventing a new hierarchy.

For parked or rejected ideas, usually return an inline summary only. Save a
brief only if the user asks or the idea has durable strategic value.

## Opportunity Brief Template

Use this compact structure and right-size each section. Include `parent: ../README.md`
only if that README already exists.

```markdown
---
title: Short Opportunity Title
status: draft
---

# Opportunity Brief: Short Opportunity Title

## Raw Idea
The user's original idea in their own terms.

## Classification
One classification and why it fits.

## User/Customer
The first user or customer to optimize for.

## Problem
The problem stated without relying on the proposed solution.

## Current Workaround Or Status Quo
How the user handles this today and what is painful about it.

## Stakes
Why this matters, who needs the decision, and what happens if it is ignored.

## Proposed Opportunity
The reframed opportunity in user/problem/outcome terms.

## Narrowest Wedge
The smallest credible user, problem, and outcome that could prove the
opportunity.

## Why Now
Timing, trigger, urgency, constraint, or change that makes this worth evaluating
now.

## Evidence
Labeled evidence only. Keep assumptions out of this section.

## Assumptions
What must be true but is not yet proven.

## Unknowns
Questions that need research, customer input, technical exploration, or product
judgment.

## Non-Goals
Explicit boundaries for what this opportunity is not trying to solve.

## Success Signal
The earliest observable signal that the opportunity is real or not real.

## Recommendation
One of: pursue, research, prototype, park, reject, create PRD. Include concise
rationale.

## Suggested Next Artifact
The next artifact or action that matches the recommendation.

## PRD Implications
Only include when the recommendation is create PRD or the idea is likely to
become a PRD. Capture constraints, research inputs, major open decisions, and
scope boundaries the PRD must handle.
```

## Update And Review

For existing opportunity briefs:

- Read the brief before asking questions.
- Identify what changed, what conflicts with the existing framing, and what is
  still missing.
- Ask only the highest-leverage next question when the brief is not PRD-ready.
- For PRD-readiness review, assess clear user, problem, status quo, stakes,
  wedge, evidence/assumptions separation, non-goals, success signal, and next
  artifact. Do not draft the PRD.

## Self-Check

Before declaring the brief ready, verify:

- Expected sections are present or intentionally omitted.
- User, problem, status quo, why now, narrowest wedge, and next artifact are
  clear.
- Evidence and assumptions are separated.
- Claims are not unsupported or overstated.
- Non-goals and success signal are concrete enough for the opportunity size.
- Recommendation matches the evidence and uncertainty.
- Suggested next artifact matches the recommendation.
- The brief has not drifted into PRD requirements, acceptance criteria,
  architecture, story writing, or implementation planning.

If a critical premise is still missing, ask one more question instead of writing
around the gap.
