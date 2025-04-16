import { z } from 'zod';
export const musicFormatTypes = {
    CD: 'cd',
    Cassette: 'cassette',
    LP: 'lp',
    '8-track': '8-track',
    '': ''
} as const;
export const MusicFormatTypes = z.nativeEnum(musicFormatTypes);
export type MusicFormatTypes = z.infer<typeof MusicFormatTypes>;
