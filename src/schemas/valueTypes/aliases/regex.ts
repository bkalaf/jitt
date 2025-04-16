import { z } from 'zod';

const toMemory = z.preprocess((arg) => {
    return arg == null || arg === ''
        ? 'N/A'
        : typeof arg === 'string'
        ? new RegExp(
              arg.startsWith('/') && arg.endsWith('/')
                  ? arg.slice(1, arg.length - 1)
                  : arg
          )
        : 'N/A';
}, z.instanceof(RegExp).or(z.literal('N/A')));

const toDatabase = z.preprocess(
    (val) =>
        val === null || val == ''
            ? undefined
            : val instanceof RegExp
            ? val.toString()
            : val,
    z
        .string()
        .regex(
            /^\/.+\/$/,
            'Must be in the format of a javascript regular expression.'
        )
        .optional()
);

export type RegExpMemory = z.infer<typeof toMemory>;
export type RegExpDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
