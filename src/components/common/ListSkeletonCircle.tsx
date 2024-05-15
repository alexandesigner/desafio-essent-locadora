'use client';

import React from 'react';
import { Skeleton } from '../ui/skeleton';

function ListSkeleton() {
  return (
    <div className='grid grid-cols-5'>
      <div className='card-item px-4'>
        <Skeleton className='w-[120px] h-[120px] rounded-full' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-[120px] h-[120px] rounded-full' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-[120px] h-[120px] rounded-full' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-[120px] h-[120px] rounded-full' />
      </div>
      <div className='card-item px-4'>
        <Skeleton className='w-[120px] h-[120px] rounded-full' />
      </div>
    </div>
  );
}

export default ListSkeleton;
