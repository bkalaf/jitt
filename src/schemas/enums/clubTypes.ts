import { z } from "zod";
export const clubTypes = {
	"iron": "iron",
	"driver": "driver",
	"putter": "putter",
	"wedge": "wedge"
} as const;
export const ClubTypes = z.nativeEnum(clubTypes);
export type ClubTypes = z.infer<typeof ClubTypes>;