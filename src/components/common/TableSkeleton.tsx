'use client';

import React from 'react';
import { Skeleton } from '../ui/skeleton';

function TableSkeleton() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-full border p-4 border-gray-200 rounded-lg flex flex-wrap gap-[16px] items-center select-none'>
        <div className='w-full flex flex-wrap gap-8 justify-between items-center border-b border-gray-20 pb-4'>
          <Skeleton className='h-[28px] w-[120px] rounded-md' />
          <Skeleton className='h-[28px] w-[70px] rounded-md' />
          <Skeleton className='h-[28px] w-[140px] rounded-md' />
          <Skeleton className='h-[28px] w-[160px] rounded-md' />
          <Skeleton className='h-[28px] w-[90px] rounded-md' />
          <Skeleton className='h-[28px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-8 justify-between py-2 items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-8 justify-between py-2 items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-8 justify-between py-2 items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-8 justify-between py-2 items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-8 justify-between py-2 items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
        <div className='w-full flex flex-wrap gap-10 justify-between items-center'>
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
          <Skeleton className='h-[18px] w-[70px] rounded-md' />
          <Skeleton className='h-[18px] w-[140px] rounded-md' />
          <Skeleton className='h-[18px] w-[160px] rounded-md' />
          <Skeleton className='h-[18px] w-[90px] rounded-md' />
          <Skeleton className='h-[18px] w-[120px] rounded-md' />
        </div>
      </div>
    </div>
  );
}

export default TableSkeleton;
