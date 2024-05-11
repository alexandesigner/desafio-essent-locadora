'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
          <div className='w-full flex flex-col justify-start my-12 items-center px-4'>
            <Link href='/' title='Link para o início'>
              <img
                src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/logo-blue.svg'
                alt='Logo Essent'
                width='320'
              />
            </Link>
          </div>
          <h2 className='text-primary text-2xl font-regular mb-4'>
            Opa, parece que aconteceu algum problema!
          </h2>
          <div className='flex flex-row flex-wrap gap-3'>
            <button
              onClick={() => window.location.reload()}
              className='border-0 bg-secondary text-primary py-3 px-6 rounded-lg font-semibold'
            >
              Tente novamente
            </button>
            <Link
              href='/'
              className='border-0 bg-primary text-white py-3 px-6 rounded-lg font-semibold'
            >
              <div>Volte para o início</div>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
