import { DesktopStoriesMountain, MobileStoriesMountain } from '@/utils/storiesAssets';
import ArrowImageIcon from './ArrowImageIcon';
import Image from 'next/image';
import Link from 'next/link';
import { StoryType } from '@/types';

type Props = {
  story: StoryType;
};

const Story = ({ story }: Props) => {
  return (
    <li className='relative aspect-square xs:aspect-[96/125] lg:aspect-[18/25] px-8 pb-10 text-white lg:transition-transform lg:hover:-translate-y-6 after:hidden lg:hover:after:block after:w-full after:absolute after:h-[6px] after:bg-right_gradient after:bottom-0 after:left-0'>
      <Link className='grid h-full' href='/'>
        <div className='absolute inset-0 bg-stories_overlay -z-[1]' />
        <picture>
          <source srcSet={story.images.desktop} media='(min-width: 540px)' />
          <Image className='-z-[2]' src={story.images.mobile} fill alt='' />
        </picture>
        <div className='mt-auto'>
          <div className='mb-5 pb-4 border-b-[1px] border-white/25'>
            <h3 className='text-lg'>{story.title}</h3>
            <p className='text-[13px]'>by {story.author}</p>
          </div>
          <div className='flex justify-between'>
            <span className='text-xs uppercase font-bold tracking-[2px]'>Read Story</span>
            <ArrowImageIcon isWhite={true} />
          </div>
        </div>
      </Link>
      {/* <div className='absolute bottom-0 left-0 w-full h-[6px] bg-right_gradient' /> */}
    </li>
  );
};

export default Story;
