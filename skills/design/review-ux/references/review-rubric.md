# UX Review Rubric

Use this reference when reviewing UX specs, UX slice files, or writing
`ux-review.md`. Apply dimensions as one integrated review. Do not require every
detail for every UX package; judge whether the UX contract is safe for
architecture and build agents to rely on.

## Verdict Labels

Dimension and slice verdicts:

- `ready`: sufficient for downstream architecture/build work.
- `minor-gaps`: useful improvements remain, but downstream work can proceed
  without likely wrong decisions.
- `blocked`: missing, contradictory, or unstable UX information would likely
  cause wrong downstream decisions.
- `not-applicable`: the dimension does not materially apply.

Finding classifications:

- `blocker`: must be resolved before architecture, implementation,
  accessibility validation, or product behavior should rely on the UX contract.
- `non-blocker`: should be improved, but can safely move in parallel with the
  next phase.
- `note`: context, caveat, or explicitly non-applicable point.

## Recommendation Guidance

Use the recommendation vocabulary from `SKILL.md`. Prefer the most upstream
blocking dependency:

1. `needs-product-revision`
2. `needs-exploration`
3. `needs-design-system`
4. `needs-accessibility-review`
5. `needs-ux-revision`
6. `ready-for-architecture`

Use `not-applicable` only when the reviewed source has no meaningful UI,
workflow, messaging, permissions visibility, or user-facing interaction impact.

Use `needs-accessibility-review` narrowly. Ordinary missing labels, focus order,
or keyboard behavior are usually `needs-ux-revision`. Use
`needs-accessibility-review` for regulated/high-risk accessibility,
assistive-technology complexity, legal exposure, or specialist validation needs.

## Core Dimensions

### 1. PRD Traceability

Check:

- UX decisions map to PRD value slices, functional requirement IDs, user
  journeys, success signals, constraints, and non-goals.
- Durable or multi-slice PRDs have stable requirement/journey IDs mapped to UX
  surfaces, flows, or states.
- Small specs without stable IDs cite PRD sections clearly enough to avoid
  drift.
- UX does not silently add or remove product scope.

Common blockers:

- UX omits an in-scope PRD requirement or journey without deferral.
- UX adds a material capability, role, or workflow not supported by the PRD.
- Large PRD lacks traceability from requirements to surfaces/flows/states.
- PRD review blockers make the UX contract unstable.

### 2. Scope Coverage

Check:

- Package-level UX slice inventory covers all UX-relevant PRD scope or
  explicitly defers it.
- Deferred UX scope has rationale and downstream risk.
- Package and slice boundaries are clear.
- Single-slice specs state what PRD scope was reviewed.

Common blockers:

- UX package covers only the happy path while other committed PRD flows have no
  UX treatment.
- Multiple actors, goals, or releases are mixed into one ambiguous slice.
- Deferred scope is not named, so architecture/build may assume it is included.

### 3. Information Architecture And Surface Closure

Check:

- Entry surfaces, navigation, hierarchy, primary/secondary actions, and exit
  points are explicit.
- Every load-bearing user need lands on a surface, and every surface is
  justified by a journey, requirement, or explicit design decision.
- First-screen priorities are clear.
- Admin/control-plane surfaces are separated from end-user task surfaces when
  workflows diverge.

Common blockers:

- Implementers must invent the main screen structure or navigation model.
- A required need has no surface, or a named surface has no clear purpose.
- Critical hierarchy is vague, such as "dashboard cards" with no primary focus.

### 4. Flow Coverage

Check:

- Key flows include actor/protagonist, context, entry point, success path,
  failure/recovery path, and exit/next action.
- High-risk flows include confirmation, reversal, audit, trust, or recovery
  behavior where relevant.
- Flow steps describe what the user sees and does, not only system behavior.

Common blockers:

- Primary success journey is missing or stops before the user reaches an
  observable outcome.
- Failure or recovery behavior is undefined for a critical flow.
- Flow contradicts PRD requirements or acceptance outcomes.

### 5. State Coverage

Check relevant states:

