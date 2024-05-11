import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovieStockScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MovieStockScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    OR: z
      .lazy(() => MovieStockScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovieStockScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MovieStockScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    movie_id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
  })
  .strict();

export const MovieStockScalarWhereWithAggregatesInputObjectSchema = Schema;
