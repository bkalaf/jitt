///<reference path="./../../global.d.ts" />
import { z } from 'zod';
import { DurationUnitOfMeasure } from '../enums/durationUnitOfMeasure';
import { LengthUOM } from '../enums/lengthUOM';
import { VolumeUnitOfMeasure } from '../enums/volumeUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import unitOfMeasure, { $toString } from './unitOfMeasure';
import magnitude from './magnitude';
import { surround, surroundParens } from '../../common/addPrefix';
import { toKVP } from '../../util/toKVP';

const { toMemory: magnitudeMemory, toDatabase: magnitudeDatabase } = magnitude;

const { toMemory: uomMemory, toDatabase: uomDatabase } = unitOfMeasure;

export const volume = {
    toMemory: uomMemory(VolumeUnitOfMeasure, 'mL')
        .transform((data) => ({
            ...data,
            valueOf:
                typeof data.value === 'number' ? data.value : data.value.valueOf
        }))
        .transform((data) => ({
            ...data,
            convertToFlOz: data.valueOf / 29.574
        })),
    toDatabase: uomMemory(VolumeUnitOfMeasure, 'mL')
};

export function removeEndChar(...char: string[]) {
    return (s: string): string =>
        char.some((c) => s.endsWith(c))
            ? removeEndChar(...char)(s.slice(0, s.length - 1))
            : s;
}
export function truncate(digits: number = 0, removeEndZero = false) {
    return (n: number) => {
        const [i, d] = n.toString().includes('.')
            ? n.toString().split('.')
            : n.toString().concat('.').padEnd(digits, '0');
        const result = [i, d.slice(0, digits)].join('.');
        if ((removeEndZero && result.endsWith('0')) || result.endsWith('.')) {
            return parseFloat(removeEndChar('0', '.')(result));
        }
        return parseFloat([i, d.slice(0, digits)].join('.'));
    };
}

console.log(truncate(2)(2.5432));
console.log(truncate(0)(2.5432));
console.log(truncate(1)(2.5432));
console.log(truncate(1)(2.001));

export const length = {
    toMemory: uomMemory(LengthUOM, 'in')
        .transform((data) => ({
            ...data,
            valueOf:
                typeof data.value === 'number' ? data.value : data.value.valueOf
        }))
        .transform((data) => ({
            ...data,
            convertToCm: data.valueOf * 2.54
        }))
        .transform((data) => ({
            ...data,
            cmText:
                data.convertToCm === 0
                    ? ''
                    : [truncate(1)(data.convertToCm), 'cm'].join('')
        }))
        .transform((data) => ({
            ...data,
            output: [
                data.text,
                ...(data.cmText !== '' ? [surround('(', ')')(data.cmText)] : [])
            ].join(' ')
        })),
    toDatabase: uomDatabase(LengthUOM, 'in')
};

const weightMetric = {
    toMemory: uomMemory(WeightUOM, 'g')
        .transform((data) => ({
            ...data,
            valueOf:
                typeof data.value === 'number' ? data.value : data.value.valueOf
        }))
        .transform((data) => ({
            ...data,
            convertToLb: data.valueOf / 453.6
        }))
        .transform((data) => ({
            ...data,
            multiplier: (m: number) => (data.value == null ? 0 : typeof data.value === 'number' ? data.value : data.value.valueOf) * m
        })),
    toDatabase: uomMemory(WeightUOM, 'g')
};
let weightRef: {
    toMemory: z.ZodType & {
        output: string;
        narrative: string;
    }
};
export const weight = {
    toMemory: weightMetric.toMemory
        .transform((data) => ({
            ...data,
            multiplierToLb: (
                m: number
            ): z.ZodType & {
                output: string;
                narrative: string;
                toPoundsOunces: [number, number];
            } => {
                const result = data.multiplier(m);
                return weightRef.toMemory.parse({
                    value: result,
                    uom: 'g'
                });
            },
            toPoundsOunces: (() => {
                const lbs = data.convertToLb;
                let lb = Math.floor(lbs);
                let oz = Math.ceil((lbs - lb) * 16);
                if (oz === 16) {
                    lb++;
                    oz = 0;
                }
                return [lb, oz];
            })()
        }))
        .transform((data) => ({
            ...data,
            english: (() => {
                const [lb, oz] = data.toPoundsOunces;
                const grams = data.text;
                return [
                    ...(lb == null || lb === 0
                        ? []
                        : [
                              [
                                  lb,
                                  lb > 0 ? (lb > 1 ? 'lbs' : 'lb') : undefined
                              ].join('')
                          ]),
                    ...(oz == null || oz === 0
                        ? []
                        : [
                              [
                                  oz,
                                  oz > 0 ? (oz > 1 ? 'ozs' : 'oz') : undefined
                              ].join('')
                          ])
                ].join(' ');
            })()
        }))
        .transform((data) => ({
            ...data,
            output: [
                ...(data.english === '' ? [] : [data.english]),
                ...(data.text === '' ? [] : [surroundParens(data.text)])
            ].join(' ')
        }))
        .transform((data) => ({
            ...data,
            narrative: toKVP('Weight (pre-packaging)')(data.output),
            shipWeight: (multiplier: number) => {
                let [lb, oz] = data.multiplierToLb(multiplier).toPoundsOunces;
                if (lb === 0) {
                    if (oz <= 4) oz = 4;
                    else if (oz <= 8) oz = 8;
                    else if (oz <= 12) oz = 12;
                    else oz = 16
                } else {
                    if (oz > 0) {
                        lb++;
                        oz = 0;
                    }
                }
                if (oz === 16) {
                    lb++;
                    oz = 0
                }
                return [lb, oz];
            }
        })),
    toDatabase: weightMetric.toDatabase
};
weightRef = weight as any;

