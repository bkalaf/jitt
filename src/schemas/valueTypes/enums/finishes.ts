import { z } from "zod";
export const finishes = {
	"Matte": "matte",
	"Lacquer": "lacquer"
} as const;
export const Finishes = z.nativeEnum(finishes);
export type Finishes = z.infer<typeof Finishes>;