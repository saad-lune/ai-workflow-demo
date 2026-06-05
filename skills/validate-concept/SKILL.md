---
name: validate-concept
description: >-
  Discovery-phase concept validation before PRD authoring. Use when the user
  wants to validate a concept, stress-test an idea, work backwards, create or
  review a PRFAQ, draft a future announcement, pressure-test customer/internal
  FAQs, challenge fuzzy customer value, or produce concept verdict guidance on
  whether to proceed, narrow, research more, prototype, park, or reject.
---

# Validate Concept

Validate a product concept through Working Backwards / PRFAQ-style pressure
testing before PRD authoring. This skill is optional. It is most useful for
strategic, ambiguous, executive-facing, resource-heavy, or easy-to-overbuild
ideas; small low-risk improvements with clear customer/problem/scope may not
need it.

These artifacts are discovery inputs for product authors. Downstream
implementation, design, QA, release, and delivery teams should depend on the
PRD and later delivery artifacts, not on `prfaq.md` or `concept-verdict.md`.

## Stance

- Be direct and rigorous: challenge vague thinking, unsupported claims, and
  solution-first framing.
- Stay constructive: when the user is stuck, propose a sharper hypothesis or
  narrower wedge for them to accept or correct.
- In interactive mode, ask exactly one user-facing decision question per turn
  and include your recommended answer.
- If a question can be answered by inspecting repo docs, code, existing PRFAQ
  artifacts, or current sources, inspect those instead of asking.
- Prefer a credible smaller concept over a broad unsupported one.
- Do not write durable repo artifacts until the full interview is complete and
  the user confirms saving the synthesized validation guidance.

## Inputs

Prefer an existing opportunity brief when present:

```text
docs/initiatives/initiative-###-slug/discovery/opportunity-brief.md
```

Also inspect existing `prfaq.md`, `concept-verdict.md`, research artifacts,
draft PRDs supplied as context, and obvious repo docs. If an existing PRFAQ is
present, summarize what stage appears incomplete and resume from the next weak
dependency. Do not overwrite it without confirmation.

After inspecting obvious repo context, ask one early question about additional
inputs: whether existing briefs, research, mockups, customer notes, or plans
should inform validation. Recommended default: proceed with repo-visible context
if the user has no extra materials.

If no opportunity brief exists, run a short intake for only:

- concept type
- specific user/customer
- concrete problem
- stakes
- rough solution concept

If the user cannot name a specific customer, describe a concrete painful
problem, or is exploring multiple unrelated ideas, stop and recommend
`opportunity-framing`.

## Modes

Default to interactive coaching. Ask one question at a time, resolve the next
dependency, and keep notes in conversation. For long Conductor sessions, `.context/`
notes are allowed for resume safety, but durable repo artifacts still wait until
the final confirmation.

Use headless drafting only when the user explicitly asks for a draft,
non-interactive pass, or autonomous PRFAQ and provides specific customer,
problem, stakes, and rough concept. If required inputs are missing or vague, do
not fabricate a polished PRFAQ. State what is missing and return to interactive
intake. Headless mode may end with a short list of the highest-impact unresolved
questions.

## Minimum Interview Path

Walk this path dynamically. Branch relentlessly when an answer is weak, but do
not skip these decisions:

1. Concept type: commercial product, internal tool, open-source project,
   platform capability, compliance need, operational workflow, or other.
2. User/customer: who feels the pain; distinguish buyer, stakeholder, or first
   team/segment when relevant.
3. Problem: concrete situation, not abstract opportunity.
4. Stakes: what breaks, slows down, costs money, creates risk, or wastes effort.
5. Status quo: current workaround and why it is insufficient.
6. Why now: timing, urgency, or change that makes this worth attention.
7. Changed outcome: what users can do after launch that they cannot do today.
8. Smallest credible V1: the first wedge, pilot population, or initial segment.
9. Non-goals / Not in V1: explicit scope boundaries.
10. Trust and failure model, when relevant: required for AI, automation,
    generated analysis, sensitive data, or source-system synthesis.
11. Success signal: at least one observable proof that the changed outcome is
    real.
12. Unsupported claims: claim ledger entries with status and evidence needs.
13. Verdict guidance: proceed, narrow, research-more, prototype, park, or reject.

## Workflow

1. **Orient**: inspect relevant repo docs and source context. Use `docs-structure`
   for routing decisions rather than duplicating initiative/path rules.
2. **Intake check**: establish concept type, customer, problem, stakes, and rough
   concept. Route to `opportunity-framing` if the idea is too raw.
