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
    leading: z.number().int().nonnegative().max(10, 'Must be less than 10.'),
    group: z.number().int().nonnegative().array().default([]),
    current: z
        .number()
        .int()
        .nonnegative()
        .max(100000, 'Must be less than 100000.')
});

const toDatabase = z.object({
    leading: z.number().int().nonnegative().max(10, 'Must be less than 10.'),
    group: z.number().int().nonnegative().array().default([]),
    current: z
        .number()
        .int()
        .nonnegative()
        .max(100000, 'Must be less than 100000.')
});

export default {
    toMemory,
    toDatabase
};
