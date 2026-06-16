# Mission 03: Derived State

Common requirements: [common-requirements.md](./common-requirements.md)

## Purpose

Practice keeping source state minimal and deriving totals from current data.
This mission targets a common React mistake: duplicating values in state that
can be calculated from existing rows.

## Target File

`apps/web/src/missions/derived-state/Exercise.tsx`

## What To Build

Implement a small cart summary.

The starter renders cart rows with quantities, prices, selection checkboxes,
and quantity buttons. The displayed totals and selected count are incomplete.
Your job is to make those values reflect the current cart rows and selected
items.

## Requirements

- Derive total quantity from the current cart rows.
- Derive total price from the current cart rows.
- Track selected rows and derive selected count.
- Increase and decrease buttons update item quantities.
- Quantity changes update total quantity and total price.
- Quantity should not go below zero.

## Completion Criteria

- The mission-specific test command passes.
- Initial totals match the starter cart rows.
- Checking rows updates the selected count.
- Quantity buttons update row quantities and derived totals.
- The displayed totals are not maintained as independent stale state.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the Derived State mission.
3. Confirm the initial total quantity and price match the visible rows.
4. Select two rows and confirm selected count updates.
5. Increase one item quantity and decrease another.
6. Confirm totals update immediately.

## Test Command

```bash
pnpm --filter @react-rehab/web test src/missions/derived-state/Exercise.test.tsx
```

## What The Tests Check

- Initial total quantity and total price are derived correctly.
- Selected count changes when checkboxes are toggled.
- Totals update after quantity changes.

## Constraints

- Do not hard-code totals.
- Do not keep total quantity, total price, or selected count as independent
  source state.
- Store only the data needed to derive the displayed values.

## Agent Evaluation Criteria

An AI reviewer should check that the implementation stores minimal source
state, derives totals during render or memoized calculation, avoids stale
duplicated state, handles quantity interactions, and passes behavior tests.
