import { z, ZodNumber } from 'zod';
import { toFunc } from './toFunc';
import { $memOpt, $dbOpt } from './asOptional';
import is from './checkType';

const nonnegative = z
    .number()

    .nonnegative('Value cannot be a negative number.');

// const optionalNumber = (zNumber: ZodNumber) =>
//     z
//         .union([zNumber, z.undefined()])
//         .optional()
//         .default(0)
//         .transform((x) => x.toFixed(0));

const memoryOpt = $memOpt(
    z.number().int('Value must be a valid integer.'),
    0,
    z.undefined(),
    [is.zodNumber, (item) => item.transform((val) => val.toFixed(0))]
);
const databaseOpt = $dbOpt(is.zodNumber)(
    z.number().int('Value must be a valid integer.'),
    0,
    z.undefined(),
    [is.zodNumber, (item) => item.transform((val) => val.toFixed(0))]
);

export default {
    nonnegative,
    
    required: {
        memory: (
            zodNumber: ZodNumber = z
                .number()
                .int('Value must be a valid integer.'),
            func?: (zString: ZodNumber) => ZodNumber
        ) => toFunc(func)(zodNumber).default(0),
        database: (
            zodNumber: ZodNumber = z
                .number()
                .int('Value must be a valid integer.'),
            func?: (zString: ZodNumber) => ZodNumber
        ) => toFunc(func)(zodNumber)
    }
};
