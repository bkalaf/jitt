import { ObjectId } from 'mongodb';
import { IProductLine } from '../productLine';
import { $to } from '../../util/to';
import {$from} from '../../util/from';

export async function productLineConvert({
    _id,
    owner,
    brand,
    description,
    joiningWords,
    regex
}: IProductLine) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        brand: $to.lookup(brand),
        description: $to.str('')(description),
        joiningWords: $to.optString(joiningWords),
        regex: $to.optString(regex)
    };
}

export function productLineTransform({ _id, owner, description, joiningWords, brand, regex }: IProductLine) {
    return {
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        description: $from.str(description),
        joiningWords: $from.optString(joiningWords),
        regex: $from.optString(regex),
        brand: $from.lookup(brand)
    };
}
