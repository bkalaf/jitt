import { ObjectId } from 'mongodb';
import { IMercariBrand } from '../mercariBrand';
import $to from './$to';
import $from from './$from';
export type IBrand = {
    _id: ObjectId;
    name: string;
    timestamp: Date;
    owner: string;
    regex?: string;
    mercariBrand?: IMercariBrand;
}

export function brandConvert({ _id, name, timestamp, owner, regex, mercariBrand }: IBrand) {
    return {
        _id: $to.OID(_id),
        name: name,
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        regex: regex,
        mercariBrand: $to.lookup(mercariBrand as any)
    }
}

export function brandTransform({ mercariBrand, _id, ...rest }: IBrand) {
    return {
        ...rest,
        _id: $from.OID(_id),
        mercariBrand: $from.lookup(mercariBrand)
    }
}