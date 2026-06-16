import { en } from "./locales/en";
import { ko } from "./locales/ko";
import type { Locale, MissionLocaleBundle } from "./types";

export type { AppCopy, Locale, MissionContent, MissionLocaleBundle } from "./types";

export const missionBundles: Record<Locale, MissionLocaleBundle> = {
  en,
  ko
};

export function getMissionBundle(locale: Locale) {
  return missionBundles[locale];
}
