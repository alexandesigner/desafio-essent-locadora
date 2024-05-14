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
          placeholder='Buscar pessoa por nome...'
          value={
            (table.getColumn('full_name')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('full_name')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
