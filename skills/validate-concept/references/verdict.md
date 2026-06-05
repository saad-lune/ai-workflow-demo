# Verdict Stage

Use this stage to turn validation into guidance for product authors. The verdict
does not approve or control PRD creation; it explains how the PRD author should
use the concept validation.

## Verdict Guidance Values

- `proceed`: use the concept as a strong PRD input
- `narrow`: narrow the concept before relying on it for PRD authoring
- `research-more`: add evidence before relying on the concept
- `prototype`: run a prototype or spike before relying on the concept
- `park`: plausible, but not worth durable planning now
- `reject`: concept collapsed after validation

Keep `park`. It means plausible but not worth current durable planning, which is
different from `reject` and `research-more`.

## Concept Strength Score

Score from 1 to 5:

- `1`: unclear customer/problem or mostly technology-led
- `2`: plausible but weak value, evidence, or scope
- `3`: useful but needs narrowing, research, or prototype evidence
- `4`: strong concept with manageable risks
- `5`: unusually clear, urgent, defensible, and scoped

Do not over-score. A concept with existential unanswered questions is at most
`3`, even if the narrative is compelling.

## Guidance Rules

- If the concept can be used as a strong PRD input, use `proceed`.
- If the narrowed concept has been accepted and passes the remaining checks, the
  guidance can become `proceed`; otherwise keep `narrow`.
- If major factual uncertainty remains, use `research-more` and name the
  specific research question.
- If experiential or technical feasibility is the core uncertainty, use
  `prototype` and name the spike/prototype question.
- If the idea is plausible but not worth planning now, use `park`.
- If no specific customer/problem/stakes survive validation, use `reject`.

## Final Synthesis Preview

Before writing files, show:

- customer or first segment
- problem, stakes, status quo, and why-now
- changed outcome
- smallest credible V1
- non-goals / not in V1
- success signal
- major unsupported claims
- verdict guidance
- concept strength score
- guidance for PRD authoring
- intended artifact paths

Then ask whether to save this validation guidance.

## Final Self-Check

Before delivering the verdict:

- name the customer and changed outcome in one sentence
- identify the hardest unresolved assumption
- distinguish evidence from belief
- state what should not be built yet
- avoid PRD gate language
- provide guidance for PRD authoring and the next recommended artifact
