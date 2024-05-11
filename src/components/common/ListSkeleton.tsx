'use client';

import React from 'react';
import { Skeleton } from '../ui/skeleton';

function ListSkeleton() {
  return (
    <div className='grid grid-cols-5'>
      <div className='card-item px-4'>
        <Skeleton className='w-full h-[380px]' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-full h-[380px]' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-full h-[380px]' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-full h-[380px]' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-full h-[380px]' />
      </div>
    </div>
  );
}

export default ListSkeleton;
