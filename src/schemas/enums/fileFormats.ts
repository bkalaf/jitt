import { z } from "zod";
export const fileFormats = {
	"ASF": "asf",
	"FLV": "flv",
	"MJPEG": "mjpeg",
	"MKV": "mkv",
	"MOV": "mov",
	"MPEG VX": "mpeg-vx",
	"XAVC": "xavc",
	"AVCHD": "avchd",
	"AVI": "avi",
	"DNG": "dng",
	"JPEG": "jpeg",
	"MP4": "mp4",
	"MPEG-4": "mpeg-4",
	"RAW": "raw"
} as const;
export const FileFormats = z.nativeEnum(fileFormats);
export type FileFormats = z.infer<typeof FileFormats>;