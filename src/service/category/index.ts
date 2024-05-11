import { Prisma, Category } from '@prisma/client';
import { db } from '@/lib/db';

export const CategoryService = {
  async getCategories(name?: string | null): Promise<Category[]> {
    return db.category.findMany({
      where: name
        ? {
            name: {
              contains: `%${name.toLocaleLowerCase()}%`,
              mode: 'insensitive'
            }
          }
        : undefined
    });
  },

  async getCategoryById(id: number): Promise<Category | null> {
    return db.category.findUnique({ where: { id } });
  },

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return db.category.create({ data });
  },

  async updateCategory(
    id: number,
    data: Prisma.CategoryUpdateInput
  ): Promise<Category> {
    return db.category.update({ where: { id }, data });
  },

  async deleteCategory(id: number): Promise<Category> {
    return db.category.delete({ where: { id } });
  }
};
