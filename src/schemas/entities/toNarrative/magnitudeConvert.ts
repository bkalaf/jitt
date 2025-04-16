import magnitude, { MagnitudeMemory } from '../magnitude';
import { truncate } from '../../../common/truncate';

export function magnitudeGetRemain<
    TKey extends string = string,
    T extends Record<string, TKey> = Record<string, TKey>
>(data?: MagnitudeMemory, factor = 1) {
    if (data == null) return [];
    if (factor === 1) return [];
    switch (data.kind) {
        case 'float':
        case 'int':
            let i = Math.floor(data.v);
            let r = Math.ceil((data.v - i) * factor);
            if (r === factor) {
                r = 0
                i++;
            }
            return [i, r];
        case 'fraction':
            const t = (data.i ?? 0) + (data.n ?? 0) / (data.d ?? 1);
            let i2 = Math.floor(t);
            let r2 = Math.ceil((t - i2) * factor);
            if (r2 === factor) {
                r2 = 0;
                i2++;
            }
            return [i2, r2];
    }
}

export function magnitudeConvert<
    TKey extends string = string,
    T extends Record<string, TKey> = Record<string, TKey>
>(data?: MagnitudeMemory, factor = 1, precision = 2): MagnitudeMemory[] {
    if (data == null) return [];
    switch (data.kind) {
        case 'float':
            return [
                data.v === 0
                    ? magnitude.toMemory.parse({ kind: 'float', v: 0 })
                    : magnitude.toMemory.parse({
                          kind: 'float',
                          v: truncate(precision, true)(data.v * factor)
                      })
            ];
        case 'int':
            return [
                data.v === 0
                    ? magnitude.toMemory.parse({ kind: 'float', v: 0 })
                    : magnitude.toMemory.parse({
                          kind: 'float',
                          v: truncate(precision, true)(data.v * factor)
                      })
            ];
        case 'fraction':
            const { n, d, i } = data;
            let i2 = Math.floor((i ?? 0) * factor);
            let d2 = d;
            let n2 = Math.ceil((n ?? 0) * factor);
            if (n2 >= d2) {
                n2 = n2 - d2;
                i2 = i2 + 1;
            }
            return [
                magnitude.toMemory.parse({
                    kind: 'fraction',
                    i: i2,
                    n: n2,
                    d: d2
                })
            ];
    }
}
