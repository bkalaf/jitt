import { z } from "zod";
export const languages = {
	"English": "en",
	"Spanish": "es",
	"Japanese": "ja"
} as const;
export const Languages = z.nativeEnum(languages);
export type Languages = z.infer<typeof Languages>;