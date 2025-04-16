import { z } from "zod";
export const shoeHeelTypes = {
	"chunky": "chunky",
	"cone": "cone",
	"cuban": "cuban",
	"curved": "curved",
	"flared": "flared",
	"italian": "italian",
	"kitten": "kitten",
	"luigi-xv": "luigi-xv",
	"spool": "spool",
	"stiletto": "stiletto",
	"wedge": "wedge",
	"block": "block",
	"platform": "platform"
} as const;
export const shoeHeelTypesToImage = {
	"chunky": "src/assets/images/enums/heelTypes/chunky.png",
	"cone": "src/assets/images/enums/heelTypes/cone.png",
	"cuban": "src/assets/images/enums/heelTypes/cuban.png",
	"curved": "src/assets/images/enums/heelTypes/curved.png",
	"flared": "src/assets/images/enums/heelTypes/flared.png",
	"italian": "src/assets/images/enums/heelTypes/italian.png",
	"kitten": "src/assets/images/enums/heelTypes/kitten.png",
	"luigi-xv": "src/assets/images/enums/heelTypes/luigi-xv.png",
	"spool": "src/assets/images/enums/heelTypes/spool.png",
	"stiletto": "src/assets/images/enums/heelTypes/stiletto.png",
	"wedge": "src/assets/images/enums/heelTypes/wedge.png",
	"block": "",
	"platform": ""
} as const;
export const ShoeHeelTypes = z.nativeEnum(shoeHeelTypes);
export type ShoeHeelTypes = z.infer<typeof ShoeHeelTypes>;