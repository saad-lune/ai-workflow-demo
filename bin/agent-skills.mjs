#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skillsRoot = path.join(repoRoot, 'skills');
const cwd = process.cwd();

const agentDefinitions = [
  {
    key: 'generic',
    aliases: ['generic', 'agents'],
    label: 'Generic Agent Skills',
    globalDir: path.join(os.homedir(), '.agents', 'skills'),
    projectDir: path.join(cwd, '.agents', 'skills'),
  },
  {
    key: 'claude',
    aliases: ['claude', 'cluade'],
    label: 'Claude Code',
    globalDir: path.join(os.homedir(), '.claude', 'skills'),
    projectDir: path.join(cwd, '.claude', 'skills'),
  },
  {
    key: 'codex',
    aliases: ['codex'],
    label: 'Codex',
    globalDir: path.join(os.homedir(), '.codex', 'skills'),
    projectDir: path.join(cwd, '.codex', 'skills'),
  },
  {
    key: 'pi',
    aliases: ['pi'],
    label: 'Pi',
    globalDir: path.join(os.homedir(), '.pi', 'agent', 'skills'),
    projectDir: path.join(cwd, '.pi', 'skills'),
  },
];

const agentByName = new Map(agentDefinitions.flatMap((agent) => agent.aliases.map((alias) => [alias, agent])));

function usage(exitCode = 0) {
  const names = agentDefinitions.map((agent) => agent.key).join('|');
  console.log(`Usage:
  agent-skills setup
  agent-skills list
  agent-skills list-categories
  agent-skills list-agents
  agent-skills install --agents <${names}|all> [--location global|project] [--categories <category|all>] [--skills <name|all>] [--mode copy|symlink] [--dir <path>] [--force] [--dry-run]

Agents:
  generic  global ~/.agents/skills        project ./.agents/skills
  claude   global ~/.claude/skills        project ./.claude/skills
  codex    global ~/.codex/skills         project ./.codex/skills
  pi       global ~/.pi/agent/skills      project ./.pi/skills

Examples:
  npx ai-workflow-agent-skills
  npx ai-workflow-agent-skills setup
  npx ai-workflow-agent-skills list
  npx ai-workflow-agent-skills list-categories
  npx ai-workflow-agent-skills list-agents
  npx ai-workflow-agent-skills install --agents generic
  npx ai-workflow-agent-skills install --agents claude,codex --location project
  npx ai-workflow-agent-skills install --agents codex --categories discovery,planning
  npx ai-workflow-agent-skills install --agents claude --location project --skills organize-docs
  npx ai-workflow-agent-skills install --dir ~/.codex/skills --mode symlink
`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const opts = {
    command: argv[0],
    agents: undefined,
    location: undefined,
    categories: undefined,
    categoriesSpecified: false,
    skills: 'all',
    skillsSpecified: false,
    mode: 'copy',
    dir: undefined,
    force: false,
    dryRun: false,
  };

  for (let i = 1; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') usage(0);
    if (arg === '--force' || arg === '-f') { opts.force = true; continue; }
    if (arg === '--dry-run' || arg === '-n') { opts.dryRun = true; continue; }
    if (arg === '--agents' || arg === '-a') { opts.agents = requireValue(argv, ++i, arg); continue; }
    if (arg === '--location' || arg === '-l') { opts.location = requireValue(argv, ++i, arg).toLowerCase(); continue; }
    if (arg === '--categories' || arg === '--category' || arg === '-c') {
      opts.categories = requireValue(argv, ++i, arg);
      opts.categoriesSpecified = true;
      continue;
    }
    if (arg === '--skills' || arg === '--skill' || arg === '-s') {
      opts.skills = requireValue(argv, ++i, arg);
      opts.skillsSpecified = true;
      continue;
    }
    if (arg === '--mode' || arg === '-m') { opts.mode = requireValue(argv, ++i, arg); continue; }
    if (arg === '--dir' || arg === '-d') { opts.dir = expandHome(requireValue(argv, ++i, arg)); continue; }
    fail(`Unknown argument: ${arg}`);
  }

  if (opts.location && !['global', 'project'].includes(opts.location)) {
    fail(`Unsupported location: ${opts.location}. Use global or project.`);
  }

  return opts;
}

function requireValue(argv, index, flag) {
  if (!argv[index] || argv[index].startsWith('--')) fail(`${flag} requires a value`);
  return argv[index];
}

function expandHome(value) {
  if (value === '~') return os.homedir();
  if (value.startsWith('~/')) return path.join(os.homedir(), value.slice(2));
  return path.resolve(value);
}

function fail(message) {
  console.error(`Error: ${message}`);
  console.error('Run `agent-skills --help` for usage.');
  process.exit(1);
}

function discoverSkills() {
  if (!fs.existsSync(skillsRoot)) fail(`Missing skills directory: ${skillsRoot}`);
  const skills = [];

  function visit(dir) {
    const skillFile = path.join(dir, 'SKILL.md');
    if (fs.existsSync(skillFile)) {
      const relativePath = path.relative(skillsRoot, dir);
      const parts = relativePath.split(path.sep).filter(Boolean);
      const name = parts.at(-1);
      const category = parts.length > 1 ? parts.slice(0, -1).join('/') : 'uncategorized';
      skills.push({ name, category, source: dir, relativePath });
      return;
    }

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) visit(path.join(dir, entry.name));
    }
  }

  visit(skillsRoot);

  const byName = new Map();
  for (const skill of skills) {
    const matches = byName.get(skill.name) ?? [];
    matches.push(skill);
    byName.set(skill.name, matches);
  }

  for (const [name, matches] of byName) {
    if (matches.length > 1) {
      const locations = matches.map((skill) => skill.relativePath).join(', ');
      fail(`Duplicate skill name "${name}" found in: ${locations}`);
    }
  }

  return skills.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

