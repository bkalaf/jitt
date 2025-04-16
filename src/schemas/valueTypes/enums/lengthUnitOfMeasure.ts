import { z } from "zod";
export const lengthUnitOfMeasure = {
	"in": "in",
	"cm": "cm",
	"mm": "mm",
	"ft": "ft"
} as const;
export const lengthUnitOfMeasureToGroup = {
	"in": ["length"],
	"cm": ["length"],
	"mm": ["length"],
	"ft": ["length"]
} as const;
export const LengthUnitOfMeasure = z.nativeEnum(lengthUnitOfMeasure);
export type LengthUnitOfMeasure = z.infer<typeof LengthUnitOfMeasure>;