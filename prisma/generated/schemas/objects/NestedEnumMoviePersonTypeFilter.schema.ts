import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumMoviePersonTypeFilter> = z
  .object({
    equals: z.lazy(() => MoviePersonTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => MoviePersonTypeSchema).array(),
        z.lazy(() => MoviePersonTypeSchema)
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => MoviePersonTypeSchema).array(),
        z.lazy(() => MoviePersonTypeSchema)
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => MoviePersonTypeSchema),
        z.lazy(() => NestedEnumMoviePersonTypeFilterObjectSchema)
      ])
      .optional()
  })
  .strict();

export const NestedEnumMoviePersonTypeFilterObjectSchema = Schema;
