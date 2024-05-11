'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { formatDateLocale } from '@/lib/utils';

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
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Nome' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px] font-bold'>{row.getValue('name')}</div>
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
