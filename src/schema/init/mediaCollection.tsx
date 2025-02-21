import { ObjectId } from 'mongodb';
import { IMediaCollection } from '../mediaCollection';

export const init = (): Promise<IMediaCollection> =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com',
        name: '',
        mediaType: 'unknown'
    });
