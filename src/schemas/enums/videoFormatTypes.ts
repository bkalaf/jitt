import { z } from "zod";
export const videoFormatTypes = {
	"DVD": "dvd",
	"Blu-Ray": "blu-ray",
	"VHS": "vhs"
} as const;
export const VideoFormatTypes = z.nativeEnum(videoFormatTypes);
export type VideoFormatTypes = z.infer<typeof VideoFormatTypes>;