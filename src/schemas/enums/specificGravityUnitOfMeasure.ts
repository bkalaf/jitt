import { z } from "zod";
export const specificGravityUnitOfMeasure = {
	"": ""
} as const;
export const specificGravityUnitOfMeasureToGroup = {
	"": ["specific-gravity"]
} as const;
export const SpecificGravityUnitOfMeasure = z.nativeEnum(specificGravityUnitOfMeasure);
export type SpecificGravityUnitOfMeasure = z.infer<typeof SpecificGravityUnitOfMeasure>;