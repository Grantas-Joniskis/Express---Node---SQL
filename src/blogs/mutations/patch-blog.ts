import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { BlogModel, BlogDataBody } from 'blogs/types';
import { blogs } from 'blogs/data';
import BlogNotFoundError from 'blogs/blog-not-found-error';
import partialBlogDataValidationSchema from 'validation-schemas/partial-blog-data-validation-schema';

const patchBlog: RequestHandler<
  { id?: string },
  BlogModel | ErrorResponse,
  BlogDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const blogData = partialBlogDataValidationSchema.validateSync(req.body);

    const foundBlog = blogs.find((blog) => String(blog.id) === id);

    if (foundBlog === undefined) throw new BlogNotFoundError(id);

    Object.assign(foundBlog, blogData);

    res.status(200).json(foundBlog);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default patchBlog;
