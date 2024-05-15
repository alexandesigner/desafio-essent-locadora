'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { formatCurrency, formatDateLocale } from '@/lib/utils';

const renderLabelAndColor = (status: string) => {
  switch (status) {
    case 'DELAYED':
      return {
        label: 'Atrasado',
        color: 'bg-red-400/10 text-red-400 ring-red-400/20'
      };
    case 'DELIVERED':
      return {
        label: 'Entregue',
        color: 'bg-green-400/10 text-green-400 ring-green-400/20'
      };
    default:
      return {
        label: 'Regular',
        color: 'bg-blue-400/10 text-blue-400 ring-blue-400/20'
      };
  }

}

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
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Status' />
    ),
    cell: ({ row }) => (
      <div className='min-w-[80px]'>
        <span
          className={`
            ${renderLabelAndColor(row.getValue('status'))?.color}
            inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset
          `}
        >
          {renderLabelAndColor(row.getValue('status'))?.label}
        </span>
      </div>
    )
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
    accessorKey: 'late_fee',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Valor de atraso' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>{formatCurrency(row.getValue('late_fee'))}</div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'total_amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} name='Valor total' />
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
