import { z } from "zod";
export const skillLevels = {
	"Amateur": "amateur",
	"Novice": "novice",
	"Professional": "professional"
} as const;
export const SkillLevels = z.nativeEnum(skillLevels);
export type SkillLevels = z.infer<typeof SkillLevels>;