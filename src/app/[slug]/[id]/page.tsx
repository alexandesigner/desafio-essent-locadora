'use client';

import Toolbar from '@/components/common/Toolbar';

export default function SlugDetails() {
  return (
    <main className='relative'>
      <Toolbar />
      <div className='w-full'>
        <img
          src='https://movies-proxy.vercel.app/ipx/f_webp&s_1220x659/tmdb/fqv8v6AycXKsivp1T5yKtLbGXce.jpg'
          alt=''
          className='w-full object-cover h-[620px]'
        />
      </div>
    </main>
  );
}
