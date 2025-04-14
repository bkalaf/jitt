import { z } from 'zod';

export const asSetMemory = <T extends Record<string, string>>(
    type: z.ZodNativeEnum<T>
) => z.set(type).default(new Set());

export const asSetDatabase = <T extends Record<string, string>>(
    type: z.ZodNativeEnum<T>
) =>
    z
        .set(type)
        .optional()
        .transform((val) => (val == null || val.size === 0 ? undefined : val));

export default {
    asSet: {
        toMemory: asSetMemory,
        toDatabase: asSetDatabase
    }
}