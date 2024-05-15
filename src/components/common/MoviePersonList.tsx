'use client';

import React from 'react';

import { MoviePersonResponseData, MovieStockResponseData } from '@/types';
import ListSkeleton from './ListSkeleton';

function MoviePersonList({
  data,
  isLoading = true
}: {
  data: MoviePersonResponseData[] | undefined;
  isLoading?: boolean;
}) {
  return (
    <div className='moviepersonlist-carousel animate-in fade-in w-full flex flex-col mb-12'>
      <div className='slick-wrapper h-full w-full'>
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
            {data?.map((item: MovieStockResponseData & MoviePersonResponseData) => (
              <div
                key={item.id}
                className='card-item px-4 justify-center flex flex-col items-center'
              >
                <div className='group block overflow-hidden rounded-full w-[100px] h-[100px] sm:w-[180px] sm:h-[180px]'>
                  <img
                    src={
                      item?.avatar || item?.person?.avatar
                        ? item?.avatar || item?.person?.avatar
                        : 'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png'
                    }
                    alt={item?.full_name || item?.person?.full_name}
                    className='w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] object-cover rounded-full transition-all duration-300 group-hover:scale-125'
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://youoatiwlsqmiivcqzoa.supabase.co/storage/v1/object/public/essent-locadora/thumb.png';
                    }}
                  />
                </div>
                <div className='hover:underline w-full text-center'>
                  <h2 className='my-2 text-xl font-bold'>
                    {item?.full_name || item?.person?.full_name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviePersonList;
