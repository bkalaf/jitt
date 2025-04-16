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
import { BookTypes } from '../valueTypes/enums/bookTypes';
import { BookCategories } from '../valueTypes/enums/bookCategories';
import { Generation } from '../valueTypes/enums/generation';
import { Languages } from '../valueTypes/enums/languages';
import person from './person';
import { BookGenres } from '../valueTypes/enums/bookGenres';
import { ESRBRatings } from '../valueTypes/enums/ESRBRatings';
import { ConsoleTypes } from '../valueTypes/enums/consoleTypes';
import { MusicFormatTypes } from '../valueTypes/enums/musicFormatTypes';
import { durationMinutes, durationSeconds } from './$uoms';
import { VideoFormatTypes } from '../valueTypes/enums/videoFormatTypes';
import { MovieRatings } from '../valueTypes/enums/movieRatings';
import { Flags } from '../valueTypes/enums/flags';
import { MovieGenres } from '../valueTypes/enums/movieGenres';
import { TvRatings } from '../valueTypes/enums/tvRatings';
import { Networks } from '../valueTypes/enums/networks';
import { bookToMemory } from './book';

export const toMemoryBase = {
    title: z.string().default(''),
    subtitle: z.string().default(''),
    blurb: z.string().default(''),
    collectionOf: z.string().array().default([]),
    pieceCount: z.number().int().min(1, 'Minimum value is 1.').default(1),
    releaseDate: z.union([$date.dateOnly.memory, z.literal('')]).default(''),
    copyright: z
        .string()
        .regex(
            /^19[0-9]{2}$|^20[0-2][0-9]$|^$/,
            'Must be a valid 4 digit year.'
        )
        .default('')
};
export const toDatabaseBase = {
    title: z.string().nonempty(),
    subtitle: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val)),
    blurb: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val)),
    collectionOf: z
        .string()
        .array()
        .optional()
        .transform((val) =>
            val == null || val.length === 0 ? undefined : val
        ),
    pieceCount: z
        .number()
        .int()
        .transform((val) => (val == null || val === 0 ? undefined : val)),
    releaseDate: $date.dateOnly.memory.optional(),
    copyright: z
        .string()
        .regex(
            /^19[0-9]{2}$|^20[0-2][0-9]$|^$/,
            'Must be a valid 4 digit year.'
        )
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val))
};

const videoBaseMemory = {
    format: VideoFormatTypes.default(''),
    starring: z.record(person.toMemory).default({}),
    directedBy: person.toMemory.array().default([]),
    authors: person.toMemory.array().default([]),
    duration: durationMinutes.toMemory.optional(),
    flags: z
        .enum([
            'isClosedCaptioned',
            'isSubtitled',
            'isCollectorsEdition',
            'isDirectorsEdition',
            'isWidescreen'
        ])
        .array()
        .default([]) //  as z.infer<typeof Flags>[]
};
const videoBaseDatabase = {
    format: VideoFormatTypes.optional().transform((val) =>
        val == null || val === '' ? undefined : val
    ),
    starring: person.toDatabase
        .array()
        .transform((val) =>
            val == null || val.length === 0 ? undefined : val
        ),
    directedBy: person.toDatabase
        .array()
        .transform((val) =>
            val == null || val.length === 0 ? undefined : val
        ),
    authors: person.toDatabase
        .array()
        .transform((val) =>
            val == null || val.length === 0 ? undefined : val
        ),
    duration: durationMinutes.toDatabase.transform((data) =>
        data == null || (data.value === 0 && data.remain == null)
            ? undefined
            : data
    ),
    flags: z
        .enum([
            'isClosedCaptioned',
            'isSubtitled',
            'isCollectorsEdition',
            'isDirectorsEdition',
            'isWidescreen'
        ])
        .array()
        .transform((data) =>
            data == null || data.length === 0 ? undefined : data
        )
};

