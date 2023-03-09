import { BlogData } from 'blogs/types';
import * as yup from 'yup';

const blogDataValidationSchema: yup.ObjectSchema<BlogData> = yup.object({
  title: yup.string()
  .required('Title is required!')
  .min(1, 'Title cannot be empty!')
  .max(100, 'Title can\'t have more than 100 characters!'),

  author: yup.string()
  .required('Author is required!')
  .min(1, 'Author cannot be empty!')
  .max(100, 'Author can\'t have more than 100 characters!'),

  date: yup.string()
  .required('Date is required!')
  .min(10, 'Date must have exactly 10 characters!')
  .max(10, 'Date must have exactly 10 characters!'),

  images: yup.object({
    imageMain: yup.string()
      .required('ImageMain is required!'),
    imageArray: yup.array(yup.string().required())
      .required('ImageArray is required!'),
  }).required('Images is required!'),

  views: yup.number()
    .required('Views cannot be empty!')
    .moreThan(-1, 'Views cannot be negative!'),

}).strict(true);

export default blogDataValidationSchema;
