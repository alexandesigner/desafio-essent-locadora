import { z } from 'zod';
import { MovieWhereInputObjectSchema } from './MovieWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieListRelationFilter> = z
  .object({
    every: z.lazy(() => MovieWhereInputObjectSchema).optional(),
    some: z.lazy(() => MovieWhereInputObjectSchema).optional(),
    none: z.lazy(() => MovieWhereInputObjectSchema).optional()
  })
  .strict();

export const MovieListRelationFilterObjectSchema = Schema;
