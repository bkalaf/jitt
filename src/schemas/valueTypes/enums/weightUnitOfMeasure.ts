import { z } from "zod";
export const weightUnitOfMeasure = {
	"g": "g",
	"lb": "lb",
	"oz": "oz"
} as const;
export const weightUnitOfMeasureToGroup = {
	"g": ["weight"],
	"lb": ["weight"],
	"oz": ["weight"]
} as const;
export const WeightUnitOfMeasure = z.nativeEnum(weightUnitOfMeasure);
export type WeightUnitOfMeasure = z.infer<typeof WeightUnitOfMeasure>;