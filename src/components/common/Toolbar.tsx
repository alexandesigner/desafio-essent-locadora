'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MainButton from './MainButton';
import { useCurrentPerson } from '@/hooks/use-auth';
import { useCategories } from '@/hooks/use-categories';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials, slugify } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CategoryResponseData } from '@/types';

function Toolbar() {
  const currentPerson = useCurrentPerson();
  const categories = useCategories({ enabled: true });

  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleLogout = () => {
    router.push('/logout');
  };

  const isLoading = categories?.isSuccess;

  const renderActions = () => {
    return (
      <>
        <div
          className={`hover:text-primary cursor-pointer flex items-center gap-2  font-bold text-gray-600`}
        >
          <Link
            href='/login'
            className='hover:text-primary font-bold cursor-pointer flex items-center gap-2 '
          >
            Login
          </Link>
        </div>
        <MainButton
          text='Cadastro'
          action={handleRegister}
          size='large'
          width='auto'
        />
      </>
    );
  };

  return (
    <div className='md:sticky md:top-0  md:shadow-none z-20 border-b border-gray-100 backdrop-blur-md bg-white/30'>
      {/* DESKTOP */}
      <div className=' hidden lg:block  p-4'>
        <div className='flex justify-between mx-[41px] items-center relative'>
          <Link href="/" title="Página inicial">
            <img
              src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/logo-blue.svg'
              alt='Logo Essent'
              width='192'
            />
          </Link>
          {isLoading ? (
            <div className='flex gap-[10px] xl:gap-[42px] text-[16px] items-center select-none'>
              {categories?.data?.data?.map((category: CategoryResponseData) => (
                <Link
                  href={`/${slugify(category.name)}`}
                  key={category.id}
                  className={`hover:text-primary hover:underline cursor-pointer flex items-center gap-2 font-bold text-primary`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className='hidden xl:flex flex-wrap gap-[16px] items-center select-none'>
              <Skeleton className='h-[18px] w-[120px] rounded-md' />
              <Skeleton className='h-[18px] w-[70px] rounded-md' />
              <Skeleton className='h-[18px] w-[140px] rounded-md' />
              <Skeleton className='h-[18px] w-[160px] rounded-md' />
              <Skeleton className='h-[18px] w-[90px] rounded-md' />
              <Skeleton className='h-[18px] w-[120px] rounded-md' />
            </div>
          )}

          <div className='flex items-center gap-[40px] select-none'>
            {currentPerson ? (
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='ghost'
                      className='relative h-8 w-8 rounded-full shadow-lg ring-offset-2 ring-2 ring-primary'
                    >
                      <Avatar className='h-9 w-9'>
                        <AvatarImage
                          src='/avatars/03.png'
                          alt={currentPerson?.full_name}
                        />
                        <AvatarFallback>
                          {getInitials(currentPerson?.full_name)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56' align='end' forceMount>
                    <DropdownMenuLabel className='font-normal'>
                      <div className='flex flex-col space-y-1'>
                        <p className='text-sm font-bold leading-none'>
                          {currentPerson?.full_name}
                        </p>
                        <p className='text-xs leading-none text-muted-foreground'>
                          {currentPerson?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {currentPerson?.type === 'USER' ? (
                      <>
                        <DropdownMenuGroup>
                          <DropdownMenuItem
                            onClick={() => router.push('/admin/dashboard')}
                          >
                            Admin
                            <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => router.push('/admin/profile')}
                          >
                            Perfil
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                      </>
                    ) : (
                      <>
                        <DropdownMenuGroup>
                          <DropdownMenuItem
                            onClick={() => router.push('/admin/profile')}
                          >
                            Minhas locações
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => router.push('/admin/profile')}
                          >
                            Perfil
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    <DropdownMenuItem onClick={handleLogout}>
                      Desconectar
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                {!isLoading ? (
                  <div className='flex gap-[16px]'>
                    <Skeleton className='h-[40px] w-[82px] rounded-md' />
                    <Skeleton className='h-[40px] w-[98px] rounded-md' />
                  </div>
                ) : (
                  renderActions()
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm w-full z-[999] backdrop-blur-md bg-white/30 py-4  ${
          menu ? ' bg-primary py-2' : ''
        } `}
      >
        <div className='flex justify-between mx-[10px]'>
          <div className='flex gap-[50px] text-[16px] items-center select-none'>
            <img
              src='https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/logo-blue.svg'
              alt='Logo Essent'
              width='220'
            />
          </div>
          <div className='flex items-center gap-[40px]'>
            {menu ? (
              <X className='cursor-pointer text-primary' onClick={toggleMenu} />
            ) : (
              <img
                src='/svgs/hamburger.svg'
                alt='Menu'
                className='cursor-pointer'
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className='my-8 select-none animate-in slide-in-from-right'>
            <div className='flex flex-col gap-8 mt-8 mx-4'>
              {categories?.data?.data?.map((category: CategoryResponseData) => (
                <p
                  key={category.id}
                  className={`hover:text-primary hover:underline cursor-pointer flex items-center gap-2 font-bold text-primary`}
                >
                  {category.name}
                </p>
              ))}
              <div className='flex flex-col gap-[40px] select-none'>
                <div
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-bold text-gray-600`}
                >
                  <Link
                    href='/login'
                    className='hover:text-primary font-bold cursor-pointer flex items-center gap-2 '
                  >
                    Login
                  </Link>
                </div>

                <MainButton
                  text='Cadastro'
                  action={handleRegister}
                  size='large'
                  width='auto'
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Toolbar;
