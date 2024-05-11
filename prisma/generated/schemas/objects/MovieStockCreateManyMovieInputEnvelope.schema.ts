import { z } from 'zod';
import { MovieStockCreateManyMovieInputObjectSchema } from './MovieStockCreateManyMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockCreateManyMovieInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MovieStockCreateManyMovieInputObjectSchema),
      z.lazy(() => MovieStockCreateManyMovieInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MovieStockCreateManyMovieInputEnvelopeObjectSchema = Schema;
