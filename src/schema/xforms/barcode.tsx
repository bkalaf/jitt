import { IBarcode } from '../barcode';
import {$to} from '../../util/to';
import {$from} from '../../util/from';

export function barcodeConvert({
    _id,
    owner,
    barcodes
}: IBarcode) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        barcodes: $to.listOfObject(item => item)(barcodes) ?? []
    };
}

export function barcodeTransform({ _id, owner, barcodes }: IBarcode) {
    return {
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        barcodes: $from.listOfObject(item => item)(barcodes) ?? []
    };
}
