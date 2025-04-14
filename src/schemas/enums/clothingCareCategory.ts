import { z } from "zod";
export const clothingCareCategory = {
	"": ""
} as const;
export const ClothingCareCategory = z.nativeEnum(clothingCareCategory);
export type ClothingCareCategory = z.infer<typeof ClothingCareCategory>;