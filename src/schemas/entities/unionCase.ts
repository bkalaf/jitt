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
import { ObjectId } from 'mongodb';

const toMemory = <T>(kind: z.ZodLiteral<T>, value: z.ZodType<{ _id?: string | ObjectId }>) => z.object({
    kind: kind,
    value: value
})

const toDatabase = <T>(
    kind: z.ZodLiteral<T>,
    value: z.ZodType<{ _id: ObjectId }>
) =>
    z.object({
        kind: kind,
        value: $fk.toDatabase(value)
    });

export default {
    toMemory,
    toDatabase
}

export type UnionCaseMemory = z.infer<ReturnType<typeof toMemory>>;
export type UnionCaseDatabase = z.infer<ReturnType<typeof toDatabase>>;