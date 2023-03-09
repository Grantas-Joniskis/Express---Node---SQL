import { RequestHandler } from 'express';
import { blogs } from 'blogs/data';
import { BlogModel } from 'blogs/types';

const getBlogs: RequestHandler<
  {},
  BlogModel[],
  undefined,
  {}
> = (req, res) => {
  res.json(blogs);
};

export default getBlogs;
