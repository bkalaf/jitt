import { z } from "zod";
export const networks = {
	"ABC": "abc",
	"CBS": "cbs",
	"NBC": "nbc",
	"WB": "wb",
	"HBO": "hbo",
	"Showtime": "showtime",
	"FOX": "fox",
	"Netflix": "netflix"
} as const;
export const Networks = z.nativeEnum(networks);
export type Networks = z.infer<typeof Networks>;