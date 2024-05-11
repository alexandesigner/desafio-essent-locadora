import { z } from 'zod';
import { CategoryCreateNestedOneWithoutMoviesInputObjectSchema } from './CategoryCreateNestedOneWithoutMoviesInput.schema';
import { MovieCastCreateNestedManyWithoutMovieInputObjectSchema } from './MovieCastCreateNestedManyWithoutMovieInput.schema';
import { MovieStockCreateNestedManyWithoutMovieInputObjectSchema } from './MovieStockCreateNestedManyWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateInput> = z
  .object({
    title: z.string(),
    release_year: z.number(),
    featured_image: z.string().optional().nullable(),
    thumb_image: z.string().optional().nullable(),
    synopsis: z.string().optional().nullable(),
    rental_value: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    category: z.lazy(
      () => CategoryCreateNestedOneWithoutMoviesInputObjectSchema
    ),
    cast: z
      .lazy(() => MovieCastCreateNestedManyWithoutMovieInputObjectSchema)
      .optional(),
    stock: z
      .lazy(() => MovieStockCreateNestedManyWithoutMovieInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieCreateInputObjectSchema = Schema;
