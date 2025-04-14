import { z } from "zod";
export const flexTypes = {
	"ladies": "ladies",
	"regular": "regular",
	"senior": "senior",
	"stiff": "stiff"
} as const;
export const FlexTypes = z.nativeEnum(flexTypes);
export type FlexTypes = z.infer<typeof FlexTypes>;