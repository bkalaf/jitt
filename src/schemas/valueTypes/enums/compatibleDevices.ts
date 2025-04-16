import { z } from "zod";
export const compatibleDevices = {
	"Desktop Computers": "desktop-computers",
	"Laptop Computers": "laptop-computers",
	"Smart Phones": "smart-phones",
	"Tablets": "tablet",
	"E-Readers": "e-readers"
} as const;
export const CompatibleDevices = z.nativeEnum(compatibleDevices);
export type CompatibleDevices = z.infer<typeof CompatibleDevices>;