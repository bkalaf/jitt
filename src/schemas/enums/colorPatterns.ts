import { z } from "zod";
export const colorPatterns = {
	"Polka Dot": "polka-dot",
	"Animal Print": "animal-print",
	"Stripes": "stripes,",
	"Plaid": "plaid",
	"Tie-Dye": "tie-dye",
	"Paisley": "paisley",
	"Chevron": "chevron",
	"Floral": "floral",
	"Geometric": "geometric",
	"Abstract": "abstract",
	"Earthy": "earthy"
} as const;
export const ColorPatterns = z.nativeEnum(colorPatterns);
export type ColorPatterns = z.infer<typeof ColorPatterns>;