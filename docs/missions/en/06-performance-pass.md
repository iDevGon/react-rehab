# Mission 06: Performance Pass

## Purpose

Practice improving render performance without changing user-facing behavior.
This mission is about identifying expensive derived work and preventing it from
rerunning when unrelated UI state changes.

## Target File

`src/missions/performance-pass/Exercise.tsx`

## What To Build

Preserve project filtering behavior while reducing unnecessary expensive work.

The starter renders a filter input, a project list, a density toggle, and a
visible calculation count. Filtering works, but unrelated UI updates repeat the
expensive filtering calculation. Your job is to keep behavior the same while
stabilizing the expensive work.

## Requirements

- Filtering projects by text continues to work.
- Toggling unrelated UI density must not rerun the expensive filtering work.
- The visible `Calculation runs` value should stay stable for unrelated state
  changes.
- The calculation should rerun when the filter text changes.
- Optimizations should be justified by the measured behavior in the UI/tests.

## Completion Criteria

- The mission-specific test command passes.
- Filtering still updates the visible project list.
- Toggling density does not increment the calculation count.
- The optimization does not remove the visible calculation counter.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the Performance Pass mission.
3. Type `deck` in the filter input.
4. Confirm the visible list filters to matching projects.
5. Note the `Calculation runs` value.
6. Toggle density.
7. Confirm the calculation count did not change.

## Test Command

```bash
pnpm test -- src/missions/performance-pass/Exercise.test.tsx
```

## What The Tests Check

- Filtering changes the visible project list.
- An unrelated density toggle does not repeat expensive filtering.

## Constraints

- Do not remove the calculation counter to make the test pass.
- Do not break filtering behavior while optimizing.
- Do not memoize everything by default; target the expensive derived work.
- Keep the optimization understandable.

## Agent Evaluation Criteria

An AI reviewer should check that behavior is preserved, expensive work is tied
to the correct dependencies, the visible measurement supports the optimization,
and the solution does not add unnecessary abstraction.
