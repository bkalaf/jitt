///<reference path="./../../global.d.ts" />
import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { length } from './uoms';
import { surround, surroundParens } from '../../common/addPrefix';
import { toKVP } from '../../util/toKVP';

const toMemory = z
    .object({
        length: length.toMemory.default({ uom: 'in', value: 0 }),
        width: length.toMemory.default({ uom: 'in', value: 0 }),
        height: length.toMemory.default({ uom: 'in', value: 0 })
    })
    .transform((data) => ({
        ...data,
        output: [data.length.output, data.width.output, data.height.output]
            .filter((val) => val != null && val != '')
            .join(' x '),
        outputKey: [
            data.length.output != '' ? 'L' : undefined,
            data.width.output != '' ? 'W' : undefined,
            data.height.output != '' ? 'H' : undefined
        ]
            .filter((x) => x != null)
            .join('')
    }))
    .transform((data) => ({
        ...data,
        narrative: toKVP(['Dimensions', surroundParens(data.outputKey)].join(' '))(data.output)
    }));

console.log(toMemory.parse({ length: { value: 1, uom: 'in' } }));

const toDatabase = z.object({
    length: length.toDatabase
        .optional()
        .transform((data) =>
            data?.value === 0 && data?.remain == null ? undefined : data
        ),
    width: length.toDatabase
        .optional()
        .transform((data) =>
            data?.value === 0 && data?.remain == null ? undefined : data
        ),
    height: length.toDatabase
        .optional()
        .transform((data) =>
            data?.value === 0 && data?.remain == null ? undefined : data
        )
});

export default {
    toMemory,
    toDatabase
};

console.log(toMemory.parse({ length: { value: 1, uom: 'in' } }));
console.log(toDatabase.parse({ length: { value: 1, uom: 'in' } }));
console.log(
    toMemory.parse({
        length: {
            value: { integer: 11, numerator: 1, denominator: 2 },
            uom: 'in'
        },
        width: { value: 3, uom: 'in' }
    })
);
console.log(toMemory.parse({}))