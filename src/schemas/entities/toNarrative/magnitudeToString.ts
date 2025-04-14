import { MagnitudeMemory } from '../magnitude';

export function magnitudeToString(data?: MagnitudeMemory, precision = 2) {
    if (data == null) return [];
    switch (data.kind) {
        case 'float':
            return data.v === 0 ? [] : [data.v.toFixed(precision)];
        case 'int':
            return data.v === 0 ? [] : [data.v.toFixed(0)];
        case 'fraction':
            return [
                [
                    ...(data.i == null || data.i === 0
                        ? []
                        : [data.i.toFixed(0)]),
                    ...(data.d >= 1
                        ? [data.n.toFixed(0), data.d.toFixed(0)].join('/')
                        : [])
                ].join(' ')
            ];
    }
}
