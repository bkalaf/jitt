import { z } from "zod";
export const imageCaptureTypes = {
	"Stills": "stills",
	"Video": "video"
} as const;
export const ImageCaptureTypes = z.nativeEnum(imageCaptureTypes);
export type ImageCaptureTypes = z.infer<typeof ImageCaptureTypes>;