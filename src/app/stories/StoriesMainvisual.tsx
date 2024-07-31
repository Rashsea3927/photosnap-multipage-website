import ArrowImageIcon from '@/components/ArrowImageIcon';
import {
  StoriesPageDesktopMainvisual,
  StoriesPageMobileMainvisual,
  StoriesPageTabletMainvisual,
} from '@/utils/assets';
import Image from 'next/image';
import Link from 'next/link';

const StoriesMainvisual = () => {
  return (
    <section className='bg-black xs:relative xs:px-10 xs:py-12 md:py-[120px]'>
      <div className='lg:max-w-[880px] lg:mx-auto xl:max-w-[960px] xxl:max-w-[1200px]'>
        <div className='xs:w-[387px]'>
          <picture>
            <source srcSet={StoriesPageDesktopMainvisual.src} media='(min-width: 960px)' />
            <source srcSet={StoriesPageTabletMainvisual.src} media='(min-width: 540px)' />
            <Image
              className='w-full h-auto xs:absolute xs:inset-0 xs:h-full xs:object-cover'
              src={StoriesPageMobileMainvisual}
              width={0}
              height={0}
              alt=''
            />
          </picture>
          <div className='px-7 py-12 xs:z-10 xs:relative xs:p-0'>
            <p className='text-xs text-white tracking-[2px] font-bold uppercase mb-4'>
              Last month’s featured story
            </p>
            <h2 className='text-white text-[32px] font-bold tracking-[3.33px] uppercase mb-4 xs:text-[40px]'>
              Hazy full moon of Appalachia
            </h2>
            <p className='mb-6 text-[13px] flex gap-2'>
              <span className='text-white/75'>March 2nd 2020</span>
              <span className='text-white'>by John Appleseed</span>
            </p>
            <p className='text-white/60 text-[15px] mb-6 leading-6'>
              The dissected plateau area, while not actually made up of geological mountains, is
              popularly called &ldquo;mountains,&ldquo; especially in eastern Kentucky and West
              Virginia, and while the ridges are not high, the terrain is extremely rugged.
            </p>
            <Link
              href='/'
              className='flex items-center gap-[18px] uppercase text-[12px] text-white font-bold tracking-[2px] hover:underline'
            >
              Read the story
              <ArrowImageIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesMainvisual;
