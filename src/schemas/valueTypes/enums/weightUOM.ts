import { z } from 'zod';

export const weightUOM = {
    g: 'G',
    kg: 'KG',
    lb: 'LB',
    oz: 'OZ'
} as const;

export const WeightUOM = z.nativeEnum(weightUOM);
export type WeightUOM = z.infer<typeof WeightUOM>;