const $medias = {
    book: {
        toMemory: bookToMemory
            .extend(toMemoryBase),
        toDatabase: bookToDatabase
            .extend(toDatabaseBase)
    },
    videoGame: {
        toMemory: z
            .object({
                kind: z.literal('video-game'),
                rating: ESRBRatings.default(''),
                consoleType: ConsoleTypes.default(''),
                studio: z.string().array().default([])
            })
            .extend(toMemoryBase),
        toDatabase: z
            .object({
                kind: z.literal('video-game'),
                rating: ESRBRatings.optional().transform((data) =>
                    data == null || data === '' ? undefined : data
                ),
                consoleType: ConsoleTypes.optional().transform((data) =>
                    data == null || data === '' ? undefined : data
                ),
                studio: z
                    .string()
                    .array()
                    .transform((data) =>
                        data == null || data.length === 0 ? undefined : data
                    )
            })
            .extend(toDatabaseBase)
    },
    music: {
        toMemory: z
            .object({
                kind: z.literal('music'),
                format: MusicFormatTypes.default(''),
                studio: z.string().array().default([]),
                artist: person.toMemory.array().default([]),
                tracks: 
                    .array()
                    .default([]),
                    .transform()
            })
            .extend(toMemoryBase)
            ,
        toDatabase: z
            .object({
                kind: z.literal('music'),
                format: MusicFormatTypes.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                studio: z
                    .string()
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    ),
                artist: person.toDatabase
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    ),
                tracks: z
                    .object({
                        name: z.string().default(''),
                        feat: person.toMemory.array().default([]),
                        duration: durationSeconds.toMemory.optional()
                    })
                    .array()
                    .optional()
                    .transform((val) =>
                        val == null || val.length === 0 ? undefined : val
                    )
            })
            .extend(toDatabaseBase)
    },
    movie: {
        toMemory: z
            .object({
                kind: z.literal('movie'),
                rating: MovieRatings.default(''),
                genre: MovieGenres.default('')
            })
            .extend(videoBaseMemory)
            .extend(toMemoryBase),
        toDatabase: z
            .object({
                kind: z.literal('movie'),
                rating: MovieRatings.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                genre: MovieGenres.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                )
            })
            .extend(videoBaseDatabase)
            .extend(toDatabaseBase)
    },
    tvSeries: {
        toMemory: z
            .object({
                kind: z.literal('tv-series'),
                rating: TvRatings.default(''),
                genre: MovieGenres.default(''),
                network: Networks.default(''),
                season: z.number().int().nonnegative().default(0)
            })
            .extend(videoBaseMemory)
            .extend(toMemoryBase),
        toDatabase: z
            .object({
                kind: z.literal('tv-series'),
                rating: TvRatings.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                genre: MovieGenres.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                network: Networks.optional().transform((val) =>
                    val == null || val === '' ? undefined : val
                ),
                season: z
                    .number()
                    .int()
                    .nonnegative()
                    .transform((val) =>
                        val == null || val === 0 ? undefined : val
                    )
            })
            .extend(videoBaseDatabase)
            .extend(toDatabaseBase)
    }
};

const toMemory = z
    .discriminatedUnion('kind', [
        z.object({
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
        }),
        // $medias.music.toMemory,
        $medias.videoGame.toMemory,
        $medias.movie.toMemory,
        $medias.tvSeries.toMemory
    ])
    .optional();

const toDatabase = z
    .discriminatedUnion('kind', [
        $medias.book.toDatabase,
        $medias.music.toDatabase,
        $medias.videoGame.toDatabase,
        $medias.movie.toDatabase,
        $medias.tvSeries.toDatabase
    ])
    .optional();

export default {
    toMemory,
    toDatabase
};

export type MediaMemory = z.infer<typeof toMemory>;
export type MediaDatabase = z.infer<typeof toDatabase>;

function trackToNarrative(data: TracksMemory[]) {
    return {
                ...data,
                tracks: data.tracks.map((value, index) => ({
                    ...value,
                    index
                }))
            }
}