import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';


const toMemory = z.object({
    _id: $objectId.memory,
    path: z.string().nonempty().default('/'),
    // taxonomyNodes: undefined,
    // nonTaxonomyNodes: undefined
})

const toDatabase = z.object({

})

export default {
    toMemory,
    toDatabase
}