import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

const TIMECODE = `T00:00:00.000-08:00`
const parseDate = (dateString: string) => dayjs(dateString.concat(TIMECODE)).toDate();

export const $to = {
    owner: (x: string): string => x ?? 'admin@junk-in-the-trunk.com',
    OID: (x: ObjectId | string): ObjectId => (x instanceof ObjectId ? x : new ObjectId(x as string)),
    date: (x?: string): Date | undefined =>
        x == null || x.length === 0 ? undefined
        : typeof x === 'string' ? parseDate(x)
        : undefined,
    int: (x?: string): number | undefined =>
        x == null ? undefined
        : typeof x === 'string' && x.length > 0 ? parseInt(x, 10)
        : undefined,
    optString: (x?: string): string | undefined => (x == null || x.length === 0 ? undefined : x),
    lookup: (x?: any): ObjectId | undefined =>
        x == null ? undefined
        : x instanceof ObjectId ? x
        : typeof x === 'string' ? new ObjectId(x as string)
        : typeof x === 'object' ? x?._id?.toHexString() : ''
};
