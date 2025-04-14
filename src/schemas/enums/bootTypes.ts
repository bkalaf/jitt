import { z } from "zod";
export const bootTypes = {
	"ankle & bootie": "ankle & bootie",
	"mid-calf": "mid-calf",
	"knee-high": "knee-high",
	"over-the-knee": "over-the-knee"
} as const;
export const BootTypes = z.nativeEnum(bootTypes);
export type BootTypes = z.infer<typeof BootTypes>;