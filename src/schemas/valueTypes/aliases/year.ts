import { z } from 'zod';

const toMemory = z.preprocess(
    (val) => (val == null || val === '' ? '' : val.toString()),
    z
        .string()
        .regex(
            /^1[0-9]{3}$|^20[0-4][0-9]$|^$/,
            'Must be a 4 digit year, or an empty string.'
        )
        .default('')
);

const toDatabase = z.preprocess(
    (val) => (val == null || val === '' ? undefined : parseInt(val as string)),
    z
        .number()
        .int()
        .min(1000, 'Minimum value is 1000.')
        .max(2049, 'Maximum value is 2049.')
        .optional()
);

export type YearMemory = z.infer<typeof toMemory>;
export type YearDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
