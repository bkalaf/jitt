import { Binary, ObjectId } from 'mongodb';
import { parseDate } from './parseDate';
import dayjs from 'dayjs';

async function blobToBinary(blob?: Blob) {
    if (blob == null) return undefined;
    const buffer = await blob.arrayBuffer()
    return new Binary(Buffer.from(buffer));
}

export const $to = {
    OID: (x: ObjectId | string): ObjectId => typeof x === 'string' ? new ObjectId(x) : x,
    bool: (defaultValue = false) => (x?: boolean): boolean => x ?? defaultValue,
    optBool: (x?: boolean): boolean | undefined => x,
    date: (x?: string): Date =>
        x == null || x.length === 0 ? parseDate(dayjs(new Date(Date.now())).format('YYYY-MM-DD'))
        : typeof x === 'string' ? parseDate(x)
        : parseDate(dayjs(new Date(Date.now())).format('YYYY-MM-DD')),
    optDate: (x?: string): Date | undefined =>
        x == null || x.length === 0 ? undefined
        : typeof x === 'string' ? parseDate(x)
        : undefined,
    int:
        (defaultValue = 0) =>
        (x?: string): number =>
            x == null || x.length === 0 ? defaultValue
            : typeof x === 'string' && x.length > 0 ? parseInt(x, 10)
            : defaultValue,
    intOpt: (x?: string): number | undefined =>
        x == null || x.length === 0 ? undefined
        : typeof x === 'string' && x.length > 0 ? parseInt(x, 10)
        : undefined,
    str: <T extends string = string>(defaultValue = '' as T) => (x?: string): T => x?.trim() as T ?? defaultValue,
    optString: (x?: string): string | undefined => (x == null || x.length === 0 ? undefined : x?.trim()),
    owner: (x: string): string => x ?? 'admin@junk-in-the-trunk.com',
    lookup: (x?: any): ObjectId | undefined =>
        x == null ? undefined
        : x instanceof ObjectId ? x
        : typeof x === 'string' ? new ObjectId(x as string)
        : typeof x === 'object' ? x?._id?.toHexString()
        : undefined,
    listOfObject: (fmap: (item: any) => any) => (x?: any[]) => (x ?? []).map(fmap),
    data: blobToBinary
};
