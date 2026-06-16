export type Locale = "en" | "ko";

export type MissionContent = {
  id: string;
  title: string;
  summary: string;
  targetFile: string;
  requirements: string[];
  testCommand: string;
  verification: string[];
  retrospective: string[];
};

export type AppCopy = {
  appEyebrow: string;
  appTitle: string;
  appSummary: string;
  navLabel: string;
  currentMission: string;
  reviewed: string;
  markReviewed: string;
  progressReviewed: string;
  requirements: string;
  manualVerification: string;
  retrospective: string;
  retrospectiveLocked: string;
  testCommand: string;
  targetFile: string;
  missionWorkspace: string;
  missionDetails: string;
  livePreview: string;
  exerciseSurface: string;
  languageLabel: string;
  english: string;
  korean: string;
  noMissions: string;
};

export type MissionLocaleBundle = {
  app: AppCopy;
  missions: MissionContent[];
};