function listCategories(registry = discoverSkills()) {
  return [...new Set(registry.map((skill) => skill.category))].sort();
}

function formatSkill(skill) {
  return skill.category === 'uncategorized' ? skill.name : `${skill.category}/${skill.name}`;
}

function resolveAgent(name) {
  const agent = agentByName.get(String(name).toLowerCase());
  if (!agent) fail(`Unknown agent: ${name}. Use one of: ${agentDefinitions.map((item) => item.key).join(', ')}, or all.`);
  return agent;
}

function materializeAgent(agent, location) {
  return {
    ...agent,
    location,
    dir: location === 'project' ? agent.projectDir : agent.globalDir,
  };
}

function resolveInstallAgents(agentNames, location) {
  const rawAgents = splitSelections(agentNames);
  if (rawAgents.length === 0) fail('--agents requires at least one agent');
  if (rawAgents.some((name) => name.toLowerCase() === 'all')) {
    return agentDefinitions.map((agent) => materializeAgent(agent, location));
  }

  const selected = [];
  for (const rawAgent of rawAgents) {
    const agent = materializeAgent(resolveAgent(rawAgent), location);
    if (!selected.some((item) => item.key === agent.key)) selected.push(agent);
  }
  return selected;
}

function resolveSelectedCategories(categoriesValue, registry) {
  const categories = listCategories(registry);
  const rawCategories = splitSelections(categoriesValue);
  if (rawCategories.length === 0 || rawCategories.some((category) => category.toLowerCase() === 'all')) return categories;

  const selected = [];
  for (const rawCategory of rawCategories) {
    const category = categories.find((item) => item.toLowerCase() === rawCategory.toLowerCase());
    if (!category) fail(`Unknown category: ${rawCategory}. Use one of: ${categories.join(', ')}, or all.`);
    if (!selected.includes(category)) selected.push(category);
  }
  return selected;
}

function selectSkillsByCategory(registry, categories) {
  return registry.filter((skill) => categories.includes(skill.category));
}

