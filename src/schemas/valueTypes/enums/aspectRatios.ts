import { z } from "zod";
export const aspectRatios = {
	"16:10": "16:10",
	"16:9": "16:9",
	"4:3": "4:3",
	"5:3": "5:3",
	"5:4": "5:4"
} as const;
export const AspectRatios = z.nativeEnum(aspectRatios);
export type AspectRatios = z.infer<typeof AspectRatios>;