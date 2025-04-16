import { z } from "zod";
export const degreesUnitOfMeasure = {
	"°": "°"
} as const;
export const degreesUnitOfMeasureToGroup = {
	"°": ["degrees"]
} as const;
export const DegreesUnitOfMeasure = z.nativeEnum(degreesUnitOfMeasure);
export type DegreesUnitOfMeasure = z.infer<typeof DegreesUnitOfMeasure>;