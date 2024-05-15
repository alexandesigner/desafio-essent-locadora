'use client';
import Link from 'next/link';
import { columns } from '@/components/tables/DataTablePerson/components/columns';
import { DataTable } from '@/components/tables/DataTablePerson/components/data-table';
import MainButton from '@/components/common/MainButton';
import { usePersons } from '@/hooks/use-persons';
import TableSkeleton from '@/components/common/TableSkeleton';

function Persons() {
  const persons = usePersons({ enabled: true });
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 py-4 px-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Pessoas</h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Veja abaixo a lista com todas as pessoas
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/persons/create'>
              <MainButton
                text='Adicionar pessoa'
                width='full_width'
                size='large'
              />
            </Link>
          </div>
        </div>
        {persons?.data?.data && persons?.data?.meta?.ok ? (
          <DataTable data={persons?.data?.data} columns={columns} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </>
  );
}
export default Persons;
