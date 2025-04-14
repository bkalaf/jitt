import express, {  } from 'express';
import { z } from 'zod';
import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import mercariBrand, { MercariBrandMemory } from './mercariBrand';
import $fk from '../foreignKey';

const toMemory = z.object({
    _id: $objectId.memory,
    name: $memReq(z.string(), '', [
        is.zodString,
        (x) =>
            x.max(150, `Value must be under 150 characters in length.`).trim()
    ]),
    timestamp: $memOpt($date.timestamp.memory, '', z.undefined()),
    regex: $memOpt($string.regex, '', z.undefined()),
    mercariBrand: $fk.toMemory(mercariBrand.toMemory)
});

const toDatabase = z.object({
    _id: $objectId.database,
    name: $dbReq(z.string(), '', [
        is.zodString,
        (x) =>
            x.max(150, `Value must be under 150 characters in length.`).trim()
    ]),
    timestamp: $dbOpt(is.zodString)(
        $date.timestamp.database,
        '',
        z.undefined()
    ),
    regex: $dbOpt(is.zodString)($string.regex, '', z.undefined()),
    mercariBrand: $fk.toDatabase(mercariBrand.toDatabase)
});

export default {
    toMemory,
    toDatabase
}

export type BrandMemory = z.infer<typeof toMemory>;
export type BrandDatabase = z.infer<typeof toDatabase>;
