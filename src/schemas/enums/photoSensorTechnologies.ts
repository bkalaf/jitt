import { z } from "zod";
export const photoSensorTechnologies = {
	"BSI CMOS": "bsi-cmos",
	"CCD": "ccd",
	"CMOS": "cmos",
	"MOS": "mos"
} as const;
export const PhotoSensorTechnologies = z.nativeEnum(photoSensorTechnologies);
export type PhotoSensorTechnologies = z.infer<typeof PhotoSensorTechnologies>;