- loading and cold start
- empty and first use
- success and saved/submitted states
- error and recovery
- partial data or degraded service
- permission denied or read-only access
- offline/retry where relevant
- focus, hover, selected, expanded, disabled
- destructive confirmation and undo/recovery
- long content, long names, zero results, pagination/overflow

Common blockers:

- Critical workflow has only the happy path.
- Empty/error/permission states are left to implementation.
- Destructive or irreversible actions lack confirmation and recovery behavior.
- AI, data, or integration failure states lack trust-preserving fallback.

### 6. Interaction Clarity

Check:

- Controls, affordances, progressive disclosure, validation, feedback, and
  timing are specified.
- Keyboard and pointer interaction expectations are clear where relevant.
- Undo, cancel, escape, save, submit, retry, and destructive patterns are
  explicit.
- Validation rules say when feedback appears and how users recover.

Common blockers:

- User can enter a state with no defined way to complete, cancel, or recover.
- Important controls are named generically without behavior.
- Progressive disclosure hides required context without a reveal rule.

### 7. Microcopy And Content

Check:

- Exact copy is specified for load-bearing moments: primary CTAs, destructive
  confirmations, errors, empty states, permission/trust messages, and regulated
  or compliance-sensitive language.
- Routine labels have clear intent when exact copy is not required.
- Copy is user-facing, actionable, and specific.
- Content density, truncation, long strings, and localization implications are
  addressed when relevant.

Common blockers:

- Primary action copy is generic enough to change user behavior, such as
  "Submit" for a consequential action.
- Error or empty state has no solution path.
- Destructive, legal, trust, or permission copy is left unspecified.

### 8. Responsive And Platform Behavior

Check:

- Target platforms/form factors are explicit: desktop, tablet, mobile, native,
  web, email, notification, CLI, kiosk, or other surface.
- Behavior is specified for in-scope form factors only.
- Mobile/tablet behavior is more specific than "stack on mobile."
- Touch, keyboard, reduced motion, orientation, and viewport constraints are
  covered when relevant.

Common blockers:

- Target form factors are unstated.
- In-scope mobile or tablet behavior would require implementers to invent
  navigation, hierarchy, or action placement.
- The UX depends on hover, wide tables, or dense panels without small-screen or
  touch behavior.

### 9. Accessibility Floor

Check:

- Keyboard path and focus order are defined for critical flows.
- Interactive elements have labels and roles.
- Landmark/heading expectations are clear when page structure matters.
- Screen-reader announcements are specified for dynamic, async, destructive, or
  status changes.
- Contrast obligations, touch targets, reduced motion, and visible focus are
  named or inherited from the design system.
- Localization and RTL are handled when the PRD, market, user base, compliance,
  or existing app conventions make them relevant.

Common blockers:

- Critical or destructive flow is mouse-only.
- Dynamic state changes are invisible to assistive technologies.
- Required labels, focus order, or announcements are missing for complex forms,
  modals, drawers, or async updates.
- Accessibility risk requires specialist review before build can proceed.

### 10. Design-System Alignment

Check:

- Existing tokens, components, patterns, and visual rules are reused where
  applicable.
- Missing reusable tokens/components/patterns are identified and routed to
  `author-design-system`.
- Feature-specific UX does not invent one-off visual systems.
- Product-facing component dependencies are named at pattern level without
  drifting into file-level plans.

Common blockers:

- UX depends on new reusable visual or component rules that are not documented.
- UX contradicts existing `DESIGN.md` or app conventions without rationale.
- Design-system gap would cause implementers to invent inconsistent components.

### 11. Exploration And Visual Reference Closure

Check:

- Explorations, mockups, prototypes, imports, or screenshots referenced by the
  UX package have clear status.
- Chosen exploratory decisions are promoted into the canonical UX spec.
- Rejected options are either summarized or intentionally omitted.
- Visual references are linked at relevant sections and do not override the
  UX/design contract silently.

Common blockers:

- Unresolved exploration affects navigation, responsive behavior, trust,
  permissions, destructive recovery, or architecture/build behavior.
- Prototype or mockup is treated as canonical while the UX spec omits the
  durable decision.
- Conflicting visual references leave implementers unsure which source wins.

### 12. Anti-Generic Design Contract

Check:

