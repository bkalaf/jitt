import { toKVP } from '../../util/toKVP';
import { enumLookup } from '../valueTypes/enums/inverseEnum';
import { Months } from '../valueTypes/enums/months';
import { MonthYearMemory } from '../embedded/monthYear';

export function monthYearToNarrative(data: MonthYearMemory) {
    return {
        ...data,
        output: toKVP(
            data?.month != null && data?.month !== '0'
                ? 'Manufacture Date'
                : 'Circa'
        )(
            data?.month != null &&
                data?.month !== '0' &&
                data?.year != null &&
                data?.year !== ''
                ? [enumLookup(Months)(data?.month), data?.year].join(' ')
                : data?.year != null && data?.year !== ''
                    ? data?.year
                    : undefined
        )
    };
}
