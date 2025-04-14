import { z } from "zod";
export const cellularTechnology = {
	"": ""
} as const;
export const CellularTechnology = z.nativeEnum(cellularTechnology);
export type CellularTechnology = z.infer<typeof CellularTechnology>;