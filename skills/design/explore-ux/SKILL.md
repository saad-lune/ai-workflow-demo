---
name: explore-ux
description: >-
  Explore unresolved UX, information architecture, layout, visual, responsive,
  accessibility, state, or interaction questions before updating the canonical
  UX spec or design system. Use for comparing design directions, static
  mockups, lightweight interactive prototypes, mockup briefs, prototype
  findings, and UX decision evidence that feeds back into author-ux or
  author-design-system.
---

# Explore UX

Explore one unresolved UX decision at a time. Produce decision evidence, not the
canonical UX contract. The final UX behavior belongs in `ux-spec.md` or a UX
slice file through `author-ux`; reusable visual-system decisions belong in
`DESIGN.md` through `author-design-system`.

## Operating Principles

1. Read available context before asking: PRD package, UX scope map, UX slice,
   `DESIGN.md`, existing explorations, and relevant app UI conventions.
2. Do not ask questions that files can answer. Inspect docs first; inspect app
   code only when existing UI conventions, components, routes, states, or data
   shapes affect the exploration.
3. Prefer the lightest evidence that can answer the decision. Stay in prose when
   reading is enough; make visuals or prototypes only when seeing or trying the
   option changes the decision.
4. Keep one primary design question per exploration. If the user asks broadly,
   decompose into 2-5 concrete questions and explore them one at a time.
5. Compare 2-4 meaningfully different options; default to 3. Options must differ
   in structure, hierarchy, density, navigation, interaction model, or visual
   system impact, not only color or copy.
6. Recommend a direction and explain why, but ask the user to choose, reject, or
   synthesize unless the user requested headless work.
7. Treat responsive behavior, accessibility, and key states as decision inputs.
   Cover them at the level relevant to the exploration mode.
8. Mark artifacts as exploratory. Do not promote prototype code directly to
   production. Capture cleanup or promotion instructions when prototypes exist.

## Inputs

Prefer PRD-grounded exploration. Common inputs:

```text
ux/ux-spec.md or ux/ux-scope-map.md, when present
ux/flows/ux-###-slug.md, when present
prd.md
prd-review.md
roadmap.md, optional
decision-log.md
addendum.md, optional
docs/standards/design/DESIGN.md, optional
prior ux/explorations/*, optional
existing app UI files, optional when relevant
```

Exploration may run without a PRD only when the user explicitly asks for
standalone UX exploration. Return standalone work inline by default; ask for a
destination before saving if no PRD package or compatible repo convention exists.

## Readiness

Use a soft gate:

- If PRD or UX inputs are draft, missing review, or blocked, say so and label
  the exploration as provisional.
- Proceed when the exploration can reduce UX uncertainty without pretending that
  upstream product scope is final.
- Do not create durable PRD-scoped exploration files when no parent PRD or UX
  package exists unless the user provides a destination.

## Modes

Choose one mode per primary question:

- `textual-directions`: prose comparison only.
- `static-mockups`: static sketches, layout mockups, wireframes, or screenshots.
- `interactive-prototype`: lightweight exploratory interaction prototype.
- `mockup-brief`: prompt/spec for another visual tool.

Read [exploration-record.md](references/exploration-record.md) before creating a
durable exploration record, a substantial inline report, or any promoted assets.

## Workflow

1. **Orient.** Resolve the PRD or UX package when supplied. Read relevant source
   artifacts and prior explorations. Identify whether this is PRD-grounded or
   standalone.
2. **Frame the question.** State the exact design question, related UX slice,
   source PRD IDs, affected surfaces, key states, and decision risk.
3. **Decompose if needed.** For broad requests, propose 2-5 concrete design
   questions, recommend the first one to explore, and ask before proceeding
   unless the user asked for a headless pass.
4. **Pick the mode.** Choose the lightest mode that can answer the question.
   Match visual fidelity to the decision: wireframes for structure/IA, higher
   fidelity only for visual hierarchy, density, trust, or style.
5. **Generate options or prototype.** Produce 2-4 distinct options. For
   prototypes, define scenario, start state, end state, included states, and
   what would prove success or failure.
6. **Compare.** Evaluate against user job, PRD constraints, UX slice needs,
   design-system fit, key states, responsive behavior, accessibility,
   architecture implications, and implementation risk without writing an
   implementation plan.
7. **Recommend and decide.** Name the recommended option and rationale. Ask the
   user to choose, reject, or synthesize a direction. In headless mode, mark the
   recommendation provisional and list what is not locked.
8. **Capture evidence.** Record chosen direction, rejected alternatives,
   rationale, findings, artifact status, and required canonical updates. Keep
   decisions in the exploration record; `author-ux` owns later decision-log
   promotion.
9. **Route back.** Name the exact `ux-spec.md`, UX slice, or `DESIGN.md` updates
   needed and route to `author-ux` or `author-design-system`.

## Artifact Routing

Use `organize-docs` conventions when available. Default PRD-scoped locations:

```text
docs/initiatives/.../planning/prds/prd-###-slug/ux/explorations/explore-001-short-slug.md
docs/initiatives/.../planning/prds/prd-###-slug/ux/explorations/explore-001-short-slug/
```

Use scoped three-digit IDs under each PRD. Preserve gaps and never renumber.
Keep the Markdown record beside any promoted asset folder.

Scratch work may live in `.context/`. Promote only selected assets that explain
the final decision into the PRD `ux/explorations/` folder. Do not save durable
mockups or prototypes to unrelated repo locations.

Preview before writing durable artifacts unless the user explicitly asked to
write, save, update, or run headless.

## Prototype Rules

- Prefer standalone HTML with inline CSS/JS and no build step.
- Use app-embedded prototypes only when real navigation, density, auth,
  existing components, or app state are essential to the decision, and only
  after explicit user confirmation for that run.
- Mark source edits for app-embedded prototypes as exploratory and include
  cleanup or promotion instructions.
- Do not wire real mutations. Use realistic content and in-memory state.
- When feasible, run or open HTML/prototype artifacts and record verification
  status. If verification is skipped, say why.

## Self-Check

Before final response or file creation, verify:

- available docs were inspected before asking the user
- one primary design question is named
- broad requests were decomposed before options were generated
- mode is the lightest one that can answer the question
- options are meaningfully different, not cosmetic variants
- responsive and accessibility implications are covered where relevant
- key states are included or explicitly not relevant
- prototype artifacts are marked exploratory and verified when feasible
- the decision status is clear: `exploratory`, `decision-captured`, or
  `superseded`
- required `ux-spec.md`, UX slice, or `DESIGN.md` updates are named
- the output has not become a final UX spec, design system, implementation plan,
  production code, or QA review
