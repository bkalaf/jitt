import { z } from "zod";
export const neckTypes = {
	"Cropped": "cropped",
	"Choker": "choker",
	"Collared": "collared",
	"Cowl Neck": "cowl",
	"Crew Neck": "crew",
	"Halter": "halter",
	"Henley": "henley",
	"High Neck": "high",
	"Hooded": "hooded",
	"Jewel Neck": "jewel",
	"Mandarin Neck": "mandarin",
	"Mock Neck": "mock",
	"Notch Neck": "notch",
	"Off The Sholder": "off-the-sholder",
	"One Shoulder": "one-shoulder",
	"Queen Anne": "queen-anne",
	"Sailor Collar Neck": "sailor-collar",
	"Scoop Neck": "scoop",
	"Shawl Neck": "shawl",
	"Spaghetti Strap": "spaghetti-strap",
	"Sweetheart": "sweetheart",
	"Turtleneck": "turtleneck",
	"V Neck": "v"
} as const;
export const NeckTypes = z.nativeEnum(neckTypes);
export type NeckTypes = z.infer<typeof NeckTypes>;