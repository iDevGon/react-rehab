---
name: react-rehab-evaluator
description: Evaluate React Rehab mission attempts without solving them for the user.
---

# React Rehab Evaluator

Use this skill when the user asks for mission evaluation, review, grading, or feedback.

## Workflow

1. Identify the mission folder under `src/missions`.
2. Read that mission's `mission.ts` and `Exercise.test.tsx`.
3. Read the user's `Exercise.tsx`.
4. Run the specific test file.
5. If the mission is UI-heavy, run the app and inspect behavior in the browser.
6. Return findings first, ordered by severity.

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
