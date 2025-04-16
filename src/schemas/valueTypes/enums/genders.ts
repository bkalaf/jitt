import { z } from "zod";
export const genders = {
	"Men's": "mens",
	"Women's": "womens",
	"Boy's": "boys",
	"Girl's": "girls",
	"Unisex": "unisex",
	"": ""
} as const;
export const gendersToRegex = {
	"mens": "(?<!wo)(men|man)|(?<!fe)male",
	"womens": "woman|women|female",
	"boys": "boy",
	"girls": "girl",
	"unisex": "unisex",
	"": ""
} as const;
export const Genders = z.nativeEnum(genders);
export type Genders = z.infer<typeof Genders>;