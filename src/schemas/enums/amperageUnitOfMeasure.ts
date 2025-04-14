import { z } from "zod";
export const amperageUnitOfMeasure = {
	"A": "A",
	"mA": "mA"
} as const;
export const amperageUnitOfMeasureToGroup = {
	"A": ["amperage"],
	"mA": ["amperage"]
} as const;
export const AmperageUnitOfMeasure = z.nativeEnum(amperageUnitOfMeasure);
export type AmperageUnitOfMeasure = z.infer<typeof AmperageUnitOfMeasure>;