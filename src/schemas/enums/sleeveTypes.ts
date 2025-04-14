import { z } from "zod";
export const sleeveTypes = {
	"Balloon Sleeves": "balloon",
	"Batwing Sleeves": "batwing",
	"Bell Sleeves": "bell",
	"Bishop Sleeves": "bishop",
	"Bracelet Sleeves": "bracelet",
	"Butterfly Sleeves": "butterfly",
	"Button Tab Sleeves": "button-tab",
	"Cap Sleeves": "cap",
	"Cape Sleeves": "cape",
	"Circular Cap Sleeves": "circular-cap",
	"Cold Shoulder Sleeves": "cold-shoulder",
	"Cowl Sleeves": "cowl",
	"Cuff Sleeves": "cuff",
	"Drop Shoulder Sleeves": "drop-shoulder",
	"Flutter Sleeves": "flutter",
	"French Sleeves": "french",
	"Juliet Sleeves": "juliet",
	"Kimono Sleeves": "kimono",
	"Lantern Sleeves": "lantern",
	"Layered Sleeves": "layered",
	"Leg Of Mutton Sleeves": "leg-of-mutton",
	"Peasant Sleeves": "peasant",
	"Petal Sleeves": "petal",
	"Poet Sleeves": "poet",
	"Puffed Sleeves": "puffed",
	"Raglan Sleeves": "raglan",
	"Ruffle Sleeves": "ruffle",
	"Shirt Sleeves": "shirt",
	"Split Sleeves": "split"
} as const;
export const SleeveTypes = z.nativeEnum(sleeveTypes);
export type SleeveTypes = z.infer<typeof SleeveTypes>;