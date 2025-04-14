import { z } from 'zod';

export function checkType<T extends z.ZodType>(Ctor: Function) {
    return function (testFor: z.ZodType): testFor is T {
        return testFor instanceof Ctor;
    };
}

export function checkWrappedType<T extends z.ZodType>(predicate: (x: z.ZodType) => boolean) {
    return function (testFor: z.ZodEffects<z.AnyZodObject>) {
        const inner = testFor._def.schema;
        return predicate(inner);
    };
}   
const isZodString = checkType<z.ZodString>(z.ZodString);
const isZodEffect = checkType<z.ZodEffects<z.AnyZodObject>>(z.ZodEffects);
const isZodNumber = checkType<z.ZodNumber>(z.ZodNumber);
const isZodObject = checkType<z.ZodObject<any>>(z.ZodObject);

export default {
    zodString: isZodString,
    zodEffects: isZodEffect,
    zodNumber: isZodNumber,
    zodObject: isZodObject
}