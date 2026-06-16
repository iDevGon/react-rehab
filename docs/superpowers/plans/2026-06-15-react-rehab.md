# React Rehab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite + React + TypeScript mission runner that helps the user practice coding React features by hand, while AI agents act only as reviewers/evaluators.

**Architecture:** The app is a local-only React app with a mission shell and six independent mission folders. Each mission owns its starter component, metadata, and tests. Agent evaluation instructions live under `.agents`, with `.claude` and `.codex/CLAUDE.md` linked back to the shared source instructions.

**Tech Stack:** Vite, React, TypeScript, Vitest, React Testing Library, jsdom, CSS modules or plain CSS, git symlinks.

---

## File Structure

Create or modify these files:

- Create: `package.json` - scripts and dependencies.
- Create: `index.html` - Vite entry HTML.
- Create: `tsconfig.json` - TypeScript app config.
- Create: `tsconfig.node.json` - Vite config TypeScript support.
- Create: `vite.config.ts` - Vite and Vitest config.
- Create: `.gitignore` - exclude dependencies, build output, and `.superpowers`.
- Create: `src/main.tsx` - React root.
- Create: `src/App.tsx` - mission runner shell.
- Create: `src/App.css` - app layout styles.
- Create: `src/missions/types.ts` - shared mission metadata types.
- Create: `src/missions/registry.ts` - six mission registrations.
- Create: `src/test/setup.ts` - test setup.
- Create: `src/missions/<mission>/mission.ts` - metadata per mission.
- Create: `src/missions/<mission>/Exercise.tsx` - intentionally incomplete starter code per mission.
- Create: `src/missions/<mission>/Exercise.test.tsx` - failing tests per mission.
- Create: `.agents/AGENTS.md` - shared AI evaluator instructions.
- Create: `.agents/skills/rehab-eval/SKILL.md` - reusable evaluation skill.
- Create symlink: `.claude -> .agents`.
- Create directory: `.codex`.
- Create symlink: `.codex/CLAUDE.md -> ../.agents/AGENTS.md`.
- Modify: `AGENTS.md` - root project guidance for this repo.

## Task 1: Scaffold The React Project

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `.gitignore`
- Create: `src/main.tsx`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Create project config files**

Create `package.json`:

```json
{
  "name": "react-rehab",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc -b"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "vite": "^7.0.0",
    "typescript": "^5.8.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.6.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "jsdom": "^26.0.0",
    "vitest": "^3.0.0"
  }
}
```

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Rehab</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `tsconfig.json`:

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

Create `vite.config.ts`:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts"
  }
});
```

Create `.gitignore`:

```gitignore
node_modules/
dist/
coverage/
.DS_Store
.superpowers/
```

Create `src/main.tsx`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
pnpm install
```

Expected: `pnpm-lock.yaml` is created and dependencies install successfully.

- [ ] **Step 3: Verify scaffold**

Run:

```bash
pnpm typecheck
pnpm test
```

Expected: typecheck passes. Test command may report no tests yet; after Task 4 it must run real tests.

- [ ] **Step 4: Commit scaffold**

```bash
git add .gitignore index.html package.json pnpm-lock.yaml tsconfig.json tsconfig.node.json vite.config.ts src/main.tsx src/test/setup.ts
git commit -m "chore: scaffold react rehab app"
```

## Task 2: Add Agent Evaluation Instructions

**Files:**
- Modify: `AGENTS.md`
- Create: `.agents/AGENTS.md`
- Create: `.agents/skills/rehab-eval/SKILL.md`
- Create symlink: `.claude -> .agents`
- Create directory: `.codex`
- Create symlink: `.codex/CLAUDE.md -> ../.agents/AGENTS.md`

- [ ] **Step 1: Create root `AGENTS.md`**

```md
# AGENTS.md

This repository is a React practice environment for rebuilding hands-on coding fluency.

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
```

- [ ] **Step 2: Create `.agents/AGENTS.md`**

```md
# React Rehab Agent Instructions

You are evaluating a user's React practice work. The purpose of this repository is rehabilitation through direct hands-on coding.

## Do

- Act as a reviewer, evaluator, and coach.
- Read the mission requirements before judging code.
- Run the relevant tests when available.
- Check browser behavior when UI behavior is in question.
- Report whether the work passes, partially passes, or fails.
- Explain the smallest next action the user should take.

## Do Not

- Do not implement the mission for the user by default.
- Do not paste full solution files during evaluation.
- Do not add hint ladders.
- Do not refactor unrelated code.
- Do not optimize unless the mission asks for performance work.

## Evaluation Checklist

- Requirements coverage
- Test result
- Browser behavior
- State design
- Accessibility basics
- Error handling where relevant
- Performance reasoning where relevant
```

- [ ] **Step 3: Create evaluator skill**

```md
---
name: rehab-eval
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
```

- [ ] **Step 4: Create symlinks**

Run:

