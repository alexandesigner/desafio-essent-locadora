'use client';

import Link from 'next/link';
import { CopyIcon } from '@radix-ui/react-icons';
import { columns } from '@/components/tables/DataTableMovie/components/columns';
import { DataTable } from '@/components/tables/DataTableMovie/components/data-table';
import MainButton from '@/components/common/MainButton';
import { useMovies } from '@/hooks/use-movies';
import TableSkeleton from '@/components/common/TableSkeleton';
import MoviePersonForm from '@/components/forms/MoviePersonForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Movies() {
  const movies = useMovies({ enabled: true });
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 py-4 px-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Filmes</h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Veja abaixo a lista com todas os filmes
            </p>
          </div>
          <div className='flex items-center flex-row space-x-2'>
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <MainButton
                    text='Adicionar pessoa'
                    width='full_width'
                    size='large'
                    variant='secondary'
                  />
                </div>
              </DialogTrigger>
              <DialogClose>
                <button id='closeDialog' className='hidden'></button>
              </DialogClose>
              <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                  <DialogTitle className='font-bold'>
                    Adicionar pessoa
                  </DialogTitle>
                  <DialogDescription>
                    Adicione uma pessoa para os filmes
                  </DialogDescription>
                </DialogHeader>
                <MoviePersonForm />
              </DialogContent>
            </Dialog>
            <Link href='/admin/movies/create'>
              <MainButton
                text='Adicionar filme'
                width='full_width'
                size='large'
              />
            </Link>
          </div>
        </div>
        {movies?.data?.data && movies?.data?.meta?.ok ? (
          <DataTable data={movies?.data?.data} columns={columns} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </>
  );
}
export default Movies;
