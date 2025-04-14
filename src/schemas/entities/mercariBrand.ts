import express from 'express';
import { z } from 'zod';
import $objectId from '../objectId';
import $date from '../date';
import { $dbOpt, $memOpt } from '../asOptional';
import is from '../checkType';
import { $dbReq, $memReq } from '../asRequired';
import { toFolderName } from '../../aggregate/toFolderName';
import $fk from '../foreignKey';

const toMemory = z
    .object({
        _id: $objectId.memory,
        name: $memReq<z.ZodString>(z.string(), '', [
            is.zodString,
            (x) =>
                x
                    .max(150, `Value must be under 150 characters in length.`)
                    .trim()
        ]),
        timestamp: $date.timestamp.memory,
        id: z
            .number()
            .int('Value must be a valid integer.')
            .nonnegative('Must be a non-negative number.')
            .default(0)
    })
    .transform(({ id, name, ...rest }) => ({
        ...rest,
        id,
        name,
        selector: id == null ? undefined : `#sellBrandOptions-${id}`,
        folder: toFolderName(name)
    }));

export type MercariBrandMemory = z.infer<typeof toMemory>;

const toDatabase = z.object({
    _id: $objectId.database,
    name: $dbReq(z.string(), '', [
        is.zodString,
        (x) =>
            x.max(150, `Value must be under 150 characters in length.`).trim()
    ]),
    timestamp: $date.timestamp.database,
    id: z
        .number()
        .int('Value must be a valid integer.')
        .nonnegative('Must be a non-negative number.')
        .optional()
        .transform((val) => (val === 0 ? undefined : val))
});

export type MercariBrandDatabase = z.infer<typeof toDatabase>;
    
export default {
    toDatabase,
    toMemory
};
