import { z } from "zod";
export const powerConsumptionUnitOfMeasure = {
	"WH": "wh"
} as const;
export const powerConsumptionUnitOfMeasureToGroup = {
	"wh": ["power-consumption"]
} as const;
export const PowerConsumptionUnitOfMeasure = z.nativeEnum(powerConsumptionUnitOfMeasure);
export type PowerConsumptionUnitOfMeasure = z.infer<typeof PowerConsumptionUnitOfMeasure>;