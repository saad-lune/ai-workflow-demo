# PRD Review Rubric

Use this reference when reviewing a PRD or writing `prd-review.md`. Apply the
dimensions as one integrated review. Do not require every template section for
every PRD; judge whether the PRD is ready for downstream design and architecture.

## Verdict Labels

Dimension verdicts:

- `ready`: sufficient for downstream work.
- `minor-gaps`: useful improvements remain, but downstream work can proceed
  without likely wrong decisions.
- `blocked`: missing, contradictory, or unstable information would likely cause
  wrong downstream decisions.
- `not-applicable`: the dimension does not materially apply to this PRD.

Finding classifications:

- `blocker`: must be resolved before design, architecture, roadmap, launch, or
  product revision work should rely on the PRD.
- `non-blocker`: should be improved, but can safely move in parallel with the
  next phase.
- `note`: context, caveat, or explicitly non-applicable point.

Reviewer statuses:

- `aligned`: the PRD has enough information for this function or cites clear
  alignment.
- `blocked`: this function needs a decision, review, or input before downstream
  work proceeds.
- `not-reviewed`: no evidence this function has reviewed the PRD, and review may
  be relevant.
- `not-applicable`: this function does not materially apply.

## Required Dimensions

### 1. Problem Alignment

Check:

- specific user, customer, buyer, operator, or first segment
- problem stated without depending on the proposed solution
- why the problem matters to customers/users and the business
- evidence or insights supporting the problem
- goals and non-goals that clarify intent
- enough shared context that a reviewer could explain the value and risk in
  one or two sentences

Common blockers:

- user is generic, such as "users" or "teams", and the first segment matters
- problem is actually a solution or internal preference
- no evidence for a material problem claim
- goals conflict with non-goals or scope
- contributors are not aligned on the problem

### 2. Discovery Traceability

Check:

- PRD reflects available opportunity brief, research, PRFAQ, concept verdict,
  readiness review, customer evidence, or supplied source material
- important discovery assumptions are not presented as facts
- unresolved discovery risks are named as PRD assumptions or open questions
- source conflicts are surfaced instead of silently ignored

Common blockers:

- PRD contradicts upstream discovery without rationale
- required customer, market, domain, technical, regulatory, or codebase evidence
  is missing for a material scope decision
- volatile external claims are decision-critical and unverified

### 3. Solution Perimeter

Check:

- high-level approach is understandable without implementation details
- key features define the perimeter of the solution space
- future considerations and deferred scope are explicit
- scope is small enough for the stated next phase or release
- non-goals include reasons when they prevent likely scope creep

Common blockers:

- solution boundary is so broad that design or architecture cannot know what is
  in V1
- future/v2 items are mixed with committed scope
- smaller independently shippable component was not considered for an oversized
  PRD
- out-of-scope items are missing for obvious adjacent features

### 4. Flows And Logic

Check:

- key end-to-end user/customer flows are described at an appropriate level
- common, edge, empty, error, partial, and recovery cases are covered when they
  change product behavior
- key business rules or product logic are explicit
- design and engineering know which details may evolve during downstream work
- changes to flows or logic have a visible changelog, decision log, addendum, or
  open-question trail when relevant

Common blockers:

- no key flow for the main user outcome
- important failure, trust, permission, or edge behavior is undefined
- business rules are left for design or engineering to invent
- flow descriptions contradict requirements or acceptance outcomes

### 5. Requirements And Acceptance

Check:

- requirements are user-centric, atomic, testable, and unambiguous
- stable IDs exist when traceability matters for design, architecture, roadmap,
  QA, or release slicing
- acceptance outcomes are observable from user, system, or operational behavior
- requirements map to goals, non-goals, and scope
- requirements avoid implementation tasks, file paths, or stale code snippets

Common blockers:

- requirement could be interpreted in multiple incompatible ways
- missing stable IDs would break traceability for a durable or multi-slice PRD
- acceptance outcomes are subjective only, such as "works well" or "feels good",
  with no observable signal
- core requirement lacks a way to know whether it is done

### 6. Risk, Constraints, And Non-Functional Needs

Check applicable areas:

- privacy, security, compliance, legal, data governance
- reliability, performance, scalability, availability, recovery
- permissions, abuse, safety, auditability
- AI trust, evidence, confidence, human review, evaluation, fallback
- accessibility, localization, globalization
- analytics, measurement, observability
- support, operations, ownership, migration, compatibility

Common blockers:

