import { brandingMemoryToNarrative } from './toNarrative/brandingToNarrative';
import { ProductMemory } from './product';
import { barcodesToNarrative } from './toNarrative/barcodesToNarrative';
import { descriptionToNarrative } from './toNarrative/descriptionToNarrative';

export function createNarrative(data: ProductMemory) {
    const titleKeyTraits = [
        ...brandingMemoryToNarrative(data.branding),
        ...descriptionToNarrative(data.description)
    ]
    const kevValuePairs = [

    ]
    const attributes = [

    ]
    const specifications = [

    ]
    const callouts = [

    ]
    const lists = [
        ...barcodesToNarrative(data.upcs)
    ]
    const textBlock = [

    ]
}

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
                    ].join(' - ')
                ),
                ...data.branding.output,
                ...toKVP('Description')(data.description),
                ...toKVP('Origin')(enumLookup(Countries)(data.origin)),
                ...data.dimensions.narrative,
                ...data.weight.narrative,
                ...data.modelInfo.output,
                ...data.colors.output,
                ...data.manufactureDate.output,
                // ...toKVP('Gender')(data.gender),
                ...toEnumList(data, 'gender')('Gender', Genders),
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
                ...[
                    ...toKVP(
                        [
                            data?.apparelDetails?.topDetails
                                ? 'Torso'
                                : data?.apparelDetails?.bottomDetails
                                ? 'Total Leg'
                                : 'Garment',
                            ''
                        ].join('')
                    )(data?.apparelDetails?.lengthMeasurement?.output),
                    ...toKVP('Inseam')(
                        data?.apparelDetails?.bottomDetails?.inseamMeasurement
                            ?.output
                    ),
                    ...toKVP('Waist')(
                        data?.apparelDetails?.bottomDetails?.waistMeasurement
                            ?.output
                    ),
                    ...toKVP('Neck')(
                        data?.apparelDetails?.topDetails?.neckMeasurement
                            ?.output
                    ),
                    ...toKVP('Sleeve')(
                        data?.apparelDetails?.topDetails?.sleeveMeasurement
                            ?.output
                    ),
                    ...toKVP('Chest')(
                        data?.apparelDetails?.topDetails?.chestMeasurement
                            ?.output
                    ),
                    ...toKVP('Foot')(
                        data?.apparelDetails?.footwearDetails?.footMeasurement
                            ?.output
                    ),
                    ...toKVP('Heel Height')(
                        data?.apparelDetails?.footwearDetails?.heelMeasurement
                            ?.output
                    ),
                    ...toKVP('Bust')(
                        data?.apparelDetails?.swimwearDetails?.bustMeasurement
                            ?.output
                    )
                ]
                    .map((x) => ' * '.concat(x))
                    .prefaceIfNonEmpty('Measurements:')
                    .prefaceIfNonEmpty(''),
                ...data.features.output.prefaceNonEmptyJoin(),
                ...data.includes.output.prefaceNonEmptyJoin(),
                ...(
                    data.apparelDetails?.clothingCare.output.prefaceIfNonEmpty(
                        'Clothing Care:'
                    ) ?? []
                ).prefaceIfNonEmpty(''),
                ...[
                    ...toCallout('isAthletic')(data.flags),
                    ...toCallout('isRare')(data.flags),
                    ...toCallout('isVintage')(data.flags),
                    ...toCallout('isInOriginalPackaging')(data.flags),
                    ...toCallout('isUnopened')(data.flags),
                    ...data.madeOf.output.prefaceNonEmptyJoin(),

                    ...data.upcs.output.prefaceNonEmptyJoin(),
                    ...[data.notes].prefaceNonEmptyJoin()
                ].prefaceIfNonEmpty('')
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

const test1 = toMemory.parse({
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
        clothingCare: {
            bleaching: ['doNotBleach'] as z.infer<typeof BleachingEnum>[],
            dryClean: ['doNotDryClean'] as z.infer<typeof DryCleanEnum>[],
            wash: ['handWash', 'soakFirst'] as z.infer<typeof WashEnum>[]
        },
        size: {
            kind: 'menletter',
            value: '012'
        },
        topDetails: {
            sleeveType: ['drop-shoulder' as SleeveTypes],
            cuffType: ['angle-cut' as CuffTypes],
            collarType: ['classic' as CollarTypes]
        },
        lengthMeasurement: { value: 16, uom: 'in' },
        bottomDetails: {
            inseamMeasurement: {
                value: 32,
                uom: 'in'
            }
        }
    },
    notes: 'This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes. This is a long long long long set of notes.'
});
const test2 = toMemory.parse({
    mediaDetails: {
        title: 'Harry Potter',
        subtitle: "And the Sorcerer's Stone"
    },
    upcs: [
        {
            barcodes: classifyBarcode('9781841499932')
        }
    ]
});
console.log(test1.output.replaceAll('.0in', 'in'));
console.log('*********');
console.log(test2.output);