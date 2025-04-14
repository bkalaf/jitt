import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import mercariTaxonomy from './mercariTaxonomy';
// import classification from './classification';
import hashTag from './hashTag';

const { toMemory: taxonomyMemory, toDatabase: taxonomyDatabase } = mercariTaxonomy;
const { toMemory: hashTagMemory, toDatabase: hashTagDatabase } = hashTag;


const toMemory = z.object({
    path: z.string().default('/'),
    taxonomy: taxonomyMemory.optional(),
    hashTags: hashTagMemory.array().default([]),
    // traits: 
}).transform(data => ({
    ...data,
    isTaxonomyNode: data.taxonomy != null,
    isNonTaxonomyNode: data.taxonomy == null
}))

const toDatabase = z.object({

})

export default {
    toMemory,
    toDatabase
}

export type Memory = z.infer<typeof toMemory>;
export type Database = z.infer<typeof toDatabase>;