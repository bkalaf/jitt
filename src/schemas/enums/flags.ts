import { z } from 'zod';
export const flags = {
    'Has Manual': 'hasManual',
    'Is Adjustable': 'isAdjustable',
    Antique: 'isAntique',
    Athletic: 'isAthletic',
    'Is Closed Captioned': 'isClosedCaptioned',
    'Is Collectible': 'isCollectible',
    'Is Collectors Edition': 'isCollectorsEdition',
    'Is Directors Edition': 'isDirectorsEdition',
    Discontinued: 'isDiscontinued',
    Graphic: 'isGraphic',
    Handmade: 'isHandmade',
    'In Original Packaging': 'isInOriginalPackaging',
    'Is Maternity': 'isMaternity',
    'Is Novelty': 'isNovelty',
    Rare: 'isRare',
    'Is Reversable': 'isReversable',
    'Is Subtitled': 'isSubtitled',
    Unopened: 'isUnopened',
    Unrated: 'isUnrated',
    Vintage: 'isVintage',
    'Is Widescreen': 'isWidescreen'
} as const;
export const Flags = z.nativeEnum(flags);
export type Flags = z.infer<typeof Flags>;

export const flagsBase = {
    'Has Manual': 'hasManual',
    Adjustable: 'isAdjustable',
    Antique: 'isAntique',
    Collectible: 'isCollectible',
    Discontinued: 'isDiscontinued',
    Handmade: 'isHandmade',
    'In Original Packaging': 'isInOriginalPackaging',
    Novelty: 'isNovelty',
    Rare: 'isRare',
    Unopened: 'isUnopened',
    Vintage: 'isVintage'
} as const;
