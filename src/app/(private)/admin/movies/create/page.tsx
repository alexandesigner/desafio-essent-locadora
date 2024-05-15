'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MovieForm } from '@/components/forms/MovieForm';

function MovieCreate() {
  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Adicionar filme</h3>
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/movies' className='flex items-center gap-2'>
              <ArrowLeft size='14px' />
              Voltar
            </Link>
          </div>
        </div>
        <MovieForm />
      </div>
    </>
  );
}
export default MovieCreate;
