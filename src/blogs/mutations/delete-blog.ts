import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { BlogModel, BlogDataBody } from 'blogs/types';
import { blogs } from 'blogs/data';
import BlogNotFoundError from 'blogs/blog-not-found-error';

const deleteBlog: RequestHandler<
  { id?: string },
  BlogModel | ErrorResponse,
  BlogDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const foundBlogIndex = blogs.findIndex((blog) => String(blog.id) === id);
    if (foundBlogIndex === -1) throw new BlogNotFoundError(id);
    const [foundBlog] = blogs.splice(foundBlogIndex, 1);

    res.status(200).json(foundBlog);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteBlog;
