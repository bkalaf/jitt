import { z } from 'zod';
import { inverseEnum } from './inverseEnum';

export const personPrefixess = [
    { value: 'dr', label: 'Dr' },
    { value: 'lord', label: 'Lord' },
    { value: 'lady', label: 'Lady' }
]

export const personPrefixes = {
    Dr: 'dr',
    Lord: 'lord', 
    Lady: 'lady'
} as const;

export const PersonPrefixes = z.nativeEnum(personPrefixes);
export type PersonPrefixes = z.infer<typeof PersonPrefixes>;
