import { barcodeConvert, barcodeTransform } from './barcode';
import { barcodeGeneratorConvert, barcodeGeneratorTransform } from './barcodeGenerator';
import { brandConvert, brandTransform } from './brand';
import { groupConvert, groupTransform } from './group';
import { hashTagConvert, hashTagTransform } from './hashTag';
import { mediaCollectionConvert, mediaCollectionTransform } from './mediaCollection';
import { mercariBrandConvert, mercariBrandTransform } from './mercariBrand';
import { mercariTaxonomyConvert, mercariTaxonomyTransform } from './mercariTaxonomy';
import { productImageConvert, productImageTransform } from './productImage';
import { productLineConvert, productLineTransform } from './productLine';

const convertIn = {
    barcode: barcodeTransform,
    barcodeGenerator: barcodeGeneratorTransform,
    brand: brandTransform,
    group: groupTransform,
    hashTag: hashTagTransform,
    mediaCollection: mediaCollectionTransform,
    mercariBrand: mercariBrandTransform,
    mercariTaxonomy: mercariTaxonomyTransform,
    productImage: productImageTransform,
    productLine: productLineTransform
}

const convertOut = {
    barcode: barcodeConvert,
    barcodeGenerator: barcodeGeneratorConvert,
    brand: brandConvert,
    group: groupConvert,
    hashTag: hashTagConvert,
    mediaCollection: mediaCollectionConvert,
    mercariBrand: mercariBrandConvert,
    mercariTaxonomy: mercariTaxonomyConvert,
    productImage: productImageConvert,
    productLine: productLineConvert
}

export default {
    convertIn,
    convertOut
}