# Mission 01: Filterable List

## Purpose

Practice controlled inputs, derived lists, conditional rendering, and empty
states. The goal is to make the visible inventory list depend on the current
search text and category filter without mutating the original item data.

## Target File

`apps/web/src/missions/filterable-list/Exercise.tsx`

## What To Build

Implement search and category filtering for the trip inventory list.

The starter renders three inventory items, a search input, and a category
select. At first, the controls do not affect the rendered list. Your job is to
store the current control values, derive the visible items from those values,
and render an empty state when nothing matches.

## Requirements

- Typing into `Search items` filters items by item name.
- Search should be case-insensitive.
- Choosing a category filters items by category.
- The `All categories` option shows every category.
- Search and category filters should work together.
- When no items match, show a clear empty state containing `No items match`.
- Do not mutate the original inventory array.

## Completion Criteria

- The mission-specific test command passes.
- Search hides non-matching items.
- Category selection hides items from other categories.
- Combining search and category still produces the correct result.
- The empty state appears only when the derived result list is empty.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the Filterable List mission.
3. Type `mug` in the search field.
4. Confirm only `Trail Mug` remains visible.
5. Clear search and choose `Clothing`.
6. Confirm only `Atlas Jacket` remains visible.
7. Type a string that matches nothing.
8. Confirm the empty state appears.

## Test Command

```bash
pnpm --filter @react-rehab/web test src/missions/filterable-list/Exercise.test.tsx
```

## What The Tests Check

- Search narrows the visible results by name.
- Category selection narrows the visible results by category.
- A no-match search renders the empty state.

## Constraints

- Do not replace the static data with hard-coded filtered outputs.
- Do not hide items with CSS while leaving them in the result list.
- Keep the solution small; this mission does not need a custom hook.

## Agent Evaluation Criteria

An AI reviewer should check that the implementation uses controlled inputs,
derives visible items from state, keeps source data unchanged, passes the
behavior tests, and renders a meaningful empty state.
