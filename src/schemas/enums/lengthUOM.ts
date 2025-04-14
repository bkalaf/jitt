import { z } from 'zod';

export const lengthUOM = {
    cm: 'cm',
    mm: 'mm',
    m: 'm',
    ft: 'ft',
    in: 'in'
} as const;

export const LengthUOM = z.nativeEnum(lengthUOM);
export type LengthUOM = z.infer<typeof LengthUOM>;