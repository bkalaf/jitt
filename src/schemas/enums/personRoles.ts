import { z } from "zod";
export const personRoles = {
	"Writer/Author": "writer",
	"Illustrator": "illustrator",
	"Director": "director",
	"Actor/Actress": "actor",
	"Artist": "artist",
	"Athlete": "athlete",
	"Celebrity": "celebrity",
	"Character": "character"
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