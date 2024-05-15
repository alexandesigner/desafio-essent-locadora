'use client';

import React from 'react';

import { capitalizeFirstLetter, currentExtenseDate } from '@/lib/utils';
import { useRentals } from '@/hooks/use-rentals';
import { usePersons } from '@/hooks/use-persons';
import { Skeleton } from '@/components/ui/skeleton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const persons = usePersons({ enabled: true });
  const rentals = useRentals({ enabled: true });

  const stats = [
    {
      id: 1,
      name: 'Total de pessoas',
      stat: persons?.data?.meta?.pagination?.total_elements || 0,
      change: '123',
      changeType: 'increase'
    },
    {
      id: 3,
      name: 'Total de locações',
      stat: rentals?.data?.meta?.pagination?.total_elements || 0,
      change: '3.2%',
      changeType: 'decrease'
    }
  ];
  return (
    <div>
      <div className='flex flex-wrap gap-2 items-center'>
        <div className='flex flex-col'>
          <h3 className='leading-6 text-3xl font-bold text-gray-900 mb-2'>
            Seja bem-vindo!
          </h3>
          <p className='mb-8 text-sm text-gray-500'>
            {capitalizeFirstLetter(currentExtenseDate())}
          </p>
        </div>
      </div>

      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <>
          <div className='w-full flex flex-col shadow-lg min-h-[100px] p-6 bg-white rounded-lg'>
            <dt>
              <p className='truncate text-sm font-medium text-gray-500'>
                Total de pessoas
              </p>
            </dt>
            <dd className='flex items-baseline'>
              {!persons ? (
                <div className="flex w-full">
                  Carregando...
                </div>
              ) : (
                <p className='text-2xl text-gray-900 font-bold'>
                  {persons?.data?.meta?.pagination?.total_elements}
                </p>
              )}
            </dd>
          </div>
          <div className='w-full flex flex-col shadow-lg min-h-[100px] p-6 bg-white rounded-lg'>
            <dt>
              <p className='truncate text-sm font-medium text-gray-500'>
                Total de locação
              </p>
            </dt>
            <dd className='flex items-baseline'>
              {!rentals ? (
                <div className="flex w-full">
                  Carregando...
                </div>
              ) : (
                <p className='text-2xl text-gray-900 font-bold'>
                  {rentals?.data?.meta?.pagination?.total_elements}
                </p>
              )}
            </dd>
          </div>
        </>
      </dl>
    </div>
  );
}
