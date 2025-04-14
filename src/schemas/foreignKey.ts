import { z } from 'zod';
import mercariBrand from './entities/mercariBrand';
import { ObjectId } from 'mongodb';
import $objectId from './objectId';

export const toMemory = <T extends z.ZodType>(
    fkType: T
) => {
    // return z.preprocess((data, ctx) => {
    //     if (data == null) return undefined;
    //     const oid = typeof data === 'string' ? new ObjectId(data) : data instanceof ObjectId ? data : undefined;
    //     let result;
    //     if (oid != null) {
    //         fetch(`http://localhost:3000/api/v1/${collection}/${oid.toHexString()}`);
    //     }
    // }, fkType)
    return z.union([z.undefined(), fkType]).optional().transform((val) => val == null ? undefined : fkType.parse(val));
    // return fkType.optional().transform(val => val == null ? )
};

export const toDatabase = (
    fkType: z.ZodType<{ _id: z.infer<typeof $objectId.database> }>

    //  z.ZodObject<{
    //    _id: z.ZodDefault<z.ZodEffects<z.ZodType<ObjectId, z.ZodTypeDef, ObjectId>>>;
    // }>
): z.ZodOptional<z.ZodType<ObjectId>> => {
    return fkType.transform(({ _id }) => _id).optional() as any as z.ZodOptional<
        z.ZodType<ObjectId>
    >;
};

export const toMemoryArray = <T extends z.ZodType>(fkType: T) => {
    return z.set(fkType).default(new Set());
};
export const toDatabaseArray = <T extends z.ZodType>(
    fkType: z.ZodType<{ _id: z.infer<typeof $objectId.database> }>
) => {
    return z
        .set(fkType.transform(({ _id }) => _id))
        .optional()
        .transform((val) => (val == null || val.size === 0 ? undefined : val));
};

export default {
    toDatabase,
    toMemory,
    asSet: {
        toMemory: toMemoryArray,
        toDatabase: toDatabaseArray
    }
};
