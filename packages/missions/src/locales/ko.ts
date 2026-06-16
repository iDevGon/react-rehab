import type { MissionLocaleBundle } from "../types";

export const ko: MissionLocaleBundle = {
  app: {
    appEyebrow: "React Rehab",
    appTitle: "미션 러너",
    appSummary:
      "집중된 React 미션을 직접 구현하고, 동작을 검증한 뒤 회고하며 다음 미션으로 이동합니다.",
    navLabel: "미션",
    currentMission: "현재 미션",
    reviewed: "회고 완료",
    markReviewed: "회고 완료 표시",
    progressReviewed: "개 회고 완료",
    requirements: "요구사항",
    manualVerification: "수동 확인",
    retrospective: "회고",
    retrospectiveLocked:
      "테스트와 브라우저 확인을 마친 뒤 회고 완료를 표시하면 열립니다.",
    testCommand: "테스트 명령",
    targetFile: "대상 파일",
    missionWorkspace: "미션 작업 영역",
    missionDetails: "미션 상세",
    livePreview: "실시간 미리보기",
    exerciseSurface: "연습 화면",
    languageLabel: "언어",
    english: "English",
    korean: "Korean",
    noMissions: "설정된 미션이 없습니다."
  },
  missions: [
    {
      id: "filterable-list",
      title: "필터 가능한 목록",
      summary: "검색, 카테고리 필터, empty state를 구현합니다.",
      targetFile: "apps/web/src/missions/filterable-list/Exercise.tsx",
      requirements: [
        "아이템 이름으로 검색하기",
        "카테고리로 필터링하기",
        "결과가 없을 때 empty state 보여주기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/filterable-list/Exercise.test.tsx",
      verification: [
        "검색어 입력 시 보이는 결과가 좁혀집니다",
        "카테고리 선택 시 보이는 결과가 좁혀집니다",
        "매칭 결과가 없으면 명확한 empty state가 보입니다"
      ],
      retrospective: [
        "필터링 중 원본 데이터는 변경하지 않습니다",
        "검색어와 카테고리에서 보이는 아이템을 파생합니다",
        "empty state는 파생된 결과 목록을 기준으로 결정합니다"
      ]
    },
    {
      id: "validated-modal-form",
      title: "검증이 있는 모달 폼",
      summary: "여러 필드를 검증하는 연락처 초대 모달을 구현합니다.",
      targetFile: "apps/web/src/missions/validated-modal-form/Exercise.tsx",
      requirements: [
        "Add contact 버튼으로 모달 열기",
        "Escape 키로 모달 닫기",
        "name, email, role, start date, invitation consent 검증하기",
        "이미 저장된 email 중복 거부하기",
        "수정한 필드가 유효해지면 해당 필드 error만 제거하기",
        "name, email, role, start date를 포함한 연락처 렌더링하기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/validated-modal-form/Exercise.test.tsx",
      verification: [
        "Add contact를 누르면 dialog가 열립니다",
        "Escape는 저장 없이 dialog를 닫습니다",
        "빈 제출은 모든 required-field error를 보여줍니다",
        "잘못된 name, email, 과거 날짜는 구체적인 error를 보여줍니다",
        "중복 email은 dialog를 닫지 않고 error를 보여줍니다",
        "유효한 제출은 전체 연락처를 추가하고 dialog를 닫습니다"
      ],
      retrospective: [
        "임시 form state와 저장된 연락처 데이터를 분리합니다",
        "현재 form 값과 저장된 연락처에서 validation을 파생합니다",
        "field-level error는 원인이 된 필드에만 한정합니다"
      ]
    },
    {
      id: "derived-state",
      title: "파생 상태",
      summary: "source row에서 장바구니 합계와 선택 상태를 계산합니다.",
      targetFile: "apps/web/src/missions/derived-state/Exercise.tsx",
      requirements: [
        "cart row에서 total quantity 계산하기",
        "cart row에서 total price 계산하기",
        "선택된 row를 추적하고 selected count 계산하기",
        "수량 변경 시 파생 값 갱신하기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/derived-state/Exercise.test.tsx",
      verification: [
        "초기 합계가 cart row와 일치합니다",
        "row 체크 시 selected count가 갱신됩니다",
        "수량 버튼이 아이템 수량과 합계를 갱신합니다"
      ],
      retrospective: [
        "가장 작은 source state만 저장합니다",
        "현재 row에서 합계를 계산합니다",
        "계산 가능한 값을 중복 state로 저장하지 않습니다"
      ]
    },
    {
      id: "api-error-handling",
      title: "API 에러 핸들링",
      summary:
        "MSW API의 loading, success, failure, retry, error clearing을 처리합니다.",
      targetFile: "apps/web/src/missions/api-error-handling/Exercise.tsx",
      requirements: [
        "loader에서 GET /api/profile 호출하기",
        "API request가 pending일 때 loading 보여주기",
        "성공 후 profile data 렌더링하기",
        "실패 후 error 렌더링하기",
        "실패한 request 재시도하기",
        "새 request 시작 전 이전 error 지우기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/api-error-handling/Exercise.test.tsx",
      verification: [
        "Load profile이 loading state로 진입합니다",
        "성공한 request가 name, email, project를 렌더링합니다",
        "실패한 request가 접근 가능한 error를 렌더링합니다",
        "Retry로 회복하고 이전 error를 지웁니다"
      ],
      retrospective: [
        "비동기 작업을 loading, data, error state로 명시합니다",
        "새 작업 시작 시 stale error를 지웁니다",
        "retry는 같은 request 경로를 사용합니다"
      ]
    },
    {
      id: "crud-board",
      title: "CRUD 보드",
      summary: "카드를 생성, 선택, 수정, 삭제하고 선택을 해제합니다.",
      targetFile: "apps/web/src/missions/crud-board/Exercise.tsx",
      requirements: [
        "title field 값으로 새 카드 추가하기",
        "수정할 카드 선택하기",
        "선택한 카드의 수정 내용 저장하기",
        "선택한 카드 삭제하기",
        "삭제하지 않고 선택 해제하기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/crud-board/Exercise.test.tsx",
      verification: [
        "추가하면 보이는 카드가 생성됩니다",
        "카드를 선택하면 editor가 채워집니다",
        "저장하면 선택한 카드가 갱신됩니다",
        "삭제하면 선택한 카드만 제거됩니다",
        "선택 해제는 카드를 유지합니다"
      ],
      retrospective: [
        "card list와 selected id를 source state로 유지합니다",
        "변경을 확정하기 전 draft form state를 사용합니다",
        "삭제 또는 선택 해제 후 selection state를 초기화합니다"
      ]
    },
    {
      id: "performance-pass",
      title: "성능 개선 패스",
      summary: "동작은 유지하면서 불필요한 expensive work를 줄입니다.",
      targetFile: "apps/web/src/missions/performance-pass/Exercise.tsx",
      requirements: [
        "project filtering 동작 유지하기",
        "관련 없는 state 변경에서 expensive filtering 반복 방지하기",
        "개선 여부를 확인할 수 있도록 calculation count 유지하기"
      ],
      testCommand:
        "pnpm --filter @react-rehab/web test src/missions/performance-pass/Exercise.test.tsx",
      verification: [
        "필터링은 계속 보이는 project를 바꿉니다",
        "관련 없는 UI state 토글은 filtering을 다시 실행하지 않습니다",
        "관련 없는 업데이트에서 calculation count가 유지됩니다"
      ],
      retrospective: [
        "어떤 state 변경이 expensive work에 영향을 주는지 구분합니다",
        "비싸거나 불안정한 값에만 memoization을 적용합니다",
        "최적화는 측정 가능한 동작과 연결합니다"
      ]
    }
  ]
};
