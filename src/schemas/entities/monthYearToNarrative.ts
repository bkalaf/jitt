import { toKVP } from '../../util/toKVP';
import { enumLookup } from '../enums/inverseEnum';
import { Months } from '../enums/months';
import { MonthYearMemory } from '../valueTypes/embeddedObjects/monthYear';

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
