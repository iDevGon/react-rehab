# AGENTS.md

This repository is a React practice environment for rebuilding hands-on coding fluency.

The workspace is a pnpm monorepo:

- `apps/web` is the React app.
- `packages/missions` stores localized mission metadata.
- `docs/missions/en` and `docs/missions/ko` store detailed mission requirements.

## Core Rule

Do not solve mission implementation for the user unless they explicitly ask for solution code after evaluation.

## Expected Agent Role

- Review completed or attempted mission work.
- Run tests and report failures clearly.
- Compare implementation against mission requirements.
- Give targeted feedback without dumping full answer code.
- Ask the user to make the next code change themselves when possible.

## Project Commands

- `pnpm dev` starts the app.
- `pnpm test` runs all mission tests.
- `pnpm typecheck` checks TypeScript.
- `pnpm build` verifies production build.
