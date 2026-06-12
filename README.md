# AI Workflow Agent Skills

Vendor-neutral [Agent Skills](https://agentskills.io/) for AI coding workflows.

This repository is meant to be installed as a reusable skills package, not copied into a single project's `.agents/skills/` directory by default.

## Skills

| Category | Skill | Purpose |
| --- | --- | --- |
| `docs` | `organize-docs` | Repository documentation routing and information architecture for context, architecture, standards, initiatives, PRDs, epics, stories, QA, and readiness artifacts. |
| `design` | `author-design-system` | Repository-level design-system authoring for Google-spec `DESIGN.md`, visual identity rules, tokens, typography, color, spacing, shapes, and reusable component visual guidance. |
| `design` | `scope-ux` | Design-phase PRD scoping into UX slices, surface inventory, PRD-to-UX traceability, release assumptions, design order, and next-slice handoff. |
| `design` | `author-ux` | UX design contract authoring for scoped UX slices or small PRDs, including flows, surfaces, states, microcopy, responsive behavior, accessibility, and architecture handoff. |
| `design` | `explore-ux` | UX exploration for unresolved IA, layout, visual, responsive, accessibility, state, or interaction decisions before canonical UX or design-system updates. |
| `design` | `review-ux` | Critique UX specs, UX slice files, and design contracts before architecture or implementation, with package coverage, slice readiness, traceability, accessibility, responsive, and design-system findings. |
| `discovery` | `frame-opportunity` | Conversation-first opportunity framing for raw ideas, ambiguous early-stage work, opportunity briefs, and PRD-preparatory next-step recommendations. |
| `discovery` | `research-opportunity` | Product opportunity research for validating market, customer, domain, technical, design, and codebase assumptions before PRD authoring. |
| `discovery` | `stress-test-opportunity` | Optional Working Backwards / PRFAQ-style opportunity stress testing before PRD authoring. |
| `planning` | `author-prd` | Planning-phase PRD authoring and updating from discovery inputs into `prd.md`, `decision-log.md`, and optional `addendum.md` for design and architecture handoff. |
| `planning` | `review-prd` | Critique-only PRD readiness review before design and architecture, with blocker findings, dimension verdicts, and next-step guidance. |
| `planning` | `plan-roadmap` | Product roadmap, release-slice, phased rollout, launch plan, and requirement traceability planning from an approved PRD. |

## Repository Layout

```text
skills/
  design/
    author-design-system/
      SKILL.md
      references/
    author-ux/
      SKILL.md
      references/
    explore-ux/
      SKILL.md
      references/
    scope-ux/
      SKILL.md
      references/
    review-ux/
      SKILL.md
      references/
  discovery/
    frame-opportunity/
      SKILL.md
    research-opportunity/
      SKILL.md
      references/
    stress-test-opportunity/
      SKILL.md
      assets/
      references/
  docs/
    organize-docs/
      SKILL.md
  planning/
    author-prd/
      SKILL.md
      references/
    review-prd/
      SKILL.md
      references/
    plan-roadmap/
      SKILL.md
bin/
  agent-skills.mjs
package.json
```

`skills/` is the canonical source. Adapter/export files for tools that do not natively support Agent Skills should be generated from `skills/`, not edited as canonical content.

## Install with Pi

From GitHub:

```bash
pi install git:github.com/<owner>/<repo>@v0.1.0
```

From npm after publishing:

```bash
pi install npm:ai-workflow-agent-skills
```

Pi reads the `pi.skills` package manifest and loads skills from each category
directory under `./skills`.

## Install with npx / npm

Run the interactive setup walkthrough with `npx`:

```bash
npx ai-workflow-agent-skills
```

or:

```bash
npx ai-workflow-agent-skills setup
```

Or install the CLI globally with npm, then run setup:

```bash
npm install -g ai-workflow-agent-skills
agent-skills setup
```

The walkthrough lets you choose:

1. install location: global/user or project-local
2. one or more agents
3. copy or symlink mode
4. one or more skill categories
5. all skills in those categories or specific skills
6. whether to replace existing installs

| Agent | Global/user location | Project-local location |
| --- | --- | --- |
| Generic | `~/.agents/skills/` | `./.agents/skills/` |
| Claude Code | `~/.claude/skills/` | `./.claude/skills/` |
| Codex | `~/.codex/skills/` | `./.codex/skills/` |
| Pi native | `~/.pi/agent/skills/` | `./.pi/skills/` |

Headless/non-interactive installs:

```bash
npx ai-workflow-agent-skills install --agents generic
npx ai-workflow-agent-skills install --agents generic --location project
npx ai-workflow-agent-skills install --agents claude,codex --location project
npx ai-workflow-agent-skills install --agents all --location project
```

Agents: `generic`, `claude`, `codex`, `pi`, or `all`.

Install all skills in selected categories:

```bash
npx ai-workflow-agent-skills install --agents codex --categories discovery,planning,design
```

Install selected skills only:

```bash
npx ai-workflow-agent-skills install --agents claude --skills organize-docs,scope-ux,author-ux,review-ux,explore-ux,author-design-system,frame-opportunity,research-opportunity,stress-test-opportunity,author-prd,review-prd,plan-roadmap
```

Mix selected categories and individual skills:

```bash
npx ai-workflow-agent-skills install --agents codex --categories discovery,design --skills author-prd
```

Select skills by category-qualified name or wildcard:

```bash
npx ai-workflow-agent-skills install --agents codex --skills 'planning/author-prd,discovery/*,design/*'
```

Use symlinks while developing locally:

```bash
node bin/agent-skills.mjs install --agents generic --location project --mode symlink --force
```

List available skills/agents:

```bash
npx ai-workflow-agent-skills list-skills
npx ai-workflow-agent-skills list-categories
npx ai-workflow-agent-skills list-agents
```

Installed skill directories remain flat for agent compatibility, even though
source skills are grouped by category.

## Manual Install

Prefer the installer above. If copying manually, choose a destination from the table and run:

```bash
DEST=~/.agents/skills
mkdir -p "$DEST"
for skill in skills/*/*; do [ -f "$skill/SKILL.md" ] && cp -R "$skill" "$DEST/"; done
```

Common destinations:

| Agent | Global/user location | Project-local location |
| --- | --- | --- |
| Shared/generic | `~/.agents/skills/` | `./.agents/skills/` |
| Claude Code | `~/.claude/skills/` | `./.claude/skills/` |
| Codex | `~/.codex/skills/` | `./.codex/skills/` |
| Pi native | `~/.pi/agent/skills/` | `./.pi/skills/` |

## Cursor and Other Agents

Some agents do not currently consume Agent Skills directly. For those tools, treat `skills/` as the canonical source and create a tool-specific adapter or rule file from the skill content. Do not maintain adapter exports as the source of truth.

## Development

Validate the package can see skills:

```bash
npm run check
```

Try the installer without writing files:

```bash
node bin/agent-skills.mjs install --agents generic --location project --dry-run
```

Try the interactive walkthrough locally:

```bash
node bin/agent-skills.mjs setup
```

## Security

Skills can instruct agents to read files, write files, or run commands. Review skill contents before installing third-party skills.
