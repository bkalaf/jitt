import { z } from "zod";
export const personRoles = {
	"Writer/Author": "WRITER",
	"Illustrator": "ILLUSTRATOR",
	"Director": "DIRECTOR",
	"Actor/Actress": "ACTOR",
	"Artist": "ARTIST",
	"Athlete": "ATHLETE",
	"Celebrity": "CELEBRITY",
	"Historical Figure": "HISTORICAL",
	"Fictional Character": "FICTIONAL"
} as const;
export const personRolesToGroup = {
	"writer": ["movie","tvSeries","book","music"],
	"illustrator": ["book"],
	"director": ["movie","tvSeries"],
	"actor": ["movie","tvSeries"],
	"artist": ["music"],
	"athlete": [],
	"celebrity": [],
	"character": []
} as const;
export const PersonRoles = z.nativeEnum(personRoles);
export type PersonRoles = z.infer<typeof PersonRoles>;