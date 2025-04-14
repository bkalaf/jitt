import { z } from 'zod';
export const movieRatings = {
    G: 'G',
    PG: 'PG',
    'PG-13': 'PG-13',
    R: 'R',
    X: 'X',
    UR: 'UR',
    NR: 'NR',
    '': ''
} as const;
export const MovieRatings = z.nativeEnum(movieRatings);
export type MovieRatings = z.infer<typeof MovieRatings>;