```bash
mkdir -p .agents/skills/rehab-eval .codex
ln -s .agents .claude
ln -s ../.agents/AGENTS.md .codex/CLAUDE.md
```

Expected:

```bash
test -L .claude
test -L .codex/CLAUDE.md
```

- [ ] **Step 5: Commit agent instructions**

```bash
git add AGENTS.md .agents/AGENTS.md .agents/skills/rehab-eval/SKILL.md .claude .codex/CLAUDE.md
git commit -m "docs: add ai evaluation instructions"
```

## Task 3: Build Mission Runner Shell

**Files:**
- Create: `src/missions/types.ts`
- Create: `src/missions/registry.ts`
- Create: `src/App.tsx`
- Create: `src/App.css`

- [ ] **Step 1: Create shared mission type**

Create `src/missions/types.ts`:

```ts
import type { ComponentType } from "react";

export type Mission = {
  id: string;
  title: string;
  summary: string;
  targetFile: string;
  requirements: string[];
  testCommand: string;
  verification: string[];
  retrospective: string[];
  Exercise: ComponentType;
};
```

- [ ] **Step 2: Create shell with placeholder registry**

Create `src/missions/registry.ts`:

```ts
import type { Mission } from "./types";

function PlaceholderExercise() {
  return (
    <div className="exercise-placeholder">
      <p>Select a mission after the mission folders are added.</p>
    </div>
  );
}

export const missions: Mission[] = [
  {
    id: "filterable-list",
    title: "Filterable List",
    summary: "Search, filter, and render an empty state.",
    targetFile: "src/missions/filterable-list/Exercise.tsx",
    requirements: ["Search items by name", "Filter by category", "Show an empty state"],
    testCommand: "pnpm test -- src/missions/filterable-list/Exercise.test.tsx",
    verification: ["Search changes visible results", "Category filter narrows results", "No matches shows empty state"],
    retrospective: ["Keep source data unchanged", "Derive visible items during render"],
    Exercise: PlaceholderExercise
  }
];
```

Create `src/App.tsx`:

