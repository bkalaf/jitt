import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { MimeTypes } from '../valueTypes/enums/mimeTypes';
import { enumLookup } from '../valueTypes/enums/inverseEnum';

const toMemory = z.object({
    data: z.instanceof(ArrayBuffer).optional(),
    mimeType: MimeTypes.default('').transform((val) =>
        enumLookup(MimeTypes)(val)
    )
});

const toDatabase = z.object({
    data: z.instanceof(ArrayBuffer).optional(),
    mimeType: z.preprocess(
        (val) =>
            val == ''
                ? MimeTypes.enum['application/octet-stream']
                : MimeTypes.enum[val as keyof typeof MimeTypes.enum],
        MimeTypes.default('')
    )
});

export default {
    toMemory,
    toDatabase
};

export type BinaryDataMemory = z.infer<typeof toMemory>;
export type BinaryDataDatabase = z.infer<typeof toDatabase>;
