export const barcodeTypes = [
    { value: 'sku', label: 'SKU' },
    { value: 'locator', label: 'Locator' },
    { value: 'ean', label: 'EAN' },
    { value: 'isbn-10', label: 'ISBN-10' },
    { value: 'isbn-13', label: 'ISBN-13' },
    { value: 'unknown', label: 'Unknown' }
];

export type BarcodeTypes = 'sku' | 'locator' | 'ean' | 'isbn-10' | 'isbn-13' | 'unknown';
