'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CategoryForm } from '@/components/forms/CategoryForm';

function CategoryDetails() {
  return (
    <>
      <div className='w-full max-w-4xl mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2 mb-6'>
          <div>
            <h3 className='text-4xl font-bold text-primary'>
              Adicionar categoria
            </h3>
          </div>
          <div className='flex items-center space-x-2'>
            <Link href='/admin/categories' className='flex items-center gap-2'>
              <ArrowLeft size='14px' />
              Voltar
            </Link>
          </div>
        </div>
        <CategoryForm />
      </div>
    </>
  );
}
export default CategoryDetails;
