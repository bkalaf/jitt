import { IGroup } from '../group';
import {$to} from '../../util/to';
import {$from} from '../../util/from';

export function groupConvert({
    _id,
    owner,
    name
}: IGroup) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        name: $to.str('')(name)
    };
}

export function groupTransform({ _id, owner, name }: IGroup) {
    return {
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        name: $from.str(name)
    };
}
