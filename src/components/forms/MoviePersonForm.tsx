'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import MainButton from '@/components/common/MainButton';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { moviePersonTypeOpts } from '@/lib/options';
import { Dialog, DialogClose } from '@/components/ui/dialog';
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
import { Input } from '@/components/ui/input';
import { PersonInputValidation } from '@/lib/validations';
import { useCreateMoviePerson, useUpdateMoviePerson } from '@/hooks/use-movies';
import { MoviePersonCreateInputObjectSchema } from '../../../prisma/generated/schemas';

const MoviePersonFormSchema = MoviePersonCreateInputObjectSchema;

type MoviePersonFormValues = z.infer<typeof MoviePersonFormSchema>;

const defaultValues: Partial<MoviePersonFormValues> = {};

export function MoviePersonForm({
  hasEdit,
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    data: updatePerson,
    mutate: updateMoviePersonRequest,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate
  } = useUpdateMoviePerson();

  const {
    data: createPerson,
    mutate: createMoviePersonRequest,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate
  } = useCreateMoviePerson();

  const {
    data: person,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['person-by-id']
  });

  const form = useForm<MoviePersonFormValues>({
    resolver: zodResolver(MoviePersonFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  async function onSubmit(request: MoviePersonFormValues) {
    try {
      setLoading(true);
      if (hasEdit?.id) {
        return await updateMoviePersonRequest({
          id: hasEdit?.id,
          request
        });
      }
      await createMoviePersonRequest(request);
    } catch (err: any) {
      toast({
        title: `Houve um problema ao tentar ${
          hasEdit?.id ? 'atualizar' : 'criar'
        } a pessoa!`,
        description: 'Tente novamente mais tarde.'
      });
      console.error('@person/error', err?.response);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  const dialogClose = () => {
    document.getElementById('closeDialog')?.click();
  };

  useEffect(() => {
    if (hasEdit) {
      form.reset({
        name: hasEdit?.name
      });
    }
  }, [form, hasEdit]);

  useEffect(() => {
    if (isSuccessUpdate && updatePerson?.meta?.ok) {
      form.reset({
        name: updatePerson?.data?.name
      });
    }
  }, [form, isSuccessUpdate, refetch, updatePerson]);

  useEffect(() => {
    if (isSuccessCreate && createPerson?.meta?.ok) {
      toast({
        title: 'Pessoa criada com sucesso! 🎉'
      });
      dialogClose();
    }
  }, [isSuccessCreate, createPerson, router]);

  return (
    <Form {...form}>
      <form className='space-y-8'>
        <FormField
          control={form.control}
          name='full_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Nome</FormLabel>
              <FormControl>
                <Input
                  id='has-reference'
                  placeholder='Nome'
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='w-full'>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Tipo</FormLabel>
                <Select
                  onValueChange={(v) => {
                    field.onChange(v);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecione o tipo de pessoa' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {moviePersonTypeOpts?.map((item) => (
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

export default MoviePersonForm;
