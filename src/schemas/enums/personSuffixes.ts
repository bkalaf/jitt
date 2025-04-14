import { z } from 'zod';

export const personSuffixess = [
    { value: 'jr', label: 'Jr' },
    { value: 'sr', label: 'Sr' },
    { value: 'iii', label: 'III' }
];

export const personSuffixes = {
    Jr: 'jr',
    Sr: 'sr',
    III: 'iii'
} as const;

export const PersonSuffixes = z.nativeEnum(personSuffixes);
export type PersonSuffixes = z.infer<typeof PersonSuffixes>;