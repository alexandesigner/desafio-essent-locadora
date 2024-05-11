import { z } from 'zod';
import { MovieCreateManyCategoryInputObjectSchema } from './MovieCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MovieCreateManyCategoryInputObjectSchema),
      z.lazy(() => MovieCreateManyCategoryInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MovieCreateManyCategoryInputEnvelopeObjectSchema = Schema;
