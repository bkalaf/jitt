import { z } from "zod";
export const electricalChargeUnitOfMeasure = {
	"mAh": "mAh"
} as const;
export const electricalChargeUnitOfMeasureToGroup = {
	"mAh": ["electrical-charge"]
} as const;
export const ElectricalChargeUnitOfMeasure = z.nativeEnum(electricalChargeUnitOfMeasure);
export type ElectricalChargeUnitOfMeasure = z.infer<typeof ElectricalChargeUnitOfMeasure>;