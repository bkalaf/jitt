import { IHashTag } from '@app/schema/hashTag';
import { $from } from '../../util/from';
import { $to } from '../../util/to';

export function hashTagConvert({
    _id,
    owner,
    name,
    usage
}: IHashTag) {
    return Promise.resolve({
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        name: $to.str()(name),
        usage: $to.listOfObject(({ from, count }) => ({
            from: $to.date(from),
            count: $to.int()(count)
        }))(usage)
    });
}

export function hashTagTransform({ _id, owner, name, usage, ...rest }: IHashTag) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        name: $from.str(name),
        usage
    };
}
