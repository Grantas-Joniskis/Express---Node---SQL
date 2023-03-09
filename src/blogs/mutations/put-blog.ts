import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { BlogModel, BlogDataBody } from 'blogs/types';
import blogDataValidationSchema from 'validation-schemas/blog-data-validation-scheme';
import { blogs } from 'blogs/data';
import BlogNotFoundError from 'blogs/blog-not-found-error';

const putBlog: RequestHandler<
  { id?: string },
  BlogModel | ErrorResponse,
  BlogDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) throw new ServerSetupError();

  try {
    const blogData = blogDataValidationSchema.validateSync(req.body);

    const foundBlogIndex = blogs.findIndex((blog) => String(blog.id) === id);
    if (foundBlogIndex === -1) throw new BlogNotFoundError(id);

    const updatedBlog = { id: blogs[foundBlogIndex].id, ...blogData };

    blogs.splice(foundBlogIndex, 1, updatedBlog);

    res.status(200).json(updatedBlog);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putBlog;
