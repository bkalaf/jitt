import { z } from 'zod';

const readTimestamp = z
    .string()
    .datetime()
    .default(() => new Date(Date.now()).toISOString())
    .or(z.date().default(() => new Date(Date.now())))
    .transform((date) =>
        typeof date === 'string'
            ? new Date(Date.parse(date)).toISOString()
            : date.toISOString()
    );

const storeTimestamp = z
    .date({
        coerce: true
    })
    .default(() => new Date(Date.now()))
    .or(
        z
            .string()
            .datetime()
            .default(() => new Date(Date.now()).toISOString())
    )
    .transform((date) =>
        date instanceof Date ? date : new Date(Date.parse(date))
    );

const dateOnlyDatabase = z.string().datetime().transform((val) => val.slice(0, 10).concat('T00:00:000+00:00'));
const dateOnlyMemory = z
    .string()
    .datetime()
    .transform((val) => val.slice(0, 10).concat('T00:00:000+00:00'));

export default {
    timestamp: {
        memory: readTimestamp,
        database: storeTimestamp
    },
    dateOnly: {
        memory: dateOnlyMemory,
        database: dateOnlyDatabase
    }
};
