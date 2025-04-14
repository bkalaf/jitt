import { z } from "zod";
export const decades = {
	"1930s": "1930s",
	"1940s": "1940s",
	"1950s": "1950s",
	"1960s": "1960s",
	"1970s": "1970s",
	"1980s": "1980s",
	"1990s": "1990s",
	"2000s": "2000s",
	"2010s": "2010s",
	"2020s": "2020s"
} as const;
export const Decades = z.nativeEnum(decades);
export type Decades = z.infer<typeof Decades>;