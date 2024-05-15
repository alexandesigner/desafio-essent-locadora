'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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
import MainButton from '@/components/common/MainButton';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { PersonInputValidation } from '@/lib/validations';
import {
  useCreatePerson,
  useUpdatePerson,
  usePersonById
} from '@/hooks/use-persons';
import { PersonCreateInputObjectSchema } from '../../../prisma/generated/schemas';

const PersonFormSchema = PersonCreateInputObjectSchema.omit({ password: true });

type PersonFormValues = z.infer<typeof PersonFormSchema>;

const defaultValues: Partial<PersonFormValues> = {};

export function PersonForm({
  hasEdit
}: {
  hasEdit?: { id?: number;[key: string]: any } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [randomPassword, setRandomPassword] = useState(false);

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

  const form = useForm<PersonFormValues>({
    resolver: zodResolver(PersonFormSchema),
    defaultValues,
    mode: 'onChange'
  });

  const { refetch } = useQuery({
    queryKey: ['person-by-id']
  });

  async function onSubmit(request: PersonFormValues) {
    const generatedPass = Math.random().toString(36).slice(-8);
    setRandomPassword(generatedPass)
    try {
      setLoading(true);
      if (hasEdit?.id) {
        return await updatePersonRequest({
          id: hasEdit?.id,
          request
        });
      }
      await createPersonRequest({
        ...request,
        password: generatedPass
      });
    } catch (err: any) {
      toast({
        title: `Houve um problema ao tentar ${hasEdit?.id ? 'atualizar' : 'criar'
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
    if (isSuccessUpdate && updatePerson?.meta?.ok) {
      toast({
        title: 'Pessoa atualizada com sucesso!  🎉',
        description: ``
      });
      form.setValue('full_name', updatePerson?.data?.full_name)
      refetch();
    }
  }, [form, isSuccessUpdate, refetch, updatePerson]);

  useEffect(() => {
    if (isSuccessCreate && createPerson?.meta?.ok) {
      toast({
        title: 'Pessoa criada com sucesso! 🎉',
        description: `Foi gerada uma senha aleatória para o usuário: ${randomPassword}, envie para o usuário e peça para que ele altere a senha.`
      });
      router.push(`/admin/persons/${createPerson?.data?.id}`);
    }
  }, [isSuccessCreate, createPerson, router, randomPassword]);

  useEffect(() => {
    if (hasEdit) {
      form.reset({
        full_name: hasEdit?.full_name,
        email: hasEdit?.email,
        type: hasEdit?.type,
        is_verified: hasEdit?.is_verified
      });
    }
  }, [form, hasEdit]);

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
            {hasEdit?.id ? (
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
            ) : (
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold'>Tipo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
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
                  Verificar conta do usuário, confirmar os dados.
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
