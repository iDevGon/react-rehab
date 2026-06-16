# Common Mission Requirements

These rules apply to every React Rehab mission.

## Core Intent

React Rehab is for rebuilding hands-on React coding fluency. Passing tests is
not the only goal. The implementation should show that you practiced the target
React skill directly.

## Library Policy

You may install libraries when they help you work realistically.

Use pnpm from the repository root:

```bash
pnpm --filter @react-rehab/web add <package-name>
pnpm --filter @react-rehab/web add -D <package-name>
```

Libraries are allowed, but they must not erase the mission's core practice.

- UI helper libraries are acceptable when the mission is not about building that
  primitive by hand.
- Utility libraries are acceptable when they keep the code clear.
- Do not use a library to bypass the exact skill the mission is designed to
  exercise.
- Do not install a library that implements most of the mission requirements for
  you.
- If you install a library, be able to explain why it belongs in this solution.
- Keep dependencies local to `@react-rehab/web` unless the package is truly
  shared across the monorepo.

Examples:

- In a performance mission, a small measurement helper can be reasonable, but
  hiding all rendering behavior inside an opaque table framework misses the
  point.
- In a form validation mission, a schema library can be used only if you still
  wire controlled state, field-level errors, submit behavior, and accessibility
  yourself.
- In a modal mission, a dialog primitive can be used only if you still understand
  and verify open/close state, keyboard behavior, and accessible labeling.

## Implementation Rules

- Edit the target `Exercise.tsx` yourself.
- Keep changes focused on the active mission unless the requirements say
  otherwise.
- Do not hard-code test-only branches.
- Do not make hidden UI permanently visible just to satisfy tests.
- Do not modify the default evaluation tests that already exist in the mission.
- Preserve accessible labels, roles, keyboard behavior, and readable error
  messages.
- Prefer small, explicit state over speculative abstractions.
- Run the mission-specific test command shown in the app while working.

## Formatting And Linting

The repository provides Biome as a quality helper for formatting, linting, and
import organization.

Useful commands:

```bash
pnpm lint
pnpm format
pnpm check
pnpm check:write
```

You may use these commands while working, but automatic fixes do not replace the
mission requirements. If you run a write command such as `pnpm format:write` or
`pnpm check:write`, confirm that default mission test files were not changed.

## Design Policy

Mission evaluation does not grade visual design by default. A solution can pass
with plain styling if it satisfies the behavioral requirements.

You may change the design when you want to practice UI work or make the exercise
more usable. Design changes should not hide required information, remove
accessible labels, break keyboard behavior, or make tests pass by changing the
test surface instead of implementing the behavior.

## Test Policy

The default mission test files are evaluation fixtures. Do not edit them while
solving a mission. If a test fails, change the implementation in `Exercise.tsx`
unless the repository maintainer explicitly asks you to update the mission
itself.

## Agent Evaluation

AI agents should evaluate the attempt against the mission requirements, tests,
and this common requirements document. They should not provide full replacement
solution code unless the user explicitly asks for it after receiving feedback.
They should not grade visual design unless the user explicitly asks for design
feedback.
