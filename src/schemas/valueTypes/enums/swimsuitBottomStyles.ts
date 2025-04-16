import { z } from "zod";
export const swimsuitBottomStyles = {
	"brazilian": "brazilian",
	"foldover": "foldover",
	"full-brief": "full-brief",
	"high-cut": "high-cut",
	"high-waist": "high-waist",
	"hipster": "hipster",
	"skirted": "skirted",
	"thin-stringed": "thin-stringed",
	"tie-side": "tie-side"
} as const;
export const swimsuitBottomStylesToImage = {
	"brazilian": "src/assets/images/enums/swimsuitBottomStyles/brazilian.png",
	"foldover": "src/assets/images/enums/swimsuitBottomStyles/foldover.png",
	"full-brief": "src/assets/images/enums/swimsuitBottomStyles/full-brief.png",
	"high-cut": "src/assets/images/enums/swimsuitBottomStyles/high-cut.png",
	"high-waist": "src/assets/images/enums/swimsuitBottomStyles/high-waist.png",
	"hipster": "src/assets/images/enums/swimsuitBottomStyles/hipster.png",
	"skirted": "src/assets/images/enums/swimsuitBottomStyles/skirted.png",
	"thin-stringed": "src/assets/images/enums/swimsuitBottomStyles/thin-stringed.png",
	"tie-side": "src/assets/images/enums/swimsuitBottomStyles/tie-side.png"
} as const;
export const SwimsuitBottomStyles = z.nativeEnum(swimsuitBottomStyles);
export type SwimsuitBottomStyles = z.infer<typeof SwimsuitBottomStyles>;