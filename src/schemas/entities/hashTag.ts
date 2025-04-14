import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import hashTagUsage from './hashTagUsage';

const toMemory = z
    .object({
        _id: $objectId.memory,
        name: z.string().default(''),
        usage: z.array(hashTagUsage.toMemory).default([])
    })
    .transform((data) => ({
        ...data,
        mostRecent: new Date(
            Math.min(...data.usage.map((x) => Date.parse(x.from)))
        ).toISOString(),
        mostCount: Math.max(...data.usage.map(x => x.count))
    }));

const toDatabase = z.object({
    _id: $objectId.database,
    name: z.string().nonempty().toLowerCase(),
    usage: z.array(hashTagUsage.toDatabase).default([])
});

export default {
    toMemory,
    toDatabase
}

export type HashTagMemory = z.infer<typeof toMemory>