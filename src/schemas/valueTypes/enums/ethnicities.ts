import { z } from "zod";
export const ethnicities = {
	"Arab": "arab",
	"Jewish": "jewish",
	"Navajo": "navajo"
} as const;
export const Ethnicities = z.nativeEnum(ethnicities);
export type Ethnicities = z.infer<typeof Ethnicities>;