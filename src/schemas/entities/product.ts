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
import dimensions from './dimensions';
import { length, weight } from './uoms';
import modelInfo from './modelInfo';
import { Countries } from '../enums';
import {
    toCallout,
    toEnumList,
    toFlatList,
    toKVP,
    toList
} from '../../util/toKVP';
import { ProductLineMemory } from './productLine';
import { BrandMemory } from './brand';
import { enumLookup } from '../enums/inverseEnum';
import { classifyBarcode } from '../../util/barcode';
import monthYear from './monthYear';
import { Months } from '../enums/months';
import { ProductColors } from '../enums/productColors';
import hashTag from './hashTag';
import classification from './classification';
import { Flags } from '../enums/flags';
import madeOf from './madeOf';
import { FabricTypes } from '../enums/fabricTypes';
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
import { Sizes } from '../enums/sizes';

const toMemory = z
    .object({
        _id: $objectId.memory,
        description: z.string().default(''),
        branding: branding.toMemory.optional().transform((data) => ({
            ...data,
            output:
                data == null
                    ? []
                    : data.kind === 'brand'
                    ? toKVP('Brand')((data.value as BrandMemory)?.name)
                    : [
                          ...toKVP('Brand')(
                              (data.value as ProductLineMemory)?.brand?.name
                          ),
                          ...toKVP('Product Line')(
                              (data.value as ProductLineMemory)?.name
                          )
                      ]
        })),
        upcs: barcode.toMemory
            .array()
            .default([])
            .transform((data) => ({
                ...data,
                output: Array.from(
                    data.values().map((x) => x.barcodes.map((bc) => bc.output))
                ).reduce((pv, cv) => [...pv, ...cv], [])
            })),
        dimensions: dimensions.toMemory.default({}),
        weight: weight.toMemory.default({ value: 0, uom: 'g' }),
        modelInfo: modelInfo.toMemory.default({}).transform((data) => ({
            ...data,
            output: [
                ...toKVP('Model Name')(data?.modelName),
                ...toKVP('Model #')(data?.modelNumber)
            ]
        })),
        origin: Countries.default(''),
        manufactureDate: monthYear.toMemory.default({}).transform((data) => ({
            ...data,
            output: toKVP(
                data?.month != null && data?.month !== '0'
                    ? 'Manufacture Date'
                    : 'Circa'
            )(
                data?.month != null &&
                    data?.month !== '0' &&
                    data?.year != null &&
                    data?.year !== ''
                    ? [enumLookup(Months)(data?.month), data?.year].join(' ')
                    : data?.year != null && data?.year !== ''
                    ? data?.year
                    : undefined
            )
        })),
        colors: ProductColors.array()
            .default([])
            .transform((data) => ({
                ...data,
                output: toKVP(data.length > 1 ? 'Color' : 'Color')(
                    data.map(enumLookup(ProductColors)).join(' & ')
                )
            })),
        hashTags: hashTag.toMemory.array().default([]),
        classification: classification.toMemory.optional(),
        features: z
            .string()
            .array()
            .default([])
            .transform((data) => ({
                ...data,
                output: toList('Features')(
                    data == null || data.length === 0 ? [] : data
                )
            })),
        includes: z
            .record(z.number().int().min(1, 'Must be 1 or greater'))
            .default({})
            .transform((data) => ({
                ...data,
                output: toList('Includes')(
                    data == null || Object.keys(data).length === 0
                        ? []
                        : Object.entries(data).map(([k, v]) =>
                              [v.toString().concat('x'), k].join(' ')
                          )
                )
            })),
        flags: Flags.array().default([]),
        notes: z.string().default(''),
        madeOf: madeOf.toMemory.transform((data) => ({
            ...data,
            output: (() => {
                const lookup = enumLookup(FabricTypes);
                switch (data.kind) {
                    case 'single-section':
                        const subTotal = Object.entries(data.value)
                            .map(([k, v]) =>
                                lookup(k as any) != null &&
                                lookup(k as any) !== ''
                                    ? [
                                          [
                                              lookup(k as any),
                                              v.toString().concat('%')
                                          ].join(': ')
                                      ]
                                    : []
                            )
                            .reduce((pv, cv) => [...pv, ...cv], [])
                            .join('\n');
                        return [subTotal];
                    case 'multi-section':
                        const subSubTotal = Object.entries(data.value).map(
                            ([name, vl]) =>
                                [
                                    name.toUpperCase().concat(':'),
                                    Object.entries(vl)
                                        .map(([k, v]) =>
                                            lookup(k as any) != null &&
                                            lookup(k as any) !== ''
                                                ? [
                                                      [
                                                          lookup(k as any),
                                                          v
                                                              .toString()
                                                              .concat('%')
                                                      ].join(': ')
                                                  ]
                                                : []
                                        )
                                        .reduce((pv, cv) => [...pv, ...cv], [])
                                        .map((x) => ' -'.concat(x))
                                        .join('\n')
                                ].join('\n')
                        );
                        return [subSubTotal.join('\n')];
                    case 'empty':
                        return [];
                }
            })()
        })),
        apparelDetails: z
            .object({
                sizeGroup: SizeGroups.array().default([]),
                size: z
                    .discriminatedUnion('kind', [
                        z.object({
                            kind: z.literal('womenletter'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                WomensLetterEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('menletter'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                MensLetterEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('womenfootwear'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                WomensFootwearEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('menfootwear'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                MensFootwearEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('bustsizes'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                BustSizesEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('suitsizes'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                SuitSizesEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('youthsizes'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                YouthSizesEnum.optional()
                            )
                        }),
                        z.object({
                            kind: z.literal('waistsizes'),
                            value: z.preprocess(
                                (arg) =>
                                    arg != null
                                        ? typeof arg === 'number'
                                            ? arg.toFixed(0)
                                            : arg
                                        : undefined,
                                WaistSizesEnum.optional()
                            )
                        })
                    ])
                    .transform((data) => ({
                        ...data,
                        value:
                            data.value == null
                                ? undefined
                                : parseInt(data.value, 10),
                        output:
                            data.value == null ||
                            enumLookup(Sizes)(data.value) == null
                                ? ([] as string[])
                                : ([enumLookup(Sizes)(data.value)] as string[])
                    }))
                    .optional(),
                styleNo: z.string().default(''),
                cutNo: z.string().default(''),
                closureTypes: ClosureTypes.array().default([]),
                clothingCare: ClothingCare.toMemory.default({}),
                fitType: FitTypes.array().default([]),

                lengthType: GarmentLengths.array().default([]),
                lifestyleType: LifestyleTypes.array().default([]),
                pocketType: PocketTypes.array().default([]),
                riseType: RiseTypes.array().default([]),

                strapType: StrapTypes.array().default([]),
                heightMap: HeightMaps.array().default([]),

                dressType: DressTypes.array().default([]),
                suitType: BlazerTypes.array().default([]),
                bottomDetails: z
                    .object({
                        legStyle: LegStyles.array().default([]),
                        waistMeasurement: length.toMemory.optional(),
                        inseamMeasurement: length.toMemory.optional()
                    })
                    .optional(),
                lengthMeasurement: length.toMemory.optional(),
                topDetails: z
                    .object({
                        cuffType: CuffTypes.array().default([]),
                        collarType: CollarTypes.array().default([]),
                        lapelType: LapelTypes.array().default([]),
                        sleeveType: SleeveTypes.array().default([]),
                        sleeveLengthType: SleeveLengths.array().default([]),
                        neckType: NeckTypes.array().default([]),
                        backlineType: BacklineTypes.array().default([]),
                        neckMeasurement: length.toMemory.optional(),
                        chestMeasurement: length.toMemory.optional(),
                        sleeveMeasurement: length.toMemory.optional()
                    })
                    .optional(),
                footwearDetails: z
                    .object({
                        bootType: BootTypes.array().default([]),
                        toeStyle: ToeStyles.array().default([]),
                        shoeHeelType: ShoeHeelTypes.array().default([]),
                        shoeWidth: ShoeWidths.array().default([]),
                        heelMeasurement: length.toMemory.optional(),
                        footMeasurement: length.toMemory.optional()
                    })
                    .optional(),
                swimwearDetails: z
                    .object({
                        swimsuitBottomStyle:
                            SwimsuitBottomStyles.array().default([]),
                        swimsuitTopStyle: SwimsuitTopStyles.array().default([]),
                        bustMeasurement: length.toMemory.optional()
                    })
                    .optional()
            })
            .optional(),
        mediaDetails: z
            .object({
                title: z.string().default(''),
                subtitle: z.string().default('')
            })
            .optional(),
        gender: Genders.default(''),
        text: z.string().default('')
    })
    /* 
    

    
            rnNo: $.rn(),

     */
    .transform((data) => {
        return {
            ...data,
            output: [
                ...toKVP('Title')(
                    [
                        ...(data?.mediaDetails?.title != null &&
                        data?.mediaDetails?.title.length > 0
                            ? [data.mediaDetails.title]
                            : []),
                        ...(data?.mediaDetails?.subtitle != null &&
                        data?.mediaDetails?.subtitle.length > 0
                            ? [data.mediaDetails.subtitle]
                            : [])
                    ].join(': ')
                ),
                ...data.branding.output,
                ...toKVP('Description')(data.description),
                ...toKVP('Origin')(enumLookup(Countries)(data.origin)),
                ...data.dimensions.narrative,
                ...data.weight.narrative,
                ...data.modelInfo.output,
                ...data.colors.output,
                ...data.manufactureDate.output,
                ...toKVP('Gender')(data.gender),
                ...toKVP('Size')(data.apparelDetails?.size?.output.join('')),

                ...toKVP('Style #')(data.apparelDetails?.styleNo),
                ...toKVP('Cut #')(data.apparelDetails?.cutNo),
                // ...toFlatList<string>('Closure Types', (closureType) =>
                //     enumLookup(ClosureTypes)(closureType as any)
                // )(data.apparelDetails.closureTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'closureTypes'
                )('Closure Types', ClosureTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'fitType'
                )('Fit Type', FitTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'lengthType'
                )('Garment Length', GarmentLengths),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'lifestyleType'
                )('Lifestyle Type', LifestyleTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'pocketType'
                )('Pocket Type', PocketTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'riseType'
                )('Rise Type', RiseTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'strapType'
                )('Strap Type', StrapTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'heightMap'
                )('Height Map', HeightMaps),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'dressType'
                )('Dress Type', DressTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'suitType'
                )('Suit Type', BlazerTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'bottomDetails',
                    'legStyle'
                )('Leg Style', LegStyles),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'cuffType'
                )('Cuff Type', CuffTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'collarType'
                )('Collar Type', CollarTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'lapelType'
                )('Lapel Type', LapelTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'sleeveLengthType'
                )('Sleeve Length', SleeveLengths),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'sleeveType'
                )('Sleeve Type', SleeveTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'neckType'
                )('Neck Type', NeckTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'topDetails',
                    'backlineType'
                )('Backline Type', BacklineTypes),

                ...toEnumList(
                    data,
                    'apparelDetails',
                    'footwearDetails',
                    'bootType'
                )('Boot Type', BootTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'footwearDetails',
                    'toeStyle'
                )('Toe Style', ToeStyles),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'footwearDetails',
                    'shoeHeelType'
                )('Shoe Heel Type', ShoeHeelTypes),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'footwearDetails',
                    'shoeWidth'
                )('Shoe Width', ShoeWidths),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'swimwearDetails',
                    'swimsuitBottomStyle'
                )('Swimsuit Bottoms Style', SwimsuitBottomStyles),
                ...toEnumList(
                    data,
                    'apparelDetails',
                    'swimwearDetails',
                    'swimsuitTopStyle'
                )('Swimsuit Tops Style', SwimsuitTopStyles),

                // ...toFlatList('Fit Type')(data.apparelDetails.fitType),
                // ...toKVP('Garment Length')(data.apparelDetails?.lengthType)
                ...toKVP('Text')(data.text),
                ...data.features.output.prefaceNonEmptyJoin(),
                ...data.includes.output.prefaceNonEmptyJoin(),
                '',
                [
                    ...toCallout('isAthletic')(data.flags),
                    ...toCallout('isRare')(data.flags),
                    ...toCallout('isVintage')(data.flags),
                    ...toCallout('isInOriginalPackaging')(data.flags),
                    ...toCallout('isUnopened')(data.flags),
                    ...data.madeOf.output.prefaceNonEmptyJoin(),
                    ...(data.apparelDetails?.clothingCare.output.prefaceNonEmptyJoin() ??
                        []),
                    ...data.upcs.output.prefaceNonEmptyJoin(),
                    ...[data.notes].prefaceNonEmptyJoin()
                ]
                    .join('\n')
                    .trim()
            ]
                .join('\n')
                .trim()
        };
    });

