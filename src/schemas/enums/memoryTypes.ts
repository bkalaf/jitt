import { z } from "zod";
export const memoryTypes = {
	"DDR": "ddr",
	"DDR2": "ddr2",
	"DDR3": "ddr3",
	"DDR4": "ddr4",
	"DDR5": "ddr5"
} as const;
export const MemoryTypes = z.nativeEnum(memoryTypes);
export type MemoryTypes = z.infer<typeof MemoryTypes>;