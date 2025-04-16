import { z } from "zod";
export const awardStatus = {
	"unclear": "unclear",
	"won": "won",
	"nominated": "nominated"
} as const;
export const AwardStatus = z.nativeEnum(awardStatus);
export type AwardStatus = z.infer<typeof AwardStatus>;