- UX descriptions contain specific hierarchy, layout intent, content strategy,
  and interaction decisions instead of generic phrases.
- App UI avoids vague dashboard/card mosaics unless cards are the interaction.
- Marketing/landing experiences, when in scope, define brand/product signal,
  visual anchor, section jobs, and concrete actions.
- "Clean modern UI", "intuitive dashboard", "card grid", "hero section", or
  "polished experience" are expanded into actual design decisions.

Common blockers:

- Implementers would have to invent visual hierarchy, density, or page structure.
- UX contract would predictably produce generic AI-looking UI because it
  specifies only mood or pattern names.
- Placeholder content direction would make the first implementation misleading
  or unreviewable.

### 13. Architecture Readiness

Check:

- Architecture can reason about product-facing UX constraints without inventing
  behavior.
- UX names data visibility, permissions, audit, trust, latency, sync/offline,
  integration, or notification constraints when they affect product behavior.
- UX surfaces product decisions that may change system shape.
- Non-functional UX needs such as performance perception, progressive loading,
  error recovery, or evidence display are explicit.

Common blockers:

- Architecture must choose between materially different UX behaviors.
- Permission, data freshness, trust, or recovery behavior is undefined.
- UX hides system-impacting decisions inside vague prose or mockups.

### 14. Implementation Drift

Check:

- UX remains a product/design contract, not a file plan, code sketch, story
  list, task list, test plan, or estimate.
- Component and pattern dependencies are product-facing, not file-level
  implementation instructions.
- Review findings do not propose replacement UX prose or code changes.

Common blockers:

- UX doc locks file paths, component code, or engineering tasks before
  architecture validates the approach.
- Implementation detail obscures unresolved product or UX behavior.
- The UX package is not usable as a stable contract because it has become a
  delivery plan.

## Conditional Lenses

Apply these only when triggered by PRD scope, UX content, user request, or
existing repo conventions.

### AI, Automation, And Trust

Check evidence display, confidence, source attribution, correction paths, human
review, fallback, refusal/error states, and user control.

Block when AI/automation output can affect consequential user decisions but the
UX does not define trust, correction, or fallback behavior.

### Regulated, Financial, Legal, Or Destructive Flows

Check consent, confirmation, auditability, legal copy, irreversible actions,
permission visibility, policy constraints, and support/recovery routes.

Block when consequential actions lack confirmation, reversibility, audit trail,
or required user-facing constraints.

### Localization, RTL, And Content Expansion

Check target languages, text expansion, date/number formats, directionality,
truncation, sorting, and culturally sensitive content when relevant.

Block only when localization/RTL is in scope or required by users/compliance and
the UX would likely break or mislead.

### Migration, Onboarding, And First-Run Experience

Check empty/start states, progressive setup, import/migration status, defaults,
education, skipped setup recovery, and power-user shortcuts.

Block when users cannot reach the main workflow or recover from setup/migration
issues without invented UX.

## Package And Slice Review Guidance

For package reviews:

- Verify every UX-relevant PRD requirement, journey, or release slice has a UX
  destination: covered, deferred, out-of-scope, or not-applicable.
- Deeply review all slices when there are one to three slice files.
- For larger packages, deeply review critical/high-risk slices and summarize the
  rest at coverage level unless the user requested a full review.

For slice reviews:

- Judge the slice as a complete bounded workflow:
  actor, goal, entry point, end state, surfaces, flow steps, key states, and
  mapped PRD IDs.
- Do not require package-level coverage outside the slice, but note any package
  gaps discovered while orienting.

## Suggested Dimension Table

```markdown
| Dimension | Verdict | Notes |
| --- | --- | --- |
| PRD traceability | ready | FR-1, FR-2, and UJ-1 map to UX-001 surfaces. |
| State coverage | blocked | Permission-denied and partial-data states are missing. |
| Accessibility floor | minor-gaps | Focus order exists; live-region announcements are missing for async status. |
```

## Suggested Slice Table

```markdown
| Slice | Verdict | Notes |
| --- | --- | --- |
| UX-001 Review weekly brief | ready | Primary flow and evidence drawer states are covered. |
| UX-002 Edit and share brief | blocked | Share permission failure and destructive discard copy are undefined. |
```
