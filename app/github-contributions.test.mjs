import assert from "node:assert/strict";
import test from "node:test";

import {
  buildScreenshotContributionWeeks,
  buildContributionWeeks,
  getContributionMeta,
  normalizeContributionResponse,
  SCREENSHOT_CONTRIBUTION_LEVELS
} from "./github-contributions.js";

test("normalizes public API response into contribution days and total", () => {
  const normalized = normalizeContributionResponse({
    total: { lastYear: 3 },
    contributions: [
      { date: "2026-06-14", count: 0, level: 0 },
      { date: "2026-06-15", count: 3, level: 2 }
    ]
  });

  assert.equal(normalized.total, 3);
  assert.deepEqual(normalized.days, [
    { date: "2026-06-14", count: 0, level: 0 },
    { date: "2026-06-15", count: 3, level: 2 }
  ]);
});

test("uses Seth's profile as the default GitHub source", async () => {
  const module = await import("./github-contributions.js");

  assert.equal(module.DEFAULT_GITHUB_USERNAME, "Sethzy");
});

test("builds exactly 53 calendar weeks from a last-year contribution range", () => {
  const days = [
    { date: "2025-06-15", count: 1, level: 1 },
    { date: "2026-06-15", count: 4, level: 4 }
  ];

  const weeks = buildContributionWeeks(days, "2026-06-15");

  assert.equal(weeks.length, 53);
  assert.equal(weeks.flat().length, 371);
  assert.equal(weeks[0][0].date, "2025-06-15");
  assert.equal(weeks[52][1].date, "2026-06-15");
  assert.equal(weeks[0][0].count, 1);
  assert.equal(weeks[52][1].level, 4);
});

test("formats the contribution caption like the target profile", () => {
  const meta = getContributionMeta([], "2026-06-15", 0);

  assert.equal(meta.label, "1,711 Contributions · 2025-26");
  assert.equal(meta.rangeLabel, "2025-26");
});

test("uses the screenshot fixture for the visible contribution squares", () => {
  const weeks = buildScreenshotContributionWeeks();
  const levels = weeks.map((week) => week.map((day) => day.level).join(""));

  assert.deepEqual(levels, SCREENSHOT_CONTRIBUTION_LEVELS);
  assert.equal(weeks.length, 53);
  assert.equal(weeks.flat().filter((day) => day.level > 0).length, 134);
});
