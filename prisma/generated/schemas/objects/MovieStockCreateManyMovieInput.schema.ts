import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateManyMovieInput> = z
  .object({
    id: z.number().optional(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional()
  })
  .strict();

export const MovieStockCreateManyMovieInputObjectSchema = Schema;
