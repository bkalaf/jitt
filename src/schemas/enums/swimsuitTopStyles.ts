import { z } from "zod";
export const swimsuitTopStyles = {
	"bandeau": "bandeau",
	"bow": "bow",
	"boyshorts": "boyshorts",
	"bra": "bra",
	"flounced": "flounced",
	"halter": "halter",
	"plunge": "plunge",
	"tankini": "tankini",
	"triangle": "triangle",
	"twisted-bandeau": "twisted-bandeau",
	"v-wire": "v-wire",
	"one-shoulder": "one-shoulder",
	"racerback & crossback": "racerback & crossback",
	"underwire": "underwire"
} as const;
export const swimsuitTopStylesToImage = {
	"bandeau": "src/assets/images/enums/swimsuitTopStyles/bandeau.png",
	"bow": "src/assets/images/enums/swimsuitTopStyles/bow.png",
	"boyshorts": "src/assets/images/enums/swimsuitTopStyles/boyshorts.png",
	"bra": "src/assets/images/enums/swimsuitTopStyles/bra.png",
	"flounced": "src/assets/images/enums/swimsuitTopStyles/flounced.png",
	"halter": "src/assets/images/enums/swimsuitTopStyles/halter.png",
	"plunge": "src/assets/images/enums/swimsuitTopStyles/plunge.png",
	"tankini": "src/assets/images/enums/swimsuitTopStyles/tankini.png",
	"triangle": "src/assets/images/enums/swimsuitTopStyles/triangle.png",
	"twisted-bandeau": "src/assets/images/enums/swimsuitTopStyles/twisted-bandeau.png",
	"v-wire": "src/assets/images/enums/swimsuitTopStyles/v-wire.png",
	"one-shoulder": "",
	"racerback & crossback": "",
	"underwire": ""
} as const;
export const SwimsuitTopStyles = z.nativeEnum(swimsuitTopStyles);
export type SwimsuitTopStyles = z.infer<typeof SwimsuitTopStyles>;