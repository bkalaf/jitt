import { ObjectId } from 'mongodb';

export const mercariBrandInit = () =>
    Promise.resolve({
        _id: new ObjectId(),
        name: '',
        id: 0,
        selector: '',
        timestamp: new Date(Date.now()),
        owner: 'admin@junk-in-the-trunk.com'
    });
