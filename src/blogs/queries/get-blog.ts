import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import ServerSetupError from 'errors/server-setup-error';
import BlogNotFoundError from 'blogs/blog-not-found-error';
import { blogs } from 'blogs/data';
import { BlogModel } from 'blogs/types';

const getBlog: RequestHandler<
  { id?: string },
  BlogModel | ErrorResponse,
  undefined,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const foundBlog = blogs.find((blog) => String(blog.id) === id);
    if (foundBlog === undefined) throw new BlogNotFoundError(id);

    res.status(200).json(foundBlog);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getBlog;
