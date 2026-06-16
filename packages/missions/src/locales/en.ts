import type { MissionLocaleBundle } from "../types";

export const en: MissionLocaleBundle = {
  app: {
    appEyebrow: "React Rehab",
    appTitle: "Mission Runner",
    appSummary:
      "Work through focused React missions, verify behavior, then reflect before moving on.",
    navLabel: "Missions",
    currentMission: "Current Mission",
    reviewed: "Reviewed",
    markReviewed: "Mark reviewed",
    progressReviewed: "reviewed",
    requirements: "Requirements",
    manualVerification: "Manual Verification",
    retrospective: "Retrospective",
    retrospectiveLocked:
      "Locked until you mark the mission reviewed after testing and browser verification.",
    testCommand: "Test Command",
    targetFile: "Target File",
    missionWorkspace: "Mission workspace",
    missionDetails: "Mission details",
    livePreview: "Live Preview",
    exerciseSurface: "Exercise Surface",
    languageLabel: "Language",
    english: "English",
    korean: "Korean",
    noMissions: "No missions configured."
  },
  missions: [
    {
      id: "filterable-list",
      title: "Filterable List",
      summary: "Search, filter, and render an empty state.",
      targetFile: "apps/web/src/missions/filterable-list/Exercise.tsx",
      requirements: [
        "Search items by name",
        "Filter by category",
        "Show an empty state when no results match"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/filterable-list/Exercise.test.tsx",
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
    },
    {
      id: "validated-modal-form",
      title: "Validated Modal Form",
      summary: "Open a modal, validate input, and save submitted data.",
      targetFile: "apps/web/src/missions/validated-modal-form/Exercise.tsx",
      requirements: [
        "Open the modal from the Add contact button",
        "Close the modal with Escape",
        "Show validation errors for missing required fields",
        "Render a successfully submitted contact"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/validated-modal-form/Exercise.test.tsx",
      verification: [
        "Add contact opens a dialog",
        "Escape closes the dialog without saving",
        "Empty submit shows field-level errors",
        "Valid submit adds the contact and closes the dialog"
      ],
      retrospective: [
        "Separate transient form state from saved contact data",
        "Validate before mutating the saved list",
        "Use keyboard dismissal as part of modal state management"
      ]
    },
    {
      id: "derived-state",
      title: "Derived State",
      summary: "Calculate cart totals and selection from source rows.",
      targetFile: "apps/web/src/missions/derived-state/Exercise.tsx",
      requirements: [
        "Derive total quantity from cart rows",
        "Derive total price from cart rows",
        "Track selected rows and derive selected count",
        "Update derived values when quantities change"
      ],
      testCommand: "pnpm --filter @react-rehab/web test src/missions/derived-state/Exercise.test.tsx",
      verification: [
        "Initial totals match the cart rows",
        "Checking rows updates selected count",
        "Quantity buttons update item quantities and totals"
      ],
      retrospective: [
        "Store the smallest useful source state",
        "Calculate totals from current rows during render",
        "Avoid duplicating values that can be derived"
      ]
    },
    {
      id: "api-error-handling",
      title: "API Error Handling",
      summary: "Handle loading, success, failure, retry, and error clearing.",
      targetFile: "apps/web/src/missions/api-error-handling/Exercise.tsx",
      requirements: [
        "Show loading while the mock request is pending",
        "Render profile data after success",
        "Render an error after failure",
        "Retry a failed request",
        "Clear stale errors before a new request starts"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/api-error-handling/Exercise.test.tsx",
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
    },
    {
      id: "crud-board",
      title: "CRUD Board",
      summary: "Create, select, edit, delete, and clear board cards.",
      targetFile: "apps/web/src/missions/crud-board/Exercise.tsx",
      requirements: [
        "Add a new card from the title field",
        "Select a card for editing",
        "Save edits to the selected card",
        "Delete the selected card",
        "Clear selection without deleting"
      ],
      testCommand: "pnpm --filter @react-rehab/web test src/missions/crud-board/Exercise.test.tsx",
      verification: [
        "Adding creates a visible card",
        "Selecting a card fills the editor",
        "Saving edits updates the selected card",
        "Deleting removes only the selected card",
        "Clearing selection leaves cards intact"
      ],
      retrospective: [
        "Keep the card list and selected id as the source state",
        "Use form state for drafts before committing changes",
        "Reset selection state after delete or clear actions"
      ]
    },
    {
      id: "performance-pass",
      title: "Performance Pass",
      summary: "Preserve behavior while avoiding unnecessary expensive work.",
      targetFile: "apps/web/src/missions/performance-pass/Exercise.tsx",
      requirements: [
        "Keep project filtering behavior correct",
        "Avoid repeating expensive filtering for unrelated state changes",
        "Expose calculation count so improvements can be verified"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/performance-pass/Exercise.test.tsx",
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
    }
  ]
};
