import { z } from 'zod';
import { MovieCastCreateManyPersonInputObjectSchema } from './MovieCastCreateManyPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastCreateManyPersonInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MovieCastCreateManyPersonInputObjectSchema),
      z.lazy(() => MovieCastCreateManyPersonInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MovieCastCreateManyPersonInputEnvelopeObjectSchema = Schema;
