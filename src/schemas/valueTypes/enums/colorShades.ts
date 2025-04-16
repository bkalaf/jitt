import { z } from "zod";
export const colorShades = {
	"Light": "light",
	"Dark": "dark"
} as const;
export const ColorShades = z.nativeEnum(colorShades);
export type ColorShades = z.infer<typeof ColorShades>;