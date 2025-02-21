import { $from } from '../../util/from';
import { $to } from '../../util/to';
import { IMercariTaxonomy } from '../mercariTaxonomy';

export function mercariTaxonomyConvert({ _id, owner, regex, timestamp, category, subCategory, subSubCategory }: IMercariTaxonomy) {
    return Promise.resolve({
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        category: {
            name: $to.str()(category.name),
            selector: $to.str('#')(category.selector)
        },
        subCategory: {
            name: $to.str()(subCategory.name),
            selector: $to.str('#')(subCategory.selector)
        },
        subSubCategory: {
            name: $to.str()(subSubCategory.name),
            selector: $to.str('#')(subSubCategory.selector)
        },
        regex: $to.optString(regex)
    });
}

export function mercariTaxonomyTransform({ _id, owner, name, timestamp, category, subCategory, subSubCategory }: IMercariTaxonomy) {
    return {
        _id: $from.OID(_id),
        owner,
        name,
        timestamp: $from.date(timestamp),
        category,
        subCategory,
        subSubCategory
    };
}