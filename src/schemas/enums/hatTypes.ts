import { z } from "zod";
export const hatTypes = {
	"baseball-cap": "baseball-cap",
	"beanie": "beanie",
	"bowler": "bowler",
	"bucket": "bucket",
	"cowboy": "cowboy",
	"fedora": "fedora"
} as const;
export const hatTypesToImage = {
	"baseball-cap": "src/assets/images/enums/hatTypes/baseball-cap.png",
	"beanie": "src/assets/images/enums/hatTypes/beanie.png",
	"bowler": "src/assets/images/enums/hatTypes/bowler.png",
	"bucket": "src/assets/images/enums/hatTypes/bucket.png",
	"cowboy": "src/assets/images/enums/hatTypes/cowboy.png",
	"fedora": "src/assets/images/enums/hatTypes/fedora.png"
} as const;
export const HatTypes = z.nativeEnum(hatTypes);
export type HatTypes = z.infer<typeof HatTypes>;