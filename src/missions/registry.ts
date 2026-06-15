import { createElement } from "react";
import type { Mission } from "./types";

function PlaceholderExercise() {
  return createElement(
    "div",
    { className: "exercise-placeholder" },
    createElement("p", null, "Mission starter files will appear here after Task 4.")
  );
}

export const missions: Mission[] = [
  {
    id: "filterable-list",
    title: "Filterable List",
    summary: "Search, filter, and render an empty state.",
    targetFile: "src/missions/filterable-list/Exercise.tsx",
    requirements: [
      "Search items by name",
      "Filter by category",
      "Show an empty state"
    ],
    testCommand: "npm test -- src/missions/filterable-list/Exercise.test.tsx",
    verification: [
      "Search changes visible results",
      "Category filter narrows results",
      "No matches shows empty state"
    ],
    retrospective: [
      "Keep source data unchanged",
      "Derive visible items during render"
    ],
    Exercise: PlaceholderExercise
  }
];
