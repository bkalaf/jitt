import { z } from 'zod';

const toMemory = z.string().date().or(z.literal('')).default('');
const toDatabase = z.preprocess(
    (val) => (val === null || val == '' ? undefined : val),
    z.string().date().optional()
);

export type DateOnlyMemory = z.infer<typeof toMemory>;
export type DateOnlyDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
