import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { USStates, CAProvinces } from '../valueTypes/enums/provinces2';

const toMemoryBase = z.object({
    mailing1: z
        .string()
        .trim()
        .max(100, `Value must be less than 100 character.`)
        .default(''),
    mailing2: z
        .string()
        .trim()
        .max(100, `Value must be less than 100 character.`)
        .default(''),
    suite: z
        .string()
        .trim()
        .max(30, `Value must be less than 30 character.`)
        .default(''),
    city: z
        .string()
        .nonempty()
        .max(50, 'Value must be less than 50 characters.')
        .default('')
});
const toMemoryUS = z.object({
    country: z.literal('US'),
    province: USStates.default('AL'),
    postalCode: z
        .string()
        .regex(
            /[0-9]{5}(-?[0-9]{4})?/,
            'Value must be in the format XXXXX or XXXXX-XXXX.'
        )
        .default('')
});
const toMemoryCA = z.object({
    country: z.literal('CA'),
    province: CAProvinces.default('AB'),
    postalCode: z
        .string()
        .regex(
            /[A-Z][0-9][A-Z][0-9][A-Z][0-9]/,
            'Value must be in the format A0A-0A0.'
        )
        .default('')
});
const toMemory = z.discriminatedUnion('country', [toMemoryBase.merge(toMemoryUS), toMemoryBase.merge(toMemoryCA)]);

export type AddressMemory = z.infer<typeof toMemory>;

const toDatabaseBase = z.object({
    mailing1: z
        .string()
        .trim()
        .max(100, `Value must be less than 100 character.`)
        .optional()
        .transform((val) => (val == '' || val == null ? undefined : val)),
    mailing2: z
        .string()
        .trim()
        .max(100, `Value must be less than 100 character.`)
        .optional()
        .transform((val) => (val == '' || val == null ? undefined : val)),
    suite: z
        .string()
        .trim()
        .max(30, `Value must be less than 30 character.`)
        .optional()
        .transform((val) => (val == '' || val == null ? undefined : val)),
    city: z
        .string()
        .nonempty()
        .max(50, 'Value must be less than 50 characters.')
        .nonempty()
});

const toDatabaseUS = z.object({
    country: z.literal('US'),
    province: USStates,
    postalCode: z
        .string()
        .regex(
            /[0-9]{5}(-?[0-9]{4})?/,
            'Value must be in the format XXXXX or XXXXX-XXXX.'
        )
        .optional()
        .transform((val) => (val == '' || val == null ? undefined : val))
});
const toDatabaseCA = z.object({
    country: z.literal('CA'),
    province: CAProvinces,
    postalCode: z
        .string()
        .regex(
            /[A-Z][0-9][A-Z][0-9][A-Z][0-9]/,
            'Value must be in the format A0A-0A0.'
        )
        .optional()
        .transform((val) => (val == '' || val == null ? undefined : val))
});
const toDatabase = z
    .discriminatedUnion('country', [toDatabaseBase.merge(toDatabaseUS), toDatabaseBase.merge(toDatabaseCA)]);

export default {
    toMemory,
    toDatabase
}