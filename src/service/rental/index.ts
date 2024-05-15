import { Prisma, Rental } from '@prisma/client';
import { db } from '@/lib/db';
import { ParamsWithPagination } from '@/types';
import { withPagination } from '../api.utils';

const createRentalImplementations = async (data: Prisma.RentalCreateInput) => {
  const movieStock = await db.movieStock.findUnique({
    where: { id: data.movie_stock?.connect?.id }
  });

  if (!movieStock) {
    throw new Error('Movie Stock not found');
  }

  return db.rental.create({ data });
};

const updateRentalImplementations = async (
  id: number,
  data: Prisma.RentalUpdateInput
) => {
  return db.rental.update({ where: { id }, data });
};

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
    const query = {
      include: {
        movie_stock: true,
        renter: true
      }
    };
    return db.rental.findUnique({ where: { id }, ...query });
  },

  async createRental(data: Prisma.RentalCreateInput): Promise<Rental> {
    return createRentalImplementations(data);
  },

  async updateRental(
    id: number,
    data: Prisma.RentalUpdateInput
  ): Promise<Rental> {
    return updateRentalImplementations(id, data);
  },

  async deleteRental(id: number): Promise<Rental> {
    return db.rental.delete({ where: { id } });
  },

  async getAllMyRentals(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.rental,
      pagination: { page, limit },
      ...opts
    });
  }
};
