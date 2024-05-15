'use client';

import React from 'react';
import Link from 'next/link';
import Toolbar from '@/components/common/Toolbar';
import MoviesList from '@/components/common/MoviesList';
import { useMovies } from '@/hooks/use-movies';
import { useMoviePerson } from '@/hooks/use-movies';
import { groupByCategory, slugify } from '@/lib/utils';
import {
  GroupedCategory,
  MovieResponseData,
  MoviePersonResponseData
} from '@/types';
import MoviePersonList from '@/components/common/MoviePersonList';
import ListSkeleton from '@/components/common/ListSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const movies = useMovies({ all: true }, { enabled: true });
  const persons = useMoviePerson({ enabled: true });
  const moviesData = movies?.data?.data as MovieResponseData[];
  const personsData = persons?.data?.data?.length
    ? persons?.data?.data?.slice(0, 6)
    : (persons?.data?.data as MoviePersonResponseData[]);
  const moviesGrouped = groupByCategory(moviesData);

  const randomMovie =
    moviesData && moviesData?.length
      ? moviesData[Math.floor(Math.random() * moviesData?.length)]
      : null;

  return (
    <main className='relative'>
      <Toolbar />
      {moviesData && moviesData?.length ? (
        <div className='flex w-full mb-12 relative rounded-bl-[80px] rounded-br-[80px] overflow-hidden'>
          <div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
          <img
            src={randomMovie?.featured_image ?? 'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'}
            alt='Banner de destaque'
            className='w-full h-[680px] object-cover rounded-bl-[80px] rounded-br-[80px]'
            onError={(e) => {
              e.currentTarget.src =
                'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png';
            }}
          />
          <div className='py-12 absolute left-0 bottom-0 flex flex-wrap flex-col px-24'>
            <p className='text-white text-lg mt-4'>
              {randomMovie?.category?.name}
            </p>
            <h3 className='text-7xl text-white font-bold'>
              {randomMovie?.title}
            </h3>
            <p className='text-white text-lg mt-4'>{randomMovie?.title}</p>
            <Link
              href={`/${slugify(randomMovie?.category?.name)}/${randomMovie?.id}_${slugify(randomMovie?.title)}`}
              title='Ver detalhes'
              className='bg-white font-bold max-w-[220px] text-center text-primary mt-6 rounded-lg py-4 px-12 text-lg'
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Skeleton className='w-full h-[680px]' />
        </>
      )}

      <div className='py-8 px-4 w-full max-w-[1520px] mx-auto'>
        <MoviePersonList
          data={personsData}
          isLoading={!persons?.data?.meta?.ok}
        />
        {movies?.isLoading ? (
          <div className='mx-4 w-full py-8 flex flex-col gap-4'>
            <Skeleton className='w-[220px] h-8 mb-8 mx-4' />
            <ListSkeleton />
          </div>
        ) : (
          moviesGrouped?.map((item: GroupedCategory) => (
            <React.Fragment key={item.id}>
              {moviesGrouped.length > 1 && (
                <div className='w-full h-[1px] mx-4 bg-gray-200 my-8'></div>
              )}
              <MoviesList
                title={item.title}
                data={item.data}
                slugPath={item.slugPath}
                isLoading={!movies?.data?.meta?.ok}
              />
            </React.Fragment>
          ))
        )}
      </div>
    </main>
  );
}
