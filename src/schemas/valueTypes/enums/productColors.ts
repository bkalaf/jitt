import { z } from "zod";
export const productColors = {
	"Animal Print": "animal",
	"Amber": "amber",
	"Emerald": "emerald",
	"Black": "black",
	"Blue": "blue",
	"Bronze": "bronze",
	"Brown": "brown",
	"Burgundy": "burgundy",
	"Camouflage": "camouflage",
	"Charcoal": "charcoal",
	"Olive": "olive",
	"Cyan": "cyan",
	"Gold": "gold",
	"Gray": "gray",
	"Green": "green",
	"Maroon": "maroon",
	"Navy": "navy",
	"Orange": "orange",
	"Pink": "pink",
	"Polka-dot": "polka-dot",
	"Purple": "purple",
	"Red": "red",
	"Wilver": "silver",
	"White": "white",
	"Yellow": "yellow",
	"Striped": "striped",
	"Tie-dyed": "tie-dyed",
	"Aqua": "aqua"
} as const;
export const productColorsToRegex = {
	"animal": "",
	"amber": "amber",
	"emerald": "emerald",
	"black": "black.*(?!decker)",
	"blue": "blue",
	"bronze": "bronze",
	"brown": "brown",
	"burgundy": "burgundy",
	"camouflage": "camou?flag",
	"charcoal": "charcoal",
	"olive": "olive(?!garden)",
	"cyan": "cyan",
	"gold": "gold",
	"gray": "gr[ae]y",
	"green": "green(?!lantern)",
	"maroon": "maroon",
	"navy": "(?<!old)navy",
	"orange": "orange",
	"pink": "pink",
	"polka-dot": "",
	"purple": "purple",
	"red": "red(?!lobster|robin)",
	"silver": "silver",
	"white": "white",
	"yellow": "yellow",
	"striped": "",
	"tie-dyed": "",
	"aqua": "aqua(?!rium)"
} as const;
export const productColorsToSelector = {
	"animal": "",
	"amber": "",
	"emerald": "",
	"black": "#itemColorId-1",
	"blue": "#itemColorId-8",
	"bronze": "",
	"brown": "#itemColorId-12",
	"burgundy": "",
	"camouflage": "",
	"charcoal": "",
	"olive": "",
	"cyan": "",
	"gold": "#itemColorId-13",
	"gray": "#itemColorId-2",
	"green": "#itemColorId-9",
	"maroon": "",
	"navy": "",
	"orange": "#itemColorId-11",
	"pink": "#itemColorId-6",
	"polka-dot": "",
	"purple": "#itemColorId-7",
	"red": "#itemColorId-5",
	"silver": "#itemColorId-14",
	"white": "#itemColorId-3",
	"yellow": "#itemColorId-10",
	"striped": "",
	"tie-dyed": "",
	"aqua": ""
} as const;
export const productColorsToGroup = {
	"animal": [],
	"amber": ["orange"],
	"emerald": ["green"],
	"black": ["black"],
	"blue": ["blue"],
	"bronze": ["gold"],
	"brown": ["brown"],
	"burgundy": ["red","brown"],
	"camouflage": ["green"],
	"charcoal": ["gray","black"],
	"olive": ["green","yellow"],
	"cyan": ["blue"],
	"gold": ["gold"],
	"gray": ["gray"],
	"green": ["green"],
	"maroon": ["red"],
	"navy": ["blue"],
	"orange": ["orange"],
	"pink": ["pink"],
	"polka-dot": [],
	"purple": ["purple"],
	"red": ["red"],
	"silver": ["silver"],
	"white": ["white"],
	"yellow": ["yellow"],
	"striped": [],
	"tie-dyed": [],
	"aqua": ["blue"]
} as const;
export const ProductColors = z.nativeEnum(productColors);
export type ProductColors = z.infer<typeof ProductColors>;