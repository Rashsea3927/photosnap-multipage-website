import { TextImages } from '@/types';
import {
  StoriesPageMobileMainvisual,
  StoriesPageTabletMainvisual,
  StoriesPageDesktopMainvisual,
} from '@/utils/assets';
import StoriesMainvisual from './StoriesMainvisual';
import { StoriesData } from '@/data';
import Story from '@/components/Story';

const textImages: TextImages = {
  images: {
    mobile: StoriesPageMobileMainvisual,
    tablet: StoriesPageTabletMainvisual.src,
    desktop: StoriesPageDesktopMainvisual.src,
  },
  text: {
    lastMonthFeatured: 'Last Month’s Featured Story',
    heading: 'Hazy full moon of Appalachia',
    paragraph:
      'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
    link: {
      isLink: true,
      text: 'Read the story',
    },
    author: 'John Appleseed',
    date: 'March 2nd, 2020',
  },
};

const StoriesPage = () => {
  return (
    <main>
      <StoriesMainvisual />
      <section className='xxl:w-[1440px] xxl:mx-auto'>
        <ul className='grid xs:grid-cols-2 lg:grid-cols-4 '>
          {StoriesData.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default StoriesPage;
