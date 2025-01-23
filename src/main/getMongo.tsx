import { MongoClient } from 'mongodb';

export async function getMongo() {
    if (window.db) return window.db;
    const mongoClient = new MongoClient('mongodb://localhost:27017/?authSource=admin', { ignoreUndefined: true });
    const client = await mongoClient.connect();
    const db = client.db('jitt');
    window.db = db;
    return window.db;
}
