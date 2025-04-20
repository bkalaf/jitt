import { ApolloServer, ApolloServerOptions } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Filter, MongoClient, ObjectId } from 'mongodb';
import {
    dateScalar,
    emailScalar,
    GraphQLJSONObject,
    GraphQLYear,
    objectIdScalar,
    Percentage,
    phoneNumberScalar,
    postalCodeScalar,
    urlScalar,
    USCurrency
} from './dateScalar.js';
import { PersonSuffixes } from './schemas/valueTypes/enums/personSuffixes.js';
import { PersonPrefixes } from './schemas/valueTypes/enums/personPrefixes.js';
import { PersonCredentials } from './schemas/valueTypes/enums/personCredentials.js';
import { enumLookup } from './schemas/valueTypes/enums/inverseEnum.js';
import { AdminTaskTypes } from './schemas/valueTypes/enums/adminTaskTypes.js';
import { constructFilter } from './constructFilter.js';
import { getNextBarcode } from './util/generator.js';
import { classifyBarcode } from './util/barcode.js';

const typeDefs = `#graphql
scalar Date
scalar Email
scalar Url
scalar PhoneNumber
scalar PostalCode
scalar ObjectId
scalar JSONObject
scalar Year 
scalar USCurrency
scalar Percentage

type MercariBrand {
    _id: ID!
    name: String!
    timestamp: Date!
    parent: MercariBrand
    ID: Int!
    selector: String!
}

type Brand {
    _id: ID!
    name: String!
    timestamp: Date!
    mercariBrand: MercariBrand
    regex: String
}

type HashTagUsage {
    from: Date!
    count: Int!
}

type HashTag {
    _id: ID!
    name: String!
    usage: [HashTagUsage!]
    mostRecent: Date
    highestCount: Int
}

input HashTagUsageData {
    count: Int
    from: Date
}
input HashTagData {
    name: String!
    count: Int!
}

type MercariCategory {
    name: String!
    selector: String!
}

type MercariTaxonomy {
    _id: ID!
    category: MercariCategory!
    subCategory: MercariCategory!
    subSubCategory: MercariCategory!
    name: String!
    timestamp: Date!
}
input MercariTaxonomyData {
    categoryName: String!
    categorySelector: String!
    subCategoryName: String!
    subCategorySelector: String!
    subSubCategoryName: String!
    subSubCategorySelector: String!
}

type ProductLine {
    _id: ID!
    brand: Brand
    description: String
    name: String!
    timestamp: Date!
}

input ProductLineData {
    brand: ID
    description: String
}

type SelfStorage {
    _id: ID!
    name: String!
    website: Url
}

input SelfStorageData {
    name: String!
    website: Url
}

enum Country {
    AD
    AE
    AF
    AG
    AI
    AL
    AM
    AO
    AQ
    AR
    AS
    AT
    AU
    AW
    AX
    AZ
    BA
    BB
    BD
    BE
    BF
    BG
    BH
    BI
    BJ
    BL
    BM
    BN
    BO
    BQ
    BR
    BS
    BT
    BV
    BW
    BY
    BZ
    CA
    CC
    CD
    CF
    CG
    CH
    CI
    CK
    CL
    CM
    CN
    CO
    CR
    CU
    CV
    CW
    CX
    CY
    CZ
    DE
    DJ
    DK
    DM
    DO
    DZ
    EC
    EE
    EG
    EH
    ER
    ES
    ET
    FI
    FJ
    FK
    FM
    FO
    FR
    GA
    GB
    GD
    GE
    GF
    GG
    GH
    GI
    GL
    GM
    GN
    GP
    GQ
    GR
    GS
    GT
    GU
    GW
    GY
    HK
    HM
    HN
    HR
    HT
    HU
    ID
    IE
    IL
    IM
    IN
    IO
    IQ
    IR
    IS
    IT
    JE
    JM
    JO
    JP
    KE
    KG
    KH
    KI
    KM
    KN
    KP
    KR
    KW
    KY
    KZ
    LA
    LB
    LC
    LI
    LK
    LR
    LS
    LT
    LU
    LV
    LY
    MA
    MC
    MD
    ME
    MF
    MG
    MH
    MK
    ML
    MM
    MN
    MO
    MP
    MQ
    MR
    MS
    MT
    MU
    MV
    MW
    MX
    MY
    MZ
    NA
    NC
    NE
    NF
    NG
    NI
    NL
    NO
    NP
    NR
    NU
    NZ
    OM
    PA
    PE
    PF
    PG
    PH
    PK
    PL
    PM
    PN
    PR
    PS
    PT
    PW
    PY
    QA
    RE
    RO
    RS
    RU
    RW
    SA
    SB
    SC
    SD
    SE
    SG
    SH
    SI
    SJ
    SK
    SL
    SM
    SN
    SO
    SR
    SS
    ST
    SV
    SX
    SY
    SZ
    TC
    TD
    TF
    TG
    TH
    TJ
    TK
    TL
    TM
    TN
    TO
    TR
    TT
    TV
    TW
    TZ
    UA
    UG
    UM
    US
    UY
    UZ
    VA
    VC
    VE
    VG
    VI
    VN
    VU
    WF
    WS
    YE
    YT
    ZA
    ZM
    ZW
}

enum Province {
    AB
    AK
    AL
    AR
    AZ
    BC
    CA
    CO
    CT
    DC
    DE
    FL
    GA
    HI
    IA
    ID
    IL
    IN
    KS
    KY
    LA
    MA
    MB
    MD
    ME
    MI
    MN
    MO
    MS
    MT
    NB
    NC
    ND
    NE
    NH
    NJ
    NL
    NM
    NS
    NT
    NU
    NV
    NY
    OH
    OK
    ON
    OR
    PA
    PE
    PR
    QC
    RI
    SC
    SD
    SK
    TN
    TX
    UT
    VA
    VT
    WA
    WI
    WV
    WY
    YT
}

type Address {
    mailing1: String
    mailing2: String
    suite: String
    city: String!
    province: Province!
    country: Country!
    postalCode: PostalCode
}

type Facility {
    _id: ID!
    selfStorage: SelfStorage!
    facilityNumber: String 
    emailAddress: Email
    phoneNumber: PhoneNumber
    address: Address!
    name: String!
}

input SelfStorageData {
    name: String!
    website: Url
}
input FacilityData {
    selfStorage: String!
    facilityNumber: String 
    emailAddress: Email 
    phoneNumber: PhoneNumber
    mailing1: String 
    suite: String
    city: String!
    province: Province!
    country: Country!
    postalCode: PostalCode
}

union Branding = ProductLine | Brand

enum PersonPrefix {
    DR
    LORD
    LADY
}
enum PersonSuffix {
    JR
    SR
    III
}
enum PersonCredentials {
    MD
    PHD
    ESQ
}
enum PersonRole {
    WRITER
    ILLUSTRATOR
    DIRECTOR
    ACTOR
    ARTIST
    SONGWRITER
    ATHLETE
    CELEBRITY
    HISTORICAL
    FICTIONAL
}
type Person {
    _id: ID!
    firstName: String 
    middleName: String
    lastName: String
    prefix: PersonPrefix
    suffix: PersonSuffix
    credentials: [PersonCredentials!]
    regex: String
    roles: [PersonRole!]
    name: String!
}
input PersonData {
    firstName: String 
    middleName: String
    lastName: String
    prefix: PersonPrefix
    suffix: PersonSuffix
    credentials: [PersonCredentials!]
    regex: String
    roles: [PersonRole!]
}
input MercariBrandData {
    name: String!
    ID: Int!
    parent: ID
}
input BrandData {
    name: String!
    mercariBrand: ID
    regex: String
}

enum TaskType {
    UNKNOWN
    MERCARI_PROMOTE
    MERCARI_IMPORT_BRANDS 
    MERCARI_IMPORT_TAXONOMY
    MERCARI_IMPORT_SHIPPING 
    MERCARI_IMPORT_HASHTAGS 
    MERCARI_IMPORT_FIELDS
}
type AdminTaskResult {
    count: Int!
    error: String
}
type AdminTask {
    _id: ID!
    taskType: TaskType!
    startTime: Date!
    endTime: Date
    isComplete: Boolean!
    result: AdminTaskResult!
    isSuccess: Boolean!
}
input AdminTaskErrorData {
    error: String!
    id: ID!
}
type BarcodeGroup {
    leading: Int!
    group: [Int!]
    current: Int!
}
type BarcodeGenerator {
    sku: BarcodeGroup!
    locator: BarcodeGroup!
}
enum LengthUOM {
    IN
    CM
    MM
    FT
    M
}
enum WeightUOM {
    G
    KG
    OZ
    LB
}
enum VolumeUOM {
    ML
    FLOZ
    PT
    QT
    GAL
    L
}
enum DurationUOM {
    S
    M 
    H 
}
type NumberValue {
    v: Float!
}
type Fraction {
    v: Int
    n: Int!
    d: Int!
}
union Numeric = NumberValue | Fraction

type Length {
    magnitude: Numeric!
    unit: LengthUOM!
    remain: Length
}
type Weight {
    magnitude: Numeric!
    unit: WeightUOM!
    remain: Weight
}
type Volume {
    magnitude: Numeric!
    unit: VolumeUOM!
    remain: Volume
}
type Dimensions {
    length: Length
    width: Length
    height: Length
}
enum Colors {
    BLACK
    WHITE
    RED
    YELLOW
    ORANGE
    GREEN
    BLUE
    PURPLE
    ROSE
    PINK
    GOLD
    SILVER
    COPPER
    BROWN
    BEIGE
    GRAY
    CYAN
    LIME
    AMBER
    SCARLET
    FUSCHIA
    MAROON
    OLIVE
    BURGUNDY
    BRONZE
}
enum ColorShades {
    LIGHT
    DARK
}
enum ColorPatterns {
    STRIPED
    PLAID
    GEOMETRIC
    ABSTRACT
    POLKA_DOT
    FLORAL
    TIE_DYE
}
type Color {
    color: Colors!
    shade: ColorShades
    pattern: ColorPatterns
}
type MonthYear {
    month: Int
    year: Year!
}
enum BarcodeType {
    LOCATOR
    SKU
    EAN
    UPC
    ISBN10
    ISBN13
    UNKNOWN
}
type IndividualBarcode {
    value: String!
    isValid: Boolean!
    barcodeType: BarcodeType!
}
type Barcode {
    _id: ID!
    barcodes: [IndividualBarcode!]!
}
enum BaseFlags {
    VINTAGE
    RARE
    COLLECTIBLE
    DISCONTINUED
    NOVELTY
    HANDMADE
    ADJUSTABLE
    ANTIQUE
    UNOPENED
}
enum Materials {
    LEAD_CRYSTAL
    GLASS
    PLASTIC
    WOOD
}
enum Fabrics {
    COTTON
    POLYESTER
}
enum Metals {
    GOLD_24K
    SILVER
}
type MadeOfBaseLineItem {
    material: Materials!
    percent: Percentage!
}
type MadeOfFabricLineItem {
    fabric: Fabrics!
    percent: Percentage!
}
type MadeOfMetalLineItem {
    metal: Metals!
    percent: Percentage!
}
union MadeOfLineItem = MadeOfBaseLineItem | MadeOfFabricLineItem | MadeOfMetalLineItem

type MadeOfSection {
    name: String
    value: MadeOfLineItem!
}

type Product {
    _id: ID!
    notes: String 
    branding: Branding
    modelName: String 
    modelNo: String 
    dimensions: Dimensions
    weight: Weight
    volume: Volume
    colors: [Color]
    includes: JSONObject
    features: [String]!
    origin: Country
    manufactured: MonthYear
    upcs: [Barcode]
    hashTags: [HashTag]
    flags: [BaseFlags]
    madeOf: [MadeOfSection]
    isVintage: Boolean!
    isRare: Boolean!
    isDiscontinued: Boolean!
    isCollectible: Boolean!
    isUnopened: Boolean!
    isAntique: Boolean!
    isHandmade: Boolean!
    isAdjustable: Boolean!
    isNovelty: Boolean!
}

type Query {
    mercariBrands: [MercariBrand]
    mercariBrand(id: ID!): MercariBrand
    brands: [Brand]
    brand(id: ID!): Brand
    hashTags: [HashTag]
    hashTag(id: ID!): HashTag
    mercariTaxonomies: [MercariTaxonomy]
    mercariTaxonomy(id: ID!): MercariTaxonomy
    productLines: [ProductLine]
    productLine(id: ID!): ProductLine
    brandings: [Branding]
    branding(id: ID!): Branding
    selfStorages: [SelfStorage]
    selfStorage(id: ID!): SelfStorage
    facilities: [Facility]
    facility(id: ID!): Facility
    people: [Person]
    person(id: ID!): Person
    personByRole(role: PersonRole): [Person]
    adminTasks: [AdminTask]
    adminTask(id: ID!): AdminTask 
    runningTasks: [AdminTask]
    getNextSku: String!
    getNextLocator: String!
    barcodes: [Barcode]
    barcode(id: ID!): Barcode
    allBarcodes: JSONObject
    idForBarcode(barcode: String!): ID
}

type Mutation {
    addMercariBrand(data: MercariBrandData): MercariBrand!
    addBrand(data: BrandData): Brand!
    addMercariTaxonomy(data: MercariTaxonomyData): MercariTaxonomy!
    addHashTag(data: HashTagData): HashTag!
    addProductLine(data: ProductLineData): ProductLine!
    addSelfStorage(data: SelfStorageData): SelfStorage!
    addFacility(data: FacilityData): Facility!
    addPerson(data: PersonData): Person!
    startAdminTask(data: TaskType!): AdminTask!
    incrAdminTask(data: ID!): AdminTask!
    errorAdminTask(data: AdminTaskErrorData): AdminTask!
    endAdminTask(data: ID!): AdminTask!
    addBarcode(barcode: String!): Barcode!
}
`;

