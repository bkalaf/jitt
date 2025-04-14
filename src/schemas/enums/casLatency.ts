import { z } from "zod";
export const casLatency = {
	"CL6": "CL6",
	"CL36": "CL36",
	"CL38": "CL38",
	"CL22": "CL22",
	"CL3": "CL3",
	"CL19": "CL19",
	"CL18": "CL18",
	"CL17": "CL17",
	"CL15": "CL15",
	"CL11": "CL11",
	"CL16": "CL16",
	"CL7": "CL7",
	"CL9": "CL9",
	"CL40": "CL40",
	"CL42": "CL42"
} as const;
export const CasLatency = z.nativeEnum(casLatency);
export type CasLatency = z.infer<typeof CasLatency>;