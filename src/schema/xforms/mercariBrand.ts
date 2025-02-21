import { $from } from '../../util/from';
import { $to } from '../../util/to';
import { IMercariBrand } from '../mercariBrand';
import dayjs from 'dayjs';

export function mercariBrandConvert({ _id, name, owner, id, selector, timestamp }: IMercariBrand) {
    return Promise.resolve({
        _id: $to.OID(_id),
        name: $to.str()(name),
        owner: $to.owner(owner),
        selector: $to.optString(selector),
        id: $to.int(0)(id as any),
        timestamp: $to.date(timestamp as any)
    });
}

export function mercariBrandTransform({ _id, owner, name, timestamp, id, ...rest }: IMercariBrand) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner,
        name: $from.str(name),
        id: $from.int(id),
        timestamp: $from.date(timestamp)
    };
}