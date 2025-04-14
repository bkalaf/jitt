import { z } from "zod";
export const viewfinderTypes = {
	"Optical": "optical",
	"LCD": "lcd"
} as const;
export const ViewfinderTypes = z.nativeEnum(viewfinderTypes);
export type ViewfinderTypes = z.infer<typeof ViewfinderTypes>;