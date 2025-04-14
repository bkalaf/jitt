import { z } from "zod";
export const cuffTypes = {
	"angle-cut": "angle-cut",
	"french": "french",
	"neapolitan": "neapolitan",
	"one-button": "one-button",
	"rounded": "rounded",
	"two-button": "two-button",
	"barrel-cuff": "barrel",
	"double-cuff": "double",
	"ribbed-cuff": "ribbed",
	"single-cuff": "single"
} as const;
export const cuffTypesToImage = {
	"angle-cut": "src/assets/images/enums/cuffTypes/angle-cut.png",
	"french": "src/assets/images/enums/cuffTypes/french.png",
	"neapolitan": "src/assets/images/enums/cuffTypes/neapolitan.png",
	"one-button": "src/assets/images/enums/cuffTypes/one-button.png",
	"rounded": "src/assets/images/enums/cuffTypes/rounded.png",
	"two-button": "src/assets/images/enums/cuffTypes/two-button.png",
	"barrel": "",
	"double": "",
	"ribbed": "",
	"single": ""
} as const;
export const CuffTypes = z.nativeEnum(cuffTypes);
export type CuffTypes = z.infer<typeof CuffTypes>;