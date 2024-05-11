'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { formatCurrency, formatDateLocale } from '@/lib/utils';

export const columns: ColumnDef<any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Selecionar todos'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Selecionar linha'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} name='ID' />,
    cell: ({ row }) => <div className='w-[32px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Título' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[120px] font-bold'>{row.getValue('title')}</div>
    )
  },
  {
    accessorKey: 'synopsis',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Sinopse' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[120px] line-clamp-2 max-w-[220px]'>
        {row.getValue('synopsis')}
      </div>
    )
  },
  {
    accessorKey: 'release_year',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Ano de lançamento' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>{row.getValue('release_year')}</div>
    )
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Cópias disponíveis' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>{row.getValue('stock')?.length}</div>
    )
  },
  {
    accessorKey: 'rental_value',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Valor da locação' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px] font-bold'>
        {formatCurrency(row.getValue('rental_value'))}
      </div>
    )
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Criado em' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>
        {formatDateLocale(row.getValue('created_at'))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: 'updated_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Atualizado em' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>
        {formatDateLocale(row.getValue('updated_at'))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
