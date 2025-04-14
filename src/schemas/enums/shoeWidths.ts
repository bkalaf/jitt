import { z } from "zod";
export const shoeWidths = {
	"extra-narrow": "extra-narrow",
	"extra-wide": "extra-wide",
	"medium": "medium",
	"narrow": "narrow",
	"wide": "wide"
} as const;
export const ShoeWidths = z.nativeEnum(shoeWidths);
export type ShoeWidths = z.infer<typeof ShoeWidths>;