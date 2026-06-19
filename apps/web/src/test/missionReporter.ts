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
    file.tests.map((test) => [
      formatMissionName(file.filepath),
      escapeCell(test.name),
      statusLabels[test.state]
    ])
  );

  if (rows.length === 0) {
    return "";
  }

  return [
    "",
    "Mission Test Results",
    "",
    "| Mission | Requirement | Result |",
    "| --- | --- | --- |",
    ...rows.map((row) => `| ${row.join(" | ")} |`),
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

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|");
}
