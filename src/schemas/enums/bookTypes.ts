import { z } from "zod";
export const bookTypes = {
	"hardback": "hb",
	"paperback": "pb",
	"boardbook": "bb",
	"textbook": "tb"
} as const;
export const BookTypes = z.nativeEnum(bookTypes);
export type BookTypes = z.infer<typeof BookTypes>;