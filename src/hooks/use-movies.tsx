import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
  createMoviePerson,
  updateMoviePerson,
  deleteMoviePerson,
  getMoviePerson,
  createMoviePersonMany
} from '@/service/movie/http';
import { Prisma } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useMovies = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => getMovies(),
    ...config
  });
};

export const useMovieById = (id: number, config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['movie-by-id', id],
    queryFn: async () => getMovieById(id),
    ...config
  });
};

export const useCreateMovie = () => {
  return useMutation({
    mutationFn: (request: Prisma.MovieCreateInput) => {
      return createMovie(request);
    }
  });
};

export const useCreateManyMoviePerson = () => {
  return useMutation({
    mutationFn: ({ movieId, castData }: { movieId: number; castData: any }) => {
      return createMoviePersonMany(movieId, castData);
    }
  });
};

export const useUpdateMovie = () => {
  return useMutation({
    mutationFn: ({
      id,
      request
    }: {
      id: number;
      request: Prisma.MovieUpdateInput;
    }) => {
      return updateMovie(id, request);
    }
  });
};

export const useDeleteMovie = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return deleteMovie(id);
    }
  });
};

export const useCreateMoviePerson = () => {
  return useMutation({
    mutationFn: (request: Prisma.MoviePersonCreateInput) => {
      return createMoviePerson(request);
    }
  });
};

export const useUpdateMoviePerson = () => {
  return useMutation({
    mutationFn: ({
      id,
      request
    }: {
      id: number;
      request: Prisma.MoviePersonUpdateInput;
    }) => {
      return updateMoviePerson(id, request);
    }
  });
};

export const useDeleteMoviePerson = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return deleteMoviePerson(id);
    }
  });
};

export const useMoviePerson = (config: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['movie-person'],
    queryFn: async () => getMoviePerson(),
    ...config
  });
};
