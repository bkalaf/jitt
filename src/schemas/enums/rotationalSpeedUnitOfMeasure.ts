import { z } from "zod";
export const rotationalSpeedUnitOfMeasure = {
	"RPM": "rpm"
} as const;
export const rotationalSpeedUnitOfMeasureToGroup = {
	"rpm": ["rotational-speed"]
} as const;
export const RotationalSpeedUnitOfMeasure = z.nativeEnum(rotationalSpeedUnitOfMeasure);
export type RotationalSpeedUnitOfMeasure = z.infer<typeof RotationalSpeedUnitOfMeasure>;