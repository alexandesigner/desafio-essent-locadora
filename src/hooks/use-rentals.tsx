import {
  getRentals,
  getRentalById,
  createRental,
  deleteRental,
  updateRental
} from '@/service/rental/http';
import { Prisma } from '@prisma/client';
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
