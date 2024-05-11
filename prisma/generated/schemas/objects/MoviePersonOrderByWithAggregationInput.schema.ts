import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MoviePersonCountOrderByAggregateInputObjectSchema } from './MoviePersonCountOrderByAggregateInput.schema';
import { MoviePersonAvgOrderByAggregateInputObjectSchema } from './MoviePersonAvgOrderByAggregateInput.schema';
import { MoviePersonMaxOrderByAggregateInputObjectSchema } from './MoviePersonMaxOrderByAggregateInput.schema';
import { MoviePersonMinOrderByAggregateInputObjectSchema } from './MoviePersonMinOrderByAggregateInput.schema';
import { MoviePersonSumOrderByAggregateInputObjectSchema } from './MoviePersonSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoviePersonOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    avatar: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MoviePersonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MoviePersonAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MoviePersonMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MoviePersonMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MoviePersonSumOrderByAggregateInputObjectSchema)
      .optional()
  })
  .strict();

export const MoviePersonOrderByWithAggregationInputObjectSchema = Schema;
