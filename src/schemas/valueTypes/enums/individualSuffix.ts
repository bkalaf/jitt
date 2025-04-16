import { z } from "zod";
export const individualSuffix = {
	"Jr": "jr",
	"Sr": "sr",
	"III": "iii",
	"Esq": "esq",
	"PhD": "phd",
	"MD": "md"
} as const;
export const IndividualSuffix = z.nativeEnum(individualSuffix);
export type IndividualSuffix = z.infer<typeof IndividualSuffix>;