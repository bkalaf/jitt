import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import barcodeCategory from './barcodeCategory';

const { toMemory: barcodeCategoryMemory, toDatabase: barcodeCategoryDatabase } = barcodeCategory;

const toMemory = z.object({
    _id: $objectId.memory,
    sku: barcodeCategoryMemory,
    locator: barcodeCategoryMemory
})

const toDatabase = z.object({
    _id: $objectId.database,
    sku: barcodeCategoryDatabase,
    locator: barcodeCategoryDatabase
});

export default {
    toMemory,
    toDatabase
}