import { ObjectId } from 'mongodb';
import { } from 'ts-to-zod';

export type VolumeUnitOfMeasure = string;
export type FabricTypes = string;
export type LengthUOM = string;

export type WeightUOM = string;

/**
 * @format date-time
 */
export type Timestamp = string;

/**
 * @schema .int()
 */
export type Int = number;
export type Float = number;
/**
 * @type {number}
 */
export type NaturalNumber = number;
export type NonZeroNumber = number;

export type EProductColors = string;
export type ECountries = string;
export type ESizeGroups = string;
export type ESizes = string;

/**
 * @description 
 * 
 * @export
 * @interface MercariBrand
 */
export interface MercariBrand {
    /**
     * @description 
     * 
     * @type {ObjectId}
     * @memberOf MercariBrand
     */
    _id: ObjectId;
    /**
     * @description The name of the brand
     * 
     * @minLength 0
     * @type {string}
     * @memberOf MercariBrand
     */
    name: string;
    /**
     * @description 
     * 
     * @type {Timestamp}
     * @memberOf MercariBrand
     */
    timestamp: Timestamp;
    /**
     * @description 
     * 
     * @type {NaturalNumber}
     * @memberOf MercariBrand
     */
    id: NaturalNumber;
    /**
     * @description 
     * 
     * @type {string}
     * @memberOf MercariBrand
     */
    readonly selector: string;
};
export type Brand = {
    _id: ObjectId;
    name: string;
    mercariBrand?: MercariBrand;
    timestamp: Timestamp;
    /**
     * @description 
     * 
     * @type {Brand}
     * @schema .lazy(() => Brand)
    * */
    parent?: Brand;
};
export type ProductLine = {
    _id: ObjectId;
    brand?: Brand;
    description?: string;
    readonly name: string;
};
export type Branding =
    | { kind: 'none' }
    | { kind: 'brand'; value: Brand }
    | { kind: 'productLine'; value: ProductLine };

export type ApparelProductVariant = {
    size?: ESizes;
    readonly sizeGroups: ESizeGroups[];
};
export type ProductVariantBase = {
    _id: ObjectId;
    branding?: Branding;
    modelName?: string;
    modelNumber?: string;
    colors?: EProductColors[];
};
export type ProductVariant =
    | ({ kind: 'none' } & ProductVariantBase)
    | ({ kind: 'apparel' } & ProductVariantBase & ApparelProductVariant);
export type Numeric =
    | { kind: 'int'; v: Int }
    | { kind: 'float'; v: Float }
    | { kind: 'fraction'; v?: Int; n: Int; d: NonZeroNumber };

export type LengthQuantity = {
    kind: 'length';
    magnitude: Numeric;
    unit: LengthUOM;
    remain?: LengthQuantity;
};
export type WeightQuantity = {
    kind: 'weight';
    magnitude: Numeric;
    unit: WeightUOM;
    remain?: WeightQuantity;
};
export type VolumeQuantity = {
    kind: 'length';
    magnitude: Numeric;
    unit: VolumeUnitOfMeasure;
    remain?: VolumeQuantity;
};
export type Quantity =
    | LengthQuantity
    | WeightQuantity
    | VolumeQuantity
    // | QuantityRecursiveGroup<'capacity', CapacityUnitOfMeasure>
    // | QuantityGroup<'length-caliper', LengthUOM>
    // | QuantityRecursiveGroup<'duration-min', DurationUnitOfMeasure>
    // | QuantityRecursiveGroup<'duration-sec', DurationUnitOfMeasure>
    // | QuantityGroup<'rotational-speed', RotationalSpeedUnitOfMeasure>
    // | QuantityGroup<'power-consumption', PowerConsumptionUnitOfMeasure>
    // | QuantityGroup<'angle', DegreesUnitOfMeasure>
    // | QuantityGroup<'data-transfer-rate', DataTransferRateUnitOfMeasure>
    // | QuantityGroup<'voltage', VoltageUnitOfMeasure>
    // | QuantityGroup<'wattage', WattageUnitOfMeasure>
    // | QuantityGroup<'amperage', AmperageUnitOfMeasure>
    // | QuantityGroup<'charge', ElectricalChargeUnitOfMeasure>
    // | QuantityGroup<'resolution', ScreenResolutionUnitOfMeasure>;

export type Dimensions = {
    length?: LengthQuantity;
    width?: LengthQuantity;
    height?: LengthQuantity;
    weight: WeightQuantity;
    volume?: VolumeQuantity;
};
export type Months = number;
export type Year = string;
export type ManufacturedInfo =
    | { kind: 'manufacture-date'; month: Months; year: Year; }
    | { kind: 'circa'; year: Year };

export type RegularExp = string;
export type HashTag = {
    _id: ObjectId;
    name: string;
    regex?: RegularExp;
}
export type GeneralFlags = string;
export type ApparelFlags = string;
export type MediaFlags = string;

export type ToggleGroup<TKind extends string, TFlags extends string> =
    { kind: TKind, flags: (GeneralFlags & TFlags)[] }
export type Toggles = 
    | ToggleGroup<'general', GeneralFlags>
    | ToggleGroup<'apparel', ApparelFlags>
    | ToggleGroup<'media', MediaFlags>;

export type TextBlockText = string;
export type Percent = NaturalNumber;
export type MadeOfSection = Record<FabricTypes, Percent>;
export type MadeOfGroup<TKind extends string, TObject> = {
    kind: TKind;
} & TObject;

export type MadeOf = 
    | MadeOfGroup<'empty', {}>
    | MadeOfGroup<'single', MadeOfSection>
    | MadeOfGroup<'multi', Record<string, MadeOfSection>>

export type DetailLevel<TKind extends string, TObj extends Record<string, any>> = {
    kind: TKind;
} & TObj;

export type ApparelDetails = 
    | { kind: 'none' }
    | { kind: 'bottoms' }
    | { kind: 'tops' }
    | { kind: 'footwear' }
    | { kind: 'swimwear' }

export type VideoDetails = 
    | { kind: 'none' }
    | { kind: 'movie' }
    | { kind: 'tv-series' }

export type MediaDetails = 
    | { kind: 'none' }
    | { kind: 'video', details: VideoDetails }
    | { kind: 'music' }
    | { kind: 'book' }
    | { kind: 'video-game' }

export type Details = 
    | { kind: 'none' }
    | { kind: 'apparel', details: ApparelDetails }
    | { kind: 'media', details: MediaDetails }
/*

<TKey extends string, TPrev extends string, TPrevObj extends Record<string, any>> = {
    detailType: `${TPrev}/${TKey}`;
} & Omit<TPrevObj, 'detailType'> */
export type Money = number;
export type Genders = string;

export type Product = {
    _id: ObjectId;
    description?: string;
    branding?: Branding;
    variant?: ProductVariant;
    dimensions: Dimensions;
    origin?: ECountries;
    manufacturedInfo?: ManufacturedInfo;
    hashTags?: HashTag[];
    classification?: any;
    features?: string[];
    includes?: Record<string, number>;
    flags: Toggles;
    notes?: TextBlockText;
    madeOf: MadeOf;
    details: Details;
    gender?: Genders;
    text?: string;
    msrp?: Money;
    readonly detailsPath: string;
};
