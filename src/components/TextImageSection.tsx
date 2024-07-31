import { HomeDesktopMainvisual, HomeTabletMainvisual, HomeMobileMainVisual } from '@/utils/assets';
import Link from 'next/link';
import ArrowImageIcon from './ArrowImageIcon';
import Image from 'next/image';
import { TextImages } from '@/types';
import clsx from 'clsx';

type Props = {
  textImages: TextImages;
  isBgBlack?: boolean;
  isMain?: boolean;
  isReverse?: boolean;
};

const TextImageSection = ({ textImages, isBgBlack, isMain, isReverse }: Props) => {
  const { images, text } = textImages;
  return (
    <section
      className={clsx(
        'xs:flex max-w-[1440px] mx-auto',
        isBgBlack ? 'bg-black ' : 'bg-white',
        isReverse ? 'flex-row-reverse' : ''
      )}
    >
      <div className='bg-white xs:order-last xs:flex-0.6 xl:flex-1'>
        <picture>
          <source srcSet={images.desktop} media='(min-width: 1024px)' />
          <source srcSet={images.tablet} media='(min-width: 540px)' />
          <Image
            src={images.mobile}
            className='w-full h-full object-cover'
            width={0}
            height={0}
            alt=''
          />
        </picture>
      </div>
      <div
        className={clsx(
          'relative px-7 py-[72px] flex items-center xs:order-first xs:flex-1 md:px-[54px] xl:flex-0.6',
          text.lastMonthFeatured ? 'py-12' : 'py-[72px]'
        )}
      >
        {isMain ? (
          <div className='absolute top-0 w-[128px] h-[6px] bg-right_gradient xs:top-1/2 xs:-translate-y-1/2 xs:bg-bottom_gradient xs:w-[6px] xs:h-[304px] xs:left-0' />
        ) : (
          ''
        )}
        <div>
          {text.lastMonthFeatured && <p className='text-white'>{text.lastMonthFeatured}</p>}
          <h2
            className={clsx(
              'text-[32px] mb-4 font-bold uppercase leading-tight tracking-[3.3px] md:text-[40px]',
              isBgBlack ? 'text-white' : 'text-black'
            )}
          >
            {text.heading}
          </h2>
          {text.date && (
            <p className='text-white/75 text-[13px] mb-6'>
              {text.date}
              <span className='text-white inline-block ml-[10px]'>by {text.author}</span>
            </p>
          )}
          <p
            className={clsx(
              'text-[15px] mb-6 leading-6',
              isBgBlack ? 'text-white/60' : 'text-black/60'
            )}
          >
            {text.paragraph}
          </p>
          {text.link?.isLink && (
            <Link
              href='/'
              className={clsx(
                'flex items-center gap-[18px] uppercase text-[12px] font-bold tracking-[2px] hover:underline',
                isBgBlack ? 'text-white' : 'text-black'
              )}
            >
              {text.link.text}
              <ArrowImageIcon isWhite={isBgBlack} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;
