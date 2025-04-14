import { z } from "zod";
export const cardRarity = {
	"Common": "common",
	"Uncommon": "uncommon",
	"Rare": "rare",
	"Ultra-Rare": "ultra",
	"Special-Issue": "special"
} as const;
export const CardRarity = z.nativeEnum(cardRarity);
export type CardRarity = z.infer<typeof CardRarity>;