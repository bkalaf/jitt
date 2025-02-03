import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

export const $from = {
    OID: (x?: ObjectId | string) => x instanceof ObjectId ? x.toHexString() : x as string,
    lookup: (x?: { _id: ObjectId }) => x,
    date: (x?: Date) => x == null ? '' : dayjs(x).format('YYYY-MM-DD'),
    int: (x?: number) => x == null ? '' : x.toFixed(0)
};