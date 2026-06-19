import type { File, Task, Test } from "@vitest/runner";
import type { Reporter } from "vitest/reporters";

export type MissionReportState = "pass" | "fail" | "skip";

export interface MissionReportTest {
  name: string;
  state: MissionReportState;
}

export interface MissionReportFile {
  filepath: string;
  tests: MissionReportTest[];
}

const statusLabels: Record<MissionReportState, string> = {
  pass: "✅ PASS",
  fail: "❌ FAIL",
  skip: "⏭️ SKIP"
};

export function formatMissionReport(files: MissionReportFile[]): string {
  const rows = files.flatMap((file) =>
    file.tests.map((test) => ({
      cells: [
        formatMissionName(file.filepath),
        normalizeCell(test.name),
        statusLabels[test.state]
      ]
    }))
  );

  if (rows.length === 0) {
    return "";
  }

  const headers = ["Mission", "Requirement", "Result"];
  const widths = headers.map((header, index) =>
    Math.max(
      displayWidth(header),
      ...rows.map((row) => displayWidth(row.cells[index]))
    )
  );

  return [
    "",
    "Mission Test Results",
    "",
    makeRule("┌", "┬", "┐", widths),
    makeRow(headers, widths),
    makeRule("├", "┼", "┤", widths),
    ...rows.map((row) => makeRow(row.cells, widths)),
    makeRule("└", "┴", "┘", widths),
    ""
  ].join("\n");
}

export default class MissionReporter implements Reporter {
  onFinished(files: File[]): void {
    const output = formatMissionReport(
      files
        .filter((file) => file.filepath.includes("/src/missions/"))
        .map((file) => ({
          filepath: file.filepath,
          tests: collectTests(file)
        }))
        .filter((file) => file.tests.length > 0)
    );

    if (output) {
      console.log(output);
    }
  }
}

function collectTests(task: Task): MissionReportTest[] {
  if (task.type === "test") {
    return [
      {
        name: task.name,
        state: getState(task)
      }
    ];
  }

  return task.tasks.flatMap(collectTests);
}

function getState(test: Test): MissionReportState {
  if (test.mode === "skip" || test.mode === "todo") {
    return "skip";
  }

  if (test.result?.state === "pass") {
    return "pass";
  }

  if (test.result?.state === "fail") {
    return "fail";
  }

  return "skip";
}

function formatMissionName(filepath: string): string {
  const match = filepath.match(
    /\/src\/missions\/([^/]+)\/Exercise\.test\.tsx$/
  );
  const slug = match?.[1] ?? filepath.replace(/^.*\/([^/]+)$/, "$1");

  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function makeRule(
  left: string,
  middle: string,
  right: string,
  widths: number[]
) {
  return `${left}${widths.map((width) => "─".repeat(width + 2)).join(middle)}${right}`;
}

function makeRow(cells: string[], widths: number[]) {
  return `│ ${cells.map((cell, index) => padCell(cell, widths[index])).join(" │ ")} │`;
}

function padCell(value: string, width: number) {
  return `${value}${" ".repeat(width - displayWidth(value))}`;
}

function displayWidth(value: string) {
  let width = 0;

  for (const char of value) {
    if (char === "\uFE0F") {
      continue;
    }

    width += isWideChar(char) ? 2 : 1;
  }

  return width;
}

function isWideChar(char: string) {
  return /[\u1100-\u115F\u2329\u232A\u23E9-\u23F3\u23F8-\u23FA\u2600-\u27BF\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE6F\uFF00-\uFF60\uFFE0-\uFFE6]/.test(
    char
  );
}

function normalizeCell(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
