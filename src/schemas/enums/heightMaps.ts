import { z } from "zod";
export const heightMaps = {
	"high-top": "high-top",
	"low-top": "low-top",
	"mid-top": "mid-top"
} as const;
export const HeightMaps = z.nativeEnum(heightMaps);
export type HeightMaps = z.infer<typeof HeightMaps>;