'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MainButton from '../common/MainButton';
import { CreatePersonInputValidation } from '@/lib/validations';
import { useRegister } from '@/hooks/use-auth';
import { PersonType } from '@prisma/client';

function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof CreatePersonInputValidation>>({
    resolver: zodResolver(CreatePersonInputValidation),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {
    data: registerResponse,
    mutate: registerRequest,
    isSuccess
  } = useRegister();

  async function onSubmit(data: z.infer<typeof CreatePersonInputValidation>) {
    try {
      setLoading(true);
      await registerRequest({
        ...data,
        // @ts-ignore
        type: PersonType.CLIENT
      });
    } catch (err: any) {
      console.error('@register/error', err?.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isSuccess && registerResponse?.meta?.ok) {
      router.push('/login');
    }
  }, [isSuccess, registerResponse, router]);

  return (
    <>
      <div className='w-full justify-center items-center flex mt-24 flex-col'>
        <h2 className='text-3xl font-[700] text-primary mb-4'>
          Fazer cadastro
        </h2>
        <p className='text-gray-500 text-sm'>
          Preencha os campos abaixo para concluir o cadastro
        </p>
      </div>
      <div className='max-w-[420px] mx-auto border border-gray-200 rounded-lg p-6 mt-4'>
        <div className='self-center text-center'></div>
        <section className='max-w-[420px] w-full mx-auto flex'>
          <Form {...form}>
            <form className='w-full space-y-6'>
              <FormField
                control={form.control}
                name='full_name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Nome completo'
                        className='h-[40px] w-full rounded-large'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='E-mail'
                        {...field}
                        className='h-[40px] w-full rounded-large'
                        type='email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Senha'
                        {...field}
                        className='h-[40px] w-full rounded-large'
                        type='password'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-end'>
                <MainButton
                  text='Cadastrar'
                  width='full_width'
                  size='large'
                  isLoading={loading}
                  action={form.handleSubmit(onSubmit)}
                />
              </div>
            </form>
          </Form>
        </section>
      </div>

      <div className='flex justify-center text-primary mt-4 gap-2 text-md'>
        <span className='text-gray-500'>Já tem cadastro? </span>{' '}
        <Link href='/login' className='underline'>
          Fazer login
        </Link>
      </div>
    </>
  );
}

export default RegisterForm;
