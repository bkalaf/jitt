import { z } from "zod";
export const collarTypes = {
	"button-down": "button-down",
	"classic": "classic",
	"club": "club",
	"mandarin": "mandarin",
	"spread": "spread",
	"wing-tip": "wing-tip",
	"band-collar": "band",
	"camp-collar": "camp",
	"collarless": "collarless",
	"cutaway-collar": "cutaway",
	"hidden-button-down-collar": "hidden-button-down",
	"lapel-collar": "lapel",
	"point-collar": "point",
	"tab-collar": "tab"
} as const;
export const collarTypesToImage = {
	"button-down": "src/assets/images/enums/collarTypes/button-down.png",
	"classic": "src/assets/images/enums/collarTypes/classic.png",
	"club": "src/assets/images/enums/collarTypes/club.png",
	"mandarin": "src/assets/images/enums/collarTypes/mandarin.png",
	"spread": "src/assets/images/enums/collarTypes/spread.png",
	"wing-tip": "src/assets/images/enums/collarTypes/wing-tip.png",
	"band": "",
	"camp": "",
	"collarless": "",
	"cutaway": "",
	"hidden-button-down": "",
	"lapel": "",
	"point": "",
	"tab": ""
} as const;
export const CollarTypes = z.nativeEnum(collarTypes);
export type CollarTypes = z.infer<typeof CollarTypes>;