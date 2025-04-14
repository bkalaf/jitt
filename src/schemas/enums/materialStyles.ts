import { z } from "zod";
export const materialStyles = {
	"Chinos": "chinos",
	"Curduroys": "corduroys",
	"Denim": "denim",
	"Khakis": "khakis",
	"Leather": "leather",
	"Linen": "linen"
} as const;
export const materialStylesToRegex = {
	"chinos": "chino",
	"corduroys": "corduroy",
	"denim": "denim",
	"khakis": "khaki",
	"leather": "leather",
	"linen": "linen"
} as const;
export const MaterialStyles = z.nativeEnum(materialStyles);
export type MaterialStyles = z.infer<typeof MaterialStyles>;