import { z } from 'zod';
import { MoviePersonWhereInputObjectSchema } from './MoviePersonWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonRelationFilter> = z
  .object({
    is: z
      .lazy(() => MoviePersonWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MoviePersonWhereInputObjectSchema)
      .optional()
      .nullable()
  })
  .strict();

export const MoviePersonRelationFilterObjectSchema = Schema;
