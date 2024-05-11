'use client';
import Image from 'next/image';
import Link from 'next/link';
import { columns } from '@/components/tables/DataTableCategory/components/columns';
import { DataTable } from '@/components/tables/DataTableCategory/components/data-table';
import MainButton from '@/components/common/MainButton';
import { useCategories } from '@/hooks/use-categories';
import TableSkeleton from '@/components/common/TableSkeleton';

function Categories() {
  const categories = useCategories({ enabled: true });
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 p-8 flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>Categorias</h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Veja abaixo a lista com todas as categorias
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/categories/create'>
              <MainButton
                text='Adicionar categoria'
                width='full_width'
                size='large'
              />
            </Link>
          </div>
        </div>
        {categories?.data?.data && categories?.data?.meta?.ok ? (
          <DataTable data={categories?.data?.data} columns={columns} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </>
  );
}
export default Categories;
