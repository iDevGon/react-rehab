# Mission 04: API Error Handling

Common requirements: [common-requirements.md](./common-requirements.md)

## Purpose

Practice explicit async state management against an example API: loading,
success, failure, retry, and stale error clearing. This mirrors the shape of a
small production data-loading component while keeping the API local through MSW.

## Target File

`apps/web/src/missions/api-error-handling/Exercise.tsx`

## What To Build

Implement a profile loader using the provided MSW example API.

The starter renders a `Load profile` button, a `Retry` button, a failure toggle,
and a status area. It includes a `requestProfile` helper that calls the example
API, but the UI states are incomplete. Your job is to model the async state
clearly and render the correct UI for each phase.

## API Spec

The app and tests provide this endpoint with MSW. Do not call a real external
API.

### `GET /api/profile`

Successful response:

```json
{
  "id": "profile_ada",
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "project": "analytical-engine"
}
```

### `GET /api/profile?fail=true`

Failure response:

```json
{
  "error": {
    "code": "PROFILE_UNAVAILABLE",
    "message": "Could not load profile"
  }
}
```

Status code: `500`

## Requirements

- Clicking `Load profile` calls `GET /api/profile`.
- Enabling `Make next request fail` makes the next load call
  `GET /api/profile?fail=true`.
- While the request is pending, render a loading status containing
  `Loading profile`.
- On success, render the returned profile name, email, and project.
- On failure, render an accessible error with role `alert`.
- Retry uses the same loading path as the initial load.
- Starting a new request clears any stale error before the new result arrives.
- Successful retry replaces the old error with profile data.

## Completion Criteria

- The mission-specific test command passes.
- Loading, success, error, and retry states are all visible at the right time.
- Old errors do not remain visible during a new request.
- The component uses the provided MSW API, not a real external API.

## Manual Verification

1. Run the app with `pnpm dev`.
2. Open the API Error Handling mission.
3. Click `Load profile` and confirm loading appears.
4. Confirm successful profile data appears.
5. Enable `Make next request fail` and load again.
6. Confirm an accessible error appears.
7. Disable failure and retry.
8. Confirm the error clears and profile data appears again.

## Test Command

```bash
pnpm --filter @react-rehab/web test src/missions/api-error-handling/Exercise.test.tsx
```

## What The Tests Check

- Loading state appears while fetching.
- The component calls `/api/profile`.
- Successful requests render profile data.
- Failed requests render an accessible error.
- Retry can recover after failure.
- Stale errors clear before a new request starts.

## Constraints

- Do not use a real external API.
- Do not replace the MSW API with a different data source.
- Do not render success and error at the same time.
- Do not leave an old error visible while a new request is loading.
- Keep async state explicit enough to reason about.

## Agent Evaluation Criteria

An AI reviewer should check async state shape, loading/error/data transitions,
retry behavior, accessible error output, stale error clearing, and behavior test
results.
