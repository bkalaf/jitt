import express, {  } from 'express';
import { z } from 'zod';
import $objectId from '../objectId';
import $string from '../string';
import { $dbReq, $memReq } from '../asRequired';
import is from '../checkType';

import { $dbOpt, $memOpt } from '../asOptional';
const router = express.Router();

const toMemory = z.object({
    _id: $objectId.memory,
    name: $memReq(z.string(), '', [
        is.zodString,
        (x) =>
            x.max(150, `Value must be under 150 characters in length.`).trim()
    ]),
    website: $memOpt(z.string().url(), '', $string.emptyOrUndefined, [
        is.zodString,
        (item) =>
            item
                .max(200, `Value must be under 200 characters in length.`)
                .trim()
    ])
});
const toDatabase = z.object({
    _id: $objectId.database,
    name: $dbReq(z.string(), '', [
        is.zodString,
        (x) =>
            x.max(150, `Value must be under 150 characters in length.`).trim()
    ]),
    website: $dbOpt(is.zodString)(
        z.string().url(),
        '',
        $string.emptyOrUndefined,
        [
            is.zodString,
            (item) =>
                item
                    .max(200, `Value must be under 200 characters in length.`)
                    .trim()
        ]
    )
});

export default {
    toMemory,
    toDatabase
}