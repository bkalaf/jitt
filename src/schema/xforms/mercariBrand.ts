import { IMercariBrand } from '../mercariBrand';
import dayjs from 'dayjs';
import $to from '@app/util/$to';
import $from from '@app/util/$from';

export function convert({ _id, name, owner, id, selector, timestamp }: IMercariBrand) {
    return {
        _id: $to.OID(_id),
        name,
        owner: $to.owner(owner),
        selector: $to.optString(selector),
        id: $to.int(id as any),
        timestamp: $to.date(dayjs(timestamp instanceof Date ? timestamp : new Date(Date.parse(timestamp as string))).format('YYYY-MM-DD'))
    };
}

export function transform({ _id, owner, name, timestamp, id, ...rest }: IMercariBrand) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner,
        name,
        id: $from.int(id),
        timestamp: $from.date(timestamp)
    };
}