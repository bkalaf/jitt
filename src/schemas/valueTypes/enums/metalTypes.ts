import { z } from "zod";
export const metalTypes = {
	"brass": "brass",
	"copper": "copper",
	"nickel": "nickel",
	"steel": "steel",
	"tin": "tin",
	"zinc": "zinc",
	"gold": "gold",
	"silver": "silver",
	"platinum": "platinum",
	"palladium": "palladium",
	"gold-18ct-yellow": "gold-18ct-yellow",
	"gold-18ct-white": "gold-18ct-white",
	"gold-14ct": "gold-14ct",
	"gold-9ct": "gold-9ct",
	"gold-22ct": "gold-22ct",
	"sterling-silver": "sterling-silver",
	"platinum-950": "platinum-950",
	"titanium": "titanium",
	"pewter": "pewter"
} as const;
export const MetalTypes = z.nativeEnum(metalTypes);
export type MetalTypes = z.infer<typeof MetalTypes>;