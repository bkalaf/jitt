import { z } from "zod";
export const displayTypes = {
	"AMOLED": "amoled",
	"LCD": "lcd",
	"OLED": "oled"
} as const;
export const DisplayTypes = z.nativeEnum(displayTypes);
export type DisplayTypes = z.infer<typeof DisplayTypes>;