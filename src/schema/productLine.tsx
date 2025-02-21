import { ObjectId } from 'mongodb';
import { IBrand } from './brand';

export type IProductLine = {
    _id: ObjectId;
    owner: string;
    brand?: IBrand;
    description: string;
    joiningWords?: string;
    regex?: string;
};
