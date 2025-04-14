import { BarcodeTypes } from '../schemas/enums';
import { enumLookup } from '../schemas/enums/inverseEnum';

export function formatBarcode({ barcodeType, value }: { barcodeType: BarcodeTypes; value: string; }) {
    function inner() {
        switch (barcodeType) {
            case 'isbn-10':
                return [
                    value.slice(3, 4),
                    value.slice(4, 7),
                    value.slice(7, 12),
                    value.slice(12)
                ].join('-');
            case 'locator':
            case 'sku':
                return [
                    value.slice(1, 2),
                    value.slice(2, 7),
                    value.slice(7, 12),
                    value.slice(12)
                ].join('-');
            case 'ean':
                return [
                    value.slice(0, 1),
                    value.slice(1, 2),
                    value.slice(2, 7),
                    value.slice(7, 12),
                    value.slice(12)
                ].join('-');
            case 'isbn-13':
                return [
                    value.slice(0, 3),
                    value.slice(3, 4),
                    value.slice(4, 9),
                    value.slice(9, 12),
                    value.slice(12)
                ].join('-');
            case 'unknown':
                return value;
        }
    }
    const bt = enumLookup(BarcodeTypes)(barcodeType) ?? 'Barcode';
    return [bt, inner()].join(': ');
}
