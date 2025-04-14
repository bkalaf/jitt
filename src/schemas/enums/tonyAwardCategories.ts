import { z } from "zod";
export const tonyAwardCategories = {
	"Best Play": "play",
	"Best Musical": "musical",
	"Best Choreography": "choreography",
	"Best Performance by a Leading Actor in a Play": "actor-play",
	"Best Performance by a Leading Actor in a Musical": "actor-musical",
	"Best Performance by a Leading Actor in a Play2": "featured-actor-play",
	"Best Performance by a Featured Actor in a Musical": "featured-actor-musical",
	"Best Performance by a Leading Actress in a Play": "actress-play",
	"Best Performance by a Leading Actress in a Musical": "actress-musical",
	"Best Performance by a Featured Actress in a Play": "featured-actress-play",
	"Best Performance by a Featured Actress in a Musical": "featured-actress-musical"
} as const;
export const tonyAwardCategoriesToGroup = {
	"play": ["tony"],
	"musical": ["tony"],
	"choreography": ["tony"],
	"actor-play": ["tony"],
	"actor-musical": ["tony"],
	"featured-actor-play": ["tony"],
	"featured-actor-musical": ["tony"],
	"actress-play": ["tony"],
	"actress-musical": ["tony"],
	"featured-actress-play": ["tony"],
	"featured-actress-musical": ["tony"]
} as const;
export const TonyAwardCategories = z.nativeEnum(tonyAwardCategories);
export type TonyAwardCategories = z.infer<typeof TonyAwardCategories>;