function resolveSelectedSkills(opts, registry = discoverSkills()) {
  const selected = new Map();

  if (opts.categoriesSpecified) {
    for (const skill of selectSkillsByCategory(registry, resolveSelectedCategories(opts.categories, registry))) {
      selected.set(skill.name, skill);
    }
  }

  const rawSkills = splitSelections(opts.skills);
  const shouldSelectAllSkills = rawSkills.length === 0 || rawSkills.some((skill) => skill.toLowerCase() === 'all');
  if (!opts.categoriesSpecified && shouldSelectAllSkills) {
    for (const skill of registry) selected.set(skill.name, skill);
    return [...selected.values()];
  }

  if (opts.skillsSpecified && shouldSelectAllSkills) {
    if (!opts.categoriesSpecified) {
      for (const skill of registry) selected.set(skill.name, skill);
    }
    return [...selected.values()];
  }

  if (opts.skillsSpecified) {
    for (const rawSkill of rawSkills) {
      if (rawSkill.endsWith('/*')) {
        const category = rawSkill.slice(0, -2);
        for (const skill of selectSkillsByCategory(registry, resolveSelectedCategories(category, registry))) {
          selected.set(skill.name, skill);
        }
        continue;
      }

      const skill = findSkill(rawSkill, registry);
      selected.set(skill.name, skill);
    }
  }

  if (selected.size === 0) {
    for (const skill of registry) selected.set(skill.name, skill);
  }

  return [...selected.values()];
}

function findSkill(value, registry) {
  const normalized = value.toLowerCase();
  const matches = registry.filter((skill) => {
    return skill.name.toLowerCase() === normalized
      || formatSkill(skill).toLowerCase() === normalized
      || skill.relativePath.toLowerCase() === normalized;
  });

  if (matches.length === 0) fail(`Unknown skill: ${value}`);
  if (matches.length > 1) fail(`Ambiguous skill: ${value}. Use category/name.`);
  return matches[0];
}

function installSkill(skill, destinationRoot, mode, force, dryRun) {
  const source = skill.source;
  const destination = path.join(destinationRoot, skill.name);

  if (!fs.existsSync(source)) fail(`Unknown skill source: ${source}`);

  const action = mode === 'symlink' ? 'Symlink' : 'Copy';
  console.log(`${dryRun ? '[dry-run] ' : ''}${action} ${source} -> ${destination}`);
  if (dryRun) return;

  fs.mkdirSync(destinationRoot, { recursive: true });

  if (fs.existsSync(destination)) {
    if (!force) fail(`Destination exists: ${destination}. Use --force to replace it.`);
    fs.rmSync(destination, { recursive: true, force: true });
  }

  if (mode === 'symlink') {
    fs.symlinkSync(source, destination, 'dir');
  } else if (mode === 'copy') {
    fs.cpSync(source, destination, { recursive: true });
  } else {
    fail(`Unsupported mode: ${mode}`);
  }
}

async function setup(opts) {
  if (!input.isTTY || !output.isTTY) {
    fail('Interactive setup requires a TTY. Use `install --agents <agents> --location <global|project>` for non-interactive installs.');
  }

  const rl = readline.createInterface({ input, output });
  try {
    console.log('AI Workflow Agent Skills setup');
    console.log('This will copy or symlink selected skills into agent-specific skills directories.\n');

    const registry = discoverSkills();
    console.log(`Available categories: ${listCategories(registry).join(', ')}`);
    console.log(`Available skills: ${registry.map(formatSkill).join(', ')}\n`);

    const location = opts.location ?? await promptLocation(rl);
    const selectedAgents = opts.agents
      ? resolveInstallAgents(opts.agents, location)
      : await promptAgents(rl, location);
    const mode = await promptMode(rl, opts.mode);
    const selectedSkills = await promptInstallSkills(rl, opts, registry);

    let force = opts.force;
    const conflicts = findConflicts(selectedAgents, selectedSkills);
    if (conflicts.length > 0 && !force) {
      console.log('\nExisting installs found:');
      for (const conflict of conflicts) console.log(`- ${conflict}`);
      force = await promptYesNo(rl, '\nReplace existing skill directories?', false);
    }

    const dryRun = opts.dryRun || await promptYesNo(rl, '\nPreview only without writing files?', false);

    console.log('\nInstall plan:');
    console.log(`- Location: ${location}`);
    for (const agent of selectedAgents) {
      console.log(`- ${agent.label}: ${agent.dir}`);
    }
    console.log(`- Skills: ${selectedSkills.map(formatSkill).join(', ')}`);
    console.log(`- Mode: ${mode}`);
    console.log(`- Replace existing: ${force ? 'yes' : 'no'}`);
    console.log(`- Dry run: ${dryRun ? 'yes' : 'no'}`);

    if (!await promptYesNo(rl, '\nProceed?', true)) {
      console.log('Cancelled.');
      return;
    }

    console.log('');
    for (const agent of selectedAgents) {
      for (const skill of selectedSkills) {
        installSkill(skill, agent.dir, mode, force, dryRun);
      }
    }

    console.log(`\n${dryRun ? 'Dry run complete.' : 'Done.'}`);
  } finally {
    rl.close();
  }
}