// console.log(weight.toMemory.parse({ value: 1121, uom: 'g' }).narrative);
// console.log(weight.toMemory.parse({ value: 112, uom: 'g' }).narrative);
// console.log(weight.toMemory.parse({ value: 425, uom: 'g' }).narrative);
// console.log(weight.toMemory.parse({ value: 453, uom: 'g' }).narrative);
// console.log(weight.toMemory.parse({ value: 98, uom: 'g' }).narrative);
// console.log(weight.toMemory.parse({ value: 782, uom: 'g' }).narrative);

// console.log(
//     weight.toMemory.parse({ value: 1121, uom: 'g' }).multiplierToLb(1.3).narrative
// );
// console.log(
//     weight.toMemory.parse({ value: 112, uom: 'g' }).multiplierToLb(1.3).narrative
// );
// console.log(
//     weight.toMemory.parse({ value: 425, uom: 'g' }).multiplierToLb(1.3).narrative
// );
// console.log(
//     weight.toMemory.parse({ value: 453, uom: 'g' }).multiplierToLb(1.3).narrative
// );
// console.log(
//     weight.toMemory.parse({ value: 98, uom: 'g' }).multiplierToLb(1.3).narrative
// );
// console.log(weight.toMemory.parse({ value: 782, uom: 'g' }).multiplierToLb(1.3).narrative);

// console.log(
//     weight.toMemory.parse({ value: 1121, uom: 'g' }).shipWeight
// );
// console.log(weight.toMemory.parse({ value: 112, uom: 'g' }).shipWeight(1.3));
// console.log(weight.toMemory.parse({ value: 425, uom: 'g' }).shipWeight(1.3));
// console.log(weight.toMemory.parse({ value: 453, uom: 'g' }).shipWeight(1.3));
// console.log(weight.toMemory.parse({ value: 98, uom: 'g' }).shipWeight(1.3));
// console.log(weight.toMemory.parse({ value: 782, uom: 'g' }).shipWeight(1.3));

export const durationMin = {
    toMemory: uomMemory(DurationUnitOfMeasure, 'm')
        .transform((data) => ({
            ...data,
            valueOf:
                typeof data.value === 'number' ? data.value : data.value.valueOf
        }))
        .transform((data) => ({
            ...data,
            text:
                data.valueOf === 60
                    ? [Math.floor(data.valueOf / 60).toString(), 'h'].join('')
                    : data.valueOf > 60
                    ? [
                          [Math.floor(data.valueOf / 60).toString(), 'h'].join(
                              ''
                          ),
                          ...(data.valueOf % 60 === 0
                              ? []
                              : [
                                    [
                                        data.valueOf -
                                            Math.floor(data.valueOf / 60) * 60,
                                        'm'
                                    ].join('')
                                ])
                      ].join(' ')
                    : [
                          data.valueOf - Math.floor(data.valueOf / 60) * 60,
                          'm'
                      ].join('')
        })),
    toDatabase: uomMemory(DurationUnitOfMeasure, 'm')
};

