'use client';

import { Logo } from '@/utils/assets';
import Image from 'next/image';
import { Button } from './ui/button';
import { useState } from 'react';
import { clsx } from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <header className='flex justify-between items-center px-6 py-7'>
      <h1>
        <Image src={Logo} width={170} height={16} alt='Photosnap' />
      </h1>
      <Button
        onClick={handleOpen}
        variant='ghost'
        className='w-5 flex flex-col justify-between h-[6px] p-0 relative z-20'
      >
        <span
          className={clsx(
            'w-5 h-[1px] bg-black transition-transform duration-300 ease-in-out',
            isOpen ? 'transform rotate-45 translate-y-[3px]' : ''
          )}
        ></span>
        <span
          className={clsx(
            'w-5 h-[1px] bg-black transition-transform duration-300 ease-in-out',
            isOpen ? 'transform -rotate-45 -translate-y-[2px]' : ''
          )}
        ></span>
      </Button>
      <div
        className={clsx(
          'absolute left-0 z-10 w-full h-[500px] bg-black/10 transition-top duration-300 ease-in-out',
          isOpen ? 'top-[72px]' : '-top-full'
        )}
      >
        Hello
      </div>
    </header>
  );
};

export default Header;
