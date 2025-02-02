import { ObjectId } from 'mongodb';

export type IMercariBrand = {
    _id: ObjectId;
    name: string;
    owner: string;
    id: number;
    selector: string;
    timestamp: Date;
};
