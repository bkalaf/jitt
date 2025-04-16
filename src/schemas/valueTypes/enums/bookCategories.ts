import { z } from "zod";
export const bookCategories = {
	"Fiction": "fiction",
	"Non-Fiction": "non-fiction",
	"Reference": "reference",
	"": ""
} as const;
export const bookCategoriesToRegex = {
	"fiction": "(?<!non)fiction",
	"non-fiction": "nonfiction",
	"reference": "reference"
} as const;
export const BookCategories = z.nativeEnum(bookCategories);
export type BookCategories = z.infer<typeof BookCategories>;