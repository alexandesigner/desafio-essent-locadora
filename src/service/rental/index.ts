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
    rulesRentals(data);
    return db.rental.create({ data });
  },

  async updateRental(
    id: number,
    data: Prisma.RentalUpdateInput
  ): Promise<Rental> {
    rulesRentals(data);
    return db.rental.update({ where: { id }, data });
  },

  async deleteRental(id: number): Promise<Rental> {
    return db.rental.delete({ where: { id } });
  }
};
