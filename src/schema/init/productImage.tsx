import { ObjectId } from 'mongodb';
import { IProductImage } from '../productImage';

export const init = (): Promise<IProductImage> =>
    Promise.resolve({
        _id: new ObjectId(),
        owner: 'admin@junk-in-the-trunk.com',
        name: '',
        ignore: false,
        doNotRemoveBg: false
    });
