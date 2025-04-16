import { z } from "zod";
export const garmentLengths = {
	"extra-long": "extra-long",
	"extra-short": "extra-short",
	"long": "long",
	"short": "short",
	"standard": "standard"
} as const;
export const GarmentLengths = z.nativeEnum(garmentLengths);
export type GarmentLengths = z.infer<typeof GarmentLengths>;