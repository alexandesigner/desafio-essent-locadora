import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateManyInput> = z
  .object({
    id: z.number().optional(),
    movie_id: z.number(),
    person_id: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const MovieCastCreateManyInputObjectSchema = Schema;
