///<reference path="./../../global.d.ts" />
import './../../preload';
import { z } from 'zod';
import magnitude from '../entities/magnitude';
import {
    magnitudeConvert,
    magnitudeGetRemain
} from '../entities/toNarrative/magnitudeConvert';
import { LengthUOM } from './enums/lengthUOM';
import { lengthUOM } from '../valueTypes/enums/lengthUOM';
import {
    AmperageUnitOfMeasure,
    CapacityUnitOfMeasure,
    DegreesUnitOfMeasure,
    DurationUnitOfMeasure,
    durationUnitOfMeasure,
    PowerConsumptionUnitOfMeasure,
    RotationalSpeedUnitOfMeasure,
    ScreenResolutionUnitOfMeasure,
    VoltageUnitOfMeasure,
    volumeUnitOfMeasure,
    WattageUnitOfMeasure,
    WeightUOM,
    weightUOM
} from './enums';
import { magnitudeToString } from '../entities/toNarrative';
import { surroundParens } from '../../common/addPrefix';
import { truncate } from '../../common/truncate';

export const baseMagnitudeToMemory = <
    TKey extends string,
    T extends Record<string, TKey>
>(
    obj: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
) =>
    z.object({
        magnitude: magnitude.toMemory.default({ kind: 'int', v: 0 }),
        unit: obj.default(defValue)
    });

const schema = <TKey extends string, T extends Record<string, TKey>>(
    obj: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
): ReturnType<typeof baseMagnitudeToMemory> & {
    remain?: ReturnType<typeof baseMagnitudeToMemory>[];
} =>
    baseMagnitudeToMemory(obj, defValue).extend({
        remain: z.lazy(() => schema(obj, defValue).array().optional())
    }) as any;

export default {
    toMemory: schema,
    toDatabase: schema
};

export type MeasurementMemory<
    TKey extends string = string,
    T extends Record<string, TKey> = Record<string, TKey>
> = ReturnType<typeof schema<TKey, T>>;
export type MeasurementDatabase<
    TKey extends string = string,
    T extends Record<string, TKey> = Record<string, TKey>
> = ReturnType<typeof schema<TKey, T>>;

// console.log(lengthConverter({ magnitude: { kind: 'int', v: 20 }, unit: 'in' }));

// console.log(secondConverter({ magnitude: { kind: 'int', v: 100 }, unit: 's' }));

// console.log(weightConverter({ magnitude: { kind: 'int', v: 800 }, unit: 'g' }));

