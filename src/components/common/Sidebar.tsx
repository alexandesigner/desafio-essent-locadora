'use client';

import React, { useMemo } from 'react';
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
import { usePathname, useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCurrentPerson } from '@/hooks/use-auth';
import { getInitials } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentPerson = useCurrentPerson();

  const navigationOpts = useMemo(() => {
    return [
      {
        current: true,
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutDashboard,
        isVisible: currentPerson?.type === 'USER'
      },
      {
        current: false,
        name: 'Filmes',
        href: '/admin/movies',
        icon: Clapperboard,
        isVisible: currentPerson?.type === 'USER'
      },
      {
        current: false,
        name: 'Locações',
        href: '/admin/rentals',
        icon: BookmarkCheck,
        isVisible: currentPerson?.type === 'USER'
      },
      {
        current: false,
        name: 'Pessoas',
        href: '/admin/persons',
        icon: Users,
        isVisible: currentPerson?.type === 'USER'
      },
      {
        current: false,
        name: 'Categorias',
        href: '/admin/categories',
        icon: Tag,
        isVisible: currentPerson?.type === 'USER'
      },
      {
        current: false,
        name: 'Minhas locações',
        href: '/admin/rentals/person',
        icon: BookmarkCheck,
        isVisible: currentPerson?.type === 'CLIENT'
      },
      {
        current: false,
        name: 'Perfil',
        href: '/admin/profile',
        icon: User,
        isVisible: true
      }
    ];
  }, [currentPerson?.type]);

  const handleCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col m-4 rounded-2xl overflow-hidden'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6'>
        <div className='flex h-16 py-4 shrink-0 items-center mt-2'>
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
              {!currentPerson && (
                <li>
                  <div className='flex flex-col justify-center gap-4'>
                    <Skeleton className='h-[24px] w-[100px] rounded-md' />
                    <Skeleton className='h-[24px] w-[80px] rounded-md' />
                    <Skeleton className='h-[24px] w-full rounded-md' />
                    <Skeleton className='h-[24px] w-[200px] rounded-md' />
                    <Skeleton className='h-[24px] w-[220px] rounded-md' />
                  </div>
                </li>
              )}
              {currentPerson && (
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigationOpts?.map((item) => (
                    <React.Fragment key={item.name}>
                      {item?.isVisible ? (
                        <li>
                          <Link
                            href={item.href}
                            className={clsx(
                              'flex items-center gap-4 px-2 py-2 rounded-lg  hover:bg-black hover:bg-opacity-15',
                              {
                                'bg-black bg-opacity-15 text-blue-400':
                                  handleCurrentPage(item.href),
                                'text-white': !handleCurrentPage(item.href)
                              }
                            )}
                          >
                            <item.icon size='20px' />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ) : (
                        <div />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              )}
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
                    <span className='text-white font-bold'>
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
