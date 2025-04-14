import { z } from "zod";
export const consoleTypes = {
	"Nintendo 2DS": "2ds",
	"Nintendo 3DS": "3ds",
	"Nintendo 3DS-XL": "3ds-xl",
	"Nintendo DS": "ds",
	"Nintendo DSI": "dsi",
	"Nintendo DSI-XL": "dsi-xl",
	"Nintendo Gameboy": "gameboy",
	"Nintendo Gameboy Advance": "gameboy-advance",
	"Nintendo Gameboy Color": "gameboy-color",
	"Nintendo Gamecube": "gamecube",
	"Nintendo64": "n64",
	"Nintendo": "nes",
	"Playstation 1": "ps1",
	"Playstation 2": "ps2",
	"Playstation 3": "ps3",
	"Playstation 4": "ps4",
	"Playstation 5": "ps5",
	"Playstation Portable": "psp",
	"Super Nintendo": "snes",
	"Nintendo Switch": "switch",
	"Nintendo Wii": "wii",
	"Nintendo Wii-U": "wii-u",
	"Microsoft XBox": "xbox",
	"Microsoft XBox-1": "xbox-1",
	"Microsoft XBox-1s": "xbox-1s",
	"Microsoft XBox-360": "xbox-360",
	"Microsoft XBox Series S": "xbox-series-s",
	"Microsoft XBox Series X": "xbox-series-x",
	"Sega Dreamcast": "dreamcast"
} as const;
export const ConsoleTypes = z.nativeEnum(consoleTypes);
export type ConsoleTypes = z.infer<typeof ConsoleTypes>;