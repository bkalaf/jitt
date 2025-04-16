import { z } from "zod";
export const payorTypes = {
	"buyer": "buyer",
	"seller": "seller"
} as const;
export const PayorTypes = z.nativeEnum(payorTypes);
export type PayorTypes = z.infer<typeof PayorTypes>;