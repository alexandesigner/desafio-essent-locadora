import { Prisma, Movie } from '@prisma/client';
import { db } from '@/lib/db';
import { ParamsWithPagination } from '@/types';
import { withPagination } from '../api.utils';

export const MovieService = {
  // Movie
  async getAllMovies(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.movie,
      pagination: { page, limit },
      ...opts
    });
  },

  async getMovieById(id: number): Promise<Movie | null> {
    const query = {
      include: {
        category: true,
        cast: true,
        stock: true
      }
    };
    return db.movie.findUnique({ where: { id }, ...query });
  },

  async createMovie(data: Prisma.MovieCreateInput): Promise<Movie> {
    return db.movie.create({ data });
  },

  async updateMovie(id: number, data: Prisma.MovieUpdateInput): Promise<Movie> {
    return db.movie.update({ where: { id }, data });
  },

  async deleteMovie(id: number): Promise<Movie> {
    return db.movie.delete({ where: { id } });
  },

  // Movie Stock
  async getAllMoviesStock(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.movieStock,
      pagination: { page, limit },
      ...opts
    });
  },

  async getMovieStockCountById(movieId: number) {
    return db.movieStock.count({ where: { movie_id: movieId } });
  },

  async addMovieStock(movieId: number) {
    return db.movieStock.create({ data: { movie_id: movieId } });
  },

  async createMoviePersonMany(movieId: number, castData: any) {
    const created = await Promise.all(
      castData.map(async (castInfo: any) => {
        const { id } = castInfo;

        const exists = await db.movieCast.findFirst({
          where: {
            movie_id: movieId,
            person_id: id
          }
        });

        if (exists) {
          return exists;
        }

        const createdCast = await db.movieCast.create({
          data: {
            movie: { connect: { id: movieId } },
            person: { connect: { id } }
          }
        });

        return createdCast;
      })
    );

    return created;
  },

  async createMoviePerson(data: Prisma.MoviePersonCreateInput) {
    return db.moviePerson.create({
      data
    });
  },

  async updateMoviePerson(id: number, data: Prisma.MoviePersonUpdateInput) {
    return db.moviePerson.update({ where: { id }, data });
  },

  async deleteMoviePerson(id: number) {
    return db.moviePerson.delete({ where: { id } });
  },

  async getAllMoviePerson(
    { page, limit }: ParamsWithPagination = { page: 1, limit: 10 },
    opts?: any
  ) {
    return withPagination({
      model: db.moviePerson,
      pagination: { page, limit },
      ...opts
    });
  },

  async getMoviePersonById(id: number) {
    return db.moviePerson.findUnique({ where: { id } });
  }
};
