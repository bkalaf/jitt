import { z } from 'zod';
export const pocketTypes = {
    '5 Pocket': '5-pocket',
    Cargo: 'cargo',
    Carpenter: 'carpenter',
    Coin: 'coin',
    'Diagonal Patch': 'diagonal-patch',
    'Diagonal With Zipped': 'diagonal-with-zipped',
    Embellished: 'embellished',
    'Flap With Belt': 'flap-with-belt',
    'Flap With Button': 'flap-with-button',
    Flap: 'flap',
    Oval: 'oval',
    Patch: 'patch',
    Seamed: 'seamed',
    'Slit With Zipper': 'slit-with-zipper',
    'Stiched Round': 'stiched-round',
    Traditional: 'traditional'
} as const;
export const pocketTypesToImage = {
    '5-pocket': 'src/assets/images/enums/pocketTypes/5-pocket.png',
    cargo: 'src/assets/images/enums/pocketTypes/cargo.png',
    carpenter: 'src/assets/images/enums/pocketTypes/carpenter.png',
    coin: 'src/assets/images/enums/pocketTypes/coin.png',
    'diagonal-patch': 'src/assets/images/enums/pocketTypes/diagonal-patch.png',
    'diagonal-with-zipped':
        'src/assets/images/enums/pocketTypes/diagonal-with-zipped.png',
    embellished: 'src/assets/images/enums/pocketTypes/embellished.png',
    'flap-with-belt': 'src/assets/images/enums/pocketTypes/flap-with-belt.png',
    'flap-with-button':
        'src/assets/images/enums/pocketTypes/flap-with-button.png',
    flap: 'src/assets/images/enums/pocketTypes/flap.png',
    oval: 'src/assets/images/enums/pocketTypes/oval.png',
    patch: 'src/assets/images/enums/pocketTypes/patch.png',
    seamed: 'src/assets/images/enums/pocketTypes/seamed.png',
    'slit-with-zipper':
        'src/assets/images/enums/pocketTypes/slit-with-zipper.png',
    'stiched-round': 'src/assets/images/enums/pocketTypes/stiched-round.png',
    traditional: 'src/assets/images/enums/pocketTypes/traditional.png'
} as const;
export const PocketTypes = z.nativeEnum(pocketTypes);
export type PocketTypes = z.infer<typeof PocketTypes>;
