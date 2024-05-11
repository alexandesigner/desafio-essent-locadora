'use client';

import { ProfileForm } from '@/components/forms/ProfileForm';

export default function Profile() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-between p-8 lg:px-24 py-12'>
      <div className='space-y-6 w-full max-w-4xl'>
        <div>
          <h3 className='text-4xl font-bold text-primary'>Perfil</h3>
          <p className='text-sm text-muted-foreground'>
            Veja e atualize as suas informações de perfil
          </p>
        </div>
        <div className='relative w-full flex'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-200' />
          </div>
        </div>
        <ProfileForm />
      </div>
    </main>
  );
}
