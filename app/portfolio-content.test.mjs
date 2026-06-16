import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const dataSource = readFileSync(new URL("./data.ts", import.meta.url), "utf8");

function exportedBlock(name) {
  const exportMatch = dataSource.match(
    new RegExp(`export const ${name}(?::[^=]+)? = \\[`)
  );
  const start = exportMatch?.index ?? -1;
  assert.notEqual(start, -1, `${name} export should exist`);

  const nextExport = dataSource.indexOf("\nexport const ", start + 1);
  return dataSource.slice(start, nextExport === -1 ? undefined : nextExport);
}

test("featured projects show the four sourced portfolio proof points", () => {
  const projectsBlock = exportedBlock("projects");
  const titles = Array.from(
    projectsBlock.matchAll(/title:\s+"([^"]+)"/g),
    ([, title]) => title
  );

  assert.deepEqual(titles, [
    "Sunder Document Processing",
    "NeoBot AI CRM",
    "Agentic GTM Systems",
    "Company Second Brain"
  ]);
});

test("first project cards include public GitHub links", () => {
  const projectsBlock = exportedBlock("projects");

  assert.match(
    projectsBlock,
    /href:\s+"https:\/\/github\.com\/Sethzy\/sunder-document-processing"/
  );
  assert.match(
    projectsBlock,
    /href:\s+"https:\/\/github\.com\/Sethzy\/neobot-ai-crm"/
  );
});

test("project cards render action links and a technologies heading", () => {
  const pageSource = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");

  assert.match(pageSource, /project\.links\.map/);
  assert.match(pageSource, /Technologies Used:/);
});

test("tech stack reflects the actual agentic GTM/product stack", () => {
  const techBlock = exportedBlock("techStack");

  for (const technology of [
    "TypeScript",
    "React",
    "Next.js",
    "TanStack",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Clay",
    "Codex",
    "Claude",
    "Cursor",
    "ElevenLabs",
    "GitHub",
    "Langfuse",
    "OpenClaw",
    "Vercel"
  ]) {
    assert.match(techBlock, new RegExp(`name: "${technology}"`));
  }
});
