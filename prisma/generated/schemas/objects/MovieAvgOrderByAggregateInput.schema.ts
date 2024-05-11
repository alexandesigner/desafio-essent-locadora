import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    release_year: z.lazy(() => SortOrderSchema).optional(),
    rental_value: z.lazy(() => SortOrderSchema).optional(),
    category_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const MovieAvgOrderByAggregateInputObjectSchema = Schema;
