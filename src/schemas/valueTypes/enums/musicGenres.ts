import { z } from "zod";
export const musicGenres = {
	"pop": "pop",
	"rock": "rock",
	"rhythm-and-blues": "rhythm-and-blues",
	"hip-hop": "hip-hop",
	"country": "country",
	"jazz": "jazz",
	"blues": "blues",
	"electronic-dance": "electronic-dance",
	"heavy-metal": "heavy-metal",
	"classical": "classical",
	"punk-rock": "punk-rock",
	"alternative-rock": "alternative-rock",
	"funk": "funk",
	"soul": "soul",
	"folk": "folk",
	"reggae": "reggae",
	"indie-rock": "indie-rock",
	"latin": "latin",
	"techno": "techno",
	"easy-listening": "easy-listening",
	"jungle": "jungle",
	"dubstep": "dubstep",
	"ska": "ska",
	"industrial": "industrial",
	"new-wave": "new-wave"
} as const;
export const MusicGenres = z.nativeEnum(musicGenres);
export type MusicGenres = z.infer<typeof MusicGenres>;