import { z } from "zod";
export const lifestyleTypes = {
	"Business": "business",
	"Business-Casual": "business-casual",
	"Casual": "casual",
	"Club": "club",
	"Comfort": "comfort",
	"Dress": "dress",
	"Evening": "evening",
	"Formal": "formal"
} as const;
export const lifestyleTypesToRegex = {
	"business": "business(?!casual).*",
	"business-casual": "businesscasual.*",
	"casual": "(?<!business)casual.*",
	"club": "club.*",
	"comfort": "comfort.*",
	"dress": "dressy.*",
	"evening": "evening.*",
	"formal": "formal.*"
} as const;
export const LifestyleTypes = z.nativeEnum(lifestyleTypes);
export type LifestyleTypes = z.infer<typeof LifestyleTypes>;