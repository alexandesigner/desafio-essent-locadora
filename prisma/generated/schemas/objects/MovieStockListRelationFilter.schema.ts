import { z } from 'zod';
import { MovieStockWhereInputObjectSchema } from './MovieStockWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieStockListRelationFilter> = z
  .object({
    every: z.lazy(() => MovieStockWhereInputObjectSchema).optional(),
    some: z.lazy(() => MovieStockWhereInputObjectSchema).optional(),
    none: z.lazy(() => MovieStockWhereInputObjectSchema).optional()
  })
  .strict();

export const MovieStockListRelationFilterObjectSchema = Schema;
