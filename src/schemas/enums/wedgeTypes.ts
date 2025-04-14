import { z } from "zod";
export const wedgeTypes = {
	"pitching wedge": "PW",
	"approach wedge": "AW",
	"sand wedge": "SW",
	"lob wedge": "LW"
} as const;
export const WedgeTypes = z.nativeEnum(wedgeTypes);
export type WedgeTypes = z.infer<typeof WedgeTypes>;