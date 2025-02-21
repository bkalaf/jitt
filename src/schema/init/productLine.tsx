import { ObjectId } from 'mongodb';
import { IProductLine } from '../productLine';

export const init = (): Promise<IProductLine> =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com',
        description: '',
        joiningWords: '',
        regex: ''
    });
