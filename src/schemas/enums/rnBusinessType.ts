import { z } from "zod";
export const rnBusinessType = {
	"IMPORTER": "importer",
	"UNKNOWN": "unknown",
	"MANUFACTURING": "manufacturing",
	"WHOLESALER": "wholesaler",
	"MAIL ORDER": "mail-order"
} as const;
export const RnBusinessType = z.nativeEnum(rnBusinessType);
export type RnBusinessType = z.infer<typeof RnBusinessType>;