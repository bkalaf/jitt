import { z } from "zod";
export const lensType = {
	"Fisheye": "fisheye",
	"Macro": "macro",
	"Telephoto": "telephoto",
	"Wide Angle": "wide-angle"
} as const;
export const LensType = z.nativeEnum(lensType);
export type LensType = z.infer<typeof LensType>;