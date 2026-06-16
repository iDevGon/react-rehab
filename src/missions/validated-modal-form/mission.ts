import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "validated-modal-form",
  title: "Validated Modal Form",
  summary: "Open a modal, validate input, and save submitted data.",
  targetFile: "src/missions/validated-modal-form/Exercise.tsx",
  requirements: [
    "Open the modal from the Add contact button",
    "Close the modal with Escape",
    "Show validation errors for missing required fields",
    "Render a successfully submitted contact"
  ],
  testCommand: "pnpm test -- src/missions/validated-modal-form/Exercise.test.tsx",
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
};
