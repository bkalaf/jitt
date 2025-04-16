import { z } from "zod";
export const coverstocks = {
	"Reactive Resin": "reactive-resin"
} as const;
export const Coverstocks = z.nativeEnum(coverstocks);
export type Coverstocks = z.infer<typeof Coverstocks>;