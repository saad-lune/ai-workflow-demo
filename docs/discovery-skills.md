# Discovery Skill Roadmap

This document captures the recommended discovery-phase skills for an AI-native
product and engineering SDLC. It is a reference for building the skills one by
one, not a replacement for each skill's eventual `SKILL.md`.

The existing `docs-structure` skill owns artifact routing. These discovery
skills should own the thinking workflow, artifact contents, review gates, and
handoffs into PRD creation.

## Discovery Flow

```text
raw idea
  -> opportunity-framing
  -> opportunity-research
  -> working-backwards, optional
  -> discovery-readiness-review
  -> PRD authoring
```

Use the flow flexibly. A small, obvious improvement may only need
`opportunity-framing`. A strategic product bet may need all four discovery
steps before a PRD is safe to write.

## 1. opportunity-framing

**Purpose:** Turn a raw idea into a clear opportunity brief and decide whether
the idea deserves durable SDLC treatment.

**Use when:**

- Someone says "I have an idea", "should we build this?", or "where do we
  start?"
- The input is still conversational, messy, or solution-first.
- The team needs to decide whether this belongs in an initiative, a PRD, a
  research task, a spike, a backlog note, or the parking lot.

**Primary output:**

```text
docs/initiatives/initiative-###-slug/discovery/opportunity-brief.md
```

**Core workflow:**

1. Let the user brain dump first. Do not force a template before the idea is on
   the table.
2. Classify the work: product bet, feature, improvement, bug, experiment,
   platform work, customer request, compliance need, or operational workflow.
3. Reframe solution-first ideas into problem/user language.
4. Identify whether the idea is durable enough to create or join an initiative.
5. Capture assumptions, evidence, open questions, and explicit non-goals.
6. Recommend the next step: pursue, research, prototype, park, reject, or create
   a PRD.

**Opportunity brief sections:**

- Title
- Raw idea
- User/customer
- Problem
- Current workaround or status quo
- Stakes
- Proposed opportunity
- Why now
- Evidence
- Assumptions
- Unknowns
- Non-goals
- Success signal
- Recommendation
- Suggested next artifact

**Recommended stance:** Free-form conversation first, structured artifact
second. The agent should interview and synthesize, not ask the user to fill out
a form.

**Inspired by:**

