import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import brand from './brand';

const toMemory = z.object({
    _id: $objectId.memory,
    brand: brand.toMemory.optional().transform(data => Object.keys(data ?? {}).length === 0 ? undefined : data),
    description: z.string().default(''),
    regex: $string.regex.default('')
}).transform(({ brand, description, ...rest }) => {
    const name = [brand?.name, description].filter(x => x != null).join(' ');
    return {
        name,
        brand,
        description,
        ...rest
    }
}).superRefine((data, ctx) => {
    if (data.brand == null && data.description == null) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['brand'],
            message: 'Both brand and description cannot be null.'
        })
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['description'],
            message: 'Both brand and description cannot be null.'
        });
    }
})

const toDatabase = z
    .object({
        _id: $objectId.database,
        brand: $fk.toDatabase(brand.toDatabase),
        description: z
            .string()
            .optional()
            .transform((data) => {
                if (data === '') return undefined;
                return data;
            }),
        regex: $string.regex.optional().transform((data) => {
            if (data === '') return undefined;
            return data;
        })
    })
    .superRefine((data, ctx) => {
        if (data.brand == null && data.description == null) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['brand'],
                message: 'Both brand and description cannot be null.'
            });
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['description'],
                message: 'Both brand and description cannot be null.'
            });
        }
    });

export default {
    toMemory,
    toDatabase
}

export type ProductLineMemory = z.infer<typeof toMemory>;
export type ProductLineDatabase = z.infer<typeof toDatabase>;