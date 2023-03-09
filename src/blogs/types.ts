export type BlogModel = {
  id: number,
  title: string,
  author: string,
  date: string,
  images: {
    imageMain: string,
    imageArray: string[]
  },
  views: number,
};

export type BlogData = Omit<BlogModel, 'id'>;

export type PartialBlogData = Partial<BlogData>;

export type BlogDataBody = PartialRecursive<BlogData>;
