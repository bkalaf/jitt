import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { PersonRoles } from '../enums/personRoles';
import { PersonCredentials, PersonPrefixes, PersonSuffixes } from '../enums';
import { enumLookup, inverseEnum } from '../enums/inverseEnum';

const toMemory = z
    .object({
        _id: $objectId.memory,
        roles: PersonRoles.array().default([]),
        prefix: z.union([PersonPrefixes, z.literal('')]).default(''),
        suffix: z.union([PersonSuffixes, z.literal('')]).default(''),
        credentials: PersonCredentials.array().default([]),
        firstName: z.string().default(''),
        middleName: z.string().default(''),
        lastName: z.string().default(''),
        regex: $string.regex.default('')
    })
    .transform((data) => ({
        ...data,
        isActor: data.roles.includes('actor'),
        isDirector: data.roles.includes('director'),
        isArtist: data.roles.includes('artist'),
        isIllustrator: data.roles.includes('illustrator'),
        isWriter: data.roles.includes('writer'),
        name: [
            enumLookup(PersonPrefixes)(data.prefix),
            data.firstName,
            data.middleName,
            data.lastName,
            enumLookup(PersonSuffixes)(data.suffix)
        ]
            .filter((x) => x != null)
            .join(' ')
            .concat(
                data.credentials.length > 0
                    ? ', '.concat(
                          data.credentials
                              .map(enumLookup(PersonCredentials))
                              .join(' ')
                      )
                    : ''
            )
    }));

const toDatabase = z.object({
    _id: $objectId.database,
    roles: PersonRoles.array().default([]),
    prefix: z.preprocess((arg) => {
        if (arg === '') return undefined;
        return arg;
    }, PersonPrefixes.optional()),
    suffix: z.preprocess((arg) => {
        if (arg === '') return undefined;
        return arg;
    }, PersonSuffixes.optional()),
    credentials: PersonCredentials.array().default([]),
    firstName: z
        .string()
        .optional()
        .transform((arg) => (arg === '' ? undefined : arg)),
    middleName: z
        .string()
        .optional()
        .transform((arg) => (arg === '' ? undefined : arg)),
    lastName: z
        .string()
        .optional()
        .transform((arg) => (arg === '' ? undefined : arg)),
    regex: $string.regex
        .optional()
        .transform((val) => (val === '' ? undefined : val))
});

export default {
    toMemory,
    toDatabase
};

export type Memory = z.infer<typeof toMemory>;
export type Database = z.infer<typeof toDatabase>;
