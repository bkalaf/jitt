import { z } from 'zod';
import sanitize from 'sanitize-filename';

export function replaceAll(toFind: string, toReplace = '') {
    return (s: string): string =>
        s.includes(toFind)
            ? replaceAll(toFind, toReplace)(s.replaceAll(toFind, toReplace))
            : s;
}
const toMemory = z
    .string()
    .trim()
    .or(z.literal(''))
    .default('')
    .transform((val) =>
        replaceAll('--', '-')(sanitize(val, { replacement: '-' }))
    );
const toDatabase = z.preprocess(
    (val) =>
        val == null || val == ''
            ? undefined
            : replaceAll(
                  '--',
                  '-'
              )(sanitize(val as string, { replacement: '-' })),
    z
        .string()
        .trim()
        .regex(
            /[A-Za-z0-9-_]+/,
            'Must only have alpha-numeric characters, underscores, or hypens.'
        ).or(z.undefined())
);

export type FilenameMemory = z.infer<typeof toMemory>;
export type FilenameDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
}


