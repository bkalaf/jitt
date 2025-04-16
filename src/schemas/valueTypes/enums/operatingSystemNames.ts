import { z } from "zod";
export const operatingSystemNames = {
	"unknown": "unknown",
	"Android": "android",
	"iOS": "ios",
	"Blackberry": "blackberry",
	"Linux": "linux",
	"Nucleus OS": "nucleus",
	"Symbian": "symbian",
	"macOS": "macOS",
	"Amazon Fire": "fire",
	"Windows": "windows"
} as const;
export const OperatingSystemNames = z.nativeEnum(operatingSystemNames);
export type OperatingSystemNames = z.infer<typeof OperatingSystemNames>;