import { z } from "zod";
export const fitTypes = {
	"Athletic": "athletic",
	"Classic": "classic",
	"Fitted": "fitted",
	"Baggy/Loose": "loose",
	"Modern": "modern",
	"Oversized": "oversized",
	"Regular": "regular",
	"Relaxed": "relaxed",
	"Skinny": "skinny",
	"Slim": "slim",
	"Snug": "snug",
	"Straight": "straight",
	"Tailored": "tailored",
	"Wide": "wide"
} as const;
export const FitTypes = z.nativeEnum(fitTypes);
export type FitTypes = z.infer<typeof FitTypes>;