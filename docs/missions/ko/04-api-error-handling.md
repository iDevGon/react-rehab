# 미션 04: API 에러 핸들링

공통 요구사항: [common-requirements.md](./common-requirements.md)

## 목적

MSW 예제 API를 상대로 loading, success, failure, retry, stale error clearing
같은 명시적인 비동기 상태 관리를 연습합니다. 실제 외부 API를 쓰지 않으면서 작은
production 데이터 로딩 컴포넌트와 비슷한 구조를 다룹니다.

## 대상 파일

`apps/web/src/missions/api-error-handling/Exercise.tsx`

## 구현할 내용

제공된 MSW 예제 API를 사용해 profile loader를 구현합니다.

스타터는 `Load profile` 버튼, `Retry` 버튼, 실패 토글, status 영역을 렌더링합니다.
`requestProfile` helper는 예제 API를 호출하지만 UI 상태는 미완성입니다. 각
단계의 async state를 명확히 모델링하고 상태에 맞는 UI를 렌더링하세요.

## API 스펙

앱과 테스트는 이 endpoint를 MSW로 제공합니다. 실제 외부 API를 호출하지 마세요.

### `GET /api/profile`

성공 응답:

```json
{
  "id": "profile_ada",
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "project": "analytical-engine"
}
```

### `GET /api/profile?fail=true`

실패 응답:

```json
{
  "error": {
    "code": "PROFILE_UNAVAILABLE",
    "message": "Could not load profile"
  }
}
```

상태 코드: `500`

## 요구사항

- `Load profile`을 클릭하면 `GET /api/profile`을 호출합니다.
- `Make next request fail`을 켜면 다음 load가
  `GET /api/profile?fail=true`를 호출합니다.
- request가 pending인 동안 `Loading profile`을 포함한 loading status를 렌더링합니다.
- 성공하면 반환된 profile 이름, 이메일, project를 렌더링합니다.
- 실패하면 role `alert`를 가진 접근 가능한 에러를 렌더링합니다.
- retry는 초기 load와 같은 loading 경로를 사용합니다.
- 새 request를 시작하면 이전 에러를 먼저 지웁니다.
- 성공한 retry는 이전 에러를 profile data로 대체합니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- loading, success, error, retry 상태가 올바른 시점에 보입니다.
- 새 request 중 이전 에러가 남아 있지 않습니다.
- 제공된 MSW API를 사용하며 실제 외부 API는 사용하지 않습니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. API Error Handling 미션을 엽니다.
3. `Load profile`을 클릭하고 loading이 보이는지 확인합니다.
4. 성공한 profile data가 나타나는지 확인합니다.
5. `Make next request fail`을 켜고 다시 load합니다.
6. 접근 가능한 에러가 나타나는지 확인합니다.
7. 실패 토글을 끄고 retry합니다.
8. 에러가 사라지고 profile data가 다시 나타나는지 확인합니다.

## 테스트 명령

```bash
pnpm --filter @react-rehab/web test src/missions/api-error-handling/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- fetching 중 loading state가 나타납니다.
- 컴포넌트가 `/api/profile`을 호출합니다.
- 성공한 request가 profile data를 렌더링합니다.
- 실패한 request가 접근 가능한 에러를 렌더링합니다.
- 실패 후 retry로 회복할 수 있습니다.
- 새 request 시작 전에 stale error가 지워집니다.

## 제약사항

- 실제 외부 API를 사용하지 않습니다.
- MSW API를 다른 data source로 대체하지 않습니다.
- success와 error를 동시에 렌더링하지 않습니다.
- 새 request가 loading 중일 때 이전 에러를 계속 보여주지 않습니다.
- async state는 추론하기 쉽게 명시적으로 유지합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 async state 구조, loading/error/data 전환, retry 동작, 접근 가능한
에러 출력, stale error clearing, 행동 테스트 결과를 확인해야 합니다.
