import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { AnyZodObject, z } from 'zod';
import magnitude from './magnitude';
import { LengthUOM } from '../enums/lengthUOM';

const { toMemory: magnitudeMemory, toDatabase: magnitudeDatabase } = magnitude;

export const $toString = <T extends z.ZodTypeAny>(
    data: { value?: z.infer<T>; uom?: string } | undefined = undefined,
    defValue: string
) => {
    const precision = defValue === 'in' ? 1 : defValue === 'g' ? 0 : 0;
    return data == null
        ? ''
        : (typeof data.value === 'number'
              ? data.value === 0
                  ? undefined
                  : (data.value as number).toFixed(precision)
              : [
                    ...(data?.value?.integer > 0
                        ? [(data?.value?.integer as number).toFixed(precision)]
                        : []),
                    [
                        data?.value?.numerator.toString(),
                        data?.value?.denominator.toString()
                    ].join('/')
                ].join(' ')
          )?.concat(data.uom?.toString() ?? defValue?.toString());
}
          
const mem = <T extends Record<string, string>>(
    uom: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
) => {
    const type = z.object({
        value: magnitudeMemory,
        uom: uom.default(defValue)
    });

    type Type1 = z.infer<typeof type>;
    type Type2 = Type1 & {
        remain?: Type1;
    };
    const type2 = type.extend({
        remain: z.lazy(() => type.optional())
    }) as z.ZodType<Type2>;
    return type2
        .transform((data) => ({
            ...data,
            remain:
                data.remain != null &&
                typeof data.remain?.value === 'number' &&
                data.remain?.value === 0
                    ? undefined
                    : data.remain
        }))
        .transform((data) => ({
            ...data,
            text: [
                $toString(data, defValue),
                ...(data.remain ? [$toString(data.remain, defValue)] : [])
            ].join(' ').trim()
        }));
};
const db = <T extends Record<string, string>>(
    uom: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
) => {
    const type = z.object({
        value: magnitudeDatabase,
        uom: uom.default(defValue)
    });
    type Type1 = z.infer<typeof type>;
    type Type2 = Type1 & {
        remain?: Type1;
    };
    const type2 = type.extend({
        remain: z.lazy(() => type.optional())
    }) as z.ZodType<Type2>;
    return type2
        .transform((data) => ({
            ...data,
            remain:
                data.remain != null &&
                typeof data.remain?.value === 'number' &&
                data.remain?.value === 0
                    ? undefined
                    : data.remain
        }))
        .transform((data) => ({
            ...data,
            text: [
                $toString(data, defValue),
                ...(data.remain ? [$toString(data.remain, defValue)] : [])
            ].join(' ')
        }));
};

const toMemory = mem;
const toDatabase = db;

export default {
    toMemory,
    toDatabase
};
