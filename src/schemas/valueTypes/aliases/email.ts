import { z } from 'zod';

const toMemory = z.string().email().or(z.literal('')).default('');
const toDatabase = z.preprocess(
    (val) => (val == null || val == '' ? undefined : val),
    z.string().email().optional()
);

export type EmailMemory = z.infer<typeof toMemory>;
export type EmailDatabase = z.infer<typeof toDatabase>;


export default {
    toMemory,
    toDatabase
}