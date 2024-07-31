'use server';

import Logo from '@/components/Logo';
import FacebookIcon from '@/components/snsIcons/FacebookIcon';
import YoutubeIcon from '@/components/snsIcons/YoutubeIcon';
import TwitterIcon from '@/components/snsIcons/TwitterIcon';
import PinterestIcon from '@/components/snsIcons/PinterestIcon';
import InstagramIcon from '@/components/snsIcons/InstagramIcon';
import Link from 'next/link';
import ArrowImageIcon from './ArrowImageIcon';

const snsIcons = [
  {
    id: 1,
    name: 'facebook',
    icon: <FacebookIcon />,
    url: '#',
  },
  {
    id: 2,
    name: 'youtube',
    icon: <YoutubeIcon />,
    url: '#',
  },
  {
    id: 3,
    name: 'twitter',
    icon: <TwitterIcon />,
    url: '#',
  },
  {
    id: 4,
    name: 'pinterest',
    icon: <PinterestIcon />,
    url: '#',
  },
  {
    id: 5,
    name: 'instagram',
    icon: <InstagramIcon />,
    url: '#',
  },
];

const footerNavLinks = [
  {
    id: 1,
    name: 'Home',
    url: '#',
  },
  {
    id: 2,
    name: 'Stories',
    url: '#',
  },
  {
    id: 3,
    name: 'Features',
    url: '#',
  },
  {
    id: 4,
    name: 'Pricing',
    url: '#',
  },
];

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='py-14 xs:grid xs:grid-cols-2 xs:py-16 xs:px-6 md:px-10 lg:grid-cols-3 lg:grid-row-2 lg:max-w-[1110px] lg:mx-auto lg:px-0'>
        <div className='w-[170px] mx-auto mb-8 xs:justify-self-start xs:mx-0 lg:mb-[85px]'>
          <Logo isBlack={false} />
        </div>
        <ul className='flex justify-center gap-3 mb-12 xs:row-start-3 xs:col-start-1 xs:justify-start xs:mb-0 lg:row-start-2 lg:self-end'>
          {snsIcons.map((sns) => (
            <li key={sns.id}>
              <Link href={sns.url}>{sns.icon}</Link>
            </li>
          ))}
        </ul>
        <nav className='flex justify-center mb-[120px] xs:col-start-1 xs:row-start-2 xs:justify-start xs:mb-18 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:mb-0'>
          <ul className='text-center flex flex-col gap-4 xs:flex-row lg:flex-col lg:text-left lg:gap-5'>
            {footerNavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className='text-white text-xs font-bold uppercase tracking-[2px] hover:text-gray-300'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href='/'
          className='flex justify-center items-center gap-[18px] uppercase text-[12px] font-bold tracking-[2px] text-white mb-8 xs:m-0 xs:row-start-1 xs:col-start-2 xs:justify-self-end lg:col-start-3 lg:self-start'
        >
          Get An Invite
          <ArrowImageIcon />
        </Link>
        <p className='text-center xs:row-start-3 xs:col-start-2 xs:text-left xs:justify-self-end lg:col-start-3 lg:row-start-2 lg:self-end'>
          <small className='text-white/50 text-[15px]'>Copyright 2019. All Rights Reserved</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
