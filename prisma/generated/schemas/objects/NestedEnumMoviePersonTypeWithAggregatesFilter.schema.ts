import { z } from 'zod';
import { MoviePersonTypeSchema } from '../enums/MoviePersonType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMoviePersonTypeFilterObjectSchema } from './NestedEnumMoviePersonTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumMoviePersonTypeWithAggregatesFilter> =
  z
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
          z.lazy(
            () => NestedEnumMoviePersonTypeWithAggregatesFilterObjectSchema
          )
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumMoviePersonTypeFilterObjectSchema)
        .optional(),
      _max: z.lazy(() => NestedEnumMoviePersonTypeFilterObjectSchema).optional()
    })
    .strict();

export const NestedEnumMoviePersonTypeWithAggregatesFilterObjectSchema = Schema;
