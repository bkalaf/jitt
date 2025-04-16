import { z } from 'zod';
import { truncate } from '../../../common/truncate';

const toMemory = z
    .number()
    .nonnegative()
    .default(0)
    .transform((val) => truncate(1, true)(val * 100).toFixed(1).concat('%'));

const toDatabase = z.preprocess(
    (val) =>
        val == null || val == ''
            ? undefined
            : parseFloat(
                  truncate(
                      3,
                      true
                  )(
                      parseFloat((val as string).replaceAll('%', '')) / 100
                  ).toFixed(3)
              ),
    z.number().nonnegative().optional()
);

export type PercentageMemory = z.infer<typeof toMemory>;
export type PercentageDatabase = z.infer<typeof toDatabase>;


export default {
    toMemory,
    toDatabase
}