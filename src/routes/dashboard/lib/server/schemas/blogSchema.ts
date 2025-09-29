import mongoose from 'mongoose';
import type { Connection, HydratedDocument, Model } from 'mongoose';

const { Schema } = mongoose;

export interface Blog {
  title: string;
  slug: string;
  author: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type BlogDocument = HydratedDocument<Blog>;
export type BlogModel = Model<Blog>;

export const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, trim: true },
    coverImage: { type: String, trim: true },
    tags: { type: [String], default: [] },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export function registerBlogModel(connection: Connection): BlogModel {
  return (connection.models.Blog as BlogModel) || connection.model<Blog>('Blog', blogSchema);
}
