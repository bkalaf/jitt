import { ObjectId } from 'mongodb';

export const init = () =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com',
        name: '',
        regex: '',
        timestamp: new Date(Date.now()),
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
        }
    });