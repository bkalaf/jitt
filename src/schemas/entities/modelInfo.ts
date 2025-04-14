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
    modelName: z.string().default(''),
    modelNumber: z.string().default('')
});

const toDatabase = z.object({
    modelName: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val)),
    modelNumber: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val))
});

export default {
    toMemory,
    toDatabase
};

export type ModelInfoMemory = z.infer<typeof toMemory>;
export type ModelInfoDatabase = z.infer<typeof toDatabase>;
