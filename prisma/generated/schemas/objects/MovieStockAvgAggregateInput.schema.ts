import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    movie_id: z.literal(true).optional()
  })
  .strict();

export const MovieStockAvgAggregateInputObjectSchema = Schema;