- PRD touches sensitive data, regulated workflows, permissions, payments,
  employment, healthcare, finance, minors, or generated decisions without
  relevant constraints
- AI or automation outputs lack trust, failure, correction, or human-control
  requirements
- reliability or operational assumptions would materially affect architecture
  but are absent

### 7. Design Readiness

Always include this dimension, right-sized.

Check:

- design has enough user, workflow, state, content, success, and non-goal
  information to begin
- key flows identify the main screens, moments, or interactions when relevant
- open design questions are explicit and separated into blockers/non-blockers
- constraints affecting UX are stated, such as accessibility, localization,
  trust, content, onboarding, or platform limits

Use `not-applicable` only when the PRD has no meaningful user-facing or workflow
experience implications.

Common blockers:

- design would need to invent the target user, main journey, or scope
- success state is unclear
- UX-sensitive trust, error, empty, or permission states are undefined

### 8. Architecture Readiness

Always include this dimension, right-sized.

Check:

- architecture has enough product constraints to reason about systems without
  inventing scope
- data, integrations, permissions, source systems, API contracts, migration,
  compatibility, operational ownership, or deployment constraints are described
  when product-relevant
- non-functional requirements that would change architecture are present
- open architecture questions are explicit and separated into blockers and
  non-blockers

Use `not-applicable` only when the PRD has no meaningful technical or system
implications beyond trivial implementation.

Common blockers:

- product outcome depends on a data source, integration, permission model, or
  reliability target that is undefined
- architecture must choose between materially different product behaviors
- PRD contains product claims that require feasibility validation before scope
  can harden

### 9. Launch And Operational Readiness

Include this dimension when the PRD affects customers, support, analytics, GTM,
legal/risk, partners, globalization, pricing, permissions, API contracts, rollout,
or external communication.

Check:

- rollout phases or milestones exist when launch risk matters
- exit criteria are observable
- analytics and measurement needs are named
- support, success, sales, marketing, product marketing, partners, globalization,
  risk, and legal implications are considered when relevant
- contingency plans or dependencies are named for major launch risks

Common blockers:

- customer-facing launch has no pilot/beta/rollout criteria despite material
  risk
- support, legal, risk, GTM, or analytics input is clearly needed but absent
- launch success cannot be measured or monitored

### 10. Open Questions And Change Hygiene

Check:

- open questions are captured and split into blocking/non-blocking
- each blocking question has an owner or function and a reason it blocks
- material PRD changes are visible through changelog, decision log, addendum, or
  update notes
- future readers can distinguish settled decisions from unresolved drift

Common blockers:

- unresolved question could change user, scope, requirement, launch, risk,
  design, or architecture direction
- PRD appears to have changed materially but no decision trail explains why
- open questions are hidden inside prose and easy for downstream agents to miss

### 11. Implementation Drift

Check:

- PRD stays at product contract level
- product-relevant constraints are allowed
- premature architecture decisions, file-level plans, task breakdowns, issue
  lists, or code snippets are not used as durable product requirements unless
  they are necessary to define scope

Common blockers:

- brittle implementation details obscure product scope
- PRD locks technical decisions that architecture has not validated and that
  change product risk
- issue/story/task decomposition appears before design and architecture have the
  required input

## Recommendation Guidance

Use exactly one recommendation:

- `ready-for-design-and-architecture`: no blockers; design and architecture can
  begin with known non-blockers.
- `needs-product-revision`: PRD author should revise product scope, requirements,
  acceptance outcomes, constraints, open questions, or source reconciliation.
- `needs-more-discovery`: decision-critical evidence is missing or volatile
  external facts require more research.
- `needs-design-input`: product direction is mostly sound, but design judgment is
  needed before the PRD can be considered ready.
- `needs-architecture-input`: product direction is mostly sound, but feasibility,
  integration, technical constraints, or system tradeoffs must be clarified.
- `needs-scope-cut`: PRD is too broad, mixed, or large for the next phase.
- `park`: plausible but not worth current durable planning.
- `reject`: PRD should not proceed because the problem, value, evidence, or fit
  does not survive review.

## Finding Quality Bar

A good finding includes:

- title
- classification: blocker, non-blocker, or note
- source citation
- why it matters for downstream work
- suggested fix without replacement prose

Avoid:

- stylistic critique that does not affect readiness
- requiring sections by name when the concern is already handled elsewhere
- vague statements such as "scope is unclear" without citing the gap
- rewriting the PRD inside the review
- hidden assumptions about the product, market, or architecture
