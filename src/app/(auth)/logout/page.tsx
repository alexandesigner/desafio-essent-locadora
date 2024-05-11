'use client';

import React from 'react';
import BaseLoading from '../../(private)/loading';

export default function Logout() {
  React.useEffect(() => {
    if (window) {
      setTimeout(() => {
        window.localStorage.removeItem('USER_TOKEN');
        window.location.href = '/login';
      }, 500);
    }
  }, []);
  return (
    <main className='relative h-screen flex justify-center items-center flex-col space-y-6'>
      <BaseLoading height='auto' />
      <h3 className='flex justify-center items-center -mt-[20px]'>
        Você está sendo desconectado, aguade um momento por favor...
      </h3>
    </main>
  );
}
