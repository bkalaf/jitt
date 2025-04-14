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
    from: $date.timestamp.memory,
    count: z.number().int().nonnegative().default(0)
})

const toDatabase = z.object({
    from: $date.timestamp.database,
    count: z.number().int().nonnegative()
})

export default {
    toMemory,
    toDatabase
}