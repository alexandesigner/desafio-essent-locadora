'use client';

import Toolbar from '@/components/common/Toolbar';
import { Skeleton } from '@/components/ui/skeleton';
import { useMovieById } from '@/hooks/use-movies';
import { useMoviePerson } from '@/hooks/use-movies';
import MoviePersonList from '@/components/common/MoviePersonList';
import { MoviePersonResponseData } from '@/types';
import { formatBRLCurrency } from '@/lib/utils';

export default function SlugDetails({
  params
}: {
  params: {
    slug: string;
    id: string;
  };
}) {
  const movieParamsId = params.id.split('_');
  const [id, ...slug] = movieParamsId;
  const movie = useMovieById(+id, { enabled: true });
  const movieData = movie?.data?.data;
  return (
    <main className='relative'>
      <Toolbar />
      <div className='w-full relative flex flex-col'>
        {movie?.isLoading ? (
          <Skeleton className='w-full h-[680px]' />
        ) : (
          <>
            <div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
            <img
              src={
                movieData?.featured_image ??
                'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'
              }
              alt={movieData?.title}
              className='w-full object-cover h-[620px]'
              onError={(e) => {
                e.currentTarget.src =
                  'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png';
              }}
            />
          </>
        )}

        <div className='w-full absolute bottom-0 py-8 left-0'>
          <div className='flex flex-col gap-4 max-w-[1520px] mx-auto'>
            {movie?.isLoading ? (
              <div className='flex flex-col gap-4'>
                <Skeleton className='w-full h-10' />
                <Skeleton className='w-[220px] h-10' />
              </div>
            ) : (
              <div className='flex flex-col gap-4 text-white px-8'>
                <div className='flex flex-col items-start h-full'>
                  <span className='inline-flex items-center mb-4 gap-x-1.5 rounded-md px-4 py-2 text-md font-bold text-white ring-1 ring-inset ring-gray-200'>
                    <svg
                      className='h-1.5 w-1.5 fill-blue-500'
                      viewBox='0 0 6 6'
                      aria-hidden='true'
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                    {movieData?.category?.name}
                  </span>
                  <h1 className='text-7xl font-bold'>{movieData?.title}</h1>
                </div>
                <p className='text-lg text-white/60'>{movieData?.synopsis}</p>
              </div>
            )}
          </div>
        </div> 
      </div>
      <div className='w-full'>
        <div className='max-w-[1520px] mx-auto'>
          <div className='py-12 sm:py-24'>
            <div className='mx-auto max-w-[1520px]'>
              <dl className='flex flex-col lg:flex-row flex-wrap justify-between gap-x-8 gap-y-16 text-center border border-slate-200 py-12 rounded-lg'>
                <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                  <dt className='text-base leading-7 text-gray-600'>
                    Ano de lançamento
                  </dt>
                  <dd className='order-first text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl'>
                    {movie?.isLoading ? (
                      <Skeleton className='w-[100px] h-8' />
                    ) : (
                      movieData?.release_year
                    )}
                  </dd>
                </div>
                <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                  <dt className='text-base leading-7 text-gray-600'>
                    Cópias disponíveis
                  </dt>
                  <dd className='order-first text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl'>
                    {movie?.isLoading ? (
                      <Skeleton className='w-[100px] h-8' />
                    ) : (
                      movieData?.stock?.length
                    )}
                  </dd>
                </div>
                <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                  <dt className='text-base leading-7 text-gray-600'>
                    Valor da locação
                  </dt>
                  <dd className='order-first text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl'>
                    {movie?.isLoading ? (
                      <Skeleton className='w-[100px] h-8' />
                    ) : (
                      formatBRLCurrency(movieData?.rental_value)
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {movieData?.cast?.length ? (
        <div className='w-full'>
          <div className='max-w-[1520px] py-12 mx-auto'>
            <h4 className='text-5xl font-bold flex mb-12'>Elenco</h4>
            <MoviePersonList
              data={movieData?.cast}
              isLoading={!movie?.data?.meta?.ok}
            />
          </div>
        </div>
      ) : undefined}
    </main>
  );
}
