import { MagnitudeMemory } from '../magnitude';
import { truncate } from '../../../common/truncate';

export function magnitudeToString(data?: MagnitudeMemory, precision = 2) {
    if (data == null) return [];
    switch (data.kind) {
        case 'float':
            return data.v === 0
                ? []
                : [
                      truncate(
                          precision,
                          true
                      )(parseFloat(data.v.toFixed(precision))).toString()
                  ];
        case 'int':
            return data.v === 0 ? [] : [data.v.toFixed(0)];
        case 'fraction':
            return [
                [
                    ...(data.i == null || data.i === 0
                        ? []
                        : [data.i.toFixed(0)]),
                    ...(data.d >= 1 && data.n >= 1
                        ? [data.n.toFixed(0), data.d.toFixed(0)].join('/')
                        : [])
                ].join(' ')
            ];
    }
}
