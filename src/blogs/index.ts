import express from 'express';
import getBlog from './queries/get-blog';
import getBlogs from './queries/get-blogs';
import createBlog from './mutations/create-blog';
import deleteBlog from './mutations/delete-blog';
import putBlog from './mutations/put-blog';
import patchBlog from './mutations/patch-blog';

const blogsRouter = express.Router();

blogsRouter.get('/', getBlogs);
blogsRouter.get('/:id', getBlog);

blogsRouter.post('/', createBlog);
blogsRouter.put('/:id', putBlog);
blogsRouter.patch('/:id', patchBlog);
blogsRouter.delete('/:id', deleteBlog);

export default blogsRouter;
