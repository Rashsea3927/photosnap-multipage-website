import Feature from '@/components/Feature';
import Story from '@/components/Story';
import TextImageSection from '@/components/TextImageSection';
import { FeaturesData, StoriesData } from '@/data';
import { TextImages } from '@/types';
import {
  HomeDesktopBeautifulStories,
  HomeDesktopDesignedForEveryone,
  HomeDesktopMainvisual,
  HomeMobileBeautifulStories,
  HomeMobileDesignedForEveryone,
  HomeMobileMainVisual,
  HomeTabletBeautifulStories,
  HomeTabletDesignedForEveryone,
  HomeTabletMainvisual,
} from '@/utils/assets';

const textImages1: TextImages = {
  images: {
    mobile: HomeMobileMainVisual,
    tablet: HomeTabletMainvisual.src,
    desktop: HomeDesktopMainvisual.src,
  },
  text: {
    heading: 'Create and share your photo stories.',
    paragraph:
      'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    link: {
      isLink: true,
      text: 'get an invite',
    },
  },
};

const textImags2: TextImages = {
  images: {
    mobile: HomeMobileBeautifulStories,
    tablet: HomeTabletBeautifulStories.src,
    desktop: HomeDesktopBeautifulStories.src,
  },
  text: {
    heading: 'Beautiful stories every time',
    paragraph:
      'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    link: {
      isLink: true,
      text: 'view the stories',
    },
  },
};

const textImages3: TextImages = {
  images: {
    mobile: HomeMobileDesignedForEveryone,
    tablet: HomeTabletDesignedForEveryone.src,
    desktop: HomeDesktopDesignedForEveryone.src,
  },
  text: {
    heading: 'Designed for everyone',
    paragraph:
      'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
    link: {
      isLink: true,
      text: 'view the stories',
    },
  },
};

export default function Home() {
  return (
    <main>
      <TextImageSection textImages={textImages1} isBgBlack={true} isMain={true} />
      <TextImageSection textImages={textImags2} isBgBlack={false} isReverse={true} />
      <TextImageSection textImages={textImages3} isBgBlack={false} />
      <section className='max-w-[1440px] mx-auto'>
        <ul className='grid xs:grid-cols-2 lg:grid-cols-4'>
          {StoriesData.map((story) => {
            if (story.id > 4) return null;
            return <Story key={story.id} story={story} />;
          })}
        </ul>
      </section>
      <section className='py-20 md:py-[120px]'>
        <ul className='mx-auto max-w-[310px] grid gap-14 xs:max-w-[457px] xs:gap-20 lg:max-w-[1110px] lg:grid-cols-3 lg:gap-[30px] lg:items-start'>
          {FeaturesData.map((feature, index) => {
            if (index > 2) return null;
            return <Feature key={feature.id} feature={feature} />;
          })}
        </ul>
      </section>
    </main>
  );
}
