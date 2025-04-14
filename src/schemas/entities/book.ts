import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { BookCategories } from '../enums/bookCategories';
import { BookGenres } from '../enums/bookGenres';
import { BookTypes } from '../enums/bookTypes';
import { Generation } from '../enums/generation';
import { Languages } from '../enums/languages';
import person from './person';
import { toDatabaseBase } from './media';

export const bookToMemory = {
    kind: z.literal('book'),
    bookType: BookTypes.default(''),
    bookCategory: BookCategories.default(''),
    edition: Generation.default('0'),
    language: Languages.default(''),
    pageCount: z.number().int().positive().default(1),
    publishers: z.string().array().default([]),
    authors: person.toMemory.array().default([]),
    illustrators: person.toMemory.array().default([]),
    genre: BookGenres.array().default([])
};
export const bookToDatabase = {
                kind: z.literal('book'),
                bookType: BookTypes.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                bookCategory: BookCategories.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                edition: Generation.optional().transform((val) =>
                    val == null || val === '0' ? undefined : val
                ),
                language: Languages.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                pageCount: z
                    .number()
                    .int()
                    .positive()
                    .optional()
                    .transform((val) =>
                        val == null || val === 0 || val === 1 ? undefined : val
                    ),
                genre: BookGenres.array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    ),
                illustrators: person.toMemory
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    ),
                authors: person.toMemory
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    ),
                publishers: z
                    .string()
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    )
            }

const toMemory = z.object(bookToMemory).extend(toDatabaseBase);

const toDatabase = z.object(bookToDatabase).extend(toDatabaseBase);

export default {
    toMemory,
    toDatabase
};

export type BookMemory = 