async function promptLocation(rl) {
  console.log('Install location:');
  console.log('  1) Global/user — install under your home directory');
  console.log('  2) Project local — install under the current working directory');

  while (true) {
    const answer = (await rl.question('\nSelect location [global]: ')).trim().toLowerCase();
    if (!answer || answer === '1' || answer === 'global' || answer === 'user') return 'global';
    if (answer === '2' || answer === 'project' || answer === 'local') return 'project';
    console.log('Choose global or project.');
  }
}

async function promptAgents(rl, location) {
  console.log('\nWhich agents should receive the skills?');
  agentDefinitions.forEach((agent, index) => {
    const materialized = materializeAgent(agent, location);
    console.log(`  ${index + 1}) ${agent.label} (${materialized.dir})`);
  });
  console.log('  all) All agents');

  while (true) {
    const answer = (await rl.question('\nSelect agents by number/name, comma-separated [generic]: ')).trim();
    const rawSelections = answer ? splitSelections(answer) : ['generic'];
    const selected = [];

    for (const raw of rawSelections) {
      if (raw.toLowerCase() === 'all') return agentDefinitions.map((agent) => materializeAgent(agent, location));
      const byIndex = Number(raw);
      const agent = Number.isInteger(byIndex) && byIndex >= 1 && byIndex <= agentDefinitions.length
        ? agentDefinitions[byIndex - 1]
        : agentByName.get(raw.toLowerCase());
      if (!agent) {
        console.log(`Unknown agent: ${raw}`);
        selected.length = 0;
        break;
      }
      const materialized = materializeAgent(agent, location);
      if (!selected.some((item) => item.key === materialized.key)) selected.push(materialized);
    }

    if (selected.length > 0) return selected;
  }
}

async function promptMode(rl, defaultMode) {
  while (true) {
    const answer = (await rl.question(`Install mode: copy or symlink [${defaultMode}]: `)).trim().toLowerCase() || defaultMode;
    if (['copy', 'symlink'].includes(answer)) return answer;
    console.log('Choose `copy` or `symlink`.');
  }
}

async function promptInstallSkills(rl, opts, registry) {
  if (opts.skillsSpecified || opts.categoriesSpecified) return resolveSelectedSkills(opts, registry);

  const selectedCategories = await promptCategories(rl, registry);
  const categorySkills = selectSkillsByCategory(registry, selectedCategories);
  if (await promptYesNo(rl, '\nInstall all skills from selected categories?', true)) return categorySkills;

  return promptSkills(rl, categorySkills, 'all');
}

