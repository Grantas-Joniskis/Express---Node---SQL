import NotFoundError from 'errors/not-found-error';

class BlogNotFoundError extends NotFoundError {
  constructor(id: string) {
    super(`Blog with id '${id}' was not found!`);
  }
}

export default BlogNotFoundError;
