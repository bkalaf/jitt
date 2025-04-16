import { z } from "zod";
export const rnType = {
	"WPL": "wpl",
	"RN": "rn"
} as const;
export const RnType = z.nativeEnum(rnType);
export type RnType = z.infer<typeof RnType>;