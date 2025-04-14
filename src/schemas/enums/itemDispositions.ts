import { z } from "zod";
export const itemDispositions = {
	"not-listed": "not-listed",
	"ready-to-list": "ready-to-list",
	"listed": "listed",
	"removed": "removed",
	"sold": "sold",
	"damaged": "damaged",
	"destroyed": "destroyed",
	"remediation": "remediation"
} as const;
export const ItemDispositions = z.nativeEnum(itemDispositions);
export type ItemDispositions = z.infer<typeof ItemDispositions>;