import { z } from "zod";
export const cableTypes = {
	"data": "data",
	"power": "power",
	"video": "video"
} as const;
export const CableTypes = z.nativeEnum(cableTypes);
export type CableTypes = z.infer<typeof CableTypes>;