import React from 'react';
import {
    BleachWithChlorine,
    Bleaching,
    DoNotBleach,
    DoNotDry,
    DoNotDryClean,
    DoNotIron,
    DoNotSteam,
    DoNotTumbleDry,
    DoNotWash,
    DoNotWring,
    DripDry,
    DripDryDryInShade,
    DryCleanAnySolvent,
    DryCleanDelicate,
    DryCleanLowHeat,
    DryCleanNoSteamFinishing,
    DryCleanPceOnly,
    DryCleanPermanentPress,
    DryCleanPetroleumSolventDelicate,
    DryCleanPetroleumSolventOnly,
    DryCleanPetroleumSolventPermanentPress,
    DryCleanReducedMoisture,
    DryCleanShortCycle,
    DryFlat,
    DryInShade,
    Drying,
    HandWash,
    HangToDry,
    HangToDryDryInShade,
    HighHeatTumbleDry,
    IronAt110,
    IronAt150,
    IronAt200,
    IroningAllowed,
    LayFlatDryInShade,
    LowHeatTumbleDry,
    MachineWash,
    MachineWashGentleOrDelicate,
    MachineWashPermanentPress,
    MediumHeatTumbleDry,
    NoHeatTumbleDry,
    NonChlorineBleach,
    SoakFirst,
    SteamAsNeeded,
    TumbleDryAllowed,
    TumbleDryGentleOrDelicate,
    TumbleDryPermanentPress,
    WashAtOrBelow20,
    WashAtOrBelow30Degrees,
    WashAtOrBelow40Degrees,
    WashAtOrBelow50Degrees,
    WashAtOrBelow60Degrees,
    WashAtOrBelow70Degrees,
    WashAtOrBelow90Degrees,
    WashAtOrBelow95Degrees,
    WetClean,
    WetCleanDelicate,
    WetCleanPermanentPress
} from '../assets/laundrySVG';
import { z } from 'zod';

// console.log(camelToKebab('laundryCare'));
// console.log(camelToKebab('barcode'));
// console.log(camelToKebab('customAttributes'));

export const degreeF = '\u2109';
export const degreeC = '\u2103';

export const celsiusToFarenheit = {
    20: 70,
    30: 85,
    40: 105,
    50: 122,
    58: 135,
    60: 140,
    65: 150,
    70: 160,
    90: 195,
    95: 205,
    110: 230,
    150: 300,
    200: 400
};
const heatSetting = {
    low: {
        iron: 110,
        tumble: 50
    },
    medium: {
        iron: 150,
        tumble: 58
    },
    high: {
        iron: 200,
        tumble: 65
    }
};

const ironAt = (setting: 'low' | 'medium' | 'high') =>
    `Iron on ${setting}-heat setting (~${heatSetting[setting].iron}\u2103/~${
        celsiusToFarenheit[
            heatSetting[setting].iron as keyof typeof celsiusToFarenheit
        ]
    }\u2109).`;
const tumbleAt = (setting: 'low' | 'medium' | 'high') =>
    `Tumble dry on ${setting} heat setting (~${
        heatSetting[setting].tumble
    }\u2103/~${
        celsiusToFarenheit[
            heatSetting[setting].tumble as keyof typeof celsiusToFarenheit
        ]
    }\u2109).`;
const washTemp = (temp: keyof typeof celsiusToFarenheit) =>
    `Machine wash allowed at or below ${temp}\u2103/${celsiusToFarenheit[temp]}\u2109.`;

const bleaching = {
    doNotBleach: {
        text: 'Do not bleach.',
        Element: DoNotBleach
    },
    nonChlorineBleach: {
        text: 'Use non-chlorine bleach.',
        Element: NonChlorineBleach
    },
    bleachingAllowed: {
        text: 'Bleach is allowed.',
        Element: Bleaching
    },
    bleachWithChlorine: {
        text: 'Bleach with chlorine.',
        Element: BleachWithChlorine
    }
};

