# 미션 02: 검증이 있는 모달 폼

## 목적

모달 상태, controlled form field, validation, 키보드 닫기, 제출 데이터 저장을
연습합니다. 실무에서 자주 나오는 "다이얼로그 열기, 입력, 검증, 목록 업데이트"
흐름을 다룹니다.

## 대상 파일

`src/missions/validated-modal-form/Exercise.tsx`

## 구현할 내용

연락처 생성 모달을 구현합니다.

스타터에는 `Add contact` 버튼, dialog 영역, 이름과 이메일 필드, 저장된 연락처
목록이 있습니다. 일부 UI는 렌더링되지만 모달 동작, 검증, 제출 흐름은 완성되어
있지 않습니다.

## 요구사항

- `Add contact`를 클릭하면 `New contact` dialog가 열립니다.
- `Escape`를 누르면 저장하지 않고 dialog가 닫힙니다.
- `Cancel`을 클릭하면 저장하지 않고 dialog가 닫힙니다.
- 빈 필드 상태에서 `Save contact`를 클릭하면 이름과 이메일 필드의 검증 메시지가
  보입니다.
- 유효한 이름과 이메일을 입력한 뒤 저장하면 saved contacts 목록에 연락처가
  추가됩니다.
- 저장에 성공하면 dialog가 닫힙니다.
- 저장에 성공하면 다음 입력을 위해 form이 초기화됩니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- dialog는 접근 가능한 dialog role과 이름을 가집니다.
- 잘못된 제출 후 required-field error가 보입니다.
- 유효한 연락처가 saved contacts 목록에 렌더링됩니다.
- Cancel과 Escape는 연락처를 추가하지 않습니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. Validated Modal Form 미션을 엽니다.
3. `Add contact`를 클릭합니다.
4. `Escape`를 눌러 dialog가 닫히는지 확인합니다.
5. 다시 열고 빈 필드로 `Save contact`를 클릭합니다.
6. 이름과 이메일 에러가 보이는지 확인합니다.
7. 이름과 이메일을 입력하고 저장합니다.
8. 연락처가 목록에 나타나고 dialog가 닫히는지 확인합니다.

## 테스트 명령

```bash
pnpm test -- src/missions/validated-modal-form/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- 트리거 버튼으로 dialog가 열립니다.
- Escape로 dialog가 닫힙니다.
- 빈 제출은 required-field error를 보여줍니다.
- 유효한 제출은 연락처를 렌더링하고 dialog를 닫습니다.

## 제약사항

- validation 메시지를 저장 데이터로 남기지 않습니다.
- 유효하지 않은 연락처를 저장하지 않습니다.
- 테스트 통과를 위해 모달을 항상 보이게 만들지 않습니다.
- focus와 키보드 동작은 단순하되 의도를 갖고 처리합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 모달 상태, 키보드 처리, controlled field state, 저장 전 검증,
연락처 렌더링, 접근성, 하드코딩 없는 테스트 통과 여부를 확인해야 합니다.
