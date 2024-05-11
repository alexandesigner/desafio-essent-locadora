'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PrivateLoading from '../(private)/loading';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [component, setComponent] = useState<React.ReactNode>(
    <PrivateLoading />
  );

  const AuthWrapper = useMemo(
    () => (
      <div className='flex flex-col'>
        <div className='flex-grow'>
          <div className='w-full flex flex-col justify-start my-12 items-center px-4'>
            <Link href='/' title='Link para o início'>
              <img
                src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/logo-blue.svg'
                alt='Logo Essent'
                width='320'
              />
            </Link>
          </div>
          {children}
        </div>
      </div>
    ),
    [children]
  );

  useEffect(() => {
    setComponent(AuthWrapper);
  }, [router, children, AuthWrapper]);

  return component;
}