'use client';

import { useMemo } from 'react';
import clsx from 'clsx';
import {
  LayoutDashboard,
  BookmarkCheck,
  Clapperboard,
  Users,
  Tag,
  User,
  ArrowUpRightFromSquare,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCurrentPerson } from '@/hooks/use-auth';
import { getInitials } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

function Sidebar() {
  const router = useRouter();
  const currentPerson = useCurrentPerson();

  const navigationOpts = useMemo(() => {
    return [
      {
        current: true,
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutDashboard
      },
      {
        current: false,
        name: 'Filmes',
        href: '/admin/movies',
        icon: Clapperboard
      },
      {
        current: false,
        name: 'Locações',
        href: '/admin/rentals',
        icon: BookmarkCheck
      },
      {
        current: false,
        name: 'Pessoas',
        href: '/admin/persons',
        icon: Users
      },
      {
        current: false,
        name: 'Categorias',
        href: '/admin/categories',
        icon: Tag
      },
      {
        current: false,
        name: 'Perfil',
        href: '/admin/profile',
        icon: User
      }
    ];
  }, []);

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6'>
        <div className='flex h-16 py-4 shrink-0 items-center'>
          <img
            className='h-8 w-auto my-4 flex'
            src={
              'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/logo-white.webp'
            }
            alt='Logo essent'
          />
        </div>
        <div className='bg-black bg-opacity-25 p-3 px-4 rounded-lg'>
          <a
            href='/'
            target='_blank'
            className='flex flex-row text-white items-center hover:underline gap-2 w-full justify-between'
          >
            Acessar o site
            <ArrowUpRightFromSquare size='12px' />
          </a>
        </div>
        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul role='list' className='-mx-2 space-y-1'>
                {navigationOpts?.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'bg-primary text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-black hover:bg-opacity-15',
                        'group flex gap-x-3 rounded-md p-3 text-md leading-6 font-bold'
                      )}
                    >
                      <item.icon
                        className={clsx(
                          item.current
                            ? 'text-white'
                            : 'text-indigo-200 group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {currentPerson ? (
              <li className='-mx-6 mt-auto fle flex-col'>
                <div className='flex relative items-center bg-black bg-opacity-25 gap-x-4 px-6 py-4 text-sm font-semibold leading-6 text-primary  hover:bg-black hover:bg-opacity-15'>
                  <Avatar className='h-9 w-9'>
                    <AvatarImage
                      src={currentPerson?.avatar}
                      alt={currentPerson?.full_name}
                    />
                    <AvatarFallback>
                      {getInitials(currentPerson?.full_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className='text-white'>
                      {currentPerson?.full_name}
                    </span>
                    <span className='text-white text-xs text-opacity-50'>
                      {currentPerson?.email}
                    </span>
                  </div>
                  <div className='absolute z-10 top-[30px] right-[12px]'>
                    <button
                      onClick={() => router.push('/logout')}
                      type='button'
                      className='z-50'
                    >
                      <LogOut size='20px' color='white' />
                    </button>
                  </div>
                </div>
              </li>
            ) : (
              <li className='-mx-6 mt-auto'>
                <div className='flex flex-1 w-full px-4 py-4 flex-row gap-2 justify-start'>
                  <Skeleton className='h-[36px] w-[36px] rounded-full' />
                  <div className='flex flex-col justify-center gap-2'>
                    <Skeleton className='h-[12px] w-[120px] rounded-md' />
                    <Skeleton className='h-[8px] w-[95px] rounded-md' />
                  </div>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
