'use client';

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CategoryForm } from '@/components/forms/CategoryForm';
import { Skeleton } from '@/components/ui/skeleton';
import { useCategoryById } from '@/hooks/use-categories';
import { CategoryResponseData } from '@/types';

function CategoryDetails({
  params,
  searchParams
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = useCategoryById(params?.id, { enabled: !!params?.id });
  const categoryData = category?.data?.data as CategoryResponseData;

  useEffect(() => {
    if (searchParams?.refetch) {
      category.refetch();
    }
  }, [searchParams, category]);

  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            {categoryData?.name ? (
              <h3 className='text-4xl font-bold text-primary'>
                {categoryData?.name}
              </h3>
            ) : (
              <Skeleton className='w-[180px] h-[38px] rounded-md' />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/categories' className='flex items-center gap-2'>
              <ArrowLeft size='14px' />
              Voltar
            </Link>
          </div>
        </div>
        <CategoryForm hasEdit={categoryData} />
      </div>
    </>
  );
}
export default CategoryDetails;
