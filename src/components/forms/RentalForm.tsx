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
import { RentalInputValidation } from '@/lib/validations';
import { useCreateRental, useUpdateRental } from '@/hooks/use-rentals';
import { RentalCreateInputObjectSchema } from '../../../prisma/generated/schemas';
import { useMovies } from '@/hooks/use-movies';
import { usePersons } from '@/hooks/use-persons';

const RentalFormSchema = RentalCreateInputObjectSchema;

type RentalFormValues = z.infer<typeof RentalFormSchema>;

const defaultValues: Partial<RentalFormValues> = {};

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' }
] as const;

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
          request
        });
      }
      await createRentalRequest(request);
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
        {/* <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Nome</FormLabel>
              <FormControl>
                <Input placeholder='Nome' {...field} disabled={loading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

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
                name='movie'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Filme</FormLabel>
                    {field.value && (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                name='movie'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Filme</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                name='person'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Cliente</FormLabel>
                    {field.value && (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                name='person'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Cliente</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
