import { z } from "zod";
export const durationUnitOfMeasure = {
	"s": "S",
	"m": "M",
	"h": "H"
} as const;
export const durationUnitOfMeasureToGroup = {
	"s": ["duration"],
	"m": ["duration"],
	"h": ["duration"]
} as const;
export const DurationUnitOfMeasure = z.nativeEnum(durationUnitOfMeasure);
export type DurationUnitOfMeasure = z.infer<typeof DurationUnitOfMeasure>;