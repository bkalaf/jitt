import { barcodesToNarrative } from './barcodesToNarrative';
import { brandingMemoryToNarrative } from './brandingToNarrative';
import { descriptionToNarrative } from './descriptionToNarrative';
import { includesToNarrative } from './includesToNarrative';
import { individualBarcodeToNarrative } from './individualBarcodeToNarrative';
import { magnitudeToString } from './magnitudeToString';
import { optStringToMemory } from './optStringToMemory';
import measurementsToNarrative from './measurementToNarrative'
export * from './barcodesToNarrative';
export * from './brandingToNarrative';
export * from './descriptionToNarrative';
export * from './includesToNarrative';
export * from './individualBarcodeToNarrative';
export * from './magnitudeToString';
export * from './optStringToMemory';

const toMemory = {
    optString: optStringToMemory
};

const toNarrative = {
    barcodes: barcodesToNarrative,
    branding: brandingMemoryToNarrative,
    description: descriptionToNarrative,
    includes: includesToNarrative,
    individualBarcode: individualBarcodeToNarrative,
    measures: measurementsToNarrative
};

const toString = {
    magnitude: magnitudeToString
};

export default {
    toMemory,
    toNarrative,
    toString
}