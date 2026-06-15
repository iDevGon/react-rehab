# React Rehab Design

## Goal

Build a React practice app for recovering hands-on coding fluency after relying heavily on AI agents. The app should train the user to implement real React features directly, with AI agents limited to review and evaluation after the user writes code.

## Assumptions

- This is a new project in an empty workspace.
- The app will be built with Vite, React, TypeScript, Vitest, and React Testing Library.
- The first version should include six missions.
- The user should not receive mid-task hints or full answer code from the app or AI agents.
- Completion requires both automated tests and manual browser verification.

## Product Shape

The product is a mission runner named React Rehab.

The app has a two-pane structure:

- Left pane: mission list and progress.
- Right pane: selected mission details, requirements, test expectations, target file path, live preview, and retrospective.

Each mission starts in strict mode. The user sees requirements and test expectations, edits the mission's `Exercise.tsx` by hand, runs tests, and verifies the behavior in the browser. The retrospective section stays locked until the user marks the mission complete.

## Mission Curriculum

The first version includes six missions:

1. Filterable List
   - Search input
   - Category filter
   - Empty state
   - List rendering from structured data

2. Validated Modal Form
   - Modal open and close
   - Escape key handling
   - Basic focus behavior
   - Controlled form fields
   - Validation and submit/reset flow

3. Derived State
   - Source state kept minimal
   - Totals and selected states computed from source data
   - Avoiding duplicated state

4. Mock API Error Handling
   - Mock async request
   - Loading, success, error, and retry states
   - Clear error UI

5. CRUD Board
   - Create, update, and delete items
   - Item selection
   - Local state flow similar to a small work tool

6. Performance Pass
   - Identify unnecessary rendering or slow derived work
   - Improve with state placement, `memo`, or `useMemo` where justified
   - Explain why the optimization helps

## Project Structure

```text
src/
  App.tsx
  missions/
    filterable-list/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
    validated-modal-form/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
    derived-state/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
    api-error-handling/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
    crud-board/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
    performance-pass/
      Exercise.tsx
      Exercise.test.tsx
      mission.ts
```

Each `mission.ts` exports metadata:

- title
- summary
- requirements
- test command or test notes
- browser verification checklist
- retrospective content

Each `Exercise.tsx` starts incomplete. It should contain enough scaffolding to make the task clear, but not enough implementation to remove the coding exercise.

## Verification

Each mission is complete only when all of these are true:

1. The user implemented the mission by editing the target files directly.
2. The mission test passes.
3. The browser preview behaves according to the manual verification checklist.
4. The user marks the mission reviewed, unlocking the retrospective.

Automated tests should focus on behavior, not implementation details. Manual verification covers user-facing interactions that are awkward or brittle to test exhaustively.

## AI Agent Evaluation

AI agents should act as reviewers and evaluators, not implementers.

The project will include agent instructions and an evaluation skill:

```text
AGENTS.md
.agents/
  AGENTS.md
  skills/
    react-rehab-evaluator/
      SKILL.md
.claude -> .agents
.codex/
  CLAUDE.md -> ../.agents/AGENTS.md
```

`AGENTS.md` at the project root contains common project instructions.

`.agents/AGENTS.md` is the source of truth for AI evaluation behavior. It instructs agents to:

- avoid writing the user's solution code unless explicitly asked after evaluation
- review code after the user attempts a mission
- evaluate test results, requirement coverage, accessibility, state design, error handling, and performance
- provide feedback without dumping full answer code
- prefer questions, observations, and targeted review comments over direct implementation

`.agents/skills/react-rehab-evaluator/SKILL.md` defines the evaluation workflow:

1. Identify the mission being evaluated.
2. Read the mission requirements and tests.
3. Run the relevant tests if available.
4. Review the user's implementation.
5. Check browser behavior when useful.
6. Return a concise evaluation with pass/fail status, issues, and next steps.

`.claude` points to `.agents` so Claude-style agents share the same source instructions.

`.codex/CLAUDE.md` points to `.agents/AGENTS.md` because this environment expects the file name `CLAUDE.md` under `.codex`.

## Non-Goals

- No AI tutor chat in the app.
- No mid-task hint ladder.
- No full solution reveal in the app.
- No large curriculum system in the first version.
- No backend service.
- No user accounts or persistence beyond local app state.

## Success Criteria

- The app presents six clear missions.
- Each mission has requirements, tests, a live preview, and a locked retrospective.
- The user can practice implementation without AI-generated answer code.
- AI agents can evaluate completed work through documented project instructions and a reusable skill.
- The implementation remains small enough for one person to understand and maintain.
