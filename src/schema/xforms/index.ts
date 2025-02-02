import { convert as mercariBrandConvert, transform as mercariBrandTransform } from './mercariBrand';
import { convert as brandConvert, transform as brandTransform } from './brand';
import { convert as mercariTaxonomyConvert, transform as mercariTaxonomyTransform } from './mercariTaxonomy';
import { convert as hashTagConvert, transform as hashTagTransform } from './hashTag';

const convertIn = {
    brand: brandTransform,
    hashTag: hashTagTransform,
    mercariBrand: mercariBrandTransform,
    mercariTaxonomy: mercariTaxonomyTransform
}
const convertOut = {
    brand: brandConvert,
    hashTag: hashTagConvert,
    mercariBrand: mercariBrandConvert,
    mercariTaxonomy: mercariTaxonomyConvert
}

export default {
    convertIn,
    convertOut
}