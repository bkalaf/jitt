import { z } from 'zod';

export function inverseEnum<T extends z.EnumLike>(rec: z.ZodNativeEnum<T>) {
    return Object.fromEntries(Object.entries(rec.enum).map(([k, v]) => [v, k]));
}

export function enumLookup<T extends Record<string, string>>(rec: z.ZodNativeEnum<T>) {
    return (value?: z.infer<typeof rec> | ''): string | undefined => {
        return value == null || value === '' ? undefined : inverseEnum(rec)[value]; 
    }
}