import { z } from "zod";
export const connectivity = {
	"Bluetooth": "bluetooth",
	"eSATA": "esata",
	"Ethernet": "ethernet",
	"Firewire": "firewire",
	"HDMI": "hdmi",
	"SATA": "sata",
	"USB": "usb"
} as const;
export const Connectivity = z.nativeEnum(connectivity);
export type Connectivity = z.infer<typeof Connectivity>;