const toDatabase = z.object({
    _id: $objectId.database,
    description: z
        .string()
        .optional()
        .transform((val) => (val == null || val === '' ? undefined : val)),
    branding: branding.toDatabase.optional(),
    upcs: z.set(barcode.toDatabase).default(new Set())
});

export default {
    toMemory,
    toDatabase
};

export type Memory = z.infer<typeof toMemory>;
export type Database = z.infer<typeof toDatabase>;

console.log(
    toMemory
        .parse({
            description: 'Description',
            branding: {
                kind: 'brand',
                value: {
                    name: 'Brand 1',
                    timestamp: new Date(Date.now()).toISOString()
                }
            },
            origin: 'CA',
            upcs: [
                {
                    barcodes: classifyBarcode('9781841499932')
                }
            ],
            modelInfo: {
                modelNumber: 'MN123'
            },
            manufactureDate: {
                month: '6',
                year: '1979'
            },
            colors: ['blue', 'white'],
            weight: {
                value: 232,
                uom: 'g'
            },
            dimensions: {
                length: {
                    value: 27,
                    uom: 'in'
                }
            },
            flags: ['isVintage', 'isUnopened'],
            features: ['Feature #1', 'Feature #2 & Feature #3'],
            includes: {
                Instructions: 1,
                'Player Pawns': 6,
                '6-Sided Dice': 2
            },
            gender: 'womens' as Genders,
            apparelDetails: {
                size: {
                    kind: 'menletter',
                    value: '012'
                },
                topDetails: {
                    sleeveType: ['drop-shoulder' as SleeveTypes],
                    cuffType: ['angle-cut' as CuffTypes],
                    collarType: ['classic' as CollarTypes]
                }
            },
            notes: 'This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes.'
        })
        .output.replaceAll('.0in', 'in')
);
