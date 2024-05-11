'use client';

import Link from 'next/link';
import { columns } from '@/components/tables/DataTableRental/components/columns';
import { DataTable } from '@/components/tables/DataTableRental/components/data-table';
import MainButton from '@/components/common/MainButton';
import { useRentals } from '@/hooks/use-rentals';
import TableSkeleton from '@/components/common/TableSkeleton';

function Movies() {
  const rentals = useRentals({ enabled: true });
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 p-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Locações</h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Veja abaixo a lista com todas as locações
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/movies/create'>
              <MainButton
                text='Adicionar locação'
                width='full_width'
                size='large'
              />
            </Link>
          </div>
        </div>
        {rentals?.data?.data && rentals?.data?.meta?.ok ? (
          <DataTable data={rentals?.data?.data} columns={columns} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </>
  );
}
export default Movies;
