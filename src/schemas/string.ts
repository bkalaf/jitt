import { z, ZodString, ZodType } from 'zod';
import { toFunc } from './toFunc';
import $is from './checkType';

const emptyOrUndefined = z.union([
    z.string().refine((val) => val === ''),
    z.undefined()
]);

const url = z
    .string()
    .max(200, 'Value must be less than 200 characters.')
    .url();

const optionalString = (zodString: z.ZodType) =>
    z.union([zodString, emptyOrUndefined]).default('').optional();

const regex = z
    .string()
    .transform((val) =>
        val.startsWith('/') && val.endsWith('/')
            ? val.slice(1, val.length - 1)
            : val
    )
    .refine((val) => {
        try {
            const regexp = new RegExp(val);
            return true;
        } catch (error) {
            console.log(`error: ${(error as Error).message}`);
            return false;
        }
    }, `Value must be a valid RegExp.`);

export default {
    url,
    regex,
    emptyOrUndefined,
    optional: {
        memory: (
            zodString: z.ZodType = z.string(),
            func?: (zString: z.ZodType) => z.ZodType
        ) => optionalString(toFunc(func)(zodString)),
        database: (
            zodString: z.ZodType = z.string(),
            func?: (zString: z.ZodType) => z.ZodType
        ) =>
            optionalString(toFunc(func)(zodString)).transform((val) =>
                val === '' ? undefined : val
            )
    },
    required: {
        memory: (
            zodString: z.ZodType = z.string(),
            func?: (zString: z.ZodType) => z.ZodType
        ) => toFunc(func)(zodString).default(''),
        database: (
            zodString: z.ZodType = z.string(),
            func?: (zString: z.ZodType) => z.ZodType
        ) =>
            toFunc(func)(
                $is.zodString(zodString)
                    ? zodString.nonempty('Value cannot be an empty string.')
                    : zodString
            )
    }
};
