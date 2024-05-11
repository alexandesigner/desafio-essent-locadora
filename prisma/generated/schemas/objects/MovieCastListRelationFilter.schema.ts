import { z } from 'zod';
import { MovieCastWhereInputObjectSchema } from './MovieCastWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastListRelationFilter> = z
  .object({
    every: z.lazy(() => MovieCastWhereInputObjectSchema).optional(),
    some: z.lazy(() => MovieCastWhereInputObjectSchema).optional(),
    none: z.lazy(() => MovieCastWhereInputObjectSchema).optional()
  })
  .strict();

export const MovieCastListRelationFilterObjectSchema = Schema;
