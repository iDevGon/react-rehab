import type { ComponentType } from "react";

export type Mission = {
  id: string;
  title: string;
  summary: string;
  targetFile: string;
  requirements: string[];
  testCommand: string;
  verification: string[];
  retrospective: string[];
  Exercise: ComponentType;
};
