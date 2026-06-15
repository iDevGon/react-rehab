import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "filterable-list",
  title: "Filterable List",
  summary: "Search, filter, and render an empty state.",
  targetFile: "src/missions/filterable-list/Exercise.tsx",
  requirements: [
    "Search items by name",
    "Filter by category",
    "Show an empty state when no results match"
  ],
  testCommand: "npm test -- src/missions/filterable-list/Exercise.test.tsx",
  verification: [
    "Typing in search narrows the visible results",
    "Choosing a category narrows the visible results",
    "No matches shows a clear empty state"
  ],
  retrospective: [
    "Keep the source data unchanged while filtering",
    "Derive visible items from search text and category",
    "Make the empty state depend on the derived result list"
  ]
};
