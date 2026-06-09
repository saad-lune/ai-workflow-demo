---
name: research-opportunity
description: >-
  Product opportunity research for validating opportunities before PRD authoring.
  Use when a product idea, opportunity brief, initiative, or PRD input depends
  on market, customer, domain, technical, regulatory, integration, AI capability,
  design, or codebase assumptions. Produces product-focused evidence, confidence,
  risks, and PRD implications. Does not write PRDs or create initiatives.
---

# Research Opportunity

Ground a product opportunity in evidence before PRD authoring.

This skill is product-focused. Design and Engineering may reference its output,
but once a PRD exists, the PRD is the implementation source of truth.

## Use This For

- Researching unknowns from an opportunity brief or initiative.
- Deciding what Product must learn before writing a PRD.
- Validating market, customer, domain, technical, regulatory, integration,
  AI-capability, design, or codebase assumptions.
- Turning evidence into PRD implications, open questions, and a recommendation.

## Do Not Use This For

- Writing the PRD itself.
- Creating initiatives or opportunity briefs.
- Generic reports that do not affect a product decision.
- Codebase-fit claims when code/repo access is unavailable.
- Unsupported external claims.

## Start

1. Inspect available context before asking questions: opportunity brief,
   initiative docs, existing discovery/research, PRDs, design docs, repo docs,
   and user-provided evidence.
2. If no opportunity brief exists, support lightweight standalone research.
   If durable product context is missing, recommend `frame-opportunity`.
3. Ask only unresolved questions needed to define objective, scope, constraints,
   or access to private evidence.
4. Choose and state the depth:
   - `level-1-quick-verification`: one narrow fact, API, capability, or option.
   - `level-2-standard`: normal product discovery or option comparison.
   - `level-3-deep-dive`: high-risk, strategic, regulated, novel, expensive, or
     unfamiliar decisions.
5. For Level 2/3, state a short research plan: objective, lanes, depth,
   expected output, source strategy, and assumptions. Proceed unless effort,
   sensitivity, or boundaries need confirmation.

## Research Lanes

Use only lanes that matter to the decision:

- `market`: alternatives, substitutes, current workflows, competitors, "do
  nothing" baseline, adoption forces.
- `domain`: terminology, roles, workflows, constraints, regulations, risks,
  procurement/adoption norms, hidden assumptions.
- `technical-feasibility`: feasibility, build/buy/use choices, dependencies,
  integration limits, risks, validation checkpoints.
- `codebase-fit`: only with code/repo access and material relevance; otherwise
  produce engineering/codebase questions and validation assumptions.
- customer evidence is not a standalone v1 lane; synthesize interviews,
  support tickets, analytics, sales notes, reviews, or call notes inside the
  relevant lane.

Read `references/research-lanes.md` when selecting lanes or writing
lane-specific findings.

## Source Rules

- External sourcing is conditional but strict: use current public sources when
  stale knowledge could change the decision, such as market, competitor,
  regulatory, pricing, integration, AI capability, or fast-moving technical
  claims.
- The agent finds public sources with available search/docs tools. The user
  provides private/internal sources when those are the evidence base.
- For external claims, cite source links. For internal/user-provided evidence,
  cite title, path, date, or source name when possible.
- Separate observed facts, interpretation, assumptions, and recommendations.
- If required evidence is unavailable, mark confidence honestly and recommend
  the right validation path instead of filling gaps with opinion.

## Output Rules

- Use repository documentation conventions for initiative paths, IDs, and
  parent links; this skill owns research contents, not global doc routing.
- Create durable files only when an initiative/discovery path or opportunity
  brief exists, or when the user explicitly asks to persist research.
- Without durable context, return an inline synthesis.
- Do not create opportunity briefs or initiatives. Do not update opportunity
  briefs unless explicitly asked; instead suggest specific updates.
- Use the smallest useful artifact set. Mixed research may be one artifact with
  sections, or separate lane files only when lanes stand alone.
- Durable lane filenames are stable:
  - `discovery/research/market-research.md`
  - `discovery/research/domain-research.md`
  - `discovery/research/technical-feasibility.md`
  - `discovery/research/codebase-fit.md`
- Multiple rounds go into the same artifact as dated sections.

Read `references/research-artifact.md` before creating durable artifacts or
substantial inline reports.

## Confidence And Recommendation

Mark confidence per major finding and overall: `high`, `medium`, or `low`.

Use one recommendation value for durable artifacts:

- `ready-for-readiness-review`
- `needs-more-research`
- `needs-prototype`
- `needs-customer-validation`
- `needs-scope-cut`
- `park`
- `reject`

If overall confidence is low, provide a guarded recommendation and pause before
PRD handoff unless uncertainty is bounded and acceptable. Research hands off to
readiness review, not directly to PRD.

## Anti-Patterns

- Asking Product questions before reading available artifacts.
- Creating market research when customer clarity is the real blocker.
- Creating technical research when the product problem is unclear.
- Treating discovery artifacts as implementation requirements.
- Producing polished prose that hides uncertainty.
- Generating every possible artifact because a template exists.
- Pretending to know codebase fit without access.
- Treating stale model knowledge as current external evidence.
