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
import { RentalInputValidation } from '@/lib/validations';
import { useCreateRental, useUpdateRental } from '@/hooks/use-rentals';
import { RentalCreateInputObjectSchema } from '../../../prisma/generated/schemas';

const RentalFormSchema = RentalCreateInputObjectSchema;

type RentalFormValues = z.infer<typeof RentalFormSchema>;

const defaultValues: Partial<RentalFormValues> = {};

export function RentalForm({
  hasEdit
}: {
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
