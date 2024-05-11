import { Prisma, Rental } from '@prisma/client';
import { db } from '@/lib/db';
import { ParamsWithPagination } from '@/types';
import { withPagination } from '../api.utils';

export const RentalService = {
  async getAllRentals(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.rental,
      pagination: { page, limit },
      ...opts
    });
  },

  async getRentalById(id: number): Promise<Rental | null> {
    return db.rental.findUnique({ where: { id } });
  },

  async createRental(data: Prisma.RentalCreateInput): Promise<Rental> {
    return db.rental.create({ data });
  },

  async updateRental(
    id: number,
    data: Prisma.RentalUpdateInput
  ): Promise<Rental> {
    return db.rental.update({ where: { id }, data });
  },

  async deleteRental(id: number): Promise<Rental> {
    return db.rental.delete({ where: { id } });
  }
};
