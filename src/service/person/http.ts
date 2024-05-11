import { Prisma } from '@prisma/client';
import ApiService from '../api.service';
import { PersonResponseData, Response } from '@/types';

export const getPersons = async () => {
  const response = await ApiService<Response<PersonResponseData[]>>(
    '/api/v1/persons'
  );
  return response;
};

export const getPersonById = async (id: number) =>
  await ApiService<Response<PersonResponseData>>(`/api/v1/persons/${id}`);

export const createPerson = async (request: Prisma.PersonCreateInput) =>
  await ApiService<Response<PersonResponseData>>('/api/v1/persons', {
    method: 'POST',
    body: request
  });

export const updatePerson = async (
  id: number,
  request: Prisma.PersonUpdateInput
) =>
  await ApiService<Response<PersonResponseData>>(`/api/v1/persons/${id}`, {
    method: 'PUT',
    body: request
  });

export const deletePerson = async (id: number) =>
  await ApiService<Response<PersonResponseData>>(`/api/v1/persons/${id}`, {
    method: 'DELETE'
  });
