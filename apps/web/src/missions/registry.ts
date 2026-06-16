import { getMissionBundle, type Locale } from "@react-rehab/missions";
import ApiErrorHandlingExercise from "./api-error-handling/Exercise";
import CrudBoardExercise from "./crud-board/Exercise";
import DerivedStateExercise from "./derived-state/Exercise";
import FilterableListExercise from "./filterable-list/Exercise";
import PerformancePassExercise from "./performance-pass/Exercise";
import type { Mission } from "./types";
import ValidatedModalFormExercise from "./validated-modal-form/Exercise";

const exerciseByMissionId: Record<string, Mission["Exercise"]> = {
  "filterable-list": FilterableListExercise,
  "validated-modal-form": ValidatedModalFormExercise,
  "derived-state": DerivedStateExercise,
  "api-error-handling": ApiErrorHandlingExercise,
  "crud-board": CrudBoardExercise,
  "performance-pass": PerformancePassExercise
};

export function getMissions(locale: Locale): Mission[] {
  return getMissionBundle(locale).missions.map((mission) => ({
    ...mission,
    Exercise: exerciseByMissionId[mission.id]
  }));
}
