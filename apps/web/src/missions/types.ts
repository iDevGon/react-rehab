import type { MissionContent } from "@react-rehab/missions";
import type { ComponentType } from "react";

export type Mission = MissionContent & {
  Exercise: ComponentType;
};
