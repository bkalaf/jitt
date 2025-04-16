import { z } from "zod";
export const sleeveTypes = {
	"Balloon": "balloon",
	"Batwing": "batwing",
	"Bell": "bell",
	"Bishop": "bishop",
	"Bracelet": "bracelet",
	"Butterfly": "butterfly",
	"Button Tab": "button-tab",
	"Cap": "cap",
	"Cape": "cape",
	"Circular Cap": "circular-cap",
	"Cold Shoulder": "cold-shoulder",
	"Cowl": "cowl",
	"Cuff": "cuff",
	"Drop Shoulder": "drop-shoulder",
	"Flutter": "flutter",
	"French": "french",
	"Juliet": "juliet",
	"Kimono": "kimono",
	"Lantern": "lantern",
	"Layered": "layered",
	"Leg Of Mutton": "leg-of-mutton",
	"Peasant": "peasant",
	"Petal": "petal",
	"Poet": "poet",
	"Puffed": "puffed",
	"Raglan": "raglan",
	"Ruffle": "ruffle",
	"Shirt": "shirt",
	"Split": "split"
} as const;
export const SleeveTypes = z.nativeEnum(sleeveTypes);
export type SleeveTypes = z.infer<typeof SleeveTypes>;