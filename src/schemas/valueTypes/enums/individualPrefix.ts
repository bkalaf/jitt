import { z } from "zod";
export const individualPrefix = {
	"Dr": "dr",
	"Lord": "lord",
	"Lady": "lady"
} as const;
export const IndividualPrefix = z.nativeEnum(individualPrefix);
export type IndividualPrefix = z.infer<typeof IndividualPrefix>;