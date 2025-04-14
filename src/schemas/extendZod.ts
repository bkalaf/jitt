import { z } from 'zod';
import { toFunc } from './toFunc';

export function extendZod<T extends z.ZodType, TReturn extends z.ZodType>(
    defaultType: T
) {
    return function (type: T = defaultType, func?: (input: T) => TReturn) {
        return toFunc(func)(type);
    };
}
