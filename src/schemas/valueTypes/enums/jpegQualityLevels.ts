import { z } from "zod";
export const jpegQualityLevels = {
	"Basic": "basic",
	"Fine": "fine",
	"Normal": "normal"
} as const;
export const JpegQualityLevels = z.nativeEnum(jpegQualityLevels);
export type JpegQualityLevels = z.infer<typeof JpegQualityLevels>;