import { z } from "zod";
export const shapeTypes = {
	"hexagon": "hexagon",
	"square": "square",
	"rectangle": "rectangle"
} as const;
export const ShapeTypes = z.nativeEnum(shapeTypes);
export type ShapeTypes = z.infer<typeof ShapeTypes>;