# Mission 02: Validated Modal Form

## Purpose

Practice modal state, controlled form fields, multi-field validation, keyboard
dismissal, and saving submitted data. This mission is intentionally more complex
than a required-field form: it asks you to coordinate text inputs, a select, a
date input, a checkbox, field-level errors, and duplicate detection.

## Target File

`apps/web/src/missions/validated-modal-form/Exercise.tsx`

## What To Build

Implement a contact invitation modal.

The starter has an `Add contact` button, a dialog surface, basic name and email
fields, and a saved contacts list. Expand that form into a complete invitation
flow with role, start date, invitation consent, validation, and saved contact
rendering.

## Required Fields

- `Name`
- `Email`
- `Role`
- `Start date`
- `Send invitation email`

`Role` must support these values:

- `Designer`
- `Engineer`
- `PM`

## Validation Rules

- Name is required after trimming whitespace.
- Trimmed name must be at least 2 characters.
- Email is required after trimming whitespace.
- Email must look like a valid email address.
- Email must be unique compared with already saved contacts.
- Role is required.
- Start date is required.
- Start date cannot be before today's date.
- `Send invitation email` must be checked before saving.
- Invalid submit must show field-level error messages.
- After an invalid submit, changing a field to a valid value clears that field's
  error while leaving unrelated field errors visible.

Use these exact English error messages so the tests and the UI agree:

- `Name is required`
- `Name must be at least 2 characters`
- `Email is required`
- `Enter a valid email address`
- `Email already exists`
- `Role is required`
- `Start date is required`
- `Start date cannot be in the past`
- `Invitation consent is required`

## Requirements

- Clicking `Add contact` opens the `New contact` dialog.
- Pressing `Escape` closes the dialog without saving.
- Clicking `Cancel` closes the dialog without saving.
- Invalid submit keeps the dialog open and shows field-level errors.
- Valid submit adds the contact to the saved contacts list.
- Saved contacts render the contact name, email, role, and start date.
- Valid submit closes the dialog.
- Valid submit clears the form for the next contact.
- Duplicate email validation uses the saved contacts list as its source of truth.

## Completion Criteria

- The mission-specific test command passes.
- The dialog has an accessible dialog role and name.
- Every form control has an accessible label.
- Field-level errors are visible after invalid submit.
- Editing one field can clear only that field's error.
- Valid contact data appears in the saved contacts list.
- Cancel and Escape do not add a contact.
- Duplicate emails are rejected after at least one contact has been saved.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the Validated Modal Form mission.
3. Click `Add contact`.
4. Press `Escape` and confirm the dialog closes.
5. Open it again and click `Save contact` with empty fields.
6. Confirm errors appear for name, email, role, start date, and invitation
   consent.
7. Enter a one-character name, invalid email, and yesterday's date.
8. Confirm the specific name length, email format, and past-date errors.
9. Fix only the name and confirm the name error clears while other errors
   remain.
10. Complete every field with a future or current start date, then save.
11. Confirm the contact appears with name, email, role, and start date.
12. Try saving another contact with the same email and confirm the duplicate
    email error appears.

## Test Command

```bash
pnpm --filter @react-rehab/web test src/missions/validated-modal-form/Exercise.test.tsx
```

## What The Tests Check

- The dialog opens from the trigger button.
- Escape closes the dialog.
- Empty submit shows all required-field errors.
- Invalid name, email, and past date show specific errors.
- Editing a field can clear that field's error without clearing unrelated
  errors.
- Valid submit renders name, email, role, and start date.
- Duplicate email submit is rejected and keeps the dialog open.

## Constraints

- Do not store validation messages as permanent saved data.
- Do not submit invalid contacts.
- Do not make the modal always visible to satisfy tests.
- Do not hard-code test-only branches.
- Keep validation derived from current form values and saved contacts.

## Agent Evaluation Criteria

An AI reviewer should check modal state, keyboard handling, controlled field
state, validation before mutation, duplicate detection, saved contact rendering,
accessibility labels, and whether the tests pass without hard-coded shortcuts.
