# React Rehab

[한국어 README](./README.ko.md)

React Rehab is a local practice app for rebuilding hands-on React coding
fluency.

This project is for developers who have become comfortable delegating too much
implementation work to AI agents and want to practice writing React code by
hand again. The app gives you small, realistic React missions with requirements,
manual verification steps, and failing tests. Your job is to open the target
`Exercise.tsx` file and make the mission pass yourself.

AI agents are meant to be reviewers here, not replacement implementers. Use them
to evaluate your attempt after you have written code, not to generate the
solution first.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/iDevGon/react-rehab.git
cd react-rehab
```

Install dependencies with pnpm:

```bash
pnpm install
```

Run the local app:

```bash
pnpm dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

## Monorepo Structure

- `apps/web` contains the Vite React practice app.
- `packages/missions` contains the default English mission content and Korean
  translations used by the app.
- `docs/missions/en` contains detailed English mission requirements.
- `docs/missions/ko` contains detailed Korean mission requirements.
- `docs/missions/en/common-requirements.md` contains English rules shared by
  every mission, including the dependency policy.
- `docs/missions/ko/common-requirements.md` contains the Korean version.
- `.agents` contains the shared evaluator instructions for AI agents.

The app opens in English by default. Use the language switcher in the sidebar to
view the Korean version.

## Work A Mission

1. Open the app.
2. Pick a mission.
3. Read the requirements and verification checklist.
4. Edit the mission's `Exercise.tsx` by hand.
5. Run the mission test command shown in the app.
6. Verify the behavior in the browser.
7. Mark the mission reviewed to unlock the retrospective.

The full test suite intentionally fails at first because the mission starters
are incomplete. That is the point of the project. Run the mission-specific test
command shown in the app while you work.

Useful commands:

```bash
pnpm typecheck
pnpm build
pnpm test
```

## Agent Evaluation

AI agents should evaluate attempts, not solve missions by default. Shared
evaluator instructions live in `.agents/AGENTS.md`, and the reusable skill lives
in `.agents/skills/react-rehab-evaluator/SKILL.md`.
