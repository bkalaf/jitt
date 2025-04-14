import { z } from "zod";
export const lapelTypes = {
	"chesterfield": "chesterfield",
	"clover": "clover",
	"fish-mouth": "fish-mouth",
	"framed": "framed",
	"l-shaped": "l-shaped",
	"napoleone": "napoleone",
	"notch": "notch",
	"notched-shawl": "notched-shawl",
	"peak": "peak",
	"shawl": "shawl",
	"t-shaped": "t-shaped",
	"tab": "tab",
	"tuxedo": "tuxedo",
	"ulster": "ulster"
} as const;
export const lapelTypesToImage = {
	"chesterfield": "src/assets/images/enums/lapelTypes/chesterfield.png",
	"clover": "src/assets/images/enums/lapelTypes/clover.png",
	"fish-mouth": "src/assets/images/enums/lapelTypes/fish-mouth.png",
	"framed": "src/assets/images/enums/lapelTypes/framed.png",
	"l-shaped": "src/assets/images/enums/lapelTypes/l-shaped.png",
	"napoleone": "src/assets/images/enums/lapelTypes/napoleone.png",
	"notch": "src/assets/images/enums/lapelTypes/notch.png",
	"notched-shawl": "src/assets/images/enums/lapelTypes/notched-shawl.png",
	"peak": "src/assets/images/enums/lapelTypes/peak.png",
	"shawl": "src/assets/images/enums/lapelTypes/shawl.png",
	"t-shaped": "src/assets/images/enums/lapelTypes/t-shaped.png",
	"tab": "src/assets/images/enums/lapelTypes/tab.png",
	"tuxedo": "src/assets/images/enums/lapelTypes/tuxedo.png",
	"ulster": "src/assets/images/enums/lapelTypes/ulster.png"
} as const;
export const LapelTypes = z.nativeEnum(lapelTypes);
export type LapelTypes = z.infer<typeof LapelTypes>;