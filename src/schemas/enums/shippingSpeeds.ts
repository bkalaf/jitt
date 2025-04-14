import { z } from "zod";
export const shippingSpeeds = {
	"media-mail": "media-mail",
	"standard": "standard"
} as const;
export const ShippingSpeeds = z.nativeEnum(shippingSpeeds);
export type ShippingSpeeds = z.infer<typeof ShippingSpeeds>;