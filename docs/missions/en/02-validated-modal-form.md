# Mission 02: Validated Modal Form

## Purpose

Practice modal state, controlled form fields, validation, keyboard dismissal,
and saving submitted data. This mission focuses on the everyday UI flow of
opening a dialog, entering data, validating it, and updating a list.

## Target File

`src/missions/validated-modal-form/Exercise.tsx`

## What To Build

Implement a contact creation modal.

The starter has an `Add contact` button, a dialog surface, name and email
fields, and a saved contacts list. Some pieces render, but the modal behavior,
validation, and submit flow are incomplete.

## Requirements

- Clicking `Add contact` opens the `New contact` dialog.
- Pressing `Escape` closes the dialog without saving.
- Clicking `Cancel` closes the dialog without saving.
- Clicking `Save contact` with empty fields shows field-level validation
  messages for name and email.
- Entering a valid name and email then saving adds the contact to the saved
  contacts list.
- A successful save closes the dialog.
- A successful save clears the form for the next contact.

## Completion Criteria

- The mission-specific test command passes.
- The dialog has an accessible dialog role and name.
- Required-field errors are visible after invalid submit.
- Valid contact data appears in the saved contacts list.
- Cancel and Escape do not add a contact.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the Validated Modal Form mission.
3. Click `Add contact`.
4. Press `Escape` and confirm the dialog closes.
5. Open it again and click `Save contact` with empty fields.
6. Confirm name and email errors are visible.
7. Enter a name and email, then save.
8. Confirm the contact appears and the dialog closes.

## Test Command

```bash
pnpm test -- src/missions/validated-modal-form/Exercise.test.tsx
```

## What The Tests Check

- The dialog opens from the trigger button.
- Escape closes the dialog.
- Empty submit shows required-field errors.
- Valid submit renders the saved contact and closes the dialog.

## Constraints

- Do not store validation messages as permanent saved data.
- Do not submit invalid contacts.
- Do not make the modal always visible to satisfy tests.
- Keep focus and keyboard behavior simple but intentional.

## Agent Evaluation Criteria

An AI reviewer should check modal state, keyboard handling, controlled field
state, validation before mutation, saved contact rendering, accessibility, and
whether the tests pass without hard-coded shortcuts.
