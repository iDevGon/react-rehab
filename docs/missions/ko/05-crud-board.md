# 미션 05: CRUD 보드

공통 요구사항: [common-requirements.md](./common-requirements.md)

## 목적

로컬 CRUD 상태를 연습합니다. 생성, 선택, 수정, 삭제, 선택 해제를 다루며 작은
내부 도구나 task board와 비슷한 흐름입니다.

## 대상 파일

`apps/web/src/missions/crud-board/Exercise.tsx`

## 구현할 내용

작은 editable board를 구현합니다.

스타터는 새 카드 제목 input, board list, selected card editor를 렌더링합니다.
보이는 UI는 있지만 action이 state를 올바르게 갱신하지 않습니다. list, selected
card id, draft editing state를 연결하세요.

## 요구사항

- `Card title` 필드 값으로 새 카드를 추가합니다.
- 추가 후 새 카드 필드를 비웁니다.
- 카드 버튼을 클릭해 카드를 선택합니다.
- 카드를 선택하면 editor에 해당 카드 제목이 채워집니다.
- 수정 후 저장하면 선택된 카드만 갱신됩니다.
- 삭제하면 선택된 카드만 제거됩니다.
- 선택 해제는 모든 카드를 유지하고 editor를 초기화합니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- 추가한 카드가 보입니다.
- 카드를 선택하면 edit field가 채워집니다.
- 저장하면 board list의 선택된 카드가 갱신됩니다.
- 삭제하면 선택된 카드가 제거되고 selection이 초기화됩니다.
- 선택 해제는 카드를 삭제하지 않습니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. CRUD Board 미션을 엽니다.
3. `Ship starter`라는 카드를 추가합니다.
4. 기존 카드를 선택하고 editor가 채워지는지 확인합니다.
5. 선택한 카드 이름을 바꾸고 저장합니다.
6. 선택한 카드를 삭제하고 해당 카드만 사라지는지 확인합니다.
7. 다른 카드를 선택한 뒤 선택 해제하고 카드가 남아 있는지 확인합니다.

## 테스트 명령

```bash
pnpm --filter @react-rehab/web test src/missions/crud-board/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- add가 새 selectable card를 생성합니다.
- select가 선택된 카드 제목을 editor에 로드합니다.
- save가 선택된 카드를 갱신합니다.
- delete가 선택된 카드를 제거합니다.
- clear selection은 카드를 유지하고 선택 상태를 초기화합니다.

## 제약사항

- 배열 index를 안정적인 카드 identity로 사용하지 않습니다.
- 하나의 카드를 저장할 때 모든 카드를 수정하지 않습니다.
- 사용자가 선택 해제만 했는데 카드를 삭제하지 않습니다.
- draft input state와 committed card list state를 분리합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 identity 처리, source state 구조, selected card 동작, draft state 초기화,
CRUD 상호작용, control 접근성, 행동 테스트 결과를 확인해야 합니다.
