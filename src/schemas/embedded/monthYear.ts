import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { Months } from '../valueTypes/enums/months';

const toMemory = z.object({
    month: Months.default('0'),
    year: z
        .union([z.string().regex(/19[0-9]{2}|20[0-2][0-9]/), z.literal('')])
        .default('')
});

const toDatabase = z.object({
    month: Months.optional().transform((val) => (val === '0' ? undefined : val)),
    year: z
        .string()
        .regex(/19[0-9]{2}|20[0-2][0-9]/, 'Must be a valid 4 digit year.')
        .optional()
        .transform((val) => (val === '' ? undefined : val))
});

export default {
    toMemory,
    toDatabase
};

export type MonthYearMemory = z.infer<typeof toMemory>;
export type MonthYearDatabase = z.infer<typeof toDatabase>;
