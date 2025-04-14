import { z } from "zod";
export const voltageUnitOfMeasure = {
	"V": "V",
	"mV": "mV"
} as const;
export const voltageUnitOfMeasureToGroup = {
	"V": ["voltage"],
	"mV": ["voltage"]
} as const;
export const VoltageUnitOfMeasure = z.nativeEnum(voltageUnitOfMeasure);
export type VoltageUnitOfMeasure = z.infer<typeof VoltageUnitOfMeasure>;