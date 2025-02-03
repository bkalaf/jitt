import { IHashTag } from '@app/schema/hashTag';
import { $from } from '../../util/from';
import { $to } from '../../util/to';

export function convert({
    _id,
    owner,
    name,
    usage
}: IHashTag) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        name: name,
        usage
    };
}

export function transform({ _id, owner, name, usage, ...rest }: IHashTag) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        name,
        usage
    };
}
