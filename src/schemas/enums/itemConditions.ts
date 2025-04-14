import { z } from "zod";
export const itemConditions = {
	"New": "new",
	"Like-New": "like-new",
	"Good": "good",
	"Fair": "fair",
	"Poor": "poor",
	"Parts": "parts"
} as const;
export const ItemConditions = z.nativeEnum(itemConditions);
export type ItemConditions = z.infer<typeof ItemConditions>;