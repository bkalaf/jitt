import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';

const float = z.number().nonnegative().refine(arg => {
    if (arg.toString().includes('.')) return true;
    return false;
})
const int = z.number().nonnegative().int();
const fraction = z.object({
    integer: z.number().int().nonnegative().default(0),
    numerator: z.number().int().nonnegative().default(0),
    denominator: z.number().int().positive().default(1)
}).transform((data) => ({
    ...data,
    valueOf: data.integer + (data.numerator / data.denominator)
}));

const toMemory = z.union([float, z.union([int, fraction])]).default(0)

const fractionDB = z
    .object({
        integer: z.number().int().nonnegative().optional(),
        numerator: z.number().int().nonnegative(),
        denominator: z.number().int().positive()
    })

const toDatabase = z.union([float, z.union([int, fractionDB])]).optional()

export default {
    toMemory,
    toDatabase
}