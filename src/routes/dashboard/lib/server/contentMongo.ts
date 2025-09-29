import mongoose from 'mongoose';
import type { Connection, ConnectOptions } from 'mongoose';
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { registerBlogModel, type BlogModel } from './schemas/blogSchema';

const contentUri = env.MONGODB_CONTENT_URI || env.MONGO_CONTENT_URI || '';
const contentDbName = env.MONGODB_CONTENT_DB || env.MONGO_CONTENT_DB || undefined;
if (!contentUri) throw new Error('Missing MONGODB_CONTENT_URI / MONGO_CONTENT_URI');

type CachedContent = { conn: Connection | null; promise: Promise<Connection> | null };
const globalForContent = globalThis as unknown as { _mongooseContent?: CachedContent };
const cachedContent: CachedContent = globalForContent._mongooseContent ?? {
  conn: null,
  promise: null,
};
if (dev) globalForContent._mongooseContent = cachedContent;

export async function connectContentMongo(): Promise<Connection> {
  if (cachedContent.conn) return cachedContent.conn;
  if (!cachedContent.promise) {
    const options: ConnectOptions = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };
    if (contentDbName) (options as ConnectOptions).dbName = contentDbName;
    const connection = mongoose.createConnection(contentUri, options);
    cachedContent.promise = connection.asPromise();
  }
  cachedContent.conn = await cachedContent.promise;
  return cachedContent.conn;
}

export async function getBlogModel(): Promise<BlogModel> {
  const connection = await connectContentMongo();
  return registerBlogModel(connection);
}