import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovieCastCountOrderByAggregateInputObjectSchema } from './MovieCastCountOrderByAggregateInput.schema';
import { MovieCastAvgOrderByAggregateInputObjectSchema } from './MovieCastAvgOrderByAggregateInput.schema';
import { MovieCastMaxOrderByAggregateInputObjectSchema } from './MovieCastMaxOrderByAggregateInput.schema';
import { MovieCastMinOrderByAggregateInputObjectSchema } from './MovieCastMinOrderByAggregateInput.schema';
import { MovieCastSumOrderByAggregateInputObjectSchema } from './MovieCastSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovieCastOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    movie_id: z.lazy(() => SortOrderSchema).optional(),
    person_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MovieCastCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MovieCastAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MovieCastMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MovieCastMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z.lazy(() => MovieCastSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const MovieCastOrderByWithAggregationInputObjectSchema = Schema;
