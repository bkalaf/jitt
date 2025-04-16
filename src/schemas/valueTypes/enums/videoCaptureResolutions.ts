import { z } from "zod";
export const videoCaptureResolutions = {
	"1080p": "1080p",
	"2160p": "2160p",
	"240p": "240p",
	"3840p": "3840p",
	"4320p": "4320p",
	"480p": "480p",
	"720p": "720p"
} as const;
export const VideoCaptureResolutions = z.nativeEnum(videoCaptureResolutions);
export type VideoCaptureResolutions = z.infer<typeof VideoCaptureResolutions>;