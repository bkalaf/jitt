import { z } from "zod";
export const ironTypes = {
	"3": "3",
	"4": "4",
	"5": "5",
	"6": "6",
	"7": "7",
	"8": "8",
	"9": "9"
} as const;
export const IronTypes = z.nativeEnum(ironTypes);
export type IronTypes = z.infer<typeof IronTypes>;