import { Prisma } from '@prisma/client';
import {
  getRentals,
  getRentalById,
  createRental,
  deleteRental,
  updateRental,
  getMyRentals,
  getMyRentalById
} from '@/service/rental/http';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useRentals = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['rentals'],
    queryFn: async () => getRentals(),
    ...config
  });
};

export const useRentalById = (id: number, config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['rental-by-id', id],
    queryFn: async () => getRentalById(id),
    ...config
  });
};

export const useCreateRental = () => {
  return useMutation({
    mutationFn: (request: Prisma.RentalCreateInput) => {
      return createRental(request);
    }
  });
};

export const useUpdateRental = () => {
  return useMutation({
    mutationFn: ({
      id,
      request
    }: {
      id: number;
      request: Prisma.RentalUpdateInput;
    }) => {
      return updateRental(id, request);
    }
  });
};

export const useDeleteRental = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return deleteRental(id);
    }
  });
};

export const useMyRentals = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['my-rentals'],
    queryFn: async () => getMyRentals(),
    ...config
  });
};

export const useMyRentalById = (id: number, config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['my-rental-by-id', id],
    queryFn: async () => getMyRentalById(id),
    ...config
  });
};
