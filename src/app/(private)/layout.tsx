'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import PrivateLoading from './loading';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [component, setComponent] = useState<React.ReactNode>(
    <PrivateLoading />
  );

  const PrivateWrapper = useMemo(
    () => <div className='w-full'>{children}</div>,
    [children]
  );

  useEffect(() => {
    setComponent(PrivateWrapper);
  }, [router, children, PrivateWrapper]);

  return component;
}
