import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $enum from '../enum';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import person from './person';
import { durationSeconds } from './$uoms';

const toMemory = z.object({
    name: z.string().default(''),
    feat: person.toMemory.array().default([]),
    duration: durationSeconds.toMemory.optional()
});

const toDatabase = z.object({
    name: z.string().default(''),
    feat: person.toMemory.array().default([]),
    duration: durationSeconds.toMemory.optional()
});

export default {
    toMemory,
    toDatabase
};

export type TrackMemory = z.infer<typeof toMemory>;
export type TrackDatabase = z.infer<typeof toDatabase>;
