import { z } from "zod";
export const cameraFlashTypes = {
	"Built-In": "built-in",
	"Hotshoe": "hotshoe",
	"Studio": "studio"
} as const;
export const CameraFlashTypes = z.nativeEnum(cameraFlashTypes);
export type CameraFlashTypes = z.infer<typeof CameraFlashTypes>;