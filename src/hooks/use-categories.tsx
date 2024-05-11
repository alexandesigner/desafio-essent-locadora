import { Prisma } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory
} from '@/service/category/http';

export const useCategories = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => getCategories(),
    ...config
  });
};

export const useCategoryById = (id: number, config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['category-by-id', id],
    queryFn: async () => getCategoryById(id),
    ...config
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: (request: Prisma.CategoryCreateInput) => {
      return createCategory(request);
    }
  });
};

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: ({
      id,
      request
    }: {
      id: number;
      request: Prisma.CategoryUpdateInput;
    }) => {
      return updateCategory(id, request);
    }
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return deleteCategory(id);
    }
  });
};
