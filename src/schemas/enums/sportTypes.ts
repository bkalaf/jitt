import { z } from "zod";
export const sportTypes = {
	"Hockey": "hockey",
	"Baseball": "baseball",
	"Basketball": "basketball",
	"Bowling": "bowling",
	"Crossfit": "crossfit",
	"Cycling": "cycling",
	"Football": "football",
	"Golf": "golf",
	"Hiking": "hiking",
	"Running": "running",
	"Skateboarding": "skateboarding",
	"Soccer": "soccer",
	"Tennis": "tennis",
	"Walking": "walking",
	"Boxing": "boxing",
	"Cross-Country": "cross-country",
	"skiing": "skiing",
	"Yoga": "yoga",
	"Gymnastics": "gymnastics"
} as const;
export const SportTypes = z.nativeEnum(sportTypes);
export type SportTypes = z.infer<typeof SportTypes>;