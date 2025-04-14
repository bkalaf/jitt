import { z } from "zod";
export const occasionTypes = {
	"": ""
} as const;
export const OccasionTypes = z.nativeEnum(occasionTypes);
export type OccasionTypes = z.infer<typeof OccasionTypes>;