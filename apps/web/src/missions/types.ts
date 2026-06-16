import type { ComponentType } from "react";
import type { MissionContent } from "@react-rehab/missions";

export type Mission = MissionContent & {
  Exercise: ComponentType;
};
