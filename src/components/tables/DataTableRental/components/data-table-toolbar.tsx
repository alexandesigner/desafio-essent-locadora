'use client';

import { Table } from '@tanstack/react-table';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { DataTableViewOptions } from './data-table-view-options';
import { rentalStatusOpts } from '@/lib/options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table
}: DataTableToolbarProps<TData>) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2 max-w-[220px]'>
        <Select
          onValueChange={(v) => {
            table.getColumn('status')?.setFilterValue(v);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder='Selecione o status' />
          </SelectTrigger>
          <SelectContent>
            {rentalStatusOpts?.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
