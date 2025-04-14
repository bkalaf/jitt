import { z } from "zod";
export const esrbRatings = {
	"E: Everyone": "E",
	"E10+: Everyone 10+": "E10+",
	"T: Teen": "T",
	"M: Mature 17+": "M",
	"AO: Adults Only 18+": "AO",
	"RP: Rating Pending": "RP",
	"RPLM: Rating Pending Likely Mature": "RPLM",
	"Not Rated": "NR"
} as const;
export const ESRBRatings = z.nativeEnum(esrbRatings);
export type ESRBRatings = z.infer<typeof ESRBRatings>;