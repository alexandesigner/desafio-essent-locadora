'use client';

import { Table } from '@tanstack/react-table';

import { Input } from '@/components/ui/input';

import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table
}: DataTableToolbarProps<TData>) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Buscar locação por status...'
          value={(table.getColumn('status')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('status')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