const drying = {
    doNotWring: {
        text: 'Do not wring dry.',
        Element: DoNotWring
    },
    dryingAllowed: {
        text: 'Drying allowed.',
        Element: Drying
    },
    doNotDry: {
        text: 'Do not dry.',
        Element: DoNotDry
    },
    dripDry: {
        text: 'Drip dry.',
        Element: DripDry
    },
    dryInShade: {
        text: 'Dry in shade.',
        Element: DryInShade
    },
    dripDryDryInShade: {
        text: 'Drip dry in shade.',
        Element: DripDryDryInShade
    },
    dryFlat: {
        text: 'Lay flat to dry.',
        Element: DryFlat
    },
    dryFlatDryInShade: {
        text: 'Lay flat to dry in shade.',
        Element: LayFlatDryInShade
    },
    hangToDry: {
        text: 'Hang to dry.',
        Element: HangToDry
    },
    hangToDryDryInShade: {
        text: 'Hang to dry in shade.',
        Element: HangToDryDryInShade
    }
};
const ironing = {
    ironingAllowed: {
        text: 'Ironing allowed.',
        Element: IroningAllowed
    },
    doNotIron: {
        text: 'Do not iron.',
        Element: DoNotIron
    },
    doNotSteam: {
        text: 'Do not use steam.',
        Element: DoNotSteam
    },
    steamAsNeeded: {
        text: 'Steam as needed.',
        Element: SteamAsNeeded
    },
    ironAt110: {
        text: ironAt('low'),
        Element: IronAt110
    },
    ironAt150: {
        text: ironAt('medium'),
        Element: IronAt150
    },
    ironAt200: {
        text: ironAt('high'),
        Element: IronAt200
    }
};
const dryClean = {
    doNotDryClean: {
        text: 'Do not dry clean.',
        Element: DoNotDryClean
    },
    dryCleanAnySolvent: {
        text: 'Dry clean with any solvent.',
        Element: DryCleanAnySolvent
    },
    dryCleanPceOnly: {
        text: 'Dry clean with PCE only.',
        Element: DryCleanPceOnly
    },
    dryCleanPetroleumSolventOnly: {
        text: 'Dry clean with petroleum solvent only.',
        Element: DryCleanPetroleumSolventOnly
    },
    dryCleanLowHeat: {
        text: 'Dry clean on low heat.',
        Element: DryCleanLowHeat
    },
    dryCleanReducedMoisture: {
        text: 'Dry clean using less moisture than normal.',
        Element: DryCleanReducedMoisture
    },
    dryCleanNoSteamFinishing: {
        text: 'Dry clean without steam finishing.',
        Element: DryCleanNoSteamFinishing
    },
    dryCleanShortCycle: {
        text: 'Dry clean using the short cycle.',
        Element: DryCleanShortCycle
    }
};
const tumbleDry = {
    tumbleDryAllowed: {
        text: 'Tumble dry allowed.',
        Element: TumbleDryAllowed
    },
    doNotTumbleDry: {
        text: 'Do not tumble dry.',
        Element: DoNotTumbleDry
    },
    highHeatTumbleDry: {
        text: tumbleAt('high'),
        Element: HighHeatTumbleDry
    },
    lowHeatTumbleDry: {
        text: tumbleAt('low'),
        Element: LowHeatTumbleDry
    },
    noHeatTumbleDry: {
        text: 'No heat tumble dry.',
        Element: NoHeatTumbleDry
    },
    mediumHeatTumbleDry: {
        text: tumbleAt('medium'),
        Element: MediumHeatTumbleDry
    }
};
const washTemperature = {
    washAtOrBelow20Degrees: {
        text: washTemp(20),
        Element: WashAtOrBelow20
    },
    washAtOrBelow30Degrees: {
        text: washTemp(30),
        Element: WashAtOrBelow30Degrees
    },
    washAtOrBelow40Degrees: {
        text: washTemp(40),
        Element: WashAtOrBelow40Degrees
    },
    washAtOrBelow50Degrees: {
        text: washTemp(50),
        Element: WashAtOrBelow50Degrees
    },
    washAtOrBelow60Degrees: {
        text: washTemp(60),
        Element: WashAtOrBelow60Degrees
    },
    washAtOrBelow70Degrees: {
        text: washTemp(70),
        Element: WashAtOrBelow70Degrees
    },
    washAtOrBelow90Degrees: {
        text: washTemp(90),
        Element: WashAtOrBelow90Degrees
    },
    washAtOrBelow95Degrees: {
        text: washTemp(95),
        Element: WashAtOrBelow95Degrees
    }
};
const wash = {
    machineWashAllowed: {
        text: 'Machine wash allowed.',
        Element: MachineWash
    },
    doNotWash: {
        text: 'Do not machine wash.',
        Element: DoNotWash
    },
    handWash: {
        text: 'Hand wash only.',
        Element: HandWash
    },
    soakFirst: {
        text: 'Soak before washing.',
        Element: SoakFirst
    },
    wetCleanAllowed: {
        text: 'Wet clean allowed.',
        Element: WetClean
    }
};
const permanentPress = {
    dryCleanPermanentPress: {
        text: 'Dry clean on permanent press setting.',
        Element: DryCleanPermanentPress
    },
    dryCleanPetroleumSolventPermanentPress: {
        text: 'Dry clean with petroleum solvent on permanent press setting.',
        Element: DryCleanPetroleumSolventPermanentPress
    },
    tumbleDryPermanentPress: {
        text: 'Tumble dry on permanent press setting.',
        Element: TumbleDryPermanentPress
    },
    machineWashPermanentPress: {
        text: 'Machine wash on permanent press setting.',
        Element: MachineWashPermanentPress
    },
    wetCleanPermanentPress: {
        text: 'Wet clean on permanent press setting.',
        Element: WetCleanPermanentPress
    }
};
const gentleOrDelicate = {
    dryCleanDelicate: {
        text: 'Dry clean on gentle/delicate setting.',
        Element: DryCleanDelicate
    },
    dryCleanPetroleumSolventDelicate: {
        text: 'Dry clean with petroleum solvent on gentle/delicate setting.',
        Element: DryCleanPetroleumSolventDelicate
    },
    tumbleDryGentleOrDelicate: {
        text: 'Tumble dry on gentle/delicate setting.',
        Element: TumbleDryGentleOrDelicate
    },
    machineWashGentleOrDelicate: {
        text: 'Machine wash on gentle/delicate setting.',
        Element: MachineWashGentleOrDelicate
    },
    wetCleanGentleOrDelicate: {
        text: 'Wet clean on gentle/delicate setting.',
        Element: WetCleanDelicate
    }
};

