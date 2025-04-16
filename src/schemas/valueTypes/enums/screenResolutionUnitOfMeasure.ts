import { z } from "zod";
export const screenResolutionUnitOfMeasure = {
	"MP": "mp"
} as const;
export const screenResolutionUnitOfMeasureToGroup = {
	"mp": ["resolution"]
} as const;
export const ScreenResolutionUnitOfMeasure = z.nativeEnum(screenResolutionUnitOfMeasure);
export type ScreenResolutionUnitOfMeasure = z.infer<typeof ScreenResolutionUnitOfMeasure>;