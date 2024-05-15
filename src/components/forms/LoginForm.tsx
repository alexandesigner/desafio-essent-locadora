'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MainButton from '../common/MainButton';
import { LoginPersonInputValidation } from '@/lib/validations';
import { useLogin } from '@/hooks/use-auth';

function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof LoginPersonInputValidation>>({
    resolver: zodResolver(LoginPersonInputValidation),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { data: loginResponse, mutate: loginRequest, isSuccess, isError } = useLogin();

  async function onSubmit(data: z.infer<typeof LoginPersonInputValidation>) {
    try {
      setLoading(true);
      await loginRequest(data);
    } catch (err: any) {
      console.error('@login/error', err?.response);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    if (isSuccess && loginResponse?.meta?.ok && loginResponse?.data?.token) {
      toast({
        title: 'Seja bem-vindo!'
      });
      localStorage.setItem('USER_TOKEN', loginResponse.data.token);
      router.push('/');
    }
  }, [isSuccess, loginResponse, router]);

  return (
    <>
      <div className='w-full justify-center items-center flex mt-24 flex-col'>
        <h2 className='text-3xl font-[700] text-primary mb-4'>Fazer Login</h2>
        <p className='text-gray-500 text-sm mb-6'>
          Preencha os campos abaixo para acessar
        </p>
      </div>
      <div className='max-w-[420px] mx-auto border bg-white border-gray-300 rounded-lg p-6 mt-4'>
        <div className='self-center text-center'></div>
        <section className='max-w-[420px] w-full mx-auto flex'>
          <Form {...form}>
            <form className='w-full space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='E-mail'
                        className='h-[40px] w-full rounded-large'
                        type='email'
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            form.handleSubmit(onSubmit)();
                          }
                        }}
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
                        {...field}
                        placeholder='Senha'
                        className='h-[40px] w-full rounded-large'
                        type='password'
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            form.handleSubmit(onSubmit)();
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-end'>
                <MainButton
                  text='Entrar'
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
        <span className='text-gray-500'>Não tem cadastro? </span>{' '}
        <Link href='/register' className='underline'>
          Fazer cadastro
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
