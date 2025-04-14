import { z } from "zod";
export const awardNames = {
	"Academy Award (Oscar)": "oscar",
	"Emmy Award": "emmy",
	"Tony Award": "tony",
	"Pulitzer Prize": "pulitzer",
	"Grammy Award": "grammy",
	"Hugo Award": "hugo",
	"New York Times Bestseller List": "ny-times"
} as const;
export const AwardNames = z.nativeEnum(awardNames);
export type AwardNames = z.infer<typeof AwardNames>;