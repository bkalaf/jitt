import { z } from "zod";
export const sleepwearTypes = {
	"nightgowns": "nightgowns",
	"sleep-shirt": "sleep-shirt",
	"pajamas": "pajamas",
	"pajama-top": "pajama-top",
	"pajama-bottom": "pajama-bottom",
	"robe": "robe",
	"chemise": "chemise",
	"duster": "duster",
	"negligee": "negligee",
	"teddy": "teddy"
} as const;
export const sleepwearTypesToImage = {
	"nightgowns": "src/assets/images/enums/sleepwearType/ruffle-nightgown.png",
	"sleep-shirt": "src/assets/images/enums/sleepwearType/nightshirt.png",
	"pajamas": "src/assets/images/enums/sleepwearType/pajamas.png",
	"pajama-top": "",
	"pajama-bottom": "",
	"robe": "src/assets/images/enums/sleepwearType/basic-robe.png",
	"chemise": "src/assets/images/enums/sleepwearType/chemise.png",
	"duster": "src/assets/images/enums/sleepwearType/duster.png",
	"negligee": "src/assets/images/enums/sleepwearType/negligee.png",
	"teddy": "src/assets/images/enums/sleepwearType/teddy.png"
} as const;
export const SleepwearTypes = z.nativeEnum(sleepwearTypes);
export type SleepwearTypes = z.infer<typeof SleepwearTypes>;