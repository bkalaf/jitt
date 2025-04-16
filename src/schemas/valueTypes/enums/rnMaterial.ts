import { z } from "zod";
export const rnMaterial = {
	"WOOL": "wool"
} as const;
export const RnMaterial = z.nativeEnum(rnMaterial);
export type RnMaterial = z.infer<typeof RnMaterial>;