interface MyContext {
    token?: string;
    datasource: {
        client: MongoClient;
    };
}

type Keys<T extends Record<string, any>> = keyof T;
type NonObjectKeys<T extends Record<string, any>> = {
    [P in Keys<T> & string]: T[P] extends
        | string
        | number
        | boolean
        | ArrayBuffer
        | ObjectId
        | Date
        ? P
        : never;
}[Keys<T> & string];
type ObjectKeys<T extends Record<string, any>> = {
    [P in Keys<T> & string]: T[P] extends
        | string
        | number
        | boolean
        | ArrayBuffer
        | ObjectId
        | Date
        ? never
        : P;
}[Keys<T> & string];

export type AdminTask = {
    _id: ObjectId;
    taskType: string;
    startTime: Date;
    endTime?: Date;
    result: {
        error?: string;
        count: number;
    };
};

export function getNextGeneratedBarcode(type: 'sku' | 'locator') {
    return async (_a: any, _b: any, context: MyContext) => {
        const groups = await context.datasource.client
            .db('jitt-data')
            .collection<{ sku: BarcodeGroup; locator: BarcodeGroup }>(
                'barcodeGenerator'
            )
            .findOne({});
        if (groups == null) throw new Error('no generator');
        const getter = getNextBarcode(type);
        const [result, nextGroup] = getter(groups[type]);
        await context.datasource.client
            .db('jitt-data')
            .collection<{ sku: BarcodeGroup; locator: BarcodeGroup }>(
                'barcodeGenerator'
            )
            .updateOne({}, { $set: { [type]: nextGroup } });
        return result;
    };
}
export function setPropertyByFunc<
    T extends Record<string, any> & { _id: ObjectId }
