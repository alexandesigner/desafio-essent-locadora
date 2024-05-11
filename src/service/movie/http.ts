import ApiService from '../api.service';
import {
  MoviePersonResponseData,
  MovieResponseData,
  PersonResponseData,
  Response
} from '@/types';
import { MovieInputValidateSchema } from '@/lib/validations';
import { z } from 'zod';
import {
  MoviePersonUncheckedCreateInputObjectSchema,
  MoviePersonUncheckedUpdateInputObjectSchema
} from '../../../prisma/generated/schemas';

const MovieFormSchema = MovieInputValidateSchema;

type MovieFormValues = z.infer<typeof MovieFormSchema>;

export const getMovies = async (name?: string) =>
  await ApiService<Response<MovieResponseData[]>>('/api/v1/movies');

export const getMovieById = async (id: number) =>
  await ApiService<Response<MovieResponseData>>(`/api/v1/movies/${id}`);

export const createMovie = async (request: MovieFormValues) =>
  await ApiService<Response<MovieResponseData>>('/api/v1/movies', {
    method: 'POST',
    body: request
  });

export const updateMovie = async (id: number, request: MovieFormValues) =>
  await ApiService<Response<MovieResponseData>>(`/api/v1/movies/${id}`, {
    method: 'PUT',
    body: request
  });

export const deleteMovie = async (id: number) =>
  await ApiService<Response<MovieResponseData>>(`/api/v1/movies/${id}`, {
    method: 'DELETE'
  });

export const getMoviePerson = async (name?: string) =>
  await ApiService<Response<MovieResponseData[]>>('/api/v1/movies/persons');

export const getMoviePersonById = async (id: number) =>
  await ApiService<Response<MovieResponseData>>(`/api/v1/movies/persons/${id}`);

export const createMoviePerson = async (
  request: typeof MoviePersonUncheckedCreateInputObjectSchema
) =>
  await ApiService<Response<MoviePersonResponseData>>(
    '/api/v1/movies/persons',
    {
      method: 'POST',
      body: request
    }
  );

export const createMoviePersonMany = async (movieId: number, request: any) =>
  await ApiService<Response<MoviePersonResponseData[]>>(
    '/api/v1/movies/persons/multiple',
    {
      method: 'POST',
      body: {
        movieId,
        castData: request
      }
    }
  );

export const updateMoviePerson = async (
  id: number,
  request: typeof MoviePersonUncheckedUpdateInputObjectSchema
) =>
  await ApiService<Response<MoviePersonResponseData>>(
    `/api/v1/movies/persons/${id}`,
    {
      method: 'PUT',
      body: request
    }
  );

export const deleteMoviePerson = async (id: number) =>
  await ApiService<Response<PersonResponseData>>(
    `/api/v1/movies/persons/${id}`,
    {
      method: 'DELETE'
    }
  );
