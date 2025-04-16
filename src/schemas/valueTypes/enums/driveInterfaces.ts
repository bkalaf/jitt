import { z } from "zod";
export const driveInterfaces = {
	"RAID": "raid",
	"Fiber Channel": "fiber",
	"PATA (IDE)": "pata",
	"SAS": "sas",
	"SATA (1.5 Gbit/s)": "sata",
	"SATA II (3.0 Gbit/s)": "sataii",
	"SATA III (6.0 Gbit/s)": "sataiii",
	"SCSI": "scsi"
} as const;
export const DriveInterfaces = z.nativeEnum(driveInterfaces);
export type DriveInterfaces = z.infer<typeof DriveInterfaces>;