>(collectionName: string, func: () => any) {
    return async (
        _a: any,
        data: { data: string | ObjectId },
        context: MyContext
    ) => {
        console.log(`collectionName`, collectionName);
        console.log(`data`, data.data);
        console.log(`func`, func());
        const filter = constructFilter<T, '_id'>('_id')(
            data.data instanceof ObjectId ? data.data : new ObjectId(data.data)
        );
        console.log(`filter`, filter);
        const { upsertedId } = await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .updateOne(filter, { $set: func() }, { upsert: true });
        console.log(`upsertedId`, upsertedId);
        return await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .findOne(filter as Filter<T>);
    };
}
export function setProperty<
    T extends Record<string, any> & { _id: ObjectId },
    TArg extends { id: string | ObjectId }
>(collectionName: string, func: (x: Omit<TArg, 'id'>) => any) {
    return async (
        _a: any,
        { data: { id, ...rest } }: { data: TArg },
        context: MyContext
    ) => {
        const filter = constructFilter<T, '_id'>('_id')(
            id instanceof ObjectId ? id : new ObjectId(id)
        );
        await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .updateOne(filter, { $set: func(rest) });
        return await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .findOne(filter);
    };
}
export function incrProperty<T extends Record<string, any> & { _id: ObjectId }>(
    collectionName: string,
    propertyName: string
) {
    return async (
        _a: any,
        { data }: { data: string | ObjectId },
        context: MyContext
    ) => {
        const filter = constructFilter<T, '_id'>('_id')(
            data instanceof ObjectId ? data : new ObjectId(data)
        );

        await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .updateOne(filter, { $inc: { [propertyName]: 1 } as any });
        return await context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .findOne(filter);
    };
}
export function getAll<T extends Record<string, any>>(collectionName: string) {
    return (_a: any, _b: any, context: MyContext) =>
        context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .find({})
            .toArray();
}
export function getById<T extends { _id: ObjectId }>(collectionName: string) {
    return (_a: any, { id }: { id: string | ObjectId }, context: MyContext) =>
        context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .findOne({
                _id: id instanceof ObjectId ? id : new ObjectId(id)
            } as Filter<T>);
}

