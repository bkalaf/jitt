import { z } from 'zod';
export const barcodeTypes = {
    UPC: 'upc',
    EAN: 'ean',
    'ISBN-10': 'isbn-10',
    'ISBN-13': 'isbn-13',
    LOCATOR: 'locator',
    SKU: 'sku',
    '': 'unknown'
} as const;
export const BarcodeTypes = z.nativeEnum(barcodeTypes);
export type BarcodeTypes = z.infer<typeof BarcodeTypes>;
