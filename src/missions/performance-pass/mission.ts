import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "performance-pass",
  title: "Performance Pass",
  summary: "Preserve behavior while avoiding unnecessary expensive work.",
  targetFile: "src/missions/performance-pass/Exercise.tsx",
  requirements: [
    "Keep project filtering behavior correct",
    "Avoid repeating expensive filtering for unrelated state changes",
    "Expose calculation count so improvements can be verified"
  ],
  testCommand: "npm test -- src/missions/performance-pass/Exercise.test.tsx",
  verification: [
    "Filtering still changes the visible projects",
    "Toggling unrelated UI state does not rerun filtering",
    "The calculation count stays stable for unrelated updates"
  ],
  retrospective: [
    "Identify which state changes should affect expensive work",
    "Memoize only values that are costly or unstable",
    "Keep optimizations tied to measured behavior"
  ]
};
