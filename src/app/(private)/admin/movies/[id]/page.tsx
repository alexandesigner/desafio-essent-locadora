'use client';

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MovieForm } from '@/components/forms/MovieForm';
import { Skeleton } from '@/components/ui/skeleton';
import { useMovieById } from '@/hooks/use-movies';
import { MovieResponseData } from '@/types';

function MovieDetails({
  params,
  searchParams
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const movie = useMovieById(params?.id, { enabled: !!params?.id });
  const movieData = movie?.data?.data as MovieResponseData;

  useEffect(() => {
    if (searchParams?.refetch) {
      movie.refetch();
    }
  }, [searchParams, movie]);

  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            {movieData?.title ? (
              <h3 className='text-4xl font-bold text-primary'>
                {movieData?.title}
              </h3>
            ) : (
              <Skeleton className='w-[180px] h-[38px] rounded-md' />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/movies' className='flex items-center gap-2'>
              <ArrowLeft size='14px' />
              Voltar
            </Link>
          </div>
        </div>
        <MovieForm hasEdit={movieData} />
      </div>
    </>
  );
}
export default MovieDetails;
