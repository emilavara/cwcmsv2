import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getBlogModel } from '$cmslib/server/contentMongo';

export const GET: RequestHandler = async ({ params }) => {
  const Blog = await getBlogModel();
  const blog = await Blog.findOne({ slug: params.slug }).lean();
  if (!blog) throw error(404, 'Blog not found');
  return json(blog);
};

export const PATCH: RequestHandler = async ({ params, request }) => {
  const Blog = await getBlogModel();
  const updates = await request.json();

  try {
    const updated = await Blog.findOneAndUpdate({ slug: params.slug }, updates, {
      new: true,
      runValidators: true,
    }).lean();

    if (!updated) throw error(404, 'Blog not found');
    return json(updated);
  } catch (err: unknown) {
    if (typeof err === 'object' && err !== null && 'code' in err && (err as { code: number }).code === 11000) {
      throw error(409, 'slug already exists');
    }
    throw error(500, 'Failed to update blog');
  }
};

export const DELETE: RequestHandler = async ({ params }) => {
  const Blog = await getBlogModel();
  const result = await Blog.deleteOne({ slug: params.slug });
  if (result.deletedCount === 0) throw error(404, 'Blog not found');
  return json({ success: true });
};
