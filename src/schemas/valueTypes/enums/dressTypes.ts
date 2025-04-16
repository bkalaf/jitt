import { z } from "zod";
export const dressTypes = {
	"1-shoulder": "1-shoulder",
	"a-line": "a-line",
	"ball-gown": "ball-gown",
	"wrap-dress": "wrap-dress",
	"high-low": "high-low",
	"jumpsuit": "jumpsuit",
	"romper": "romper",
	"knee-length": "knee-length",
	"maxi": "maxi",
	"midi": "midi"
} as const;
export const dressTypesToImage = {
	"1-shoulder": "src/assets/images/enums/dressTypes/1-shoulder.png",
	"a-line": "src/assets/images/enums/dressTypes/a-line.png",
	"ball-gown": "src/assets/images/enums/dressTypes/ball-gown.png",
	"wrap-dress": "src/assets/images/enums/dressTypes/wrap-dress.png",
	"high-low": "",
	"jumpsuit": "src/assets/images/enums/dressTypes/jumper-dress.png",
	"romper": "",
	"knee-length": "",
	"maxi": "src/assets/images/enums/dressTypes/maxi.png",
	"midi": ""
} as const;
export const DressTypes = z.nativeEnum(dressTypes);
export type DressTypes = z.infer<typeof DressTypes>;