import { z } from 'zod';
import { extendZod } from './extendZod';

export function $memReq<T extends z.ZodType>(
    type: T,
    defaultValue: z.infer<T>,
    ...funcs: [(x: z.ZodType) => x is T, (x: T) => z.ZodType][]
) {
    return [...funcs]
        .map(([predicate, f]) => (x: z.ZodType) => {
            if (predicate(x)) return f(x);
            return x;
        })
        .reduce((pv, cv) => cv(pv), type.default(defaultValue) as z.ZodType) as T;
}

export function $dbReq<T extends z.ZodType>(
    type: T,
    defaultValue: z.infer<T>,
    ...funcs: [(x: z.ZodType) => x is T, (x: T) => z.ZodType][]
) {
    return [...funcs]
        .map(([predicate, f]) => (x: z.ZodType) => {
            if (predicate(x)) return f(x);
            return x;
        })
        .reduce((pv, cv) => cv(pv), type.default(defaultValue) as z.ZodType) as T;
}