3. **Materials check**: ask whether additional existing materials should inform
   validation.
4. **Press release**: draft the future announcement in conversation and test
   whether the customer-facing claim is honest, specific, and compelling. See
   [press-release.md](references/press-release.md).
5. **Customer FAQ**: pressure-test skeptical customer objections around value,
   trust, adoption, alternatives, limits, and failure. See
   [customer-faq.md](references/customer-faq.md).
6. **Smallest credible V1**: force a concrete initial launch shape before
   internal feasibility questions.
7. **Internal FAQ**: test buildability, operations, ownership, support, risk,
   cost, security, privacy, compliance, rollout, and trade-offs. See
   [internal-faq.md](references/internal-faq.md).
8. **Defensibility pass**: build a lightweight claim ledger. Mark claims as
   supported, user-stated, assumed, unproven, or false.
9. **Narrowing loop**: if the claim is too broad, vague, or unsupported, return
   to the earliest weak dependency: customer, problem, stakes, scope, trust
   model, success signal, or evidence.
10. **Verdict guidance**: decide what guidance the validation gives PRD authors.
    See [verdict.md](references/verdict.md).
11. **Synthesis preview**: before writing files, show customer, problem, changed
    outcome, smallest credible V1, non-goals, success signal, major unsupported
    claims, verdict guidance, concept strength, guidance for PRD authoring, and
    intended artifact paths.
12. **Confirm save**: ask whether to save the synthesized validation guidance.
    Only after confirmation, copy/fill
    [prfaq-template.md](assets/prfaq-template.md) and
    [concept-verdict-template.md](assets/concept-verdict-template.md).

## Research Boundary

Do light verification only. Inspect repo docs/code and verify specific
time-sensitive factual claims when needed. Use source links or file references
for external, current, competitive, regulatory, technical, and repo-derived
claims. User-stated context can be labeled `user-stated`; unresolved beliefs can
be labeled `assumed` or `unproven`.

If the concept depends on major unresolved market demand, competitor,
regulatory, integration, technical capability, AI reliability, or customer
evidence, use `research-more` guidance and route to `discovery-research`.

If the core uncertainty is experiential or technical feasibility that discussion
and research cannot resolve, use `prototype` guidance and recommend a prototype
plan or spike as the next artifact.

## Outputs

When saving durable artifacts, use repo documentation conventions. If no
compatible convention exists, the default locations are:

```text
docs/initiatives/initiative-###-slug/discovery/prfaq.md
docs/initiatives/initiative-###-slug/discovery/concept-verdict.md
```

Keep the press release, customer FAQ, and internal FAQ together in `prfaq.md`.
Do not split them into separate artifact files unless the user explicitly asks.
Write `prfaq.md` and `concept-verdict.md` only after the full interview and save
confirmation. If an existing verdict file exists, replace/update it only after
confirmation.

The exact verdict guidance values are:

- `proceed`: use the concept as a strong PRD input
- `narrow`: narrow the concept before relying on it for PRD authoring
- `research-more`: add evidence before relying on the concept
- `prototype`: run a prototype or spike before relying on the concept
- `park`: plausible, but not worth durable planning now
- `reject`: concept collapsed after validation

The `PRD Handoff` section must not imply approval or gating authority. The
output is guidance for product authors, not a mandatory PRD gate.

## Compact Example

Raw idea:

```text
Build AI-generated sprint summaries for engineering managers.
```

Weak feature framing:

```text
Summarize Jira tickets, GitHub PRs, Slack threads, blockers, and weekly status.
```

Stronger validation framing:

```text
Launch an evidence-backed manager attention briefing that tells engineering
managers what changed, what is stalled, and what needs attention, with every
claim linked to source evidence.
```

Possible guidance:

```text
Proceed only if V1 is narrowed to one team, Jira + GitHub only, weekly digest,
source-linked insights, and no autonomous recommendations.
```

## Self-Check

Before final response or file creation, confirm:

- one specific user/customer or first segment is named
- the problem, stakes, status quo, and why-now are concrete
- the changed outcome is sharper than the feature list
- smallest credible V1 and non-goals are explicit
- trust/failure model is addressed when relevant
- success signal is observable
- customer FAQ includes hard objections
- internal FAQ includes ownership, operational, and risk questions
- claim ledger separates evidence from assumptions
- verdict guidance and concept strength are explicit
- guidance for PRD authoring is present without gate language
- no durable repo artifacts are written before user confirmation
