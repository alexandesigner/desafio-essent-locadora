'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainButton from './MainButton';
import { Skeleton } from '../ui/skeleton';
import { MovieResponseData } from '@/types';
import { slugify, pluralize  } from '@/lib/utils';
import ListSkeleton from './ListSkeleton';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function MoviesList({
  title,
  data,
  slugPath,
  isLoading = true
}: {
  title?: string;
  data: MovieResponseData[] | undefined;
  slugPath?: string;
  isLoading?: boolean;
}) {
  return (
    <div className='movielist-carousel animate-in fade-in w-full flex flex-col mb-8'>
      {title && (
        <>
          {isLoading ? (
            <Skeleton className='w-[220px] h-8 mb-8 mx-4' />
          ) : (
            <h3 className='text-3xl px-4 font-bold text-primary w-full text-left mb-6'>
              {title}
            </h3>
          )}
        </>
      )}
      <div className='slick-wrapper h-full w-full'>
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <Slider {...settings}>
            {data?.map((item) => (
              <div key={item.id} className='card-item px-4'>
                <Link href={`/${slugify(item.category.name)}/${slugify(item.title)}`} title='Link' className="group block overflow-hidden rounded-lg">
                  <img
                    src={
                      item.thumb_image
                        ? item.thumb_image
                        : 'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'
                    }
                    alt={item.title}
                    className='w-full h-[380px] object-cover rounded-lg transition-all duration-300 group-hover:scale-125'
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png';
                    }}
                  />
                </Link>
                <span className='text-sm mt-2 flex text-gray-400'>
                  {item.category?.name}
                </span>
                <Link href='/' title='Link' className='hover:underline'>
                  <h2 className='my-2 text-xl font-bold'>{item.title}</h2>
                </Link>
                {item.stock?.length ? (
                  <span className='inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20'>
                    {item.stock?.length} cópia{pluralize(item.stock?.length) ? 's' : ''}
                  </span>
                ) : undefined}
              </div>
            ))}
          </Slider>
        )}
      </div>
      {isLoading ? (
        <Skeleton className='w-[120px] h-[48px] mx-4 my-8' />
      ) : (
        <>
          {data && data?.length > 5 ? (
            <footer className='px-4 py-8'>
              <Link href={slugPath ?? '/'}>
                <MainButton text='Ver mais' width='full_width' size='large' />
              </Link>
            </footer>
          ) : undefined}
        </>
      )}
    </div>
  );
}

export default MoviesList;
