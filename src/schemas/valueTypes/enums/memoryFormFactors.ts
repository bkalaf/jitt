import { z } from "zod";
export const memoryFormFactors = {
	"DIMM": "dimm",
	"RDIMM": "rdimm",
	"SODIMM": "sodimm"
} as const;
export const MemoryFormFactors = z.nativeEnum(memoryFormFactors);
export type MemoryFormFactors = z.infer<typeof MemoryFormFactors>;