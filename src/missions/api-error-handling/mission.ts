import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "api-error-handling",
  title: "API Error Handling",
  summary: "Handle loading, success, failure, retry, and error clearing.",
  targetFile: "src/missions/api-error-handling/Exercise.tsx",
  requirements: [
    "Show loading while the mock request is pending",
    "Render profile data after success",
    "Render an error after failure",
    "Retry a failed request",
    "Clear stale errors before a new request starts"
  ],
  testCommand: "pnpm test -- src/missions/api-error-handling/Exercise.test.tsx",
  verification: [
    "Load profile enters a loading state",
    "Successful requests render the profile",
    "Failed requests render an accessible error",
    "Retry can recover and clears the old error"
  ],
  retrospective: [
    "Model async work as explicit loading, data, and error state",
    "Clear stale errors when starting new work",
    "Keep retry behavior on the same request path"
  ]
};
