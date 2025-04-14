import { z } from "zod";
export const durationUnitOfMeasure = {
	"s": "s",
	"m": "m",
	"h": "h"
} as const;
export const durationUnitOfMeasureToGroup = {
	"s": ["duration"],
	"m": ["duration"],
	"h": ["duration"]
} as const;
export const DurationUnitOfMeasure = z.nativeEnum(durationUnitOfMeasure);
export type DurationUnitOfMeasure = z.infer<typeof DurationUnitOfMeasure>;