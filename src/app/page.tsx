'use client';

import React from 'react';
import Toolbar from '@/components/common/Toolbar';
import MoviesList from '@/components/common/MoviesList';
import { useMovies } from '@/hooks/use-movies';
import { groupByCategory } from '@/lib/utils';
import { GroupedCategory, MovieResponseData } from '@/types';
import ListSkeleton from '@/components/common/ListSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const movies = useMovies({ enabled: true });
  const moviesData = movies?.data?.data as MovieResponseData[];
  const moviesGrouped = groupByCategory(moviesData);

  return (
    <main className='relative'>
      <Toolbar />
      <div className='py-8 px-4 w-full max-w-[1520px] mx-auto'>
        {movies?.isLoading ? (
          <div className="mx-4 w-full py-8 flex flex-col gap-4">
            <Skeleton className='w-[220px] h-8 mb-8 mx-4' />
            <ListSkeleton />
          </div>
        ) : (
          moviesGrouped?.map((item: GroupedCategory) => (
            <React.Fragment key={item.id}>
              <MoviesList
                title={item.title}
                data={item.data}
                slugPath={item.slugPath}
                isLoading={!movies?.data?.meta?.ok}
              />
              <div className='w-full h-[1px] mx-4 bg-gray-200 my-8'></div>
            </React.Fragment>
          ))
        )}
      </div>
    </main>
  );
}
