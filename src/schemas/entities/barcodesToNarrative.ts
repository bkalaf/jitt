import { BarcodeMemory } from './barcode';

export function barcodesToNarrative(data: BarcodeMemory[]) {
    return Array.from(
        data.values().map((x) => x.barcodes.map((bc) => bc.value))
    ).reduce((pv, cv) => [...pv, ...cv], []);
}
