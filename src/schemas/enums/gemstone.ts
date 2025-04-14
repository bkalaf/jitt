import { z } from "zod";
export const gemstone = {
	"Amethyst": "amethyst",
	"Lapis Lazuli": "lapis-lazuli",
	"Agate": "agate",
	"Aquamarine": "aquamarine",
	"Malachite": "malachite",
	"Moss Agate": "moss-agate",
	"Hematite": "hematite",
	"Tanzanite": "tanzanite",
	"Black Quartz": "black-quartz",
	"Topaz": "topaz",
	"Quartz": "quartz"
} as const;
export const Gemstone = z.nativeEnum(gemstone);
export type Gemstone = z.infer<typeof Gemstone>;