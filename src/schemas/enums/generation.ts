import { z } from 'zod';
export const generation = {
    '': '0',
    '1st': '1',
    '2nd': '2',
    '3rd': '3',
    '4th': '4',
    '5th': '5',
    '6th': '6',
    '7th': '7',
    '8th': '8',
    '9th': '9',
    '10th': '10',
    '11th': '11',
    '12th': '12',
    '13th': '13',
    '14th': '14',
    '15th': '15',
    '16th': '16',
    '17th': '17',
    '18th': '18',
    '19th': '19'
} as const;
export const Generation = z.nativeEnum(generation);
export type Generation = z.infer<typeof Generation>;
