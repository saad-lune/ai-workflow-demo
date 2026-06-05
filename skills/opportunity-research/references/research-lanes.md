# Research Lanes Reference

Use only the lanes needed for the product decision. Prefer one focused artifact
over several thin files.

## Market

Purpose: understand the user's available alternatives and why this opportunity
could win.

Cover when relevant:

- Target users, buyers, and affected stakeholders.
- Current workflows, substitutes, competitors, and "do nothing".
- Adoption drivers, switching costs, urgency, budget, and timing.
- Positioning implications and unmet needs.

Avoid exhaustive competitor catalogs. The useful question is: what options does
the user have today, and what must be true for this idea to beat them?

## Domain

Purpose: surface domain constraints that shape the product idea.

Cover when relevant:

- Terms of art, user roles, workflows, handoffs, and decision rights.
- Regulatory, compliance, procurement, data, security, or operational norms.
- Hidden assumptions, failure modes, trust barriers, and adoption constraints.
- Domain-specific success signals.

Avoid generic industry background unless it helps Product make a decision.

## Technical Feasibility

Purpose: inform product scope and PRD assumptions, not produce an implementation
plan.

Cover when relevant:

- Feasibility of the proposed experience or capability.
- Build/buy/use choices and major tradeoffs.
- External APIs, integrations, data availability, AI/model capabilities, pricing
  or rate limits, and operational constraints.
- Risks, unknowns, validation checkpoints, and prototype/spike needs.
- Small verified implementation sketches only when they reduce decision risk.

Use current external sources for fast-moving technical claims. Do not turn this
lane into task breakdown or architecture planning.

## Codebase Fit

Use only when code/repo access is available and materially relevant.

With access, inspect before asking:

- Relevant modules, user flows, integration points, shared patterns, data models,
  permissions, jobs, APIs, analytics, and constraints.
- Existing conventions that make the idea easy, hard, risky, or out of scope.
- Likely change areas at a product-facing level.

Without access, do not assess fit. Instead write `Codebase / Engineering
Questions` with assumptions to validate and likely integration areas.

## Customer Evidence

Customer evidence is synthesized inside the relevant lane.

Use interviews, support tickets, sales notes, analytics, reviews, call notes, or
research summaries when available. Cite internal/user-provided sources by title,
path, date, or source name. If needed customer evidence is unavailable,
recommend `needs-customer-validation`.

## Design Implications

Include only when findings affect UX or concept quality.

Useful prompts:

- Which user workflows, roles, states, or handoffs must Design understand?
- What trust, explainability, accessibility, IA, content, or onboarding issues
  could make the idea fail?
- What should be prototyped or tested before PRD scope hardens?

Keep this at discovery level. Do not prescribe final UI.

## Engineering Handoff

Include `Engineering Handoff: Solved Problems To Avoid Custom-Building` when
product scope may imply risky custom engineering.

Examples:

- Auth, permissions, billing, payments, tax, invoicing.
- Scheduling, timezones, calendars, workflow engines.
- Search, ranking, parsing, rich text, media processing.
- Security, encryption, audit logs, compliance workflows.
- AI evaluation, model routing, prompt/version management.

Phrase as product-relevant risk and validation guidance, not implementation
orders.
