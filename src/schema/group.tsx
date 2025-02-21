import { ObjectId } from 'mongodb';

export type IGroup = {
    _id: ObjectId;
    owner: string;
    name: string;
};
