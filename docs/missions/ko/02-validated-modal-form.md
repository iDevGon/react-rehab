# 미션 02: 검증이 있는 모달 폼

공통 요구사항: [common-requirements.md](./common-requirements.md)

## 목적

모달 상태, controlled form field, 여러 필드의 validation, 키보드 닫기, 제출
데이터 저장을 연습합니다. 단순 required-field form보다 의도적으로 더 복잡하게
설계되어 있으며 text input, select, date input, checkbox, field-level error,
중복 검증을 함께 다룹니다.

## 대상 파일

`apps/web/src/missions/validated-modal-form/Exercise.tsx`

## 구현할 내용

연락처 초대 모달을 구현합니다.

스타터에는 `Add contact` 버튼, dialog 영역, 기본 이름/이메일 필드, 저장된
연락처 목록이 있습니다. 여기에 role, start date, invitation consent,
validation, 저장된 연락처 렌더링을 추가해 완성된 초대 흐름을 만듭니다.

## 필수 필드

- `Name`
- `Email`
- `Role`
- `Start date`
- `Send invitation email`

`Role`은 다음 값을 지원해야 합니다.

- `Designer`
- `Engineer`
- `PM`

## 검증 규칙

- Name은 trim 후 필수입니다.
- trim된 Name은 2자 이상이어야 합니다.
- Email은 trim 후 필수입니다.
- Email은 이메일 형식이어야 합니다.
- Email은 이미 저장된 연락처와 중복될 수 없습니다.
- Role은 필수입니다.
- Start date는 필수입니다.
- Start date는 오늘보다 과거일 수 없습니다.
- `Send invitation email`은 저장 전에 체크되어야 합니다.
- 잘못된 제출은 field-level error를 보여줘야 합니다.
- 잘못된 제출 후 특정 필드를 유효하게 수정하면 해당 필드의 error만 사라지고
  관련 없는 필드 error는 유지되어야 합니다.

테스트와 UI가 일치하도록 아래 영어 에러 메시지를 그대로 사용하세요.

- `Name is required`
- `Name must be at least 2 characters`
- `Email is required`
- `Enter a valid email address`
- `Email already exists`
- `Role is required`
- `Start date is required`
- `Start date cannot be in the past`
- `Invitation consent is required`

## 요구사항

- `Add contact`를 클릭하면 `New contact` dialog가 열립니다.
- `Escape`를 누르면 저장하지 않고 dialog가 닫힙니다.
- `Cancel`을 클릭하면 저장하지 않고 dialog가 닫힙니다.
- 잘못된 제출은 dialog를 닫지 않고 field-level error를 보여줍니다.
- 유효한 제출은 saved contacts 목록에 연락처를 추가합니다.
- 저장된 연락처는 name, email, role, start date를 렌더링합니다.
- 유효한 제출은 dialog를 닫습니다.
- 유효한 제출은 다음 입력을 위해 form을 초기화합니다.
- 중복 이메일 검증은 saved contacts 목록을 source of truth로 사용합니다.

## 완료 조건

- 미션별 테스트 명령이 통과합니다.
- dialog는 접근 가능한 dialog role과 이름을 가집니다.
- 모든 form control은 접근 가능한 label을 가집니다.
- 잘못된 제출 후 field-level error가 보입니다.
- 한 필드를 수정하면 해당 필드의 error만 사라질 수 있습니다.
- 유효한 연락처가 saved contacts 목록에 렌더링됩니다.
- Cancel과 Escape는 연락처를 추가하지 않습니다.
- 최소 한 명의 연락처 저장 후 중복 이메일이 거부됩니다.

## 수동 확인 절차

1. `pnpm dev`로 앱을 실행합니다.
2. Validated Modal Form 미션을 엽니다.
3. `Add contact`를 클릭합니다.
4. `Escape`를 눌러 dialog가 닫히는지 확인합니다.
5. 다시 열고 빈 필드로 `Save contact`를 클릭합니다.
6. name, email, role, start date, invitation consent 에러가 보이는지
   확인합니다.
7. 한 글자 name, 잘못된 email, 어제 날짜를 입력합니다.
8. name length, email format, past-date 에러가 각각 보이는지 확인합니다.
9. name만 수정하고 name 에러가 사라지되 다른 에러는 유지되는지 확인합니다.
10. 모든 필드를 현재 또는 미래 start date로 채우고 저장합니다.
11. name, email, role, start date가 목록에 나타나는지 확인합니다.
12. 같은 email로 다른 연락처 저장을 시도하고 duplicate email error가 보이는지
    확인합니다.

## 테스트 명령

```bash
pnpm --filter @react-rehab/web test src/missions/validated-modal-form/Exercise.test.tsx
```

## 테스트가 검증하는 동작

- 트리거 버튼으로 dialog가 열립니다.
- Escape로 dialog가 닫힙니다.
- 빈 제출은 모든 required-field error를 보여줍니다.
- 잘못된 name, email, 과거 날짜는 구체적인 error를 보여줍니다.
- 필드 수정은 해당 필드 error만 제거할 수 있습니다.
- 유효한 제출은 name, email, role, start date를 렌더링합니다.
- 중복 email 제출은 거부되고 dialog가 열린 상태로 유지됩니다.

## 제약사항

- validation 메시지를 저장 데이터로 남기지 않습니다.
- 유효하지 않은 연락처를 저장하지 않습니다.
- 테스트 통과를 위해 모달을 항상 보이게 만들지 않습니다.
- 테스트 전용 분기를 하드코딩하지 않습니다.
- validation은 현재 form 값과 저장된 연락처에서 파생합니다.

## AI 에이전트 평가 기준

AI 리뷰어는 모달 상태, 키보드 처리, controlled field state, 저장 전 검증,
중복 검증, 연락처 렌더링, 접근 가능한 label, 하드코딩 없는 테스트 통과 여부를
확인해야 합니다.
