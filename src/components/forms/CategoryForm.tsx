'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import MainButton from '@/components/common/MainButton';
import { toast } from '@/components/ui/use-toast';
import { generateRandomNumber } from '@/service/api.utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CategoryInputValidation } from '@/lib/validations';
import { useCreateCategory, useUpdateCategory } from '@/hooks/use-categories';
import { CategoryCreateInputObjectSchema } from '../../../prisma/generated/schemas';

const CategoryFormSchema = CategoryCreateInputObjectSchema;

type CategoryFormValues = z.infer<typeof CategoryFormSchema>;

const defaultValues: Partial<CategoryFormValues> = {};

export function CategoryForm({
  hasEdit
}: {
  hasEdit?: { id?: number; [key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    data: updateCategory,
    mutate: updateCategoryRequest,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate
  } = useUpdateCategory();

  const {
    data: createCategory,
    mutate: createCategoryRequest,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate
  } = useCreateCategory();

  const {
    data: category,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['category-by-id']
  });

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(CategoryFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  async function onSubmit(request: CategoryFormValues) {
    try {
      setLoading(true);
      if (hasEdit?.id) {
        return await updateCategoryRequest({
          id: hasEdit?.id,
          request: {
            name: request.name
          }
        });
      }
      await createCategoryRequest({
        name: request.name
      });
    } catch (err: any) {
      console.error('@category/error', err?.response);
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
    if (isSuccessUpdate && updateCategory?.meta?.ok) {
      router.push(
        `/admin/categories/${
          updateCategory?.data?.id
        }?refetch=${generateRandomNumber()}`
      );
      form.reset({
        name: updateCategory?.data?.name
      });
    }
  }, [form, isSuccessUpdate, refetch, updateCategory, router]);

  useEffect(() => {
    if (isSuccessCreate && createCategory?.meta?.ok) {
      router.push(`/admin/categories/${createCategory?.data?.id}`);
    }
  }, [isSuccessCreate, createCategory, router]);

  return (
    <Form {...form}>
      <form className='space-y-8'>
        <FormField
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
