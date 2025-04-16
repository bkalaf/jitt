import { z } from "zod";
export const driveFormFactors = {
	"2.5 inch": "2.5",
	"3.5 inch": "3.5"
} as const;
export const DriveFormFactors = z.nativeEnum(driveFormFactors);
export type DriveFormFactors = z.infer<typeof DriveFormFactors>;