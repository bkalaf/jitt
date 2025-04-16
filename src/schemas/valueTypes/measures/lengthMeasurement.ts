import { magnitudeToString } from '../../entities/toNarrative';
import { LengthUOM } from '../enums/lengthUOM';
import measurement, {
    $durationToNarrative,
    $lengthToNarrative,
    $weightToNarrative,
    MeasurementMemory
} from '../measurement';
import { z } from 'zod';
const toMemory = measurement.toMemory(LengthUOM, 'in');
const toDatabase = measurement.toDatabase(LengthUOM, 'in');

export default {
    toMemory,
    toDatabase
};

export type LengthMeasurementMemory = z.infer<typeof toMemory>;
export type LengthMeasurementDatabase = z.infer<typeof toDatabase>;

// console.log(
//     lengthToNarrative({ magnitude: { kind: 'int', v: 20 }, unit: 'in' })
// );
// console.log(
//     weightToNarrative({ magnitude: { kind: 'int', v: 800 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative({ magnitude: { kind: 'int', v: 100 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative({ magnitude: { kind: 'int', v: 1750 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative({ magnitude: { kind: 'int', v: 453.6 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative({ magnitude: { kind: 'int', v: 449.6 }, unit: 'g' })
// );
// console.log(
//     durationToNarrative({ magnitude: { kind: 'int', v: 84 }, unit: 's' })
// );
// console.log(
//     durationToNarrative({ magnitude: { kind: 'int', v: 31 }, unit: 'm' })
// );
// console.log(
//     durationToNarrative({ magnitude: { kind: 'int', v: 423 }, unit: 'm' })
// );
// console.log(
//     weightToNarrative(undefined)
// );
