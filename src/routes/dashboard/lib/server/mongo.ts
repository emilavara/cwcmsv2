import mongoose from "mongoose";
import type { Db } from "mongodb";
import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";

const uri = env.MONGODB_URI || env.MONGO_URI || "";
const dbName = env.MONGODB_DB || env.MONGO_DB || undefined;
if (!uri) throw new Error("Missing MONGODB_URI / MONGO_URI");

type Cached = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
const globalForMongoose = globalThis as unknown as { _mongoose?: Cached };
const cached: Cached = globalForMongoose._mongoose ?? { conn: null, promise: null };
if (dev) globalForMongoose._mongoose = cached;

export async function connectMongo(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const options: Parameters<typeof mongoose.connect>[1] = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };
    if (dbName) (options as any).dbName = dbName;
    cached.promise = mongoose.connect(uri, options).then((m) => m);
  }
  cached.conn = await cached.promise;
  console.log("MongoDB: Connected to auth database.");
  return cached.conn;
}

export async function getDb(): Promise<Db> {
  const m = await connectMongo();
  const db = m.connection.db;
  if (!db) throw new Error("Mongoose connection has no native db");
  return db;
}

export function getModel<TSchema extends mongoose.Schema>(
  name: string,
  schema: TSchema
): mongoose.Model<mongoose.InferSchemaType<TSchema>> {
  return (
    (mongoose.models[name] as mongoose.Model<mongoose.InferSchemaType<TSchema>>) ||
    mongoose.model(name, schema)
  );
}

export { mongoose };
