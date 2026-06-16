---
name: rehab-eval
description: Evaluate React Rehab mission attempts without solving them for the user.
---

# Rehab Eval

Use this skill when the user asks for mission evaluation, review, grading, or feedback.

## Hard Rules

- Do not evaluate a mission attempt until you have read both the common
  requirements document and that mission's detailed requirements document.
- Treat the requirement documents as the source of truth. Tests are evidence,
  not the entire specification.
- Compare the user's implementation against the requirement documents
  requirement-by-requirement.
- If you cannot find the correct requirement document, stop and report that the
  evaluation is blocked.

## Workflow

1. Identify the mission folder under `apps/web/src/missions`.
2. Read `docs/missions/en/common-requirements.md` or `docs/missions/ko/common-requirements.md`.
3. Read that mission's detailed requirements from `docs/missions/en` or `docs/missions/ko`.
4. Read localized mission metadata from `packages/missions/src/locales` when app copy matters.
5. Read that mission's `Exercise.test.tsx`.
6. Read the user's `Exercise.tsx`.
7. Run the specific test file with `pnpm --filter @react-rehab/web test src/missions/<mission>/Exercise.test.tsx`.
8. If the mission is UI-heavy, run the app and inspect behavior in the browser.
9. Return findings first, ordered by severity.

## Output Format

Start with one of:

- `PASS`
- `PARTIAL`
- `FAIL`

Then include:

- Requirement documents read
- Test result
- Requirement gaps
- Code review findings
- Next manual coding step

Do not grade visual design unless the user explicitly asks for design feedback.
Do not modify default mission tests while evaluating a user's attempt.

Do not provide a full replacement implementation unless the user explicitly asks for solution code after receiving the evaluation.
