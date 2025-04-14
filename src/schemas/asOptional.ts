import { z } from 'zod';
import { extendZod } from './extendZod';

export function $memOpt<T extends z.ZodType>(
    type: T,
    defaultValue: z.infer<T>,
    nullish: z.ZodType = z.undefined(),
    ...funcs: [(x: z.ZodType) => x is T, (x: T) => z.ZodType][]
 ): T {
    return [...funcs]
        .map(([predicate, f]) => (x: z.ZodType) => {
            if (predicate(x)) return f(x);
            return x;
        })
        .reduce(
            (pv, cv) => cv(pv),
            z
                .union([type, nullish])
                .optional()
                .default(defaultValue) as z.ZodType
        ) as T;
}

export function $dbOpt<T extends z.ZodType>(
    predicate: (x: z.ZodType) => x is T
) {
    return function asOptional<TNullish extends z.ZodType>(
        type: z.ZodType,
        defaultValue: z.infer<T>,
        nullish: TNullish = z.undefined() as unknown as TNullish,
        ...funcs: [(x: z.ZodType) => x is T, (x: T) => z.ZodType][]
    ) {
        return [
            ...funcs,
            [
                predicate,
                (item: T) =>
                    item.transform((val) =>
                        val === defaultValue ? undefined : val
                    )
            ] as [(x: z.ZodType) => x is T, (x: T) => z.ZodType]
        ]
            .map(([predicate, f]) => (x: z.ZodType) => {
                if (predicate(x)) return f(x);
                return x;
            })
            .reduce(
                (pv, cv) => cv(pv),
                z
                    .union([type, nullish])
                    .optional()
                    .default(defaultValue) as z.ZodType
            ) as z.ZodUnion<[T, TNullish]>;
    };
}