export const durationSec = {
    toMemory: uomMemory(DurationUnitOfMeasure, 's')
        .transform((data) => ({
            ...data,
            valueOf:
                typeof data.value === 'number' ? data.value : data.value.valueOf
        }))
        .transform((data) => ({
            ...data,
            text:
                data.valueOf === 60
                    ? [Math.floor(data.valueOf / 60).toString(), 'm'].join('')
                    : data.valueOf > 60
                    ? [
                          [Math.floor(data.valueOf / 60).toString(), 'm'].join(
                              ''
                          ),
                          ...(data.valueOf % 60 === 0
                              ? []
                              : [
                                    [
                                        data.valueOf -
                                            Math.floor(data.valueOf / 60) * 60,
                                        's'
                                    ].join('')
                                ])
                      ].join(' ')
                    : [
                          data.valueOf - Math.floor(data.valueOf / 60) * 60,
                          's'
                      ].join('')
        })),
    toDatabase: uomMemory(DurationUnitOfMeasure, 'm')
};

export const durationSeconds = {
    toMemory: durationSec.toMemory.transform((data) => {
        const { value, uom, remain } = data;
        if (uom === 's') return data;
        if (uom === 'm') {
            const remainValue =
                remain != null
                    ? typeof remain.value === 'number'
                        ? remain.value
                        : remain.value.valueOf
                    : 0;
            const total =
                remainValue +
                (typeof value === 'number' ? value : value.valueOf) * 60;
            return durationSec.toMemory.parse({ value: total, uom: 's' });
        }
    }),
    toDatabase: durationSec.toDatabase
};

export const durationMinutes = {
    toMemory: durationMin.toMemory.transform((data) => {
        const { value, uom, remain } = data;
        if (uom === 'm') return data;
        if (uom === 'h') {
            const remainValue =
                remain != null
                    ? typeof remain.value === 'number'
                        ? remain.value
                        : remain.value.valueOf
                    : 0;
            const total =
                remainValue +
                (typeof value === 'number' ? value : value.valueOf) * 60;
            return durationMin.toMemory.parse({ value: total, uom: 'm' });
        }
    }),
    toDatabase: durationMin.toMemory
};
// console.log(durationMin.toMemory.parse({ value: 218, uom: 'm' }).text);
// console.log(durationMin.toMemory.parse({ value: 60, uom: 'm' }).text);
// console.log(durationMin.toMemory.parse({ value: 18, uom: 'm' }).text);
// console.log(durationSec.toMemory.parse({ value: 218, uom: 's' }).text);
// console.log(durationSec.toMemory.parse({ value: 60, uom: 's' }).text);
// console.log(durationSec.toMemory.parse({ value: 18, uom: 's' }).text);

// console.log(durationSeconds.toMemory.parse({ value: 2, uom: 's' }))
// console.log(durationSeconds.toMemory.parse({ value: 2, uom: 'm' }));
// console.log(durationSeconds.toMemory.parse({ value: 2, uom: 'm', remain: { value: 12, uom: 's' } }));
// console.log(durationMinutes.toMemory.parse({ value: 42, uom: 'm' }))
// console.log(durationMinutes.toMemory.parse({ value: 2, uom: 'h', remain: { value: 2, uom: 'm'} }));

//
//
//  console.log(
//     length.toMemory.safeParse({
//         value: 1,
//         uom: 'ft',
//         remain: {
//             value: { integer: 0, numerator: 1, denominator: 8 },
//             uom: 'in'
//         }
//     })
// );
// console.log(
//     length.toMemory.safeParse({
//         value: 1,
//         uom: 'ft',
//         remain: {
//             value: { integer: 3, numerator: 1, denominator: 8 },
//             uom: 'in'
//         }
//     }).data?.text
// );
// console.log(
//     length.toMemory.safeParse({
//         value: 12.5,
//         uom: 'ft',
//         remain: {
//             value: 0,
//             uom: 'in'
//         }
//     }).data?.text
// );
// const w1 = weight.toMemory.parse({
//     value: 90,
//     uom: 'g'
// })
// console.log(w1);
// console.log(w1.multiplierToLb(1.3))
