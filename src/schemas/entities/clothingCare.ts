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
import {
    BleachingEnum,
    DryCleanEnum,
    DryingEnum,
    PermanentPressEnum,
    IroningEnum,
    WashEnum,
    WashTemperatureEnum,
    TumbleDryEnum,
    GentleOrDelicateEnum
} from '../../util/cc';
import { enumLookup } from '../valueTypes/enums/inverseEnum';

const toCategory = <T extends Record<any, any>>(obj: z.ZodNativeEnum<T>) =>
    obj
        .array()
        .transform((data) => ({
            ...data,
            output:
                data != null && data.length > 0
                    ? data
                          .map((v) =>
                              v === '' ? undefined : enumLookup(obj)(v)
                          )
                          .filter((x) => x != null)
                          .map((x) => '* '.concat(x))
                    : []
        }))
        .default([]);
const toMemory = z
    .object({
        bleaching: toCategory(BleachingEnum),
        dryClean: toCategory(DryCleanEnum),
        drying: toCategory(DryingEnum),
        gentleOrDelicate: toCategory(GentleOrDelicateEnum),
        permanentPress: toCategory(PermanentPressEnum),
        ironing: toCategory(IroningEnum),
        wash: toCategory(WashEnum),
        washTemperature: toCategory(WashTemperatureEnum),
        tumbleDry: toCategory(TumbleDryEnum)
    })
    .transform((data) => ({
        ...data,
        output: [
            ...data.wash.output,
            ...data.washTemperature.output,
            ...data.ironing.output,
            ...data.drying.output,
            ...data.tumbleDry.output,
            ...data.bleaching.output,
            ...data.dryClean.output,
            ...data.gentleOrDelicate.output,
            ...data.permanentPress.output
        ]
    }));

const toDatabase = z.object({});

export default {
    toMemory,
    toDatabase
};

export type Memory = z.infer<typeof toMemory>;
export type Database = z.infer<typeof toDatabase>;
