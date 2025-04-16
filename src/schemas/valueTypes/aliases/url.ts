import { z } from 'zod';

const toMemory = z.string().url().or(z.literal('')).default('');
const toDatabase = z.preprocess(
    (val) => (val === null || val == '' ? undefined : val),
    z.string().url().optional()
);

export type URLMemory = z.infer<typeof toMemory>;
export type URLDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
