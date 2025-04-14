import {
    Collection,
    Db,
    Document,
    Filter,
    MongoClient,
    ObjectId
} from 'mongodb';
import { UnknownKeysParam, z } from 'zod';
import is from './../schemas/checkType';
import fs from 'graceful-fs';

export interface IService<
    T extends Record<string, any> & { _id: ObjectId },
    TMemory extends z.ZodType,
    TDatabase extends z.ZodType
> {
    $convertToMemory(val: unknown): z.infer<TMemory>;
    $convertToDatabase(val: unknown): z.infer<TDatabase>;
    getAll(): Promise<z.infer<TMemory>[]>;
    getById(id: string): Promise<z.infer<TMemory> | undefined>;
    insertRecord(data: Partial<T>): Promise<z.infer<TMemory>>;
    updateRecord(
        id: string,
        data: Partial<T>
    ): Promise<z.infer<TMemory> | undefined>;
    deleteRecord(id: string): Promise<boolean>;
}
export class MongoService<
    T extends Record<string, any> & { _id: ObjectId },
    TMemory extends z.ZodType,
    TDatabase extends z.ZodType
> implements IService<T, TMemory, TDatabase>
{
    client!: MongoClient;
    db!: Db;
    collection!: Collection<T>;
    pipeline?: Document[];
    $convertToMemory: (val: unknown) => z.infer<TMemory>;
    $convertToDatabase: (val: unknown) => z.infer<TDatabase>;
    $convertToPartialDatabase: (
        val: unknown
    ) => Partial<Omit<TDatabase, '_id'>>;
    constructor(
        collection: string,
        toMemory: TMemory,
        toDatabase: TDatabase,
        pipeline?: Document[]
    ) {
        this.pipeline = pipeline;
        this.client = new MongoClient(
            'mongodb://localhost:27017/?authSource=admin',
            {
                ignoreUndefined: true
            }
        );
        this.client
            .connect()
            .then((db) => {
                this.db = db.db('jitt-data');
                return this.db;
            })
            .then((db) => (this.collection = db.collection(collection)));
        this.$convertToMemory = (val: unknown) => {
            try {
                console.log(`$convertToMemory`, val);
                return toMemory.parse(val) as z.infer<TMemory>;
            } catch (error) {
                fs.appendFileSync(
                    '/home/bobby/repos/jitt/convertToMemoryError.json',
                    this.collection.collectionName
                );
                fs.appendFileSync(
                    '/home/bobby/repos/jitt/convertToMemoryError.json',
                    JSON.stringify(val)
                );
                throw error;
            }
        };
        this.$convertToDatabase = (val: unknown) => {
            console.log(`$convertToDatabase`, val);
            return toDatabase.parse(val) as z.infer<TDatabase>;
        };
        this.$convertToPartialDatabase = (val: unknown) => {
            if (is.zodObject(toDatabase)) {
                return toDatabase
                    .partial()
                    .omit({ _id: true })
                    .parse(val) as Partial<Omit<TDatabase, '_id'>>;
            }
            return val as any;
        };
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.insertRecord = this.insertRecord.bind(this);
        this.updateRecord = this.updateRecord.bind(this);
    }
    async getById(id: string): Promise<z.infer<TMemory> | undefined> {
        const record = await (this.pipeline
            ? this.collection
                  .aggregate(
                      this.pipeline.concat({
                          $match: {
                              _id: new ObjectId(id)
                          }
                      })
                  )
                  .toArray()
            : this.collection
                  .find({
                      _id: new ObjectId(id) as Filter<T>
                  })
                  .toArray());
        return record.length === 0
            ? undefined
            : this.$convertToMemory(record[0]);
    }
    async insertRecord(data: Partial<T>): Promise<z.infer<TMemory>> {
        console.log(`data`, data);
        const converted = this.$convertToDatabase(data);
        console.log(`converted`, converted);
        const { insertedId } = await this.collection.insertOne(
            converted as any
        );
        const result = await this.getById(insertedId.toHexString());
        if (result == null) throw new Error('insert failed');
        return result;
    }
    async updateRecord(
        id: string,
        data: Partial<T>
    ): Promise<z.infer<TMemory> | undefined> {
        console.log(`data`, data);
        const converted = this.$convertToPartialDatabase(data);
        console.log(`converted`, converted);
        const { upsertedId } = await this.collection.updateOne(
            { _id: new ObjectId(id) as Filter<T> },
            { $set: converted as any },
            { upsert: true }
        );
        const result = await this.getById(upsertedId?.toHexString() ?? id);
        if (result == null) throw new Error('insert failed');
        return result;
    }
    async deleteRecord(id: string): Promise<boolean> {
        const { deletedCount } = await this.collection.deleteOne({
            _id: new ObjectId(id)
        } as Filter<T>);
        return deletedCount === 1;
    }
    async getAll(): Promise<z.infer<TMemory>[]> {
        const records = this.pipeline
            ? this.collection.aggregate(this.pipeline).toArray()
            : this.collection.find().toArray();
        const result = (await records) as T[];
        return result.map(this.$convertToMemory);
    }
}
