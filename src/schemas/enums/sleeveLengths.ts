import { z } from "zod";
export const sleeveLengths = {
	"Half": "half",
	"Long": "long",
	"Quarter": "quarter",
	"Short": "short",
	"Sleeveless": "sleeveless",
	"Three-Quarter": "three-quarter"
} as const;
export const SleeveLengths = z.nativeEnum(sleeveLengths);
export type SleeveLengths = z.infer<typeof SleeveLengths>;