import { z } from "zod";
export const handOrientations = {
	"right-handed": "rh",
	"left-handed": "lh"
} as const;
export const HandOrientations = z.nativeEnum(handOrientations);
export type HandOrientations = z.infer<typeof HandOrientations>;