import { z } from "zod";
export const legStyles = {
	"Baggy": "baggy",
	"Bootcut": "bootcut",
	"Capri": "capri",
	"Cropped": "cropped",
	"Flared": "flare"
} as const;
export const legStylesToRegex = {
	"baggy": "",
	"bootcut": "bootcut",
	"capri": "capri",
	"cropped": "cropped",
	"flare": "flare"
} as const;
export const LegStyles = z.nativeEnum(legStyles);
export type LegStyles = z.infer<typeof LegStyles>;