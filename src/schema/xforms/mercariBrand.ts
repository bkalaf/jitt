import { IMercariBrand } from '../mercariBrand';
import dayjs from 'dayjs';
import $to from './$to';

export function mercariBrandConvert({ _id, name, owner, id, selector, timestamp }: IMercariBrand) {
    return {
        _id: $to.OID(_id),
        name,
        owner: $to.owner(owner),
        selector: $to.optString(selector),
        id: $to.int(id as any),
        timestamp: $to.date(dayjs(timestamp instanceof Date ? timestamp : new Date(Date.parse(timestamp as string))).format('YYYY-MM-DD'))
    };
}

