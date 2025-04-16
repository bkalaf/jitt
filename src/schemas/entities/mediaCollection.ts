import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { MediaTypes } from '../valueTypes/enums/mediaTypes';

const toMemory = z.object({
    _id: $objectId.memory,
    mediaType: MediaTypes.default(''),
    name: z.string().default(''),
    regex: $string.regex.default('')
});

const toDatabase = z.object({
    _id: $objectId.database,
    mediaType: MediaTypes.optional().transform((val) =>
        val == '' || val == null ? undefined : val
    ),
    name: z.string().nonempty(),
    regex: $string.regex
        .optional()
        .transform((val) => (val === '' ? undefined : val))
});

export default {
    toMemory,
    toDatabase
};

export type MediaCollectionMemory = z.infer<typeof toMemory>;
export type MediaCollectionDatabase = z.infer<typeof toDatabase>;
