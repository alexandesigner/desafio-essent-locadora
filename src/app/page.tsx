'use client';

import React from 'react';
import Link from 'next/link';
import Toolbar from '@/components/common/Toolbar';
import MoviesList from '@/components/common/MoviesList';
import { useMovies } from '@/hooks/use-movies';
import { usePersons } from '@/hooks/use-persons';
import { groupByCategory } from '@/lib/utils';
import {
  GroupedCategory,
  MovieResponseData,
  PersonResponseData
} from '@/types';
import MoviePersonList from '@/components/common/MoviePersonList';
import ListSkeleton from '@/components/common/ListSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const movies = useMovies({ enabled: true });
  const persons = usePersons({ enabled: true });
  const moviesData = movies?.data?.data as MovieResponseData[];
  const personsData = persons?.data?.data?.length ? persons?.data?.data?.slice(0, 6) : persons?.data?.data as PersonResponseData[];
  const moviesGrouped = groupByCategory(moviesData);

  return (
    <main className='relative'>
      <Toolbar />
      <div className="flex w-full mb-12 relative rounded-bl-[80px] rounded-br-[80px] overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <img src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" alt="Banner" className="w-full h-[680px] object-cover rounded-bl-[80px] rounded-br-[80px]" />
        <div className="py-12 absolute left-0 bottom-0 flex flex-wrap flex-col px-24">
          <p className="text-white text-lg mt-4">Ficção Científica</p>
          <h3 className="text-7xl text-white font-bold">Duna: Parte Dois (2024)</h3>
          <p className="text-white text-lg mt-4">A jornada de Paul Atreides continua. Ele está determinado a buscar vingança contra aqueles que destruíram sua família e seu lar. Com a ajuda de Chani e dos Fremen, ele embarca em uma jornada espiritual, mística e marcial. Se torna Muad'Dib, o líder messiânico dos Fremen, enquanto luta para evitar um futuro sombrio que ele testemunhou em visões. No entanto, suas ações inadvertidamente desencadeiam uma Guerra Santa em seu nome, que se espalha pelo universo conhecido. Enquanto enfrenta escolhas difíceis entre o amor por Chani e o destino de seu povo, Paul precisa usar suas habilidades e conhecimentos para evitar o terrível futuro que previu.</p>
          <Link href="/" title="Ver detalhes" className="bg-white font-bold max-w-[220px] text-center text-primary mt-6 rounded-lg py-4 px-12 text-lg">
            Ver detalhes
          </Link>
        </div>
      </div>
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
