///<reference path="./../../global.d.ts" />
import './../../preload';
import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $enum from '../enum';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import branding from './branding';
import barcode from './barcode';
import dimensions from '../valueTypes/embeddedObjects/dimensions';
import { length, measurement, weight } from './$uoms';
import modelInfo from './modelInfo';
import { Countries } from '../enums';
import { toCallout, toEnumList, toFlatList, toKVP } from '../../util/toKVP';
import { enumLookup } from '../enums/inverseEnum';
import { classifyBarcode } from '../../util/barcode';
import monthYear from '../valueTypes/embeddedObjects/monthYear';
import { ProductColors } from '../enums/productColors';
import hashTag from './hashTag';
import classification from './classification';
import { Flags } from '../enums/flags';
import madeOf from './madeOf';
import { Genders } from '../enums/genders';
import { ClosureTypes } from '../enums/closureTypes';
import ClothingCare from './clothingCare';
import { FitTypes } from '../enums/fitTypes';
import { LegStyles } from '../enums/legStyles';
import { GarmentLengths } from '../enums/garmentLengths';
import { LifestyleTypes } from '../enums/lifestyleTypes';
import { PocketTypes } from '../enums/pocketTypes';
import { RiseTypes } from '../enums/riseTypes';
import { BootTypes } from '../enums/bootTypes';
import { StrapTypes } from '../enums/strapTypes';
import { HeightMaps } from '../enums/heightMaps';
import { ToeStyles } from '../enums/toeStyles';
import { ShoeHeelTypes } from '../enums/shoeHeelTypes';
import { ShoeWidths } from '../enums/shoeWidths';
import { SwimsuitBottomStyles } from '../enums/swimsuitBottomStyles';
import { SwimsuitTopStyles } from '../enums/swimsuitTopStyles';
import { CuffTypes } from '../enums/cuffTypes';
import { CollarTypes } from '../enums/collarTypes';
import { LapelTypes } from '../enums/lapelTypes';
import { SleeveTypes } from '../enums/sleeveTypes';
import { SleeveLengths } from '../enums/sleeveLengths';
import { NeckTypes } from '../enums/neckTypes';
import { BacklineTypes } from '../enums/backlineTypes';
import { DressTypes } from '../enums/dressTypes';
import { BlazerTypes } from '../enums/blazerTypes';
import { SizeGroups } from '../enums/sizeGroups';
import {
    BustSizesEnum,
    MensFootwearEnum,
    MensLetterEnum,
    SuitSizesEnum,
    WaistSizesEnum,
    WomensFootwearEnum,
    WomensLetterEnum,
    YouthSizesEnum
} from '../enums/runSizes';
import { BleachingEnum, DryCleanEnum, WashEnum } from '../../util/cc';
import MEDIA from './media';
import { includesToNarrative } from './toNarrative/includesToNarrative';
import { preStringArrayToNarrative } from './preStringArrayToNarrative';
import { productColorsToNarrative } from './productColorsToNarrative';
import { monthYearToNarrative } from './monthYearToNarrative';
import { modelInfoToNarrative } from './modelInfoToNarrative';
import { barcodesToNarrative } from './toNarrative/barcodesToNarrative';
import Size from './size';
import { dollarToMemory } from './dollarToNarrative';
import { madeOfToNarrative } from './madeOfToNarrative';
import { sizeToNarrative } from './sizeToNarrative';
import { optStringToMemory } from './toNarrative/optStringToMemory';

const { toMemory: sizeToMeory, toDatabase: sizeToDatabase } = Size;
const { toMemory: mediaDetailsMemory, toDatabase: mediaDeailsDatabase } = MEDIA;

