import { z } from "zod";
export const shippers = {
	"USPS Ground Advantage": "usps-ground",
	"USPS Media Mail": "usps-media",
	"UPS SurePost": "ups-surepost",
	"FedEx Ground Economy": "fedex-ground",
	"UPS Ground": "ups-ground",
	"FedEx Home": "fedex-home"
} as const;
export const Shippers = z.nativeEnum(shippers);
export type Shippers = z.infer<typeof Shippers>;