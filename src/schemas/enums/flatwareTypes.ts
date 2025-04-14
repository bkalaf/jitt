import { z } from "zod";
export const flatwareTypes = {
	"Salad Fork": "salad-fork",
	"Dinner Fork": "dinner-fork",
	"Spoon": "spoon",
	"Butter Knife": "butter-knife"
} as const;
export const FlatwareTypes = z.nativeEnum(flatwareTypes);
export type FlatwareTypes = z.infer<typeof FlatwareTypes>;