const toMemory = z.object({
    _id: $objectId.memory,
    description: z.string().default(''),
    branding: branding.toMemory.optional(),
    upcs: barcode.toMemory.array().default([]),
    dimensions: dimensions.toMemory.default({}),
    weight: weight.toMemory.default({ value: 0, uom: 'g' }),
    modelInfo: modelInfo.toMemory.default({}).transform(modelInfoToNarrative),
    origin: Countries.default(''),
    manufactureDate: monthYear.toMemory
        .default({})
        .transform(monthYearToNarrative),
    colors: ProductColors.array()
        .default([])
        .transform(productColorsToNarrative),
    hashTags: hashTag.toMemory.array().default([]),
    classification: classification.toMemory.optional(),
    features: z
        .string()
        .array()
        .default([])
        .transform(preStringArrayToNarrative('Features')),
    includes: z
        .record(z.number().int().min(1, 'Must be 1 or greater'))
        .default({})
        .transform(includesToNarrative),
    flags: z
        .nativeEnum({
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
        } as const)
        .array()
        .default([]),
    notes: z.string().default('').transform(optStringToMemory),
    madeOf: madeOf.toMemory.transform(madeOfToNarrative),
    apparelDetails: z
        .object({
            sizeGroup: SizeGroups.array().default([]),
            size: Size.toMemory.transform(sizeToNarrative).optional(),
            closureTypes: ClosureTypes.array().default([]),
            clothingCare: ClothingCare.toMemory.default({}),
            cutNo: z.string().default(''),
            dressType: DressTypes.array().default([]),
            fitType: FitTypes.array().default([]),
            heightMap: HeightMaps.array().default([]),
            lengthMeasurement: measurement.toMemory.optional(),
            lengthType: GarmentLengths.array().default([]),
            lifestyleType: LifestyleTypes.array().default([]),
            pocketType: PocketTypes.array().default([]),
            riseType: RiseTypes.array().default([]),
            strapType: StrapTypes.array().default([]),
            styleNo: z.string().default(''),
            suitType: BlazerTypes.array().default([]),
            bottomDetails: z
                .object({
                    legStyle: LegStyles.array().default([]),
                    waistMeasurement: measurement.toMemory.optional(),
                    inseamMeasurement: measurement.toMemory.optional()
                })
                .optional(),
            topDetails: z
                .object({
                    cuffType: CuffTypes.array().default([]),
                    collarType: CollarTypes.array().default([]),
                    lapelType: LapelTypes.array().default([]),
                    sleeveType: SleeveTypes.array().default([]),
                    sleeveLengthType: SleeveLengths.array().default([]),
                    neckType: NeckTypes.array().default([]),
                    backlineType: BacklineTypes.array().default([]),
                    neckMeasurement: measurement.toMemory.optional(),
                    chestMeasurement: measurement.toMemory.optional(),
                    sleeveMeasurement: measurement.toMemory.optional()
                })
                .optional(),
            footwearDetails: z
                .object({
                    bootType: BootTypes.array().default([]),
                    toeStyle: ToeStyles.array().default([]),
                    shoeHeelType: ShoeHeelTypes.array().default([]),
                    shoeWidth: ShoeWidths.array().default([]),
                    heelMeasurement: measurement.toMemory.optional(),
                    footMeasurement: measurement.toMemory.optional()
                })
                .optional(),
            swimwearDetails: z
                .object({
                    swimsuitBottomStyle: SwimsuitBottomStyles.array().default(
                        []
                    ),
                    swimsuitTopStyle: SwimsuitTopStyles.array().default([]),
                    bustMeasurement: measurement.toMemory.optional()
                })
                .optional()
        })
        .optional(),
    MEDIA: mediaDetailsMemory.optional(),
    gender: Genders.optional().transform(optStringToMemory),
    text: z.string().optional().transform(optStringToMemory),
    msrp: z.number().nonnegative().default(0).transform(dollarToMemory)
});

/* 
    

    
            rnNo: $.rn(),

     */
// .transform((data) => {
//     return {
//         ...data,
//         output: [
//             ...toKVP('Title')(
//                 [
//                     ...(data?.mediaDetails?.title != null &&
//                     data?.mediaDetails?.title.length > 0
//                         ? [data.mediaDetails.title]
//                         : []),
//                     ...(data?.mediaDetails?.subtitle != null &&
//                     data?.mediaDetails?.subtitle.length > 0
//                         ? [data.mediaDetails.subtitle]
//                         : [])
//                 ].join(' - ')
//             ),
//             ...data.branding.output,
//             ...toKVP('Description')(data.description),
//             ...toKVP('Origin')(enumLookup(Countries)(data.origin)),
//             ...data.dimensions.narrative,
//             ...data.weight.narrative,
//             ...data.modelInfo.output,
//             ...data.colors.output,
//             ...data.manufactureDate.output,
//             // ...toKVP('Gender')(data.gender),
//             ...toEnumList(data, 'gender')('Gender', Genders),
//             ...toKVP('Size')(data.apparelDetails?.size?.output.join('')),
//             ...toKVP('Style #')(data.apparelDetails?.styleNo),
//             ...toKVP('Cut #')(data.apparelDetails?.cutNo),
//             // ...toFlatList<string>('Closure Types', (closureType) =>
//             //     enumLookup(ClosureTypes)(closureType as any)
//             // )(data.apparelDetails.closureTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'closureTypes'
//             )('Closure Types', ClosureTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'fitType'
//             )('Fit Type', FitTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'lengthType'
//             )('Garment Length', GarmentLengths),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'lifestyleType'
//             )('Lifestyle Type', LifestyleTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'pocketType'
//             )('Pocket Type', PocketTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'riseType'
//             )('Rise Type', RiseTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'strapType'
//             )('Strap Type', StrapTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'heightMap'
//             )('Height Map', HeightMaps),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'dressType'
//             )('Dress Type', DressTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'suitType'
//             )('Suit Type', BlazerTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'bottomDetails',
//                 'legStyle'
//             )('Leg Style', LegStyles),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'cuffType'
//             )('Cuff Type', CuffTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'collarType'
//             )('Collar Type', CollarTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'lapelType'
//             )('Lapel Type', LapelTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'sleeveLengthType'
//             )('Sleeve Length', SleeveLengths),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'sleeveType'
//             )('Sleeve Type', SleeveTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'neckType'
//             )('Neck Type', NeckTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'topDetails',
//                 'backlineType'
//             )('Backline Type', BacklineTypes),

