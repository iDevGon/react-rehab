import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "crud-board",
  title: "CRUD Board",
  summary: "Create, select, edit, delete, and clear board cards.",
  targetFile: "src/missions/crud-board/Exercise.tsx",
  requirements: [
    "Add a new card from the title field",
    "Select a card for editing",
    "Save edits to the selected card",
    "Delete the selected card",
    "Clear selection without deleting"
  ],
  testCommand: "npm test -- src/missions/crud-board/Exercise.test.tsx",
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
};
