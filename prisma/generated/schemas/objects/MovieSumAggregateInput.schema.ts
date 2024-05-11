import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    release_year: z.literal(true).optional(),
    rental_value: z.literal(true).optional(),
    category_id: z.literal(true).optional()
  })
  .strict();

export const MovieSumAggregateInputObjectSchema = Schema;