export const $lengthToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<LengthUOM, Record<string, LengthUOM>>
    >
) => {
    if (measurement == null) return [];
    const { magnitude } = measurement;
    return [
        [
            magnitudeToString(magnitude).concat('in').join(''),
            surroundParens(
                magnitudeToString(
                    magnitudeConvert(magnitude, 2.54, 1)[0],
                    1
                )[0].concat('cm')
            )
        ].join(' ')
    ];
};
export const $weightToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<WeightUOM, Record<string, WeightUOM>>
    >
) => {
    if (measurement == null) return [];
    const { magnitude } = measurement;
    return [
        [
            magnitudeGetRemain(magnitudeConvert(magnitude, 1 / 453.6, 2)[0], 16)
                .zip(['lb', 'oz'])
                .cinch(),
            surroundParens(magnitudeToString(magnitude).concat('g').join(''))
        ].join(' ')
    ];
};
export const $durationToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            DurationUnitOfMeasure,
            Record<string, DurationUnitOfMeasure>
        >
    >
) => {
    function getUnits() {
        if (measurement == null) return [];
        switch (measurement!.unit as DurationUnitOfMeasure) {
            case 's':
                return ['m', 's'];
            case 'm':
                return ['h', 'm'];
            case 'h':
                return ['d', 'h'];
        }
    }
    if (measurement == null) return [];
    const { magnitude } = measurement;
    return [
        [
            magnitudeGetRemain(magnitudeConvert(magnitude, 1 / 60, 2)[0], 60)
                .zip(getUnits())
                .cinch(false)
        ].join(' ')
    ];
};
export const $volumeToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<WeightUOM, Record<string, WeightUOM>>
    >
) => {
    if (measurement == null) return [];
    const { magnitude } = measurement;
    return [
        [
            magnitudeToString(magnitude, 1).concat('flOz').join(''),
            surroundParens(
                magnitudeToString(magnitudeConvert(magnitude, 29.57, 2)[0], 1) 
                    .concat('mL')
                    .join('')
            )
        ].join(' ')
    ];
};
export const $voltageToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            VoltageUnitOfMeasure,
            Record<string, VoltageUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [[magnitudeToString(magnitude, 0), unit].join('')];
};
export const $wattageToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<WattageUnitOfMeasure, Record<string, WattageUnitOfMeasure>>
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [[magnitudeToString(magnitude, 0), unit].join('')];
};
export const $amperageToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<AmperageUnitOfMeasure, Record<string, AmperageUnitOfMeasure>>
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [[magnitudeToString(magnitude, 0), unit].join('')];
};
export const $capacityToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            CapacityUnitOfMeasure,
            Record<string, CapacityUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [[magnitudeToString(magnitude, 0), unit].join('')];
};
export const $rotationalSpeedToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            RotationalSpeedUnitOfMeasure,
            Record<string, RotationalSpeedUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [[magnitudeToString(magnitude, 0), unit].join('')];
};
export const $energyConsumptionToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            PowerConsumptionUnitOfMeasure,
            Record<string, PowerConsumptionUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [
        [
            truncate(2, true)(parseFloat(magnitudeToString(magnitude, 2)[0])),
            unit
        ].join('')
    ];
};
export const $screenResolutionToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            ScreenResolutionUnitOfMeasure,
            Record<string, ScreenResolutionUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [
        [
            truncate(2, true)(parseFloat(magnitudeToString(magnitude, 2)[0])),
            unit
        ].join('')
    ];
};
export const $angleToNarrative = (
    measurement?: z.infer<
        MeasurementMemory<
            DegreesUnitOfMeasure,
            Record<string, DegreesUnitOfMeasure>
        >
    >
) => {
    if (measurement == null) return [];
    const { magnitude, unit } = measurement;
    return [
        [
            truncate(2, true)(parseFloat(magnitudeToString(magnitude, 2)[0])),
            unit
        ].join('')
    ];
};
// console.log(
//     $lengthToNarrative({ magnitude: { kind: 'int', v: 20 }, unit: 'in' })
// );
// console.log(
//     $weightToNarrative({ magnitude: { kind: 'int', v: 800 }, unit: 'g' })
// );
// console.log(
//     $weightToNarrative({ magnitude: { kind: 'int', v: 100 }, unit: 'g' })
// );
// console.log(
//     $weightToNarrative({ magnitude: { kind: 'int', v: 1750 }, unit: 'g' })
// );
// console.log(
//     $weightToNarrative({ magnitude: { kind: 'int', v: 453.6 }, unit: 'g' })
// );
// console.log(
//     $weightToNarrative({ magnitude: { kind: 'int', v: 449.6 }, unit: 'g' })
// );
// console.log(
//     $durationToNarrative({ magnitude: { kind: 'int', v: 84 }, unit: 's' })
// )
// console.log(
//     $durationToNarrative({ magnitude: { kind: 'int', v: 31 }, unit: 'm' })
// );
// console.log(
//     $durationToNarrative({ magnitude: { kind: 'int', v: 423 }, unit: 'm' })
// );
// console.log(
//     $volumeToNarrative({ magnitude: { kind: 'float', v: 29.6 }, unit: 'flOz' })
// );
// console.log(
//     $capacityToNarrative({ magnitude: { kind: 'float', v: 100 }, unit: 'gb' })
// );
// console.log(
//     $rotationalSpeedToNarrative({ magnitude: { kind: 'float', v: 100 }, unit: 'rpm' })
// );
// console.log(
//     $energyConsumptionToNarrative({ magnitude: { kind: 'float', v: 29.6 }, unit: 'Wh' })
// );