import { z } from 'zod';

export const personSuffixes = {
    Jr: 'JR',
    Sr: 'SR',
    III: 'III'
} as const;

export const PersonSuffixes = z.nativeEnum(personSuffixes);
export type PersonSuffixes = z.infer<typeof PersonSuffixes>;