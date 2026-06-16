---
name: react-rehab-evaluator
description: Evaluate React Rehab mission attempts without solving them for the user.
---

# React Rehab Evaluator

Use this skill when the user asks for mission evaluation, review, grading, or feedback.

## Workflow

1. Identify the mission folder under `apps/web/src/missions`.
2. Read that mission's detailed requirements from `docs/missions/en` or `docs/missions/ko`.
3. Read localized mission metadata from `packages/missions/src/locales` when app copy matters.
4. Read that mission's `Exercise.test.tsx`.
5. Read the user's `Exercise.tsx`.
6. Run the specific test file with `pnpm --filter @react-rehab/web test src/missions/<mission>/Exercise.test.tsx`.
7. If the mission is UI-heavy, run the app and inspect behavior in the browser.
8. Return findings first, ordered by severity.

## Output Format

Start with one of:

- `PASS`
- `PARTIAL`
- `FAIL`

Then include:

- Test result
- Requirement gaps
- Code review findings
- Next manual coding step

Do not provide a full replacement implementation unless the user explicitly asks for solution code after receiving the evaluation.
