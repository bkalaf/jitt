import { z } from "zod";
export const braTypes = {
	"bralette": "bralette",
	"bullet": "bullet",
	"plunge": "plunge",
	"push-up": "push-up",
	"soft-cup": "soft-cup",
	"sport": "sport",
	"strapless": "strapless",
	"triangle": "triangle",
	"underwire": "underwire"
} as const;
export const braTypesToImage = {
	"bralette": "src/assets/images/enums/braTypes/bralette.png",
	"bullet": "src/assets/images/enums/braTypes/bullet.png",
	"plunge": "src/assets/images/enums/braTypes/plunge.png",
	"push-up": "src/assets/images/enums/braTypes/push-up.png",
	"soft-cup": "src/assets/images/enums/braTypes/soft-cup.png",
	"sport": "src/assets/images/enums/braTypes/sport.png",
	"strapless": "src/assets/images/enums/braTypes/strapless.png",
	"triangle": "src/assets/images/enums/braTypes/triangle.png",
	"underwire": "src/assets/images/enums/braTypes/underwire.png"
} as const;
export const BraTypes = z.nativeEnum(braTypes);
export type BraTypes = z.infer<typeof BraTypes>;