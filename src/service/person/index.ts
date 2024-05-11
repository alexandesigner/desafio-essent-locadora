import { Prisma } from '@prisma/client';
import { db } from '@/lib/db';
import type { ParamsWithPagination } from '@/types';
import bcrypt from 'bcrypt';
import { excludeFromObject, withPagination } from '../api.utils';

export const PersonService = {
  async getAllPersons(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.person,
      pagination: { page, limit },
      where: {},
      fieldsToExclude: ['password'],
      ...opts
    });
  },

  async getPersonById(id: number) {
    const one = await db.person.findUnique({ where: { id } });
    return excludeFromObject(one, ['password']);
  },

  async createPerson(data: Prisma.PersonCreateInput) {
    const password = data?.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const created = await db.person.create({
      data: { ...data, password: hashedPassword }
    });
    return excludeFromObject(created, ['password']);
  },

  async updatePerson(id: number, data: Prisma.PersonUpdateInput) {
    return db.person.update({ where: { id }, data });
  },

  async deletePerson(id: number) {
    return db.person.delete({ where: { id } });
  }
};
