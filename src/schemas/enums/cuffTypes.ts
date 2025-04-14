import { z } from "zod";
export const cuffTypes = {
	"Angle Cut": "angle-cut",
	"French": "french",
	"Neapolitan": "neapolitan",
	"One Button": "one-button",
	"Rounded": "rounded",
	"Two Button": "two-button",
	"Barrel": "barrel",
	"Double": "double",
	"Ribbed": "ribbed",
	"Single": "single"
} as const;
export const cuffTypesToImage = {
    'angle-cut': 'src/assets/images/enums/cuffTypes/angle-cut.png',
    french: 'src/assets/images/enums/cuffTypes/french.png',
    neapolitan: 'src/assets/images/enums/cuffTypes/neapolitan.png',
    'one-button': 'src/assets/images/enums/cuffTypes/one-button.png',
    rounded: 'src/assets/images/enums/cuffTypes/rounded.png',
    'two-button': 'src/assets/images/enums/cuffTypes/two-button.png',
    barrel: '',
    double: '',
    ribbed: '',
    single: ''
} as const;
export const CuffTypes = z.nativeEnum(cuffTypes);
export type CuffTypes = z.infer<typeof CuffTypes>;