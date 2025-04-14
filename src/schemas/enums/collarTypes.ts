import { z } from "zod";
export const collarTypes = {
	"Button Down": "button-down",
	"Classic": "classic",
	"Club": "club",
	"Mandarin": "mandarin",
	"Spread": "spread",
	"Wing Tip": "wing-tip",
	"Band": "band",
	"Camp": "camp",
	"Collarless": "collarless",
	"Cutaway": "cutaway",
	"Hidden Button Down": "hidden-button-down",
	"Lapel": "lapel",
	"Point": "point",
	"Tab": "tab"
} as const;
export const collarTypesToImage = {
    'button-down': 'src/assets/images/enums/collarTypes/button-down.png',
    classic: 'src/assets/images/enums/collarTypes/classic.png',
    club: 'src/assets/images/enums/collarTypes/club.png',
    mandarin: 'src/assets/images/enums/collarTypes/mandarin.png',
    spread: 'src/assets/images/enums/collarTypes/spread.png',
    'wing-tip': 'src/assets/images/enums/collarTypes/wing-tip.png',
    band: '',
    camp: '',
    collarless: '',
    cutaway: '',
    'hidden-button-down': '',
    lapel: '',
    point: '',
    tab: ''
} as const;
export const CollarTypes = z.nativeEnum(collarTypes);
export type CollarTypes = z.infer<typeof CollarTypes>;