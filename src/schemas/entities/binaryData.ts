import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { MimeTypes } from '../enums/mimeTypes';

const toMemory = z.object({
    data: z.instanceof(ArrayBuffer).optional(),
    mimeType: MimeTypes.default('')
}).transform(data => ({
    ...data,
    blob: () => data.data ? new Blob([data.data], { type: data.mimeType }) : undefined
}))

const toDatabase = z.object({
    data: z.instanceof(ArrayBuffer).optional(),
    mimeType: MimeTypes.transform(val => val === '' ? undefined : val)
});

export default {
    toMemory,
    toDatabase
}

export type BinaryDataMemory = z.infer<typeof toMemory>;
export type BinaryDataDatabase = z.infer<typeof toDatabase>;
