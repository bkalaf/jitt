import { z } from 'zod';

export const personCredentialss = [
    { value: 'md', label: 'MD' },
    { value: 'phd', label: 'PhD' },
    { value: 'esq', label: 'Esq' }
];

export const personCredentials = {
    MD: 'MD',
    PhD: 'PHD',
    Esq: 'ESQ'
} as const;

export const PersonCredentials = z.nativeEnum(personCredentials);
export type PersonCredentials = z.infer<typeof PersonCredentials>;