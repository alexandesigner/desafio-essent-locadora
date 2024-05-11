import { Pagination } from '@/types';
import { NextResponse } from 'next/server';

const successResponse = (
  data: any,
  message: string = 'Response success',
  code = 200,
  pagination?: Pagination
) => {
  const response = {
    meta: {
      ok: true,
      message,
      pagination
    },
    data
  };
  return NextResponse.json({ ...response }, { status: code });
};

const errorResponse = (
  message: string = 'Response error',
  code = 400,
  data: any = null
) => {
  const response = {
    meta: {
      ok: false,
      message
    },
    data
  };
  return NextResponse.json({ ...response }, { status: code });
};

export { successResponse, errorResponse };
