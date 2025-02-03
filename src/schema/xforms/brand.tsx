import { $from } from '../../util/from';
import { $to } from '../../util/to';
import { IBrand } from '../brand';

export function convert(input: IBrand) {
    console.log(`inside convert`, input);
    const { _id, name, timestamp, owner, regex, mercariBrand } = input;
    return {
        _id: $to.OID(_id),
        name: name,
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        regex: $to.optString(regex),
        mercariBrand: $to.lookup(mercariBrand as any)
    };
}

export function transform(input: IBrand) {
    console.log(`inside transform`, input);
    const { mercariBrand, _id, timestamp, name, regex, owner } = input;
    return {
        _id: $from.OID(_id),
        mercariBrand: $from.lookup(mercariBrand),
        timestamp: $from.date(timestamp),
        regex,
        owner,
        name

    };
}
