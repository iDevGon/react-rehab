import { describe, expect, test } from "vitest";
import { formatMissionReport, type MissionReportFile } from "./missionReporter";

describe("formatMissionReport", () => {
  test("renders mission requirements with emoji statuses in a table", () => {
    const files: MissionReportFile[] = [
      {
        filepath:
          "/repo/apps/web/src/missions/filterable-list/Exercise.test.tsx",
        tests: [
          { name: "searches items by name", state: "pass" },
          { name: "shows an empty state when no items match", state: "fail" }
        ]
      },
      {
        filepath:
          "/repo/apps/web/src/missions/validated-modal-form/Exercise.test.tsx",
        tests: [{ name: "closes the modal with Escape", state: "skip" }]
      }
    ];

    expect(formatMissionReport(files)).toBe(
      [
        "",
        "Mission Test Results",
        "",
        "┌──────────────────────┬──────────────────────────────────────────┬─────────┐",
        "│ Mission              │ Requirement                              │ Result  │",
        "├──────────────────────┼──────────────────────────────────────────┼─────────┤",
        "│ Filterable List      │ searches items by name                   │ ✅ PASS │",
        "│ Filterable List      │ shows an empty state when no items match │ ❌ FAIL │",
        "│ Validated Modal Form │ closes the modal with Escape             │ ⏭️ SKIP │",
        "└──────────────────────┴──────────────────────────────────────────┴─────────┘",
        ""
      ].join("\n")
    );
  });
});
