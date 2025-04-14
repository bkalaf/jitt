import { z } from "zod";
export const footwearTypes = {
	"sneakers": "sneakers",
	"fashion-sneakers": "fashion-sneakers",
	"loafers": "loafers",
	"clogs": "clogs",
	"boots": "boots",
	"mules": "mules",
	"oxfords": "oxfords",
	"outdoors": "outdoors",
	"sandals": "sandals",
	"slip-ons": "slip-ons",
	"slippers": "slippers",
	"work-shoes": "work-shoes",
	"safety-shoes": "safety-shoes",
	"flats": "flats",
	"heels": "heels"
} as const;
export const footwearTypesToGroup = {
	"sneakers": ["sneakers"],
	"fashion-sneakers": ["sneakers"],
	"loafers": ["deck","loafer","monk","penny-loafer"],
	"clogs": ["clog"],
	"boots": ["ankle-boot","country","desert","frye","jockey-boot","over-the-knee-boot","snow-boot","wellington","western-boot"],
	"mules": ["mule"],
	"oxfords": ["oxford","saddle","wing-tip","winkle-picker"],
	"outdoors": [],
	"sandals": ["flip-flop","sandal"],
	"slip-ons": ["dockside","mocassin","slip-on"],
	"slippers": ["espadrilla","slipper"],
	"work-shoes": [],
	"safety-shoes": [],
	"flats": [],
	"heels": ["ankle-strap","espadrille","mary-jane","pump","sling-back","t-strap"]
} as const;
export const FootwearTypes = z.nativeEnum(footwearTypes);
export type FootwearTypes = z.infer<typeof FootwearTypes>;