import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import mercariCategory from './mercariCategory';

const toMemory = z
    .object({
        _id: $objectId.memory,
        timestamp: $date.timestamp.memory,
        category: mercariCategory.toMemory,
        subCategory: mercariCategory.toMemory,
        subSubCategory: mercariCategory.toMemory
    })
    .transform((data) => ({
        ...data,
        name: [
            data.category.name,
            data.subCategory.name,
            data.subSubCategory.name
        ].join(' || ')
    }));

const toDatabase = z
    .object({
        _id: $objectId.database,
        timestamp: $date.timestamp.database,
        category: mercariCategory.toDatabase,
        subCategory: mercariCategory.toDatabase,
        subSubCategory: mercariCategory.toDatabase
    })
    

export default {
    toMemory,
    toDatabase
}

export type MercariTaxonomyDatabase = z.infer<typeof toDatabase>;