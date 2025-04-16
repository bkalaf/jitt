import { z } from 'zod';

const toMemory = z
    .number()
    .or(z.literal(''))
    .default('')
    .transform((val) => {
        if (val == null || val === '') return '';
        return '$'.concat(val.toFixed(2));
    });

const toDatabase = z.preprocess((val) => {
    if (val == null) return undefined;
    const num = (val as string).replaceAll('$', '');
    const v = parseFloat(num);
    if (v === 0) return undefined;
    return parseFloat(v.toFixed(2));
}, z.number().gte(0, 'Value must be greater than 0.').optional());

export type MoneyMemory = z.infer<typeof toMemory>;
export type MoneyDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
