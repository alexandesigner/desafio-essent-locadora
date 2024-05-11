'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import MainButton from '@/components/common/MainButton';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PersonInputValidation } from '@/lib/validations';
import { useCreatePerson, useUpdatePerson } from '@/hooks/use-persons';
import { PersonCreateInputObjectSchema } from '../../../prisma/generated/schemas';

const PersonFormSchema = PersonCreateInputObjectSchema;

type PersonFormValues = z.infer<typeof PersonFormSchema>;

const defaultValues: Partial<PersonFormValues> = {};

export function PersonForm({
  hasEdit
}: {
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    data: updatePerson,
    mutate: updatePersonRequest,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate
  } = useUpdatePerson();

  const {
    data: createPerson,
    mutate: createPersonRequest,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate
  } = useCreatePerson();

  const {
    data: person,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['person-by-id']
  });

  const form = useForm<PersonFormValues>({
    resolver: zodResolver(PersonFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  async function onSubmit(request: PersonFormValues) {
    try {
      setLoading(true);
      if (hasEdit?.id) {
        return await updatePersonRequest({
          id: hasEdit?.id,
          request
        });
      }
      await createPersonRequest(request);
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
        title: 'Pessoa criada com sucesso!',
        description: ``
      });
      router.push(`/admin/persons/${createPerson?.data?.id}`);
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
                <Input placeholder='Nome' {...field} disabled={loading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
