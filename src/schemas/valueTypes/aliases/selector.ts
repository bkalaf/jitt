import { z } from 'zod';

const toMemory = z
    .string()
    .regex(/^#.+/, 'Must begin with a #.')
    .or(z.literal(''))
    .default('');
const toDatabase = z.preprocess(
    (val) =>
        val === null || val == ''
            ? undefined
            : typeof val === 'string'
            ? val.startsWith('#')
                ? val
                : val.slice(1)
            : val,
    z.string().regex(/^#.+/, 'Must begin with a #.').optional()
);

export type SelectorMemory = z.infer<typeof toMemory>;
export type SelectorDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
