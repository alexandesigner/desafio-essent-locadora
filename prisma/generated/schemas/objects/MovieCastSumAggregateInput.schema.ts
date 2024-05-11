import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    movie_id: z.literal(true).optional(),
    person_id: z.literal(true).optional()
  })
  .strict();

export const MovieCastSumAggregateInputObjectSchema = Schema;
