import { ObjectId } from 'mongodb';
import { IHashTag, IHashTagUsage } from '../hashTag';

export const init = () =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com',
        name: '',
        usage: [] as IHashTagUsage[]
    } as IHashTag);
