import { z } from 'zod';

export const months = {
    Unknown: '0',
    Jan: '1',
    Feb: '2',
    Mar: '3',
    Apr: '4',
    May: '5',
    Jun: '6',
    Jul: '7',
    Aug: '8',
    Sep: '9',
    Oct: '10',
    Nov: '11',
    Dec: '12'
} as const;

export const Months = z.nativeEnum(months);
export type Months = z.infer<typeof Months>;

export const month = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
} as const;

export const MonthEnum = z.nativeEnum(month);
export type MonthEnum = z.infer<typeof MonthEnum>;
