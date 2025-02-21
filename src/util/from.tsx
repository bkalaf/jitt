import dayjs from 'dayjs';
import { Binary, ObjectId } from 'mongodb';

function fromBinaryToBlob(binary?: Binary) {
    if (binary == null) return undefined;
    const buffer = Buffer.from(binary.buffer, binary.sub_type);
    return new Blob([buffer]);
}

export const $from = {
    OID: (x?: ObjectId | string) => (x instanceof ObjectId ? x.toHexString() : (x as string)),
    bool: (x?: boolean) => x ?? false,
    optBool: (x?: boolean) => x,
    int: (x?: number) => (x == null ? 0 : x),
    optInt: (x?: number) => (x == null ? undefined : x),
    str: (x?: string) => x ?? '',
    optString: (x?: string) => (x == null || x === '' ? undefined : x),
    owner: (x?: string) => x ?? 'admin@junk-in-the-trunk.com',
    date: (x?: Date) => (x == null ? '' : dayjs(x).format('YYYY-MM-DD')),
    optDate: (x?: Date) => (x == null ? undefined : dayjs(x).format('YYYY-MM-DD')),
    lookup: (x?: { _id: ObjectId }) => x,
    listOfObject: (fmap: (item: any) => any) => (x?: any[]) => (x ?? []).map(fmap),
    data: fromBinaryToBlob
};