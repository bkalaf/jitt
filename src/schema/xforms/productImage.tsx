import { ObjectId } from 'mongodb';
import { IProductImage } from '../productImage';
import {$to} from '../../util/to';
import {$from} from '../../util/from';

export async function productImageConvert({
    _id,
    owner,
    doNotRemoveBg,
    ignore,
    name, 
    original,
    removeBg,
    selection
}: IProductImage) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        doNotRemoveBg: $to.bool(false)(doNotRemoveBg),
        ignore: $to.bool(false)(ignore),
        name: $to.str('')(name),
        original:
            original ?
                {
                    data: $to.data(original.data),
                    extension: $to.str('')(original.extension)
                }
            :   undefined,
        removeBg:
            removeBg ?
                {
                    data: $to.data(removeBg.data),
                    extension: $to.str('')(removeBg.extension)
                }
            :   undefined,
        selection: $to.str('')(selection)
    };
}

export function productImageTransform({ _id, owner, doNotRemoveBg, ignore, name, original, removeBg, selection }: IProductImage) {
    return {
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        selection: $from.optString(selection),
        doNotRemoveBg: $from.bool(doNotRemoveBg),
        ignore: $from.bool(ignore),
        name: $from.str(name),
        original:
            original ?
                {
                    data: $from.data(original.data as any),
                    extension: $from.str(original.extension)
                }
            :   undefined,
        removeBg:
            removeBg ?
                {
                    data: $from.data(removeBg.data as any),
                    extension: $from.str(removeBg.extension)
                }
            :   undefined
    };
}
