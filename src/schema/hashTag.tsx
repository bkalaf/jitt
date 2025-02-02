import { ObjectId } from 'mongodb';

export type IHashTagUsage = {
    from: Date;
    count: number;
};
export type IHashTag = {
    _id: ObjectId;
    owner: string;
    name: string;
    usage: IHashTagUsage[];
    // readonly maxCount: number;
};
