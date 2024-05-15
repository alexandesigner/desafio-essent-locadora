'use client';

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { RentalForm } from '@/components/forms/RentalForm';
import { Skeleton } from '@/components/ui/skeleton';
import { useRentalById } from '@/hooks/use-rentals';
import { RentalResponseData } from '@/types';

function RentalDetails({
  params,
  searchParams
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const rental = useRentalById(params?.id, { enabled: !!params?.id });
  const rentalData = rental?.data?.data as RentalResponseData;

  useEffect(() => {
    if (searchParams?.refetch) {
      rental.refetch();
    }
  }, [searchParams, rental]);

  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            {rentalData?.renter ? (
              <h3 className='text-4xl font-bold text-primary'>
                {rentalData?.renter?.full_name}
              </h3>
            ) : (
              <Skeleton className='w-[180px] h-[38px] rounded-md' />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/rentals' className='flex items-center gap-2'>
              <ArrowLeft size='14px' />
              Voltar
            </Link>
          </div>
        </div>
        <RentalForm hasEdit={rentalData} />
      </div>
    </>
  );
}
export default RentalDetails;
