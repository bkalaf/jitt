import { ObjectId } from 'mongodb';
import { IMercariTaxonomy } from '../xforms/mercariTaxonomy';

export const init = () => Promise.resolve({
    _id: new ObjectId(),
    category: {
        selector: '',
        name: ''
    },
    subCategory: {
        selector: '',
        name: ''
    },
    subSubCategory: {
        selector: '',
        name: ''
    },
    owner: 'admin@junk-in-the-trunk.com',
    timestamp: new Date(Date.now())
} as Omit<IMercariTaxonomy, 'name'>)