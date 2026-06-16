# 미션 03: 파생 상태

공통 요구사항: [common-requirements.md](./common-requirements.md)

## 목적

source state를 최소로 유지하고 현재 데이터에서 합계를 계산하는 연습을 합니다.
이 미션은 React에서 자주 발생하는 실수인 "계산 가능한 값을 별도 state로 중복
저장하는 문제"를 다룹니다.

## 대상 파일

`apps/web/src/missions/derived-state/Exercise.tsx`

## 구현할 내용

작은 장바구니 요약을 구현합니다.

스타터는 수량, 가격, 선택 checkbox, 수량 버튼이 있는 cart row를 렌더링합니다.
표시되는 합계와 선택 개수는 미완성입니다. 현재 cart row와 선택된 아이템을
기준으로 값이 갱신되도록 구현하세요.

## 요구사항

- 현재 cart row에서 total quantity를 계산합니다.
- 현재 cart row에서 total price를 계산합니다.
- 선택된 row를 추적하고 selected count를 계산합니다.
- 증가/감소 버튼으로 아이템 수량을 변경합니다.
- 수량 변경은 total quantity와 total price를 갱신합니다.
- 수량은 0 아래로 내려가지 않아야 합니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- 초기 합계가 starter cart row와 일치합니다.
- row를 체크하면 selected count가 갱신됩니다.
- 수량 버튼이 row 수량과 파생 합계를 갱신합니다.
- 표시되는 합계는 독립적인 stale state로 유지되지 않습니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. Derived State 미션을 엽니다.
3. 초기 total quantity와 price가 보이는 row와 일치하는지 확인합니다.
4. 두 개의 row를 선택하고 selected count가 갱신되는지 확인합니다.
5. 한 아이템 수량을 증가시키고 다른 아이템 수량을 감소시킵니다.
6. 합계가 즉시 갱신되는지 확인합니다.

## 테스트 명령

```bash
pnpm --filter @react-rehab/web test src/missions/derived-state/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- 초기 total quantity와 total price가 올바르게 계산됩니다.
- checkbox 토글 시 selected count가 바뀝니다.
- 수량 변경 후 합계가 갱신됩니다.

## 제약사항

- 합계를 하드코딩하지 않습니다.
- total quantity, total price, selected count를 독립 source state로 유지하지
  않습니다.
- 표시 값을 계산하는 데 필요한 최소 데이터만 state로 저장합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 source state가 최소인지, 합계가 렌더링 또는 memoized calculation으로
파생되는지, stale duplicated state를 피했는지, 수량 상호작용과 행동 테스트를
통과하는지 확인해야 합니다.
