import { z } from "zod";
export const dinnerwareTypes = {
	"bread & butter plate": "bread-butter",
	"coffee mug": "mug",
	"dinner plate": "dinner",
	"salad plate": "salad"
} as const;
export const DinnerwareTypes = z.nativeEnum(dinnerwareTypes);
export type DinnerwareTypes = z.infer<typeof DinnerwareTypes>;