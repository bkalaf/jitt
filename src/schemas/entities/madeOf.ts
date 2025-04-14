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
import { FabricTypes } from '../enums/fabricTypes';

const toMemory = z
    .discriminatedUnion('kind', [
        z.object({
            kind: z.literal('single-section'),
            value: z.record(
                z
                    .number()
                    .gte(0, 'Must be greater than 0.')
                    .lte(100, 'Must be less than or equal to 100.')
                    .default(0),
                FabricTypes.default('')
            )
        }),
        z.object({
            kind: z.literal('multi-section'),
            value: z.record(
                z.record(
                    z
                        .number()
                        .gte(0, 'Must be greater than 0.')
                        .lte(100, 'Must be less than or equal to 100.')
                        .default(0),
                    FabricTypes.default('')
                )
            )
        }),
        z.object({
            kind: z.literal('empty')
        })
    ])
    .default({ kind: 'empty' });

const toDatabase = z
    .discriminatedUnion('kind', [
        z.object({
            kind: z.literal('single-section'),
            value: z.record(
                z
                    .number()
                    .gte(0, 'Must be greater than 0.')
                    .lte(100, 'Must be less than or equal to 100.')
                    .default(0),
                FabricTypes.default('')
            )
        }),
        z.object({
            kind: z.literal('multi-section'),
            value: z.record(
                z.record(
                    z
                        .number()
                        .gte(0, 'Must be greater than 0.')
                        .lte(100, 'Must be less than or equal to 100.')
                        .default(0),
                    FabricTypes.default('')
                )
            )
        }),
        z.object({
            kind: z.literal('empty')
        })
    ])
    .default({ kind: 'empty' });

export default {
    toMemory,
    toDatabase
};

export type MadeOfMemory = z.infer<typeof toMemory>;
export type MadeOfDatabase = z.infer<typeof toDatabase>;
