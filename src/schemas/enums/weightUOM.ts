import { z } from 'zod';

export const weightUOM = {
    g: 'g',
    kg: 'kg',
    lb: 'lb',
    oz: 'oz'
} as const;

export const WeightUOM = z.nativeEnum(weightUOM);
export type WeightUOM = z.infer<typeof WeightUOM>;