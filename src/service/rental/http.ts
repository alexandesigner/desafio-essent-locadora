import { Prisma } from '@prisma/client';
import ApiService from '../api.service';
import { RentalResponseData, Response } from '@/types';

export const getRentals = async () =>
  await ApiService<Response<RentalResponseData[]>>('/api/v1/rentals');

export const getRentalById = async (id: number) =>
  await ApiService<Response<RentalResponseData>>(`/api/v1/rentals/${id}`);

export const createRental = async (request: Prisma.RentalCreateInput) =>
  await ApiService<Response<RentalResponseData>>('/api/v1/rentals', {
    method: 'POST',
    body: request
  });

export const updateRental = async (
  id: number,
  request: Prisma.RentalUpdateInput
) =>
  await ApiService<Response<RentalResponseData>>(`/api/v1/rentals/${id}`, {
    method: 'PUT',
    body: request
  });

export const deleteRental = async (id: number) =>
  await ApiService<Response<RentalResponseData>>(`/api/v1/rentals/${id}`, {
    method: 'DELETE'
  });
