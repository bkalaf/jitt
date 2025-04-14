import { z } from 'zod';

export const usStates = {
    Alaska: 'AK',
    Alabama: 'AL',
    Arkansas: 'AR',
    Arizona: 'AZ',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    'District of Columbia': 'DC',
    Deleware: 'DE',
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Iowa: 'IA',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Massachusettes: 'MA',
    Maryland: 'MD',
    Maine: 'ME',
    Michigan: 'MI',
    Minnesota: 'MN',
    Missouri: 'MO',
    Mississippi: 'MS',
    Montana: 'MT',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Nebraska: 'NE',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    Nevada: 'NV',
    'New York': 'NY',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Virginia: 'VA',
    Vermont: 'VT',
    Washington: 'WA',
    Wisconsin: 'WI',
    'West Virginia': 'WV',
    Wyoming: 'WY'
} as const;

export const USStates = z.nativeEnum(usStates);
export type USStates = z.infer<typeof USStates>;

export const caProvinces = {
    Alberta: 'AB',
    'British Columbia': 'BC',
    Manitoba: 'MB',
    'New Brunswick': 'NB',
    'Newfoundland and Labrador': 'NL',
    'Nova Scotia': 'NS',
    'Northwest Territory': 'NT',
    Nunavut: 'NU',
    Ontario: 'ON',
    'Prince Edward Island': 'PE',
    Quebec: 'QC',
    Sasketchewan: 'SK',
    Yukon: 'YT'
} as const;

export const CAProvinces = z.nativeEnum(caProvinces);
export type CAProvinces = z.infer<typeof CAProvinces>;