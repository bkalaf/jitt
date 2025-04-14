import { z } from "zod";
export const tvRatings = {
	"TV-Y": "TV-Y",
	"TV-Y7": "TV-Y7",
	"TV-Y7-FV": "TV-Y7-FV",
	"TV-G": "TV-G",
	"TV-PG": "TV-PG",
	"TV-14": "TV-14",
	"TV-MA": "TV-MA",
	"Not Rated": "Not Rated"
} as const;
export const TvRatings = z.nativeEnum(tvRatings);
export type TvRatings = z.infer<typeof TvRatings>;