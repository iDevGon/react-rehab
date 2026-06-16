# Mission 05: CRUD Board

## Purpose

Practice local CRUD state: creating, selecting, editing, deleting, and clearing
selection. This mission resembles a small internal tool or task board.

## Target File

`src/missions/crud-board/Exercise.tsx`

## What To Build

Implement a small editable board.

The starter renders an input for a new card title, a board list, and a selected
card editor. The visible UI exists, but actions do not correctly update state.
Your job is to wire the list, selected card id, and draft editing state.

## Requirements

- Add a new card from the `Card title` field.
- Clear the new-card field after adding.
- Select a card by clicking its button.
- Selecting a card fills the editor with that card title.
- Editing and saving updates only the selected card.
- Deleting removes only the selected card.
- Clearing selection leaves all cards intact and resets the editor.

## Completion Criteria

- The mission-specific test command passes.
- Adding creates a visible card.
- Selecting a card fills the edit field.
- Saving updates the selected card in the board list.
- Deleting removes the selected card and clears selection.
- Clearing selection does not delete any cards.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the CRUD Board mission.
3. Add a card named `Ship starter`.
4. Select an existing card and confirm the editor fills.
5. Rename the selected card and save.
6. Delete a selected card and confirm only that card disappears.
7. Select another card, clear selection, and confirm the card remains.

## Test Command

```bash
pnpm test -- src/missions/crud-board/Exercise.test.tsx
```

## What The Tests Check

- Add creates a new selectable card.
- Select loads the selected card title into the editor.
- Save updates the selected card.
- Delete removes the selected card.
- Clear selection preserves cards and resets the selected state.

## Constraints

- Do not use array indexes as stable card identity.
- Do not edit every card when saving one selected card.
- Do not delete a card when the user only clears selection.
- Keep draft input state separate from committed card list state.

## Agent Evaluation Criteria

An AI reviewer should check identity handling, source state shape, selected card
behavior, draft state reset, CRUD interactions, accessibility of controls, and
behavior test results.
