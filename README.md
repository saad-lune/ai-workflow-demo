# AI Workflow Agent Skills

Vendor-neutral [Agent Skills](https://agentskills.io/) for AI coding workflows.

This repository is meant to be installed as a reusable skills package, not copied into a single project's `.agents/skills/` directory by default.

## Skills

| Skill | Purpose |
| --- | --- |
| `docs-structure` | Repository documentation routing and information architecture for context, architecture, standards, initiatives, PRDs, epics, stories, QA, and readiness artifacts. |
| `frame-opportunity` | Conversation-first opportunity framing for raw ideas, ambiguous early-stage work, opportunity briefs, and PRD-preparatory next-step recommendations. |
| `opportunity-research` | Product opportunity research for validating market, customer, domain, technical, design, and codebase assumptions before PRD authoring. |
| `validate-concept` | Optional Working Backwards / PRFAQ-style concept validation guidance before PRD authoring. |

## Repository Layout

```text
skills/
  docs-structure/
    SKILL.md
  frame-opportunity/
    SKILL.md
  opportunity-research/
    SKILL.md
    references/
  validate-concept/
    SKILL.md
    assets/
    references/
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

Pi reads the `pi.skills` package manifest and loads skills from `./skills`.

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
4. whether to replace existing installs

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

Install selected skills only:

```bash
npx ai-workflow-agent-skills install --agents claude --skills docs-structure,frame-opportunity,opportunity-research,validate-concept
```

Use symlinks while developing locally:

```bash
node bin/agent-skills.mjs install --agents generic --location project --mode symlink --force
```

List available skills/agents:

```bash
npx ai-workflow-agent-skills list-skills
npx ai-workflow-agent-skills list-agents
```

## Manual Install

Prefer the installer above. If copying manually, choose a destination from the table and run:

```bash
DEST=~/.agents/skills
mkdir -p "$DEST" && cp -R skills/docs-structure skills/frame-opportunity skills/opportunity-research skills/validate-concept "$DEST/"
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