export function lookupForeignKey<
    T extends { _id: ObjectId } & Record<TKey, string | ObjectId>,
    TKey extends keyof T
>(collectionName: string, propertyName: TKey = collectionName as TKey) {
    return function (parent: T, _b: any, context: MyContext) {
        const id = parent[propertyName];
        return context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .findOne({
                _id: id instanceof ObjectId ? id : new ObjectId(id)
            } as Filter<T>);
    };
}

export function getByFunc<T extends Record<string, any>>(
    collectionName: string,
    predicate: (x: T) => void
) {
    return async (_a: any, _b: any, context: MyContext) =>
        (
            await context.datasource.client
                .db('jitt-data')
                .collection<T>(collectionName)
                .find({})
                .toArray()
        ).filter((x) => predicate(x as T));
}
export function getByValueInArray<
    T extends { _id: ObjectId } & Record<TKey, string[]>,
    TKey extends keyof T,
    TArg extends Record<TArgKey, any>,
    TArgKey extends keyof TArg
>(collectionName: string, propertyName: TKey, argName: TArgKey) {
    return function (parent: T, args: TArg, context: MyContext) {
        const value = args[argName];
        const filter = constructFilter<T, TKey>(
            propertyName,
            '$in'
        )(value as any as T[TKey]);
        return context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .find(filter)
            .toArray();
    };
}
export function getByValue<
    T extends { _id: ObjectId } & Record<TKey, string[]>,
    TKey extends keyof T,
    TArg extends Record<TArgKey, any>,
    TArgKey extends keyof TArg
