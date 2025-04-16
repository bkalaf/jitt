import { z } from "zod";
export const cameraConnectionTypes = {
	"Ethernet": "ethernet",
	"HDMI": "hdmi",
	"Micro HDMI": "micro-hdmi",
	"Micro USB": "micro-usb",
	"USB": "usb"
} as const;
export const CameraConnectionTypes = z.nativeEnum(cameraConnectionTypes);
export type CameraConnectionTypes = z.infer<typeof CameraConnectionTypes>;