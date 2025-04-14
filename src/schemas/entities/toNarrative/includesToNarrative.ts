import { z } from 'zod';
import { toList } from '../../../util/toKVP';

export function includesToNarrative<T extends z.ZodType>(
    data: z.infer<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>>
) {
    return toList('Includes')(
        data == null || Object.keys(data).length === 0
            ? []
            : Object.entries(data).map(([k, v]) =>
                  [v.toString().concat('x'), k].join(' ')
              )
    );
}
