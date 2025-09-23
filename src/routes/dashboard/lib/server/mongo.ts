import { MongoClient, type Db } from "mongodb";
import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";
const uri = env.MONGODB_URI!;
const dbName = env.MONGODB_DB!;
if (!uri || !dbName) throw new Error("Missing MONGODB_URI / MONGODB_DB");

type Cached = { client: MongoClient | null; db: Db | null };
const globalForMongo = globalThis as unknown as { _mongo?: Cached };
const cached: Cached = globalForMongo._mongo ?? { client: null, db: null };
if (dev) globalForMongo._mongo = cached;

export async function getDb(): Promise<Db> {
    if (cached.db) return cached.db;
    const client = new MongoClient(uri, { maxPoolSize: 10 });
    await client.connect();
    const db = client.db(dbName);
    cached.client = client;
    cached.db = db;
    console.log('MongoDB connected.')
    return db;
}