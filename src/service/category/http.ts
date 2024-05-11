import { CategoryResponseData, Response } from '@/types';
import { Prisma } from '@prisma/client';
import ApiService from '../api.service';

export const getCategories = async (name?: string) =>
  await ApiService<Response<CategoryResponseData[]>>(
    `/api/v1/categories${name ? `?name=${name}` : ''}`
  );

export const getCategoryById = async (id: number) =>
  await ApiService<Response<CategoryResponseData>>(`/api/v1/categories/${id}`);

export const createCategory = async (request: Prisma.CategoryCreateInput) =>
  await ApiService<Response<CategoryResponseData>>('/api/v1/categories', {
    method: 'POST',
    body: request
  });

export const updateCategory = async (
  id: number,
  request: Prisma.CategoryUpdateInput
) =>
  await ApiService<Response<CategoryResponseData>>(`/api/v1/categories/${id}`, {
    method: 'PUT',
    body: request
  });

export const deleteCategory = async (id: number) =>
  await ApiService<Response<CategoryResponseData>>(`/api/v1/categories/${id}`, {
    method: 'DELETE'
  });
