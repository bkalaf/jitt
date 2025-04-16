import { z } from "zod";
export const nyTimesAwardCategories = {
	"Fiction": "fiction",
	"Non-Fiction": "nonfiction",
	"Children's Books": "childrens"
} as const;
export const nyTimesAwardCategoriesToGroup = {
	"fiction": ["ny-times"],
	"nonfiction": ["ny-times"],
	"childrens": ["ny-times"]
} as const;
export const NyTimesAwardCategories = z.nativeEnum(nyTimesAwardCategories);
export type NyTimesAwardCategories = z.infer<typeof NyTimesAwardCategories>;