import $to from '@app/util/$to';
import $from from '@app/util/$from';
import { IBrand } from '../brand';

export function convert({ _id, name, timestamp, owner, regex, mercariBrand }: IBrand) {
    return {
        _id: $to.OID(_id),
        name: name,
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        regex: regex,
        mercariBrand: $to.lookup(mercariBrand as any)
    }
}

export function transform({ mercariBrand, _id, timestamp, ...rest }: IBrand) {
    return {
        ...rest,
        _id: $from.OID(_id),
        mercariBrand: $from.lookup(mercariBrand),
        timestamp: $from.date(timestamp)
    }
}