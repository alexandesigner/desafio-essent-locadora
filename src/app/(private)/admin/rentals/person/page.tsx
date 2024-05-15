'use client';

import Link from 'next/link';
import { columns } from '@/components/tables/DataTableMyRentals/components/columns';
import { DataTable } from '@/components/tables/DataTableMyRentals/components/data-table';
import MainButton from '@/components/common/MainButton';
import { useMyRentals } from '@/hooks/use-rentals';
import TableSkeleton from '@/components/common/TableSkeleton';

function MyRentals() {
  const rentals = useMyRentals({ enabled: true });
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 py-4 px-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Minhas locações</h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Veja abaixo a lista com todas as locações
            </p>
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
export default MyRentals;
