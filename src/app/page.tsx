'use client';

import React, { useEffect, useState } from 'react';
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
  const { data: moviesResponse } = useMovies({ all: true }, { enabled: true });
  const { data: personsResponse } = useMoviePerson({ enabled: true });

  const [moviesData, setMoviesData] = useState<MovieResponseData[]>([]);
  const [personsData, setPersonsData] = useState<MoviePersonResponseData[]>([]);
  const [randomMovie, setRandomMovie] = useState<MovieResponseData | null>(
    null
  );

  useEffect(() => {
    if (moviesResponse?.data) {
      setMoviesData(moviesResponse.data);
      setRandomMovie(
        moviesResponse.data[
          Math.floor(Math.random() * moviesResponse.data.length)
        ]
      );
    }
  }, [moviesResponse]);

  useEffect(() => {
    if (personsResponse?.data) {
      setPersonsData(
        personsResponse.data.length > 0
          ? personsResponse.data.slice(0, 6)
          : personsResponse.data
      );
    }
  }, [personsResponse]);

  const moviesGrouped = groupByCategory(moviesData);

  return (
    <main className='relative'>
      <Toolbar />
      {moviesData && moviesData?.length ? (
        <div className='flex w-full mb-12 relative rounded-bl-[80px] rounded-br-[80px] overflow-hidden'>
          <div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
          <img
            src={
              randomMovie?.featured_image ??
              'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'
            }
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
              href={`/${slugify(randomMovie?.category?.name)}/${
                randomMovie?.id
              }_${slugify(randomMovie?.title)}`}
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
          isLoading={!personsResponse?.meta?.ok}
        />
        {!personsResponse?.meta?.ok ? (
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
                isLoading={!moviesResponse?.meta?.ok}
              />
            </React.Fragment>
          ))
        )}
      </div>
    </main>
  );
}
