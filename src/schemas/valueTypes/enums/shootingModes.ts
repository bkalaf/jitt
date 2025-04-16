import { z } from "zod";
export const shootingModes = {
	"Automatic": "automatic",
	"Easy": "easy",
	"Landscape": "landscape",
	"Manual": "manual",
	"Movie": "movie",
	"Portrait": "portrait",
	"Sports": "sports"
} as const;
export const ShootingModes = z.nativeEnum(shootingModes);
export type ShootingModes = z.infer<typeof ShootingModes>;