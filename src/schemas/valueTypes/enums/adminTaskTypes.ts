import { z } from "zod";
export const adminTaskTypes = {
	"Unknown": "unknown",
	"Mercari Daily Promotions": "mercari-promote",
	"Import Mercari Brands": "mercari-import-brands",
	"Import Mercari Shipping": "mercari-import-shipping",
	"Import Mercari Taxonomy": "mercari-import-taxonomy",
	"Import Mercari HashTags": "mercari-import-hashtags",
	"Import Mercari Custom Item Fields": "mercari-import-custom-item-fields"
} as const;
export const AdminTaskTypes = z.nativeEnum(adminTaskTypes);
export type AdminTaskTypes = z.infer<typeof AdminTaskTypes>;