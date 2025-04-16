import { z } from 'zod';
export const movieGenres = {
    horror: 'horror',
    'sci-fi': 'sci-fi',
    action: 'action',
    classic: 'classic',
    family: 'family',
    comedy: 'comedy',
    drama: 'drama',
    thriller: 'thriller',
    documentary: 'documentary',
    western: 'western',
    romance: 'romance',
    anime: 'anime',
    mystery: 'mystery',
    musical: 'musical',
    sports: 'sports',
    animation: 'animation',
    '': ''
} as const;
export const MovieGenres = z.nativeEnum(movieGenres);
export type MovieGenres = z.infer<typeof MovieGenres>;
