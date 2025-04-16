import { z } from "zod";
export const capacityUnitOfMeasure = {
	"GB": "gb",
	"MB": "mb",
	"TB": "tb"
} as const;
export const capacityUnitOfMeasureToGroup = {
	"gb": ["capacity"],
	"mb": ["capacity"],
	"tb": ["capacity"]
} as const;
export const CapacityUnitOfMeasure = z.nativeEnum(capacityUnitOfMeasure);
export type CapacityUnitOfMeasure = z.infer<typeof CapacityUnitOfMeasure>;