//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'footwearDetails',
//                 'bootType'
//             )('Boot Type', BootTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'footwearDetails',
//                 'toeStyle'
//             )('Toe Style', ToeStyles),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'footwearDetails',
//                 'shoeHeelType'
//             )('Shoe Heel Type', ShoeHeelTypes),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'footwearDetails',
//                 'shoeWidth'
//             )('Shoe Width', ShoeWidths),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'swimwearDetails',
//                 'swimsuitBottomStyle'
//             )('Swimsuit Bottoms Style', SwimsuitBottomStyles),
//             ...toEnumList(
//                 data,
//                 'apparelDetails',
//                 'swimwearDetails',
//                 'swimsuitTopStyle'
//             )('Swimsuit Tops Style', SwimsuitTopStyles),

//             // ...toFlatList('Fit Type')(data.apparelDetails.fitType),
//             // ...toKVP('Garment Length')(data.apparelDetails?.lengthType)
//             ...toKVP('Text')(data.text),
//             ...[
//                 ...toKVP(
//                     [
//                         data?.apparelDetails?.topDetails
//                             ? 'Torso'
//                             : data?.apparelDetails?.bottomDetails
//                             ? 'Total Leg'
//                             : 'Garment',
//                         ''
//                     ].join('')
//                 )(data?.apparelDetails?.lengthMeasurement?.output),
//                 ...toKVP('Inseam')(
//                     data?.apparelDetails?.bottomDetails?.inseamMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Waist')(
//                     data?.apparelDetails?.bottomDetails?.waistMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Neck')(
//                     data?.apparelDetails?.topDetails?.neckMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Sleeve')(
//                     data?.apparelDetails?.topDetails?.sleeveMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Chest')(
//                     data?.apparelDetails?.topDetails?.chestMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Foot')(
//                     data?.apparelDetails?.footwearDetails?.footMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Heel Height')(
//                     data?.apparelDetails?.footwearDetails?.heelMeasurement
//                         ?.output
//                 ),
//                 ...toKVP('Bust')(
//                     data?.apparelDetails?.swimwearDetails?.bustMeasurement
//                         ?.output
//                 )
//             ]
//                 .map((x) => ' * '.concat(x))
//                 .prefaceIfNonEmpty('Measurements:')
//                 .prefaceIfNonEmpty(''),
//             ...data.features.output.prefaceNonEmptyJoin(),
//             ...data.includes.output.prefaceNonEmptyJoin(),
//             ...(
//                 data.apparelDetails?.clothingCare.output.prefaceIfNonEmpty(
//                     'Clothing Care:'
//                 ) ?? []
//             ).prefaceIfNonEmpty(''),
//             ...[
//                 ...toCallout('isAthletic')(data.flags),
//                 ...toCallout('isRare')(data.flags),
//                 ...toCallout('isVintage')(data.flags),
//                 ...toCallout('isInOriginalPackaging')(data.flags),
//                 ...toCallout('isUnopened')(data.flags),
//                 ...data.madeOf.output.prefaceNonEmptyJoin(),

//                 ...data.upcs.output.prefaceNonEmptyJoin(),
//                 ...[data.notes].prefaceNonEmptyJoin()
//             ].prefaceIfNonEmpty('')
//         ]
//             .join('\n')
//             .trim()
//     };
// });

const toDatabase = z.object({
    _id: $objectId.database,
    description: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val)),
    branding: branding.toDatabase.optional(),
    upcs: z.set(barcode.toDatabase).default(new Set()),
    mediaDetails: MEDIA.toDatabase.transform((val) =>
        val == null ||
        Object.entries(val).filter(
            ([k, v]) => k !== 'kind' && v != null && v !== ''
        ).length === 0
            ? undefined
            : val
    )
});

export default {
    toMemory,
    toDatabase
};

export type ProductMemory = z.infer<typeof toMemory>;
export type ProductDatabase = z.infer<typeof toDatabase>;
