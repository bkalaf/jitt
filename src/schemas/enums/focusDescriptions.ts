import { z } from "zod";
export const focusDescriptions = {
	"Active": "active",
	"Hybrid": "hybrid",
	"Passive": "passive"
} as const;
export const FocusDescriptions = z.nativeEnum(focusDescriptions);
export type FocusDescriptions = z.infer<typeof FocusDescriptions>;