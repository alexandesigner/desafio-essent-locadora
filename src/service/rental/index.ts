import { Prisma, Rental } from '@prisma/client';
import { db } from '@/lib/db';
import { ParamsWithPagination } from '@/types';
import { withPagination } from '../api.utils';

const rulesRental = (data: Prisma.RentalCreateInput) => {
  if (data.rental_value < data.late_fee) {
    throw new Error(
      'O valor da locação não pode ser menor que o valor da multa'
    );
  }
  if (data.due_at > new Date()) {
    data.status = 'DELAYED';
  }
  if (data.due_at < new Date()) {
    data.status = 'DELIVERED';
  }

  return data;
};

const createRentalImplementations = async (data: Prisma.RentalCreateInput) => {
  rulesRental(data);

  const movieStock = await db.movieStock.findUnique({
    where: { id: data.movie_id }
  });

  if (!movieStock) {
    throw new Error('Movie Stock not found');
  }

  if (movieStock.stock <= 0) {
    throw new Error('Movie Stock not available');
  }

  await db.movieStock.update({
    where: { id: data.movie_id },
    data: { stock: { decrement: 1 } }
  });

  data.movie_stock = movieStock.id;

  return db.rental.create({ data });
};

const updateRentalImplementations = async (
  id: number,
  data: Prisma.RentalUpdateInput
) => {
  rulesRental(data);

  let movieStockResponse;

  if (data.movie?.connect?.id) {
    const movieStock = await db.movieStock.findUnique({
      where: { id: data.movie.connect.id }
    });

    if (!movieStock) {
      throw new Error('Movie Stock not found');
    }

    movieStockResponse = await db.movieStock.update({
      where: { id: data.movie.connect.id },
      data: { stock: { decrement: 1 } }
    });

    data.movie_stock = movieStock.id;
  }

  if (data.movie?.disconnect) {
    movieStockResponse = await db.movieStock.update({
      where: { id: data.movie.disconnect.id },
      data: { stock: { increment: 1 } }
    });
  }

  if (data.due_at > new Date()) {
    data.status = 'DELAYED';
  }

  if (data.due_at < new Date()) {
    data.status = 'DELIVERED';
  }

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
    return db.rental.findUnique({ where: { id } });
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
  },

  async getMyRentalById(renter_id: number): Promise<Rental | null> {
    return db.rental.findUnique({ where: { renter_id } });
  }
};
