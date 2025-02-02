import { ObjectId } from 'mongodb';
import $to from './$to';

export type IMercariCategory = {
    selector: string;
    name: string;
}

export type IMercariTaxonomy = {
    _id: ObjectId;
    owner: string;
    timestamp: Date;
    category: IMercariCategory;
    subCategory: IMercariCategory;
    subSubCategory: IMercariCategory;
    regex?: string;
    readonly name: string;
}

export function mercariTaxonomyConvert({ _id, owner, regex, timestamp, category, subCategory, subSubCategory }: IMercariTaxonomy) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        category,
        subCategory,
        subSubCategory,
        regex: $to.optString(regex)
    }
}