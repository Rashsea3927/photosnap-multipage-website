'use client';

import Logo from '@/components/Logo';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    id: 1,
    title: 'stories',
    url: '/stories',
  },
  {
    id: 2,
    title: 'features',
    url: '#',
  },
  {
    id: 3,
    title: 'pricing',
    url: '#',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className='md:flex md:items-center md:px-10 md:py-7 md:justify-center md:gap-10 lg:max-w-lg lg:mx-auto lg:justify-between lg:gap-[150px] xl:gap-[200px]'>
      <div className='relative z-20 flex justify-between items-center px-6 py-7 bg-white md:p-0'>
        <h1 className='w-[170px]'>
          <Link href='/' aria-label='Photosnap'>
            <Logo />
          </Link>
        </h1>
        <Button
          onClick={handleOpen}
          variant='ghost'
          className='w-5 flex flex-col justify-between h-[6px] p-0 relative z-20 bg-transparent md:hidden'
        >
          <span
            className={clsx(
              'w-5 h-[1px] bg-black transition-transform duration-500',
              isOpen ? 'transform rotate-45 translate-y-[3px]' : ''
            )}
          ></span>
          <span
            className={clsx(
              'w-5 h-[1px] bg-black transition-transform duration-500',
              isOpen ? 'transform -rotate-45 -translate-y-[2px]' : ''
            )}
          ></span>
        </Button>
      </div>
      <nav
        className={clsx(
          'absolute left-0 z-10 w-full transition-top duration-500 p-8 bg-white md:static md:flex md:items-center md:justify-between md:p-0',
          isOpen ? 'top-[72px]' : '-top-full'
        )}
      >
        <ul className='flex flex-col gap-5 pb-5 border-b-[1px] border-black/25 mb-5 md:flex-row md:border-none md:pb-0 md:mb-0 md:items-center md:gap-9'>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className='text-center'>
                <Link
                  href={link.url}
                  className='font-bold uppercase tracking-[2.5px] hover:text-black/30 md:text-xs md:tracking-[2px]'
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          variant='default'
          className='w-full rounded-none uppercase tracking-[2.5px] font-bold hover:bg-slate-200 hover:text-black md:w-[148px] md:text-xs md:px-6 md:py-3'
        >
          get an invite
        </Button>
      </nav>

      <div
        className={clsx(
          'absolute transition-all duration-500 md:hidden',
          isOpen ? 'bg-black/50 inset-0' : ''
        )}
      />
    </header>
  );
};

export default Header;
