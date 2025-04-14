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
    enumType: z.string().default(''),
    values: z
        .object({
            group: z.string().array().optional(),
            image: z.string().default(''),
            label: z.string().default(''),
            value: z.union([z.string(), z.number().int()]).default(''),
            selector: z.string().default(''),
            regex: $string.regex.default('')
        })
        .array()
        .default([])
});

const toDatabase = z.object({
    _id: $objectId.database,
    enumType: z.string().nonempty(),
    values: z
        .object({
            group: z.string().array().optional(),
            image: z
                .string()
                .optional()
                .transform((val) => (val === '' ? undefined : val)),
            label: z.string(),
            value: z.string(),
            selector: z
                .string()
                .startsWith('#')
                .optional()
                .transform((val) => (val === '' ? undefined : val)),
            regex: $string.regex
                .optional()
                .transform((val) => (val === '' ? undefined : val))
        })
        .array()
        .default([])
});

export default {
    toMemory,
    toDatabase
}

export type DropdownMemory = z.infer<typeof toMemory>;
export type DropdownDatabase = z.infer<typeof toDatabase>;