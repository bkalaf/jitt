import { z } from "zod";
export const fabricTypes = {
	"": "",
	"corduroy": "corduroy",
	"fur": "fur",
	"faux-fur": "faux-fur",
	"faux-leather": "faux-leather",
	"metallic": "metallic",
	"acrylic": "acrylic",
	"cashmere": "cashmere",
	"cotton": "cotton",
	"denim": "denim",
	"lace": "lace",
	"leather": "leather",
	"linen": "linen",
	"modal": "modal",
	"nylon": "nylon",
	"organicCotton": "organicCotton",
	"polyester": "polyester",
	"rayon": "rayon",
	"satin": "satin",
	"silk": "silk",
	"spandex": "spandex",
	"suede": "suede",
	"velvet": "velvet",
	"viscose": "viscose",
	"wool": "wool"
} as const;
export const FabricTypes = z.nativeEnum(fabricTypes);
export type FabricTypes = z.infer<typeof FabricTypes>;