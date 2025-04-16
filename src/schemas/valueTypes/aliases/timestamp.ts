import { z } from 'zod';

const toMemory = z
    .string()
    .datetime()
    .default(() => new Date(Date.now()).toISOString());

const toDatabase = z.preprocess(
    (val) =>
        val == null || val == ''
            ? new Date(Date.now()).toISOString()
            : new Date(Date.parse(val as string)).toISOString(),
    z.date().default(() => new Date(Date.now()))
);

export type TimestampMemory = z.infer<typeof toMemory>;
export type TimestampDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
