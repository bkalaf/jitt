import { z } from "zod";
export const wattageUnitOfMeasure = {
	"W": "W"
} as const;
export const wattageUnitOfMeasureToGroup = {
	"W": ["wattage"]
} as const;
export const WattageUnitOfMeasure = z.nativeEnum(wattageUnitOfMeasure);
export type WattageUnitOfMeasure = z.infer<typeof WattageUnitOfMeasure>;