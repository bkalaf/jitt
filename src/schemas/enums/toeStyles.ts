import { z } from "zod";
export const toeStyles = {
	"almond": "almond",
	"keyhole": "keyhole",
	"open": "open",
	"peep": "peep",
	"pointed": "pointed",
	"round": "round",
	"square": "square",
	"bump toe": "bump",
	"cap toe": "cap",
	"closed toe": "closed",
	"composite toe": "composite",
	"moc toe": "moc",
	"plain toe": "plain",
	"split toe": "split",
	"steel toe": "steel"
} as const;
export const toeStylesToImage = {
	"almond": "src/assets/images/enums/toeStyles/almond.png",
	"keyhole": "src/assets/images/enums/toeStyles/keyhole.png",
	"open": "src/assets/images/enums/toeStyles/open.png",
	"peep": "src/assets/images/enums/toeStyles/peep.png",
	"pointed": "src/assets/images/enums/toeStyles/point.png",
	"round": "src/assets/images/enums/toeStyles/round.png",
	"square": "src/assets/images/enums/toeStyles/square.png",
	"bump": "",
	"cap": "",
	"closed": "",
	"composite": "",
	"moc": "",
	"plain": "",
	"split": "",
	"steel": ""
} as const;
export const ToeStyles = z.nativeEnum(toeStyles);
export type ToeStyles = z.infer<typeof ToeStyles>;