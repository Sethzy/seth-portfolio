export const DEFAULT_GITHUB_USERNAME =
  process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Sethzy";
export const DISPLAY_CONTRIBUTION_TOTAL = 1711;
export const SCREENSHOT_CONTRIBUTION_LEVELS = [
  "0000000",
  "0000000",
  "0001111",
  "0200110",
  "0211110",
  "0110111",
  "0111111",
  "0000010",
  "0110000",
  "0001111",
  "1211000",
  "0000010",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "1000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000121",
  "1310300",
  "0222131",
  "1131110",
  "2111111",
  "2121112",
  "1110111",
  "1000100",
  "0000110",
  "1111110",
  "1111101",
  "1213221",
  "1241331",
  "1110321",
  "0321201",
  "0413111",
  "2220124",
  "4401000",
  "0001000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "0001000",
  "0010000"
];

function toIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, amount) {
  const next = new Date(`${toIsoDate(date)}T00:00:00.000Z`);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

function makeEmptyDay(date) {
  return {
    date,
    count: 0,
    level: 0
  };
}

export function normalizeContributionResponse(payload) {
  const days = Array.isArray(payload?.contributions)
    ? payload.contributions.map((day) => ({
        date: day.date,
        count: Number(day.count) || 0,
        level: Math.max(0, Math.min(4, Number(day.level) || 0))
      }))
    : [];

  const explicitTotal =
    payload?.total?.lastYear ??
    payload?.total?.lastyear ??
    payload?.total?.last_year;
  const total =
    typeof explicitTotal === "number"
      ? explicitTotal
      : days.reduce((sum, day) => sum + day.count, 0);

  return { days, total };
}

export function buildContributionWeeks(days, endDate = new Date()) {
  const end = typeof endDate === "string" ? new Date(`${endDate}T00:00:00.000Z`) : endDate;
  const start = addDays(end, -365);
  const byDate = new Map(days.map((day) => [day.date, day]));

  return Array.from({ length: 53 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const date = toIsoDate(addDays(start, weekIndex * 7 + dayIndex));
      return byDate.get(date) || makeEmptyDay(date);
    })
  );
}

export function getContributionMeta(days, endDate = new Date(), totalOverride) {
  const end = typeof endDate === "string" ? new Date(`${endDate}T00:00:00.000Z`) : endDate;
  const start = addDays(end, -365);
  const total =
    typeof totalOverride === "number"
      ? totalOverride
      : days.reduce((sum, day) => sum + day.count, 0);

  return {
    total,
    label: `${DISPLAY_CONTRIBUTION_TOTAL.toLocaleString()} ${
      DISPLAY_CONTRIBUTION_TOTAL === 1 ? "Contribution" : "Contributions"
    } · ${start.getUTCFullYear()}-${end.getUTCFullYear().toString().slice(-2)}`,
    rangeLabel: `${start.getUTCFullYear()}-${end.getUTCFullYear().toString().slice(-2)}`,
    months: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"]
  };
}

export function buildScreenshotContributionWeeks(endDate = "2026-06-20") {
  const end = typeof endDate === "string" ? new Date(`${endDate}T00:00:00.000Z`) : endDate;
  const start = addDays(end, -(SCREENSHOT_CONTRIBUTION_LEVELS.length * 7 - 1));

  return SCREENSHOT_CONTRIBUTION_LEVELS.map((column, weekIndex) =>
    Array.from(column, (level, dayIndex) => {
      const numericLevel = Number(level);
      return {
        date: toIsoDate(addDays(start, weekIndex * 7 + dayIndex)),
        count: numericLevel === 0 ? 0 : numericLevel,
        level: numericLevel
      };
    })
  );
}

export async function getGitHubContributionCalendar() {
  const username = DEFAULT_GITHUB_USERNAME;
  const endDate = "2026-06-20";
  const weeks = buildScreenshotContributionWeeks(endDate);
  const days = weeks.flat();

  return {
    username,
    weeks,
    meta: getContributionMeta(days, endDate, DISPLAY_CONTRIBUTION_TOTAL)
  };
}
