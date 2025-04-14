import { z } from "zod";
export const frequencyUnitOfMeasure = {
	"mHz": "mHz"
} as const;
export const frequencyUnitOfMeasureToGroup = {
	"mHz": ["frequency"]
} as const;
export const FrequencyUnitOfMeasure = z.nativeEnum(frequencyUnitOfMeasure);
export type FrequencyUnitOfMeasure = z.infer<typeof FrequencyUnitOfMeasure>;