import { ObjectId } from 'mongodb';

export const init = () =>
    Promise.resolve({
        _id: new ObjectId(),
        name: '',
        owner: 'admin@junk-in-the-trunk.com'
    });
