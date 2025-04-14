import { z } from "zod";
export const meteringModes = {
	"Center-Weighted": "center-weighted",
	"Evaluative": "evaluative",
	"Spot": "spot"
} as const;
export const MeteringModes = z.nativeEnum(meteringModes);
export type MeteringModes = z.infer<typeof MeteringModes>;