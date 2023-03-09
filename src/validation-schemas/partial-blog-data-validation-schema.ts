import { PartialBlogData } from 'blogs/types';
import * as yup from 'yup';

const partialBlogDataValidationSchema: yup.ObjectSchema<PartialBlogData> = yup.object({
  title: yup.string()
  .min(1, 'Title cannot be empty!')
  .max(100, 'Title can\'t have more than 100 characters!'),

  author: yup.string()
  .min(1, 'Author cannot be empty!')
  .max(100, 'Author can\'t have more than 100 characters!'),

  date: yup.string()
  .min(10, 'Date must have exactly 10 characters!')
  .max(10, 'Date must have exactly 10 characters!'),

  images: yup.object({
    imageMain: yup.string()
      .required('ImageMain is required!'),
    imageArray: yup.array(yup.string().required())
      .required('ImageArray is required!'),
  }),

  views: yup.number()
    .moreThan(-1, 'Views cannot be negative!'),

}).strict(true);

export default partialBlogDataValidationSchema;
