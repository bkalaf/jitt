import { z } from "zod";
export const closureTypes = {
	"": "",
	"Backstrap": "backstrap",
	"Buckle": "buckle",
	"Bungee": "bungee",
	"Button": "button",
	"Clip": "clip",
	"Drawstring": "drawstring",
	"Full Zip": "full-zip",
	"Half Zip": "half-zip",
	"Hook Bar": "hook-bar",
	"Hook Eye": "hook-eye",
	"Hook Loop": "hook-loop",
	"Lace Up": "lace-up",
	"Magnetic": "magnetic",
	"Pull On": "pull-on",
	"Quarter Zip": "quarter-zip",
	"Slip On": "slip-on",
	"Snap": "snap",
	"Speed Laces": "speed-laces",
	"Tie": "tie"
} as const;
export const closureTypesToGroup = {
	"backstrap": [],
	"buckle": [],
	"bungee": [],
	"button": [],
	"clip": [],
	"drawstring": [],
	"full-zip": ["zip"],
	"half-zip": ["zip"],
	"hook-bar": ["hook"],
	"hook-eye": ["hook"],
	"hook-loop": ["hook"],
	"lace-up": [],
	"magnetic": [],
	"pull-on": [],
	"quarter-zip": ["zip"],
	"slip-on": [],
	"snap": [],
	"speed-laces": [],
	"tie": []
} as const;
export const ClosureTypes = z.nativeEnum(closureTypes);
export type ClosureTypes = z.infer<typeof ClosureTypes>;