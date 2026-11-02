#!/usr/bin/env node
// Daily auto-sync: fetches public, non-fork GitHub repos for the configured
// user and adds any that aren't already represented in the portfolio yet,
// as new (unfeatured) project cards — same shape as the hand-written ones.
//
// Run by .github/workflows/sync-and-deploy.yml on a daily schedule (and via
// manual workflow_dispatch). Writes changes straight to:
//   - client/src/data/projects.js  (the live static site's project list)
//   - server/seed.js               (kept in sync for the legacy MERN backend)
//
// If GITHUB_OUTPUT is set (i.e. running inside GitHub Actions), writes
// `changed=true`/`changed=false` so the workflow knows whether to commit,
// rebuild and redeploy.

import { readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROJECTS_JS = join(ROOT, "client/src/data/projects.js");
const SEED_JS = join(ROOT, "server/seed.js");

const GITHUB_USER = process.env.GITHUB_USER || "ABsynced";
const SELF_REPO = "portfolio"; // never add this repo to itself

function titleCase(name) {
  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
    {
      headers: {
        "User-Agent": "portfolio-sync-script",
        Accept: "application/vnd.github+json",
      },
    }
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

function buildEntry(repo) {
  const title = titleCase(repo.name);
  const description = repo.description
    ? repo.description.trim()
    : `A project on GitHub: ${repo.name}.`;
  const tags = [repo.language, ...(repo.topics || [])]
    .filter(Boolean)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .slice(0, 6);
  const liveUrl =
    repo.homepage && repo.homepage.trim()
      ? repo.homepage.trim()
      : repo.has_pages
      ? `https://${GITHUB_USER.toLowerCase()}.github.io/${repo.name}/`
      : undefined;

  return {
    id: `gh-${repo.name}`,
    title,
    description,
    tags: tags.length ? tags : ["GitHub"],
    liveUrl,
    repoUrl: repo.html_url,
  };
}

function toJsEntry(entry, { includeId = true, indent = "  " } = {}) {
  const lines = [];
  lines.push(`${indent}{`);
  if (includeId) lines.push(`${indent}  _id: ${JSON.stringify(entry.id)},`);
  lines.push(`${indent}  title: ${JSON.stringify(entry.title)},`);
  lines.push(`${indent}  description:`);
  lines.push(`${indent}    ${JSON.stringify(entry.description)},`);
  lines.push(`${indent}  tags: ${JSON.stringify(entry.tags)},`);
  if (entry.liveUrl) {
    lines.push(`${indent}  liveUrl: ${JSON.stringify(entry.liveUrl)},`);
  }
  lines.push(`${indent}  repoUrl: ${JSON.stringify(entry.repoUrl)},`);
  lines.push(`${indent}  featured: false,`);
  lines.push(`${indent}},`);
  return lines.join("\n");
}

function insertBeforeClosingBracket(source, entryText) {
  const idx = source.lastIndexOf("];");
  if (idx === -1) {
    throw new Error('Could not find a closing "];" to insert the new entry before.');
  }
  return source.slice(0, idx) + entryText + "\n" + source.slice(idx);
}

async function main() {
  const repos = await fetchRepos();
  const liveRepos = repos.filter(
    (r) => !r.fork && !r.archived && !r.disabled && r.name !== SELF_REPO
  );

  const projectsSrc = readFileSync(PROJECTS_JS, "utf8");
  const seedSrc = readFileSync(SEED_JS, "utf8");

  let newProjectsSrc = projectsSrc;
  let newSeedSrc = seedSrc;
  const added = [];

  for (const repo of liveRepos) {
    // Already represented (manually or from a previous sync run) if its
    // GitHub URL already appears anywhere in the file.
    if (projectsSrc.includes(repo.html_url)) continue;

    const entry = buildEntry(repo);
    newProjectsSrc = insertBeforeClosingBracket(
      newProjectsSrc,
      toJsEntry(entry, { includeId: true })
    );
    newSeedSrc = insertBeforeClosingBracket(
      newSeedSrc,
      toJsEntry(entry, { includeId: false })
    );
    added.push(repo.name);
  }

  if (added.length > 0) {
    writeFileSync(PROJECTS_JS, newProjectsSrc);
    writeFileSync(SEED_JS, newSeedSrc);
    console.log(`Added ${added.length} new project(s): ${added.join(", ")}`);
  } else {
    console.log("No new projects found — portfolio already up to date.");
  }

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `changed=${added.length > 0}\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