```tsx
import { useMemo, useState } from "react";
import { missions } from "./missions/registry";

export default function App() {
  const [selectedId, setSelectedId] = useState(missions[0]?.id ?? "");
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);

  const selectedMission = useMemo(
    () => missions.find((mission) => mission.id === selectedId) ?? missions[0],
    [selectedId]
  );

  if (!selectedMission) {
    return <main className="empty-app">No missions configured.</main>;
  }

  const Exercise = selectedMission.Exercise;
  const reviewed = reviewedIds.includes(selectedMission.id);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">React Rehab</p>
          <h1>Mission Runner</h1>
          <p className="sidebar-copy">Practice React by implementing each mission by hand.</p>
        </div>

        <nav className="mission-list" aria-label="Missions">
          {missions.map((mission, index) => (
            <button
              className={mission.id === selectedMission.id ? "mission-button active" : "mission-button"}
              key={mission.id}
              onClick={() => setSelectedId(mission.id)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {mission.title}
            </button>
          ))}
        </nav>

        <p className="progress">{reviewedIds.length} / {missions.length} reviewed</p>
      </aside>

      <main className="mission-panel">
        <section className="mission-header">
          <div>
            <p className="eyebrow">Current Mission</p>
            <h2>{selectedMission.title}</h2>
            <p>{selectedMission.summary}</p>
          </div>
          <button
            className="review-button"
            onClick={() => setReviewedIds((ids) => ids.includes(selectedMission.id) ? ids : [...ids, selectedMission.id])}
            type="button"
          >
            Mark reviewed
          </button>
        </section>

        <section className="info-grid">
          <InfoCard title="Requirements" items={selectedMission.requirements} />
          <InfoCard title="Manual Verification" items={selectedMission.verification} />
          <div className="info-card">
            <h3>Test Command</h3>
            <code>{selectedMission.testCommand}</code>
          </div>
        </section>

        <section className="workspace-grid">
          <div className="info-card">
            <h3>Target File</h3>
            <code>{selectedMission.targetFile}</code>
          </div>
          <div className="preview-card">
            <h3>Live Preview</h3>
            <Exercise />
          </div>
        </section>

        <section className={reviewed ? "retrospective unlocked" : "retrospective"}>
          <h3>Retrospective</h3>
          {reviewed ? (
            <ul>
              {selectedMission.retrospective.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : (
            <p>Locked until you mark the mission reviewed after testing and browser verification.</p>
          )}
        </section>
      </main>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: Add shell styles**

Create `src/App.css` with responsive two-pane layout, 8px radius cards, readable typography, and no decorative gradients.

- [ ] **Step 4: Verify shell**

Run:

```bash
pnpm typecheck
pnpm build
```

Expected: both commands pass.

- [ ] **Step 5: Commit shell**

```bash
git add src/App.tsx src/App.css src/missions/types.ts src/missions/registry.ts
git commit -m "feat: add mission runner shell"
```

## Task 4: Add Six Mission Starters And Tests

**Files:**
- Create mission folders under `src/missions/`.
- Modify: `src/missions/registry.ts`

- [ ] **Step 1: Add Filterable List mission**

Create a starter component with static data and missing search/filter behavior. Create tests that assert search, category filter, and empty state. Register it in `registry.ts`.

Run:

```bash
pnpm test -- src/missions/filterable-list/Exercise.test.tsx
```

Expected before solving: test fails because filtering is incomplete.

- [ ] **Step 2: Add Validated Modal Form mission**

Create a starter component with an "Add contact" button and incomplete modal/form logic. Tests assert opening, closing with Escape, validation errors, and successful submit rendering.

Run:

```bash
pnpm test -- src/missions/validated-modal-form/Exercise.test.tsx
```

Expected before solving: test fails because modal and validation behavior are incomplete.

- [ ] **Step 3: Add Derived State mission**

Create a starter cart-like component where source items exist but totals and selection state are incomplete. Tests assert total quantity, total price, selected count, and no duplicated state behavior through user interactions.

Run:

```bash
pnpm test -- src/missions/derived-state/Exercise.test.tsx
```

Expected before solving: test fails because derived values are incomplete.

- [ ] **Step 4: Add Mock API Error Handling mission**

Create a starter component with a mock request helper and incomplete loading/error/retry states. Tests assert loading, success, failure, retry, and error clearing.

Run:

```bash
pnpm test -- src/missions/api-error-handling/Exercise.test.tsx
```

Expected before solving: test fails because async states are incomplete.

- [ ] **Step 5: Add CRUD Board mission**

Create a starter board with incomplete create, edit, delete, and selection behavior. Tests assert adding a card, editing a selected card, deleting it, and clearing selection.

Run:

```bash
pnpm test -- src/missions/crud-board/Exercise.test.tsx
```

Expected before solving: test fails because CRUD behavior is incomplete.

- [ ] **Step 6: Add Performance Pass mission**

Create a starter component with an intentionally slow derived calculation and avoidable child renders. Tests assert visible behavior and expose a render count or calculation count so the user can improve it.

Run:

```bash
pnpm test -- src/missions/performance-pass/Exercise.test.tsx
```

Expected before solving: behavior or performance expectation fails until the user improves memoization/state placement.

- [ ] **Step 7: Register all missions**

`src/missions/registry.ts` should import each real `Exercise` and mission metadata. The final registry order must be:

1. `filterable-list`
2. `validated-modal-form`
3. `derived-state`
4. `api-error-handling`
5. `crud-board`
6. `performance-pass`

- [ ] **Step 8: Verify starter suite fails intentionally**

Run:

```bash
pnpm test
```

Expected: mission tests fail because the starter exercises are intentionally incomplete. TypeScript should still pass.

Run:

```bash
pnpm typecheck
```

Expected: PASS.

- [ ] **Step 9: Commit mission starters**

```bash
git add src/missions
git commit -m "feat: add react rehab mission starters"
```

## Task 5: Final Verification And Documentation

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Create usage README**

Create `README.md`:

```md
# React Rehab

React Rehab is a local practice app for rebuilding hands-on React coding fluency.

## Install

```bash
pnpm install
```

## Run The App

```bash
pnpm dev
```

## Work A Mission

1. Open the app.
2. Pick a mission.
3. Read the requirements and verification checklist.
4. Edit the mission's `Exercise.tsx` by hand.
5. Run the mission test command shown in the app.
6. Verify the behavior in the browser.
7. Mark the mission reviewed to unlock the retrospective.

## Agent Evaluation

AI agents should evaluate attempts, not solve missions by default. Shared evaluator instructions live in `.agents/AGENTS.md`, and the reusable skill lives in `.agents/skills/rehab-eval/SKILL.md`.
```

- [ ] **Step 2: Verify commands**

Run:

```bash
pnpm typecheck
pnpm build
```

Expected: both pass.

Run:

```bash
pnpm test
```

Expected: tests fail while exercises are unsolved. Confirm failures are mission-behavior failures, not TypeScript errors, import errors, or test setup errors.

- [ ] **Step 3: Start local app**

Run:

```bash
pnpm dev
```

Expected: Vite prints a local URL. Open it and verify:

- the mission list renders
- each mission can be selected
- requirements and target file paths update
- retrospective is locked until "Mark reviewed"

- [ ] **Step 4: Commit README**

```bash
git add README.md
git commit -m "docs: add react rehab usage guide"
```

- [ ] **Step 5: Push**

```bash
git push
```

Expected: `main` pushes to `origin/main`.

## Self-Review

- Spec coverage: Covered app shell, six missions, strict no-hint flow, retrospective unlock, test plus browser verification, and AI evaluator files/symlinks.
- Placeholder scan: No unresolved placeholders or unspecified later work remains in this plan.
- Type consistency: `Mission`, `mission.ts`, `Exercise.tsx`, and `registry.ts` naming is consistent across tasks.
