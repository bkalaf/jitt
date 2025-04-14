import { z } from "zod";
export const batteryTypes = {
	"AA": "AA",
	"AAA": "AAA",
	"AAAA": "AAAA",
	"C": "C",
	"D": "D",
	"CR2032": "CR2032",
	"9V": "9V",
	"lithium-ion": "li-ion"
} as const;
export const BatteryTypes = z.nativeEnum(batteryTypes);
export type BatteryTypes = z.infer<typeof BatteryTypes>;