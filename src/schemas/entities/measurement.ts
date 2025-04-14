import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $enum from '../enum';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import magnitude, { MagnitudeMemory } from './magnitude';
import { LengthUOM } from '../enums/lengthUOM';

export const baseMagnitudeToMemory = <
    TKey extends string,
    T extends Record<string, TKey>
>(
    obj: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
) =>
    z.object({
        mag: magnitude.toMemory.default({ kind: 'int', v: 0 }),
        unit: obj.default(defValue)
    });

const schema = <TKey extends string, T extends Record<string, TKey>>(
    obj: z.ZodNativeEnum<T>,
    defValue: z.infer<z.ZodNativeEnum<T>>
): ReturnType<typeof baseMagnitudeToMemory> & {
    remain?: ReturnType<typeof baseMagnitudeToMemory>[];
} =>
    baseMagnitudeToMemory(obj, defValue).extend({
        remain: z.lazy(() => schema(obj, defValue).array().optional())
    }) as any;

export default {
    toMemory: schema,
    toDatabase: schema
};

export type MeasurementMemory<
    TKey extends string,
    T extends Record<string, TKey>
> = ReturnType<typeof schema<TKey, T>>;
export type MeasurementDatabase<
    TKey extends string,
    T extends Record<string, TKey>
> = ReturnType<typeof schema<TKey, T>>;

/*
: z.ZodType<{
    mag: MagnitudeMemory;
    unit: LengthUOM;
}> */
