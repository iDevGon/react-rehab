# React Rehab

[English README](./README.md)

React Rehab은 AI 에이전트에게 구현을 너무 많이 맡기면서 약해진 직접
코딩 감각을 되찾기 위한 로컬 React 연습 앱입니다.

각 미션은 실제 업무에서 자주 만나는 작은 React 과제를 다룹니다. 요구사항,
수동 확인 항목, 실패하는 테스트가 제공되며, 사용자는 대상 `Exercise.tsx`
파일을 직접 수정해서 통과시킵니다.

AI 에이전트는 기본적으로 구현자가 아니라 리뷰어입니다. 먼저 직접 코드를
작성한 뒤, 에이전트에게 테스트 실행과 요구사항 충족 여부 평가를 맡기는 흐름을
권장합니다.

## 시작하기

레포를 클론합니다:

```bash
git clone https://github.com/iDevGon/react-rehab.git
cd react-rehab
```

pnpm으로 의존성을 설치합니다:

```bash
pnpm install
```

로컬 앱을 실행합니다:

```bash
pnpm dev
```

Vite가 출력하는 URL을 엽니다. 보통 `http://localhost:5173` 입니다.

## 모노레포 구조

- `apps/web`: Vite React 연습 앱
- `packages/missions`: 앱에서 사용하는 영어 기본 미션 문구와 한국어 번역
- `docs/missions/en`: 영어 상세 미션 요구사항
- `docs/missions/ko`: 한국어 상세 미션 요구사항
- `docs/missions/en/common-requirements.md`: 모든 미션에 적용되는 영어 공통
  요구사항과 dependency 정책
- `docs/missions/ko/common-requirements.md`: 한국어 공통 요구사항
- `.agents`: AI 에이전트 평가 지침

앱은 영어를 기본으로 열립니다. 사이드바의 언어 전환 버튼으로 한국어 버전을 볼
수 있습니다.

## 미션 진행 방식

1. 앱을 엽니다.
2. 미션을 고릅니다.
3. 요구사항과 확인 항목을 읽습니다.
4. 미션의 `Exercise.tsx`를 직접 수정합니다.
5. 앱에 표시된 미션별 테스트 명령을 실행합니다.
6. 브라우저에서 동작을 확인합니다.
7. 리뷰 완료로 표시한 뒤 회고 질문을 확인합니다.

처음에는 전체 테스트가 실패하는 것이 정상입니다. 미션 스타터 코드가 일부러
미완성 상태이기 때문입니다. 작업 중에는 앱에 표시된 미션별 테스트 명령을
사용하세요.

자주 쓰는 명령:

```bash
pnpm typecheck
pnpm build
pnpm test
```

## 에이전트 평가

AI 에이전트는 기본적으로 미션을 대신 풀지 않고 사용자의 시도를 평가해야
합니다. 공통 평가 지침은 `.agents/AGENTS.md`, 재사용 가능한 스킬은
`.agents/skills/rehab-eval/SKILL.md`에 있습니다.
