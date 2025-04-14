import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import individualBarcode from './individualBarcode';

const { toMemory: individualBarcodeMemory, toDatabase: individualBarcodeDatabase } = individualBarcode;

const toMemory = z.object({
    _id: $objectId.memory,
    barcodes: individualBarcodeMemory.array().default([])
})

const toDatabase = z.object({
    _id: $objectId.database,
    barcodes: individualBarcodeDatabase.array().default([])
})

export default {
    toMemory,
    toDatabase
}

export type BarcodeMemory = z.infer<typeof toMemory>;
export type BarcodeDatabase = z.infer<typeof toDatabase>;