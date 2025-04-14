import { z } from "zod";
export const focusTypes = {
	"Auto Focus": "auto",
	"Fixed Focus": "fixed",
	"Manual Focus": "manual"
} as const;
export const FocusTypes = z.nativeEnum(focusTypes);
export type FocusTypes = z.infer<typeof FocusTypes>;