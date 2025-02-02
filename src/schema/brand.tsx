import { IMercariBrand } from '@app/schema/mercariBrand';
import { ObjectId } from 'mongodb';

export type IBrand = {
    _id: ObjectId;
    name: string;
    timestamp: Date;
    owner: string;
    regex?: string;
    mercariBrand?: IMercariBrand;
};
