import { z } from 'zod';
import { MovieCastCreateNestedManyWithoutMovieInputObjectSchema } from './MovieCastCreateNestedManyWithoutMovieInput.schema';
import { MovieStockCreateNestedManyWithoutMovieInputObjectSchema } from './MovieStockCreateNestedManyWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateWithoutCategoryInput> = z
  .object({
    title: z.string(),
    release_year: z.number(),
    featured_image: z.string().optional().nullable(),
    thumb_image: z.string().optional().nullable(),
    synopsis: z.string().optional().nullable(),
    rental_value: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    cast: z
      .lazy(() => MovieCastCreateNestedManyWithoutMovieInputObjectSchema)
      .optional(),
    stock: z
      .lazy(() => MovieStockCreateNestedManyWithoutMovieInputObjectSchema)
      .optional()
  })
  .strict();

export const MovieCreateWithoutCategoryInputObjectSchema = Schema;
