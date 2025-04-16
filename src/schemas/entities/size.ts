import { z } from 'zod';
import {
    WomensLetterEnum,
    MensLetterEnum,
    WomensFootwearEnum,
    MensFootwearEnum,
    BustSizesEnum,
    SuitSizesEnum,
    YouthSizesEnum,
    WaistSizesEnum
} from '../../scripts/runSizes';

export const toMemory = z.discriminatedUnion('kind', [
    z.object({
        kind: z.literal('womenletter'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            WomensLetterEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('menletter'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            MensLetterEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('womenfootwear'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            WomensFootwearEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('menfootwear'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            MensFootwearEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('bustsizes'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            BustSizesEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('suitsizes'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            SuitSizesEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('youthsizes'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            YouthSizesEnum.optional()
        )
    }),
    z.object({
        kind: z.literal('waistsizes'),
        value: z.preprocess(
            (arg) =>
                arg != null
                    ? typeof arg === 'number'
                        ? arg.toFixed(0)
                        : arg
                    : undefined,
            WaistSizesEnum.optional()
        )
    })
]);

const toDatabase = z.object({})
export type SizeMemory = z.infer<typeof toMemory>;
export type SizeDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
}