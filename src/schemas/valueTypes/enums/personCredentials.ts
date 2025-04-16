import { z } from 'zod';

export const personCredentialss = [
    { value: 'md', label: 'MD' },
    { value: 'phd', label: 'PhD' },
    { value: 'esq', label: 'Esq' }
];

export const personCredentials = {
    MD: 'md',
    PhD: 'phd',
    Esq: 'esq'
} as const;

export const PersonCredentials = z.nativeEnum(personCredentials);
export type PersonCredentials = z.infer<typeof PersonCredentials>;