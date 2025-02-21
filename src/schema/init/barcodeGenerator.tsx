import { ObjectId } from 'mongodb';

export const init = () =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com'
    });
