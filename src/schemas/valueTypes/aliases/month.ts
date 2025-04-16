import { z } from 'zod';
import { enumLookup } from '../enums/inverseEnum';
import { MonthEnum, Months } from '../enums/months';

const toMemory = z.preprocess(
    (val) => (val == null ? '0' : (val as MonthEnum).toFixed(0)),
    Months.default('0').transform((val) => enumLookup(Months)(val))
);

const toDatabase = z.preprocess(
    (val) =>
        val == null || val == enumLookup(Months)('0')
            ? undefined
            : typeof val === 'string'
            ? Months.enum[val as keyof (typeof Months)['enum']]
            : val,
    MonthEnum.optional()
);
export type MonthMemory = z.infer<typeof toMemory>;
export type MonthDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
