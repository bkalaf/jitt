import { z } from "zod";
export const unitsOfMeasure = {
	"in": "in",
	"cm": "cm",
	"mm": "mm",
	"ft": "ft",
	"g": "g",
	"lb": "lb",
	"oz": "oz",
	"V": "V",
	"W": "W",
	"A": "A",
	"mA": "mA",
	"s": "s",
	"m": "m",
	"h": "h",
	"mL": "mL",
	"qt": "qt",
	"gal": "gal",
	"RPM": "rpm",
	"°": "°",
	"GB": "gb",
	"MB": "mb",
	"TB": "tb",
	"mHz": "mHz",
	"WH": "wh",
	"mAh": "mAh",
	"MB/s": "mb/s",
	"mBit/s": "mbit/s",
	"": "",
	"MP": "mp"
} as const;
export const unitsOfMeasureToGroup = {
	"in": ["length"],
	"cm": ["length"],
	"mm": ["length"],
	"ft": ["length"],
	"g": ["weight"],
	"lb": ["weight"],
	"oz": ["weight"],
	"V": ["voltage"],
	"W": ["wattage"],
	"A": ["amperage"],
	"mA": ["amperage"],
	"s": ["duration","playtime"],
	"m": ["duration","runtime"],
	"h": ["duration"],
	"mL": ["volume"],
	"qt": ["volume"],
	"gal": ["volume"],
	"rpm": ["rotational-speed"],
	"°": ["angle"],
	"gb": ["capacity"],
	"mb": ["capacity"],
	"tb": ["capacity"],
	"mHz": ["frequency"],
	"wh": ["power-consumption"],
	"mAh": ["electrical-charge"],
	"mb/s": ["data-transfer-rate"],
	"mbit/s": ["data-transfer-rate"],
	"": ["specific-gravity"],
	"mp": ["resolution"]
} as const;
export const UnitsOfMeasure = z.nativeEnum(unitsOfMeasure);
export type UnitsOfMeasure = z.infer<typeof UnitsOfMeasure>;