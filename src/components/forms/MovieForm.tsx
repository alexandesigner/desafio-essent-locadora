'use client';
import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import MainButton from '@/components/common/MainButton';
import { useCategories } from '@/hooks/use-categories';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MoviePersonSelect from '@/components/common/MoviePersonSelect';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  parseIdAndNameToOpts,
  formatStringCurrencyToNumber,
  formatBRLCurrency
} from '@/lib/utils';
import {
  useCreateMovie,
  useUpdateMovie,
  useCreateManyMoviePerson
} from '@/hooks/use-movies';
import { MovieCreateInputObjectSchema } from '../../../prisma/generated/schemas';

// @ts-ignore
const MovieFormSchema = MovieCreateInputObjectSchema.pick({
  release_year: true,
  category: true,
  title: true,
  synopsis: true,
  cast: true,
  featured_image: true,
  thumb_image: true
})
  .extend({ rental_value: z.string() })
  .strict()
  .required();

type MovieFormValues = z.infer<typeof MovieFormSchema>;

const defaultValues: Partial<MovieFormValues> = {};

export function MovieForm({
  hasEdit
}: {
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const categories = useCategories({ enabled: true });

  const {
    data: updateMovie,
    mutate: updateMovieRequest,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate
  } = useUpdateMovie();

  const { mutate: createManyMoviePerson } = useCreateManyMoviePerson();

  const {
    data: createMovie,
    mutate: createMovieRequest,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate
  } = useCreateMovie();

  const { refetch } = useQuery({
    queryKey: ['movie-by-id']
  });

  const form = useForm<MovieFormValues>({
    resolver: zodResolver(MovieFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  const values = form.getValues();

  async function onSubmit(request: MovieFormValues) {
    try {
      setLoading(true);

      delete request.cast;

      if (hasEdit?.id) {
        return await updateMovieRequest({
          id: hasEdit?.id,
          request: {
            ...request,
            rental_value: formatStringCurrencyToNumber(request.rental_value)
          }
        });
      }
      await createMovieRequest({
        ...request,
        rental_value: formatStringCurrencyToNumber(request.rental_value),
        cast: {}
      });
    } catch (err: any) {
      console.error('@movie/error', err?.response);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  const renderCategories = parseIdAndNameToOpts(categories?.data?.data);

  const createMovieCastMany = useCallback(async () => {
    try {
      if (!values?.cast?.connect?.length) return;
      const castData = values?.cast?.connect;
      const movieId = createMovie?.data?.id;
      if (movieId) {
        await createManyMoviePerson({
          movieId,
          castData
        });
      }
    } catch (e) {
      console.error('@movie/error', e);
    }
  }, [createManyMoviePerson, createMovie?.data?.id, values?.cast?.connect]);

  useEffect(() => {
    if (hasEdit) {
      form.reset({
        title: hasEdit?.title,
        release_year: hasEdit?.release_year,
        rental_value: formatBRLCurrency(hasEdit?.rental_value),
        category: {
          connect: {
            id: hasEdit?.category?.id
          }
        },
        synopsis: hasEdit?.synopsis
      });
      form.setValue('cast', {
        connect: hasEdit?.cast
      });
    }
  }, [form, hasEdit]);

  useEffect(() => {
    if (isSuccessUpdate && updateMovie?.meta?.ok) {
      toast({
        title: 'Filme atualizado com sucesso!  🎉',
        description: ``
      });
      form.setValue('title', updateMovie?.data?.title);
      refetch();
    }
  }, [form, isSuccessUpdate, refetch, updateMovie]);

  useEffect(() => {
    if (isSuccessCreate && createMovie?.meta?.ok) {
      router.push(`/admin/movies/${createMovie?.data?.id}`);
      createMovieCastMany();
      toast({
        title: 'Filme criado com sucesso!  🎉',
        description: ``
      });
    }
  }, [isSuccessCreate, createMovie, router, createMovieCastMany]);

  return (
    <Form {...form}>
      <form className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Título</FormLabel>
              <FormControl>
                <Input placeholder='Título' {...field} disabled={loading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='release_year'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>Ano de lançamento</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Ano de lançamento'
                      type='number'
                      {...field}
                      disabled={loading}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value, 10));
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
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>Categoria</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      const element = renderCategories?.find(
                        (item) => item.value === +value
                      );
                      field.onChange({
                        connect: { id: element?.value }
                      });
                    }}
                    value={field.value?.connect?.id}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Selecione a categoria' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {renderCategories?.map((item) => (
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
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='rental_value'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel className='font-bold'>Valor da locação</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Valor da locação'
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
        <FormField
          control={form.control}
          name='synopsis'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Sinopse</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Escreva a sinopse'
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <MoviePersonSelect hasEdit={hasEdit} form={form} />

        <FormLabel className='font-bold text-2xl mt-8 flex w-full'>
          Imagens do filme
        </FormLabel>
        <div className='p-3 rounded-md border border-gray-200'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='w-full'>
              <FormField
                control={form.control}
                name='featured_image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>
                      Imagem de destaque
                    </FormLabel>

                    <div className='col-span-full flex items-center gap-x-8'>
                      <img
                        src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb-wide.png'
                        alt=''
                        className='h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover'
                      />
                      <div>
                        <button
                          type='button'
                          className='rounded-md bg-white border-gray-200 border px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-black/10'
                        >
                          Alterar imagem de destaque
                        </button>
                        <p className='mt-2 text-xs leading-5 text-gray-400'>
                          JPG, GIF or PNG. Máximo 2MB.
                        </p>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-full'>
              <FormField
                control={form.control}
                name='thumb_image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>
                      Imagem de miniatura
                    </FormLabel>

                    <div className='col-span-full flex items-center gap-x-8'>
                      <img
                        src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb-wide.png'
                        alt=''
                        className='h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover'
                      />
                      <div>
                        <button
                          type='button'
                          className='rounded-md bg-white border-gray-200 border px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-black/10'
                        >
                          Alterar imagem de miniatura
                        </button>
                        <p className='mt-2 text-xs leading-5 text-gray-400'>
                          JPG, GIF or PNG. Máximo 2MB.
                        </p>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
