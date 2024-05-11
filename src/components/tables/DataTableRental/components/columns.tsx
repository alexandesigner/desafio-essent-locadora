'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';

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
    accessorKey: 'movie_stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Filme' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px] font-bold'>
        <Link
          href={`/admin/movies/${row.getValue('movie_stock')?.movie.id}`}
          className='hover:underline'
        >
          {row.getValue('movie_stock')?.movie.title}
        </Link>
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'renter',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Locador' />
    ),
    cell: ({ row }) => {
      return (
        <>
          {row.getValue('renter') && (
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage
                  src={row.getValue('renter')?.full_name}
                  alt={row.getValue('renter')?.avatar}
                />
                <AvatarFallback>
                  <span className='font-bold'>
                    {getInitials(row.getValue('renter')?.full_name)}
                  </span>
                </AvatarFallback>
              </Avatar>
              <span className='ml-2'>{row.getValue('renter')?.full_name}</span>
            </div>
          )}
        </>
      );
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Status' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>
        <span className='inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-bold text-gray-400 ring-1 ring-inset ring-gray-400/20'>
          {row.getValue('status')}
        </span>
      </div>
    )
  },
  {
    accessorKey: 'late_fee',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Taxa de atraso' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>{formatCurrency(row.getValue('late_fee'))}</div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'withdrawal_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Data de retirada' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>
        {formatDateLocale(row.getValue('withdrawal_at'))}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'due_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Data de vencimento' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>{formatDateLocale(row.getValue('due_at'))}</div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'delivery_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Data de entrega' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>
        {row.getValue('delivery_at')
          ? formatDateLocale(row.getValue('delivery_at'))
          : '-'}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'total_amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Preço total' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>
        {formatCurrency(row.getValue('total_amount'))}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
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
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