async function promptCategories(rl, registry) {
  const categories = listCategories(registry);

  console.log('\nAvailable categories:');
  categories.forEach((category, index) => {
    const skillCount = registry.filter((skill) => skill.category === category).length;
    console.log(`  ${index + 1}) ${category} (${skillCount} skills)`);
  });
  console.log('  all) All categories');

  while (true) {
    const answer = (await rl.question('\nSelect categories by number/name, comma-separated [all]: ')).trim();
    const rawSelections = answer ? splitSelections(answer) : ['all'];
    if (rawSelections.some((item) => item.toLowerCase() === 'all')) return categories;

    const selected = [];
    for (const raw of rawSelections) {
      const byIndex = Number(raw);
      const category = Number.isInteger(byIndex) && byIndex >= 1 && byIndex <= categories.length
        ? categories[byIndex - 1]
        : categories.find((item) => item.toLowerCase() === raw.toLowerCase());
      if (!category) {
        console.log(`Unknown category: ${raw}`);
        selected.length = 0;
        break;
      }
      if (!selected.includes(category)) selected.push(category);
    }

    if (selected.length > 0) return selected;
  }
}

async function promptSkills(rl, skills, defaultSkills) {
  if (skills.length === 1) return skills;

  console.log('\nAvailable skills:');
  skills.forEach((skill, index) => console.log(`  ${index + 1}) ${formatSkill(skill)}`));
  console.log('  all) All skills');

  while (true) {
    const answer = (await rl.question(`Select skills by number/name, comma-separated [${defaultSkills}]: `)).trim();
    const rawSelections = answer ? splitSelections(answer) : splitSelections(defaultSkills);
    if (rawSelections.some((item) => item.toLowerCase() === 'all')) return skills;

    const selected = [];
    for (const raw of rawSelections) {
      const byIndex = Number(raw);
      const skill = Number.isInteger(byIndex) && byIndex >= 1 && byIndex <= skills.length
        ? skills[byIndex - 1]
        : skills.find((item) => item.name.toLowerCase() === raw.toLowerCase() || formatSkill(item).toLowerCase() === raw.toLowerCase());
      if (!skill) {
        console.log(`Unknown skill: ${raw}`);
        selected.length = 0;
        break;
      }
      if (!selected.some((item) => item.name === skill.name)) selected.push(skill);
    }

    if (selected.length > 0) return selected;
  }
}

function splitSelections(value) {
  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

function findConflicts(agents, skills) {
  const conflicts = [];
  for (const agent of agents) {
    for (const skill of skills) {
      const destination = path.join(agent.dir, skill.name);
      if (fs.existsSync(destination)) conflicts.push(destination);
    }
  }
  return conflicts;
}

async function promptYesNo(rl, question, defaultValue) {
  const suffix = defaultValue ? ' [Y/n]: ' : ' [y/N]: ';
  while (true) {
    const answer = (await rl.question(question + suffix)).trim().toLowerCase();
    if (!answer) return defaultValue;
    if (['y', 'yes'].includes(answer)) return true;
    if (['n', 'no'].includes(answer)) return false;
    console.log('Please answer yes or no.');
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (!opts.command) {
    await setup(opts);
    return;
  }

  if (opts.command === '--help' || opts.command === '-h') usage(0);

  if (opts.command === 'list' || opts.command === 'list-skills') {
    for (const skill of discoverSkills()) console.log(formatSkill(skill));
    return;
  }

  if (opts.command === 'list-categories') {
    for (const category of listCategories()) console.log(category);
    return;
  }

  if (opts.command === 'list-agents') {
    for (const agent of agentDefinitions) console.log(agent.key);
    return;
  }

  if (opts.command === 'setup') {
    await setup(opts);
    return;
  }

  if (opts.command !== 'install') fail(`Unknown command: ${opts.command}`);
  if (!['copy', 'symlink'].includes(opts.mode)) fail(`Unsupported mode: ${opts.mode}`);

  if (!opts.agents && !opts.dir) {
    await setup(opts);
    return;
  }

  const location = opts.location ?? 'global';
  const selectedSkills = resolveSelectedSkills(opts);

  if (opts.dir) {
    for (const skill of selectedSkills) installSkill(skill, opts.dir, opts.mode, opts.force, opts.dryRun);
    return;
  }

  for (const agent of resolveInstallAgents(opts.agents, location)) {
    for (const skill of selectedSkills) installSkill(skill, agent.dir, opts.mode, opts.force, opts.dryRun);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
