import { z } from "zod";
export const mediaTypes = {
	"Book": "book",
	"Album": "album",
	"Film": "film",
	"Video Game": "video-game",
	"TV Series": "tv-series",
	"": ""
} as const;
export const MediaTypes = z.nativeEnum(mediaTypes);
export type MediaTypes = z.infer<typeof MediaTypes>;