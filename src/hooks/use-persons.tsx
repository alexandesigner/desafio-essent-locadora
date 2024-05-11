import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createPerson,
  deletePerson,
  getPersonById,
  getPersons,
  updatePerson
} from '@/service/person/http';
import {
  createMoviePerson,
  updateMoviePerson,
  deleteMoviePerson
} from '@/service/movie/http';
import { Prisma } from '@prisma/client';

export const usePersons = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['persons'],
    queryFn: async () => getPersons(),
    ...config
  });
};

export const usePersonById = (id: number, config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['person-by-id', id],
    queryFn: async () => getPersonById(id),
    ...config
  });
};

export const useCreatePerson = () => {
  return useMutation({
    mutationFn: (request: Prisma.PersonCreateInput) => {
      return createPerson(request);
    }
  });
};

export const useUpdatePerson = () => {
  return useMutation({
    mutationFn: ({
      id,
      request
    }: {
      id: number;
      request: Prisma.PersonUpdateInput;
    }) => {
      return updatePerson(id, request);
    }
  });
};

export const useDeletePerson = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return deletePerson(id);
    }
  });
};
