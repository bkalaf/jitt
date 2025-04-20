import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';

export default class MercariBrands extends MongoDataSource<MB> {
    getAll() {
        return this.collection.find();
    }
}
