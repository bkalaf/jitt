import { z } from "zod";
export const driveTypes = {
	"Internal": "int",
	"External": "ext"
} as const;
export const DriveTypes = z.nativeEnum(driveTypes);
export type DriveTypes = z.infer<typeof DriveTypes>;