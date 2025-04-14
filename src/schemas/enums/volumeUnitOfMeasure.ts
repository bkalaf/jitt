import { z } from "zod";
export const volumeUnitOfMeasure = {
	"mL": "mL",
	"qt": "qt",
	"gal": "gal"
} as const;
export const volumeUnitOfMeasureToGroup = {
	"mL": ["volume"],
	"qt": ["volume"],
	"gal": ["volume"]
} as const;
export const VolumeUnitOfMeasure = z.nativeEnum(volumeUnitOfMeasure);
export type VolumeUnitOfMeasure = z.infer<typeof VolumeUnitOfMeasure>;