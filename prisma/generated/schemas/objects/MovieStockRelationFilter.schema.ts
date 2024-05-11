import { z } from 'zod';
import { MovieStockWhereInputObjectSchema } from './MovieStockWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockRelationFilter> = z
  .object({
    is: z
      .lazy(() => MovieStockWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MovieStockWhereInputObjectSchema)
      .optional()
      .nullable()
  })
  .strict();

export const MovieStockRelationFilterObjectSchema = Schema;
