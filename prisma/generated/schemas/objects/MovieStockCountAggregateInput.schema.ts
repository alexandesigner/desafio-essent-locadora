import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    movie_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    _all: z.literal(true).optional()
  })
  .strict();

export const MovieStockCountAggregateInputObjectSchema = Schema;
