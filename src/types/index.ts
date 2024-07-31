import { type StaticImageData } from 'next/image';

export type Images = {
  images: {
    mobile: StaticImageData;
    tablet?: string;
    desktop: string;
  };
};

export type Text = {
  text: {
    lastMonthFeatured?: string;
    heading: string;
    paragraph: string;
    link?: {
      isLink: boolean;
      text: string;
    };
    author?: string;
    date?: string;
  };
};

export type StoryTextType = {
  id: number;
  title: string;
  author: string;
  date: string;
};

export type TextImages = Images & Text;
export type StoryType = StoryTextType & Images;
