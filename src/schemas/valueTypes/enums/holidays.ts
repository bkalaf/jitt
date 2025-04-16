import { z } from "zod";
export const holidays = {
	"All Hallows Eve": "all-hallows-eve",
	"Birthday": "birthday",
	"Christmas": "christmas",
	"Cinco De Mayo": "cinco-de-mayo",
	"Easter": "easter",
	"Fathers Day": "fathers-day",
	"Fourth Of July": "fourth-of-july",
	"Halloween": "halloween",
	"Hanukkah": "hanukkah",
	"Mothers Day": "mothers-day",
	"New Years Eve": "new-years-eve",
	"Passover": "passover",
	"St Patricks Day": "st-patricks-day",
	"Thanksgiving": "thanksgiving",
	"Valentines Day": "valentines-day",
	"Mardi Gras": "mardi-gras"
} as const;
export const Holidays = z.nativeEnum(holidays);
export type Holidays = z.infer<typeof Holidays>;