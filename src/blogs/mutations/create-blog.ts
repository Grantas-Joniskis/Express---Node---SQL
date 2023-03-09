import { RequestHandler } from 'express';
import createId from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';
import { blogs } from 'blogs/data';
import { BlogModel, BlogDataBody } from 'blogs/types';
import blogDataValidationSchema from 'validation-schemas/blog-data-validation-scheme';

const createBlog: RequestHandler<
  {},
  BlogModel | ErrorResponse,
  BlogDataBody,
  {}
> = (req, res) => {
  try {
    const blogData = blogDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const createdBlog = { id: createId(), ...blogData };
    blogs.push(createdBlog);

    res.status(201).json(createdBlog);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createBlog;
