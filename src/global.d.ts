import { z } from 'zod';

declare global {
    type IPredicate<T extends any[]> = (...args: [...T]) => boolean;
    type ObjectReturnType<T extends z.ZodRawShape = z.ZodRawShape> =
        z.ZodObject<T>;
    type TransformReturnType<T extends z.ZodRawShape = z.ZodRawShape> =
        ReturnType<z.ZodObject<T>['transform']>;
    type MemoryOrDatabaseType<T extends z.ZodRawShape = z.ZodRawShape> =
        | ObjectReturnType<T>
        | TransformReturnType<T>;

    interface String {
        output: string[];
    }
    interface Array {
        preface: <T>(this: Array<T>, s: T) => Array<T>;
        prefaceIfNonEmpty: <T>(this: Array<T>, s: T) => Array<T>;
        prefaceNonEmptyJoin: (this: Array<string>, s?: string, j?: string) => Array<string>;
    }
}

export const i = 1;

