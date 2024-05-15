'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import PrivateLoading from './loading';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [component, setComponent] = useState<React.ReactNode>(
    <PrivateLoading />
  );

  const AdminWrapper = useMemo(() => {
    return (
      <div>
        <Sidebar />
        <main className='py-10 lg:pl-72'>
          <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </div>
    );
  }, [children]);

  useEffect(() => {
    setComponent(AdminWrapper);
  }, [router, children, AdminWrapper]);

  return component;
}
