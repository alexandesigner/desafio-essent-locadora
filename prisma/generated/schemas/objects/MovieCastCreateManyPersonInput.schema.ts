import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateManyPersonInput> = z
  .object({
    id: z.number().optional(),
    movie_id: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const MovieCastCreateManyPersonInputObjectSchema = Schema;