- GStack [`/office-hours`](https://github.com/garrytan/gstack/blob/main/office-hours/SKILL.md):
  forcing questions, premise challenge, narrowest wedge.
- BMAD [`bmad-product-brief`](https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/bmad-product-brief/SKILL.md):
  guided discovery and concise executive framing.
- Superpowers [`brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md):
  clarify before implementation.
- Matt Pocock [`grill-me`](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md):
  one question at a time until shared understanding.

## 2. opportunity-research

**Purpose:** Ground the opportunity in current evidence before PRD authoring.
This skill answers "what must we learn before deciding what to build?"

**Use when:**

- The opportunity depends on market, customer, domain, technical, regulatory,
  integration, AI capability, or codebase assumptions.
- The team is entering an unfamiliar space.
- The opportunity brief has important unknowns.
- A PRD would otherwise be built mostly from opinion.

**Primary outputs:**

```text
.../discovery/research/market-research.md
.../discovery/research/domain-research.md
.../discovery/research/technical-feasibility.md
.../discovery/research/codebase-fit.md
```

Create only the outputs the situation warrants. Do not generate research files
just because the template exists.

**Research depth levels:**

| Level | Name | Use when | Output |
| --- | --- | --- | --- |
| 1 | Quick verification | One narrow fact, API, capability, or known library needs confirmation | Inline note or short section |
| 2 | Standard research | Comparing options, validating assumptions, or mapping a known domain | Focused research artifact |
| 3 | Deep dive | High-risk, novel, strategic, or unfamiliar decisions | Comprehensive research artifact with confidence gates |

**Core workflow:**

1. Start from the opportunity brief and extract research questions.
2. Decide research type: market, domain, technical, codebase, customer, or mixed.
3. Choose depth level.
4. Prefer repo/internal knowledge where available for codebase and company
   context.
5. Use current external sources for time-sensitive market, competitor,
   regulatory, technical, or AI-capability claims.
6. Separate facts, interpretations, assumptions, and recommendations.
7. Mark confidence per major finding.
8. End with a decision-oriented synthesis: what this changes about the
   opportunity.

**Research artifact sections:**

- Research objective
- Scope
- Questions answered
- Sources and method
- Key findings
- Alternatives or comparables
- Risks and constraints
- Implications for the product idea
- Confidence
- Open questions
- Recommended next step

**Recommended stance:** Evidence-first, source-aware, and bounded. Research is
not a generic report generator; it exists to improve the next product decision.

**Inspired by:**

- BMAD [`bmad-market-research`](https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-market-research/SKILL.md),
  [`bmad-domain-research`](https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-domain-research/SKILL.md),
  and [`bmad-technical-research`](https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-technical-research/SKILL.md):
  market, domain, and technical research workflows.
- GSD [`discovery-phase`](https://github.com/open-gsd/gsd-core/blob/next/gsd-core/workflows/discovery-phase.md)
  and [`research` template](https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/research.md):
  research depth levels and confidence gates.
- Matt Pocock [`zoom-out`](https://github.com/mattpocock/skills/blob/main/skills/engineering/zoom-out/SKILL.md):
  explain local code in broader system context.

## 3. working-backwards

**Purpose:** Stress-test whether the concept is compelling before turning it
into a PRD. This is optional, but valuable for strategic product bets.

**Use when:**

- The team needs to decide whether an idea is actually worth building.
- The idea is executive-facing, resource-heavy, ambiguous, or easy to overbuild.
- The team has a solution but the customer value is still fuzzy.
- A bland PRD would hide weak thinking instead of resolving it.

**Primary outputs:**

```text
.../discovery/prfaq.md
.../discovery/concept-verdict.md
```

**Core workflow:**

1. Start with the future announcement: if this shipped and users loved it, what
   could we honestly say?
2. Write a press-release-style narrative focused on the customer problem and
   changed outcome, not the feature list.
3. Draft customer FAQ questions that a skeptical user would ask.
4. Draft internal FAQ questions that product, engineering, support, security,
   finance, or leadership would ask.
5. Identify claims that are not yet defensible.
6. Reframe or narrow the concept until the claim is credible.
7. End with a verdict: proceed, narrow, research more, prototype, park, or
   reject.

**Example:**

Raw idea:

```text
Build AI-generated sprint summaries for engineering managers.
```

Weak feature framing:

```text
Summarize Jira tickets, GitHub PRs, Slack threads, blockers, and weekly status.
```

Working-backwards reframing:

```text
Launch an evidence-backed manager attention briefing that tells engineering
managers what changed, what is blocked, and what needs attention, with every
claim linked to source evidence.
```

Customer FAQ pressure test:

```text
Q: Why would a manager trust this over reading Jira and GitHub directly?

A: They should not blindly trust it. V1 links every summary claim to source
evidence. The product's value is synthesis plus traceability, not opaque
summarization.
```

Internal FAQ pressure test:

```text
Q: What is the hardest risk?

A: Trust. If the system fabricates status or misses important blockers,
managers will abandon it. V1 must prioritize evidence-backed summaries over
broad coverage.
```

Possible verdict:

```text
Proceed only if V1 is narrowed to one team, Jira + GitHub only, weekly digest,
source-linked insights, and no autonomous recommendations.
```

**Recommended stance:** Relentless but constructive. The skill should challenge
vague value claims, but its job is to strengthen concepts, not perform theater.

**Inspired by:**

- BMAD [`bmad-prfaq`](https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/bmad-prfaq/SKILL.md):
  Working Backwards PRFAQ challenge.
- GStack [`/plan-ceo-review`](https://github.com/garrytan/gstack/blob/main/plan-ceo-review/SKILL.md):
  rethink the problem and find the stronger product hiding inside the request.

## 4. discovery-readiness-review

**Purpose:** Gate the transition from discovery into PRD authoring.

**Use when:**

- Discovery artifacts exist and the team wants to know whether to proceed.
- There are unresolved assumptions that may invalidate PRD work.
- Stakeholders need a concise go/no-go recommendation.

**Primary output:**

```text
.../discovery/readiness-review.md
```

**Review checks:**

- Is the user/customer specific?
- Is the problem concrete and worth solving?
- Is there evidence beyond internal opinion?
- Are assumptions marked clearly?
- Are non-goals explicit?
- Is the v1 wedge narrow enough?
- Are technical and codebase risks understood enough for PRD work?
- Are success signals observable?
- Is the recommended next artifact clear?

**Possible recommendations:**

- `ready-for-prd`
- `needs-research`
- `needs-prototype`
- `needs-scope-cut`
- `park`
- `reject`

**Recommended stance:** Short, judgment-oriented, and explicit about residual
risk.

**Inspired by:**

- Superpowers [`spec-document-reviewer-prompt`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/spec-document-reviewer-prompt.md):
  check whether a spec is complete, consistent, and ready for planning.
- GSD [`requirements` template](https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/requirements.md)
  and [`roadmap` template](https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/roadmap.md):
  traceability and readiness before planning.

## Skill Build Order

Build in this order:

1. `opportunity-framing`
2. `opportunity-research`
3. `discovery-readiness-review`
4. `working-backwards`

This order gives the team a usable discovery workflow quickly.
`working-backwards` is powerful, but it is less foundational than framing and
research. It can be added once the team has used the first two skills on real
ideas.

## Relationship To docs-structure

`docs-structure` decides where artifacts belong. Discovery skills should call
on that routing convention, but they should not duplicate the routing table.

Recommended durable discovery location:

```text
docs/initiatives/initiative-###-slug/discovery/
```

Recommended handoff:

```text
discovery/readiness-review.md
  -> planning/prds/prd-###-slug/prd.md
```

When an idea is not ready for an initiative, keep it lightweight until the user
explicitly asks for durable storage. A future parking-lot or seed skill can own
that behavior.

## Anti-Patterns

- Starting with PRD authoring before the problem is understood.
- Treating every idea as durable initiative work.
- Creating market research when the real blocker is codebase fit.
- Creating technical research when the real blocker is customer clarity.
- Producing generic research reports that do not change a decision.
- Asking users questions the agent could answer by reading repo docs or code.
- Hiding uncertainty in polished prose.
- Letting optional workflows become mandatory ceremony.

## Source Repositories Reviewed

- Matt Pocock Skills: https://github.com/mattpocock/skills
- GStack skills guide: https://github.com/garrytan/gstack/blob/main/docs/skills.md
- Open GSD Core: https://github.com/open-gsd/gsd-core
- BMAD Method: https://github.com/bmad-code-org/bmad-method
- Superpowers: https://github.com/obra/superpowers

## Reference Skills And Files

Opportunity framing:

- https://github.com/garrytan/gstack/blob/main/office-hours/SKILL.md
- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/bmad-product-brief/SKILL.md
- https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md
- https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md

Discovery research:

- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-market-research/SKILL.md
- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-domain-research/SKILL.md
- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/research/bmad-technical-research/SKILL.md
- https://github.com/open-gsd/gsd-core/blob/next/gsd-core/workflows/discovery-phase.md
- https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/discovery.md
- https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/research.md
- https://github.com/mattpocock/skills/blob/main/skills/engineering/zoom-out/SKILL.md

Working backwards:

- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/bmad-prfaq/SKILL.md
- https://github.com/bmad-code-org/bmad-method/blob/main/src/bmm-skills/1-analysis/bmad-prfaq/assets/prfaq-template.md
- https://github.com/garrytan/gstack/blob/main/plan-ceo-review/SKILL.md

Readiness review:

- https://github.com/obra/superpowers/blob/main/skills/brainstorming/spec-document-reviewer-prompt.md
- https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/requirements.md
- https://github.com/open-gsd/gsd-core/blob/next/gsd-core/templates/roadmap.md
