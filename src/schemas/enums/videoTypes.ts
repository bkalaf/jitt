import { z } from "zod";
export const videoTypes = {
	"tv-show": "tv-show",
	"film": "film"
} as const;
export const VideoTypes = z.nativeEnum(videoTypes);
export type VideoTypes = z.infer<typeof VideoTypes>;