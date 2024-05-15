'use client';

import MoviesList from '@/components/common/MoviesList';
import Toolbar from '@/components/common/Toolbar';

export default function SlugCategory() {
  return (
    <main className='relative'>
      <Toolbar />
      <div className='py-12 px-4 bg-slate-50'>
        <h3 className="text-3xl font-bold text-center w-full">
          Categoria
        </h3>
      </div>
      <div className='py-8 px-4 w-full max-w-[1520px] mx-auto'>
        <MoviesList data={[]} />
      </div>
    </main>
  );
}
