import { z } from "zod";
export const calendar = {
	"": ""
} as const;
export const Calendar = z.nativeEnum(calendar);
export type Calendar = z.infer<typeof Calendar>;