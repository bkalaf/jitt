import { z } from "zod";
export const zoomTypes = {
	"Digital Zoom": "digital",
	"Extended Optical Zoom": "ext-optical",
	"Optical Zoom": "optical"
} as const;
export const ZoomTypes = z.nativeEnum(zoomTypes);
export type ZoomTypes = z.infer<typeof ZoomTypes>;