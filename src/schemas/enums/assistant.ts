import { z } from "zod";
export const assistant = {
	"Google Assistant": "google",
	"Amazon Alexa": "alexa"
} as const;
export const Assistant = z.nativeEnum(assistant);
export type Assistant = z.infer<typeof Assistant>;