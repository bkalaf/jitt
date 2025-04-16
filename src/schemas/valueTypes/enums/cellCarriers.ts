import { z } from "zod";
export const cellCarriers = {
	"AT&T Wireless": "at&t",
	"Blue Wireless": "blue",
	"Boost Mobile": "boost",
	"Consumer Cellular": "consumer-cellular",
	"Cricket Wireless": "cricket",
	"H2O Wireless": "h20",
	"Net10 Wireless": "net-10",
	"Simple Mobile": "simple",
	"Sprint": "sprint",
	"Straight Talk": "straight-talk",
	"T-Mobile": "t-mobile",
	"Ting": "ting",
	"Total Wireless": "total",
	"TracFone Wireless": "tracfone",
	"Unlocked": "unlocked",
	"US Cellular": "us-celluar",
	"Verizon Wireless": "verizon",
	"Virgin Mobile": "virgin"
} as const;
export const CellCarriers = z.nativeEnum(cellCarriers);
export type CellCarriers = z.infer<typeof CellCarriers>;