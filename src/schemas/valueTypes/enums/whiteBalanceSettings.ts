import { z } from "zod";
export const whiteBalanceSettings = {
	"Auto": "auto",
	"Cloudy": "cloudy",
	"Custom": "custom",
	"Daylight": "daylight",
	"Flash torch": "flash-torch",
	"Fluorescent": "fluorescent",
	"Shade": "shade"
} as const;
export const WhiteBalanceSettings = z.nativeEnum(whiteBalanceSettings);
export type WhiteBalanceSettings = z.infer<typeof WhiteBalanceSettings>;