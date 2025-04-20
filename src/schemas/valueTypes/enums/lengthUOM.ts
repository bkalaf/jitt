import { z } from 'zod';

export const lengthUOM = {
    cm: 'CM',
    mm: 'MM',
    m: 'M',
    ft: 'FT',
    in: 'IN'
} as const;

export const LengthUOM = z.nativeEnum(lengthUOM);
export type LengthUOM = z.infer<typeof LengthUOM>;