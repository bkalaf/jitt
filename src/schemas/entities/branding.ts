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
import brand from './brand';
import productLine from './productLine';
import unionCase from './unionCase';
import { brandingMemoryToNarrative } from './toNarrative/brandingToNarrative';

const toMemory = z
    .discriminatedUnion('kind', [
        z.object({
            kind: z.literal('brand'),
            value: brand.toMemory
        }),
        z.object({
            kind: z.literal('productLine'),
            value: productLine.toMemory
        })
    ]);

const toDatabase = z
    .discriminatedUnion('kind', [
        z.object({
            kind: z.literal('brand'),
            value: brand.toDatabase
        }),
        z.object({
            kind: z.literal('productLine'),
            value: productLine.toDatabase
        })
    ])
    .optional();

export default {
    toMemory,
    toDatabase
};

export type BrandingMemory = z.infer<typeof toMemory>;
export type BrandingDatabase = z.infer<typeof toDatabase>;
