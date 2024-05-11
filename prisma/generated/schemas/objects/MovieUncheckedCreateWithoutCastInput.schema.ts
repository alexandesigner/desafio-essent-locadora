import { z } from 'zod';
import { MovieStockUncheckedCreateNestedManyWithoutMovieInputObjectSchema } from './MovieStockUncheckedCreateNestedManyWithoutMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieUncheckedCreateWithoutCastInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    release_year: z.number(),
    featured_image: z.string().optional().nullable(),
    thumb_image: z.string().optional().nullable(),
    synopsis: z.string().optional().nullable(),
    rental_value: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    category_id: z.number(),
    stock: z
      .lazy(
        () => MovieStockUncheckedCreateNestedManyWithoutMovieInputObjectSchema
      )
      .optional()
  })
  .strict();

export const MovieUncheckedCreateWithoutCastInputObjectSchema = Schema;
