import { z } from "zod";
export const imageTypes = {
	"Original": "original",
	"Removed Background": "rembg",
	"": ""
} as const;
export const ImageTypes = z.nativeEnum(imageTypes);
export type ImageTypes = z.infer<typeof ImageTypes>;