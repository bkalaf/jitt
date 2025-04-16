import { z } from "zod";
export const powerTypes = {
	"battery": "battery",
	"ac": "ac",
	"both": "both"
} as const;
export const PowerTypes = z.nativeEnum(powerTypes);
export type PowerTypes = z.infer<typeof PowerTypes>;