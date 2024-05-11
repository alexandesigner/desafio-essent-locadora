import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovieOrderByRelationAggregateInputObjectSchema } from './MovieOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    movies: z
      .lazy(() => MovieOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
