import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getBlogModel } from '$cmslib/server/contentMongo';

export const GET: RequestHandler = async () => {
  const Blog = await getBlogModel();
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
  return json(blogs);
};

export const POST: RequestHandler = async ({ request }) => {
  const payload = await request.json();
  const { title, slug, author, content } = payload ?? {};
  if (!title || !slug || !author || !content) {
    throw error(400, 'title, slug, author and content are required');
  }

  const Blog = await getBlogModel();
  try {
    const created = await Blog.create({
      title,
      slug,
      author,
      content,
      excerpt: payload.excerpt ?? '',
      coverImage: payload.coverImage ?? '',
      tags: Array.isArray(payload.tags) ? payload.tags : [],
      published: Boolean(payload.published),
    });
    return json(created.toObject(), { status: 201 });
  } catch (err: unknown) {
    if (typeof err === 'object' && err !== null && 'code' in err && (err as { code: number }).code === 11000) {
      throw error(409, 'slug already exists');
    }
    throw error(500, 'Failed to create blog');
  }
};