>(collectionName: string, propertyName: TKey, argName: TArgKey) {
    return function (parent: T, args: TArg, context: MyContext) {
        const value = args[argName];
        const filter = constructFilter<T, TKey>(propertyName)(
            value as any as T[TKey]
        );
        return context.datasource.client
            .db('jitt-data')
            .collection<T>(collectionName)
            .find(filter)
            .toArray();
    };
}

const testFK = (value?: string) =>
    value == null ? undefined : new ObjectId(value);

const hashTagCtor = (data: { name: string; count: number }) => ({
    _id: new ObjectId(),
    name: data.name,
    usage: [{ from: new Date(Date.now()), count: data.count }]
});
const mercariTaxonomyCtor = (data: {
    categoryName: string;
    categorySelector: string;
    subCategoryName: string;
    subCategorySelector: string;
    subSubCategoryName: string;
    subSubCategorySelector: string;
}) => ({
    _id: new ObjectId(),
    timestamp: new Date(Date.now()),
    category: {
        name: data.categoryName,
        selector: data.categorySelector
    },
    subCategory: {
        name: data.subCategoryName,
        selector: data.subCategorySelector
    },
    subSubCategory: {
        name: data.subSubCategoryName,
        selector: data.subSubCategorySelector
    }
});

const brandCtor = (data: {
    name: string;
    mercariBrand?: string;
    regex?: string;
}) => ({
    _id: new ObjectId(),
    name: data.name,
    regex: data?.regex,
    mercariBrand: testFK(data.mercariBrand),
    timestamp: new Date(Date.now())
});
const productLineCtor = async (data: {
    brand?: string;
    description?: string;
}) => ({
    _id: new ObjectId(),
    description: data.description,
    brand: testFK(data.brand),
    timestamp: new Date(Date.now())
});
const personCtor = async (data: {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    suffix?: string;
    prefix?: string;
    credentials: string[];
    roles: string[];
}) => ({
    ...data
});
const mercariBrandCtor = (data: {
    name: string;
    id: number;
    parent?: string;
}) => ({
    _id: new ObjectId(),
    name: data.name,
    id: data.id,
    parent: testFK(data.parent),
    timestamp: new Date(Date.now())
});
const selfStorageCtor = (data: { name: string; website?: string }) => ({
    _id: new ObjectId(),
    name: data.name,
    website: data?.website
});
const facilityCtor = (data: {
    selfStorage: string;
    facilityNumber?: string;
    phoneNumber?: string;
    emailAddress?: string;
    mailing1?: string;
    suite?: string;
    city: string;
    province: string;
    country: string;
    postalCode?: string;
}) => ({
    _id: new ObjectId(),
    selfStorage: testFK(data.selfStorage),
    facilityNumber: data.facilityNumber,
    emailAddress: data.emailAddress,
    phoneNumber: data.phoneNumber,
    address: {
        mailing1: data?.mailing1,
        suite: data?.suite,
        city: data.city,
        province: data.province,
        country: data.country,
        postalCode: data.postalCode
    }
});
const adminTaskCtor = (data: AdminTaskTypes) => ({
    _id: new ObjectId(),
    taskType: data,
    startTime: new Date(Date.now()),
    result: {
        count: 0
    }
});
const barcodeCtor = (data: string): Barcode => ({
    _id: new ObjectId(),
    barcodes: classifyBarcode(data)
});
export function addRecord<T, U extends Record<string, any>>(
    collectionName: string,
    func: (data: T) => U
) {
    return async (
        _a: any,
        {
            data
        }: {
            data: T;
        },
        context: MyContext
    ) => {
        const { insertedId } = await context.datasource.client
            .db('jitt-data')
            .collection<U>(collectionName)
            .insertOne(func(data) as any);
        return getById(collectionName)(undefined, { id: insertedId }, context);
    };
}
const allBarcodes = async (context: MyContext) => {
    const result = await context.datasource.client
        .db('jitt-data')
        .collection<Barcode>('barcode')
        .find({})
        .toArray();
    return Object.fromEntries(
        result
            .map((x) =>
                x.barcodes.map(
                    (bc) => [bc.value, x._id.toHexString()] as [string, string]
                )
            )
            .reduce((pv, cv) => [...pv, ...cv], [])
    );
};
const resolvers: ApolloServerOptions<MyContext>['resolvers'] = {
    ObjectId: objectIdScalar,
    Date: dateScalar,
    Email: emailScalar,
    PhoneNumber: phoneNumberScalar,
    Url: urlScalar,
    PostalCode: postalCodeScalar,
    Year: GraphQLYear,
    JSONObject: GraphQLJSONObject,
    USCurrency: USCurrency,
    Percentage: Percentage,
    MadeOfLineItem: {
        __resolveType(
            obj: { fabric: string } | { metal: string } | { material: string }
        ) {
            if ('fabric' in obj) {
                return 'MadeOfFabricLineItem';
            } else if ('metal' in obj) {
                return 'MadeOfMetalLineItem';
            }
            return 'MadeOfBaseLineItem';
        }
    },
    Numeric: {
        __resolveType(obj: NumberValue | Fraction) {
            if (typeof obj === 'object') {
                if (Object.keys(obj).includes('n')) {
                    return 'Fraction';
                }
                return 'NumberValue';
            }
        }
    },
    AdminTask: {
        isComplete: (parent: { endTime?: Date }) => parent?.endTime != null,
        isSuccess: (parent: { result: { error?: string } }) =>
            parent?.result?.error == null
    },
    Branding: {
        __resolveType: async (
            obj: { _id: string },
            contextValue: MyContext,
            info: any
        ) => {
            const isBrand = await contextValue.datasource.client
                .db('jitt-data')
                .collection('brand')
                .findOne({ _id: new ObjectId(obj._id) });
            if (isBrand) {
                return 'Brand';
            }
            const isProductLine = await contextValue.datasource.client
                .db('jitt-data')
                .collection('productLine')
                .findOne({ _id: new ObjectId(obj._id) });
            if (isProductLine) {
                return 'ProductLine';
            }
            return null;
        }
    },
    MercariBrand: {
        selector: (parent: { id: number }, _b) =>
            `#sellBrandOptions-${parent.id.toFixed(0)}`
    },
    HashTag: {
        mostRecent: (parent: { usage: { from: Date; count: number }[] }) => {
            return parent.usage.length > 0
                ? new Date(
                      Math.max(...parent.usage.map((x) => x.from.valueOf()))
                  )
                : undefined;
        },
        highestCount: (parent: { usage: { from: Date; count: number }[] }) => {
            return parent.usage.length > 0
                ? Math.max(...parent.usage.map((x) => x.count))
                : undefined;
        }
    },
    Brand: {
        mercariBrand: lookupForeignKey('mercariBrand')
    },
    MercariTaxonomy: {
        name: (parent: {
            category: { name: string };
            subCategory: { name: string };
            subSubCategory: { name: string };
        }) =>
            [
                parent.category.name,
                parent.subCategory.name,
                parent.subSubCategory.name
            ].join(' || ')
    },
    Facility: {
        selfStorage: lookupForeignKey('selfStorage'),
        name: async (
            {
                address: { mailing1, city, province },
                selfStorage: { name }
            }: {
                address: { city: string; province: string; mailing1?: string };
                selfStorage: { name: string };
            },
            _b: any,
            c: MyContext
        ) =>
            [
                name,
                [city, province].join(', '),
                mailing1?.split(' ').slice(1).join(' ')
            ].join(' - ')
    },
    Person: {
        name: (parent: {
            firstName?: string;
            lastName?: string;
            middleName?: string;
            suffix?: PersonSuffixes;
            prefix?: PersonPrefixes;
            credentials: PersonCredentials[];
        }) =>
            [
                enumLookup(PersonPrefixes)(parent.prefix),
                parent.firstName,
                parent.middleName,
                parent.lastName,
                enumLookup(PersonSuffixes)(parent.suffix)
            ]
                .filter((x) => x != null)
                .join(' ')
                .concat(
                    parent.credentials.length > 0
                        ? ', '.concat(parent.credentials.join(' '))
                        : ''
                )
    },
    ProductLine: {
        brand: lookupForeignKey('brand'),
        name: async (
            parent: { brand?: string; description?: string },
            _b,
            context
        ) =>
            [
                parent?.brand
                    ? (
                          await context.datasource.client
                              .db('jitt-data')
                              .collection<{ name: string }>('brand')
                              .findOne({
                                  _id: new ObjectId(parent.brand)
                              })
                      )?.name
                    : undefined,
                parent?.description
            ]
                .filter((x) => x != null)
                .join(' ')
    },
    Query: {
        brandings: async (_a, _b, context) =>
            (
                await Promise.all([
                    getAll('productLine')(_a, _b, context),
                    getAll('brand')(_a, _b, context)
                ])
            ).reduce((pv, cv) => [...pv, ...cv], []),
        productLines: getAll('productLine'),
        productLine: getById('productLine'),
        mercariTaxonomies: getAll('mercariTaxonomy'),
        mercariTaxonomy: getById('mercariTaxonomy'),
        hashTags: getAll('hashTag'),
        hashTag: getById('hashTag'),
        mercariBrands: getAll('mercariBrand'),
        mercariBrand: getById('mercariBrand'),
        brands: getAll('brand'),
        brand: getById('brand'),
        selfStorages: getAll('selfStorage'),
        selfStorage: getById('selfStorage'),
        facilities: getAll('facility'),
        facility: getById('facility'),
        people: getAll('person'),
        person: getById('person'),
        personByRole: getByValueInArray<
            { roles: string[]; _id: ObjectId },
            'roles',
            { role: string },
            'role'
        >('person', 'roles', 'role'),
        adminTasks: getAll('adminTask'),
        adminTask: getById('adminTask'),
        runningTasks: getByFunc(
            'adminTask',
            (x: { endTime?: Date }) => x.endTime == null
        ),
        getNextSku: getNextGeneratedBarcode('sku'),
        getNextLocator: getNextGeneratedBarcode('locator'),
        barcodes: getAll('barcode'),
        barcode: getById('barcode'),
        allBarcodes: async (_a, _b, context) => allBarcodes(context),
        idForBarcode: async (_a, { barcode }: { barcode: string }, context) => {
            const lookup = await allBarcodes(context);
            console.log(`data`, barcode, lookup[barcode]);
            return lookup[barcode.padStart(13, '0')];
        }
    },
    Mutation: {
        addMercariBrand: addRecord('mercariBrand', mercariBrandCtor),
        addBrand: addRecord('brand', brandCtor),
        addMercariTaxonomy: addRecord('mercariTaxonomy', mercariTaxonomyCtor),
        addHashTag: addRecord('hashTag', hashTagCtor),
        addProductLine: addRecord('productLine', productLineCtor),
        addSelfStorage: addRecord('selfStorage', selfStorageCtor),
        addFacility: addRecord('facility', facilityCtor),
        addPerson: addRecord('person', personCtor),
        startAdminTask: addRecord('adminTask', adminTaskCtor),
        incrAdminTask: incrProperty('adminTask', 'result.count'),
        errorAdminTask: setProperty<
            AdminTask,
            { id: string | ObjectId; error: string }
        >('adminTask', ({ error }: { error: string }) => ({
            'result.error': error
        })),
        endAdminTask: setPropertyByFunc('adminTask', () => ({
            endTime: new Date(Date.now())
        })),
        addBarcode: addRecord('barcode', barcodeCtor)
    }
};

const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
const { url } = await startStandaloneServer<MyContext>(server, {
    context: async ({ req }) => ({
        token: req.headers.token as string,
        datasource: {
            client: await new MongoClient(
                'mongodb://localhost:27017/?authSource=admin',
                {
                    ignoreUndefined: true
                }
            ).connect()
        }
    }),
    listen: { port: 4000, path: 'graphql' }
});
console.log(`🚀  Server ready at ${url}`);
