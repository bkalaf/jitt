import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

export default {
    OID: (x?: ObjectId | string) => x instanceof ObjectId ? x.toHexString() : x as string,
    lookup: (x?: { _id: ObjectId }) => (x == null ? undefined : x._id.toHexString()),
    date: (x?: Date) => x == null ? '' : dayjs(x).format('YYYY-MM-DD'),
    int: (x?: number) => x == null ? '' : x.toFixed(0)
};