# 미션 06: 성능 개선 패스

## 목적

사용자에게 보이는 동작은 유지하면서 렌더링 성능을 개선하는 연습을 합니다. 비싼
파생 작업을 찾고, 관련 없는 UI state 변경에서 그 작업이 반복되지 않도록 만드는
것이 핵심입니다.

## 대상 파일

`apps/web/src/missions/performance-pass/Exercise.tsx`

## 구현할 내용

프로젝트 필터링 동작을 유지하면서 불필요한 expensive work를 줄입니다.

스타터는 filter input, project list, density toggle, visible calculation count를
렌더링합니다. 필터링은 동작하지만 관련 없는 UI 업데이트에서도 expensive filtering
calculation이 반복됩니다. 동작은 그대로 유지하면서 expensive work를 안정화하세요.

## 요구사항

- 텍스트 기준 project filtering은 계속 동작해야 합니다.
- 관련 없는 UI density toggle은 expensive filtering work를 다시 실행하지 않아야
  합니다.
- 관련 없는 state 변경에서 visible `Calculation runs` 값은 유지되어야 합니다.
- filter text가 바뀌면 calculation은 다시 실행되어야 합니다.
- 최적화는 UI와 테스트에서 측정되는 동작으로 설명 가능해야 합니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- 필터링은 계속 visible project list를 갱신합니다.
- density toggle은 calculation count를 증가시키지 않습니다.
- visible calculation counter를 제거하지 않습니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. Performance Pass 미션을 엽니다.
3. filter input에 `deck`을 입력합니다.
4. 보이는 목록이 matching project로 필터링되는지 확인합니다.
5. `Calculation runs` 값을 확인합니다.
6. density를 토글합니다.
7. calculation count가 바뀌지 않았는지 확인합니다.

## 테스트 명령

```bash
pnpm --filter @react-rehab/web test src/missions/performance-pass/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- filtering이 visible project list를 변경합니다.
- 관련 없는 density toggle은 expensive filtering을 반복하지 않습니다.

## 제약사항

- 테스트 통과를 위해 calculation counter를 제거하지 않습니다.
- 최적화 중 filtering 동작을 깨뜨리지 않습니다.
- 모든 값을 무조건 memoization하지 않습니다. 비싼 파생 작업만 대상으로 삼습니다.
- 최적화는 이해하기 쉬워야 합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 동작이 유지되는지, expensive work가 올바른 dependency에 묶였는지,
visible measurement가 최적화를 뒷받침하는지, 불필요한 추상화를 추가하지 않았는지
확인해야 합니다.
