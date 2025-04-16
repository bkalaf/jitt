import { z } from "zod";
export const wirelessConnectionTypes = {
	"Bluetooth": "bluetooth",
	"Infrared": "infrared",
	"NFC": "nfc",
	"Wi-Fi": "wifi"
} as const;
export const WirelessConnectionTypes = z.nativeEnum(wirelessConnectionTypes);
export type WirelessConnectionTypes = z.infer<typeof WirelessConnectionTypes>;