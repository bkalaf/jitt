import { formatBarcode } from '../../../util/formatBarcode';
import { IndividualBarcodeMemory } from '../individualBarcode';

export function individualBarcodeToNarrative({ isValid, value, barcodeType }: IndividualBarcodeMemory) {
    return isValid ? formatBarcode({ barcodeType, value }) : ''
}