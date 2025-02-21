import { IMediaCollection, MediaTypes } from '../mediaCollection';
import {$to} from '../../util/to';
import {$from} from '../../util/from';

export function mediaCollectionConvert({
    _id,
    owner,
    name,
    regex,
    mediaType
}: IMediaCollection) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        name: $to.str('')(name),
        regex: $to.optString(regex),
        mediaType: $to.str<MediaTypes>('unknown')(mediaType)
    };
}

export function mediaCollectionTransform({ _id, owner, name, regex, mediaType }: IMediaCollection) {
    return {
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com',
        name: $from.str(name) ?? '',
        mediaType: $from.str(mediaType) ?? 'unknown',
        regex: $from.optString(regex)
    };
}
