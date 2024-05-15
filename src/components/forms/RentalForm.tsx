'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import MainButton from '@/components/common/MainButton';
import { moviePersonTypeOpts } from '@/lib/options';
import { personTypeOpts } from '@/lib/options';
import { Switch } from '@/components/ui/switch';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  PopoverTrigger,
  PopoverContent,
  Popover
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  parseIdAndNameToOpts,
  formatStringCurrencyToNumber,
  formatBRLCurrency
} from '@/lib/utils';
import { RentalInputValidation } from '@/lib/validations';
import { useCreateRental, useUpdateRental } from '@/hooks/use-rentals';
import { RentalCreateInputObjectSchema } from '../../../prisma/generated/schemas';
import { useMovies } from '@/hooks/use-movies';
import { usePersons } from '@/hooks/use-persons';
import { rentalStatusOpts } from '@/lib/options';

const RentalFormSchema = RentalCreateInputObjectSchema.pick({
  withdrawal_at: true,
  due_at: true,
  late_fee: true,
  total_amount: true,
  status: true,
  movie_stock: {
    connect: {
      id: true
    }
  },
  renter: {
    connect: {
      id: true
    }
  }
})
  .extend({ total_amount: z.string(), late_fee: z.string() })
  .strict()
  .required();

type RentalFormValues = z.infer<typeof RentalFormSchema>;

const defaultValues: Partial<RentalFormValues> = {};

export function RentalForm({
  hasEdit
}: {
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const persons = usePersons({ enabled: true });
  const movies = useMovies({ enabled: true });

  const {
    data: updateRental,
    mutate: updateRentalRequest,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate
  } = useUpdateRental();

  const {
    data: createRental,
    mutate: createRentalRequest,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate
  } = useCreateRental();

  const {
    data: rental,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['rental-by-id']
  });

  const form = useForm<RentalFormValues>({
    resolver: zodResolver(RentalFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  async function onSubmit(request: RentalFormValues) {
    try {
      setLoading(true);
      if (hasEdit?.id) {
        return await updateRentalRequest({
          id: hasEdit?.id,
          request: {
            ...request,
            total_amount: formatStringCurrencyToNumber(request.total_amount),
            late_fee: formatStringCurrencyToNumber(request.late_fee)
          }
        });
      }
      await createRentalRequest({
        ...request,

        total_amount: formatStringCurrencyToNumber(request.total_amount),
        late_fee: formatStringCurrencyToNumber(request.late_fee)
      });
    } catch (err: any) {
      console.error('@rental/error', err?.response);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    if (hasEdit) {
      form.reset({
        status: hasEdit?.status
      });
    }
  }, [form, hasEdit]);

  console.log('errors', form.formState.errors);
  console.log('VALUES', form.watch());

  useEffect(() => {
    if (isSuccessUpdate && updateRental?.meta?.ok) {
      // form.reset({
      //   name:  updateRental?.data?.name
      // });
    }
  }, [form, isSuccessUpdate, refetch, updateRental]);

  useEffect(() => {
    if (isSuccessCreate && createRental?.meta?.ok) {
      router.push(`/admin/rentals/${createRental?.data?.id}`);
    }
  }, [isSuccessCreate, createRental, router]);

  return (
    <Form {...form}>
      <form className='space-y-8'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='withdrawal_at'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full'>
                  <FormLabel className='font-bold'>Data de retirada</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP', {
                              locale: ptBR
                            })
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        locale={ptBR}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='due_at'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full'>
                  <FormLabel className='font-bold'>Data de entrega</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP', {
                              locale: ptBR
                            })
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        locale={ptBR}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            {hasEdit?.id ? (
              <FormField
                control={form.control}
                name='movie_stock'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Filme</FormLabel>
                    {field.value && (
                      <Select
                        onValueChange={(value) => {
                          const element = movies?.data?.data?.find(
                            (item) => item.id === +value
                          );
                          field.onChange({
                            connect: { id: element?.id }
                          });
                        }}
                        value={field.value?.connect?.id}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Selecione o filme' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {movies?.data?.data?.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                control={form.control}
                name='movie_stock'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Filme</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        const element = movies?.data?.data?.find(
                          (item) => item.id === +value
                        );
                        field.onChange({
                          connect: { id: element?.id }
                        });
                      }}
                      value={field.value?.connect?.id}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecione o filme' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {movies?.data?.data?.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className='w-full'>
            {hasEdit?.id ? (
              <FormField
                control={form.control}
                name='renter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Cliente</FormLabel>
                    {field.value && (
                      <Select
                        onValueChange={(value) => {
                          const element = persons?.data?.data?.find(
                            (item) => item.id === +value
                          );
                          field.onChange({
                            connect: { id: element?.id }
                          });
                        }}
                        value={field.value?.connect?.id}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Selecione o cliente' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {persons?.data?.data?.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              {item.full_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                control={form.control}
                name='renter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Cliente</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        const element = persons?.data?.data?.find(
                          (item) => item.id === +value
                        );
                        field.onChange({
                          connect: { id: element?.id }
                        });
                      }}
                      value={field.value?.connect?.id}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecione o cliente' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {persons?.data?.data?.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.full_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='late_fee'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel className='font-bold'>Taxa de atraso</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Taxa de atraso'
                      {...field}
                      disabled={loading}
                      onChange={(e) => {
                        field.onChange(formatBRLCurrency(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='total_amount'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel className='font-bold'>Preço total</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Preço total'
                      {...field}
                      disabled={loading}
                      onChange={(e) => {
                        field.onChange(formatBRLCurrency(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className='w-full grid-grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>Status</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const element = rentalStatusOpts?.find(
                        (item) => item.value === value
                      );
                      field.onChange(element?.value);
                    }}
                    value={field.value?.connect?.id}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Selecione o status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {rentalStatusOpts?.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div />
        </div>
        <MainButton
          text={hasEdit?.id ? 'Atualizar' : 'Adicionar'}
          size='large'
          width='auto'
          action={form.handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </form>
    </Form>
  );
}