function handleCC<T extends string>(
    obj: Record<
        string,
        { text: string; Element: (props: any) => React.JSX.Element }
    >
) {
    return [
        z.nativeEnum(
            Object.fromEntries(
                [['', { text: '', Element: (props: any) => <></> }] as [string, { text: string, Element: React.FunctionComponent }], ...Object.entries(obj)]
                    .map(([key, { text }]) => [text, key])
            ) as Record<string, T>
        ),
        Object.fromEntries(
            Object.entries(obj).map(([key, { Element }]) => [key, Element])
        ) as Record<T, (props: any) => React.JSX.Element>
    ] as [
        z.ZodNativeEnum<Record<string, T | ''>>,
        Record<string, (props: any) => React.JSX.Element>
    ];
}

export const [BleachingEnum, BleachingElements] =
    handleCC<keyof typeof bleaching>(bleaching);
export const [DryingEnum, DryingElements] =
    handleCC<keyof typeof drying>(drying);
export const [DryCleanEnum, DryCleanElements] =
    handleCC<keyof typeof dryClean>(dryClean);
export const [GentleOrDelicateEnum, GentleOrDelicateElements] =
    handleCC<keyof typeof gentleOrDelicate>(gentleOrDelicate);
export const [IroningEnum, IroningElements] =
    handleCC<keyof typeof ironing>(ironing);
export const [TumbleDryEnum, TumbleDryElements] =
    handleCC<keyof typeof tumbleDry>(tumbleDry);
export const [WashEnum, WashElements] = handleCC<keyof typeof wash>(wash);
export const [WashTemperatureEnum, WashTemperatureElements] =
    handleCC<keyof typeof washTemperature>(washTemperature);
export const [PermanentPressEnum, PermanentPressElements] =
    handleCC<keyof typeof permanentPress>(permanentPress);
