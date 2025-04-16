import { z } from "zod";
export const cellPhoneFormFactors = {
	"": ""
} as const;
export const CellPhoneFormFactors = z.nativeEnum(cellPhoneFormFactors);
export type CellPhoneFormFactors = z.infer<typeof CellPhoneFormFactors>;