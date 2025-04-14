import { z } from "zod";
export const dataTransferRateUnitOfMeasure = {
	"mBit/s": "mbit/s",
	"mb/s": "mb/s"
} as const;
export const dataTransferRateUnitOfMeasureToGroup = {
	"mbit/s": ["data-transfer-rate"]
} as const;
export const DataTransferRateUnitOfMeasure = z.nativeEnum(dataTransferRateUnitOfMeasure);
export type DataTransferRateUnitOfMeasure = z.infer<typeof DataTransferRateUnitOfMeasure>;