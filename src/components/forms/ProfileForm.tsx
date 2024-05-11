'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import MainButton from '@/components/common/MainButton';
import { z } from 'zod';

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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { CreatePersonInputValidation } from '@/lib/validations';
import { useUpdatePerson } from '@/hooks/use-persons';
import { PersonResponseData, Response } from '@/types';

const ProfileFormSchema = CreatePersonInputValidation.omit({ password: true });

type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
  const [loading, setLoading] = useState(false);

  const {
    data: updatePerson,
    mutate: updatePersonRequest,
    isSuccess,
    isPending
  } = useUpdatePerson();

  const { data: person, isLoading } = useQuery<Response<PersonResponseData>>({
    queryKey: ['auth']
  });

  const personData = person?.data as PersonResponseData;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  async function onSubmit(request: ProfileFormValues) {
    try {
      setLoading(true);
      await updatePersonRequest({
        id: personData?.id,
        request
      });
    } catch (err: any) {
      console.error('@profile/error', err?.response);
    }
  }

  useEffect(() => {
    form.reset({
      full_name: personData?.full_name,
      email: personData?.email,
      type: personData?.type,
      is_verified: personData?.is_verified
    });
  }, [form, personData]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(isPending);
    }, 2000);
  }, [isPending]);

  return (
    <Form {...form}>
      <form className='space-y-8'>
        <FormField
          control={form.control}
          name='full_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Nome completo</FormLabel>
              <FormControl>
                <Input
                  placeholder='Nome completo'
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder='E-mail' {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>Tipo</FormLabel>
                  {field.value && (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecione o tipo de pessoa' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {personTypeOpts?.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name='is_verified'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base font-bold'>
                  Verificação
                </FormLabel>
                <FormDescription>
                  Você receberá um e-mail para confirmar a sua conta.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <MainButton
          text='Atualizar perfil'
          size='large'
          width='auto'
          action={form.handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </form>
    </Form>
  );
}
