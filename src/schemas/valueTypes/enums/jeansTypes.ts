import { z } from "zod";
export const jeansTypes = {
	"501": "501",
	"505": "505",
	"508": "508",
	"510": "510",
	"511": "511",
	"513": "513",
	"514": "514",
	"517": "517",
	"527": "527",
	"550": "550",
	"559": "559",
	"560": "560",
	"562": "562",
	"569": "569"
} as const;
export const JeansTypes = z.nativeEnum(jeansTypes);
export type JeansTypes = z.infer<typeof JeansTypes>;