'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainButton from './MainButton';
import { Skeleton } from '../ui/skeleton';
import { MovieResponseData } from '@/types';
import { slugify, pluralize } from '@/lib/utils';
import ListSkeleton from './ListSkeleton';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
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

function MoviePersonList({
  data,
  slugPath,
  isLoading = true
}: {
  data: MovieResponseData[] | undefined;
  slugPath?: string;
  isLoading?: boolean;
}) {
  return (
    <div className='moviepersonlist-carousel animate-in fade-in w-full flex flex-col mb-12'>
      <div className='slick-wrapper h-full w-full'>
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
            {data?.map((item) => (
              <div
                key={item.id}
                className='card-item px-4 justify-center flex flex-col items-center'
              >
                <Link
                  href={`/movies/${slugify(item.id)}_${slugify(
                    item.full_name
                  )}/persons`}
                  title='Link'
                  className='group block overflow-hidden rounded-full w-[100px] h-[100px] sm:w-[180px] sm:h-[180px]'
                >
                  <img
                    src={
                      item.avatar
                        ? item.avatar
                        : 'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'
                    }
                    alt={item.title}
                    className='w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] object-cover rounded-full transition-all duration-300 group-hover:scale-125'
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png';
                    }}
                  />
                </Link>
                <Link
                  href='/'
                  title='Link'
                  className='hover:underline w-full text-center'
                >
                  <h2 className='my-2 text-xl font-bold'>{item.full_name}</h2>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviePersonList;
