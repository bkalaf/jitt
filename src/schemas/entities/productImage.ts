import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { ImageTypes } from '../valueTypes/enums/imageTypes';
import binaryData from '../embedded/binaryData';
import brand from './brand';
import productLine from './productLine';
import unionCase from './unionCase';
import barcode from './barcode';
import branding from './branding';

const { toMemory: memoryBinData, toDatabase: databaseBinData } = binaryData;

const toMemory = z
    .object({
        _id: $objectId.memory,
        sku: z.object({
            product: z.object({
                branding: branding.toMemory
            }),
            skus: $fk.asSet.toMemory(barcode.toMemory)
        }),
        name: z.string().default(''),
        selection: ImageTypes.default(''),
        ignore: z.boolean().default(false),
        noRemoveBg: z.boolean().default(false),
        original: memoryBinData.optional(),
        removeBg: memoryBinData.optional()
    })
    .transform((data) => ({
        ...data,
        hasSelection: data.selection !== ''
    }));

const toDatabase = z.object({
    _id: $objectId.database,
    sku: z.object({
        product: z.object({
            branding: branding.toDatabase
        }),
        skus: $fk.asSet.toMemory(barcode.toDatabase)
    }),
    name: z.string().nonempty(),
    selection: ImageTypes.optional().transform((val) =>
        val == null || val === '' ? undefined : val
    ),
    ignore: z.boolean(),
    noRemoveBg: z.boolean(),
    original: databaseBinData.optional(),
    removeBg: databaseBinData.optional()
});

export default {
    toMemory,
    toDatabase
};

export type ProductImageMemory = z.infer<typeof toMemory>;
export type ProductImageDatabase = z.infer<typeof toDatabase>;
