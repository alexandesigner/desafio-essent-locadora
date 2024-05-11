import { z } from 'zod';
import { MovieWhereInputObjectSchema } from './MovieWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieRelationFilter> = z
  .object({
    is: z
      .lazy(() => MovieWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MovieWhereInputObjectSchema)
      .optional()
      .nullable()
  })
  .strict();

export const MovieRelationFilterObjectSchema = Schema;
