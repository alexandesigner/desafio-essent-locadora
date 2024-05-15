'use client';

import { VideoOff } from 'lucide-react';
import MoviesList from '@/components/common/MoviesList';
import Toolbar from '@/components/common/Toolbar';
import { Skeleton } from '@/components/ui/skeleton';
import Footer from '@/components/common/Footer';
import { useCategoryById } from '@/hooks/use-categories';
import { useMovies } from '@/hooks/use-movies';
import { MovieResponseData } from '@/types';

export default function SlugCategory({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const categoryParamsId = params.slug.split('_');
  const [id, ...rest] = categoryParamsId;
  const category = useCategoryById(+id, { enabled: true });
  const categoryData = category?.data?.data;
  const movies = useMovies({ all: true }, { enabled: true });
  const moviesData = movies?.data?.data as MovieResponseData[];

  const moviesByCategory = moviesData?.filter(
    (movie) => movie.category.id === Number(id)
  );

  return (
    <main className='relative'>
      <Toolbar />
      <div className='py-12 px-4 bg-primary'>
        {category?.isLoading ? (
          <div className="w-full items-center text-center flex justify-center">
            <Skeleton className='w-[220px] h-[52px] bg-slate-200 rounded-mg' />
          </div>
        ) : (
          <h3 className='text-5xl font-bold text-center w-full text-white'>
            {categoryData?.name}
          </h3>
        )}
      </div>
      <div className='py-8 px-4 w-full max-w-[1520px] mx-auto'>
        {moviesByCategory?.length ? (
          
        <MoviesList
          data={moviesByCategory}
          isLoading={!movies?.data?.meta?.ok}
        />
        ) : (
          <div className="w-full items-center text-center gap-4 flex-col flex justify-center py-24">
            <VideoOff size="62px" color="#777" />
            Nenhum filme disponível nesta categoria
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
