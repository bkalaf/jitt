import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';

const toMemory = z.discriminatedUnion('kind', [
    z.object({
        kind: z.literal('int'),
        v: z.number().int().nonnegative()
    }),
    z.object({
        kind: z.literal('float'),
        v: z.number().positive()
    }),
    z.object({
        kind: z.literal('fraction'),
        i: z.number().int().nonnegative().optional(),
        n: z
            .number()
            .int()
            .nonnegative()
            .gte(0, 'Must be greater than or equal to 0.')
            .default(0),
        d: z
            .number()
            .int()
            .positive()
            .gte(1, 'Must be greater than or equal to 1')
            .default(1)
    })
]);

const toDatabase = toMemory;

export default {
    toMemory,
    toDatabase
};

export type MagnitudeMemory = z.infer<typeof toMemory>;
export type MagnitudeDatabase = z.infer<typeof toDatabase>;
