import { ObjectId } from 'mongodb';

export default {
    owner: (x: string) => x ?? 'admin@junk-in-the-trunk.com',
    OID: (x: ObjectId | string) => (x instanceof ObjectId ? x : new ObjectId(x as string)),
    date: (x?: string) =>
        x == null || x.length === 0 ? undefined
        : typeof x === 'string' ? new Date(Date.parse(x))
        : undefined,
    int: (x?: string) =>
        x == null ? undefined
        : typeof x === 'string' && x.length > 0 ? parseInt(x, 10)
        : undefined,
    optString: (x?: string) => (x == null || x.length === 0 ? undefined : x),
    lookup: (x?: string | ObjectId) =>
        x == null ? undefined
        : x instanceof ObjectId ? x
        : new ObjectId(x as string)
};
