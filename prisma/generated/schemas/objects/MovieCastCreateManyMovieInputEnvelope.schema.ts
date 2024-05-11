import { z } from 'zod';
import { MovieCastCreateManyMovieInputObjectSchema } from './MovieCastCreateManyMovieInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateManyMovieInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MovieCastCreateManyMovieInputObjectSchema),
      z.lazy(() => MovieCastCreateManyMovieInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MovieCastCreateManyMovieInputEnvelopeObjectSchema = Schema;
