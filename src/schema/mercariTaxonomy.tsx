import { ObjectId } from 'mongodb';

export type IMercariCategory = {
    selector: string;
    name: string;
};

export type IMercariTaxonomy = {
    _id: ObjectId;
    owner: string;
    timestamp: Date;
    category: IMercariCategory;
    subCategory: IMercariCategory;
    subSubCategory: IMercariCategory;
    regex?: string;
    readonly name: string;
};
