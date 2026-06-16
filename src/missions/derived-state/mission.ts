import type { Mission } from "../types";

export const mission: Omit<Mission, "Exercise"> = {
  id: "derived-state",
  title: "Derived State",
  summary: "Calculate cart totals and selection from source rows.",
  targetFile: "src/missions/derived-state/Exercise.tsx",
  requirements: [
    "Derive total quantity from cart rows",
    "Derive total price from cart rows",
    "Track selected rows and derive selected count",
    "Update derived values when quantities change"
  ],
  testCommand: "pnpm test -- src/missions/derived-state/Exercise.test.tsx",
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
};
