# 공통 미션 요구사항

이 규칙은 모든 React Rehab 미션에 적용됩니다.

## 핵심 의도

React Rehab은 직접 React 코딩 감각을 회복하기 위한 프로젝트입니다. 테스트 통과만
목표가 아닙니다. 구현은 해당 미션의 React 학습 목표를 직접 연습했다는 것을
보여줘야 합니다.

## 라이브러리 정책

필요하다면 원하는 라이브러리를 설치해도 됩니다.

레포 루트에서 pnpm을 사용하세요:

```bash
pnpm --filter @react-rehab/web add <package-name>
pnpm --filter @react-rehab/web add -D <package-name>
```

라이브러리 설치는 가능하지만, 미션의 핵심 연습을 통째로 우회하면 안 됩니다.

- UI helper library는 해당 primitive를 직접 구현하는 미션이 아닐 때 사용할 수
  있습니다.
- Utility library는 코드가 더 명확해질 때 사용할 수 있습니다.
- 미션이 연습시키려는 정확한 기술을 라이브러리로 숨기지 마세요.
- 미션 요구사항 대부분을 대신 구현해버리는 라이브러리는 설치하지 마세요.
- 라이브러리를 설치했다면 이 풀이에 왜 필요한지 설명할 수 있어야 합니다.
- 정말 공유되는 패키지가 아니라면 dependency는 `@react-rehab/web`에만
  추가하세요.

예시:

- 성능 미션에서 작은 측정 helper는 괜찮지만, 렌더링 동작 전체를 opaque table
  framework 안에 숨기면 미션 의도와 맞지 않습니다.
- form validation 미션에서 schema library를 쓸 수는 있지만 controlled state,
  field-level error, submit behavior, accessibility는 직접 연결해야 합니다.
- modal 미션에서 dialog primitive를 쓸 수는 있지만 open/close state, keyboard
  behavior, accessible labeling은 직접 이해하고 검증해야 합니다.

## 구현 규칙

- 대상 `Exercise.tsx`를 직접 수정하세요.
- 요구사항이 따로 말하지 않는 한 현재 미션에 필요한 변경만 하세요.
- 테스트 전용 분기를 하드코딩하지 마세요.
- 테스트를 통과시키기 위해 숨겨져야 할 UI를 항상 보이게 만들지 마세요.
- 기본으로 존재하는 평가용 테스트 코드는 수정하지 마세요.
- 접근 가능한 label, role, keyboard behavior, 읽기 쉬운 error message를
  유지하세요.
- 추상화를 먼저 만들기보다 작고 명시적인 state를 선호하세요.
- 작업 중에는 앱에 표시된 미션별 테스트 명령을 실행하세요.

## 포맷팅과 린트

레포는 formatting, linting, import 정리를 위한 품질 보조 도구로 Biome을
제공합니다.

자주 쓰는 명령:

```bash
pnpm lint
pnpm format
pnpm check
pnpm check:write
```

작업 중 이 명령들을 사용해도 되지만, 자동 수정이 미션 요구사항을 대신하지는
않습니다. `pnpm format:write` 또는 `pnpm check:write` 같은 write 명령을
실행했다면 기본 미션 테스트 파일이 변경되지 않았는지 확인하세요.

## 디자인 정책

미션 평가는 기본적으로 시각 디자인을 채점하지 않습니다. 행동 요구사항을
충족한다면 단순한 스타일링으로도 통과할 수 있습니다.

UI 연습을 하고 싶거나 사용성을 개선하고 싶다면 디자인은 변경해도 됩니다.
다만 디자인 변경이 필수 정보, 접근 가능한 label, keyboard behavior를 없애면
안 됩니다. 테스트 surface를 바꿔서 통과시키는 방식도 허용되지 않습니다.

## 테스트 정책

기본 미션 테스트 파일은 평가용 fixture입니다. 미션을 푸는 중에는 수정하지
마세요. 테스트가 실패하면 repository maintainer가 명시적으로 미션 자체를
수정하라고 요청한 경우가 아닌 한 `Exercise.tsx` 구현을 바꿔야 합니다.

## 에이전트 평가

AI 에이전트는 미션 요구사항, 테스트, 이 공통 요구사항 문서를 기준으로 사용자의
시도를 평가해야 합니다. 사용자가 평가 후 명시적으로 solution code를 요청하지
않는 한 전체 대체 구현을 제공하지 않아야 합니다.
사용자가 디자인 피드백을 명시적으로 요청하지 않는 한 시각 디자인은 채점하지
않아야 합니다.
