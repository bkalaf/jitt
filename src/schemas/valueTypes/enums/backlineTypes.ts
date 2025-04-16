import { z } from "zod";
export const backlineTypes = {
	"bare": "bare",
	"bow": "bow",
	"open": "open",
	"strappy": "strappy",
	"u-shape": "u-shape",
	"v-shape": "v-shape",
	"x-cross": "x-cross"
} as const;
export const backlineTypesToImage = {
	"bare": "src/assets/images/enums/backlineTypes/bare.png",
	"bow": "src/assets/images/enums/backlineTypes/bow.png",
	"open": "src/assets/images/enums/backlineTypes/open.png",
	"strappy": "src/assets/images/enums/backlineTypes/strappy.png",
	"u-shape": "src/assets/images/enums/backlineTypes/u-shape.png",
	"v-shape": "src/assets/images/enums/backlineTypes/v-shape.png",
	"x-cross": "src/assets/images/enums/backlineTypes/x-cross.png"
} as const;
export const BacklineTypes = z.nativeEnum(backlineTypes);
export type BacklineTypes = z.infer<typeof BacklineTypes>;