import { z } from "zod";
export const collectionTypes = {
	"Set": "set",
	"List": "list",
	"Dictionary": "dictionary"
} as const;
export const CollectionTypes = z.nativeEnum(collectionTypes);
export type CollectionTypes = z.infer<typeof CollectionTypes>;