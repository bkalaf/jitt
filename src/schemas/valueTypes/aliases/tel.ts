import { z } from 'zod';
import { surroundParens } from '../../../common/addPrefix';

const toMemory = z.preprocess(
    (val) => {
        if (val == null || val === '') return '';
        const raw = (val as string).startsWith('+1')
            ? (val as string).replaceAll('+1', '')
            : (val as string);
        return raw;
    },
    z
        .string()
        .regex(
            /^(?<!\+1)[0-9]{10}$/,
            'Format must be a valid phone number without the +1 to start.'
        )
        .or(z.literal(''))
        .default('')
        .transform((val) =>
            val == null || val === ''
                ? ''
                : [
                      surroundParens(val.slice(0, 3)),
                      [val.slice(3, 6), val.slice(6, 10)].join('-')
                  ].join(' ')
        )
);

const toDatabase = z.preprocess(
    (val) =>
        val == null || val == '' ? undefined : '+1'.concat([' ', '(', ')', '-'].map(char => (s: string) => s.replaceAll(char, '')).reduce((pv, cv) => cv(pv), val as string)),
    z
        .string()
        .regex(/^\+1[0-9]{10}$/, 'Format must be a valid phone number.')
        .optional()
);

export type TelMemory = z.infer<typeof toMemory>;
export type TelDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
