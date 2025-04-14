import { z } from "zod";
export const rnCompanyType = {
	"OTHER": "other",
	"CORPORATION": "corporation"
} as const;
export const RnCompanyType = z.nativeEnum(rnCompanyType);
export type RnCompanyType = z.infer<typeof RnCompanyType>;