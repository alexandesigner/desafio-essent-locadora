'use client';

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PersonForm } from '@/components/forms/PersonForm';
import { Skeleton } from '@/components/ui/skeleton';
import { usePersonById } from '@/hooks/use-persons';
import { PersonResponseData } from '@/types';

function PersonDetails({
  params,
  searchParams
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const person = usePersonById(params?.id, { enabled: !!params?.id });

  const personData = person?.data?.data as PersonResponseData;

  useEffect(() => {
    if (searchParams?.refetch) {
      person.refetch();
    }
  }, [searchParams, person]);

  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            {personData?.full_name ? (
              <h3 className='text-4xl font-bold text-primary'>
                {personData?.full_name}
              </h3>
            ) : (
              <Skeleton className='w-[180px] h-[38px] rounded-md' />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/persons' className='flex items-center gap-2'>
              <ArrowLeft />
              Voltar
            </Link>
          </div>
        </div>
        <PersonForm hasEdit={personData} />
      </div>
    </>
  );
}
export default PersonDetails;
