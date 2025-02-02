import $to from '@app/util/$to';
import { IMercariTaxonomy } from '../mercariTaxonomy';
import $from from '@app/util/$from';

export function convert({ _id, owner, regex, timestamp, category, subCategory, subSubCategory }: IMercariTaxonomy) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        category,
        subCategory,
        subSubCategory,
        regex: $to.optString(regex)
    };
}

export function transform({ _id, owner, name, timestamp, ...rest }: IMercariTaxonomy) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner,
        name,
        timestamp: $from.date(timestamp)
    };
}