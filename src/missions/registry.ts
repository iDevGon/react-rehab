import type { Mission } from "./types";
import ApiErrorHandlingExercise from "./api-error-handling/Exercise";
import { mission as apiErrorHandlingMission } from "./api-error-handling/mission";
import CrudBoardExercise from "./crud-board/Exercise";
import { mission as crudBoardMission } from "./crud-board/mission";
import DerivedStateExercise from "./derived-state/Exercise";
import { mission as derivedStateMission } from "./derived-state/mission";
import FilterableListExercise from "./filterable-list/Exercise";
import { mission as filterableListMission } from "./filterable-list/mission";
import PerformancePassExercise from "./performance-pass/Exercise";
import { mission as performancePassMission } from "./performance-pass/mission";
import ValidatedModalFormExercise from "./validated-modal-form/Exercise";
import { mission as validatedModalFormMission } from "./validated-modal-form/mission";

export const missions: Mission[] = [
  { ...filterableListMission, Exercise: FilterableListExercise },
  { ...validatedModalFormMission, Exercise: ValidatedModalFormExercise },
  { ...derivedStateMission, Exercise: DerivedStateExercise },
  { ...apiErrorHandlingMission, Exercise: ApiErrorHandlingExercise },
  { ...crudBoardMission, Exercise: CrudBoardExercise },
  { ...performancePassMission, Exercise: PerformancePassExercise }
];
