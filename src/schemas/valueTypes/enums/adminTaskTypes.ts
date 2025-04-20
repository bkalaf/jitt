import { z } from "zod";
export const adminTaskTypes = {
    Unknown: 'UNKNOWN',
    'Mercari Daily Promotions': 'MERCARI-PROMOTE',
    'Import Mercari Brands': 'MERCARI-IMPORT-BRANDS',
    'Import Mercari Shipping': 'MERCARI-IMPORT-SHIPPING',
    'Import Mercari Taxonomy': 'MERCARI-IMPORT-TAXONOMY',
    'Import Mercari HashTags': 'MERCARI-IMPORT-HASHTAGS',
    'Import Mercari Custom Item Fields': 'MERCARI-IMPORT-FIELDS'
} as const;
export const AdminTaskTypes = z.nativeEnum(adminTaskTypes);
export type AdminTaskTypes = z.infer<typeof AdminTaskTypes>;