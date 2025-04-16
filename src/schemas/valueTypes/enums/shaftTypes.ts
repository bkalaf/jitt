import { z } from "zod";
export const shaftTypes = {
	"graphite": "graphite",
	"steel": "steel"
} as const;
export const ShaftTypes = z.nativeEnum(shaftTypes);
export type ShaftTypes = z.infer<typeof ShaftTypes>;